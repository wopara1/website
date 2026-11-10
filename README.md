# website

Emmanuel Wopara's portfolio, served at https://www.paradoxequity.com. Next.js (App Router), TypeScript, Tailwind CSS 4, Framer Motion, Resend, hosted on Vercel.

## Run it
Requires Node 22 (`.nvmrc`).
```bash
npm ci
cp .env.example .env.local   # add RESEND_API_KEY for the contact form
npx next dev -H 127.0.0.1 -p 4322
```
Checks: `npm run lint` and `npm run build`.

## Where things are
- Content: `lib/data.ts`
- Architecture: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- Editing content and adding projects: [`docs/CONTENT.md`](docs/CONTENT.md)
- Decisions and reasons: [`docs/DECISIONS.md`](docs/DECISIONS.md)
- Agent rules (Hermes, Copilot, others): [`AGENTS.md`](AGENTS.md)

## Deploy
Vercel deploys on push to `main`. Set `RESEND_API_KEY` (and optionally `NEXT_PUBLIC_SITE_URL`) in the Vercel project settings. Work happens on `rewrite/2026`; do not merge to `main` until the redesign is signed off.
