# Architecture

Snapshot of branch `rewrite/2026` (written 2026-11-09). Describes what exists in the code, not plans.

## Stack
| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js App Router, Turbopack | 16.4 |
| UI | React | 19 |
| Language | TypeScript (strict) | 5.9 |
| Styling | Tailwind CSS, CSS-first config (`@theme`) | 4.3 |
| Motion | framer-motion | 14 |
| Email | Resend + React Email components | 6 / 1.x |
| Toasts | react-hot-toast | 2.6 |
| Analytics | `@vercel/analytics`, `@vercel/speed-insights` | 2.x |
| Fonts | Fraunces (serif), DM Sans (sans), JetBrains Mono (mono) via `next/font/google` | n/a |
| Lint | ESLint 9 flat config + `eslint-config-next` | n/a |
| Runtime | Node 22 (`.nvmrc`, `engines >=22.12`) | n/a |
| Hosting | Vercel (per README and the Analytics scripts; not verified from this repo) | n/a |

## File map
```
app/
  layout.tsx        fonts, metadata, theme-init script, Ticker/Header/Footer, Toaster, analytics
  page.tsx          composes the sections; revalidate = 86400
  globals.css       theme tokens (dark default, .light override), Tailwind theme, .label utility
  icon.svg, apple-icon.png, favicon.ico   EW monogram favicon set
  opengraph-image.tsx   1200x630 share card generated with next/og (dark palette, sans font)
  sitemap.ts, robots.ts   one URL (siteUrl); robots allows all and points to the sitemap
components/
  hero.tsx          client; headline, CTAs, social links, pair flips, headshot; takes a `status` node
  status-pill.tsx   SERVER; `availability` + month/year, computed at render
  ticker.tsx        client; scrolling facts strip from `tickerItems`
  header.tsx        sticky nav + SocialLinks (icons) + ThemeToggle
  work.tsx          client; accordion rows from `projects` (first row open by default)
  sparkline.tsx     decorative SVG line
  about.tsx / experience.tsx / now.tsx   static sections from data
  contact.tsx       client; form -> `sendEmail` server action
  footer.tsx        copyright (year computed), SocialLinks, build note
  social-links.tsx  one component, `variant="icons" | "text"`
  pair-flip.tsx     hover/focus word swap (the "paradox" motif)
  theme-toggle.tsx  client; dark/light switch
  section-heading.tsx
actions/sendEmail.ts   "use server"; validates, calls Resend
email/contact-form-email.tsx   React Email template
lib/data.ts        ALL content (see CONTENT.md)
lib/utils.ts       validateString, getErrorMessage
lib/types.ts       SectionName derived from `links`
public/            CV.pdf, gallery/headshot.png
```

## Rendering model
- One route, `/`, statically prerendered. `export const revalidate = 86400` in `page.tsx` makes Vercel regenerate it daily, so the date in `StatusPill` and the footer year stay current without a deploy.
- `StatusPill` is a server component and is passed into the client `Hero` as the `status` prop. That keeps the date out of client code and avoids a hydration mismatch.
- Client components (`"use client"`) are limited to the ones that need state or motion: Hero, Ticker, Work, Contact, PairFlip, ThemeToggle.
- Navigation is in-page hash anchors (`#work`, `#about`, `#experience`, `#now`, `#contact`) with `scroll-padding-top` for the sticky header.

## Theming
- Tokens are CSS variables in `app/globals.css`: `--paper`, `--paper-deep`, `--ink`, `--muted`, `--up`, `--down`, `--line`, `--grid`, `--frame`. Tailwind maps them with `@theme inline` (`bg-paper`, `text-ink`, `border-line`, ...).
- Dark is the default. The light palette applies when `<html>` has class `light`.
- `layout.tsx` injects a tiny inline script before first paint: it adds `light` only if `localStorage.theme === "light"`. `suppressHydrationWarning` is on `<html>` for that reason.
- `ThemeToggle` reads the `<html>` class via `useSyncExternalStore` (class is the source of truth) and saves the choice to `localStorage`.
- Font variables are set on `<body>` by `next/font` (`--font-*-face`) and mapped in a second `@theme inline` block. Without `inline`, Tailwind resolves them at `:root`, where they do not exist, and fonts fall back to system fonts.

