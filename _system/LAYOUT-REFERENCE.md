# Layout Reference — Systematic Layout Rules

This document defines how every component must handle layout.
It translates the token system into concrete layout rules.
Claude must read this before building any component.

---

## The Core Problem This Solves

Components that ignore layout rules produce:
- Content stretching full viewport width with no max-width
- Inconsistent padding between sections
- Text that runs edge to edge on large screens
- Sections with different internal spacing that feel disconnected

Every component must follow these rules without exception.

---

## The Three Layout Layers

Every section on every page uses three nested layers:

```
LAYER 1 — Section (full viewport width, background colour)
LAYER 2 — Container (max-width constraint, centred, horizontal padding)
LAYER 3 — Content (the actual component markup)
```

Never skip a layer. Never merge layers.

```html
<!-- Always this structure -->
<section class="my-section">           <!-- Layer 1: full width bg -->
  <div class="my-section__inner">      <!-- Layer 2: max-width + padding -->
    <div class="my-section__content">  <!-- Layer 3: actual content -->
    </div>
  </div>
</section>
```

---

## Container Rules — Apply Every Time

Every component that contains readable content must have an inner container.
Copy this pattern exactly. Never deviate.

```css
.my-section__inner {
  max-width: var(--width-wide);      /* or --width-content or --width-narrow */
  margin-inline: auto;               /* always centre it */
  padding-inline: var(--gutter);     /* mobile padding */
}

@media (min-width: 768px) {
  .my-section__inner {
    padding-inline: var(--gutter-md);
  }
}

@media (min-width: 1024px) {
  .my-section__inner {
    padding-inline: var(--gutter-lg);
  }
}
```

### Which max-width to use

| Content type | Token | Pixels | Use for |
|---|---|---|---|
| `--width-narrow` | 42rem | 672px | Article body, legal text, blog prose |
| `--width-content` | 72rem | 1152px | Standard sections, most components |
| `--width-wide` | 90rem | 1440px | Full-bleed stats, hero content, footer |

**Rule of thumb:**
- Hero, TrustStrip, Footer → `--width-wide`
- Most sections (SectionHeader, Services, CTA, Testimonial) → `--width-content`
- Article body text, contact form, legal pages → `--width-narrow`

### Gutter tokens

```
Mobile  → var(--gutter)     = var(--space-lg)  = 24px
Tablet  → var(--gutter-md)  = var(--space-xl)  = 32px
Desktop → var(--gutter-lg)  = var(--space-2xl) = 48px
```

These are the only horizontal padding values allowed.
Never use raw px values for horizontal padding.

---

## Section Vertical Spacing — Apply Every Time

Every `<section>` on the page must have vertical padding.
Use the section spacing token. Never use raw values.

```css
.my-section {
  padding-block: var(--space-section);   /* 96px top and bottom */
}
```

### Vertical spacing variants

```css
/* Standard section — most homepage sections */
padding-block: var(--space-section);      /* var(--space-4xl) = 96px */

/* Compact section — used for trust strips, narrow banners */
padding-block: var(--space-3xl);          /* 64px */

/* Generous section — hero, full-bleed CTA */
padding-block: var(--space-5xl);          /* 128px */

/* Maximum — very tall hero or landing sections */
padding-block: var(--space-6xl);          /* 160px */
```

### Space between elements WITHIN a section

```
Between section header and content below it → var(--space-3xl)   64px
Between cards/items in a grid or list       → var(--space-xl)    32px
Between text elements (heading + para)      → var(--space-lg)    24px
Between label and heading                   → var(--space-sm)    12px
Between inline items (icon + text)          → var(--space-xs)     8px
```

---

## Breakpoints — Memorise These

CSS media queries cannot use var(). Always use literal px values.

```
Mobile first (default)  →  no media query needed
Small / landscape phone →  @media (min-width: 640px)
Tablet                  →  @media (min-width: 768px)
Small desktop           →  @media (min-width: 1024px)
Standard desktop        →  @media (min-width: 1280px)
Large desktop           →  @media (min-width: 1536px)
```

### Which breakpoints to actually use

For most components, only two breakpoints are needed:
- `768px` — switch from mobile to tablet layout
- `1024px` — switch from tablet to desktop layout

Adding more than two breakpoints to a component is usually a sign
the layout is too complex. Simplify first.

### Media query nesting — required pattern

Always nest `@media` queries inside the selector they affect. Never write them at the top level.

```css
/* ✅ correct */
.my-component {
    font-size: var(--font-size-base);

    @media (min-width: 768px) {
        font-size: var(--font-size-lg);
    }
}

/* ✗ wrong */
.my-component {
    font-size: var(--font-size-base);
}

@media (min-width: 768px) {
    .my-component {
        font-size: var(--font-size-lg);
    }
}
```

This keeps all responsive behaviour co-located with the rule it modifies — easier to read, easier to change.

---

## Two-Column Layouts

Many components split into two columns on desktop.
Use this pattern consistently.

```css
.my-section__grid {
  display: grid;
  grid-template-columns: 1fr;        /* mobile: single column */
  gap: var(--space-3xl);
}

@media (min-width: 1024px) {
  .my-section__grid {
    grid-template-columns: 1fr 1fr;  /* desktop: equal columns */
  }
}
```

### Standard column splits

```
Equal halves          → 1fr 1fr
Primary + sidebar     → 2fr 1fr
Content + contact     → 3fr 2fr
Wide content + narrow → 60% 40%
```

For the CTA panel and similar components, use:
```css
grid-template-columns: 3fr 2fr;
```

---

## Full-Bleed vs Contained

