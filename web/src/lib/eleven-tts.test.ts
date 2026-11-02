import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { beforeEach, describe, it } from "node:test";
import { CREW, ADVENTURES, answerFor, storiesFor } from "@/lib/crew";
import { pageLine } from "@/lib/voice";
import { LIMITS, knownLines, resetVoiceStateForTests, synthesize } from "@/lib/eleven-tts.server";

const lumo = CREW.find((c) => c.id === "lumo")!;
const lines = [...knownLines()];

function fakeFetch() {
  const calls: { url: string; key: string; text: string }[] = [];
  const impl = (async (url: string, init: { headers: Record<string, string>; body: string }) => {
    calls.push({ url, key: init.headers["xi-api-key"], text: JSON.parse(init.body).text });
    return { ok: true, arrayBuffer: async () => new TextEncoder().encode("mp3").buffer } as Response;
  }) as unknown as typeof fetch;
  return { calls, impl };
}

beforeEach(() => {
  resetVoiceStateForTests();
  process.env.ELEVENLABS_API_KEY = "test-key";
});

describe("the allow-list", () => {
  it("covers everything the app can speak", () => {
    const set = knownLines();
    assert.ok(set.size > 50);
    for (const friend of CREW) for (const k of ["hello", "hug", "goodnight", "moon", "sleep", "kind", "line", "quest"] as const) {
      assert.ok(set.has(friend[k].replace(/\s+/g, " ").trim()), `${friend.id}.${k}`);
    }
    for (const said of ["the moon", "i am scared", "let's play", "i love you", "hello"]) {
      assert.ok(set.has(answerFor("luna", said).replace(/\s+/g, " ").trim()), said);
    }
    for (const a of ADVENTURES) {
      assert.ok(set.has(a.text.replace(/\s+/g, " ").trim()));
      for (const c of a.choices) assert.ok(set.has(c.end.replace(/\s+/g, " ").trim()));
    }
    const beat = Object.values(storiesFor("sprout")[0].beats).find((b) => b.text && b.choices?.length)!;
    assert.ok(set.has(pageLine(beat.text, beat.play ? undefined : beat.choices, Boolean(beat.play)).replace(/\s+/g, " ").trim()));
  });

  it("never needs to cut an authored line short", () => {
    for (const line of lines) assert.ok(line.length <= LIMITS.maxTextLength, line.slice(0, 40));
  });

  it("refuses text the app never speaks, without calling ElevenLabs", async () => {
    const { calls, impl } = fakeFetch();
    await assert.rejects(synthesize(lumo.voiceId, "Read me anything I like.", { fetchImpl: impl }), /Unknown line/);
    await assert.rejects(synthesize(lumo.voiceId, lumo.hello + " And more.", { fetchImpl: impl }), /Unknown line/);
    assert.equal(calls.length, 0);
  });

  it("refuses a voice that is not one of the five friends", async () => {
    const { calls, impl } = fakeFetch();
    await assert.rejects(synthesize("someOtherVoiceId", lumo.hello, { fetchImpl: impl }), /Unknown line/);
    assert.equal(calls.length, 0);
  });
});

describe("spending", () => {
  it("speaks a known line with the server key", async () => {
    const { calls, impl } = fakeFetch();
    const out = await synthesize(lumo.voiceId, lumo.hello, { client: "a", fetchImpl: impl });
    assert.equal(out.audio, Buffer.from("mp3").toString("base64"));
    assert.equal(calls.length, 1);
    assert.equal(calls[0].key, "test-key");
    assert.ok(calls[0].url.endsWith(`/text-to-speech/${lumo.voiceId}`));
  });

  it("serves a repeat from the cache for free", async () => {
    const { calls, impl } = fakeFetch();
    await synthesize(lumo.voiceId, lumo.hug, { client: "a", fetchImpl: impl });
    await synthesize(lumo.voiceId, lumo.hug, { client: "b", fetchImpl: impl });
    assert.equal(calls.length, 1);
  });

  it("limits how often one client can spend credits", async () => {
    const { calls, impl } = fakeFetch();
    const now = Date.UTC(2026, 9, 28, 12, 0, 0);
    let refused = 0;
    for (let i = 0; i < LIMITS.voicePerClientPerMinute + 5; i++) {
      try {
        await synthesize(lumo.voiceId, lines[i], { client: "one", now, fetchImpl: impl });
      } catch (e) {
        assert.match(String(e), /Too many requests/);
        refused += 1;
      }
    }
    assert.equal(calls.length, LIMITS.voicePerClientPerMinute);
    assert.equal(refused, 5);
    // a minute later the same client can speak again
    await synthesize(lumo.voiceId, lines[100], { client: "one", now: now + 61_000, fetchImpl: impl });
    assert.equal(calls.length, LIMITS.voicePerClientPerMinute + 1);
  });

  it("limits total spend across many clients", async () => {
    const { calls, impl } = fakeFetch();
    const now = Date.UTC(2026, 9, 28, 12, 0, 0);
    let ok = 0;
    for (let i = 0; i < LIMITS.voiceGlobalPerMinute + 10; i++) {
      try {
        await synthesize(lumo.voiceId, lines[i], { client: `client-${i}`, now, fetchImpl: impl });
        ok += 1;
      } catch (e) {
        assert.match(String(e), /Too many requests/);
      }
    }
    assert.equal(ok, LIMITS.voiceGlobalPerMinute);
    assert.equal(calls.length, LIMITS.voiceGlobalPerMinute);
  });

  it("is off when no key is configured, and counts nothing", async () => {
    delete process.env.ELEVENLABS_API_KEY;
    const { calls, impl } = fakeFetch();
    await assert.rejects(synthesize(lumo.voiceId, lumo.hello, { fetchImpl: impl }), /Voice is not configured/);
    assert.equal(calls.length, 0);
  });

  it("does not cache a failed ElevenLabs call", async () => {
    const failing = (async () => ({ ok: false }) as Response) as unknown as typeof fetch;
    await assert.rejects(synthesize(lumo.voiceId, lumo.hello, { fetchImpl: failing }), /Voice did not answer/);
    const { calls, impl } = fakeFetch();
    await synthesize(lumo.voiceId, lumo.hello, { fetchImpl: impl });
    assert.equal(calls.length, 1);
  });
});

describe("the key", () => {
  it("is read from the environment only; the sandbox key-file fallback is gone", () => {
    const source = readFileSync(new URL("./eleven-tts.server.ts", import.meta.url), "utf8");
    assert.doesNotMatch(source, /readFileSync|node:fs|\.grok|eleven\.key/);
    assert.match(source, /process\.env\.ELEVENLABS_API_KEY/);
  });
});
