# TODO

## Pages — remaining work
- [ ] **Google Maps (embedded)** — the footer already has a "Get directions" link which covers basic UX and local SEO signals. Optionally, embed a map on the Contact page for a richer experience — but only once cookie consent is set up, as embedded Google Maps set tracking cookies and require explicit user consent under GDPR. OpenStreetMap is a GDPR-safe alternative that needs no consent banner.
- [ ] Testimonials — add a section to the homepage and consider a standalone page; source reviews from Google Business Profile (see note below)
- [ ] Add review filtering to `firm.ts` — allow excluding specific reviews by author name (e.g. `googleReviews: { excludeAuthors: ["John Smith"] }`) and update `fetchReviews.ts` to apply the filter

> **Business Place ID:** `ChIJeTRDMZ4wXUgRwZoAUIYc-30`
>
> **Google Reviews setup — what you need and why:**
>
> **What you need:**
> 1. **A Google Cloud account (yours, not Nick's)** — you're building and maintaining this, and you may do it for other clients too. One account, one project per client. Go to console.cloud.google.com and sign in with your Google account.
> 2. **A Places API key** — this is what lets the site talk to Google and fetch the reviews. Without it Google won't return anything. Free up to 150 requests/day, which is fine.
> 3. **The business Place ID** — a unique ID Google uses to identify the business. You can find it yourself without logging in — go to Google Maps, search for the business, and use Google's Place ID finder tool (search "Google Place ID finder").
>
> **What to do:**
> 1. Go to console.cloud.google.com → create a new project (e.g. "Mary Molloy Solicitors")
> 2. Enable the **Places API** on that project
> 3. Create an **API key** and restrict it to the Places API (so it can't be misused if leaked)
> 4. Find the **Place ID** for the business on Google Maps
> 5. Add the API key to **Netlify environment variables** (never put it in the code/repo — it would be public)
> 6. Build the fetch + cache logic in the site (cache for 24hrs so the API is only hit once a day regardless of traffic)

- [ ] About Us page — needs building
- [ ] Homepage — needs building (also needs a hero image)
- [ ] **Conveyancing fee structure** — confirm with Mary whether the firm offers fixed-fee conveyancing (single set price per transaction) or variable fees (depend on complexity). This is the single biggest conversion driver for property solicitors in Ireland. If fixed fee is offered, add it prominently to the homepage hero and property page. If variable, use language like "transparent fees, explained upfront." Currently the homepage uses placeholder language — update `src/config/content/home.ts` hero subtitle and the `FeaturedService` section copy once confirmed.
- [ ] Review all service slug pages — make sure content and layout are complete
- [ ] Property page — decide whether to fold into `/services/[slug]` pattern or keep as standalone

## Design & Layout
- [ ] Experiment with the team section — try centering the image
- [ ] Decide on the buying and selling property page structure — move under `/services/[slug]` or keep as a standalone route
- [ ] Check `text-subtle` colour token — consider adding it back in

## Assets
- [ ] Find a better icon for Family & Childcare Law — current one is generic
- [ ] Source appropriate images for all services — portrait (3:4 or 2:3) for slug page heroes, same image used for card hover
- [ ] Once all 8 service images are in place, wire up per-service hero images in `src/pages/services/[slug].astro` — currently hardcoded to one image for all services
- [ ] Source a landscape (16:9) hero image for the homepage
- [ ] Credit photo artists on the site (check each image source for attribution requirements — Unsplash/Pexels don't require it but it is good practice)

## Content & Config
- [ ] Replace placeholder email in `src/config/firm.ts` — currently `info@YOURDOMAIN.ie`
- [ ] Update `siteUrl` in `src/config/firm.ts` — currently points to the Netlify test URL
- [ ] **Content audit — all config files** — go through every content config file (`src/config/content/`, `src/config/services/`) and:
  - Fix `capitalize` CSS on `CtaBanner` headings — remove the class and write strings in correct title case (short words like "a", "or", "and", "the", "to", "of" should not be capitalised)
  - Convert all copy to British English spelling (e.g. "analyse" not "analyze", "licence" not "license", "practise" not "practice" for the verb)
  - Verify all claims comply with Irish advertising law and the Law Society of Ireland's advertising guidelines — no "best", "leading", "specialist" (unless accredited), "guaranteed outcomes", or testimonials that imply a specific result
  - Review copy against best practices for converting legal service clients — clear outcomes, plain English, empathy-led, action-oriented CTAs
  - Review and optimise for Irish legal SEO keywords — location + service combinations (e.g. "solicitor Kilkenny", "personal injury claims Ireland"), and long-tail terms clients actually search

## Font experiment
- [ ] Settle on final heading/body font pairing (currently Merriweather + Open Sans)

## Accessibility
- [ ] Check alt text for service hero images — currently `alt=""` (decorative) on card hover images and hero backgrounds; confirm this is correct or add descriptive alt where needed
- [ ] Consider triggering the card hover state on focus — so keyboard users see the same image/overlay reveal as mouse users (use `focus-within:` variants alongside `group-hover:` in `ServiceCardsGrid.astro` and `FeaturedService.astro`)

## Cleanup
- [ ] Delete `src/sections/` — contains the old placeholder hero layout (`HeroTailwind.astro`), not part of the real site
- [ ] Delete `src/pages/test.astro` — test page, not for production
