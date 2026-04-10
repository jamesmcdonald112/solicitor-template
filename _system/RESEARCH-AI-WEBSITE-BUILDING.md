# Using Claude to Build Websites — What We're Doing Right, What to Fix

Research from Anthropic docs, Claude Code best practices, designer guides,
and community experience. Applied directly to this project.

---

## The Single Biggest Thing We Are Missing

### CLAUDE.md — We Don't Have One

This is the most important gap in the current workflow.

CLAUDE.md is a file that Claude Code reads automatically at the start of
every single session — before you type anything. It is the persistent
memory that survives across sessions.

Right now, every session prompt starts with 10+ lines of `view` commands
because Claude knows nothing about the project when it opens. A CLAUDE.md
at the project root fixes this. Claude reads it automatically, so you
don't need to explain the stack, token rules, or file structure every time.

**What belongs in CLAUDE.md (short and focused — long files get ignored):**

```markdown
# Mary Molloy Solicitor — Web Project

## Stack
Astro 6, plain CSS, GSAP, TypeScript, Biome, Vitest, Playwright

## Commands
- Dev: npm run dev
- Build: npm run build  
- Test: npm run test
- Lint: npm run lint

## Architecture
- Design tokens: src/styles/tokens.css (semantic) + src/styles/themes/theme-cream-navy.css (primitives)
- Components: src/components/[category]/[name]/Name.astro + optional name.gsap.ts
- Config: src/config/ — read before building any component with content
- Styles: CSS in <style> block inside .astro files — NO sibling .css files

## Critical Rules
- No raw CSS values anywhere — tokens only
- Every section needs inner container: max-width + margin-inline: auto + responsive gutters
- Read _system/LAYOUT-REFERENCE.md before building any component
- Read _system/COMPONENT-DIRECTION-GUIDE.md before building any component
- Visual quality is the primary deliverable — if it looks mediocre, it is wrong

## Design System Files
- Skill: .claude/skills/frontend-design/SKILL.md
- Layout rules: _system/LAYOUT-REFERENCE.md
- Component direction: _system/COMPONENT-DIRECTION-GUIDE.md
- Design brief: _system/STAGE-3-DESIGN-BRIEF.md
```

**Important:** Keep it short. Anthropic's own docs confirm that long CLAUDE.md
files get partially ignored. Every line competes for attention.
Prune ruthlessly. If Claude already does something correctly without
the instruction, delete that instruction from the file.

---

## The Second Biggest Thing — Claude Can See Screenshots

This changes everything about the feedback loop.

Claude Code can accept images pasted directly into the terminal prompt.
You do not need to describe what you see — you can show it.

**Current workflow (slow):**
Build → look at browser → describe to Claude chat → Claude chat relays to terminal → fix

**Better workflow:**
Build → screenshot → paste screenshot into Claude Code terminal → Claude sees it → fix

To paste a screenshot into Claude Code: copy the screenshot, then paste
it directly into the terminal prompt. Claude sees the image and can
give specific, visual feedback on exactly what is wrong.

This means instead of typing "the text is too small and the spacing looks off",
you paste the screenshot and Claude can say "the heading is using font-size-xl
but should be font-size-3xl, and the gap between eyebrow and heading
needs to be var(--space-lg) not var(--space-sm)."

---

## What We Are Doing Right

**The skill file system is correct.** Anthropic's own blog confirms this
is the right pattern. Storing design principles in a SKILL.md that Claude
loads on demand is exactly how it should work. Our skill file is
well-structured and project-specific — this is better than most.

**The token system is excellent.** Three-layer architecture, semantic naming,
all values as custom properties — this is enterprise-grade and Claude
works well with it because everything is named meaningfully.

**Specific layout concepts in prompts work.** When we describe the exact
HTML structure and per-element token specs, Claude executes correctly.
The testimonial component proved this. This approach is confirmed
by the research — "500 words of guidance transforms broken code into
working code."

**Fresh sessions for each build.** This is correct. Context degradation
is the primary failure mode in Claude Code. The recommendation from
experienced users is to use /clear aggressively, and to start fresh
sessions for new tasks.

**Reading config files before building.** Correct approach confirmed.
Claude knows nothing about your content — it must be given the data
before it can use it.

---

## What We Are Doing Wrong or Could Improve

### 1. No CLAUDE.md (covered above — biggest fix)

### 2. The Skill File Is Not Auto-Activating Reliably

Research finding: "Skills need auto-activation to work reliably.
Manual skills are ignored ~90% of the time."

The skill description in the YAML frontmatter is what triggers automatic
loading. Our current description is:

```
description: Create distinctive, production-grade frontend interfaces
for premium Irish solicitor websites.
```

This is good but relies on Claude matching it to the task. The more
reliable approach is to reference the skill explicitly in CLAUDE.md
so Claude knows to load it for every frontend task.

