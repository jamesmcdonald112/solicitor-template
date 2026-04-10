# Component Direction Guide

This document explains how to give Claude the direction it needs to
build components that look exceptional — not generic.

The quality of the output is directly proportional to the quality
of the layout concept you provide. Vague prompts produce mediocre work.
Specific concepts produce exceptional work.

---

## The Core Principle

Claude executes. You design.

The terminal session is for building — not for discovering what the
component should look like. That discovery happens in Claude chat,
with real config data, before any code is written.

---

## The Layout Concept Formula

Every component in a build prompt needs a layout concept.
Write it using this formula:

```
COMPONENT NAME:
- Structure: [describe the layout in plain English — columns, rows, 
  what sits where, how it behaves on mobile]
- [Element name]: [font-family token] + [font-size token] + [color token]
- [Element name]: [font-family token] + [font-size token] + [color token]
- Hover: [describe exactly what changes on hover]
- GSAP: [describe the animation, or "none"]
- Rules: [any hard constraints — no images, no borders, etc.]
```

### Example — Trust Strip

```
TRUST STRIP:
- Structure: full-width dark band, four stats in a horizontal row 
  with thin vertical rules between them. Single-column stack on mobile.
- Number: var(--font-serif), var(--font-size-5xl), var(--color-accent),
  font-weight-light, letter-spacing-tighter
- Label: var(--font-sans), var(--font-size-xs), var(--color-text-inverse),
  letter-spacing-widest, uppercase
- Divider: 1px solid var(--color-border-brand), height 60%
- Hover: none — static display component
- GSAP: count-up animation on numbers when section scrolls into view
- Rules: no card borders, no backgrounds on individual stat items
```

### Example — Service Card Row

```
SERVICE CARDS:
- Structure: full-width list, each service is one row — 
  zero-padded number left, service name centre-left in large serif,
  short description in muted sans, gold arrow right. Hover shifts
  entire row background to subtle stone.
- Number: var(--font-serif), var(--font-size-3xl), var(--color-accent),
  font-weight-light
- Name: var(--font-serif), var(--font-size-xl), var(--color-text)
- Description: var(--font-sans), var(--font-size-sm), var(--color-text-muted)
- Arrow: SVG, var(--color-accent), slides in from left on hover
- Hover: background shifts to var(--color-bg-subtle), 
  3px gold left border scales up from centre
- GSAP: stagger fade-in on scroll, 0.09s between rows
- Rules: no images, no box shadows, no card borders
```

---

## How to Write the Prompt Each Time

### Step 1 — Design first, build second
Before opening a terminal session, come to Claude chat and share
the relevant config files. Ask for a layout concept based on the
real content. Refine it until it feels right. Only then build.

### Step 2 — Open a fresh terminal session
Stale context from earlier sessions causes Claude to make
assumptions. Always start fresh.

### Step 3 — Use the per-session prompt from STAGE-3-DESIGN-BRIEF.md
Fill in the bracketed sections:
- Session name
- Component list
- Relevant config files
- Layout concept for each component (the most important part)

### Step 4 — The file reading sequence (add to every prompt)

```
1. view .claude/skills/frontend-design/SKILL.md
2. view _system/LAYOUT-REFERENCE.md
3. view _system/COMPONENT-DIRECTION-GUIDE.md
4. view [config files]
5. view src/styles/tokens.css
6. view src/styles/themes/theme-cream-navy.css
7. view _system/STAGE-3-DESIGN-BRIEF.md
```

### Step 5 — Paste the layout concept
This is the most important part of every prompt.
Without a specific layout concept, Claude guesses.
With one, Claude executes exactly what you described.

### Build approach
- Foundation components (Navbar, Footer, Button): one at a time
- Page sections: by page, but with layout concepts pre-written
  for each component before the session starts
- If a component comes out wrong twice: isolate it, build it alone

---

## The Testimonial Benchmark

The testimonial component is the reference for what good direction
produces. It worked because the concept was explicit:

- Stone background, not white
- Quote in large italic Cormorant, not a card
- Attribution with portrait, not just a name
- Gold left rule, not a quotation mark graphic
- Asymmetric layout — quote wider than attribution column

That level of specificity is the minimum for every component.

---

## Warning Signs in a Bad Prompt

If you see any of these in a component prompt, the output will
likely be generic:

- "Build a services section" — no layout concept
- "Make it look premium" — not actionable
- "Use the design system" — Claude already knows this
- No token references for specific elements
- No hover behaviour described
- No GSAP instruction (even if the answer is "none")

Fix the prompt before running the session.

---

## Reference: Components Already Built

These components set the standard for the rest of the build.
Review them before writing new layout concepts.

| Component | Location | Notable technique |
|---|---|---|
| Button | `src/components/ui/button/` | Square corners, uppercase tracking |
| Navbar | `src/components/navbar/` | Transparent to solid on scroll |
| Hero | `src/components/hero/` | Two-col asymmetric, large serif |
| ServiceCard | `src/components/services/service-card/` | Row layout, no images |
| TrustStrip | `src/components/sections/trust-strip/` | Count-up numbers, ruled dividers |
| Testimonial | `src/components/sections/testimonial/` | Quote-forward, no card box |
