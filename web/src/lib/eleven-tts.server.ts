// Server only. Never import this from browser code; call `speakWithVoice` from eleven-tts.functions.ts.
//
// This is the one place that spends ElevenLabs credits, so it is deliberately strict:
//   1. Only lines the app itself can speak are accepted (built from the same story data the app uses).
//   2. Only the five friends' own voices are accepted.
//   3. Repeats are served from a small cache and cost nothing.
//   4. Per-client and global rate limits apply to anything that would spend credits.
//   5. The key comes from the ELEVENLABS_API_KEY environment variable only. No key, no voice.
//
// The limits live in server memory, so on a serverless host they apply per warm instance. They slow
// abuse and cap damage per instance; the hard ceiling on spend is the usage limit set in the
// ElevenLabs account itself.
import { ADVENTURES, CREW, storiesFor } from "@/lib/crew";
import { TOGETHER, pageLine } from "@/lib/voice";

export const LIMITS = {
  requestsPerClientPerMinute: 60, // any request, cached or not (bandwidth)
  voicePerClientPerMinute: 20, // requests that spend credits
  voicePerClientPerDay: 300,
  voiceGlobalPerMinute: 60,
  voiceGlobalPerDay: 2000,
  cacheEntries: 60,
  maxTrackedClients: 5000,
  maxTextLength: 1400,
};

const normalize = (s: string) => s.replace(/\s+/g, " ").trim();

// ---- 1. the lines the app can speak ----------------------------------------------------------
let known: Set<string> | null = null;

/** Every line the browser may ask for. Anything else is refused, whatever its voice id. */
export function knownLines(): Set<string> {
  if (known) return known;
  const set = new Set<string>([normalize(TOGETHER), normalize("The mic is off. Tap Moon or Sleep.")]);
  for (const friend of CREW) {
    for (const key of ["hello", "hug", "goodnight", "moon", "sleep", "kind", "line", "quest"] as const) {
      if (friend[key]) set.add(normalize(friend[key]));
    }
  }
  for (const adventure of ADVENTURES) {
    set.add(normalize(adventure.text));
    for (const choice of adventure.choices) set.add(normalize(choice.end));
  }
  for (const friend of CREW) {
    for (const story of storiesFor(friend.id)) {
      for (const beat of Object.values(story.beats)) {
        if (!beat.text) continue;
        const all = beat.choices ?? [];
        const calm = all.filter((choice) => !choice.playful); // the "skip the silly choices" setting
        for (const choices of [all, calm]) {
          set.add(normalize(pageLine(beat.text, beat.play ? undefined : choices, Boolean(beat.play))));
        }
      }
    }
  }
  known = set;
  return set;
}

// ---- 4. rate limits ---------------------------------------------------------------------------
type Bucket = { minute: number[]; dayKey: string; dayCount: number };
const newBucket = (): Bucket => ({ minute: [], dayKey: "", dayCount: 0 });
const requests = new Map<string, Bucket>();
const voice = new Map<string, Bucket>();
let globalVoice = newBucket();

function fresh(b: Bucket, now: number) {
  const dayKey = new Date(now).toISOString().slice(0, 10);
  if (b.dayKey !== dayKey) {
    b.dayKey = dayKey;
    b.dayCount = 0;
  }
  b.minute = b.minute.filter((t) => now - t < 60_000);
}

function room(b: Bucket, perMinute: number, perDay: number, now: number): boolean {
  fresh(b, now);
  return b.minute.length < perMinute && b.dayCount < perDay;
}

function spend(b: Bucket, now: number) {
  b.minute.push(now);
  b.dayCount += 1;
}

function bucketFor(map: Map<string, Bucket>, client: string): Bucket {
  let b = map.get(client);
  if (!b) {
    if (map.size >= LIMITS.maxTrackedClients) map.delete(map.keys().next().value as string);
    b = newBucket();
    map.set(client, b);
  }
  return b;
}

// ---- 3. cache ---------------------------------------------------------------------------------
const cache = new Map<string, string>();

function cached(key: string): string | undefined {
  const hit = cache.get(key);
  if (hit === undefined) return undefined;
  cache.delete(key);
  cache.set(key, hit); // most recently used goes last
  return hit;
}

function remember(key: string, audio: string) {
  cache.set(key, audio);
  while (cache.size > LIMITS.cacheEntries) cache.delete(cache.keys().next().value as string);
}

/** Test helper: forget all limiter and cache state. */
export function resetVoiceStateForTests() {
  requests.clear();
  voice.clear();
  globalVoice = newBucket();
  cache.clear();
}

// ---- 5. the key -------------------------------------------------------------------------------
function apiKey(): string {
  const key = process.env.ELEVENLABS_API_KEY?.trim();
  if (!key) throw new Error("Voice is not configured");
  return key;
}

type Context = { client?: string; now?: number; fetchImpl?: typeof fetch };

/** Turns one authored line into speech in one of the friends' voices. Returns base64 mp3. */
export async function synthesize(
  voiceId: string,
  rawText: string,
  ctx: Context = {},
): Promise<{ audio: string }> {
  const text = normalize(rawText).slice(0, LIMITS.maxTextLength);
  const client = ctx.client || "unknown";
  const now = ctx.now ?? Date.now();

  // 1 + 2: only the friends' voices, only lines the app can speak
  if (!CREW.some((friend) => friend.voiceId === voiceId) || !knownLines().has(text)) {
    throw new Error("Unknown line");
  }
  // 5: no key means the feature is off. Nothing is counted and nothing leaves the server.
  const key = apiKey();

  // any request counts toward the bandwidth limit
  const req = bucketFor(requests, client);
  if (!room(req, LIMITS.requestsPerClientPerMinute, Number.MAX_SAFE_INTEGER, now)) {
    throw new Error("Too many requests");
  }
  spend(req, now);

  // 3: a repeat costs nothing
  const cacheKey = `${voiceId}|${text}`;
  const hit = cached(cacheKey);
  if (hit) return { audio: hit };

  // 4: only a call that spends credits is limited per client and globally
  const mine = bucketFor(voice, client);
  if (
    !room(mine, LIMITS.voicePerClientPerMinute, LIMITS.voicePerClientPerDay, now) ||
    !room(globalVoice, LIMITS.voiceGlobalPerMinute, LIMITS.voiceGlobalPerDay, now)
  ) {
    throw new Error("Too many requests");
  }
  spend(mine, now);
  spend(globalVoice, now);

  const res = await (ctx.fetchImpl ?? fetch)(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {
      "xi-api-key": key,
      "content-type": "application/json",
      accept: "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: { stability: 0.32, similarity_boost: 0.75, style: 0.72, use_speaker_boost: true },
    }),
  });
  if (!res.ok) throw new Error("Voice did not answer");
  const audio = Buffer.from(await res.arrayBuffer()).toString("base64");
  remember(cacheKey, audio);
  return { audio };
}
