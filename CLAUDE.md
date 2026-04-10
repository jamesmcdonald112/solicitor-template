# Mary Molloy Solicitor — Web Project

## Stack
Astro 6, plain CSS, GSAP, TypeScript, Zod, Resend, Biome, Vitest, Playwright

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`

## Architecture
- Design tokens: `src/styles/tokens.css` (semantic) + `src/styles/themes/theme-cream-navy.css` (primitives)
- Components: `src/components/[category]/[name]/Name.astro` + optional `name.gsap.ts`
- Config: `src/config/` — read before building any component with content
- Styles: CSS in `<style>` block inside `.astro` files — NO sibling `.css` files

## Critical Rules
- No raw CSS values anywhere — tokens only
- Every section needs three layers: full-width shell → inner container (max-width + margin-inline: auto + responsive gutters) → content
- Read `_system/LAYOUT-REFERENCE.md` before building any component
- Read `_system/COMPONENT-DIRECTION-GUIDE.md` before building any component
- Visual quality is the primary deliverable — if it looks mediocre, it is wrong

## Skills
For every component, page, or UI build task, load and follow:
`.claude/skills/frontend-design/SKILL.md`

## Do Not Touch
- `src/features/contact-form/` — form logic is complete, style only
- `src/styles/` — token and CSS system files are finalised
- Any existing passing tests

## Design System Files
- Skill: `.claude/skills/frontend-design/SKILL.md`
- Layout rules: `_system/LAYOUT-REFERENCE.md`
- Component direction: `_system/COMPONENT-DIRECTION-GUIDE.md`
- Design brief: `_system/STAGE-3-DESIGN-BRIEF.md`
