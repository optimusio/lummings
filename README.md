# The Lummings

Little friends from a brighter tomorrow.

**Public names, locked:** Lumo · Luna · Sprout · Nori · Moki.

Lila and Pip are retired. Some files still use those ids (`lila.json`, `pip-portrait.png`). That is storage, not the name a child should see.

Read [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md) before changing names or art. Do not generate new character portraits. The locked pictures are the PNGs in the repo root (`lumo-portrait.png`, `lila-portrait.png` is Luna, `pip-portrait.png` is Sprout, `nori-portrait.png`, `moki-portrait.png`).

One product. Several older builds are still in this repo. The one to ship is the bedtime web app.

## What to run

Bedtime web app. Stories, hugs, a parent gate, and the intro recordings.

```bash
cd web
npm install
npm run dev
```

Opens on port 8080. Portraits and intro mp3s are in [`public/`](public/) (`public/crew`, `public/voices`). There is no `public/voices/el` yet.

Flutter companion, older:

```bash
cd app
flutter pub get
flutter run
```

Python personality engine, local model, no cloud required:

```bash
pip install -e .
python -m lummings.cli --persona lumo
python -m lummings.server --port 8511
```

Default model endpoint is Ollama at `http://127.0.0.1:11434/v1` (`qwen2.5-3b-instruct`).

Family pages under `docs/companion/` are a static preview, not the app to sell:

```bash
python -m http.server 8512 --bind 127.0.0.1 --directory docs
```

Then open `http://127.0.0.1:8512/companion/`.

`site/` is a short public page. It is not a second product.

## What is in the repo

| Path | What it is |
|---|---|
| `web/` | Bedtime web app (React, TypeScript, Vite). This is the product. |
| `public/` | Portraits and intro voice recordings for that app. |
| `app/` | Flutter companion. Care, adventures, parent screen, Heartlight Plus mock. |
| `src/lummings/` | Python engine: mood, memory, sanitising, five persona files. |
| `crates/` | Rust device runtime stubs for a future Pi. Not a product yet. |
| `docs/` | Brand, marketing pages, and the static companion preview. |
| `site/` | Small static page. |
| `brand/` | Name lock, visual lock, character bible. |
| `modelfiles/` | Local model prompts. Some filenames still say Lila and Pip. |
| `imagine_videos/` | Source clips the intro recordings were taken from. |

## Voices

The pages play the mp3s in `public/voices`. If a line has no recording, it stays silent. No browser speech.

ElevenLabs agents exist for the five characters. Their ids are in [`web/src/lib/eleven-agents.json`](web/src/lib/eleven-agents.json). They are not wired into the app yet.

## Tests

```bash
make test
cd web && npm test
```

Python tests cover the engine. The web tests cover bond, rest, and the rule that a line without a recording does not speak.

## Privacy

The bedtime app keeps the bond in the browser. Nothing is sent to an account. The Python engine is meant to run on the machine in front of the child. No ads. No requirement to create a login to hear a story.

## Not done

- The web app is not yet the only face of the repo. Flutter, the docs companion, and the Python engine are still here.
- Hug, sleep, and goodnight lines have no recordings.
- The ElevenLabs agents are not connected to the pages.
- The Pi crate does not run a toy.
- `web/` still carries app-builder scaffolding (auth and preview scripts) that the bedtime screens do not need.

## License

Code is MIT. See `LICENSE`. The names Lummings, Lumo, Luna, Sprout, Nori, Moki, the story, and the character art are not covered by that MIT grant.

Maintainer: [@optimusio](https://github.com/optimusio), Sydney.
