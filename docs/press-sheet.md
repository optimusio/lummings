<!-- status-banner -->
> **STATUS: ARCHIVED HARDWARE CONCEPT. DO NOT PUBLISH (27 October 2026).** This describes a planned toy that is on hold. Prices, dates, battery life, on-device AI and store availability below are unverified plans, not facts. The current product is the bedtime web app. See `ROADMAP.md` and `docs/LAUNCH_READINESS.md`.

# The Lummings — Press Sheet

**One-page press kit for journalists, bloggers, and reviewers.**

---

## At a glance

| | |
|---|---|
| **Product** | The Lummings — five local-AI characters for children |
| **Tagline** | Little friends from a brighter tomorrow. |
| **Founder** | the team |
| **Founded** | Sydney, Australia |
| **Website** | https://optimusio.github.io/lummings (placeholder: https://optimusio.github.io/lummings/) |
| **Repo** | https://[opensource-repo] |
| **Pre-order** | First 500 units, $149, shipping Q4 2026 |
| **Stage** | Pre-revenue, hardware tooling in progress |
| **License** | MIT (code) + trademark (character names, story) |

---

## The story

> The Lummings are five small characters from a future where everything has been remembered. They were sent back in time with one mission: help today's children build a better tomorrow.

Each Lumming has a distinct personality. **Lumo** loves co-op games and clever plans. **Luna** loves stories. **Sprout** loves puzzles. **Nori** loves big questions. **Moki** loves jokes.

They live on a Raspberry Pi inside a child-friendly shell. All AI runs locally — no cloud, no subscription, no telemetry, no advertising. The child speaks to the Lumming; the Lumming remembers.

---

## Why now

Three things converged in 2025-2026:

1. **Small LLMs are good enough.** A 1.5B-parameter model on a Pi Zero 2 W runs coherently for a children's companion.
2. **Parents reject cloud AI for children.** COPPA, GDPR-K, and school district AI policies all push toward local. We're aligned with the regulatory wind.
3. **The smart-toy market is wide open.** Furby sold 40 million units in the 1990s. Hasbro relaunched Furby in 2023. The market has been primed for a smarter, privacy-respecting version.

---

## The technical differentiator

- **Local AI on a Raspberry Pi Zero 2 W.** 1.5 GB RAM footprint for a quantized 1.5B model. The device works offline.
- **Five distinct personalities**, each with their own voice, mission, mood graph, and refusal list.
- **Persistent memory across days, weeks, months.** The Lumming remembers what the child has learned.
- **Open source.** The brain, the personality engine, the device runtime — all MIT-licensed at [opensource-repo].

---

## Privacy stance

- No data collection. No telemetry. No analytics. No advertising.
- The child speaks to the Lumming; the Lumming remembers.
- The child can ask the Lumming to forget at any time.
- Parents can wipe the device's memory with a button.

This isn't a feature. **It's the brand.**

---

## Quote from the founder

> We built the Lummings because every cloud-connected smart toy we'd ever seen compromised on either privacy or character. The Lummings are the alternative: a character with memory, on a device your child owns, that never sends a byte to anyone.
>
> — the team, founder

---

## Image assets

(All images in `docs-site/portraits/` of the repo, or downloadable from the press kit URL.)

1. **Hero image** — five Lummings sprite row (ruby red, lilac, green, blue, pink)
2. **Individual portraits** — Lumo, Luna, Sprout, Nori, Moki (each in "curious" mood)
3. **Wordmark** — `The Lummings` with glowing i-dots
4. **In-context** — child holding a Lumo device (forthcoming, post-prototype)

### Logo files
- `docs-site/wordmark/wordmark.svg` — full color
- (forthcoming: white-on-black, black-on-white)

---

## Product specs

| | |
|---|---|
| Hardware | Raspberry Pi Zero 2 W |
| Storage | 64 GB A2 microSD |
| Display | 1.5" 240×240 IPS TFT |
| Audio | INMP441 mic + MAX98357A amp + 1W speaker |
| Sensors | 2× capacitive touch (belly, head) |
| Battery | 18650 3000 mAh + TP4056 charger (8-24 hours) |
| Charging | USB-C |
| Software | MIT-licensed Python + llama.cpp + Qwen2.5-1.5B Q4_K_M |
| Connectivity | Wi-Fi (for OTA personality swaps only — not required for use) |
| BOM cost | ~$60-80 (target $65 at 10k units) |
| Retail price | $149 (Lumo), $199 (Companion Pack), $349 (Family Pack) |

---

## Founder bio

**the team** is an AI infrastructure engineer and founder based in Sydney, Australia. He runs a local AI operator stack called THRONE (RTX 3090, 64 GB RAM) and has been building on-device AI applications since 2024. The Lummings is his first consumer product.

Previously: indie developer, infrastructure consultant, classical alchemy researcher.

---

## Contact

- Email: [contact-form]
- Twitter / X: the team
- GitHub: [opensource-repo]
- Mastodon: the team@hachyderm.io

For press inquiries, please use email with subject line "Press — [outlet name]".

---

## Updates and embargo

We're happy to provide early access to working prototypes, sample devices, and founder interviews on request. Embargoes are negotiable for major outlets.
