# Roadmap

*Last updated 27 October 2026. Status comes from a hands-on audit of this repo and of Pixel (`C:\Users\KING\projects\pixel`), not from older plans. Planning ranges are estimates, not commitments.*

## The picture

**The Lummings are a world with five friends (Lumo, Luna, Sprout, Nori, Moki) delivered through several products that should share one foundation.** The bedtime web app is one small product line. The larger ambition is the Living Lummings creative companion: a recognisable character you talk with, change the look of, and make illustrations, films and stories with, built on the local-first studio in Pixel.

```
                    WORLD & CANON  (names, art, voices, personalities)
                                   |
        +--------------+-----------+-----------+----------------+
        |              |                       |                |
   Bedtime web     Living Lummings        Family companion   Device (later)
   app (web/)      creative companion     (docs/companion,   (Rust crates,
   small, near     (docs/app + Python     Flutter app)       Pi, plush)
   launch          gateway :8511)
                          |
                  PIXEL studio (:8520)  local image/video/3D generation,
                  character registry, media jobs, identity benchmarks
```

Shared foundations every line needs: the **character registry** (one source of truth), the **voice set**, the **media job service** (queue, budget, review), and **parent controls and privacy**.

## Product lines

| # | Line | What it is | Status (verified) | Next gate |
|---|---|---|---|---|
| A | **World and canon** | Names, locked art, lore, brand bible, palette | **Done.** One Sprout (quiet garden sprite), one palette, 93 Python tests incl. a canon guard | Keep guard tests green; decide Lumo's public label |
| B | **Bedtime web app** (`web/`) | Stories, hugs, a bond that grows, parent PIN, recorded voices. Browser-only, no account | Typecheck, lint, 9 tests and build pass; 0 audit vulnerabilities; no third-party requests; scaffolding, login and fake paid tier removed. Needs voices, phone QA, hosting address | Voices and phone QA, then pilot (section "Bedtime") |
| C | **Living Lummings creative companion** (`docs/app`, `src/lummings`, gateway on :8511) | Talk to a character, change its look, create images and films, keep discoveries (Pika.me-style, local-first) | M0 baseline repaired. Media library, job queue, review/accept, spend guard (default budget $0) built. Generation is **off by default**. Live avatar is research only | Milestones M1-M4 in `docs/living-lummings/ROADMAP.md` (about 7-10 working weeks of engineering) |
| D | **Pixel studio** (separate repo) | Local character and media studio: designer, local image and video generation on the GPU, adaptive themes, character manifest. Supervised service on :8520 | Working. 59 tests pass. Benchmarks recorded. 3D stage and real-time presence are next | P1-P3 in Pixel's `docs/INTEGRATION.md`; integration into Lummings only after its gates |
| E | **Family companion** (`docs/companion`, `app/` Flutter) | Five authored adventures, parent dashboard, explorer profiles, notebook; Flutter version with care and adventures | Static preview works; Flutter not exercised. Contains a fake paid "Heartlight Plus" | Decide: fold into B/C or retire |
| F | **Voices and agents** | Recorded intros, five new ElevenLabs voices, five live-agent ids, persona engine and Ollama models | 12 recordings; 5 voices designed; agent ids unreachable from this audit; Sprout's fine-tune data rewritten (the other four sets are stale) | Voice decision, then record the 25 missing lines |
| G | **Device** (`crates/`, Pi Zero 2 W, plush) | Small toy running the persona engine | Stub only. Deferred until software shows sustained use | Revisit after a pilot |
| H | **Marketing and commerce** (`docs/`, `marketing/`, shop, Kickstarter plan) | Site, press kit, campaigns, lead magnets | Home page and privacy policy fixed; hardware campaign docs and drafts flagged; the `/shop/` storefront and two app pages still need decisions | Resolve the open items in `docs/LAUNCH_READINESS.md` section 3 before advertising |

## Recommended order (for the owner to confirm)

1. **Truth and foundation (about 1 week).** Fix the public claims (H). Make the character registry the single source (A to B, C, D, E). Strip the web scaffolding (B). Close the high-severity security alert. Add web and Python to CI.
2. **Voices (about 1 week).** Choose canonical voices, record the missing lines, keep silent-if-missing.
3. **Ship the smallest real thing: bedtime (B)** to a pilot of 10-15 families. It is small, safe and nearly ready, and it produces the first real evidence about use and willingness to pay.
4. **Build the flagship in parallel: Living Lummings (C) on Pixel (D).** M1 to M4: character presence, conversation, a complete creative slice, voice and pilot hardening. Keep generation off or tightly budgeted until the pilot gates are met.
5. **Then widen:** hosted family beta (M6), the rest of the crew and story production (M5), and only then the live-avatar research (R1) and the device (G).

