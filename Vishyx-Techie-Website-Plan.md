# Vishyx Techie — Website Plan, Content & Build Checklist
*Last updated: 26 Sep 2026*

Company: **Vishyx Techie** | Phone: +91 90481 51630 | Email: support@vishyxtechie.in

This is the master plan. Use `DESIGN.md` (companion file) for the visual
system. This doc covers structure, copy, packages, tech stack, and the
full build checklist. Where content is provided, it's ready to paste in —
no third-party copyrighted material used anywhere.

---

## 1. Sitemap & Routing

```
/                      Home
/services              Services overview
/services/[slug]       Individual service page (6 services)
/pricing               Packages (Startup + others)
/products              Fomriva + Billing & POS — "under development"
/about                 About us
/blog                  Blog listing (CMS-driven)
/blog/[slug]           Blog post
/contact               Contact us
/faq                   FAQ
/waitlist              Pre-book / waitlist (also embedded on /products)
/privacy-policy
/terms-and-conditions
/cookie-policy
/disclaimer
/404                    Custom not-found page
/admin                 CMS login (noindex, robots-disallowed)
```

Use clean, kebab-case, lowercase slugs throughout (e.g. `/services/ecommerce-web-solutions`).
Every route gets a canonical URL, a unique `<title>`, and a unique meta
description (see Section 6).

---

## 2. Services (6)

1. **Custom Website Development** — Static and dynamic websites
2. **E-Commerce Web Solutions**
3. **Web App Development — SaaS**
4. **Custom Software Development & Maintenance**
5. **Android / iOS Application Development**
6. **Digital Marketing and Branding**

Each gets its own page: what it is, who it's for, process (3–5 steps),
tech stack used, and a CTA into `/pricing` or `/contact`.

---

## 3. Packages / Pricing

Three tiers keep it simple and give the Startup package a clear "step up"
story. Suggested structure (adjust numbers to your actual costs/market):

### Starter — "Launch Package" *(the requested startup package)*
For a founder who needs to be online and findable this month.
- Domain + 1 year hosting
- Basic website (up to 5 pages, mobile-responsive)
- Standard SEO setup (on-page basics, sitemap, meta tags)
- Google Business Profile setup
- Google Workspace setup (email on your domain)
- 1 round of revisions
- **Badge:** "Best for new businesses"

### Growth — "Business Package" *(recommended — brass-highlighted tier)*
For a business ready to convert visitors into customers.
- Everything in Starter
- Up to 12 pages / dynamic CMS-driven site
- Advanced SEO (keyword mapping, structured data, blog setup)
- Basic e-commerce or booking integration (choice of one)
- Analytics + Search Console setup
- 3 rounds of revisions
- **Badge:** "Most popular"

### Scale — "Custom Engagement"
For SaaS, apps, or custom software — scoped individually.
- Discovery + architecture call
- Custom quote based on scope (web app / mobile app / software)
- Dedicated project manager
- Ongoing maintenance & support plan
- **CTA:** "Book a scoping call" (not a fixed price — routes to `/contact`)

Add a comparison table on `/pricing` with rows: Pages, SEO level, Hosting,
Revisions, E-commerce, Support, Timeline, Price — Growth column
brass-highlighted per `DESIGN.md` pricing-card rules.

**Attractive add-on angle for the Starter package (draws customers in):**
frame it as "Get online in 7 days" with a visible, literal 7-day delivery
timeline graphic, and offer a small locked-in discount for annual hosting
prepay — concrete and easy to deliver, not just a price cut.

---

## 4. Products — "Coming Soon" pages

Both product pages (`/products`, or separate `/products/fomriva` and
`/products/billing-pos`) use the same pattern:

- Full-screen section, navy background, single animated element (per
  `DESIGN.md` §7 — one orchestrated moment, not a busy loader)
