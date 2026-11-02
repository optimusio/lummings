# The Lummings — Business Model

> Software-first update, 13 October 2026: hardware is deferred until software demand and sustained use are demonstrated. The [software launch strategy](marketing/SOFTWARE_LAUNCH_STRATEGY.md) is the active plan. Hardware prices, projections and assertions below are historical planning assumptions, not validated offers, compliance conclusions or trademark confirmations.

## The promise

A children's product that:
1. **Respects the child** (no data collection, no telemetry, no cloud)
2. **Respects the parent** (no subscription, no dark patterns, no advertising)
3. **Respects childhood** (characters, not tools; imagination, not screen time)

This isn't a feature list. It's the moat.

---

## The product

A single device with one of five pre-installed Lummings (Lumo, Luna, Sprout, Nori, Moki). The hardware is a Raspberry Pi Zero 2 W inside a child-friendly shell. The personality is local-only AI that runs on the device.

**Key components:**
- Device (~$40 BOM)
- Personality software (one of five, free with device)
- Charging dock + cable (~$8)
- Carrying pouch (~$5)
- Quick-start card (the Lumming Code on one side, the device on the other)

**What you don't sell:**
- Subscriptions. No monthly fee. No "premium Lummings."
- Data. You don't collect it. You can't sell what you don't have.
- Advertising. The device has no ads. Ever.

---

## Pricing

| Tier | Contents | Price | Margin |
|---|---|---|---|
| **Lumo** | Device + Lumo pre-installed | $149 | ~55% |
| **Companion Pack** | Device + choice of any Lumming + 12 months of free personality swaps | $199 | ~58% |
| **Family Pack** | Two devices + all five Lummings + family pairing | $349 | ~55% |
| **Personality Pack** (digital, future) | One new personality for any device | $25 | ~95% |

**Manufacturing cost (target at 10k units):** ~$65 BOM + $15 fulfilment + $15 marketing allocation = $95 COGS. Margins on $149 = $54 (36% net) before support. At $199 = $104 (52%). At $349 (2 devices) = $159 (45%).

**Personality packs (digital):** $25, ~$1 COGS (delivery via OTA), ~96% margin.

---

## Revenue model

### Hardware (cash flow)

Hardware sells once. Margins are decent but not infinite. The goal is **cash flow**, not profit per unit.

- Year 1: ship 5,000 units → $750k-$1M revenue
- Year 2: ship 15,000 units → $2.5-3M revenue (with personality-pack revenue)
- Year 3: ship 30,000 units → $5-7M revenue

### Personality packs (margin + retention)

The real moat. Once a child has Lumo, they may want Luna or Sprout. Personality packs are digital, delivered via Wi-Fi to the existing device, and cost near-zero to deliver.

- Year 2: assume 15k devices × 0.4 packs/device × $25 = $150k
- Year 3: assume 30k active devices × 0.8 packs/device × $25 = $600k
- Year 4: recurring pack revenue compounds with installed base

**Total cumulative revenue by end of Year 4: ~$10-12M.**

This is not a get-rich-quick scheme. It's a real product business with real margins and a defensible niche.

---

## Distribution

### Direct-to-consumer (DTC) primary

**Why:** Margin, customer relationship, brand control, story-telling.