Some components need full-bleed backgrounds (colour spans viewport)
but contained content (text doesn't stretch full width).

```css
/* Full-bleed background, contained content */
.cta-panel {
  background-color: var(--color-bg-brand);  /* full width bg */
  padding-block: var(--space-5xl);
}

.cta-panel__inner {
  max-width: var(--width-content);          /* content constrained */
  margin-inline: auto;
  padding-inline: var(--gutter);
}

@media (min-width: 768px) {
  .cta-panel__inner { padding-inline: var(--gutter-md); }
}

@media (min-width: 1024px) {
  .cta-panel__inner { padding-inline: var(--gutter-lg); }
}
```

The outer element handles the background.
The inner `__inner` element handles the width constraint.
Always both. Never just one.

---

## Typography Max-Width

Long paragraphs of body text should never stretch to full container width.
Reading lines longer than 75 characters cause eye fatigue.

```css
/* Body paragraphs */
p {
  max-width: 65ch;   /* approximately 65 characters per line */
}

/* Headings — no max-width needed, they are naturally shorter */

/* Hero subtitle — constrained but wider than body */
.hero__subtitle {
  max-width: 52ch;
}

/* Section supporting text */
.section-header__body {
  max-width: 55ch;
}
```

---

## The Checklist — Run This Before Finishing Any Component

Copy this into your mental review before submitting any component:

```
□ Does the section span full viewport width? (background should)
□ Is there an inner container with max-width + margin-inline: auto?
□ Does the inner container have padding-inline at all three breakpoints?
□ Is vertical padding using var(--space-section) or a space token?
□ Are long paragraphs constrained to ~65ch?
□ Are there NO raw px values in the CSS?
□ Does it look correct at 375px, 768px, and 1440px?
```

---

## Complete Working Example

This is a correctly structured section component.
Use it as the reference pattern for every new component.

```astro
---
// src/components/sections/example/ExampleSection.astro
---

<section class="example">
  <div class="example__inner">

    <header class="example__header">
      <p class="example__eyebrow">Eyebrow text</p>
      <h2 class="example__heading">Section heading</h2>
      <p class="example__body">Supporting paragraph text.</p>
    </header>

    <div class="example__content">
      <!-- content here -->
    </div>

  </div>
</section>

<style>
  /* ── Section shell — full width ────────────────────────── */
  .example {
    background-color: var(--color-bg);
    padding-block: var(--space-section);
  }

  /* ── Inner container — constrained ─────────────────────── */
  .example__inner {
    max-width: var(--width-content);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }

  @media (min-width: 768px) {
    .example__inner {
      padding-inline: var(--gutter-md);
    }
  }

  @media (min-width: 1024px) {
    .example__inner {
      padding-inline: var(--gutter-lg);
    }
  }

  /* ── Section header ─────────────────────────────────────── */
  .example__header {
    margin-block-end: var(--space-3xl);
  }

  .example__eyebrow {
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-widest);
    text-transform: uppercase;
    color: var(--color-accent);
    margin-block-end: var(--space-sm);
  }

  .example__heading {
    font-family: var(--font-serif);
    font-size: clamp(var(--font-size-2xl), 4vw, var(--font-size-3xl));
    font-weight: var(--font-weight-light);
    line-height: var(--line-height-tight);
    letter-spacing: var(--letter-spacing-tight);
    color: var(--color-text);
    margin-block-end: var(--space-lg);
  }

  .example__body {
    font-family: var(--font-sans);
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-muted);
    max-width: 55ch;
  }
</style>
```

---

## Common Mistakes — What Claude Gets Wrong

These are the most frequent layout errors. Check for all of them.

**1. Missing inner container**
```css
/* WRONG — content stretches full width */
.trust-strip {
  display: flex;
  justify-content: space-between;
}

/* RIGHT — content is constrained */
.trust-strip__inner {
  max-width: var(--width-wide);
  margin-inline: auto;
  padding-inline: var(--gutter-lg);
  display: flex;
  justify-content: space-between;
}
```

**2. Raw px values for spacing**
```css
/* WRONG */
padding: 96px 48px;
gap: 32px;
margin-bottom: 24px;

/* RIGHT */
padding-block: var(--space-section);
padding-inline: var(--gutter-lg);
gap: var(--space-xl);
margin-block-end: var(--space-lg);
```

**3. No responsive padding-inline**
```css
/* WRONG — same padding at all sizes */
.section__inner {
  max-width: var(--width-content);
  margin-inline: auto;
  padding-inline: var(--gutter-lg);
}

/* RIGHT — padding scales with screen size */
.section__inner {
  max-width: var(--width-content);
  margin-inline: auto;
  padding-inline: var(--gutter);
}
@media (min-width: 768px) {
  .section__inner { padding-inline: var(--gutter-md); }
}
@media (min-width: 1024px) {
  .section__inner { padding-inline: var(--gutter-lg); }
}
```

**4. Body text with no max-width**
```css
/* WRONG — text stretches across full container */
.section__body { font-size: var(--font-size-base); }

/* RIGHT — reading line is constrained */
.section__body {
  font-size: var(--font-size-base);
  max-width: 65ch;
}
```

**5. Using Section and Container compositions but then overriding spacing**
If you use the Section and Container Astro components,
do not also add padding-block or max-width inside the component.
The compositions already handle that. Pick one approach and stick to it.

---

## Source References

- **4px/8px base grid** — Adobe Spectrum, Material Design, Apple HIG
- **Container max-widths** — Shopify Polaris page width system
- **Responsive gutter scaling** — U.S. Web Design System (USWDS)
- **65ch line length** — WCAG readability guidelines, Baymard Institute
- **Spacing scale naming** — Nathan Curtis, EightShapes
- **Section/container/content nesting** — Every Layouts (Heydon Pickering + Andy Bell)