# Launch readiness: production and advertising

*Updated 27 October 2026 after a fix pass. Nothing here has been published, posted or sent. This is a working checklist, not legal advice.*

**Scope.** This audits the **bedtime web app (`web/`) and the public site and claims**. The Lummings are a larger ecosystem (Living Lummings creative companion, Pixel studio, family companion, voices, device; see `ROADMAP.md`). Each of those lines needs its own readiness pass before it is advertised. The claims audit in section 3 applies to every line, because the public pages describe all of them.

## 1. Verdict

| Question | Answer today |
|---|---|
| Can the bedtime app be deployed? | **Yes.** Typecheck, lint, tests and the production build all pass. The build has no third-party hosts in it. |
| Is it ready to advertise? | **Nearly, but not yet.** The home page is now honest. Open items remain in section 3 (the `/shop/` storefront copy, the external CDNs on two app pages, hosting address, voices). |
| Is it ready to charge for? | **No.** No pilot, no brand clearance, no safety review, no priced offer. |

## 2. Production readiness (the web app)

| Check | Before | Now |
|---|---|---|
| Typecheck (`tsc --noEmit`) | Pass | Pass |
| Lint (`eslint`) | Broken: no config file existed | Config added; passes |
| Tests | 39 of 40 passed (1 scaffolding test failing); 9 more tests were never run because of a quoting bug in the test script | 9 of 9 pass. Includes a privacy guard and a PWA guard |
| Production build | Pass, but ran a database migration step. (Commits pushed on 27 October also broke it: `voice.ts` imported a `*.server.*` file into browser code, which the framework forbids) | Pass; build is just `vite build`. The voice fallback is split into `eleven-tts.functions.ts` (callable from the browser) and `eleven-tts.server.ts` (key and ElevenLabs call, server only) |
| Package | Named `app-builder-workspace`, 58 dependencies (44 unused), login and database code, `public/__grok` | Named `lummings-bedtime`, 16 dependencies, no login or database code |
| Security alerts | 1 high-severity (`zod`) | `npm audit`: 0 vulnerabilities |
| Third-party requests | Google Fonts on every page; a remote script from `grok.com`; share images from `og.grok.me`; messaging to a Grok preview host | None from the browser. Fonts are bundled; the privacy test fails if a third-party host appears in the source. (The server voice fallback calls ElevenLabs; see below) |
| "Add to home screen" | Broken in production: the manifest was only served by the dev server, and the icon was a generic Grok placeholder | Real `manifest.webmanifest` and icons cropped from the locked Lumo portrait; verified in the build output |
| Paid tier | Fake "Heartlight Plus" gating the end-of-story page and the memory gallery | Removed. Everything is free; nothing is gated |
| CI | Ran only Rust (stub crates) and the site-link audit. **The Python tests were never run in CI.** | `make test` runs pytest and cargo; `make web-check` runs typecheck, lint, tests and build. Python suite also passes under Linux (WSL) |
| Python lint | 73 issues | 0 |
| Voice files | 12 recordings; 25 lines missing | Unchanged. Missing lines stay silent by design |
| Phone QA, offline mode | Not done | Not done (needs a real phone) |

## 3. Claims audit

Status: **Fixed** = changed in this pass. **Flagged** = marked "do not publish" but not rewritten. **Open** = still needs an owner decision or a rewrite.

| Claim or problem | Where | Status |
|---|---|---|
| "Pre-order" buttons, `$149 / $199 / $349` tiers, "ships Q4 2026", "founder's price", warranties | `docs/index.html` | **Fixed**: replaced with "Early access" (no prices, nothing for sale) |
| "They live on a Raspberry Pi", "runs entirely on-device", "no data ever leaves the toy", "buy the device once" | `docs/index.html` | **Fixed**: rewritten to describe the bedtime app truthfully |
| Hardware pre-order page ("PRE-ORDER OPEN", `$129` in the structured data, a different price from `$149`) | `docs/shop.html` | **Fixed**: replaced by a "Not for sale yet" notice |
| Waitlist form that never worked (a JavaScript syntax error) | `docs/index.html` | **Fixed** and syntax-checked; copy now says "early access", not "production" |
| 75 corrupted links, stylesheet and script tags, including all of the Living Lummings app page's scripts and styles | 13 pages under `docs/` | **Fixed**. The link audit now also detects this kind of corruption |
| **Voice endpoint** (`eleven-tts.server.ts`) was open: anyone could spend your ElevenLabs credits on any text, and it fell back to a Grok sandbox key file | `web/src/lib/` | **Fixed**: only lines the app itself can speak are accepted (built from the story data), only the five friends' voices, repeats are cached, per-client and global rate limits apply, and the key comes only from `ELEVENLABS_API_KEY`. 11 tests cover it, and each protection was deliberately broken to confirm a test catches it. **Still do**: set a usage limit in your ElevenLabs account (the hard ceiling), because the in-memory limits apply per server instance |
| Hardware campaign documents (Kickstarter, pre-order, press sheet, parent quickstart) | `docs/` | **Flagged** "archived hardware concept, do not publish" |
| Ready-to-post drafts claiming "runs entirely on-device, no cloud" | `marketing/` (6 files), `docs/demo-video-script.md` | **Flagged** "draft, do not post" |
| Privacy policy describing a toy and a companion app | `docs/PRIVACY_POLICY.md` | **Fixed**: rewritten for the bedtime app and waitlist; the old one is archived as `PRIVACY_POLICY_HARDWARE_CONCEPT.md`. Not reviewed by a lawyer |
| Personal email address published in the privacy page of the shop | `docs/shop/privacy.html` | **Open**: confirm which contact address to publish |
| **The `/shop/` storefront ("The Indie Forge")**: sells other products (Ultra Studio, SHInEyVErSE) at $29 to $499 AUD and describes the Lummings as "local-AI characters, no cloud". It loads the Tailwind CDN and Google Fonts | `docs/shop/index.html` and the lead-magnet pages | **Open**: your commerce, so not changed. Decide whether it stays under the Lummings site, and make its Lummings claims match the product |
| External CDNs (Tailwind CDN, Google Fonts, a confetti script) | `docs/app/index.html`, `docs/companion` pages | **Open**: acceptable for a developer preview, not for a children's product. Bundle them before any launch |
| "Heartlight Plus" and other purchase wording in the older Flutter and docs companion apps | `app/`, `docs/companion` | **Open**: remove or retire with those apps |
| Battery life, charging times, app-store availability, Bluetooth pairing | archived hardware documents | **Flagged**; do not use |

