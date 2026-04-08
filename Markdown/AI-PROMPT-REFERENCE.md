# AI Prompt Reference

## Purpose

Use this file as the baseline prompt reference when asking AI to build pages, sections, or the full site in this repo.

The goal is:

- give AI strong creative freedom
- keep architecture and styling disciplined enough that the repo stays clean
- avoid generic template output
- make design decisions traceable to references and brief

## Core Framing

This is a client-facing solicitor website.

It should feel:

- trustworthy
- modern
- calm
- premium
- highly intentional

Avoid:

- generic legal-site clichés
- stiff corporate layouts
- interchangeable template sections
- flashy motion that undermines trust

## How To Use The Repo Rules

Before building, review:

- [`ARCHITECTURE.md`](/Users/jamesmcdonald/Desktop/new-site/ARCHITECTURE.md)
- [`STYLE-GUIDE.md`](/Users/jamesmcdonald/Desktop/new-site/STYLE-GUIDE.md)

Treat those files as light structural references, not creative restrictions.

The architecture exists to keep files organized and readable. It is not there to force a visual system too early.

## Implementation Approach

Preferred workflow:

1. understand the page or feature goal
2. identify strong visual references
3. build the page or section naturally so the result is actually good
4. then split and store the code in the correct feature folders
5. refine structure only where readability and reuse benefit from it

Rules:

- use Tailwind for layout and spacing
- use the existing token/theme system for styling
- use GSAP only where motion adds real value
- reuse existing backend or logic work where it already exists
- create files in the correct feature folders
- co-locate components, scripts, and content by feature
- only create `components/ui` primitives when reuse is real
- rebuild sections from scratch where needed

### What "keep pages thin" means

It does **not** mean forcing the design to be simple.

It means:

- page files should mostly compose layouts and feature sections
- if a page implementation grows large, break it into sensible components
- store those components in the right feature folders
- do not leave an entire complex page living inside one route file unless there is a good reason

The goal is readability and maintainability, not rigid over-abstraction.

## Reference Strategy

Do **not** use typical solicitor website design references as the main design source. Most are visually weak and will drag the output down.

Instead:

- reference the best-designed websites available
- use Awwwards, Dribbble, and strong editorial/service-brand references
- adapt that level of design quality to a solicitor website

Record the chosen references in [`REFERENCES.md`](/Users/jamesmcdonald/Desktop/new-site/Markdown/REFERENCES.md) as you work — this is a working log maintained by AI, not something that needs to be seeded before building. Future AI work can then reuse the same design direction instead of starting from zero each time.

Explain which references influenced:

- layout direction
- typography direction (font pairing is chosen as part of the design — select fonts that suit the references and tone, then record the choice)
- motion direction
- use of imagery
- overall tone

## Motion Guidance

Use GSAP only where it adds real value.

Motion should feel:

- premium
- restrained
- smooth
- deliberate

Avoid vague "add animation" behavior. Motion should support hierarchy, polish, and clarity.

## Best Prompt Pattern

Use this structure in prompts:

1. define the site category and audience
2. define the visual and emotional goal
3. require reference selection before building
4. point to the repo architecture/style guides
5. define implementation expectations
6. define the deliverable clearly

## Reusable Prompt Template

```md
Build a premium solicitor website in this repo.

This is a client-facing solicitor site.
It should feel trustworthy, modern, calm, premium, and highly intentional.
Do not use typical solicitor website references as the main visual source.
Instead, reference the best-designed websites available and adapt that quality to this solicitor site.

Before building:
- review ARCHITECTURE.md
- review STYLE-GUIDE.md
- review the existing feature/content structure

Use:
- Tailwind for layout and spacing
- the existing token/theme styling system
- GSAP only where motion adds real value

Build approach:
- build the page or section as naturally as needed to achieve a great result
- then organize the result into the correct feature folders
- split large files into sensible components where readability benefits
- keep route files mostly as composition layers
- reuse existing backend logic where it already exists
- do not introduce global abstractions unless reused

Process:
- first identify strong references from the best-designed websites available
- then build the page or feature based on those references
- explain which references influenced the result
```

## Notes

- The best results come from combining creative freedom with repo-enforced structure.
- If output starts looking generic, improve the framing and references before tightening code-level constraints.
- Architecture should help organize the result, not block strong design decisions.
