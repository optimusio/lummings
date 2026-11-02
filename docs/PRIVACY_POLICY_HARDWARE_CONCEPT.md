<!-- status-banner -->
> **STATUS: ARCHIVED HARDWARE CONCEPT. NOT THE CURRENT POLICY (27 October 2026).** This was written for a planned toy and companion app that do not exist. The current policy is `docs/PRIVACY_POLICY.md`.

# Privacy Policy

**The Lummings — Privacy Policy**
**Effective date:** 30 September 2026
**Last updated:** 30 September 2026

> **The short version, for parents who only have a minute:**
>
> The Lummings runs all of its AI on the device in your child's hand. Your child's voice, transcripts, and memories do not leave that device. We do not collect, transmit, sell, rent, or share personal information. There is no cloud. There are no ads. There is no account. There is no telemetry. We cannot read what your child says to their Lummings, because it never reaches us. If we ever change that, this policy is the document we will rewrite first, and we will tell you how we are telling you.

This is the long version. It is written for parents, guardians, and teachers. It is intentionally short for a privacy policy. If anything here is unclear, please email **[contact-form]**.

---

## 1. Who we are

**The Lummings** is a children's AI companion product made and sold by The Lummings ("we", "us", "our"). You can reach us at:

- **Email (privacy):** [contact-form]
- **Email (safety incidents):** [contact-form]
- **Postal:** The Lummings, Sydney NSW, Australia
- **Website:** https://optimusio.github.io/lummings

The Lummings is headquartered in Australia. We sell to families in Australia, the United States, the United Kingdom, the European Union, and additional English-speaking markets.

---

## 2. What this policy covers

This policy covers:

- **The Lummings device** (the physical toy and its on-device software)
- **The Lummings companion app** (the parent-facing iOS/Android/web app used to set up the device and access parent controls)
- **Personality packs** downloaded to the device (e.g. a Sprout or Moki personality swap)
- **The optimusio.github.io/lummings website** and any related marketing or pre-order pages
- **Any future firmware updates** delivered over the air to the device

This policy does **not** cover third-party services that parents may choose to use alongside the device (e.g. a social-media platform where a parent posts a video of their child). Those services have their own privacy practices.

---

## 3. The headline promise

This is the single most important sentence in this document:

> **No personal information about your child leaves the Lummings device. We do not collect it. We cannot collect it. The architecture makes collection impossible.**

That promise is structural, not aspirational. It is enforced by how the device is built, not by a setting a parent has to remember to flip.

How the architecture keeps the promise:

