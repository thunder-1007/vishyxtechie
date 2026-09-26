---
version: 1.0
name: Vishyx-Techie-Design-System
description: >
  A grounded, paper-and-ink professional-services identity for Vishyx Techie.
  Built on a single deep-ink navy, one warm brass accent, and a warm paper
  neutral — no gradients, no neon glow, no glassmorphism, no generic
  SaaS-card kit. Real photography over illustration. Two clearly distinct
  typefaces: an expressive serif for headlines, a humanist sans for body
  and UI. Structure reads like a well-run engineering firm's stationery,
  not a startup pitch deck.

colors:
  primary: "#16233E"        # Ink Navy — headers, nav, primary buttons, footer
  primary-deep: "#0E1728"   # pressed states, dark sections
  primary-soft: "#2C3D5E"   # secondary text on dark, hover states
  accent: "#B8863B"         # Brass — CTAs, links, active states, price highlights
  accent-deep: "#96692A"    # hover/pressed on accent
  accent-soft: "#E7D3AC"    # subtle accent fills (badges, tags)
  neutral-paper: "#F5F2EA"  # page background
  neutral-paper-soft: "#FBFAF6" # card/section background on paper
  ink: "#1C1C1A"             # body text
  ink-mute: "#5B5B54"        # secondary text, captions
  ink-faint: "#8B8B82"       # placeholder text, disabled
  hairline: "#DAD5C6"        # borders, dividers
  hairline-strong: "#C2BCA8" # table borders, input outlines
  success: "#3D6B4C"
  error: "#A23B2E"
  on-primary: "#F5F2EA"
  on-accent: "#16233E"

typography:
  headline-font: "Fraunces, Georgia, 'Times New Roman', serif"
  body-font: "IBM Plex Sans, 'Segoe UI', system-ui, sans-serif"
  mono-font: "IBM Plex Mono, 'Courier New', monospace"
  display-xxl:
    fontFamily: headline-font
    fontSize: 60px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.5px
  display-xl:
    fontFamily: headline-font
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.3px
  display-lg:
    fontFamily: headline-font
    fontSize: 34px
    fontWeight: 500
    lineHeight: 1.16
  heading-md:
    fontFamily: headline-font
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1.2
  heading-sm:
    fontFamily: body-font
    fontSize: 19px
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: body-font
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: body-font
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: body-font
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: body-font
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.2px
  mono-data:
    fontFamily: mono-font
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
---

# Vishyx Techie — Design System

## 1. Visual Theme

Vishyx Techie reads like a firm that ships production software for a living,
not a template shop selling websites. The reference point is a well-run
architecture or engineering practice: ink-navy stationery, brass detailing,
warm paper stock, real photographs of real work — never abstract blobs,
never floating 3D shapes, never a purple-to-blue gradient hero.

Three rules govern every screen:
1. **One accent event per view.** Brass appears once, deliberately — a CTA,
   a price, an active nav state. It never washes a whole section.
2. **Flat, bordered surfaces — no drop-shadow card kit.** Panels separate
   with a 1px hairline, not a soft grey shadow. Radius is small (6–8px) and
   consistent; it is not zero (too brutalist) and not 20px (too "app").
3. **Photography, not illustration.** Every hero and case-study section
   uses a real, high-resolution photo (workspace, product screen, a person
   at work) — never vector illustrations, isometric icons, or gradient
   blobs standing in for content.

## 2. Color Palette & Roles

| Role | Color | Usage |
|---|---|---|
| Primary (Ink Navy) | `#16233E` | Nav bar, footer, primary buttons, section headers on paper |
| Primary Deep | `#0E1728` | Pressed/hover states, dark full-bleed sections |
| Accent (Brass) | `#B8863B` | CTA buttons, links, active tab, price emphasis, form focus ring |
| Accent Soft | `#E7D3AC` | Badges ("Popular"), subtle tag fills — never as a large fill |
| Neutral Paper | `#F5F2EA` | Page background |
| Ink | `#1C1C1A` | Body copy |
| Hairline | `#DAD5C6` | Borders, dividers, table rules |

Strictly one primary, one accent, one neutral family — no purple/blue
gradients, no neon on dark, no glow/blur effects on any accent.

## 3. Typography Rules

- **Headlines — Fraunces** (serif, variable weight). Used for H1–H3 only.
  Gives the site warmth and craft without tipping into "AI cream-and-serif"
  cliché, because it's paired with a structured navy/brass system instead
  of a cream background.
- **Body & UI — IBM Plex Sans.** All paragraph text, nav, buttons, forms,
  labels. Chosen specifically instead of Inter/Roboto for a more
  engineered, slightly technical character that still reads clean at small
  sizes.
