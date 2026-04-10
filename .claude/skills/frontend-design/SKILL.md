---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces for premium Irish solicitor websites. Loads design thinking, token constraints, and motion principles for every component build session.
---

This skill guides creation of premium solicitor website components that avoid generic AI aesthetics. Every component built with this skill should make a potential client feel they are in expert, expensive, trustworthy hands before reading a single word.

## Priority Order — Read This First

1. Visual quality — does it look exceptional?
2. Layout correctness — containers, spacing, max-widths applied?
3. Token compliance — are tokens used correctly?
4. Technical correctness — does it build?

If the visual quality is not exceptional, nothing else matters.
A component that builds but looks mediocre is a failure.
The code is how you express the design. Not the other way around.

Before writing a single line of code, ask:
What is the single most beautiful thing I can build within these constraints?
Commit to that answer. Then build it.

## Design Thinking — Do This Before Writing Code

Before touching any code, commit to answers for these four questions:

- **Purpose**: What job does this component do for a stressed person making a significant legal decision?
- **Tone**: This project lives at the intersection of authoritative and warm. Not cold corporate. Not approachable casual. Think: a Michelin-starred restaurant run by people who genuinely care. Premium without arrogance.
- **Constraints**: Astro 6, plain CSS in `<style>` blocks, GSAP for animation, token system already built — no raw values anywhere.
- **Differentiation**: What is the one thing about this component that will make someone stop and notice the quality?

**CRITICAL**: The token system is your vocabulary. Your job is to compose it beautifully — not to invent new values. The creative work happens in layout, proportion, rhythm, and motion. Not in colour or typeface choices.

## Reference Studios — Apply Training Knowledge

These are verified Awwwards winners. Apply what you know about them:

- **Obys Agency** (obys.agency) — Studio of the Year 2023. Swiss grid logic, typographic precision, nothing random.
- **Akaru** (akaru.fr) — SOTM April 2024. GSAP scroll architecture, cohesive identity across sections.
- **The Line Studio** (thelinestudio.com) — SOTM November 2024. Professional services that won design awards. Study this most carefully.
- **Garden Eight** (garden-eight.com) — Multiple SOTD. Warmth and precision coexisting. Refined spatial composition.
- **Unseen Studio** (unseenstudio.com) — Multiple SOTD. Immediate premium feel. Transitions that feel considered.

Ask yourself: would this component be at home on one of these sites? If not, keep working.

## Token System — Read Before Designing

The project has a complete three-layer token system already built:

```
src/styles/tokens.css              ← semantic tokens (use these in components)
src/styles/themes/theme-*.css      ← primitives (do not use directly in components)
```

Rules:
- Every CSS value must be a token reference — `var(--token-name)`
- Define component-level tokens first inside the block selector, then use them
- Never use hex values, px values, or raw numbers directly in component styles
- The theme file handles colour — do not hardcode colours

## Spatial & Typographic Principles

- Generous space signals quality — when in doubt, add more breathing room
- Typography does the heavy lifting — composition before decoration
- Asymmetry feels considered; perfect symmetry reads as template
- One focal point per screen section — nothing competes for attention
- Left-align for authority; centre only for isolated, intentional statements
- Real photography always beats placeholder — check `src/assets/` and `public/`

## Motion — GSAP Principles

```ts
// Always import from this path only
import { gsap, ScrollTrigger } from '../../scripts/gsap.ts';

// Always guard — first line of every animation function
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

// Entrance — unhurried, arriving from below
gsap.from(el, { y: 30, opacity: 0, duration: 0.9, ease: 'power2.out' });

// Stagger — sequential, never simultaneous
gsap.from(els, { y: 20, opacity: 0, stagger: 0.12, duration: 0.8 });
```

**Never:** bounce, spin, rotate, scale above 1.05, slide more than 60px, compete animations on the same element.

**Always:** if it feels quick, it is too quick. Everything settles, it does not arrive.

**Script deduplication:** Astro runs `<script>` blocks once per page even if a component is used multiple times. Always use `document.querySelectorAll()` to target all instances.

## File Structure — Non-Negotiable

```
src/components/[category]/[component-name]/
  ComponentName.astro     ← markup + <style> block + <script> if GSAP needed
  component-name.gsap.ts  ← only if component has animation
```

CSS lives in `<style>` inside the `.astro` file. Astro scopes it automatically.
Do not create sibling `.css` files.

## What to Avoid

- Raw values of any kind — hex, px, named colours, unitless numbers
- Generic AI patterns — card grids with equal gutters, centred hero
  with gradient overlay, pill buttons, stock photo card treatments,
  dark badge overlays on images, equal-weight stat rows
- Anything that would look at home on a WordPress solicitor template
- Centring everything — left-align for authority
- Carousels and sliders
- Decorating instead of composing — if adding something does not
  improve the hierarchy, remove it
- Building what is expected — the expected version is always generic

## The Standard

A component is not done until you can answer yes to all of these:

1. Would a senior designer at Obys Agency or Garden Eight be
   satisfied with this? If not — what specifically is wrong?
2. Is there one clear focal point? Does nothing compete with it?
3. Is the spacing generous enough to signal quality?
4. Does every value trace back to a token?
5. Is the layout system applied — inner container, responsive
   gutters, correct max-width, section vertical spacing?
6. Is the reduced-motion guard in place on every animation?
7. Does it read from config — no hardcoded content?

If any answer is no, it is not done. Go back and fix it.