Add to CLAUDE.md:
```
## Skills
When building any component, page, or UI element:
use skill .claude/skills/frontend-design/SKILL.md
```

### 3. No Explore/Plan Phase Before Building

Anthropic's recommended workflow: Explore → Plan → Implement → Verify

We go straight to Implement. This means Claude sometimes misses things
that an exploration phase would catch — like checking what assets exist
in public/ before choosing a hero image path.

**Fix for each session:** Add this before the build prompt:

```
Before building anything, run these checks and report back:
1. ls src/assets/images/ — what photography exists?
2. ls src/assets/logo/ — what logo files exist?
3. cat src/config/[relevant].ts — confirm the data shape
4. Check if any existing components need to be imported

Report what you find, then begin building.
```

### 4. CLAUDE.md for the Skill File Is Too Long

The full STAGE-3-DESIGN-BRIEF.md, LAYOUT-REFERENCE.md, and
COMPONENT-DIRECTION-GUIDE.md being read every session is a lot of
context. Claude's attention is finite.

**Fix:** Put the critical non-negotiables in CLAUDE.md (short, always loaded).
Keep the detail in the skill and reference files (loaded on demand).
The rules that matter most should be the shortest and clearest.

### 5. We Are Not Using Slash Commands

Claude Code has a `.claude/commands/` directory. Any markdown file there
becomes a slash command you can invoke instantly.

Create `.claude/commands/build-component.md`:

```markdown
# Build Component

Read these files before starting:
- _system/LAYOUT-REFERENCE.md
- _system/COMPONENT-DIRECTION-GUIDE.md
- .claude/skills/frontend-design/SKILL.md

Your primary job is visual quality. The code expresses the design.

Component to build: $ARGUMENTS

Read the relevant config file for content. Apply three-layer layout.
No raw values. Tokens only. Run npm run build when done.
```

Then in terminal: `/build-component ServiceCard`

This eliminates the long boilerplate prompt every time.

### 6. No Verification Step

We check the build passes, but we don't have a structured visual
verification. The recommendation is: always provide verification tools.

**Add to the end of every build prompt:**

```
After building, run npm run build and confirm it passes.
Then describe what each component looks like visually —
what colours are used, what typography sizes, what spacing.
This helps me verify the design intent was implemented correctly.
```

This forces Claude to reflect on what it built, which often catches
problems before you see them in the browser.

---

## The Correct Workflow Going Forward

```
1. CLAUDE.md is set up (do this once, now)
   → Auto-loads project context every session
   → References the skill file so it activates reliably

2. Design in Claude chat (this interface) first
   → Share config files
   → Get layout concept written out
   → Refine until it feels right

3. Open fresh Claude Code terminal session
   → Run /build-component [name] (slash command)
   → Paste the layout concept from step 2
   → Let it explore first if needed

4. Review in browser
   → Screenshot
   → Paste screenshot into Claude Code terminal
   → Claude sees what it built and can fix specifically

5. Iterate with precise feedback
   → "The heading is too small — should be font-size-3xl"
   → NOT "this doesn't look great"
```

---

## What Actually Causes Generic Output — The Root Explanation

Anthropic's own docs name this directly: "distributional convergence."

Claude has seen millions of websites. When asked to build a service card,
it patterns-matches to the most common version of a service card it has
seen — which is a card grid with an image, icon, and button. This is
not a failure of intelligence. It is what any system does when given
insufficient constraints.

The fix is not better adjectives ("more premium", "more editorial").
The fix is structural constraints that eliminate the common pattern
entirely. When you specify the HTML structure explicitly, Claude cannot
default to card grids because you have already decided the structure.

This is why the testimonial worked first time (clear concept given)
and the service cards failed three times (no concept given, Claude chose).

---

## One Thing Worth Trying — Anthropic's Own Aesthetic Prompt

Anthropic published a specific prompt snippet for frontend aesthetics.
This is worth adding to the skill file or CLAUDE.md:

```
You tend to converge toward generic, "on distribution" outputs.
In frontend design, this creates what users call the "AI slop" aesthetic.
Avoid this. Make creative, distinctive frontends that surprise and delight.
Think outside the box. Avoid: Inter, Roboto, Arial, system fonts.
Avoid: purple gradients, predictable layouts, cookie-cutter patterns.
Vary your approach. The expected version is always the wrong version.
```

---

## Summary — The Priority Fix List

In order of impact:

1. **Create CLAUDE.md** at project root — short, focused, references skill
2. **Use screenshots** — paste directly into Claude Code terminal for visual feedback
3. **Create slash command** at `.claude/commands/build-component.md`
4. **Add explore step** before each build — check assets, confirm config shape
5. **Add verification step** after each build — Claude describes what it built
6. **Design in chat first** — layout concept locked before terminal session opens

The CLAUDE.md alone will save 5+ minutes of boilerplate per session
and make the skill file load reliably every time.