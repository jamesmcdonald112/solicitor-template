# Architecture Guide

## Goal

Keep the codebase easy to read, easy to change, and easy to extend.

The default approach is:

- organize by feature or section
- co-locate related files
- keep reusable primitives separate from site-specific sections
- split large files when the parts have clear responsibility

## Migration Note

Some existing files may remain in the project temporarily while the structure is being rebuilt.

Treat their current location as temporary, not final.

- AI may move files into more appropriate folders when restructuring.
- Keep required behavior and logic intact while moving files.
- Prefer moving a file into the architecture over leaving it in an older catch-all location.
- If a file is being kept only as a placeholder, its contents may be reset while its role and destination stay documented.

Current examples explicitly intended to be kept and reorganized as needed:

- modal open/close scripts
- page files the site definitely needs
- `src/middleware/index.ts`
- `BaseLayout`
- review fetching logic
- contact delivery/server logic
- message counter logic
- contact schema
- contact field limits
- contact services config
- contact form

For these files:

- keep them in the project
- move them to the most appropriate location when restructuring
- preserve behavior where requested
- allow internal splitting or re-grouping if it improves the architecture

## Preferred Structure

Use a hybrid feature-first structure.

```text
src/
  features/
    header/
      components/
      scripts/

    footer/
      components/

    contact/
      components/
      content/

    contact-form/
      actions/
      components/
      config/
      content/
      schema/
      scripts/
      service/

    home/
      content/

    about/
      content/

    services/
      content/

    legal/
      content/

    reviews/
      service/

  components/
    ui/

  layouts/
    BaseLayout.astro

  pages/
    index.astro
    contact.astro

  lib/
    utils.ts

  styles/
    global.css
    reset.css
    tokens.css
    themes/
```

This repo intentionally keeps `components/ui` empty until true reusable primitives appear.

## Core Rule

Keep files close to what they belong to.

- If a stylesheet belongs to one component or feature, keep it beside that component or feature.
- If a script belongs to one section, keep it in that same folder.
- If data belongs only to one feature, keep it there.
- Only move something to a shared location when it is truly reused.

## Folder Roles

### `src/components/ui`

Use for reusable presentation primitives.

Examples:

- buttons
- containers
- badges
- icons
- simple cards
- reusable form field wrappers

These should stay generic and not know about one specific page or section.

### `src/features`

Use for site-specific sections or business-specific modules.

Examples:

- header
- footer
- testimonials
- contact form
- services grid
- team section

This is also the default home for most page-section scripts, schemas, local config, and feature-specific server interactions.

A feature folder can contain:

- main section component
- smaller subcomponents
- local CSS
- local scripts
- local types
- local data

### `src/layouts`

Use for page shells and shared document structure.

Examples:

- base layout
- marketing layout
- article layout

### `src/pages`

Use only for route entry files.

Pages should compose features and layouts, not contain large amounts of view logic.

### `src/lib`

Use for shared utilities and helpers.

Examples:

- formatting helpers
- validation helpers
- shared constants
- small framework-agnostic utility functions

Do not put section-specific logic here.

## Existing File Placement Rules

When reorganizing current files, use these defaults:

- feature-specific scripts go inside that feature folder
- feature-specific schemas go inside that feature folder
- feature-specific config goes inside that feature folder
- feature-specific server handlers or delivery helpers go inside the owning feature unless they are genuinely shared
- shared route or app-level concerns stay in framework-level locations only when required by the framework

Examples:

- modal scripts used only by one section should live with that section
- `messageCounter` should live with the contact form feature if it only serves that form
- `contactSchema`, field limits, and services config should live with the contact feature if they are not shared elsewhere
- `fetchReviews` should live with the testimonials or reviews feature unless it is reused by multiple unrelated features
- `middleware/index.ts` should stay where the framework requires it, even if related logic is extracted into feature or lib files

### `src/styles`

Use only for styling foundation.

Examples:

- reset
- tokens
- global Tailwind mapping
- themes

Do not put section-specific component styling here if it belongs beside a feature.

## When To Split Files

Split a file when:

- it has clearly separate responsibilities
- one part is reusable inside the same feature
- the file is becoming hard to scan
- markup, logic, or styling can be separated cleanly

Do not split a file just to make more files.

Good split:

- `Header.astro`
- `Brand.astro`
- `NavMenu.astro`
- `MobileMenu.astro`

Bad split:

- breaking a simple component into many tiny files with no real responsibility boundary

## Co-Located File Rules

Preferred examples:

- `Header.astro` next to `header.css`
- `TestimonialsSection.astro` next to `testimonials.data.ts`
- `ContactForm.astro` next to `contact-form.ts`
- `ContactForm.astro` next to `contact-schema.ts`
- `ContactForm.astro` next to `message-counter.ts`

Use local files when they serve only that feature.

Suggested naming:

- `FeatureName.astro`
- `FeatureName.css`
- `feature-name.data.ts`
- `feature-name.types.ts`
- `feature-name.constants.ts`

## Reuse Rules

Move something into `ui` only when at least one of these is true:

- it is reused across multiple features
- it is intentionally designed as a shared primitive
- keeping it local would cause duplication

Keep something inside a feature when:

- it exists only for that section
- it is tightly coupled to that section’s content or behavior
- reuse is only hypothetical

Do not promote too early.

## Styling Rules

- Global styling belongs in `src/styles`.
- Feature-specific styling belongs beside the feature.
- Tailwind should be the default for layout and spacing.
- Local CSS should be used when the styling is specific to that feature or awkward in utilities.
- Theme and token files should remain global and system-level only.

## Page Composition Rules

Pages should mostly do this:

1. import a layout
2. import feature sections
3. pass data into those sections
4. keep route-specific concerns at the page level

Pages should not become giant component files.

Use `BaseLayout` as the default layout for all standard pages unless a page has a clear reason to use a different shell.

## Naming Rules

- Use PascalCase for Astro components.
- Use kebab-case for folders when they represent feature names.
- Use clear names based on responsibility, not appearance alone.
- Prefer `TestimonialsSection` over vague names like `BlockOne`.

## AI Guidance

When adding or moving code:

- default to co-location
- prefer `features/` for site sections
- prefer `components/ui/` only for real reusable primitives
- add local CSS or scripts beside the owning component when they are not global concerns
- split large files only when the split creates clearer responsibility
- avoid creating parallel structures for the same kind of thing

## Decision Order

When creating a new piece of UI, decide in this order:

1. Is it route-level? Put it in `pages`.
2. Is it a page shell? Put it in `layouts`.
3. Is it a site-specific section? Put it in `features/<name>`.
4. Is it a generic reusable primitive? Put it in `components/ui`.
5. Is it a shared helper with no UI responsibility? Put it in `lib`.