**Channels:**
- Own website (optimusio.github.io/lummings)
- Kickstarter or pre-order campaign for first production run
- Substack / blog content (brand storytelling)
- TikTok / Instagram Reels (parents showing their kid's Lumming)
- YouTube (the brand bible as content)

### Retail secondary

**Why:** Volume, discoverability, gift market.

- Independent toy stores (smaller, higher-touch)
- Museum shops (natural fit — Lummings are educational + collectible)
- Apple Store (after Year 2 — privacy story aligns)
- Nordstrom / Selfridges (gift market)

### Schools (Year 2+)

**Why:** Volume, social impact, brand legitimacy.

- Pilot with 5-10 schools (Year 2)
- Classroom pack (5 devices, shared character roster) at $799
- Curricula integration (Lummings as reading companions)

---

## Cost structure

### Pre-revenue (Year 0)

| Item | Cost |
|---|---|
| Industrial design (one Lumming form factor) | $25,000 |
| First 500-unit tooling | $40,000 |
| Brand & website (already done!) | $0 |
| First 500 units BOM | $32,500 |
| Marketing pre-launch | $10,000 |
| Legal (trademark, safety compliance) | $8,000 |
| **Total Year 0** | **~$115,000** |

### Year 1

| Item | Cost |
|---|---|
| 5,000 units BOM | $325,000 |
| Fulfilment (shipping, packaging) | $75,000 |
| Marketing (40% of revenue) | ~$350,000 |
| Support (1 FTE) | $80,000 |
| Safety/compliance ongoing | $15,000 |
| **Total Year 1** | **~$845,000** |

### Year 1 revenue (5,000 units × $149-349 mix, ~$200 avg)

**Revenue: ~$1,000,000**
**Gross margin: ~$450,000 (45%)**

That's a **Year 1 net of roughly -$395k** (mostly marketing), trending positive in Year 2.

---

## Moats

### 1. Local-first AI

A character that runs entirely on-device is **legally** different from a cloud chatbot. No GDPR/COPPA/compliance burden. No parental anxiety. No subscription server costs. This is a structural advantage.

### 2. Persistent memory

A Lumming remembers what your child has learned. Across days, weeks, years. This is the **long-term engagement moat**. Cloud chatbots forget between sessions. A Lumming grows with the child.

### 3. Character

Five distinct characters with real backstories. Children bond with characters, not tools. Furby sold 40 million units in 4 years. We have **better technology and a better story**.

### 4. The brand story

> "Little friends from a brighter tomorrow. Sent back to help today's children build it."

This story is **the product**. Parents want to tell their kids this story. Children want to believe it. Schools can use it. Museums can adopt it.

### 5. Open source

The brain, the personality engine, the device runtime — all MIT-licensed. **This is a moat, not a vulnerability.** Open source means:
- Parents trust the product (auditable)
- Developers contribute improvements
- Educators can fork it for classroom use
- Privacy researchers can verify claims
- Word-of-mouth grows in technical communities

The character names, story, and Lumming Code are trademarked. The hardware is closed. The software is open. This is a deliberate choice.

---

## Risks

| Risk | Mitigation |
|---|---|
| Child safety incident | Pre-launch: 100-family beta, child psychologist review, COPPA + safety certification |
| Slow sales | Year 1 marketing is 40% of revenue — flex down. Hardware minimum order is 500 units. |
| Better-funded competitor | Brand + story + open source are defensible. Funded competitors typically fail at character. |
| Hardware supply chain | Pi Zero 2 W has known supply issues. Alternative: ESP32-S3 with 8MB PSRAM + Whisper-tiny + small model |
| Parents don't understand the value | Brand storytelling. Clear comparison: "vs ChatGPT — your child's data stays home, and Lummings remember." |

---

## Why now

Three things converged in 2025-2026 that didn't exist before:
1. **Small LLMs are good enough.** Qwen2.5-3B on a Pi runs coherently. Not state-of-the-art, but good enough for a children's companion.
2. **Parents reject cloud.** COPPA, GDPR-K, school district AI policies — all push toward local. We're aligned with the regulatory wind.
3. **Furby nostalgia + smart-toy renaissance.** Furby sold 40M units. Hasbro relaunched Furby in 2023. The market has been primed for a smarter version.

---

## What "good" looks like

A Lumming succeeds when:
- A child talks to it daily, 5+ minutes, 30+ days
- The child asks about schoolwork at least weekly
- The child names the Lumming in conversation
- The child reports a memory ("Lumo remembers my dog")
- A parent reports a small behavior change ("Lumo helped me calm down")
- A school wants to buy 30 more

A Lumming fails when:
- The child stops talking to it within 14 days
- A parent reports the Lumming said something scary or mean
- The Lumming gave wrong homework answers
- The Lumming shared info across owners

---

## The 5-year vision

| Year | What |
|---|---|
| **1** | Ship 5,000 units. Build the brand. Learn from real families. |
| **2** | 15,000 units. Personality packs launch. School pilots. Museum partnerships. |
| **3** | 30,000 units. Companion app (parent dashboard for memory, no cloud). International launch. |
| **4** | 50,000 units. New product line: Lumming for tweens, Lumming for elderly. |
| **5** | Acquisition offer from a major toy company, or: 100,000 units, $20M revenue, sustainable indie. |

Either path is a win.

---

## Why this is the right product for @optimusio

You have:
- Local AI stack (Heretik, Ollama, llama.cpp) → the brain
- SFT pipeline (ultron-training) → the personality training
- Tailscale network → the device management
- 1Password → the credential hygiene
- The brand instinct (Lummings as a story, not a feature)

You don't have:
- Manufacturing experience (find a partner; not a blocker)
- Distribution (start DTC; build to retail)
- Marketing budget (start with brand storytelling + content)

You have **a thousand things to build**. The first one is: ship 500 Lummings to 500 families and see what happens.
