# Show HN draft

**Title:** Show HN: The Lummings — a kids' AI character app with local-only memory

**Body:**

I built a kids' AI character app where every conversation stays on the device. Five mascots with distinct personalities, persistent memory per character, parent controls, refusal library. Free web app, optional $29 asset pack.

Why local-first:

- Moxie shut down Dec 2024 and bricked existing units
- My Friend Cayla banned in Germany 2017
- Every "AI companion for kids" cloud product has been hacked, banned, or discontinued

Why I think it matters:

- Parents don't want anyone talking to their kid except their kid
- Subscription fatigue is real — I refuse to charge monthly
- Quantized 7B models are finally coherent enough for kids' conversations

Stack:

- Qwen2.5-1.5B Q4_K_M (Pi Zero 2 W) or 7B (desktop)
- FastAPI + SQLite for state
- GitHub Pages for the free web app
- Stripe for the paid pack
- Open source repo: not linked publicly (privacy reasons)

Try it: https://optimusio.github.io/lummings/

Happy to talk about the local-LLM stack, the kids-privacy design decisions, or how I picked the 5 mascots.

**Best time to post:** Tuesday-Thursday, 8-10am US Pacific (largest tech audience awake).