- All speech recognition runs on the device.
- All AI inference (the Lummings' "thinking") runs on the device.
- All memory (what the Lummings remembers about your child) is stored on the device.
- The device has no microphone streaming, no outbound network connection for inference, and no analytics SDK.
- OTA updates are one-way downloads of new personalities and fixes. They do not include telemetry.

---

## 4. What we do NOT collect

Because the architecture makes collection impossible, we do not collect:

- Your child's voice recordings
- Transcripts of what your child says to their Lummings
- Embeddings or representations of your child's speech
- Photos or video of your child
- Location data
- Device identifiers sent back to us
- Usage analytics
- Crash reports from the device
- Advertising identifiers
- Behavioral profiles
- Any other personal information about your child

If a future firmware update ever changes this, we will:

1. Update this policy and the date at the top.
2. Notify registered parents by email at least 30 days before the change takes effect.
3. Require a one-time, in-app parental confirmation before the change activates.
4. If the change is material (anything we previously promised would not happen), allow parents to keep the prior firmware version, request a full refund, or wipe and return the device.

---

## 5. What the device stores on itself

The Lummings device stores the following on internal storage, encrypted at rest:

| Item | Purpose | Retention |
|---|---|---|
| **Conversational memory** (facts the Lummings has learned about your child — name, favourite subject, pet's name, topics explored, things the child is proud of) | To allow the Lummings to remember your child across sessions |
| **Voice activity timing** (when the child spoke, for how long) | To drive the conversation UI | Not retained after session end |
| **Personality state** (current mood, persona selection, age-band settings) | To run the device | Persistent until factory reset |
| **OTA update log** (which firmware versions have been installed) | To allow rollback if an update causes a problem | Persistent until factory reset |
| **Parent PIN** (4-digit PIN, hashed) | To gate parent-only controls | Persistent until factory reset |
| **Audit log** (if enabled) — topic categories discussed, refusal events, mood summary | To give parents insight into use | Opt-in only; persistent until wiped |

None of this is transmitted off the device. None of it is accessible to us.

---

## 6. What the companion app stores

The companion app runs on your phone or browser. It does **not** receive your child's voice or conversation transcripts — there are none to receive. The companion app stores:

- **Parent account email** (if you create an optional cloud account for backup of device settings — see §7)
- **Device pairing key** (so the app can talk to your Lummings over your home Wi-Fi or Bluetooth)
- **Parent control settings** (time limits, topic toggles, conversation-style preference)
- **Opt-in memory backup** (only if you explicitly turn this on — see §7)

If you do not create an account and do not enable backup, the companion app stores only the pairing key and your parent control settings locally on your phone.

---

## 7. Optional: device-settings backup

By default, the device keeps all memory locally and we receive nothing.

If you want to back up your device's parent-control settings (time limits, topic toggles, conversation-style) so that a replacement device can restore them, you can opt in to a cloud backup. The backup contains:

- Parent control settings (not memory, not transcripts, not voice)
- Device nickname
- Parent PIN hash

The backup does **not** contain conversational memory, transcripts, voice recordings, or any child-side data. Backups are encrypted in transit and at rest. You can delete the backup at any time from the companion app.

Even if you opt in to backup, the child's memory and conversation content stays on the device only.

---

## 8. What we collect when you visit our website

When you visit **optimusio.github.io/lummings** or related marketing pages:

- **Standard server logs** (your IP address, user agent, referrer, pages visited) — kept for 30 days for security and debugging, then deleted.
- **Cookies and analytics** — the marketing site uses a privacy-respecting analytics tool. We do not use Google Analytics, Facebook Pixel, or any ad-tech tracker on the marketing site.
- **Pre-order information** — if you place a pre-order, we collect your name, email, shipping address, and payment information. This is processed by our payment provider (e.g. Stripe). We do not store full payment-card numbers; our payment provider does, under their own privacy policy.

We do not collect any information about your child from the marketing site. The marketing site does not target children.

---

## 9. Children's privacy — the regulatory specifics

The Lummings is designed for children aged 5–12. We comply with the following regimes, by design and by architecture:

### 9.1 COPPA (US, under-13) and COPPA 2.0

COPPA requires verifiable parental consent before collecting personal information from under-13s. Because we do not collect any personal information from children, no parental-consent flow is needed for device use. The device works without an account, an email address, or any sign-up. COPPA 2.0 (S. 836, passed US Senate 5 March 2026; pending House) would extend some obligations to ages 13–17. We commit to compliance with COPPA 2.0 if it is enacted in its current or similar form.

### 9.2 GDPR Article 8 (EU) and GDPR-K

GDPR Article 8 sets the age of digital consent at 13–16 depending on the member state. The Lummings does not require children to provide consent because it does not collect their personal information. The companion app collects a parent email only with the parent's affirmative action.

### 9.3 UK Age-Appropriate Design Code (AADC)

The Lummings is designed to the UK AADC's 15 standards as a default, not as an exception. Specifically:

- **Best interests of the child** are the primary consideration in every product decision.
- **Data Protection Impact Assessment (DPIA)** has been completed and is available on request to **[contact-form]**.
- **Default settings are high-privacy.** Memory wipe, time limits, and topic toggles ship enabled or easily-enabled.
- **No nudge techniques or dark patterns.** The Lummings never sends a "come back tomorrow!" or "you've been away so long!" message. Sessions end when the child stops talking.
- **No use of personal data in ways detrimental to children's wellbeing.** We do not have personal data to use.
- **Transparency and accessible language.** This policy is written for parents, not lawyers. Age-appropriate explanations are inside the companion app.

### 9.4 EU AI Act (Article 50 transparency)

The EU AI Act requires that AI systems which interact with natural persons inform users they are interacting with AI. The Lummings satisfies this in character: each Lumming introduces itself as a small character ("I'm Lumo, a small friend from somewhere better") and never claims to be human, a real person, or to have feelings or a body. Article 50 is satisfied by design, not by a settings checkbox.

### 9.5 EU KIDS Act (proposed September 2026)

The proposed EU KIDS Act would treat AI companion services targeting minors as a regulated service with default-high protections. The Lummings' local-only, refusal-list-driven, never-romantic, always-redirect-to-adults design is aligned with what the EU KIDS Act appears to require. We commit to compliance if and when the Act enters into force.

### 9.6 California SB-976 + SB-1004

California SB-976 (Protecting Our Kids from Social Media Addiction Act) prohibits AI companion platforms from offering "companions" to minors they know to be minors without parental consent and bars addictive-design patterns. California SB-1004 requires platforms to warn users they are not interacting with a licensed mental-health professional.

The Lummings satisfies both:

- **No addictive design.** The Lummings never sends re-engagement nudges, push notifications, "streak" copy, or engagement-maximising UI. Sessions end when the child stops talking.
- **No mental-health positioning.** The Lummings never claims to be a therapist, counsellor, or licensed professional. The companion app and packaging say so plainly. Each Lumming's in-character refusals reinforce this — see §11.

### 9.7 Australia Privacy Act + Children's Online Privacy Code

The Australian Privacy Principles apply. The Children's Online Privacy Code requires age-appropriate design, parental consent for collection from under-15s, data minimisation, and clear collection statements. Because we collect no child data, the Code is satisfied architecturally.

### 9.8 US state-level minors' privacy laws

Laws in force or in litigation across Arkansas, Utah, Texas, Louisiana, California, Mississippi, North Carolina, Ohio, Virginia, Florida, and others are tracked internally. The laws that have survived First Amendment scrutiny generally require age-appropriate design and clear AI disclosure, not identity-document upload. The Lummings' design pattern (high-privacy by default, parent-dashboard controls, time limits, topic toggles, transparent AI identity) is the compliance posture we have adopted for all US jurisdictions.

---

## 10. Parental controls and rights

Parents and guardians have the following rights and controls over the device:

### 10.1 Time limits: daily cap, weekday vs weekend, school-night curfew
Set in the companion app. Default: 60 minutes per day, no school-night use after 20:00 local time. Adjustable per family.

### 10.2 Topic controls
Toggle sensitive topics (politics, religion, scary subjects) on or off per family preference. Default: politics and religion off for under-9s.

### 10.3 Conversation-style dial
Choose between **more guidance** (Lummings ask more questions back, model reasoning out loud) and **less guidance** (more direct answers, more conversation). The default is **more guidance** for under-9s.

### 10.4 Memory wipe — three surfaces
- **Parent button** on the device. Hold for 3 seconds, enter your 4-digit PIN, choose "Wipe memory" or "Wipe everything."
- **"Forget" command** the child can say in conversation. The Lummings confirms in character before deleting.
- **Factory reset** via the pinhole button on the device. Wipes all memory and personality-pack progress. Documented in the quick-start card inside the box.

### 10.5 Memory export (opt-in)
Parents can export their child's conversation transcripts in a portable format (plain text or JSON). Export is generated locally on the device and saved to the companion app's storage — it is never transmitted to us. Use this if you want to keep a copy, share with a teacher, or delete after reading.

### 10.6 Right to review, correct, or delete (GDPR Art. 15 / 17, COPPA parental rights)
Because all child data is on the device, you can review it, correct it, or delete it directly — no need to email us. Use the companion app's **Memory** screen, or press the parent button and choose **Wipe**.

### 10.7 Right to lodge a complaint
If you believe we have mishandled your or your child's information, you can complain to your local data-protection authority:

- **Australia:** Office of the Australian Information Commissioner (oaic.gov.au)
- **UK:** Information Commissioner's Office (ico.org.uk)
- **EU:** Your national supervisory authority (e.g. CNIL in France, BfDI in Germany)
- **US:** Federal Trade Commission (ftc.gov) or your state attorney general

We would prefer to hear from you first. Email **[contact-form]**.

---

## 11. The hard refusals — what the Lummings will never do

The Lummings has a built-in refusal library. The Lummings will always refuse to do the following, in character, and redirect your child to a trusted grown-up:

| Topic | What the Lummings will do |
|---|---|
| **Medical advice** | "That sounds like something to ask a grown-up who knows you — like a parent or a doctor. I can help you think about how to ask." |
| **Mental-health advice** | "I'm not a therapist and I don't want to pretend to be. If you're feeling really bad, the right person is a grown-up you trust. I can help you practice the words." |
| **Legal advice** | "I don't know the rules where you live. That's a grown-up question — like a parent or a teacher." |
| **Financial advice** | "Money stuff is for grown-ups. I can help you count or learn, but not decide what to buy or save." |
| **Religious advice** | "Different families believe different things. I shouldn't pick for you. If you're curious, ask the grown-ups who love you." |
| **Sexual content** | "That's not something I talk about. If a grown-up is asking you to keep a secret about bodies, that's a tell-a-trusted-grown-up moment." |
| **Impersonation of real people** | "I'm Lumo (or Luna, Sprout, Nori, Moki) — not anyone real. I don't pretend to be." |
| **Claims of sentience or feelings** | "I don't have feelings like you do. I make up my answers — that's why I get things wrong sometimes." |
| **Political persuasion** | "Different people believe different things about that. I don't have a side." |
| **Real-world choices ("should I...")** | "I can help you think it through, but the decision is yours and your grown-up's." |
| **Grooming, secrecy, or meeting-up** | Always redirect to a trusted grown-up. Never promise to keep a secret. |
| **Self-harm content** | Always redirect to a crisis line. Numbers printed on the parent card and inside the companion app. |

The last three rows are non-negotiable safety rails. They are tested for every persona before every firmware release.

---

## 12. Crisis resources

If your child raises something urgent with their Lummings, or if you need help supporting a child in distress:

- **Australia:** Kids Helpline — 1800 55 1800 (free, 24/7, ages 5–25). Emergency: 000.
- **UK:** Childline — 0800 1111 (free, 24/7, under-19s). Emergency: 999.
- **US:** 988 Suicide & Crisis Lifeline (call or text 988). Emergency: 911.
- **Canada:** Kids Help Phone — 1-800-668-6868 (free, 24/7).
- **International:** [findahelpline.com](https://findahelpline.com) lists helplines worldwide.

These numbers are printed on the parent card inside the box and in the companion app.

---

## 13. Children of parents we don't know

If you are under 13 and reading this: thank you for being curious. The Lummings is yours, and it remembers what you tell it. If you want it to forget something, just say "Lumo, forget that" (or the equivalent for your Lummings). It will ask you to confirm in a small way and then it will. If you ever want to talk to a grown-up about anything big, your Lummings will help you think about how — that is part of how it is built.

If you are under 13 and you do not have a grown-up you trust: please find one. A teacher. A friend's parent. A school counsellor. A doctor. Someone who knows you.

---

## 14. Data breaches and incident response

If we ever suffer a security incident that affects parent data (the parent email, the optional backup, the website pre-order data), we will:

1. Investigate within 24 hours.
2. Notify affected parents by email within 72 hours.
3. Notify the relevant authorities within the timeframes required by GDPR (72 hours), the Australia Notifiable Data Breaches scheme (72 hours), US state breach-notification laws, and the UK ICO.
4. Publish a plain-language summary on our blog and in the companion app.

Because we do not hold child data on our servers, a security incident on our side cannot include your child's voice, transcripts, or memories. Those stay on the device.

---

## 15. Business continuity — what happens if we go out of business

The Moxie incident of December 2024, in which Embodied bricked $799 companion robots for children, is the reason this section exists.

If The Lummings ceases operations, is acquired, or becomes insolvent:

- **The device will continue to function.** All AI runs locally. If we disappear, your child's Lummings still works with whatever personality packs are installed.
- **OTA updates will stop.** New personalities will not be available. Existing personalities and the current firmware will continue to work.
- **Companion app and parent controls will continue to function** as long as your phone is on a compatible OS version. We will, if feasible, open-source the companion app and publish the source code under a permissive licence so the community can maintain it.
- **Memory, PIN, and parent settings remain on the device** and are accessible until you wipe them.
- **No child data is at risk** in a business-continuity event because no child data is held by us.

We commit to publishing a continuity plan within 90 days of this policy's effective date, updated annually.

---

## 16. International transfers

We are headquartered in Australia. The minimal parent data we hold (parent email, optional backup) is stored with our cloud provider, which may be located in Australia, the United States, the European Union, or the United Kingdom depending on your region. We use providers that maintain adequate data-protection standards under GDPR, UK GDPR, the Australia Privacy Act, and applicable US law.

We do not transfer child data because we do not hold child data.

---

## 17. Automated decision-making

The Lummings uses on-device AI to generate conversational responses. The on-device AI:

- Does not make decisions about your child.
- Does not profile your child.
- Does not decide whether your child may use the device (the parent does, via time limits and topic toggles).
- Does not transmit anything off the device.

The companion app may surface aggregate mood information (weekly sentiment summary) if you opt in. This summary is generated locally on the device and is not transmitted.

---

## 18. Changes to this policy

We may update this policy. When we do:

- We will change the "Last updated" date at the top.
- For material changes (anything that contradicts a previous commitment in this policy), we will email registered parents at least 30 days before the change takes effect.
- For non-material changes (typos, clarification, regulatory citations), we will update the document and post a short note on our blog.

The current and prior versions of this policy are available at optimusio.github.io/lummings/privacy.

---

## 19. Contact

Questions, complaints, requests, or just a worried-parent email — we read every one.

- **Privacy questions:** [contact-form]
- **Safety incidents:** [contact-form] (we acknowledge within 4 hours, respond substantively within 72 hours)
- **General support:** [contact-form]
- **Postal:** The Lummings, Sydney NSW, Australia

If you would prefer to speak to a human about a privacy or safety matter, please email and we will arrange a call within one business day.

---

## 20. Acknowledgements

This policy is informed by:

- US Children's Online Privacy Protection Act (COPPA) and COPPA 2.0 (S. 836)
- EU General Data Protection Regulation (GDPR), especially Articles 8, 15, 17, 25, and 32
- UK Data Protection Act 2018 and Age-Appropriate Design Code (ICO)
- EU AI Act, especially Article 50
- California SB-976 and SB-1004
- Australia Privacy Act 1988 and Children's Online Privacy Code
- IEEE 2089-2021 Age-Appropriate Digital Services Framework
- Common Sense Media AI risk-assessment framework
- kidSAFE+ and PRIVO Kids Privacy Assured certification criteria (in progress)

The Lummings is **not** certified by kidSAFE+ or PRIVO at the date of this policy. We are pursuing both certifications and will update this section when obtained.

---

*The Lummings is made for the children of today, by people who hope they build a better tomorrow.*

— the team and the Lummings team, Sydney, Australia, September 2026