## Known gaps (found in the fix pass, not yet fixed)

- Fine-tuning data for **Lumo, Luna, Nori and Moki** (`src/lummings/dialogue/*_sft.jsonl`) predates their current persona files (for example Lumo's data teaches the old ALL-CAPS rambler; his persona is now a relaxed gamer). Regenerate their answers before any fine-tuning run. Sprout's set has been rewritten.
- `docs/app` and `docs/companion` load the Tailwind CDN, Google Fonts and a confetti script from other companies. Bundle them before a children's launch.
- The Rust crates are 3 to 5 line stubs and the Flutter app has no toolchain here. Neither is verified.
- A third naming scheme (`lumi`, `piko`, `nomi`) survives in `src/lummings/sprites.py`, and `lila` / `pip` remain internal ids in about 58 files (an intentional compatibility mapping).

## Cross-cutting gates before any paid launch

- [ ] Public site and app say only what is true today (`docs/LAUNCH_READINESS.md`).
- [ ] Brand clearance for Lummings and the five names, in each market.
- [ ] Qualified review of child safety, privacy, parent controls and any generated media.
- [ ] Pilot evidence: voluntary return at weeks 2 and 4, no unresolved critical safety issue.
- [ ] A deliverable offer with refund and support, and running costs measured (hosting, voice, image/video generation).
- [ ] For generated media: provider terms, retention and deletion verified, and a spend cap on by default.

## Bedtime web app (line B): checklist

**Done**
- [x] Package renamed; login, database, preview and Grok builder code removed; 44 unused dependencies dropped; the build no longer runs a migration.
- [x] Fake Heartlight Plus tier removed; everything is free.
- [x] Typecheck, lint and tests in CI (`make web-check`). The `zod` alert is gone (`npm audit`: 0).
- [x] No third-party requests: fonts bundled, remote script removed, a privacy guard test added.
- [x] Real "Add to home screen": manifest and icons.

**Now**
1. Decide the hosting address, then set `VITE_SITE_URL` so link previews get an absolute image.
2. Finish the recordings (several are now in `public/voices`). Lines without a recording fall back to a server call to ElevenLabs; the endpoint is now hardened (known lines only, rate limits, cache, key from the environment); set an ElevenLabs usage limit as the hard ceiling. Browser speech stays off.
3. Phone QA: install to the home screen, hear an intro, open a story, hit the parent gate. Log defects.
4. Safety review items: the first person to open the grown-up screen can set the PIN (a child could do so before a parent), and the PIN is stored unhashed.

**Next**
- Offline play (portraits and intros cached), a parent page that lists exactly what is stored, one landing page with one button, and the four-week pilot.

## Living Lummings (line C) and Pixel (line D): checklist

**Now**
- Run the existing 91 Python tests and Pixel's 59 on every change (CI covers Python only).
- Keep generation off by default. Any paid provider needs a positive daily budget, a per-job quote and explicit consent (already built).
- Close the open gates from the status log: worker leases, provider status reconciliation, retention and deletion terms, a full phone-size browser run.

**Next**
- Character registry as executable source of truth in both repos (Pixel's `character.json` and Lummings' registry), so they stop drifting.
- M1 character presence: five identities, Lumo's stage, three approved looks with undo.
- M2 to M3: scoped chat, typed skills, a complete reference-conditioned image-to-video slice with review and a private gallery.
- Pixel P1: funded provider smoke test, reference-image editing, real identity benchmark.

**Later**
- Voice playback and interruption (M4), the full crew and story production (M5), a hosted family beta with authentication and quotas (M6), then live-avatar research (R1) before any integration (M7).

## Pixel video in the Lummings (owner priority)

The goal: the Lummings use Pixel's video generation, including live presence, **once it works correctly**. Two stages with different readiness:

**Stage 1: generated clips (works in Pixel today).** Local LTX-Video 2B through ComfyUI on the GPU, saved as MP4 with ffmpeg. Reference-conditioned renders stayed on-model 8 of 9 times at 65 frames (versus 4 of 9 at 33), judged by Pixel's identity scorer. This is queued generation, not live.

Gates before it enters the Lummings:
- [ ] Identity benchmark run on **each of the five Lummings' locked portraits**, not just Pixel's own character (text-only prompts are not enough for continuity).
- [ ] Real jobs complete, save, cancel and recover, with error handling verified (Pixel's own list in `docs/INTEGRATION.md`).
- [ ] **GPU sharing plan.** One RTX 3090 serves Ollama (the resident model alone holds about 16 GB), ComfyUI and Hermes. Generation must unload the chat model first (`keep_alive: 0`) and reload it after, or run on a schedule. Measure real clip time, VRAM and what happens to chat while a clip renders.
- [ ] Child-audience policy: output review before a child sees anything, no autoplay, parent controls, and a clear "made by the app" label.
- [ ] Profile and family isolation (Pixel today has one trusted local workspace).

**Stage 2: live video presence (not built).** Pixel lists streaming video as "Not connected". Its milestone 4 is to evaluate SoulX-FlashHead or an equivalent for streaming output. Do not claim support until these are measured:
- [ ] A candidate model runs on this hardware with latency low enough for conversation (target set by testing, not assumed).
- [ ] Identity stays stable across a long session and across all five characters.
- [ ] Listening behaviour, interruption and lip sync with the recorded voices work.
- [ ] Spend and GPU limits hold under concurrent use.

Until Stage 2 passes, the Lummings show a living character with Pixel's procedural motion and the existing recordings, and say so honestly. Live-avatar work sits behind R1 (research) and M7 in `docs/living-lummings/ROADMAP.md`.

## Later (all lines)

- A small device, only if software shows sustained use. The Python engine becomes its on-device brain, not a fourth app.
- Shop, therapy and school packs stay research notes in `AI_Toy_Distribution_Research/` until a family is paying.
- Wire live ElevenLabs agents only after the safety review, and in a way that does not surprise a parent.

## Decisions needed

0. **Web roles vs the brand bible.** `web/src/lib/crew.ts` labels the friends Storyweaver, Mystical Gamer Captain, Moon-Tide Guardian and Glitch Gremlin; the brand bible says Spooky Poet, Hyperfixation Gremlin, Cosmic Weirdo and Chaos Gremlin. Recent work is making Luna brighter and younger. Pick one set and I will align the other. (Sprout is settled: Quiet Garden Sprite.)

1. **Priority.** Is the order above right? In particular, is the flagship the Living Lummings creative companion (C) with bedtime (B) as the quick first release?
2. **Voices.** The 12 recorded intros came from video clips; five new voices were designed on 27 October. A child could hear two different Sprouts. Re-record the intros in the new voices (recommended), or keep the old ones.
3. **ElevenLabs agents.** Which account owns the five agent ids in `web/src/lib/eleven-agents.json`, or create new ones?
4. **Pixel and Lummings.** When do the proven Pixel features move in? (Pixel's own rule is "Pixel first, Lummings later".) Owner priority: use Pixel's video generation, including live presence, once it works correctly; see "Pixel video in the Lummings".
5. **Family companion (E).** Fold into B and C, or retire?
6. **Lumo's public label, hosting address, contact email.**
7. **The `/shop/` storefront** ("The Indie Forge": Ultra Studio, SHInEyVErSE and a Lummings asset pack, $29 to $499 AUD). It lives under the Lummings site and its copy calls the Lummings "local-AI characters, no cloud". Keep it here, move it, or retire it? Its Lummings claims must match the product either way.

## Done

- Names locked: Lumo, Luna, Sprout, Nori, Moki. Retired names removed from public copy, the character API and brand docs.
- Portraits locked. Do not generate new ones.
- Sprout set as the quiet garden sprite across canon, persona, Modelfile and pages; one colour palette; canon guard tests.
- Intro recordings extracted into `public/voices`.
- Bedtime web app committed under `web/`; typechecks, lints, builds and passes its tests.
- Living Lummings baseline (M0), media library, job queue, review workflow and spend guard built.
- Pixel studio working and supervised as a service.
- Five ElevenLabs voices designed for the five friends.
- Executive summary: `docs/EXECUTIVE_SUMMARY.md`; launch readiness: `docs/LAUNCH_READINESS.md`.
- Fix pass (27 October 2026; also repaired a production build that the latest voice commits had broken): web scaffolding and the Grok builder layer removed; privacy, PWA and canon guard tests added; CI now runs Python, web and lint; 75 corrupted links repaired; home page claims corrected; privacy policy rewritten; Sprout's 100 training pairs rewritten in the quiet voice; Python lint clean.
- Voice endpoint hardened (28 October 2026): known authored lines only, the five friends' voices only, response cache, per-client and global rate limits, key from `ELEVENLABS_API_KEY` only (sandbox key-file fallback removed); 11 tests, each protection verified by breaking it, and checked end to end in the production build.
