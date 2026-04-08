# Style Guide

## Styling Architecture

Use a hybrid styling approach:

- Tailwind for layout, spacing, responsive structure, sizing, and composition.
- CSS variables for theme tokens and semantic design decisions.
- Plain CSS for resets, token contracts, semantic utility wrappers, and the small set of cases that are awkward in utility classes.
- GSAP for animation logic and sequencing, not for layout or basic visual styling.

This is the default approach because it gives fast, consistent structure while keeping themes and visual systems flexible.

## File Roles

- [`src/styles/tokens.css`](/Users/jamesmcdonald/Desktop/new-site/src/styles/tokens.css): cross-theme contract only. Keep this theme-agnostic.
- [`src/styles/themes`](/Users/jamesmcdonald/Desktop/new-site/src/styles/themes): theme files override semantic color slots and any palette values needed to derive them.
- [`src/styles/reset.css`](/Users/jamesmcdonald/Desktop/new-site/src/styles/reset.css): minimal element defaults only.
- [`src/styles/global.css`](/Users/jamesmcdonald/Desktop/new-site/src/styles/global.css): imports, Tailwind token mapping, and a very small set of shared utilities.

## Semantic Token Contract

Use these names consistently across `tokens.css`, theme files, and Tailwind mapping:

- Surface: `--color-bg`, `--color-surface`, `--color-surface-alt`, `--color-border`, `--color-border-strong`
- Text: `--color-text`, `--color-text-muted`, `--color-text-subtle`, `--color-heading`, `--color-text-accent`, `--color-text-on-accent`, `--color-text-on-dark`, `--color-text-muted-on-dark`
- Accent: `--color-accent`, `--color-accent-hover`, `--color-accent-dark`, `--color-accent-dark-hover`, `--color-accent-subtle`, `--color-accent-border`
- Inputs and state: `--color-input`, `--color-input-bg`, `--color-ring`, `--color-destructive`, `--color-destructive-soft`, `--color-destructive-border`, `--color-success`, `--color-on-success`

## Rules

- Do not put layout systems, spacing scales, radii, shadows, or typography scales into `tokens.css` if Tailwind already handles them well.
- Do not put opinionated component styling into `global.css`.
- Do not duplicate global typography or motion tokens inside theme files.
- Add a custom utility only when the pattern is reused across multiple components or it is meaningfully clearer than repeating the Tailwind classes inline.
- Prefer semantic token names over raw color values in components.
- Add new semantic tokens only when a real repeated need appears. Extend the existing contract instead of creating parallel naming systems.
- Consider removing global smooth-scroll behavior from `reset.css` if motion/accessibility behavior needs to stay fully browser-native.

## Utility Guidance

Keep shared utilities sparse. Good candidates:

- focus-ring
- focus-ring-input
- container-page
- reveal-target

Bad candidates:

- one-off button styles
- section spacing tied to a specific page design
- decorative effects that belong to a single component

## AI Guidance

When making styling changes:

- Use Tailwind first for layout and responsive structure.
- Use semantic token-backed utilities instead of hard-coded colors where possible.
- Add CSS only when Tailwind would make the result harder to read or harder to maintain.
- Treat themes as swappable.
- Avoid introducing visual opinion into foundation files.