- **Data / tech-stack chips / code snippets — IBM Plex Mono.**
- Never use both fonts in the same line for emphasis (no "bold one word in
  a different font/color" trick). Hierarchy comes from size and weight, not
  color-accented words.
- No tracked-out ALL-CAPS eyebrows above every heading. Section labels, if
  used, are sentence case, small, and only where they add real navigation
  value (e.g. "Services" tag on a case study).
- Line length: 65–75 characters for body copy; Fraunces headlines can run
  wider.

## 4. Component Stylings

**Buttons**
- Primary: navy fill, paper text, 8px radius, no shadow. On hover: darken
  to Primary Deep + 120ms ease-out, cursor becomes a subtle custom dot that
  scales up 1.4× over the button (see Animation).
- Secondary (accent CTA — "Book a call", "Pre-book"): brass fill, navy
  text.
- Tertiary: outline only (1px hairline-strong), navy text, fills navy on
  hover.

**Cards / Panels**
- `background: #FBFAF6`, `border: 1px solid #DAD5C6`, `border-radius: 8px`.
  No box-shadow at rest. On hover (only for clickable cards): border color
  shifts to accent, plus a 2px translateY lift — no shadow bloom.

**Navigation**
- Fixed top bar, navy background, paper text, brass underline on active
  link (2px, animates width from 0 on hover/active — not a full glow).

**Forms**
- Inputs: paper-soft background, 1px hairline-strong border, 6px radius.
  Focus: border becomes accent (2px), no glow/box-shadow ring.
- Error state: border + helper text in `#A23B2E`, icon left of message,
  message states what happened and how to fix it (e.g. "Enter a valid
  phone number — 10 digits, no spaces") — never a bare "Invalid input".

**Pricing / Package Cards**
- Flat bordered panels as above. The recommended package gets a brass
  1px top border (4px thick) and a small "Recommended" badge in
  accent-soft — not a scale-up, not a glow, not a ribbon.

## 5. Layout Principles

- 12-column grid, generous but intentional gutters (24–32px). Whitespace
  is used to group related content, never left over by accident — every
  gap should be explainable ("this separates pricing tiers from FAQ").
- Hero sections: left-aligned headline + subcopy, real photo right (or
  full-bleed photo with a navy scrim + left-aligned text on top) —
  asymmetric, not centered-stack-with-gradient-blob.
- Section rhythm: alternate paper background and a single navy full-bleed
  "statement" section (e.g. before the packages section) to break rhythm
  without adding new colors.
- Footer: navy, four-column layout (Company / Services / Legal / Contact),
  hairline-on-navy dividers, brass links on hover.

## 6. Depth & Elevation

No drop shadows as a default styling tool. Elevation is communicated by:
1. Border color/weight change, or
2. A 2–4px translateY on hover for interactive elements only, or
3. Background contrast (paper-soft panel on paper background).

The only place a soft shadow is acceptable is a modal/dialog overlay,
where a single subtle shadow (`0 8px 24px rgba(22,35,62,0.12)`) separates
it from the page — never on cards, buttons, or nav.

## 7. Animation & Motion

Keep it to a small, deliberate set — not motion on every element:
- **Page-load sequence (once, on homepage only):** logotype fades/settles
  in navy (400ms), then hero headline and photo cross-fade in with a
  60px-to-0 translateY stagger (headline first, photo 100ms after). Total
  under 900ms. This is the one orchestrated moment for the whole site.
- **Buttons:** background-color and 1px border transitions at 120–150ms
  ease-out. No scale-bounce.
- **Custom cursor:** a small navy dot that scales to a 32px ring over
  clickable elements (buttons, cards, nav links) — desktop only, disabled
  on touch devices.
- **Skeleton loaders:** flat paper-soft blocks with a slow (1.4s) opacity
  pulse between `#FBFAF6` and `#EFEAD e0` tones — no shimmer gradient
  sweep, keep it quiet.
- **Section reveals:** on-scroll, a single 16px translateY + opacity fade,
  200ms, triggered once — not staggered per card, not applied to every
  section (reserve for 2–3 key moments per page: hero, packages, CTA).
- All motion respects `prefers-reduced-motion`: fall back to instant
  opacity-only or no transition at all.

## 8. Do's and Don'ts

**Do**
- Use real photography (team at work, product UI on a real device mockup,
  office/workspace) for every hero and about section.
- Keep one accent event per screen.
- State errors and empty states in plain, specific language.
- Use hairline borders to separate content instead of shadows.

**Don't**
- No purple-to-blue gradients, anywhere.
- No neon/glowing accents on dark backgrounds.
- No floating sparkle/magic-wand icons or abstract 3D glass shapes.
- No generic rounded-card-with-soft-shadow kit applied uniformly.
- No tracked-out ALL-CAPS eyebrow on every section.
- No stock vector illustrations in place of real photography.

## 9. Responsive Behavior

- Breakpoints: 1280px (desktop), 1024px (small desktop/tablet landscape),
  768px (tablet), 480px (mobile).
- Below 1024px: hero moves to stacked layout, photo above or below text
  (never cropped illegible).
- Below 768px: nav collapses to a full-screen navy overlay menu (not a
  dropdown), font sizes step down one tier (display-xxl → display-lg,
  etc.), pricing cards stack full-width with the recommended plan first.
- Touch targets minimum 44×44px; custom cursor effect disabled.
- Images use responsive `srcset`, compressed (WebP/AVIF with JPEG
  fallback), and lazy-loaded below the fold.

## 10. Agent Prompt Guide

When generating UI from this file, use this quick-reference:

```
Primary:  #16233E   Accent:  #B8863B   Paper: #F5F2EA
Headline font: Fraunces (500) | Body font: IBM Plex Sans (400/600)
Radius: 6–8px | Shadows: none on cards/buttons, subtle on modals only
Photography only — no illustration, no gradient, no glassmorphism
One accent color event per screen. One orchestrated load animation.
```

Sample prompt: *"Build the hero section using DESIGN.md — navy nav,
Fraunces headline at display-xl, IBM Plex Sans subcopy, a real photo on
the right with an 8px-radius border, brass primary CTA button, no
gradients or shadows."*
