# Decisions

Numbered, with reasons and rejected alternatives. Add new entries at the bottom; do not rewrite old ones. If a decision is reversed, add a new entry that supersedes it.
Format: **Status** (Accepted / Superseded), **Date**, **Decided by**, then Context, Decision, Alternatives rejected, Consequences. Where a reason was not recorded at the time, say so and confirm it; do not guess.

---

## ADR-001: Rewrite in place on the same stack, modernised
- **Status:** Accepted. **Date:** 2026-11-04. **Decided by:** Emmanuel.
- **Context:** The old site had out-of-date content, a placeholder `mailto:example@gmail.com` link, and outdated dependencies (Next 14.1, React 18). It is the digital footprint and needs to connect to his other work.
- **Decision:** Keep Next.js App Router, TypeScript, Tailwind, Framer Motion, Resend on Vercel; upgrade everything and redesign the UX/UI.
- **Rejected:** A framework change (for example Astro, as used in `lucidmpools`). The Vercel setup and Server Action contact form already work, and the rewrite is meant to be a simple, obtainable task.
- **Consequences:** Upgrade cost was real (ADR-008) but bounded.

## ADR-002: Single page, all content in `lib/data.ts`
- **Status:** Accepted. **Date:** 2026-11-09 (kept from the original site's pattern). **Decided by:** Emmanuel with the first redesign draft.
- **Decision:** One route with hash-anchored sections. Structured content is data; components only render it.
- **Rejected:** A CMS or MDX content layer (the old README mentioned contentlayer, which was never installed). Overkill for about 20 content items.
- **Consequences:** Editing content is a one-file change. Project detail pages do not exist; add them only when there is enough to say.

## ADR-003: Positioning is full-stack, trading is one project, legacy plus modern is shown
- **Status:** Accepted. **Date:** 2026-11-04, reaffirmed 2026-11-09. **Decided by:** Emmanuel.
- **Context:** Day job is mainframe (COBOL, JCL, Natural, z/OS, SQL, XML); personal work is modern web and trading.
- **Decision:** Lead as a full-stack developer. Keep the Comptroller role public and make legacy depth a deliberate strength. Keep the headline "Student of markets". Signal openness to project work without "contract" or "hire me" language.
- **Rejected:** A trading-first brand; hiding or downplaying the legacy stack; "job hunting" wording.
- **Consequences:** Employer detail is limited to technologies and general impact (see AGENTS.md).

## ADR-004: Serve the portfolio on paradoxequity.com for now
- **Status:** Accepted, temporary. **Date:** 2026-11-04. **Decided by:** Emmanuel.
- **Context:** The domain already serves this site. The Paradox product (separate repo) deploys to Azure Static Web Apps and will want the domain.
- **Decision:** Portfolio at the root until Paradox is built out. The domain is read from `NEXT_PUBLIC_SITE_URL`, so it can change without code edits.
- **Rejected for now:** Buying a separate personal domain immediately.
- **Consequences:** When Paradox launches, either it takes a subdomain or the portfolio moves to a personal domain. Revisit then.

## ADR-005: Design direction: "market terminal on paper"
- **Status:** Accepted (draft 1, still iterating). **Date:** 2026-11-09. **Decided by:** Emmanuel, from the research and mockup session.
- **Decision:** Ticker strip of facts, project rows styled as a watchlist (symbol, trend, status), faint chart-paper grid, serif headings, mono labels, and word-pair flips for the "paradox" motif (developer/trader, legacy/modern, logic/intuition).
- **Constraints:** Ticker holds labels only; sparklines are decorative and must never be presented as data.
- **Consequences:** The look ties the portfolio to the trading theme without claiming a track record.

## ADR-006: Dark-first theme with a light toggle
- **Status:** Accepted. **Date:** 2026-11-09 (commit `f06ecfe`). **Decided by:** Emmanuel.
- **Decision:** Dark is the default; `html.light` switches palettes. An inline pre-paint script applies a saved "light" choice. Tokens are CSS variables mapped through Tailwind `@theme inline`.
- **Reason:** Emmanuel's personal preference.
- **Rejected:** Following `prefers-color-scheme` automatically (not implemented; dark is the default for everyone unless they toggle).
- **Consequences:** Every colour must come from a token so both palettes work. The toggle reads the `<html>` class, so there is no flash.

## ADR-007: Drop project screenshots; keep rows text-only
- **Status:** Accepted. **Date:** 2026-11-09 (commit `f06ecfe`). **Decided by:** Emmanuel.
- **Context:** `SCEC_homepage.png` was the last project screenshot and was deleted in the same commit as the dark theme.
- **Reason:** Emmanuel's personal preference; he judges the page cleaner without them. Revisit if real screenshots exist for Paradox.
- **Consequences:** `Project` no longer has an `image` field.

## ADR-008: Dependency upgrade and cleanup as its own commit
- **Status:** Accepted. **Date:** 2026-11-09 (commit `f671342`). **Decided by:** Emmanuel (requested), executed by Hermes.
- **Decision:** Next 14.1 to 16.4, React 18 to 19, Tailwind 3 to 4, TypeScript 5.1 to 5.9, ESLint 8 to 9 flat config, Resend 0.16 to 6, framer-motion 10 to 14, React Email 0.0 to 1.x. Removed 11 unused dependencies and 7 unused assets.
- **Forced changes:** Resend 6 returns `{ data, error }` and uses `replyTo`; `next lint` no longer exists (script is `eslint .`); Tailwind config moved into CSS.
- **Lessons:**
  - Tailwind 4 requires Node >=20.19 or >=22.12; the machine default (20.11.1) fails the build, so `.nvmrc` is 22 and `engines` enforces it.
  - next/font variables need `@theme inline`, otherwise fonts silently fall back (caught by checking computed font families).
  - Rebuilding `.next` under a running `next start` serves HTML without CSS; restart the server after a build.
- **Open:** Tailwind 4 and Next 16 are new; watch for ecosystem breakage on later upgrades.

## ADR-009: Status date is computed with daily revalidation
- **Status:** Accepted. **Date:** 2026-11-09. **Decided by:** Emmanuel (replace the hardcoded date), implemented by Hermes.
- **Decision:** `StatusPill` is a server component rendering month and year at render time; `page.tsx` sets `revalidate = 86400`. Passed to the client `Hero` as a prop.
- **Rejected:** Computing the date in the client `Hero` (hydration mismatch when the month rolls over between build and visit); hard-coding it again; removing the date.
- **Consequences:** Needs a host that supports ISR (Vercel does). On a pure static export the date would freeze at build time.

## ADR-010: Mobile header drops links before it wraps
- **Status:** Accepted. **Date:** 2026-11-09. **Decided by:** Hermes, to keep one line after social icons were added.
- **Decision:** Below 640 px hide About, Experience and Now; below 360 px also hide Work. Hero CTAs still reach Contact. Icons for GitHub, LinkedIn and the theme toggle always show.
- **Rejected:** A hamburger menu (more code for 5 anchors on a one-page site).

## ADR-011: Agent documentation follows the portfolio's existing pattern
- **Status:** Accepted. **Date:** 2026-11-09. **Decided by:** Emmanuel (requested), written by Hermes.
- **Decision:** Short portable `AGENTS.md`, a one-paragraph `.github/copilot-instructions.md` that points to it (same as `lucidmpools`), and detail in `docs/`. The Next-generated agent-rules block stays inside `AGENTS.md` between its markers so `next dev` does not append a duplicate.
- **Rejected:** A long Copilot ruleset like `trader`'s 794-line file; too heavy for a one-page site.

## ADR-012: One source for the availability line
- **Status:** Accepted. **Date:** 2026-11-09. **Decided by:** Emmanuel.
- **Decision:** `availability` constant in `lib/data.ts` feeds both `StatusPill` and the ticker's STATUS item.
- **Rejected:** Leaving two copies; they had already been edited separately once.

## ADR-013: Send contact mail from a verified subdomain, `contact@mail.paradoxequity.com`
- **Status:** Accepted. **Date:** 2026-11-09. **Decided by:** Emmanuel; Hermes changed the code.
- **Context:** The sandbox sender `onboarding@resend.dev` landed in spam and only delivers to the Resend account owner. DNS for paradoxequity.com is at Spaceship and had no MX or TXT records.
- **Decision:** Verify `mail.paradoxequity.com` in Resend and send from `contact@mail.paradoxequity.com`. The address is a constant in `actions/sendEmail.ts`, overridable by `CONTACT_FROM_EMAIL`.
- **Rejected:** Sending from the root domain (keeps the root free for real mailboxes or Paradox later); keeping the sandbox sender.
- **Consequences:** Set `RESEND_API_KEY` in Vercel. Reply-to is the visitor, so replying works directly.

## ADR-014: Open Graph card, sitemap and robots
- **Status:** Accepted. **Date:** 2026-11-09. **Decided by:** Emmanuel (asked for it), Hermes designed it.
- **Decision:** Generate the share card in code (`app/opengraph-image.tsx`) with the headline and name on the dark palette; add canonical and Twitter large-image metadata; add a one-URL sitemap and a permissive robots file.
- **Rejected:** A static PNG (drifts from copy); skipping sitemap and robots (cheap, and Search Console uses them).
- **Consequences:** Card font is sans, not the site's serif. If the headline changes, update the card text too.
