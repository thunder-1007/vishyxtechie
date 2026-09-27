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
  `src/components/WaitlistForm.js` for the exact Appwrite insert call to
  add.
- **Admin panel** (`/admin`): login, dashboard, and two working
  screens (About, Services) are built, but auth and data are mocked via
  `localStorage` (`src/lib/adminAuth.js`) — **not secure, do not deploy
  as-is**. Packages / Products / Blog / FAQ / Submissions / Waitlist
  admin screens follow the same pattern but aren't built yet.

## Wiring up Appwrite (next step)

1. Create a Appwrite project.
2. Run `node appwrite/setup.js` (with your Appwrite endpoint, project ID,
   and API key as env vars) — creates all collections, permissions, and
   seeds `site_settings` + `products`.
3. Add `NEXT_PUBLIC_APPWRITE_ENDPOINT` and `NEXT_PUBLIC_APPWRITE_PROJECT_ID` to
   `.env.local`.
4. Replace the `TODO`s in `src/lib/adminAuth.js`, `ContactForm.js`,
   `WaitlistForm.js`, and the admin `about`/`services` pages with real
   Appwrite client calls.
5. Protect `/admin/*` with server-side middleware checking a real
   Appwrite session (the current client-side check in
   `src/app/admin/layout.js` is for local preview only).

Full schema and permissions details: `Vishyx-Techie-Admin-Panel-Spec.md`
(included alongside this project). Full copy source:
`Vishyx-Techie-Website-Content.md`.

## Deploy

Push to GitHub, connect the repo to Netlify or Vercel, add the two
Appwrite env vars in the hosting dashboard, deploy.
