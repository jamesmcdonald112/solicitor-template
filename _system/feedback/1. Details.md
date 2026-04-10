# How to Direct Claude When Building Components

## The Core Lesson

Claude cannot make original design decisions from references it cannot see.
It will always default to the most common pattern it knows for the component type.
For service cards, it builds card grids. For stats, it builds equal-weight rows.
These are competent but generic.

The fix: you provide the layout concept. Claude executes it.
You are the art director. Claude is the developer.

---

## What Works vs What Does Not Work

### Does NOT work
Telling Claude what to avoid:
> "No generic layouts. No card grids. Make it premium."

Claude acknowledges this and then builds a card grid anyway.
Constraints on quality do not replace a design decision.

### WORKS
Telling Claude the exact layout concept:
> "Services displayed as a vertical list of rows. Each row is full-width,
> separated by a 1px border-bottom. Left: number in light serif. 
> Centre: service name in large serif. Right: gold arrow link."

Claude cannot deviate from this because you have described the structure.

---

## The Formula for Every Component Prompt

```
1. Which files to read first (skill, config, tokens)
2. Delete the old version if it exists
3. LAYOUT CONCEPT — describe the structure in plain English
4. For each element: font-family, font-size, color, using token names
5. Hover/interaction behaviour
6. GSAP instruction if needed
7. Hard rules: no raw values, no images, no cards
```

---

## Worked Example — ServiceCard

### Bad prompt (produces generic output):
```
Build a ServiceCard component. No images. No generic AI patterns.
Make it feel premium and editorial. Use tokens only.
```
Result: Three-column card grid with stock photos.

### Good prompt (produces the right output):
```
LAYOUT CONCEPT — editorial list, not a card grid:
Services as a vertical list of full-width rows.
Each row separated by 1px border-bottom var(--color-border).

Each row contains:
LEFT — number (01, 02...): var(--font-serif), 
  var(--font-weight-light), var(--font-size-xl),
  color var(--color-text-subtle), min-width 4rem

CENTRE — service name: var(--font-serif),
  clamp var(--font-size-xl) to var(--font-size-2xl),
  var(--font-weight-normal), color var(--color-text)

RIGHT — arrow →: var(--font-sans), var(--font-size-sm),
  color var(--color-accent), uppercase

On hover: row background shifts to var(--color-bg-subtle),
number becomes var(--color-accent). CSS transition only.
Entire row is a link. No images. No cards. No side borders.
```
Result: Editorial numbered list, exactly as specified.

---

## Worked Example — TrustStrip

### Bad prompt:
```
Build a TrustStrip with our stats. Make it elegant.
Large numbers, small labels. No card boxes.
```
Result: Four equal boxes, all items same visual weight,
"Kilkenny" and "46+" rendered identically.

### Good prompt:
```
LAYOUT CONCEPT — magazine stat bar:
Full-width strip on var(--color-bg-subtle).
Four items in a row, separated by 1px vertical lines.

Each item:
- Value: var(--font-serif), var(--font-weight-light),
  clamp var(--font-size-4xl) to var(--font-size-6xl),
  color var(--color-text)
- Label: var(--font-sans), var(--font-size-xs),
  var(--letter-spacing-widest), uppercase,
  color var(--color-text-subtle)
- Equal width, padding var(--space-2xl) each side

GSAP: numbers count up from 0 on scroll.
```
Result: Large light-weight numbers, tiny uppercase labels,
thin vertical dividers. Editorial and considered.

---

## The Components That Already Work — Do Not Touch

These were built correctly on first attempt. Leave them alone:

- **Preloader** — panels split, logo draws in. Correct.
- **Navbar** — transparent on hero, border on scroll. Correct.
- **Footer** — three columns, dark brand bg, correct hierarchy.
- **Button** — all variants correct, no pill shape.
- **Hero** — photography with navy overlay, left-aligned, serif display.
- **TestimonialBlock** — gold rule, large italic serif, generous space.
- **SectionHeader** — gold rule + eyebrow + large serif heading.

---

## Components Still to Build (Sessions 3–5)

For each one below, the layout concept is described. 
Use these as the basis for your prompt to Claude.

### ServiceHero (service page top)
Stone background, no photography.
Left side: breadcrumb + eyebrow + large serif service name.
Right side: short intro paragraph.
Thin gold rule at bottom of section.
Simpler than main Hero — no parallax, just fade in on load.

### ProcessSteps
Horizontal numbered sequence on desktop, vertical on mobile.
Each step: large number in light Cormorant Garamond,
short title in DM Sans semibold, one-line description muted.
Thin gold connecting line between numbers on desktop.
GSAP: steps reveal left to right in sequence.

### FAQAccordion
Full-width rows, each separated by 1px border.
Question in DM Sans semibold, full width.
Gold + / − indicator right-aligned.
Answer in DM Sans, muted, slides open smoothly.
Use <details>/<summary> for native accessibility.

### ContactForm (style only — do not rebuild logic)
Bottom border on inputs only — no box outline.
Gold accent line on focus (transition from stone border).
Labels float above on focus.
Submit uses primary Button variant.

### ContactPanel
Left column on contact page.
Address with thin gold left rule.
Phone number large in DM Sans.
Email and hours in smaller muted sans.
No map embed unless already in config.

### ArticleBlock
Heading in Cormorant Garamond 2xl.
Body in DM Sans, max-width 65ch, line-height relaxed.
Gold disc bullet markers on lists.
Blockquote triggers gold left rule + italic serif style.
Optional image beside text uses sidebar composition.

### ThankYouPage
Centred, calm layout.
Cormorant Garamond heading: "Thank you for reaching out"
DM Sans body: warm confirmation, expected response time.
Thin gold horizontal rule.
Text link back to homepage — no button needed.
Simple fade in only, no elaborate animation.

---

## How to Write the Prompt Each Time

1. Open a fresh Claude terminal session
2. Start with the file reading sequence:
   view .claude/skills/frontend-design/SKILL.md
   view [relevant config files]
   view src/styles/tokens.css
   view src/styles/themes/theme-cream-navy.css
3. Paste the LAYOUT CONCEPT from this document
4. Add the hard rules at the bottom
5. Tell it to wire into the relevant page and run npm run build

The layout concept is the most important part.
Without it, Claude guesses. With it, Claude executes.