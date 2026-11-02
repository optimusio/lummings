// Guards the promises the app makes to parents: nothing leaves the phone, the microphone stays off,
// voices are recordings only, and "add to home screen" has real first-party files behind it.
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const sourceFiles = walk(join(ROOT, "src")).filter((f) =>
  [".ts", ".tsx", ".css", ".json"].includes(extname(f)) && !f.endsWith("routeTree.gen.ts"),
);
const read = (f) => readFileSync(f, "utf8");

test("no third-party hosts or remote scripts in the app source", () => {
  // w3.org is only an XML namespace inside inline SVG, never fetched.
  const allowed = [/^https?:\/\/www\.w3\.org\//];
  // The voice fallback runs on the server, never in the browser, and is the only place allowed to name ElevenLabs.
  const serverVoice = join(ROOT, "src/lib/eleven-tts.server.ts");  // the only file that may name ElevenLabs
  for (const file of sourceFiles) {
    const text = read(file);
    for (const [url] of text.matchAll(/https?:\/\/[^\s"'`)<>]+/g)) {
      if (file === serverVoice && url.startsWith("https://api.elevenlabs.io/")) continue;
      assert.ok(allowed.some((re) => re.test(url)), `${file} references ${url}`);
    }
    assert.doesNotMatch(text, /<script[^>]+src=/i, `${file} loads a remote script`);
    assert.doesNotMatch(text, /googleapis|gstatic|grok\.(com|me)|og\.grok/i, `${file} names a tracker or builder host`);
  }
  const manifest = read(join(ROOT, "public/manifest.webmanifest"));
  assert.doesNotMatch(manifest, /https?:\/\//);
});

test("the server voice fallback is limited, keyless in source, and only the server file can reach it", () => {
  const server = read(join(ROOT, "src/lib/eleven-tts.server.ts"));
  assert.match(server, /knownLines\(\)\.has\(text\)/, "only known authored lines may be spoken");
  assert.match(server, /friend\.voiceId === voiceId/, "only the friends' own voices may be used");
  assert.match(server, /maxTextLength/, "text length must be capped");
  assert.match(server, /voiceGlobalPerDay/, "a global spend limit must exist");
  assert.doesNotMatch(server, /readFileSync|node:fs|\.grok/, "the key must come from the environment only");
  assert.doesNotMatch(server, /xi-api-key["']?\s*:\s*["'][A-Za-z0-9_-]{12,}/, "no API key may be written in source");
  for (const file of sourceFiles.filter((f) => /\.(ts|tsx)$/.test(f) && f !== join(ROOT, "src/lib/eleven-tts.server.ts"))) {
    assert.doesNotMatch(read(file), /api\.elevenlabs\.io/, `${file} calls ElevenLabs directly from the browser`);
  }
  const policy = readFileSync(join(ROOT, "..", "docs/PRIVACY_POLICY.md"), "utf8");
  assert.match(policy, /ElevenLabs/, "the privacy policy must disclose the voice fallback");
  // Browser code may only reach it through the server-function wrapper, never the .server file.
  const voice = read(join(ROOT, "src/lib/voice.ts"));
  assert.doesNotMatch(voice, /eleven-tts\.server/, "voice.ts must import eleven-tts.functions, not the .server file");
  assert.match(voice, /eleven-tts\.functions/);
});

test("the microphone is off by default, opt-in only, and the app never uses the browser voice", () => {
  const appCode = sourceFiles.filter((f) => /\.(ts|tsx)$/.test(f) && !f.endsWith(".test.ts"));
  for (const file of appCode) {
    const text = read(file);
    assert.doesNotMatch(text, /getUserMedia/, `${file} opens the microphone directly`);
    assert.doesNotMatch(text, /speechSynthesis\.speak|new SpeechSynthesisUtterance/, `${file} uses browser speech`);
    // Speech recognition (parent opt-in "Talk") must live in voice.ts only.
    if (!file.endsWith("voice.ts")) {
      assert.doesNotMatch(text, /SpeechRecognition/, `${file} uses speech recognition outside voice.ts`);
    }
  }
  const store = read(join(ROOT, "src/lib/store.ts"));
  assert.match(store, /privacy:\s*true/, "microphone privacy must default to ON (microphone off)");
});

test("web manifest and icons are real first-party files", () => {
  const manifest = JSON.parse(read(join(ROOT, "public/manifest.webmanifest")));
  assert.equal(manifest.name, "Lummings");
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.start_url, "/");
  assert.ok(manifest.icons.length >= 2);
  for (const icon of manifest.icons) {
    const file = join(ROOT, "public", icon.src);
    assert.ok(existsSync(file), `missing ${icon.src}`);
    const png = readFileSync(file);
    assert.equal(png.subarray(1, 4).toString(), "PNG", `${icon.src} is not a PNG`);
    const [w, h] = [png.readUInt32BE(16), png.readUInt32BE(20)];
    assert.equal(`${w}x${h}`, icon.sizes, `${icon.src} is ${w}x${h}, manifest says ${icon.sizes}`);
  }
  assert.ok(existsSync(join(ROOT, "public/icons/apple-touch-icon.png")));
  const root = read(join(ROOT, "src/routes/__root.tsx"));
  assert.match(root, /href: "\/manifest\.webmanifest"/);
  assert.match(root, /href: "\/icons\/apple-touch-icon\.png"/);
});

test("every crew intro has a recording on disk", () => {
  for (const id of ["lumo", "luna", "sprout", "nori", "moki"]) {
    assert.ok(existsSync(join(ROOT, "public/voices", `${id}.mp3`)), `missing public/voices/${id}.mp3`);
  }
});