## Contact flow
1. `contact.tsx` collects `senderEmail` and `message` (client-side `required`, `maxLength` 500 / 5000).
2. It calls the `sendEmail` server action with `FormData`.
3. The action re-validates both fields (type and length), then checks `RESEND_API_KEY`. If unset it returns `{ error: "Contact form is not configured..." }`.
4. It sends through Resend: from `Contact Form <contact@mail.paradoxequity.com>` (overridable with `CONTACT_FROM_EMAIL`), to `ewopara@gmail.com`, `replyTo` the sender, body from `ContactFormEmail`.
5. Resend v6 returns `{ data, error }` and does not throw on API errors; the action maps `error` to `{ error: message }`. The client shows a toast either way.

**Sender:** `mail.paradoxequity.com` is verified in Resend (DNS at Spaceship). The sandbox `onboarding@resend.dev` was used until 2026-11-09; it lands in spam and only delivers to the account owner.

**Tested 2026-11-09 (production build, local):** against a mock Resend endpoint (`RESEND_BASE_URL`), a 200 shows the success toast and clears the form, a 422 shows the API error and keeps the input, and the request carries `from: contact@mail.paradoxequity.com`, `to`, `reply_to` and an auth header. Real sends through the live Resend API succeeded with both the sandbox sender (delivered, landed in spam, confirmed by Emmanuel) and the verified sender (API accepted; inbox and spam placement for the verified sender not yet confirmed). To test without sending, point `RESEND_BASE_URL` at a local mock.

## Environment variables
Names only; see `.env.example`. Never commit `.env*.local`.
| Name | Where used | Notes |
|---|---|---|
| `RESEND_API_KEY` | `actions/sendEmail.ts` (server) | required for the contact form |
| `CONTACT_FROM_EMAIL` | `actions/sendEmail.ts` | optional; sender on a Resend-verified domain. Default `contact@mail.paradoxequity.com` |
| `RESEND_BASE_URL` | read by the Resend SDK | optional; test-only override to a mock server. Never set in production |
| `NEXT_PUBLIC_SITE_URL` | `app/layout.tsx`, `lib/data.ts` | optional; defaults to `https://www.paradoxequity.com`. Lets the domain change without code edits |

## SEO and sharing
- `app/layout.tsx` sets `metadataBase` (from `siteUrl`), title, description, canonical `/`, Open Graph and a Twitter `summary_large_image` card. The image comes from `app/opengraph-image.tsx`, so there is no static asset to keep in sync.
- Canonical host is `https://www.paradoxequity.com`; the bare domain 308-redirects to it (checked 2026-11-09).
- Locally the og:image URL points at production, which has no such route until deploy; fetch `/opengraph-image` on localhost to preview.
- The card uses the renderer's default sans font (Georgia is unavailable there), so it does not match the site's serif headline exactly.

## Assets
- `public/gallery/headshot.png`: hero portrait (rendered with `next/image`).
- `public/CV.pdf`: linked from the hero. Must match the site copy.
- Project screenshots were removed; rows are text-only.

## Known gaps and open items
1. Verified-sender inbox placement not yet confirmed by a human (API accepted the send).
2. Social previews not yet checked on real platforms (LinkedIn Post Inspector, etc.); crawlers cache cards, so check after deploy. Sitemap not yet submitted to Google Search Console.
3. No project links (repo or live) on any row. The Paradox row says it has its own site; no link until that exists.
4. No automated tests. Quality gates are `npm run lint` and `npm run build` plus manual viewport checks (1440, 390, 320 px; no horizontal overflow, header one line).
5. `npm audit` reports 4 low-severity issues, all via `html-to-text` -> `deepmerge` inside `@react-email/components` (email template only).
6. Vercel project Node version must be 22 (or follow `.nvmrc`); unverified.
7. Locally the Vercel analytics scripts 404; that is expected outside Vercel.
8. `README.md` was rewritten to match; the old one described contentlayer and a missing `.env.example`.
9. Domain: the portfolio holds paradoxequity.com for now. When the Paradox product launches it needs a subdomain, or the portfolio moves to a personal domain. See DECISIONS ADR-004.
