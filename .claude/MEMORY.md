# Vishyx Techie Project Memory

## Project Overview
Vishyx Techie is a service & product technology company. This project is a website built to showcase their services (Web/App dev, Digital Marketing) and upcoming products (Fomriva, Billing & POS). It includes a public site and an admin panel for content management.

## Architecture
- **Frontend:** Next.js 16 (App Router), JavaScript (ESM).
- **Styling:** Tailwind CSS v4 (inline theme in `globals.css`).
- **Backend (Target):** Supabase (Postgres, Auth, Storage).
- **Hosting (Target):** Netlify or Vercel.
- **Design System:** Grounded, "paper-and-ink" professional look. Navy Ink (#16233E), Brass Accent (#B8863B), Paper Neutral (#F5F2EA). Fonts: Fraunces (Headlines), IBM Plex Sans (Body), IBM Plex Mono (Data).

## File Structure (Current)
Currently, the repository contains planning and specification documents in the `.claude/` directory. No source code has been implemented yet.
- `.claude/CLAUDE.md`: Main project rules, tech stack, and active tasks.
- `.claude/DESIGN.md`: Non-negotiable visual design system and rules.
- `.claude/Vishyx-Techie-Website-Plan.md`: Sitemap, packages, tech stack, and build checklist.
- `.claude/Vishyx-Techie-Website-Content.md`: Source of truth for all page copy.
- `.claude/Vishyx-Techie-Admin-Panel-Spec.md`: Data model, RLS policies, and admin screen list.

## Active Status
- **Current Objective:** Wire up Supabase (Schema migration, Auth setup).
- **Next Steps:**
  1. Execute `supabase/schema.sql` in a Supabase project.
  2. Configure environment variables (`.env.local`).
  3. Replace `adminAuth.js` mock with real Supabase Auth.
  4. Build admin screens and public pages.

## Known Constraints
- No gradients, neon, or glassmorphism.
- Real photography only (no illustrations).
- One accent (brass) event per screen.
- Small, reviewable steps (Cursor Hobby plan limitation).
