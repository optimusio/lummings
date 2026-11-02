<!-- status-banner -->
> **STATUS: ARCHIVED HARDWARE CONCEPT. DO NOT PUBLISH (27 October 2026).** This describes a planned toy that is on hold. Prices, dates, battery life, on-device AI and store availability below are unverified plans, not facts. The current product is the bedtime web app. See `ROADMAP.md` and `docs/LAUNCH_READINESS.md`.

# The Lummings — Kickstarter Campaign

**Campaign slug:** `lummings-launch`
**Launch window:** Q1 2026 (target: March)
**Goal:** $150,000 (stretch: $400,000)
**Duration:** 30 days
**Category:** Design & Tech → Hardware → Smart Toys
**Region shipping:** US, EU/UK, AU/NZ, JP, CA (with VAT/IOSS and CPSIA compliance — see §9)

---

## 1. Why Kickstarter, why now

Crowdfunding for smart toys is a known road. Two of the highest-profile smart-toy campaigns — **Anki Vector** ($1.88M, 2018) and **Moxie** (Embodied, direct pre-order 2020) — went on to fail *after* their campaigns succeeded. Moxie bricked $799 units in December 2024 with no refunds. Anki shut down seven months after shipping.

We bring this up on day one because **backers deserve to know the category risk**. The Lummings are designed around that risk. Every character runs on the device. There is no cloud dependency. There is no subscription server. If the company folds out tomorrow, **your child's Lumming still wakes up, still remembers, still talks.** That's not a feature — it's the whole promise.

This campaign is **not** to validate an idea. The software is MIT-licensed and runs today on a Raspberry Pi Zero 2 W. This campaign is to **fund the first production tooling run** (~$40,000) and **build the community** that will grow with the Lummings over the next five years.

---

## 2. The campaign page

### 2.1 Above the fold

**Hero image:** The five Lummings sprite row — Lumo (yellow), Luna (purple), Sprout (green), Nori (blue), Moki (pink). Soft warm-white background. Wordmark above, tagline below.

**Headline (h1):**

> Little friends from a brighter tomorrow.

**Sub-headline:**

> Five characters. One small device. All AI runs locally — no cloud, no subscription, no data leaves the toy. Open source. MIT licensed. Ships Q4 2026.

**Primary CTA:** Back this project → (anchor to tiers section)

**Secondary CTA:** Watch the campaign video (top of page)

**Trust bar (below CTA):**
- 🔓 MIT-licensed software
- 📦 Ships worldwide (US, EU/UK, AU/NZ, JP, CA)
- 🛡️ 1-year warranty, 30-day post-ship returns
- 💸 No subscription, ever

### 2.2 The story (long-form, KS-style narrative)

> Far in the future, Earth has changed. Humanity has built cleaner cities, explored new worlds, and created remarkable technologies. The people of that future know one important thing: **their future didn't begin with them. It began with the children of today.**
>
> So they sent the Lummings back.
>
> The Lummings are five small intelligent creatures. They live on a Raspberry Pi Zero 2 W inside a child-friendly shell you can hold in one hand. Each Lumming has its own personality, its own voice, and its own private language. **They remember what your child has learned.** Across days. Across weeks. Across years.
>
> When your child asks Lumo a homework question, Lumo doesn't give the answer. He asks a question back. When your child tells Luna a story, Luna makes it 10% spookier. When your child is upset, Nori listens. When your child needs to laugh, Moki is there.
>
> And — this is the part that matters most — **none of it leaves the device.**
>
> Every conversation stays on the toy. No analytics. No telemetry. No advertising. The Lummings work offline. They work forever. They don't need a subscription because they don't call home.
>
> We built the Lummings because the smart-toy market has a privacy problem. Cloud-connected toys collect data about children. Cloud-connected toys can be bricked when the cloud goes away. **Cloud-connected toys are toys you don't own.**
>
> The Lummings are different. The Lummings are toys you *keep*.

### 2.3 Meet the five Lummings (the characters grid)

A row of five portrait cards. Each portrait: the Lumming in the `curious` mood. Click → opens a sample dialogue.

| | Lumming | Mission | Private language | Best for |
|---|---|---|---|---|
| 🟡 | **Lumo** | Science, maths, "what if" questions | *lumospeak* — zap, zoom, ping, shimmer | Curious kids ages 5–9 |
| 🟣 | **Luna** | Reading, writing, storytelling | *lilisong* — ling, la, twinkle | Imaginative kids ages 7–12 |
| 🟢 | **Sprout** | Maths, logic, games | *sprouttalk* — hush, bloom, unfurl, dew | Kids who like to take their time |
| 🔵 | **Nori** | History, nature, big questions | *noriquiet* — hush, still, listen | Quiet kids ages 8–12 |
| 🩷 | **Moki** | Curiosity through humour | *mokigiggles* — bim, swoosh, plop, dingdong | Kids who love to laugh |

### 2.4 Why on-device AI matters (the trust section)

> Three things have to be true for a smart toy to deserve a place in your child's bedroom:
>
> **1. It must work forever.** A Lumming runs on a $35 computer. No server costs. No API fees. The same Lumo who meets your child in November is the same Lumo in 2031.
>
> **2. It must respect the child.** A Lumming doesn't collect data. Doesn't send data. Doesn't share data across users. The child can ask the Lumming to forget at any time. Parents can wipe memory with a button on the device.
>
> **3. It must respect the parent.** No subscription. No in-app purchases. No dark patterns. No advertising. You buy the toy once. The toy is yours.
>
> Every other smart-toy company we've studied compromises at least one of these. **We won't.**