- Headline: **"We're building something new."**
- Sub-copy per product:
  - **Fomriva** — "Fomriva automates the day-to-day processes that run
    your business — so your team spends less time on admin and more time
    on customers. Currently in development."
  - **Billing & POS Software** — "A billing and point-of-sale system
    built for how small and growing businesses actually sell — simple
    setup, clear reporting, no clutter. Currently in development."
- CTA: **"Want early access? Pre-book now →"** opens the waitlist form
  (name, email, phone, company, "what are you hoping this solves?" — 1
  optional free-text field).
- Secondary CTA: **"Have a question? Contact us"** → `/contact`.
- Confirmation state after submit: "You're on the list — we'll reach out
  before public launch." (no fake countdown timers, no false urgency).

---

## 5. About Us (ready-to-use copy, adapted from your draft — no external copyright material)

**Headline:** Expert services today. Innovative products on the way.

**Body:**
Vishyx Techie is a service-and-product technology company. We build and
maintain the digital foundation businesses run on — websites, e-commerce
platforms, SaaS products, custom software, and mobile apps — and back it
with digital marketing that actually brings customers in.

Most businesses end up juggling five different vendors for five different
problems. We built Vishyx Techie to be the one team that handles all of
it, so you can spend your time running the business instead of managing
contractors.

Alongside our services, we're building our own products. **Fomriva** will
automate the core processes that run a business, starting with a
**Billing & POS system** designed for how small teams actually sell. Both
are in active development — join the waitlist on the Products page to get
early access.

**Closing CTA:** Whether you're launching from scratch or scaling
something that already works, we'd like to hear what you're building.
[Contact us →]

---

## 6. SEO Plan (applies site-wide)

- **Per-page:** unique `<title>` (≤60 chars) and meta description (≤155
  chars) written around one target keyword + intent (e.g. `/services/ecommerce-web-solutions`
  → "E-Commerce Web Development Services | Vishyx Techie").
- **Structured data:** `Organization` schema sitewide, `Service` schema on
  each service page, `Product`/`Offer`-adjacent schema for packages,
  `FAQPage` schema on `/faq`, `BlogPosting` schema on blog posts,
  `BreadcrumbList` on all nested pages.
- **Technical SEO:** `robots.txt` (allow all except `/admin`), dynamic
  `sitemap.xml` regenerated on publish, canonical tags, hreflang not
  needed unless you go multi-language later, Core Web Vitals budget
  (LCP < 2.5s, CLS < 0.1) — enforced by compressed images + no layout
  shift from late-loading fonts/ads.