**Claims you can make today.** Each is backed by the code or a test.
- The bond between a child and a friend is kept in the browser on the device. No account is needed to hear a story.
- No ads, no analytics, and the app loads nothing from other companies' servers (a test enforces this).
- A parent PIN protects the grown-up page. It stays on the device. *(It is a gentle gate, not strong security: the PIN is stored unhashed.)*
- **The microphone is off by default.** A grown-up can turn on "Talk". If they do, the browser may send speech to its own speech service; the app says so. *(Do not say "the microphone is always off" or "nothing ever leaves the phone".)*
- Most voices are recordings. If a line has no recording, our server asks ElevenLabs to say it in the friend's voice; only the friends' own authored lines are sent, never what a child types or says. *(Do not say "voices are only recordings" or "no text-to-speech".)*
- Five friends with different personalities, and stories that end with a game in the middle.
- Free to try while it is tested. *(Say nothing more about price until it is decided.)*

## 4. Assets you already have

| Asset | Where | Use |
|---|---|---|
| Locked portraits (5) | repo root PNGs, `web/public/crew/*.jpg`, `site/avatars/*.jpg` | Landing page, social posts |
| App icons | `web/public/icons/` (cropped from the Lumo portrait) | Home screen |
| Social card | `web/public/og.jpg` | Link previews (needs `VITE_SITE_URL`) |
| Intro clips | `imagine_videos/` (14), `brand/intros/` | Short clips. Check each for old Sprout voice and wording first |
| Voice recordings | `web/public/voices/` (12) | In-app and clips |
| Five new ElevenLabs voices | owner's ElevenLabs account | Next recordings (see decision 1 in `ROADMAP.md`) |
| Social drafts | `marketing/` | All flagged; rewrite against the claims above |
| Launch strategy | `marketing/SOFTWARE_LAUNCH_STRATEGY.md` | The channel and pilot plan |

**Missing:** a real screen recording of the web app on a phone, a landing page for the web app at its final address, and a contact address you are happy to publish.

## 5. Launch sequence

1. **Done in this pass:** truth on the home page, privacy policy, scaffolding removal, CI, security alert, broken links.
2. **Next (about a week):** decide the hosting address and set `VITE_SITE_URL`; clean the `/shop/` and app-page items in section 3; choose the canonical voices and record the 25 missing lines; phone QA and offline.
3. **Then:** one landing page with one button (the waitlist, now working); recruit 10 to 15 families through permitted channels (ask moderators first); begin the four-week supervised pilot.
4. **Weeks 3 to 6:** three short clips a week from real footage. Disclose any gifted access. Do not condition gifts on praise.
5. **Week 7:** review voluntary return at weeks 2 and 4, safety, support load and running costs. Only then decide on pricing or wider reach. Paid advertising waits for a working offer and a capped test with a stop rule.

## 6. Approvals and clearances

- **Trademark:** clear *Lummings*, *Lumo*, *Luna*, *Sprout*, *Nori*, *Moki* in each market and class before packaging or paid advertising.
- **Child safety and privacy:** have qualified specialists review the parent gate, stored data, the opt-in microphone and any generated media. If you market to families in other countries, check each country's children's privacy rules (for example the Australian Privacy Act, US COPPA, UK Children's Code).
- **Advertising standards:** Australian Consumer Law and platform rules prohibit misleading claims; section 3 exists to prevent that. Endorsements and gifted access must be disclosed.
- **Voices:** keep your ElevenLabs plan and licence terms on file for commercial use of the five designed voices.

## 7. Owner decisions

See `ROADMAP.md`, "Decisions needed". The ones that block advertising: the hosting address, the contact email, what happens to the `/shop/` storefront, and which voices are canonical.
