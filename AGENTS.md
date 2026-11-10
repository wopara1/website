# AGENTS.md — website (Emmanuel Wopara's portfolio)

Portable entry point for any agent (Hermes, Copilot, Codex, Claude Code). Short on purpose; detail lives in `docs/`.

## What this is
Personal portfolio and digital footprint, served at https://www.paradoxequity.com. One static page (Next.js App Router) with sections Work, About, Experience, Now, Contact. All copy and structured content is in `lib/data.ts`. Not a client project. The Paradox product (`~/Desktop/Code/paradoxequity`) is a separate repo that will get its own site later.

## Docs
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): stack, file map, rendering, theming, contact flow, env vars, open items
- [`docs/CONTENT.md`](docs/CONTENT.md): how to edit copy, add a project, voice and positioning rules, pre-publish checklist
- [`docs/DECISIONS.md`](docs/DECISIONS.md): decisions with reasons and rejected alternatives. Read before reversing anything.

## Commands
- **Node 22 required** (`.nvmrc`; Tailwind 4 needs >=20.19 / 22.12). The machine default is Node 20.11.1 and the build fails on it. Use `~/.nvm/versions/node/v22.23.2/bin` or `nvm use`.
- Install: `npm ci`
- Dev: `npx next dev -H 127.0.0.1 -p 4322` (port 4322 is the habit; `npm run dev -- --port ...` was seen binding to 3000 instead, so call `next` directly)
- Check before every commit: `npm run lint` and `npm run build`
- Prod check: `npx next start -H 127.0.0.1 -p 4322` after a build. Never rebuild while a server is running on the same `.next`; the page then loads without CSS.

## Git workflow
- `main` is the live site (README says Vercel deploys on push to `main`). Never commit to `main`.
- Work on `rewrite/2026`. Do not push, merge or delete branches without Emmanuel's explicit say-so.
- Commit only what the task changed. `next dev` can rewrite the Next block in this file; if it shows as a diff, that is expected.
- Dependency upgrades go in their own commit.

## Hard rules
- Content lives in `lib/data.ts`. Components render it; do not hard-code copy in components unless it is layout-only text. Exception: the hero headline and the contact heading are written in their components on purpose.
- No fabricated data. The ticker holds labels only and sparklines are decorative. Never present them as market data, performance or track record.
- Employer detail: name technologies and general impact only (COBOL, JCL, Natural, z/OS, SQL, XML; "tax processing, security, accuracy"). No internal system names, data, or process specifics.
- Never read, print or commit `.env*`. Env vars are documented in `.env.example` (names only). Never ask for or paste a key.
- Do not add a dependency without a reason recorded in `docs/DECISIONS.md`. The last cleanup removed 11 unused ones.
- Styling goes through the colour and font tokens in `app/globals.css` (`bg-paper`, `text-ink`, `text-muted`, `text-up`, `border-line`). No raw hex in components. Both dark (default) and light palettes must look right.
- Keep `prefers-reduced-motion` support and visible focus styles on anything interactive.
- Tailwind 4 gotcha: next/font variables must stay behind `@theme inline`, or fonts silently fall back to system fonts.
- The contact form sends real email through Resend. Do not trigger real sends while testing.

## Content rules (short form; full version in `docs/CONTENT.md`)
- Positioning: full-stack developer, trading as one project. The "Student of markets" headline stays. Legacy (mainframe) plus modern is the differentiator and is shown openly.
- Signal availability for project work without saying "hire me" or "contract". Do not use "job hunting" language.
- Plain, specific, first person, no hype. Do not invent experience, years, metrics or client names.
- Update `CV.pdf` when the copy changes; the two must agree.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