- **Content SEO:** blog organized into 2–3 pillar topics (e.g. "running a
  small business online," "e-commerce tips," "SaaS for startups") with
  supporting posts internally linked to relevant service pages.
- **Local SEO:** Google Business Profile (already in Starter package),
  NAP (name/address/phone) consistency across footer, contact page, and
  schema.

---

## 7. Admin Panel (no-code content management)

You asked for no-code editing on Blog, Services, Pricing, Contact, About,
and Products. Two solid paths:

**Option A — Headless CMS (recommended, fastest to ship):**
Sanity or Strapi as the CMS, Next.js frontend pulling content via API.
Non-technical staff log into a clean CMS dashboard (not your codebase) to
edit copy, images, prices, and blog posts. Preview before publish is
built in.

**Option B — Appwrite-backed admin (selected):**
A lightweight custom `/admin` panel (Appwrite Auth-gated, Appwrite
Databases as the backend) with simple forms for each content type — full
control, and Appwrite bundles the database, auth, and file storage you'd
otherwise need three separate services for.

Either way: `/admin` is `noindex`, IP-unrestricted but auth-gated, and
never linked from public navigation.

---

## 8. Suggested Tech Stack

- **Frontend:** Next.js (React) — fast, SEO-friendly (SSR/SSG), good
  Core Web Vitals out of the box.
- **CMS/Backend:** Sanity or Strapi (Option A) / Appwrite (Option B).
- **Hosting:** Netlify or Vercel (both integrate cleanly with Next.js).
- **Forms:** native form + serverless function, or a form service
  (e.g. Resend for transactional email on submit).
- **Analytics:** Google Analytics 4 + Search Console.
- **Image pipeline:** `next/image` for automatic compression/responsive
  `srcset`.

---

## 9. Full Requirements Checklist

Every item you listed, plus what's commonly missed. Check these off as
each is implemented — nothing here needs a paid checklist.design account,
this is the practical build list:

**Core pages**
- [ ] Landing/home page with above-the-fold CTA
- [ ] Services overview + 6 individual service pages
- [ ] Pricing/packages page with comparison table
- [ ] About page
- [ ] Blog (listing + post template)
- [ ] Contact Us page with working form + map/location if applicable
- [ ] FAQ page
- [ ] Waitlist/pre-book page (for both products)
- [ ] Custom 404 page (on-brand, links back to home/contact)
- [ ] Products page(s) — "under development" state

**Footer & legal**
- [ ] Footer with sitemap links, contact info, social links
- [ ] Privacy Policy (India DPDP Act–aligned: what data is collected, why,
      how long retained, user rights, contact for data requests)
- [ ] Terms & Conditions
- [ ] Cookie Policy + cookie consent banner (accept/reject/manage)
- [ ] Disclaimer page
- [ ] Refund/Cancellation policy (needed since you sell paid packages —
      commonly missed)

**Forms & interactivity**
- [ ] Contact form with validation + clear error states
- [ ] Form submit → confirmation message + email notification
- [ ] Waitlist/pre-book form (separate from contact form)
- [ ] Newsletter signup (optional, footer) — commonly missed but easy win

**Technical / SEO**
- [ ] Favicon set (all sizes incl. Apple touch icon, Android, manifest)
- [ ] robots.txt + sitemap.xml
- [ ] Meta description + unique title per page
- [ ] Open Graph + Twitter Card tags per page (commonly missed — affects
      how links look when shared)
- [ ] Structured data (schema.org) per page type
- [ ] Mobile breakpoints tested at 1280 / 1024 / 768 / 480px
- [ ] Compressed, responsive images (WebP/AVIF)
- [ ] Proper routing/canonical URLs, no duplicate-content URLs
- [ ] 301 redirects plan (for when pages ever move)
- [ ] SSL/HTTPS enforced
- [ ] Accessibility pass: keyboard navigation, visible focus states, alt
      text on all images, color contrast (WCAG AA) — commonly missed

**UI/UX**
- [ ] Skeleton loaders on data-fetching sections
- [ ] Button/hover/cursor animations per DESIGN.md
- [ ] Minimal site-load animation (once, homepage)
- [ ] Empty states (e.g. blog with no posts yet, search with no results)
- [ ] Search functionality (site-wide or blog search)
- [ ] `prefers-reduced-motion` support

**Admin/content**
- [ ] No-code admin panel for Blog / Services / Pricing / Contact / About
      / Products
- [ ] Date + "last updated" timestamp shown on blog posts and legal pages

**Trust/quality note (private placement)**
- [ ] One factual line disclosing AI-assisted development tooling,
      placed in the **Terms & Conditions** (or a "Quality & Tools"
      clause within it) — e.g.: *"Vishyx Techie uses a combination of
      in-house engineering and AI-assisted development and design tools
      as part of our delivery process, alongside human review at every
      stage."* This is placed in the legal page (which every visitor can
      access, so it's honest and available) rather than marketed on the
      homepage — standard practice, not hidden.

---

## Next steps

This plan + `DESIGN.md` cover structure, palette, and copy direction.
Given the size of this build, the next practical step is picking one lane
to go deep on next — I'd suggest whichever blocks you soonest:

1. Full page-by-page copy for Services, Pricing, FAQ, Privacy Policy, T&Cs
2. The actual coded homepage (Next.js) using DESIGN.md, so you can see the
   look before committing further
3. The CMS/admin panel setup

Tell me which and I'll build that next.
