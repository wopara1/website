# Content guide

Everything the visitor reads is either in `lib/data.ts` or in a short list of component strings (below). Edit content there; do not restyle to change wording.

## Positioning (decided 2026-11-04)
- **Full-stack developer**, with trading as one project, not the whole identity. The headline "Full-stack developer. Student of *markets*." stays.
- **Legacy plus modern is the differentiator.** Day job: COBOL, JCL, Natural, z/OS, SQL, XML at the Texas Comptroller of Public Accounts. Own projects: TypeScript, React, Python/Django. The site says both openly, with the reasoning: legacy skills are getting rarer and modern ones keep changing, so knowing both stays useful.
- **Availability:** signal that project work is welcome without saying "contract" or "hire me", and without "job hunting" wording. Current phrasing: status pill/ticker "Open to connect", contact heading "Got something worth building? Tell me about it."

## Voice
Plain, specific, first person, light dry humour (see the Chess line). No buzzwords, no superlatives, no claims you cannot back up. Short sentences. Prefer a concrete noun to an adjective.

## Where each thing lives
| What | Where | Shape |
|---|---|---|
| Email, site URL | `lib/data.ts`: `email`, `siteUrl` | string |
| GitHub / LinkedIn | `socials` | `{ name, href }[]`; `name` must be `"GitHub"` or `"LinkedIn"` because `social-links.tsx` has an icon for each |
| Nav | `links` | `{ name, hash }[]`; hash must match a section `id` |
| Top strip | `tickerItems` | `{ label, value, tone: "up" \| "flat" \| "down" }[]`; labels only, no market data |
| Hover pairs | `pairs` | `[a, b][]`, rendered by `PairFlip` |
| Projects | `projects` | `Project` type (below) |
| Jobs and school | `experience` | `{ date, role, place, note }[]`; newest first |
| Skills | `stack.modern`, `stack.legacy` | `string[]`; legacy renders as filled pills |
| Now | `now` | `{ title, text }[]`; 4 fits the 2x2 grid |

Component-owned strings (edit in the component): hero headline and paragraph (`hero.tsx`), About paragraphs (`about.tsx`), contact heading and subcopy (`contact.tsx`), status text (`status-pill.tsx`), footer text (`footer.tsx`).

Known duplicate: the status text appears in `status-pill.tsx` ("Open to ...") and in `tickerItems` (STATUS). Change both together.

## Add or edit a project
Append an object to `projects` in `lib/data.ts`:
```ts
{
  symbol: "ABCD",              // 3-5 uppercase letters, unique; used as the row key and open-state id
  title: "Project name",
  role: "What you did",         // "Creator, full stack", "Solo, for fun"
  status: "Building",           // "Building" | "Shipped"
  featured: false,              // true tints the row; use for at most one
  description: "Two sentences max. What it is, what you did.",
  stack: ["React", "Django"],
  spark: [50, 55, 52, 60, 64, 62, 70, 74, 72, 80], // decorative, 0-100. Not data.
}
```
Rules:
- Every claim must be true and something you can speak to in an interview.
- No client names or confidential details. Client and contract work stays off the site unless the client agrees.
- The first row is open by default via `useState("PRDX")` in `work.tsx`. If you change the featured project, change that string.
- Repo or live links do not exist as a field yet. Adding one means extending the `Project` type and `work.tsx`, and a DECISIONS entry.

## Employer and experience
- Name the employer and role (already public on LinkedIn and the CV). Describe technologies and general impact only. No system names, data, volumes or internal process detail.
- Keep dates and titles identical to `CV.pdf` and LinkedIn.

## Status and dates
- Never hard-code a date in copy. The pill month/year is computed in `status-pill.tsx`; the footer year is computed. Years-of-experience statements should be avoided or computed.

## Before publishing
- [ ] Every fact in `lib/data.ts` and the component strings is current.
- [ ] `CV.pdf` matches the site.
- [ ] GitHub and LinkedIn URLs resolve.
- [ ] Spell-check: the old site shipped "Pyhton", "opportunityto", "PostgresSQL".
- [ ] `npm run lint` and `npm run build` pass on Node 22.
- [ ] Viewed in dark and light, at 1440, 390 and 320 px: no horizontal overflow, header stays one line.
- [ ] Contact form tested on a Vercel preview (not production) with a verified sender.
- [ ] Nothing on the page implies real market data or trading performance.
