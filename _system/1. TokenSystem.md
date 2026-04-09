# Token System — References, Sources, and Attribution

This document records where every decision in the token system came from.
Each decision is either directly sourced from a real production design system,
synthesised from multiple real systems, or an original decision made for this
specific use case (solicitor websites). Nothing here is invented without basis.

---

## Real Systems Referenced

### Material Design 3 — Google
**Source:** https://m3.material.io/foundations/design-tokens and https://material-web.dev/theming/material-theming/

The three-layer architecture (reference → system → component) comes directly from Material Design 3.
Google uses `--md-ref-*` for primitives and `--md-sys-*` for semantic tokens.
We adopted the concept and dropped the prefix — unnecessary complexity for a solo developer.

Specific decisions taken from MD3:
- The idea that semantic tokens describe a **role**, not an appearance
- Component tokens scoped to the component selector rather than `:root`
- Theme switching as a primitive-layer swap only, with semantic and component tokens unchanged
- The `on-` naming convention (e.g. `on-primary`) inspired `--color-text-inverse`

### Shopify Polaris
**Source:** https://github.com/Shopify/polaris-tokens and https://polaris.shopify.com/tokens/color

Specific decisions taken from Polaris:
- **Numeric scale (100, 200... 900) for colour brightness** — Polaris v10 migrated to this from named scales (lightest, lighter, light etc.) precisely because numeric scales are more flexible and scalable. We use the same 50–900 range.
- **Numeric scale for font sizes** — Polaris uses `--p-font-size-100` as base with `--p-font-size-75` below and `--p-font-size-200` above. We adapted this to semantic names (base, lg, xl) rather than numbers because semantic names read better in component CSS.
- The principle of **semantic tokens describing use, not value** — Polaris documentation explicitly states "tokens are a method of applying colour in a consistent and meaningful way".

### GitHub Primer
**Source:** https://primer.style/product/primitives/token-names/ and https://github.com/primer/primitives

Specific decisions taken from Primer:
- **Category-first naming** — Primer uses `bgColor-default`, `fgColor-muted`, `borderColor-accent`. We adapted this to `--color-bg`, `--color-text-muted`, `--color-border` — same thinking, slightly shorter names.
- **The base/functional split** — Primer separates "base tokens" (raw values, like `base-color-green-5`) from "functional tokens" (role-based, like `bgColor-inset`). This is our primitives/semantic split.
- The `muted`, `subtle`, `inverse` variant vocabulary for text colours (`--color-text-muted`, `--color-text-subtle`, `--color-text-inverse`) is drawn directly from Primer's naming vocabulary.

### Adobe Spectrum
**Source:** https://spectrum.adobe.com/page/design-tokens/ and https://github.com/adobe/spectrum-css

Specific decisions taken from Spectrum:
- **Colour family + brightness scale naming for primitives** — Spectrum uses `--spectrum-gray-100` through `--spectrum-gray-900`. We use `--navy-900`, `--gold-500` etc. Same pattern, applied to brand-specific colour families rather than generic colour names.
- **The 4px base unit for spacing** — Spectrum's spacing system is built on a 4px grid. Our `--size-1: 0.25rem` (4px) base unit follows this directly.
- **Motion token vocabulary** — `duration` and `ease` as the two motion categories comes from Spectrum's motion token structure.
- The **three-tier shadow scale** (sm, md, lg) with increasing opacity values follows Spectrum's elevation model.

### W3C Design Tokens Community Group (DTCG)
**Source:** https://www.designtokens.org/ — First stable specification released October 2025.

We align with its core principles:
- Tokens as named, platform-agnostic values
- Separation of primitive (reference) tokens from semantic (alias) tokens
- Kebab-case naming for CSS custom properties
- The JSON token format with `$value`, `$type`, `$description` keys (for future tooling compatibility)

We do not implement the full DTCG JSON pipeline (Style Dictionary, Tokens Studio) as it adds unnecessary build complexity for a single-developer, web-only project. The CSS custom property output is what the spec would produce anyway.

### Nathan Curtis — EightShapes (naming theory)
**Source:** https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676

The naming framework paper by Nathan Curtis is the most cited academic reference on token naming.
Specific decisions drawn from this:
- **Avoid homonyms** — `font` not `type` or `typography` (type is ambiguous, typography is too long)
- **Category as the first segment** — `--color-*`, `--font-*`, `--space-*` not `--primary-color` or `--spacing-lg`
- The vocabulary choices: `space` over `spacing`, `font` over `type`, `radius` over `border-radius`

### CUBE CSS — Andy Bell
**Source:** https://piccalil.li/blog/cube-css/ and https://cube.fyi/

The file structure (compositions, utilities, blocks, exceptions) comes directly from CUBE CSS methodology.
Specific decisions drawn from CUBE:
- **Compositions handle layout only** — no colour or typography in `.wrapper`, `.stack`, `.grid` etc.
- **Data attributes for variants** — `data-gap="lg"`, `data-size="sm"` on compositions instead of modifier classes
- **Blocks are minimal** — global element styles in `blocks.css` should be small because the token system did most of the work already
- The `.flow` composition (margin-top between siblings) is a direct CUBE CSS pattern
- **Exceptions file is last resort** — CUBE explicitly discourages heavy use of exceptions

