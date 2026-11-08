import { type CrewId, crewById } from "@/lib/crew";

const INTRO: Record<CrewId, string> = {
  lumo: "/voices/lumo.mp3",
  luna: "/voices/luna.mp3",
  sprout: "/voices/sprout.mp3",
  nori: "/voices/nori.mp3",
  moki: "/voices/moki.mp3",
};

/** Shared line from the intro. Played with the crew recording, not a browser voice. */
export const TOGETHER = "Let's quest together, growing together.";

/** Lines spoken in that character's ElevenLabs voice. */
const OWN: Record<CrewId, Record<string, string>> = {
  sprout: {
    hug: "/voices/sprout-hug.mp3",
    goodnight: "/voices/sprout-goodnight.mp3",
    moon: "/voices/sprout-moon.mp3",
    sleep: "/voices/sprout-sleep.mp3",
    kind: "/voices/sprout-kind.mp3",
    line: "/voices/sprout-trail.mp3",
    quest: "/voices/sprout-trail.mp3",
    song: "/voices/sprout-song.mp3",
    encore: "/voices/sprout-encore.mp3",
  },
  luna: {
    hug: "/voices/luna-hug.mp3",
    goodnight: "/voices/luna-goodnight.mp3",
    moon: "/voices/luna-moon.mp3",
    sleep: "/voices/luna-sleep.mp3",
    kind: "/voices/luna-kind.mp3",
    line: "/voices/luna-welcome.mp3",
    quest: "/voices/luna-welcome.mp3",
    song: "/voices/luna-song.mp3",
    encore: "/voices/luna-encore.mp3",
  },
  lumo: {
    hug: "/voices/lumo-hug.mp3",
    goodnight: "/voices/lumo-goodnight.mp3",
    moon: "/voices/lumo-moon.mp3",
    sleep: "/voices/lumo-sleep.mp3",
    kind: "/voices/lumo-crew.mp3",
    line: "/voices/lumo-crew.mp3",
    quest: "/voices/lumo-quest.mp3",
    song: "/voices/lumo-song.mp3",
    encore: "/voices/lumo-encore.mp3",
  },
  nori: {
    hug: "/voices/nori-hug.mp3",
    goodnight: "/voices/nori-goodnight.mp3",
    moon: "/voices/nori-moon.mp3",
    sleep: "/voices/nori-sleep.mp3",
    kind: "/voices/nori-kind.mp3",
    line: "/voices/nori-line.mp3",
    quest: "/voices/nori-quest.mp3",
    song: "/voices/nori-song.mp3",
    encore: "/voices/nori-encore.mp3",
  },
  moki: {
    hug: "/voices/moki-hug.mp3",
    goodnight: "/voices/moki-goodnight.mp3",
    moon: "/voices/moki-moon.mp3",
    sleep: "/voices/moki-sleep.mp3",
    kind: "/voices/moki-chaos.mp3",
    line: "/voices/moki-line.mp3",
    quest: "/voices/moki-quest.mp3",
    song: "/voices/moki-song.mp3",
    encore: "/voices/moki-encore.mp3",
  },
};

const EXTRA: Record<string, string> = {
  [TOGETHER]: "/voices/together.mp3",
};

export function pageLine(
  text: string,
  choices?: { label: string }[],
  game?: boolean,
): string {
  const body = text.trim();
  if (game) return `${body} Ready? This page is a game, and I am grinning.`;
  const labels = (choices ?? []).map((choice) => choice.label.trim()).filter(Boolean);
  if (labels.length === 0) return `${body} That was my favourite page.`;
  if (labels.length === 1) {
    return `${body} Ooh, I love this part. Shall we ${labels[0].toLowerCase()}?`;
  }
  const last = labels[labels.length - 1].toLowerCase();
  const rest = labels
    .slice(0, -1)
    .map((label) => label.toLowerCase())
    .join(", or ");
  return `${body} Your turn, and I am so excited! Will you ${rest}, or ${last}?`;
}

export function clipFor(text: string, crew?: CrewId): string | undefined {
  if (!text) return undefined;
  if (EXTRA[text]) return EXTRA[text];
  if (!crew) return undefined;
  const friend = crewById(crew);
  if (text === friend.hello) return INTRO[crew];
  const own = OWN[crew];
  for (const key of ["hug", "goodnight", "moon", "sleep", "kind", "line", "quest", "song", "encore"] as const) {
    if (text === friend[key]) return own[key];
  }
  return undefined;
}

let current: HTMLAudioElement | null = null;
let token = 0;
const waiters = new Set<(waiting: boolean) => void>();

export function onVoiceWait(fn: (waiting: boolean) => void) {
  waiters.add(fn);
  return () => {
    waiters.delete(fn);
  };
}

function setVoiceWait(waiting: boolean) {
  waiters.forEach((fn) => fn(waiting));
}

function play(src: string, mine: number) {
  if (mine !== token || typeof window === "undefined") return;
  const audio = new Audio(src);
  current = audio;
  void audio.play().catch(() => {});
}

export function stopSpeak() {
  token += 1;
  setVoiceWait(false);
  if (typeof window !== "undefined" && window.speechSynthesis) window.speechSynthesis.cancel();
  if (current) {
    current.pause();
    current.src = "";
    current = null;
  }
}

/**
 * Plays that character's own recording when one exists.
 * Otherwise asks ElevenLabs for the same voice. Never uses the browser voice.
 */
export function speak(text: string, muted: boolean, crew?: CrewId) {
  if (muted || !text || typeof window === "undefined") return;
  stopSpeak();
  const mine = token;
  const src = clipFor(text, crew);
  if (src) {
    play(src, mine);
    return;
  }
  if (!crew) return;
  const voiceId = crewById(crew).voiceId;
  setVoiceWait(true);
  void import("@/lib/eleven-tts.server")
    .then((mod) => mod.speakWithVoice({ data: { voiceId, text } }))
    .then((res) => {
      if (mine !== token) return;
      setVoiceWait(false);
      if (!res?.audio) return;
      play(`data:audio/mpeg;base64,${res.audio}`, mine);
    })
    .catch(() => {
      if (mine === token) setVoiceWait(false);
    });
}

type Rec = {
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((ev: Event) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
};

export function canListen(): boolean {
  if (typeof window === "undefined") return false;
  const w = window as unknown as { SpeechRecognition?: unknown; webkitSpeechRecognition?: unknown };
  return Boolean(w.SpeechRecognition || w.webkitSpeechRecognition);
}

export function listen(onText: (text: string) => void, onEnd: () => void): Rec | null {
  const w = window as unknown as {
    SpeechRecognition?: new () => Rec;
    webkitSpeechRecognition?: new () => Rec;
  };
  const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
  if (!SR) return null;
  const rec = new SR();
  rec.lang = "en-AU";
  rec.onresult = (ev: Event) => {
    const event = ev as unknown as { results?: Array<Array<{ transcript?: string }>> };
    const text = event.results?.[0]?.[0]?.transcript ?? "";
    if (text) onText(text);
  };
  rec.onerror = () => onEnd();
  rec.onend = () => onEnd();
  try {
    rec.start();
  } catch {
    onEnd();
    return null;
  }
  return rec;
}

