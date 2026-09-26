# Vishyx Techie — Admin Panel Spec
*Last updated: 26 Sep 2026*

Goal: non-technical staff manage Blog, Services, Pricing, Contact info,
About, and Products content without touching code. Built on **Supabase**
(Option B from the Website Plan) since it matches your existing stack on
Formiva CaseFlow — one backend, one set of credentials to manage.

---

## 1. Stack

- **Frontend:** Next.js — public site and `/admin` live in the same repo,
  admin routes behind auth middleware.
- **Backend:** Supabase (Postgres + Auth + Storage).
- **Hosting:** Netlify or Vercel.
- **Auth:** Supabase Auth, email + password, single role: `admin` (add
  `editor` later if you bring on content staff who shouldn't touch
  pricing/legal).

`/admin` is `noindex`, excluded in `robots.txt`, and never linked from
public nav — reachable only by direct URL + login.

---

## 2. Data model (Supabase tables)

```
services
  id, slug, title, summary, body (rich text/markdown), icon_or_image,
  order_index, is_published, updated_at

packages
  id, name (Starter/Growth/Scale), price, billing_note, features (jsonb array),
  is_recommended (bool), order_index, is_published, updated_at

products
  id, slug (fomriva / billing-pos), name, tagline, body, status
  (in_development/launched), updated_at

blog_posts
  id, slug, title, excerpt, body (rich text/markdown), cover_image,
  author, published_at, updated_at, is_published, meta_title, meta_description

faqs
  id, question, answer, order_index, is_published

site_settings
  id, phone, email, address, social_links (jsonb), footer_note

contact_submissions
  id, name, email, phone, service_interest, message, created_at, status
  (new/replied/archived)

waitlist_submissions
  id, product_slug, name, email, phone, company, notes, created_at
```

Every content table gets `updated_at` (auto-set on save) so the public
site can show "Last updated" per your requirement. `is_published` lets
staff draft content without it going live.

**Row-Level Security:** enable RLS on every table. Public (anon) role gets
`SELECT` only, and only where `is_published = true`. All `INSERT`/`UPDATE`/
`DELETE` require the authenticated `admin` role. `contact_submissions` and
`waitlist_submissions` allow public `INSERT` only (so the forms can write)
— no public `SELECT`, so nobody can read other people's submissions.

---

## 3. Admin routes & screens

```
/admin/login              Email + password (Supabase Auth)
/admin                    Dashboard — recent submissions, quick links
/admin/services           List + reorder + edit/create/delete
/admin/packages           List + edit (feature list as add/remove rows)
/admin/products           Edit Fomriva / Billing & POS content + status
/admin/blog               List (draft/published filter) + editor
/admin/blog/new           Rich-text/markdown editor + image upload +
                           SEO fields (meta title/description)
/admin/faq                List + reorder + edit/create/delete
/admin/about              Single-record edit (About page body)
/admin/settings           Phone, email, address, social links, footer
/admin/submissions        Contact form entries — mark replied/archived
/admin/waitlist           Waitlist entries — filter by product, export CSV
```

Each list screen: table view, publish/draft toggle inline, edit and
delete actions, "New" button top-right. Each edit screen: form matching
the fields above, save button disabled until a change is made, and a
visible "Saved" confirmation (per your error/empty-state requirements —
same specific, plain-language pattern here as on the public site).

**Admin UI style:** keep it utilitarian — Ink Navy nav + Ink text on
white, IBM Plex Sans throughout, no need to carry the brass/Fraunces
public-site personality into the admin tool. Function over branding here.

---

## 4. Image handling

- Supabase Storage bucket `content-images`, public read, admin-only
  write.
- Upload widget in blog/services/products editors → auto-generates a
  public URL, stored in the relevant `image` field.
- Recommend client-side compression before upload (or a Supabase Edge
  Function) so oversized images never hit the CDN — keeps Core Web
  Vitals intact without staff needing to know what that means.

---

## 5. Security checklist

- [ ] `/admin/*` routes check Supabase session server-side (middleware),
      redirect to `/admin/login` if absent.
- [ ] RLS enabled and tested on every table (try an anon write from the
      browser console — it should fail).
- [ ] Supabase service role key never exposed client-side — only the
      public anon key ships to the browser.
- [ ] Rate limiting / basic bot protection on public form inserts
      (contact + waitlist) — Supabase Edge Function or a simple honeypot
      field is enough at this scale.
- [ ] Password reset flow enabled via Supabase Auth.
- [ ] Environment variables (`SUPABASE_URL`, `SUPABASE_ANON_KEY`,
      `SUPABASE_SERVICE_ROLE_KEY`) kept in Netlify/Vercel env settings,
      never committed to the repo.

---

## 6. Build order (suggested)

1. Supabase project + tables + RLS policies
2. Auth + `/admin/login` + route protection
3. Settings + About (simplest, single-record screens — good first build
   to confirm the auth/CRUD pattern works)
4. Services + Packages
5. Products (with status field driving the public "in development" state)
6. Blog (most complex — rich text + images + SEO fields)
7. FAQ
8. Submissions + Waitlist views (read-mostly, simplest last)

---

## Handing this to Cursor

Give Cursor all four files together — `DESIGN.md`, the Website Plan, the
Website Content doc, and this Admin Panel spec — plus a Supabase project
already created (or ask Cursor to write the SQL migration for the tables
above).

Suggested first prompt to paste into Cursor:

```
Use DESIGN.md for the public site's visual system, Vishyx-Techie-
Website-Plan.md for sitemap and structure, Vishyx-Techie-Website-
Content.md for all page copy, and Vishyx-Techie-Admin-Panel-Spec.md for
the admin panel's data model and screens.

Scaffold a Next.js project with:
1. The Supabase table schema and RLS policies from the Admin Panel spec
   as a SQL migration file
2. Supabase Auth-protected /admin routes per the spec
3. The public site's page structure from the Website Plan, styled per
   DESIGN.md, with copy from the Content doc as placeholder content
   pulled from Supabase where the admin panel manages it

Start with the Supabase migration and the /admin/login + /admin/about
screens first, so I can confirm the auth pattern before you build the
rest.
```

That last line matters — it keeps Cursor from generating the entire
codebase in one shot with no checkpoint. Review the auth + one working
CRUD screen before letting it continue to the rest.
