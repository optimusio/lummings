# AGENTS.md

Shared instructions for every coding agent working in this repo: Claude Code, GitHub Copilot, CodeRabbit, Ollama models, Hermes and others. Tool-specific files (`CLAUDE.md`, `.github/copilot-instructions.md`, `.coderabbit.yaml`) point back here. Edit this file, not the pointers.

## What this is
The Lummings: a bedtime app for children. Ship target is the web app in `web/`. `app/` (Flutter) and the Rust crates are older builds.

## Hard rules
- Public names are locked: Lumo, Luna, Sprout, Nori, Moki. Lila and Pip are retired; their ids survive only in storage names (`lila.json`, `pip-portrait.png`). Never show them to a child.
- Read `SOURCE_OF_TRUTH.md` and `BRAND.md` before changing names, copy or art.
- Do not generate new character portraits. The PNGs in the repo root are final.
- Child-facing: no tracking, no data leaving the device without the parent gate, no secrets in client code. Voice keys stay server-side.

## Commands
- Web: `cd web && npm install && npm run dev` (port 8080)
- Repo checks: `make lint`, `make test`, `make web-check`
- Flutter (old): `cd app && flutter pub get && flutter run`

## Working agreements
- Small PRs on a branch, never straight to `main`. One topic per PR.
- Run `make lint` and `make web-check` before pushing; say so in the PR if you could not.
- Do not merge your own PR. The owner merges.
- Commit as the GitHub noreply address (privacy setting rejects the real email).
- Report what you did not verify.

## Handing work between agents
- Leave a short note in the PR description: what changed, what is unverified, what is next.
- Reviewer bots (CodeRabbit, Copilot) comment; a human or Claude decides which to apply.
- Local models (Ollama at `http://127.0.0.1:11434`) are fine for drafts and summaries, not for final copy under the brand canon.
