# Vishyx Techie — Website

Next.js (App Router) + Tailwind CSS v4. Styled from `DESIGN.md` at the
repo root — see that file for the full design system.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access to fetch Fraunces /
IBM Plex Sans / IBM Plex Mono from Google Fonts on first build.

## What's real vs. mocked

- **Public site** (`/`, `/services`, `/pricing`, `/products`, `/about`,
  `/contact`, `/faq`, `/blog`, legal pages): fully built, content pulled
  from `src/lib/content.js` as static data.
- **Contact form & waitlist forms**: working validation and UI states,
  but the submit handler is a stub (`await new Promise(...)`) — see the
  `TODO` comment in `src/components/ContactForm.js` and
  `src/components/WaitlistForm.js` for the exact Supabase insert call to
  add.
- **Admin panel** (`/admin`): login, dashboard, and two working
  screens (About, Services) are built, but auth and data are mocked via
  `localStorage` (`src/lib/adminAuth.js`) — **not secure, do not deploy
  as-is**. Packages / Products / Blog / FAQ / Submissions / Waitlist
  admin screens follow the same pattern but aren't built yet.

## Wiring up Supabase (next step)

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL editor — creates all
   tables, RLS policies, and seeds `site_settings` + `products`.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to
   `.env.local`.
4. Replace the `TODO`s in `src/lib/adminAuth.js`, `ContactForm.js`,
   `WaitlistForm.js`, and the admin `about`/`services` pages with real
   Supabase client calls.
5. Protect `/admin/*` with server-side middleware checking a real
   Supabase session (the current client-side check in
   `src/app/admin/layout.js` is for local preview only).

Full schema and RLS details: `Vishyx-Techie-Admin-Panel-Spec.md`
(included alongside this project). Full copy source:
`Vishyx-Techie-Website-Content.md`.

## Deploy

Push to GitHub, connect the repo to Netlify or Vercel, add the two
Supabase env vars in the hosting dashboard, deploy.
