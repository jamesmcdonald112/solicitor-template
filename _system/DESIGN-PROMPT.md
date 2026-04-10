# Design Reference → Terminal Prompt Workflow

## How to Use This Document

This is the process for turning a design reference into a Claude terminal prompt.
Follow it every time you want to build a new component.

---

## What to Give Claude Chat

For each component you want to build, provide:

1. **A screenshot** of a design you like
   — Can be from any website, not just solicitor sites
   — Awwwards, Dribbble, any site that catches your eye
   — Does not need to be the same industry

2. **The component name**
   — e.g. "Navbar", "Hero", "ServiceCard", "TrustStrip"

3. **The relevant config file contents** (if not already shared)
   — e.g. paste the contents of src/config/home.ts

That is all. Claude chat handles everything else.

---

## What to Say to Claude Chat

Copy and paste this exactly:

```
Here is a screenshot of a design I like.
The component I want to build is: [COMPONENT NAME]

Please:
1. Describe what you see in the screenshot
2. Adapt it for a premium Irish solicitor website
   using our navy/gold/stone palette and token system
3. Write the full terminal prompt I should paste
   into Claude Code to build this component

If you need anything else from me, ask before writing the prompt.
```

If you do not have a screenshot yet, say:
```
I do not have a screenshot yet for [COMPONENT NAME].
What should I be looking for as a reference?
Can you suggest what kind of design would work?
```

---

## What Claude Chat Will Ask For (If Missing)

If you do not provide a screenshot, Claude chat will ask:
→ "Can you find a screenshot of a layout you like for this component?"

If the config content is needed, Claude chat will ask:
→ "Can you paste the contents of src/config/[file].ts?"

If the component name is ambiguous, Claude chat will ask:
→ "Is this for the homepage or a service page?"

Answer these before Claude chat writes the prompt.
Do not skip to the terminal until Claude chat has confirmed
it has everything it needs.

---

## What Claude Chat Will Produce

A complete terminal prompt containing:

- The file path for the component
- Which config files to read
- The layout concept in plain English
- Every element with its exact token names:
  font-family, font-size, font-weight, color, spacing
- Hover and interaction behaviour
- GSAP animation if needed
- Hard rules at the bottom
- The npm run build instruction

---

## What to Do With the Terminal Prompt

1. Open a fresh Claude Code terminal session
   — Do not reuse a session that has built other components
   — /clear if the session has been running

2. Paste the prompt exactly as written
   — Do not edit or shorten it
   — Do not add extra instructions

3. Let it build completely before checking the output

4. Screenshot the result in the browser

5. Come back to Claude chat with the screenshot
   and say what looks wrong if anything

---

## The Feedback Loop

If the output is wrong, paste the screenshot here and say:
```
Here is what came out.
[Describe specifically what is wrong — not "it looks bad"
but "the heading is too small" or "the image has rounded corners"]
```

Claude chat will write a targeted fix prompt.
Paste that into the same terminal session.

If the output is wrong twice in a row:
/clear in terminal and start a fresh session
with an improved prompt from Claude chat.

---

## Component Checklist

Use this to track what reference you have found for each component.

### Session 1 — Foundation
- [ ] Button — no screenshot needed, structure only
- [ ] Container — no screenshot needed, layout only
- [ ] Section — no screenshot needed, layout only
- [ ] Preloader — find: dramatic logo reveal animation
- [ ] Navbar — find: minimal transparent nav on dark hero
- [ ] Footer — find: dark three-column professional footer
- [ ] Hero — find: full-viewport editorial hero with photography

### Session 2 — Homepage
- [ ] SectionHeader — find: gold rule + eyebrow + large serif heading
- [ ] TrustStrip — find: editorial magazine stats horizontal bar
- [ ] FeaturedService — find: two-column editorial with image right
- [ ] ServiceCard — find: portrait image cards with name overlay ✓ DONE
- [ ] TestimonialBlock — find: large pull quote with attribution
- [ ] CTAPanel — find: dark full-bleed two-column call to action

### Session 3 — Service Pages
- [ ] ServiceHero — find: clean editorial page hero no photography
- [ ] ArticleBlock — find: long-form legal text with good typography
- [ ] ProcessSteps — find: numbered horizontal steps sequence
- [ ] FAQAccordion — find: clean expanding question rows
- [ ] ServicesList — find: numbered editorial services list

### Sessions 4–5
- [ ] ContactForm — find: minimal form with underline inputs
- [ ] ContactPanel — find: contact details with gold accents
- [ ] ThankYouPage — find: calm centred confirmation page
- [ ] TeamMember — find: editorial team member with photo
- [ ] TestimonialStrip — find: review strip with attribution

---

## Good Places to Find References

**Awwwards:**
- https://www.awwwards.com/websites/editorial/
- https://www.awwwards.com/websites/clean/
- https://www.awwwards.com/websites/typography/
- https://www.awwwards.com/websites/winner_category_business-services/

**Dribbble searches:**
- "law firm website"
- "professional services hero"
- "editorial footer"
- "minimal navbar dark"
- "stats section typography"

**Any site that catches your eye is valid.**
It does not need to be a solicitor site.
The design concept transfers — the content gets replaced.