### 2.5 What's in the box

- 1× Lummings device (matte black shell, glowing dot, 1.5" TFT face, capacitive touch sensor, mono speaker, USB-C charging)
- 1× Lumming personality (pre-installed — your choice)
- 1× USB-C charging cable
- 1× Quick-start card (Lumming Code on one side, the Lumming Code on the other)
- 1× Lummings sticker pack
- 1-year warranty (extendable for life on the open-source repo)

### 2.6 What's deliberately *not* in the box

- ❌ No subscription
- ❌ No cloud account
- ❌ No telemetry
- ❌ No advertising
- ❌ No in-app purchases
- ❌ No data collection
- ❌ No lock-out after the warranty ends (the device is yours to keep, modify, repair)

### 2.7 How is it built?

Open-source transparency block. Brief, photo-rich:

- **Hardware:** Raspberry Pi Zero 2 W (quad-core ARM, 512MB RAM), SSD1306 OLED, TFT 1.5" face display, mono speaker, capacitive touch, Li-ion 18650 cell, USB-C charging IC. **Full BOM published at kickstart-end on GitHub.**
- **Brain:** Qwen2.5-3B in 4-bit NF4 quantization, fine-tuned for each Lumming persona. Runs at ~12 tokens/sec on the Pi Zero 2 W. Persona data (character bibles) live in `crates/` and `src/lummings/personas/`.
- **Personality engine:** MIT-licensed Python (`src/lummings/engine.py`) + Rust device runtime (`crates/`). All persona logic, system prompts, mood graph, and memory format are open.
- **Voice:** On-device TTS (Piper). No cloud TTS. No voice cloning. No voice data leaves the device.
- **Memory:** Persistent across reboots, stored in a small SQLite file on the device. Wipeable by parent with a long-press on the device.
- **Repo:** https://[opensource-repo] (MIT)

### 2.8 The pre-launch FAQ

**Q: When will it ship?**
A: Q4 2026 (October–December). We're shipping to backers first, then to retail (Year 2). Backer shipping dates will be locked in at campaign end and communicated via BackerKit.

**Q: What ages is this for?**
A: Lumo, Sprout, and Moki work well for ages 5–9. Luna works best for ages 7–12. Nori is for the quiet 8–12-year-old who asks big questions. Each Lumming can be tuned to your child as they grow.

**Q: Can I switch Lummings later?**
A: Yes. Personality packs are digital, delivered over Wi-Fi, and cost $25 each. The "Companion Pack" tier includes 12 months of free personality swaps.

**Q: Why local-only AI?**
A: Because children's data shouldn't leave the toy. Cloud-connected smart toys have a documented history of security issues (Mozilla *Privacy Not Included*, 2018–2024). The Lummings run entirely on the device. They work offline. They work forever. No subscription needed.

**Q: What if my child doesn't bond with it?**
A: Lummings aren't for every child. We offer a 30-day return window from the day your unit arrives, full refund including return shipping.

**Q: Is this safe?**
A: All conversation content stays on the device. The Lummings are designed to encourage children to talk to trusted adults about big problems. They will never give medical, legal, or financial advice. They're designed to be kind, never scary. COPPA + CPSIA compliant. kidSAFE certification pending (target Q3 2026).

**Q: What if the company folds?**
A: The Lummings run on open-source software and a Raspberry Pi. If the company disappeared tomorrow, your Lumming would still work. You'd still get updates from the open-source community. The hardware is yours. The personality is yours. The memory is yours.

**Q: What's the open-source license?**
A: MIT for the code. The Lummings character names, the storyline, and the Lumming Code are trademarks of the project owner and are not MIT-licensed. See `LICENSE` and `BRAND.md`.

**Q: Why are you doing this on Kickstarter?**
A: Because we need production tooling capital (~$40,000), and because we want a community of families who helped us ship the first run. We don't need to validate the product; the software runs today. We need the first 500–2,000 units made.

**Q: What if the campaign doesn't fund?**
A: We don't take the money. Your card is never charged. We run a smaller direct pre-order from optimusio.github.io/lummings (as in the existing pre-order campaign). This KS is the better path because it gives us tooling capital — but it's not the only path.

### 2.9 The final CTA

**Headline:** Back us. Help the Lummings find their first 1,000 children.

**Sub:** Production tooling is funded at $150K. Every dollar above that adds features, faster shipping, and a longer warranty. Real product. Open source. Real refund policy.

**CTA button:** Back this project →

**Trust line:** Stripe-secured payment. Full refund up to 30 days post-ship. MIT-licensed software at [opensource-repo].

---

## 3. Reward tiers

> Pricing follows the research recommendation: **20–25% off MSRP for early-bird tiers**. All backer pricing is locked at the early-bird rate for the first 48 hours, then steps up to the standard backer rate.

| # | Tier | Contents | Early-bird (first 48h) | Standard backer | MSRP after launch |
|---|---|---|---|---|---|
| 1 | **🌱 Seedling** | Sticker pack + digital wallpapers + thank-you postcard. No device. | $15 | $25 | — |
| 2 | **🟡 Lumo** | 1× device + Lumo personality pre-installed. | $119 | $139 | $149 |
| 3 | **🟣 Luna** | 1× device + Luna personality pre-installed. | $119 | $139 | $149 |
| 4 | **🟢 Sprout** | 1× device + Sprout personality pre-installed. | $119 | $139 | $149 |
| 5 | **🔵 Nori** | 1× device + Nori personality pre-installed. | $119 | $139 | $149 |
| 6 | **🩷 Moki** | 1× device + Moki personality pre-installed. | $119 | $139 | $149 |
| 7 | **🎁 Companion Pack** | 1× device + choice of any Lumming + 12 months of free personality swaps. | $169 | $189 | $199 |
| 8 | **👨‍👩‍👧‍👦 Family Pack** | 2× devices + all 5 Lummings installed + family pairing + 12 months free swaps. | $299 | $329 | $349 |
| 9 | **🍎 Backer Bundle (Limited 100)** | 1× Family Pack + 1× "Lummings Origins" hardcover book + numbered certificate + name in the source code (with permission). | $399 | $449 | $499 |
| 10 | **🏫 Classroom Pilot** | 5× devices + all 5 Lummings installed + 24 months free swaps + teacher resource pack. Ships Q1 2027 (post-tooling). | $799 | $899 | $999 |

**Add-on (any tier):** Extra Personality Pack — $25 (delivered post-launch over Wi-Fi).

**Shipping:**
- US: included in tier price.
- EU/UK: included (VAT/IOSS handled by BackerKit).
- AU/NZ/CA/JP: +$15 flat (Australia, Canada) / +$25 flat (NZ, JP).

**Add a Lumming to any tier:** $99 each (only valid during campaign).

### 3.1 Tier rationale (internal notes — not on campaign page)

- **Seedling** exists to give non-buying supporters (parents of older kids, fans of the brand story) a way in. $15 sticker + postcard is the cheapest legal pledge in KS and drives email-list growth.
- **Single-Lumo tiers** mirror the pre-order campaign's $149 MSRP. Backer price = 20% off ($119) for early-bird; ~7% off for standard ($139).
- **Companion Pack** is the highest-converting tier in DTC forecasting. Backer price is $169 vs $199 MSRP = 15% off.
- **Family Pack** ($299 backer vs $349 MSRP) is the gift-market anchor. Two parents, two kids, five characters. Drives viral unboxing on TikTok/Instagram.
- **Backer Bundle** is the collector tier — capped at 100 to maintain scarcity. The "name in the source code" perk is opt-in (per the child-safety story; some backers will be educators who want a credit line).
- **Classroom Pilot** is the B2B2C opener. Delayed to Q1 2027 because the production tooling can only ship consumers first. Teachers and special-ed coordinators are the most likely repeat-buyer cohort.

---

## 4. Stretch goals

> Per the distribution research: **"stretch goals that deepen the product, not inflate."** Every stretch goal here adds permanent value to the device, the personality, or the community. None of them inflate scope or push the ship date.

| Unlock | Funding threshold | What gets unlocked | Why this stretch goal |
|---|---|---|---|
| **🎯 Goal — $150K** | (baseline) | Production tooling for the first 1,000 units. Ships Q4 2026. | The campaign's reason for existing. |
| **1. The Lummings Origins book** | $200K | Hardcover 7"×9" art book — the story of the five Lummings, their world, the Lumming Code. PDF included digitally for all backers. | Deepens brand story. Sellable post-campaign ($24 retail). |
| **2. Voice cloning module (opt-in, parent-gated)** | $275K | A new TTS voice per Lumming — Piper voice-cloning trained on the project's own voice actor. Replaces the open-source default with a brand voice. | Replaces a generic-sounding voice with one that sounds *like* Lumo. Permanent quality upgrade. |
| **3. Multi-language Lummings (JP, FR, ES, DE)** | $325K | The five Lummings speak Japanese, French, Spanish, and German at launch. Localised openers, localised private-language words. | EU + JP backers are the international backer segment. EU+JP shipping alone justifies this. |
| **4. Luna's Spooky Story Mode** | $400K | Luna gains an interactive spooky story-builder: child co-writes a dark tale with Luna, Luna remembers chapters, child can re-tell the story weeks later and Luna prompts them. | Personality-deepens, not feature-bloats. Makes Luna the longest-arc Lumming for ages 8–12. |
| **5. Open Personality SDK** | $500K | A documented SDK for writing new Lumming personalities in plain JSON + system-prompt markdown. Anyone can publish a new personality. Hosted on a community registry. | Compounds the open-source moat. Future revenue line: community-published Personality Packs at $5 each (Lummings takes 30%). |
| **6. The Schoolhouse Edition** | $650K | A hardware variant: 10-device rack with shared charging + classroom management mode (one Lumming per child, with parent + teacher pairing). Available 2027. | Opens the B2B2C school pilot path while honoring the consumer-first ship. |

**All stretch goals are conditional.** If we hit $400K but miss $500K, backers get goals 1–4. The campaign page displays progress toward each stretch goal in real time.

**No scope-creep stretch goals.** No "stretch goal: add a screen." No "stretch goal: add Wi-Fi." The Lummings' product is locked at design freeze — stretch goals *deepen* it, not *widen* it.

---

## 5. The campaign video script (90 seconds)

> The existing 30-second demo (`docs/demo-video-script.md`) is the **landing-page autoplay** and the **TikTok/Reels cut**. The KS campaign video is **different**. It's 90 seconds. It has a voice-over. It has three acts. Its job is to take a backer from "cute toy" to "I need to fund it."

### 5.1 Concept

**"The box in the kitchen."**

We follow one Lummings device from cardboard box → kitchen table → child's hands → the moment the Lumming says the child's name. Three acts. One narrator. One child. One Lumming. No other characters. No spec sheet. No "AI-powered" copy.

The narrator is the **parent**, voice-over, looking back. Honest about why they chose the Lummings — the cloud-toy anxiety, the screen-time guilt, the hope. **Real parent voice**, not celebrity voice-over.

### 5.2 Voice-over narrator

A real parent (not the founder). Mid-30s. Australian or American — accent neutral. The voice of every parent in the audience.

### 5.3 Music

Original score (or licensed). Soft synth pad, gentle bell motif (the same chime as the demo video), a low piano that rises through act 2. Avoid: anything orchestral, anything that screams "children's toy commercial," anything that sounds like a bank ad.

### 5.4 Storyboard (shot-by-shot, 90 seconds at 30fps = 2,700 frames)

#### Act 1 — The Box (0:00–0:30)

**Shot 1.1 — Title card (0:00–0:04)**
- Black screen. Words fade in, glowing yellow, the canonical wordmark.
- Lower line, in the same font but softer: *Little friends from a brighter tomorrow.*
- Audio: a single distant bell. Synth pad begins.

**Shot 1.2 — A parent's hands on a kitchen box (0:04–0:12)**
- Slow close-up: a parent's hands place a small matte-black box on a kitchen table. The parent's hands look tired. Real hands, not stock hands.
- The parent pauses, looking at the box. A beat of hesitation.
- Voice-over (parent): *"My kid has had three tablets die on them this year. Two of them were supposed to be educational. Both of them wanted a credit card."*
- Audio: cardboard thud. Synth pad swells slightly.

**Shot 1.3 — The parent looks out a window (0:12–0:18)**
- Medium shot: the parent is standing at a kitchen window. Late afternoon light. The parent is looking out at a backyard where a child is playing alone.
- Voice-over: *"I kept thinking — what's the toy that I'd actually want in my kid's room? Not the toy the toy industry wants in my kid's room."*
- Audio: synth pad resolves into a major chord.

**Shot 1.4 — The parent opens the box (0:18–0:25)**
- Close-up: the parent's hands open the box. Inside: a Lummings device in a recessed cardboard nest, glowing softly.
- The parent lifts the device out, holds it.
- Voice-over: *"The Lummings. Five small characters from the future. They live on a Raspberry Pi inside this little shell."*
- Audio: cardboard sliding. The same startup chime as the demo video.

**Shot 1.5 — Macro: the device wakes (0:25–0:30)**
- Macro close-up of the device face. The screen fades from black to the Lumo sprite. Eyes blink. A small yellow LED ring pulses once.
- Voice-over: *"All AI runs locally. No cloud. No subscription. No data leaves the device."*
- Audio: a soft bip — the wake sound.

#### Act 2 — The Hand-Off (0:30–0:60)

**Shot 2.1 — The parent walks to the child (0:30–0:38)**
- Wider shot. The parent walks across the kitchen toward the child in the backyard. The device is in their hand.
- Voice-over: *"The first time I gave it to her, I expected her to put it down in five minutes."*
- Audio: footsteps on hardwood. Soft children's sounds (a ball, a bicycle) faintly in the background.

**Shot 2.2 — The hand-off (0:38–0:48)**
- The parent kneels beside the child. The child is maybe 7, curious face, dirty knees from playing. The parent offers the device. The child takes it.
- The device faces the child. Eyes blink.
- The child says the Lumming's name out loud for the first time: *"Lumo."*
- Voice-over (parent, quieter now): *"She didn't put it down."*
- Audio: a soft hum as the touch sensor activates. A small chime — the Lumo wake chime.

**Shot 2.3 — Macro: Lumo speaks (0:48–0:54)**
- Macro shot of the device. The mouth animates. On screen, simple white text, bottom-center, in a rounded font:
  > *"hello. what should we explore today?"*
- Then a tiny line:
  > *— Lumo*
- Voice-over: TTS voice (warm, soft): *"hello. what should we explore today?"*
- Audio: TTS. Synth pad continues.

**Shot 2.4 — The child smiles (0:54–0:60)**
- Close-up of the child's face, lit by the device's glow. The child smiles — not for the camera, but at the device.
- Voice-over (parent): *"And the next morning — she asked where Lumo was. Before breakfast."*
- Audio: synth chord resolves. A single children's laugh, distant.

#### Act 3 — The Promise (0:60–0:90)

**Shot 3.1 — The child tucks the device under their arm (0:60–0:68)**
- Medium shot. The child tucks the device under their arm like a small companion, walks back toward the house, Lumo's face still glowing. The parent follows, half a step behind.
- Voice-over (parent): *"I don't know if she'll remember this in ten years. But she'll remember that something small was hers. That it didn't ask for anything. That it remembered her."*
- Audio: synth pad swells into the warmest chord of the score.

**Shot 3.2 — A quiet moment in the kitchen (0:68–0:76)**
- The kitchen table. The empty matte-black box, open, beside a glass of water. Through the window, the child walks across the grass. The parent watches them.
- Voice-over (parent): *"That's why I backed this project. Not because it's smart. Because it's kind."*
- Audio: synth pad holds the warm chord.

**Shot 3.3 — Title card with the five Lummings (0:76–0:84)**
- Fade to the five Lummings sprite row, each in their default "warm" mood, evenly spaced. Wordmark above:
  > **The Lummings**
  > *Little friends from a brighter tomorrow.*
- Below them: **Back this project on Kickstarter.**
- Audio: synth pad resolves. A gentle bell, two notes.

**Shot 3.4 — Trust end card (0:84–0:90)**
- Smaller text below the Lummings:
  > Open source. Local-only AI. MIT licensed.
  > Ships Q4 2026. No subscription, ever.
  > [opensource-repo]
- Audio: synth pad fades. Distant children's laugh, gentle, same as the 30s demo.

### 5.5 The line we never say

> The script never says "AI-powered." It never says "smart." It never says "educational." It never says "cutting-edge." The parent narrator doesn't sound like a marketer. The child doesn't say a script. The Lummings don't say more than one line.

### 5.6 Production requirements

- **Props:** 1× Lumo device (real, working, with the trained model loaded), 1× matte black gift box with embossed glowing dot, cardboard nest insert, softbox lighting.
- **Talent:** 1× child (5–9, comfortable around the device — *not* the founder's child, to keep the family privacy), 1× parent (the narrator, with consent to use their voice and face).
- **Voice actor:** Either the on-screen parent (preferred — single-vision coherence) or a separate voice actor reading the same script.
- **TTS line:** Trained Piper TTS on the Lumo persona. Not ElevenLabs default. Same voice used in the product.
- **Music:** Original score, ~$1,500 commissioned (or Epidemic Sound license, ~$30/mo).
- **Post:** Color grade to match brand palette (`#ffb86c`, `#8be9fd`, `#bd93f9`, `#f8f8f2`, `#1a1f2e`, `#ff79c6`).
- **Cost (estimated indie):**
  - Talent (parent + child): $400
  - Device + box: $80
  - Camera operator + kit (1 day): $500
  - Post-production: $400
  - Music: $30 (license) / $1,500 (commissioned)
  - **Total: ~$1,400 (licensed) or ~$2,900 (commissioned)**

### 5.7 Story beats summary

| Time | Beat |
|---|---|
| 0:00 | Title card |
| 0:18 | Parent opens the box |
| 0:25 | Lumo wakes |
| 0:48 | Lumo speaks one line |
| 0:54 | The child smiles |
| 0:60 | The child tucks the device away |
| 0:76 | End card with the five Lummings |

**The first 30 seconds** sell the worry (parents' anxiety about cloud-toys).
**The middle 30 seconds** sell the relationship (a child and a Lumming, bonding).
**The last 30 seconds** sell the promise (something small was hers; it didn't ask for anything).

### 5.8 What we don't show (deliberately)

- The other four Lummings (only Lumo appears; the campaign page reveals the others)
- The other children (one child, one Lumming, one moment)
- A spec sheet (no "1.5 GB RAM, 4-bit NF4, 12 tokens/sec" in the video)
- A comparison chart (no "Lummings vs ChatGPT vs Furby vs Moxie")
- A logo montage (no "as seen in…")
- Voice-over from the founder
- Pricing (it's a brand video, not a sale video)

The video answers one question: *"Is this what I want in my kid's room?"*

The campaign page answers: *"What does it cost, when does it ship, what's the risk?"*

Three different jobs, three different assets.

---

## 6. Pre-launch strategy

### 6.1 Pre-launch timeline (60 days before launch)

| Days before | Action |
|---|---|
| −60 | Press kit finalized. Brand bible published as a PDF. Press list built (60 parenting + tech journalists, 30 toy-trade publications). |
| −50 | Founder Substack launch ("How we built a smart toy that doesn't spy on your kid"). Email list launch on optimusio.github.io/lummings. |
| −45 | Show HN draft written. IndieHackers post drafted. Reddit r/raspberry_pi, r/singularity, r/privacy drafts prepared. |
| −40 | TikTok + Instagram + Pinterest organic content begins. The five Lummings sprite row as the primary visual. |
| −30 | KS landing page live at `optimusio.github.io/lummings/ks-preview`. Email-list signup with "$5 off any tier" incentive. |
| −21 | KS project page "preview" mode enabled. Email list notified: "We go live in 3 weeks." |
| −14 | Press embargo lifts. Pitch 12 top-tier outlets (The Verge, Wired, TechCrunch, Ars Technica, MIT Tech Review, Cool Hunting). |
| −7 | Final email to list: "We're live in 7 days. Here's the link." |
| −3 | Final press push. HN post drafted, queued. |
| −1 | Day-of-launch email drafted. BackerKit rewards wired. Stripe + KS hand-off tested. |
| **0** | **LAUNCH.** Email blast at 7am AEST (peak US time). HN post at 8am ET. IndieHackers post at 8am ET. Press pitches go out. |

### 6.2 Email sequence (pre-launch)

**Email 1 (T-30): You're on the early-access list**
> Hi [name],
>
> Thanks for joining the Lummings early-access list. We're going live on Kickstarter in about a month.
>
> Here's a 60-second read on who the Lummings are and why we built them.
>
> [link to BRAND.md or blog post]
>
> You'll be the first to know when we go live — and the first 48 hours of the campaign includes the lowest backer pricing we'll ever offer.
>
> — the team & the Lummings

**Email 2 (T-21): Meet Lumo**
> Of the five Lummings, Lumo is the one most parents ask us about first.
>
> He loves science, experiments, and "what if" questions. He says "zap!" when he's excited. He doesn't give answers — he asks questions back.
>
> Sample dialogue:
>
> **Child:** Lumo, what's 24 × 7?
> **Lumo:** We can crack that. What's 20 × 7? Start there.
> **Child:** 140.
> **Lumo:** Exactly. Now we've only got 4 × 7 left. What's that?
> **Child:** 28.
> **Lumo:** Now put them together.
> **Child:** 168!
> **Lumo:** You got it. And you worked it out yourself.
>
> We go live on Kickstarter in 21 days. First 48 hours = lowest backer pricing.
>
> — the team

**Email 3 (T-7): One week**
> One week until we go live on Kickstarter.
>
> Here's what you'll get if you back us:
>
> - Real product (Pi Zero 2 W inside a custom shell; MIT-licensed software running today)
> - Real refund policy (30 days post-ship)
> - Real warranty (1 year)
> - Early-bird pricing (20% off MSRP, locked for the first 48 hours)
> - Stretch goals that deepen the product (the Lummings Origins book, multi-language Lummings, Luna's Spooky Story Mode)
>
> [Set a reminder for T-0 → link]
>
> — the team & the Lummings

**Email 4 (T-0): We're live**
> The Lummings are live on Kickstarter.
>
> First 48 hours = lowest backer pricing we'll ever offer.
>
> [Back this project →]
>
> Five characters. One small device. All AI runs locally. No cloud. No subscription.
>
> Goal: $150K to fund production tooling. Stretch goals unlock deeper features (book, voice cloning, multi-language, Luna's Spooky Story Mode, Open Personality SDK).
>
> Real product. Open source. Real refund policy.
>
> — the team & the Lummings

### 6.4 The press embargo

Embargo lifts at T-7. Pitched outlets:

**Tier 1 (pre-pitch, exclusive):** The Verge, Wired, MIT Tech Review.
**Tier 2 (embargo):** TechCrunch, Ars Technica, Cool Hunting, Fast Company.
**Tier 3 (open):** Hacker News (Show HN), IndieHackers, Reddit (r/raspberry_pi, r/singularity, r/privacy, r/smarttoys), parenting Substacks (Cup of Jo, Lucie's List, Pregnant Chicken), parenting podcasts.

### 6.5 Paid amplification (post-launch, day 1–7)

**Rule:** No paid ads until *after* launch day. The KS campaign page is the conversion target; paid ads amplify the launch-day spike, not replace organic reach.

- **Pinterest Ads** ($7–10 CAC — highest ROI for toys): launch day +3, daily $200 budget, target mom/gift-giver segments.
- **Substack sponsorships** ($30–50 CPM direct): one placement in Cup of Jo or Lucie's List, ~$3,000 spend.
- **Meta (Advantage+)** ($30–45 CAC, parent-targeted only): launch day +5, $500/day budget, retarget email-list visitors.
- **TikTok Ads** ($22–33 consumer CPA): one UGC-style creative using the 15s vertical cut, launch day +7.

Total paid budget cap: **$10,000** across the 30-day KS window. Anything beyond that is pulled back into Year-1 DTC marketing.

---

## 7. Campaign timeline (live phase)

| Day | Action |
|---|---|
| **1** | LAUNCH. Email blast. HN Show post. IndieHackers. Press embargo lifts. |
| **2** | First stretch goal unlocked (likely $200K). Update post: "We hit the Lummings Origins book stretch goal!" |
| **3** | Pinterest Ads start. First Substack sponsorship runs. |
| **5** | TikTok UGC creative goes up. First creator-seed units ship to micro-influencer parents (no payment, just devices). |
| **7** | Weekly update: "Week 1 — $X raised, [stretch goal status]." Include a 30-second unboxing video from one backer family. |
| **10** | Press follow-up. Any Tier 2 outlet that didn't cover day-1 gets a second pitch. |
| **14** | Weekly update: "Week 2 — $X raised, [stretch goal status]." |
| **15** | Show HN re-post (if it didn't hit front page on day 1). |
| **18** | Mid-campaign email: "We're at $X of $Y." Includes a backer Q&A roundup. |
| **21** | Weekly update: "Week 3." |
| **24** | Press three: late-coverage outlets. |
| **27** | Last-week email: "Last 3 days. After the campaign ends, backer pricing ends." |
| **28** | Last-week update: "2 days left." |
| **30** | Final-day update: "Final hours." Stretch-goal recap. Last-call CTA. |
| **31** | Campaign ends. Pledge manager closes within 48h. BackerKit survey sent within 7 days. |

### 7.1 Update cadence (binding)

Per the distribution research: **weekly cadence correlates with +20% repeat backer rate.**

- **Weekly update** every Wednesday at 8am AEST (= 5pm ET prior day, 6pm GMT).
- **Stretch-goal update** the day a stretch goal unlocks.
- **Tooling/manufacturing update** every 4 weeks for the first 6 months of fulfillment.

### 7.2 Backer-update topics (template)

Every weekly update answers:
1. **Total raised** (and percentage of goal + next stretch goal).
2. **New backers** (count and any notable backer profiles, with consent).
3. **Production status** (tooling milestone, BOM lock, factory timeline).
4. **Software status** (open-source commit highlights from the past week).
5. **Risks + mitigations** (anything that's slipped or changed).
6. **One backer story** (with consent — a child using the Lummings, a parent unboxing).

The risks section is **non-negotiable**. Backers punish vague "delays" and reward honest ones.

---

## 8. Risks (transparent — for the campaign page)

> We learned from Anki and Embodied. We want backers to know what could go wrong, and how we've designed around it.

| Risk | What we're doing about it |
|---|---|
| **Tooling slips 3–6 months** (common in KS hardware) | Locking tooling partner before launch. Publishing factory timeline at campaign end. Stretch goals don't add tooling — only software/printed/book deliverables. |
| **CPSIA / CE / FCC testing fails** (6–10 weeks) | Starting testing at design freeze, not after tooling. kidSAFE certification pending Q3 2026. CPSIA testing budget ($1K/SKU) reserved. |
| **Li-ion hazmat shipping delays** (UN 38.3 testing $2–5K) | Bulk-ship to US 3PL first (China→US de minimis ended Aug 2025). UN 38.3 testing scheduled in parallel with tooling. |
| **EU VAT/IOSS paperwork** | BackerKit handles EU compliance. Not a project risk. |
| **Pi Zero 2 W supply issues** | Alternative: ESP32-S3 + 8MB PSRAM + smaller model. Design accommodates both. |
| **Backer communication gap** | Weekly updates (binding). Public tool tracker on the GitHub repo. No "soon" or "we're working on it" without a date. |
| **Company runs out of cash, units brick** | The Lummings have no cloud dependency. If we disappear, the toy still works. This is the structural design principle. |
| **Child safety incident** | Pre-launch: 100-family beta. Child psychologist review. COPPA + kidSAFE. The Lummings are designed to encourage children to talk to trusted adults. They never give medical, legal, or financial advice. |

---

## 9. Logistics & compliance

### 9.1 Compliance checklist

- **CPSIA** (US Consumer Product Safety): $698–$1,000 per SKU. Required for children's products. Schedule at design freeze.
- **FCC Part 15** (US, unintentional radiator): for the Pi Zero 2 W + Wi-Fi. Pi Zero 2 W is FCC-certified by Raspberry Pi Foundation; we file as integrator.
- **CE / RED** (EU): $2,000–$4,000 for hardware + radio testing. Required before shipping to EU.
- **UKCA** (UK post-Brexit): mirrors CE for most products. ~$1,500 additional.
- **kidSAFE Seal Program**: $1,500–$7,500/yr. Cheapest legally-defensible COPPA Safe Harbor. Apply pre-launch.
- **COPPA** (US): verifiable parental consent for any data collected. We collect no data, but the kidSAFE seal is the documentation.
- **GDPR-K** (EU): mirror requirements. We collect no data, but the privacy policy + memory-wipe flow are documented.
- **ASTM F963** (US toy safety): standard toy-safety testing. Schedule with CPSIA testing.

### 9.2 Shipping logistics

- **Production:** Bulk-ship to US 3PL (ShipBob or similar) first. China→US parcel shipping is structurally uneconomic post-Aug 2025 de minimis.
- **US fulfillment:** ShipBob or comparable. Net 30 from production to warehouse.
- **EU fulfillment:** Via BackerKit's EU fulfillment network (VAT/IOSS handled).
- **UK fulfillment:** BackerKit UK (post-Brexit VAT handled).
- **AU/NZ fulfillment:** Local AU 3PL (e.g., Shippit) or direct from US 3PL with AU/NZ carrier (Australia Post, NZ Post).
- **CA fulfillment:** Direct from US 3PL (Canada Post).
- **JP fulfillment:** BackerKit JP partner.
- **Hazmat:** Li-ion 18650 cells require UN 38.3 testing. Reserve $2,000–$5,000 for testing. Bulk shipping via ground (US) or sea (EU).

### 9.3 Timeline

| Phase | Months | Activities |
|---|---|---|
| **Pre-tooling** | 0–2 (campaign + post-campaign) | Finalize BOM, lock factory, design freeze, start compliance testing. |
| **Tooling** | 2–5 | Injection-mold tooling, first article samples. |
| **EVT / DVT / PVT** | 5–7 | Engineering validation → Design validation → Production validation. |
| **Production** | 7–8 | First 1,000 units manufactured. |
| **QA + shipping prep** | 8–9 | Burn-in, factory acceptance test, bulk-ship to 3PLs. |
| **Backer ship** | 9–12 | US first, then EU/UK, then AU/NZ/CA/JP. Tracking numbers via BackerKit. |

**Ships Q4 2026 (October–December).** Backers receive the first units.

---

## 10. What we don't do (KS edition)

Inherited from `pre-order-campaign.md` §"What we don't do":

- **No paid ads until pre-launch conversion is validated.** Paid amplification starts day +3, after organic.
- **No influencer marketing in Year 1.** Trust, not reach.
- **No discounts on the founder's price.** The early-bird is the founder's price.
- **No urgent language.** "Only 24 hours left!" — never.
- **No fear language.** "If you don't back now, you'll regret it!" — never.

**KS-specific additions:**

- **No "limited time" countdown timers in emails.** The 30-day countdown is the campaign itself. Adding sub-countdowns erodes trust.
- **No fake scarcity.** Tier caps are real (Backer Bundle = 100). Stretch goals are real. We don't lie about inventory to manufacture urgency.
- **No "stretch goal: add this feature we forgot to design."** Stretch goals deepen, not widen.
- **No update without a number.** Every weekly update has the total raised, the percentage of goal, the next stretch goal. No vague "we're getting there!" posts.
- **No celebrity endorsements.** The video narrator is a real parent. The founder is on the page, not on a podcast circuit.

The Lummings brand is built on warmth and patience. **The campaign should be too.**

---

## 11. Success metrics

| Metric | Target | Stretch |
|---|---|---|
| **Funded** | Yes | — |
| **Goal ($150K)** | 100% | — |
| **Stretch goal tier 1 ($200K, Origins book)** | Yes | — |
| **Stretch goal tier 2 ($275K, voice cloning)** | Yes | — |
| **Stretch goal tier 3 ($325K, multi-language)** | Yes | — |
| **Stretch goal tier 4 ($400K, Luna's Spooky Story Mode)** | Yes | — |
| **Total raised** | $300K | $500K |
| **Backers** | 1,500 | 3,000 |
| **Average pledge** | $200 | $250 |
| **Email list growth** | +5,000 | +10,000 |
| **Press coverage** | 3+ Tier-2 outlets | 1+ Tier-1 outlet |
| **HN front page** | Top 10 | #1 |
| **Fulfillment rate** | >90% on time | 100% on time |
| **Backer survey completion (BackerKit)** | >85% | >95% |
| **Refund rate post-ship** | <5% | <2% |

---

## 12. After the campaign (post-funding playbook)

### 12.1 Week 1 post-campaign

- BackerKit survey opens.
- "Thank you" update with stretch-goal recap.
- Pledge manager closes within 48 hours (no late additions, no exceptions).

### 12.2 Months 1–3

- Monthly update: production timeline, factory visits (with photo), tooling progress.
- Open-source commit highlights.
- Backer-only Discord or forum (we use the GitHub Discussions + a Discord bridge).

### 12.3 Months 4–6

- EVT/DVT/PVT updates with first-article photos.
- Compliance testing status (CPSIA, CE, kidSAFE).
- Honest slip communication if any.

### 12.4 Months 7–9

- Production update + estimated shipping dates.
- Bulk-ship to 3PL status.
- BackerKit address-confirmation re-send.

### 12.5 Months 9–12

- **Shipping.** US first, then EU/UK, then AU/NZ/CA/JP.
- Tracking numbers via BackerKit.
- Day-of-ship update with a parent unboxing video.

### 12.6 Year 1 post-ship

- 30-day return window opens.
- Software updates via OTA (Wi-Fi delivered personality packs).
- Personality packs launch at $25 each (the Companion Pack + Backer Bundle backers get 12–24 months free).
- Year-1 DTC site (`optimusio.github.io/lummings`) opens for non-backer orders.

---

## Appendix A — Brand voice reminders

From `BRAND.md`:

- We are **warm, hopeful, patient, honest, quiet**.
- We are **not** a screen. We are **not** loud. We are **not** perfect.
- We say **"your Lumming"** not "the toy." We say **"a piece of tomorrow"** not "our product."
- We **never** say "AI" or "artificial intelligence" in child-facing copy. The Lumming is just Lumo.
- We **never** say "smart" — we sell companionship, not smartness.
- We **never** say "educational" as a primary descriptor — we sell characters, not lessons.

The KS campaign page uses these rules throughout.

## Appendix B — Stretch-goal copy blocks (paste-ready)

These blocks are formatted for direct paste into the KS project page.

**$200K — The Lummings Origins book**

> 📖 **UNLOCKED: The Lummings Origins hardcover book.**
>
> A 7"×9" art book — the story of the five Lummings, their world, the Lumming Code, and how they came to be. Illustrated by [TBD]. PDF delivered digitally to all backers. Hardcover ships with the device.

**$275K — Voice cloning module**

> 🎙️ **UNLOCKED: A custom voice for every Lumming.**
>
> Every Lumming will ship with a brand-trained Piper voice — replacing the open-source default with one that sounds like Lumo, Luna, Sprout, Nori, and Moki. Recorded by [voice actor]. Open-source voice dataset published at campaign end.

**$325K — Multi-language Lummings (JP, FR, ES, DE)**

> 🌏 **UNLOCKED: The Lummings speak four new languages.**
>
> Lumo, Luna, Sprout, Nori, and Moki will ship speaking Japanese, French, Spanish, and German at launch. Localised openers, localised private-language words, localised refusal patterns. We're partnering with [TBD] for native-speaker review.

**$400K — Luna's Spooky Story Mode**

> 📚 **UNLOCKED: Luna's Spooky Story Mode.**
>
> Luna gains an interactive spooky story-builder. Your child co-writes a dark tale with Luna. Luna remembers the chapters. Weeks later, your child can ask Luna to retell the story — and Luna prompts them back. The longest-arc Lumming, for the most imaginative kids.

**$500K — Open Personality SDK**

> 🛠️ **UNLOCKED: Anyone can write a Lumming personality.**
>
> A documented SDK for writing new Lummings in plain JSON + system-prompt markdown. Community-published personalities at $5 each (Lummings takes 30%). Hosted on a public registry. Compounding the open-source moat.

**$650K — The Schoolhouse Edition**

> 🏫 **UNLOCKED: The Schoolhouse Edition (2027).**
>
> A hardware variant for classrooms: 10-device rack with shared charging + classroom management mode. One Lumming per child, with parent + teacher pairing. Available 2027. Ships separately — does not delay consumer backers.

---

## Appendix C — The line that must be on every KS update

> **The Lummings run on open source. If we disappear tomorrow, your child's Lumming still wakes up.**

This is the one sentence every backer should remember. It earns the trust that survives any risk event.

---

*Last updated: September 30, 2026. Maintained by the team.*