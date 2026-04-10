# Stage 3 — Design Brief: Service Pages & Supporting Components

This document defines the scope, quality bar, and session structure
for Stage 3 of the solicitor template build.

---

## Stage 3 Scope

Build all components needed to make service slug pages fully functional
and visually exceptional. Every component must work with real data from
the service config files.

### Components

- **ServiceHero** — Top-of-page hero, stone bg, two-column, no photography
- **ArticleBlock** — Long-form editorial content with structured blocks
- **ProcessSteps** — Numbered sequence, horizontal desktop / vertical mobile
- **FAQAccordion** — Accessible accordion, no box styling
- **ServicesList** — Editorial row listing of all services

### Pages wired

- `src/pages/services/[slug].astro` — dynamic service page (SSR)
- `src/pages/services/index.astro` — services index page

---

## Quality Bar

Every component must pass this test before it is considered done:

> Would a potential client — stressed, facing a significant legal
> decision — feel they are in expert, expensive, trustworthy hands
> before reading a single word?

The visual impression comes first. Technical correctness is the floor,
not the ceiling.

---

## Per-Session Prompt

Use this exact sequence for every build session.
Fill in the bracketed sections before running.

---

Your primary job is to design something visually exceptional.
The code is how you express the design. Not the other way around.

Read these files in this exact order before writing any code:

1. view .claude/skills/frontend-design/SKILL.md
2. view _system/LAYOUT-REFERENCE.md
3. view _system/COMPONENT-DIRECTION-GUIDE.md
4. view src/config/firm.ts
5. view src/config/nav.ts
6. view [ADD OTHER RELEVANT CONFIG FILES HERE]
7. view src/styles/tokens.css
8. view src/styles/themes/theme-cream-navy.css
9. view _system/STAGE-3-DESIGN-BRIEF.md

After reading the skill file, commit to this question before
touching any code:
"What is the most beautiful thing I can build within these constraints?"

After reading the layout reference, apply the three-layer
structure to every component without exception:
- Outer element: full-width background + vertical padding
- Inner element: max-width + margin-inline: auto + responsive gutters
- Content: the actual component markup

You are building [SESSION NAME] for a premium Irish solicitor website.

COMPONENTS THIS SESSION: [list each component]

CONTENT SOURCE: [list relevant config files]

LAYOUT CONCEPTS:
[Paste the specific layout concept for each component here.
Use the concepts from _system/COMPONENT-DIRECTION-GUIDE.md
or write new ones following the same formula:
- Structure in plain English
- Each element: font-family token, font-size token, color token
- Hover behaviour
- GSAP instruction if needed]

RULES:
- Read config files before building — no placeholder content
- CSS in <style> block inside .astro — no sibling .css files
- GSAP in sibling .gsap.ts only for animated components
- No raw values anywhere — tokens only
- Three-layer layout on every component — no exceptions
- No images on service components
- No card borders or box shadows unless explicitly specified
- Import existing Button, Section, Container where needed
- After building, wire into the relevant page
- Run npm run build to confirm no errors

Do not begin writing code until you have read all files
and committed to a design direction for each component.