---

## Decisions Synthesised From Multiple Systems

These decisions don't come from a single system — they are the intersection of multiple systems that independently arrived at the same conclusion.

### Three-layer token architecture
Independently used by MD3, Polaris, Primer, and Spectrum. All four arrived at the same structure:
raw values → semantic roles → component overrides.
The specific names we use (primitive, semantic, component) are the most common vocabulary across these systems.

### Numeric brightness scale (50–900) for colours
Both Shopify Polaris and Adobe Spectrum use this independently. Tailwind also uses it.
The fact that three unrelated large-scale design systems landed on the same pattern is strong evidence it is the right choice.

### 4px base unit for spacing
Adobe Spectrum, Material Design, and most design tools (Figma's default grid) use 4px as the base unit.
The specific sizes (0.25rem, 0.5rem, 1rem, 2rem...) follow a powers-of-2 doubling pattern which both Spectrum and Open Props (Adam Argyle, Google Chrome) use.

### Semantic colour vocabulary
The words `muted`, `subtle`, `inverse`, `surface`, `brand`, `accent` appear in multiple systems:
- `surface` — MD3 uses this extensively
- `muted` / `subtle` — GitHub Primer uses both
- `inverse` — MD3 uses `on-` prefix, Primer uses `inverse`, we use `inverse` for clarity
- `brand` / `accent` — common across most systems

### CSS cubic-bezier easing tokens
The four easing curves (ease-out, ease-in, ease-inout, ease-spring) are the CSS equivalents of GSAP's named easings. This alignment means GSAP animations and CSS transitions feel identical in motion character across the site. The specific cubic-bezier values come from Material Design 3's motion specification.

---

## Decisions Made for This Project Specifically

These decisions have no single source system — they are original choices made for the solicitor website context.

### Font pairing: Cormorant Garamond + DM Sans
No design system specifies these — this is an original typographic decision.
**Rationale:** Cormorant Garamond is a refined, authoritative serif with strong legal and financial associations. DM Sans is highly legible and modern without being cold. The contrast between the two creates the "trusted professional" tone appropriate for Irish solicitor websites.
**Alternative for future clients:** Libre Baskerville + Inter, or Playfair Display + Source Sans 3.

### Colour palette: Navy + Gold + Stone
No design system specifies these — this is an original palette decision.
**Rationale:** Navy communicates authority and trustworthiness (used heavily in legal and financial sectors). Gold communicates quality and premium positioning without being flashy. Stone (warm neutral) prevents the palette from feeling cold or corporate. This combination appears frequently in the branding of established legal firms.

### --color-focus uses gold accent
Most systems use a high-contrast blue for focus rings. We use `--color-accent` (gold) deliberately:
- Gold has sufficient contrast against the navy and stone surfaces
- It reinforces brand colour rather than introducing a foreign UI colour
- It prevents the site from looking generically "accessible blue"

### Named semantic spacers (--space-section, --space-component, --space-element, --space-inline)
These four contextual spacers sit on top of the scale tokens.
No system names spacers this way — this is an original abstraction.
**Rationale:** On solicitor websites, the same scale token might feel right in one section and wrong in another because the visual weight of legal content is heavy. Giving sections, components, elements, and inline items their own named token means a designer can adjust all section spacing globally in one change.

### Breakpoints as CSS comments (not custom properties)
CSS media queries cannot use `var()` — this is a browser limitation, not a design decision.
Documenting the breakpoints in `tokens.css` as comments rather than inventing workarounds (PostCSS, container queries only, etc.) is a pragmatic choice to keep the system simple and Claude-readable.

### Coloured shadow tokens (--shadow-brand, --shadow-accent)
Standard design systems only define greyscale shadows. We added two brand-coloured shadows.
**Rationale:** On solicitor hero sections and CTA panels, a subtle navy shadow on a navy card, or a gold glow on an accent element, creates depth that feels deliberate rather than generic. Used sparingly.

---

## What Was Deliberately Left Out

### Style Dictionary / Tokens Studio pipeline
Many enterprise systems use Style Dictionary (Amazon) or Tokens Studio (Figma plugin) to transform JSON token files into CSS. We deliberately skip this for two reasons:
1. It adds a build step that Claude in terminal must understand and maintain
2. The output is CSS custom properties — which we write directly anyway

If this template grows to require Figma parity or multi-platform distribution, Style Dictionary can be added later without changing the token names.

### Dark mode tokens
GitHub Primer and MD3 both define parallel dark mode token sets. We do not.
**Rationale:** Solicitor websites rarely implement dark mode. The theme file architecture already gives us a colour-switching mechanism. If dark mode is needed for a specific client, add a `theme-[client]-dark.css` that overrides the same primitives.

### Motion: prefer-reduced-motion token
We chose not to create a `--duration-reduced: 0ms` token. Instead the reduced-motion guard is implemented in `reset.css` at the browser level and in component GSAP code.
**Rationale:** A token for `0ms` would be semantically confusing and might be skipped in component code. A system-level override is more reliable.
