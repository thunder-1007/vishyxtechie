# CLAUDE.md — Vishyx Techie Project Memory & Rules

## Company
Vishyx Techie — service & product technology company.
Phone: +91 90481 51630 | Email: support@vishyxtechie.in

## Tech Stack
- Frontend: Next.js 16 (App Router), JavaScript (not TypeScript)
- Styling: Tailwind CSS v4 (`@theme inline` in `src/app/globals.css` —
  no `tailwind.config.js`, tokens live in CSS)
- Fonts: `next/font/google` — Fraunces (headlines), IBM Plex Sans (body/UI),
  IBM Plex Mono (data/code)
- Backend (target): Appwrite Cloud (Databases + Auth + Storage — Databases run on MariaDB internally, accessed via Appwrite's API, not raw SQL) — **not yet
  connected**, see "Active Tasks" below
- Hosting (target): Netlify or Vercel

## Reference docs (read these before making changes)
- `DESIGN.md` — the visual system. Non-negotiable: no gradients, no
  neon/glow, no glassmorphism, no illustration (real photography only),
  one accent-color event per screen, flat bordered panels instead of
  drop-shadow cards. Read this before touching any UI.
- `Vishyx-Techie-Website-Plan.md` — sitemap, packages, tech stack
  rationale, full build checklist.
- `Vishyx-Techie-Website-Content.md` — source of truth for all page copy.
  Don't invent new copy for existing pages without checking here first.
- `Vishyx-Techie-Admin-Panel-Spec.md` — Appwrite collection schema, permissions
  policies, admin screen list, and build order.
- `appwrite/setup.js` — the actual setup script matching the spec above.
  Run this against your Appwrite project before wiring up any admin
  screen to real data.

## Development Commands
- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

## Project Structure
```
src/app/                 Public pages + /admin (App Router)
src/components/          Shared UI (Header, Footer, Button, forms, etc.)
src/lib/content.js        Static content (services, packages, products, faqs)
                          — this is the stand-in for Appwrite until wired up
src/lib/adminAuth.js      MOCK auth (localStorage) — replace, do not deploy as-is
appwrite/setup.js         Collection + permissions setup, matches Admin Panel Spec
```

## Rules for this agent
1. **Read `DESIGN.md` before writing or changing any UI.** Don't add a
   library or component pattern that conflicts with it (shadow-heavy card
   kits, gradient utilities, icon packs full of sparkle/magic glyphs).
2. **Work in small, reviewable steps — this is a Cursor Hobby plan.**
   Finish one feature/screen, stop, wait for confirmation before starting
   the next. Don't regenerate the whole site in one pass.
3. **Ask before installing any new package** not already in
   `package.json`.
4. **Content changes:** update `Vishyx-Techie-Website-Content.md` and the
   corresponding page/`content.js` entry together, so the doc stays the
   source of truth.
5. **Every `TODO` comment in the code marks a mock that needs a real
   Appwrite call.** Search for `TODO` before assuming a feature is done —
   forms and admin screens currently look functional but write to
   nowhere (contact/waitlist forms) or `localStorage` (admin panel).
6. **Don't touch `/admin` auth security shortcuts silently.** The
   client-side check in `src/app/admin/layout.js` is explicitly insecure
   and flagged as local-preview-only — replacing it with real
   server-side Appwrite middleware is a deliberate task (see below), not
   something to "clean up" incidentally while doing something else.
7. **Keep the AI-tooling disclosure line intact** in
   `src/app/terms-and-conditions/page.js` ("Quality & tools" section) —
   don't remove it when editing that page for other reasons.

## Active Tasks & Memory State
- [ ] **Current objective:** Wire up Appwrite — run `appwrite/setup.js`,
      add `NEXT_PUBLIC_APPWRITE_ENDPOINT` / `NEXT_PUBLIC_APPWRITE_PROJECT_ID` to
      `.env.local`, replace the `adminAuth.js` mock with real
      `account.createEmailPasswordSession` / `deleteSession` / session checks.
- [ ] Replace `/admin/*` client-side auth gate with server-side
      middleware checking a real Appwrite session.
- [ ] Wire `ContactForm.js` and `WaitlistForm.js` submit handlers to
      `contact_submissions` / `waitlist_submissions` tables.
- [ ] Build remaining admin screens (same CRUD pattern as
      `/admin/about` and `/admin/services`): Packages, Products, Blog,
      FAQ, Site Settings, Submissions (read + status update), Waitlist
      (read + CSV export).
- [ ] Migrate `src/lib/content.js` reads to live Appwrite queries once
      the above admin screens can actually write real data.
- [ ] Add real photography (hero image, about page) — currently a
      placeholder block per `DESIGN.md`'s no-illustration rule.
- [ ] Blog: build post editor + public post template once at least one
      real post exists (currently an empty-state-only listing).

## Known limitations (by design, not bugs)
- Legal pages (`privacy-policy`, `terms-and-conditions`, `disclaimer`,
  `refund-policy`) are structural drafts — flagged in-page — and need
  legal review before launch, not further coding.
- `[ ]` placeholders in the copy doc mark spots needing real business
  specifics (timelines, exact numbers) — don't invent numbers to fill
  them.
