# Transformation Logic: Editorial to Consulting-Grade Pitch Book

**Project**: alche Pre-Seed Investment Memorandum
**Date**: February 2026
**Status**: Internal process documentation

---

## 1. WHY WE TRANSFORMED

The original alche pitch book was built as an editorial-style document. Its design system -- Apple glassmorphic crossed with neo-apothecary -- produced a visually striking artifact: frosted glass cards floating over atmospheric radial gradients, Cormorant Garamond serif headlines at 40px, five accent colors, pull quotes with amber borders, and dark inverted vision blocks. It looked like an Aesop catalog designed by Apple's marketing team.

The target investor is not an Aesop customer. The target investor is a DACH-based angel or micro-VC partner with a management consulting background -- someone trained at or alongside Deloitte, McKinsey, BCG, or Roland Berger. They review 300+ pitch books per year. They evaluate through the Pyramid Principle (conclusion first, evidence second). They distrust documents that lead with aesthetics over substance. Their first 30 seconds determine whether they continue reading.

The gap was structural, not cosmetic:

- **The original book had no executive summary.** A consulting-trained investor expects the entire thesis on one page before page 3. Its absence signals "this was made by designers, not operators."
- **The original book had no table of contents.** Consulting documents are designed to be navigable in any order. Investors flip directly to financials or team. Without a TOC, the document forces linear reading.
- **Financial data was buried.** Break-even analysis -- the single most compelling number (145 subscribers at Month 12) -- appeared on page 16 of 26. Unit economics were presented in glassmorphic cards instead of assumption-transparent tables.
- **Research was presented as traction.** Section 09 displayed third-party market statistics (Reddit subscriber counts, competitive spend estimates) in KPI cards formatted identically to first-party metrics. The traction section was rated 4/10 by investor critique.
- **Brand language occupied space where business logic belonged.** The closing section compared alche to Aesop, included a "Phase 4 vision" block, and ended with a pull quote from Reddit. The cover's primary message was "The Art of Curated Longevity" -- beautiful copy that immediately triggers the investor's "brand exercise or business?" filter.

The transformation was not about making the book less beautiful. It was about making it legible to its audience.

---

## 2. METHODOLOGY: TWO-AGENT ARCHITECTURE

### Why Agents at All

The transformation required two fundamentally different cognitive tasks performed in sequence:

1. **Empathy research**: Understanding how a consulting-trained investor reads documents, identifying every gap between the current book and their expectations, and producing a precise transformation specification.
2. **HTML construction**: Consuming that specification and rebuilding 14 sections (plus 2 new ones) into a visually consistent consulting-grade document across 27 A4 pages.

These tasks have different tool requirements, different context needs, and different quality failure modes. Mixing them in a single context would degrade both.

### Empathy Agent (Phase 1)

The Empathy Agent performed the research and analysis phase. Its responsibilities:

- **Investor persona construction.** Built a detailed profile of the target reader: their background, decision triggers, red flags they scan for in the first 30 seconds, and the six-filter mental model they apply when evaluating a pre-seed opportunity.
- **Deloitte/McKinsey visual language research.** Defined what "consulting-grade" means in concrete CSS terms: grid systems, whitespace philosophy, chart styles, color restraint, typography patterns, table formatting, and page layout templates.
- **Section-by-section gap analysis.** Analyzed all 14 existing HTML sections against investor expectations. For each section: documented the current approach, identified the specific gap, wrote a transformation directive, and assigned a priority (Critical / High / Medium / Low).
- **Structural change recommendations.** Identified pages to add (TOC, Executive Summary, Sensitivity Analysis), pages to remove or compress (Closing page 1, Phase 4 vision), information that needed to move between sections, and a new section ordering that follows analytical arc rather than narrative arc.
- **Anti-patterns catalog.** Identified 10 specific HTML/CSS patterns from the original files that would cause a consulting-trained investor to lose confidence, with exact source file references and replacement directives.
- **Content priority matrix.** Ranked every content area by investor attention weight, from unit economics (20%) down to vision/closing (1%), and mapped those weights to visual real estate allocation.

**Output**: `_INVESTOR_EMPATHY_MAP.md` -- 924 lines. This document became the single source of truth for the builder agent.

### Deloitte Builder Agent (Phase 2)

The Builder Agent consumed the empathy map and executed the physical transformation. Its responsibilities:

- **Read all 14 original HTML files** to understand the existing content, data, and structure.
- **Created 16 new HTML files**: 14 rebuilt sections (deloitte-section-00 through deloitte-section-13) plus 2 new sections (deloitte-section-00b-toc and deloitte-section-00c-executive-summary).
- **Applied the consulting design system** defined in the empathy map uniformly across all pages: Outfit sans-serif for all non-cover text, consulting-grade table styles, action titles on every page, assumption rows in every financial table, source citations, and prominent page numbers.
- **Preserved all locked data.** Every number verified against CLAUDE.md. No substitutions.

### Why 2 Agents, Not More

Three conditions justify multi-agent architectures. Two of them applied here:

1. **Context pollution.** The empathy research (investor psychology, consulting visual language, gap analysis) is a fundamentally different domain from HTML construction (CSS, table markup, print layout). Loading both into one context degrades performance on each. The empathy agent needs to think like an investor; the builder agent needs to think like a front-end developer. These are different reasoning modes.

2. **Sequential dependency.** The empathy output is the builder's input. The builder cannot begin until the empathy map is complete. This is a strict Phase 1 / Phase 2 pipeline.

A third condition -- parallelization -- did not apply. The builder needed to produce a visually consistent document across 27 pages. Splitting the build across multiple agents would have introduced inconsistency in spacing, typography treatment, table formatting, and action title style. **A single builder ensures visual consistency.** This was a deliberate decision: consistency across 16 files matters more than build speed.

We did not need 3+ agents because:
- No subtask could run in parallel (sequential dependency)
- Total context fit within the window (the empathy map at 924 lines plus the original HTML files are well within limits)
- Tight interdependence between sections (the executive summary references data from business model, team, market, and traction sections -- a single agent tracks these cross-references naturally)

---

## 3. KEY DESIGN DECISIONS

### 3.1 What Changed Visually

| Element | Original (Editorial) | Transformed (Consulting) |
|---------|---------------------|-------------------------|
| Card treatment | Glassmorphic: `backdrop-filter: blur(16-24px)`, semi-transparent backgrounds, 16-20px border-radius | Bordered containers: solid background, `1px solid` border, 4px max border-radius |
| Background | Atmospheric radial gradients (amber, sage, terra at 3-8% opacity) overlaid via `body::before` | Flat solid `--cream` (#F5F0E8). No gradients. |
| Headlines | Cormorant Garamond 300/400, 40px, decorative labels ("The Market", "Business Model") | Outfit 600/700, 18-20px, action titles stating conclusions as complete sentences |
| Font system | 3 fonts: Cormorant Garamond (headlines) + Outfit (body) + Space Mono (data) | 2 fonts: Outfit (all text) + Space Mono (data/labels). Serif removed from non-cover pages. |
| Data visualization | Glass-contained KPI cards, colored revenue bars, funnel shapes, life-expectancy bar fills | Consulting-standard tables with left-aligned labels, right-aligned numbers, assumption rows |
| Pull quotes | Cormorant Garamond italic, amber left border, 17px, used for key insights | Removed entirely. Key insights become action titles or single-line callout rows. |
| Dark sections | Inverted dark background blocks for vision statements (e.g., "The Endgame" in closing) | Removed entirely. All pages use the same cream background. |
| Accent colors | 5 colors used decoratively: amber, sage, terra, rose, stone | 3 functional colors: deep (primary), amber (highlight), stone (secondary). Sage and terra appear only in charts where they carry semantic meaning. Rose removed from palette. |

### 3.2 What Changed Structurally

**Pages added:**

| New Section | Position | Purpose |
|-------------|----------|---------|
| Table of Contents (`deloitte-section-00b-toc`) | After cover (page 2) | Navigation tool. Consulting standard. Groups sections into four blocks: The Opportunity, The Business, The Proof, The Terms. Signals document professionalism. |
| Executive Summary (`deloitte-section-00c-executive-summary`) | After TOC (page 3) | The entire investment thesis on one page. 2x4 grid: Problem, Solution, Market, Business Model, Traction, Team, Competitive Edge, Ask. An investor who reads only this page understands the opportunity. This was the single most important structural addition. |

**Content added within existing sections:**

| Addition | Location | Purpose |
|----------|----------|---------|
| Sensitivity Analysis | Business Model section (deloitte-section-07) | Answers "what if your assumptions are wrong?" Stress-tests conversion rate (3% instead of 4.5%), churn rate (12% instead of 8%), and ARPU. Shows break-even remains achievable under downside scenarios. Did not exist in the original book. |
| Tranche Milestones | The Ask section (deloitte-section-12) | EUR 200K at signing / EUR 150K at MVP + 100 users / EUR 150K at EUR 10K MRR. Mentioned in the content blueprint but never built into the original HTML. Milestone-gated funding is a trust signal for consulting-trained investors. |
| Confidence Levels | Traction section (deloitte-section-09) | Every claim tagged as high, medium, or low confidence. Research findings labeled as "unproven" where appropriate. Separates what is known from what is hypothesized. |

**Information reordering:**

- Break-even (145 subscribers, Month 12) moved from page 16 to prominent position in both the Executive Summary (page 3) and Business Model section
- Team capability information surfaced into the Executive Summary rather than appearing for the first time at page 22
- SOM (145 subscribers from 108K Mitte residents) leads market sizing; TAM ($6.3T) footnoted
- Unit economics positioned before product features (economics before UX)

**Content compressed:**

- Closing section reduced from 2 pages to 1. Removed: Phase 4 vision language, Aesop comparison, dark inverted vision block, Reddit pull quote.
- Persona (Mira) compressed from lead content to a supporting callout within the target segment page.

### 3.3 What Changed in Content Approach

**Action titles replace label headlines.** Every page in the original book used a label headline: "The Market", "Business Model", "The Moat". These tell the reader what the page is ABOUT but not what the page CONCLUDES. In consulting documents, titles are conclusions. The reader should know the page's key finding before reading the body. Examples of the shift:

| Original Title | Transformed Title |
|----------------|-------------------|
| "The Market" | Action title stating Germany's prevention spending gap and consumer behavior |
| "Business Model" | Action title stating break-even at Month 12 with 145 subscribers |
| "The Moat" | Action title stating no moat exists at pre-seed, with a thesis for building one |

**Assumptions made visible.** Every financial table includes gray italic assumption rows. When the conversion rate is 4.5%, the assumption row explains: modeled target, RevenueCat 2025 health/fitness median is 2-3%, adjusted upward for community-driven acquisition. The investor can see the reasoning and decide whether they agree.

**Source citations on every page.** Any page containing external data includes a source line at the bottom. This is consulting standard. The original book had source citations but they were inconsistent and occasionally missing.

**Graveyard rules as footnotes.** The "$1.4B in failures" analysis was the original book's strongest content. In the editorial version, lessons appeared in decorative glassmorphic sidebars. In the consulting version, they appear as one-line footnotes: compact, scannable, and positioned as evidence rather than narrative.

**Persona subordinated.** Mira (the target user persona) was the lead content in Section 02. In the consulting version, the quantified target segment leads (108K residents, age 30-44, spending EUR 126-295/mo), and Mira appears as a compressed qualitative illustration. Personas are a product design tool; investors want segment sizing.

**Market sizing inverted.** The original led with TAM ($6.3T global wellness market). The consulting version leads with SOM: 145 paying subscribers from a population of 108K health-conscious residents in Berlin Mitte. TAM becomes a contextual footnote. Bottom-up math is visible.

**Research separated from traction.** Section 09 was fundamentally restructured. The original presented third-party statistics (Reddit subscriber counts, competitive spending estimates) in KPI cards formatted identically to first-party metrics. The consulting version clearly labels what is validated research versus what requires funding to validate. Internal work products ("brand identity locked", "financial model complete") are removed from the "Validated" column.

### 3.4 What We Kept

Not everything changed. The following elements were already consulting-compatible or too important to the business thesis to alter:

- **alche brand colors (cream, deep brown, amber).** These are warm, professional, and restrained. They map naturally to a consulting palette: cream as background, deep brown as primary text, amber as highlight. No modification needed.
- **All locked data numbers.** Every statistic verified against CLAUDE.md. The transformation changes presentation, never data. $6.3T, 3.3% CAGR, 4.8% prevention spending, 12-18 month window, EUR 500K at EUR 2.5M cap, 145 subscribers at Month 12 -- all preserved exactly.
- **The KDGB framework (Know-Do-Get-Belong).** Reframed from a brand concept to a business process: each layer mapped to a user action, a revenue lever, and a key metric. The intellectual structure survived; the decorative presentation did not.
- **The competitive 2x2 positioning map.** Already a consulting-native visualization. Simplified visually (removed glass background, used simple bordered quadrants) but retained the analytical structure.
- **The graveyard analysis ("What $1.4B Taught Us").** Rated as the strongest section by investor critique. Content preserved in full. Presentation shifted from decorative sidebars to footnotes and callout rows.
- **Break-even at 145 subscribers.** This is the book's hero statistic. It was already in the original -- just buried on page 16. The transformation moved it to prominence: Executive Summary, Business Model lead, and action titles.
- **Honest CTO gap framing.** The original book's candid acknowledgment that the CTO role is unfilled -- and the specific plan to fill it (first funded hire, dev agency contracted for MVP sprint) -- is exactly what consulting-trained investors reward. Kept intact.

---

## 4. THE EMPATHY MAP -- HOW IT DROVE DECISIONS

### Investor Persona Key Insight

The empathy map's central finding: the target investor evaluates pre-seed opportunities through a consulting lens that is fundamentally incompatible with editorial presentation.

This investor has deployed EUR 2M+ across 15+ health-tech deals. They have watched Forward Health burn $657M and die. They have invested in at least two "lifestyle brands" that ran out of capital before finding product-market fit. They are sympathetic to the longevity space but deeply skeptical of anything that looks like a brand exercise disguised as a business.

Their professional formation at management consulting firms taught them the Pyramid Principle: conclusion first, supporting evidence second, details available on request. When they open a document, they expect structured frameworks, waterfall analyses, sensitivity tables, and assumption-driven financial models. A document that leads with "The Art of Curated Longevity" in 120px serif font activates the wrong mental model immediately.

The first 30 seconds are decisive. In the empathy map's language: "No executive summary" is the first red flag scanned. Its absence signals amateur document construction. The cover's brand-forward messaging is the second. Glassmorphic cards everywhere is the third. By the time the investor reaches the strong financial content on page 16, confidence has already eroded.

### The 6-Filter Mental Model

The empathy map identified six sequential filters the investor applies. Each filter informed a specific design decision:

| Filter | Question the Investor Asks | Time | Current Book Status | Transformation Response |
|--------|---------------------------|------|--------------------|-----------------------|
| 1 | Is this a business or a brand exercise? | 5 seconds | FAILS -- no executive summary, brand-forward cover | Added Executive Summary (page 3). Redesigned cover to signal investment memorandum. |
| 2 | Do they know their numbers? | 30 seconds | PASSES but data is buried on pages 14-16 | Moved unit economics and break-even forward. Added assumption transparency to every table. |
| 3 | Is the problem real and the market underserved? | 2 minutes | PASSES strongly (Sections 01, 03, 04) | Minimal changes. Stripped glassmorphic presentation but preserved strong analytical content. |
| 4 | Can this team execute? | 5 minutes | PARTIALLY PASSES -- good bios but weak traction, CTO gap | Rebuilt Team section with capability matrix. Technical credentials (MSc Data Science, BSc CompEng) lead. CTO gap addressed in one clean statement. |
| 5 | Do the economics survive stress-testing? | 10 minutes | PARTIALLY PASSES -- break-even is strong, no sensitivity table | Added Sensitivity Analysis: base case vs. downside vs. upside across conversion rate, churn rate, and ARPU. |
| 6 | What is the path to my return? | Post-read | BARELY ADDRESSED -- Ask page is clean but thin | Added tranche milestones (EUR 200K / EUR 150K / EUR 150K). Added next-round economics framing. |

### Content Priority Matrix

The empathy map ranked every content area by investor attention weight. These weights determined visual real estate allocation in the transformed book -- how much page space, how prominent the typography, how early in the document:

| Rank | Content Area | Investor Attention Weight | Real Estate Directive |
|------|-------------|--------------------------|----------------------|
| 1 | Unit economics + path to profitability | 20% | HERO treatment. Break-even (145 subs, M12) gets the largest type on any page. Sensitivity analysis table included. All assumptions labeled and visible. |
| 2 | Team capability and gap honesty | 20% | Full-page capability matrix. Technical credentials lead each row. CTO gap in one clean statement. Governance framework visible. |
| 3 | Business model mechanics | 15% | Pricing table, conversion funnel as data table, revenue composition. Every assumption labeled. Conservative scenario prominent. |
| 4 | Market sizing (bottom-up) | 10% | SOM leads (145 subscribers from 108K Mitte residents). TAM footnoted. Bottom-up waterfall math visible. |
| 5 | Problem / Insight | 8% | One page maximum. Action title + data table of fragmented spend + churn statistics. No editorial prose beyond three lines. |
| 6 | Competitive positioning | 7% | 2x2 matrix retained. Comparison table added. Graveyard lessons as footnotes. |
| 7 | Solution / Product | 6% | KDGB as business framework with revenue levers. Tier comparison table. No brand narrative. |
| 8 | GTM strategy | 5% | Content-first flywheel as process diagram. Milestone table with measurable KPIs at M3/M6/M12. |
| 9 | Deal terms | 4% | Clean, scannable. Wandeldarlehen at EUR 2.5M cap. Tranche milestones. One page. |
| 10 | Traction / Validation evidence | 3% | Honest assessment. Interview findings in structured table. Hypothesis invalidation as evidence. No third-party statistics presented as traction. |
| 11 | Moat thesis | 1% | Half a page. Three-row table. Honest framing: "No moat exists at pre-seed." |
| 12 | Vision / Closing | 1% | Compressed to half a page. Contact information. Call to action. No aspirational brand copy. |

---

## 5. ANTI-PATTERNS REMOVED

The empathy map identified 10 specific HTML/CSS patterns from the original files that would erode investor confidence. Each was removed or replaced:

### 1. Atmospheric Radial Gradients
`body::before` with three overlapping `radial-gradient()` calls at 3-8% opacity. Replaced with solid `background: var(--cream)`. Consulting documents have solid backgrounds. Atmospheric gradients signal lifestyle brand and cause print inconsistencies.

### 2. Glassmorphic Backdrop Blur
`backdrop-filter: blur(16-24px)` with semi-transparent backgrounds across `.glass`, `.glass-elevated`, `.glass-accent`, `.sidebar`, and `.persona-card`. Replaced with simple bordered containers: solid background, `1px solid` border, `border-radius: 4px` maximum. Glassmorphism is an Apple consumer interface language, not a financial document pattern.

### 3. Decorative Serif Headlines
Cormorant Garamond 300/400 at 40px used as decorative label headlines ("The Market", "Business Model"). Replaced with Outfit 600/700 at 18-20px action titles stating page conclusions as complete sentences. Serif typography on data pages communicates "editorial publication" rather than "investment analysis."

### 4. Five-Card KPI Strips in Glass Containers
Centered number + label inside glassmorphic cards, repeated five times in a horizontal row (Business Model page). Replaced with horizontal table rows: left-aligned labels, right-aligned values, no glass backgrounds. The dashboard UI pattern does not belong in a document format.

### 5. Pull Quotes with Amber Borders
Cormorant Garamond italic at 17px with amber left border, used to highlight key insights (e.g., the Arivale lesson). Replaced with consulting-style single-line callout rows: bordered top and bottom, no italic, no serif font. Pull quotes are a magazine editorial device.

### 6. Dark Inverted Vision Blocks
Dark background sections with 44px serif "The Endgame" heading and Aesop comparison. Removed entirely. Vision statements at this scale communicate brand ambition, not business substance. The closing section compresses to a three-phase growth table, contact information, and a call to action.

### 7. Decorative Revenue Bars
Four-color stacked bars inside glass containers with 8px labels inside the colored segments. Replaced with simple tables: Revenue Stream | % of Y1 Revenue | Gross Margin. If visual representation is needed, labels appear outside bars, not inside.

### 8. Narrative Prose in Data Sections
Paragraph-format text containing five critical data points (24-month runway, EUR 500K, EUR 7,600/mo burn, 145 subscribers, EUR 10K/mo space) that force the investor to read a paragraph to find numbers. Replaced with data tables: one row per metric, immediately scannable.

### 9. Unanchored Conversion Rates
"4.5% convert to paid (modeled target)" without source attribution or assumption basis. Replaced with assumption rows: "4.5% modeled target (RevenueCat 2025 health/fitness median: 2-3%, adjusted upward for community-driven acquisition)." Without attribution, the investor assumes the number was chosen to make the model work.

### 10. Aspirational Company Comparisons
References to CrossFit, Peloton, Soho House, and Aesop as positioning anchors. Removed from all sections. Comparing a pre-product company to billion-dollar brands with decades of history is the fastest way to lose consulting-investor credibility. The graveyard analysis (companies that failed) is the appropriate comparison frame at pre-seed.

---

## 6. FILES PRODUCED

### Phase 1: Empathy Research

| File | Lines | Purpose |
|------|-------|---------|
| `_INVESTOR_EMPATHY_MAP.md` | 924 | Transformation source of truth. Investor persona, gap analysis for all 14 sections, Deloitte style definition, content priority matrix, anti-patterns catalog, structural change recommendations, and builder agent checklist. |

### Phase 2: Consulting-Grade HTML Sections

| File | Section | Pages | Status |
|------|---------|-------|--------|
| `deloitte-section-00-cover.html` | Cover | 1 | Rebuilt. Professional investment memorandum format. |
| `deloitte-section-00b-toc.html` | Table of Contents | 1 | **NEW.** Did not exist in original. |
| `deloitte-section-00c-executive-summary.html` | Executive Summary | 1 | **NEW.** Did not exist in original. Single most important addition. |
| `deloitte-section-01-insight.html` | The Insight | 1-2 | Rebuilt. Action title, data tables, no editorial prose. |
| `deloitte-section-02-who-we-serve.html` | Target Segment | 1 | Rebuilt. Quantified segment leads, persona compressed to callout. |
| `deloitte-section-03-market.html` | The Market | 1-2 | Rebuilt. SOM leads, TAM footnoted, glass cards replaced with tables. |
| `deloitte-section-04-competitive.html` | Competitive Landscape | 1-2 | Rebuilt. 2x2 retained, comparison table added, graveyard as footnotes. |
| `deloitte-section-05-solution.html` | The Solution (KDGB) | 1 | Rebuilt. Business framework with revenue levers, not brand framework. |
| `deloitte-section-06-product.html` | Product | 1 | Rebuilt. Tier comparison table leads, no UX narrative. |
| `deloitte-section-07-business-model.html` | Business Model | 2-3 | Rebuilt. Break-even leads. Sensitivity analysis added. All assumptions visible. |
| `deloitte-section-08-go-to-market.html` | Go-to-Market | 1-2 | Rebuilt. Process flow diagram, milestone table with M3/M6/M12 KPIs. |
| `deloitte-section-09-traction.html` | Traction & Validation | 1-2 | Rebuilt. Fundamentally restructured. Research separated from traction. Confidence levels added. |
| `deloitte-section-10-moat.html` | The Moat | 1 | Rebuilt. Three-row table, honest framing retained. |
| `deloitte-section-11-team.html` | Team | 1-2 | Rebuilt. Capability matrix leads. Technical credentials prominent. CTO gap in one statement. |
| `deloitte-section-12-ask.html` | The Ask | 1 | Rebuilt. Tranche milestones added. Glass cards replaced with bordered containers. |
| `deloitte-section-13-closing.html` | Closing | 1 | Rebuilt. Compressed from 2 pages. Vision block removed. Three-phase table + contact info + CTA. |

### Original Files (Untouched)

All original editorial HTML files remain in the project root:
- `section-00-cover.html` through `section-13-closing.html`
- These serve as data reference and editorial version preservation

### Process Documentation

| File | Purpose |
|------|---------|
| `_TRANSFORMATION_LOGIC.md` | This document. Internal process documentation explaining methodology, decisions, and rationale. |
| `_INVESTOR_EMPATHY_MAP.md` | Phase 1 output. The transformation specification consumed by the builder agent. |

---

## 7. HOW TO USE

### Previewing the Consulting Version
Open any individual `deloitte-section-*.html` file in Chrome to preview that section. Each file is self-contained with inline styles and fonts. To view all sections in sequence, use the `build-combined.mjs` script to generate a combined HTML file, or open each section file individually in order.

### Generating PDF
Use the Playwright-based pipeline defined in the project:

```bash
npx playwright install chromium
node convert-to-pdf.js
```

Key requirements for PDF generation:
- Print each HTML at exactly A4 (210mm x 297mm)
- Print background graphics enabled (the cream background must render)
- Wait for Google Fonts (Outfit, Space Mono) to load before rendering
- Combine all section PDFs into one final file using pdf-lib
- Target file size: under 15MB for email delivery

### Relationship Between Files
- **Original files** (`section-00` through `section-13`): The editorial version. Untouched. Preserved for reference and as the source of all locked data.
- **Deloitte files** (`deloitte-section-00` through `deloitte-section-13`, plus `00b` and `00c`): The consulting-grade transformation. These are the investor-ready deliverables.
- **`_INVESTOR_EMPATHY_MAP.md`**: The transformation's source of truth. Every design decision in the Deloitte files traces back to a specific directive in this document. If there is a question about why something was done, the empathy map has the answer.
- **`_TRANSFORMATION_LOGIC.md`** (this file): Process documentation explaining the methodology. Does not contain transformation directives -- those live in the empathy map.

### If You Need to Modify
- Content changes: Edit the relevant `deloitte-section-*.html` file directly. Verify all locked data numbers against CLAUDE.md after any edit.
- Design changes: The consulting design system is defined in Section E of `_INVESTOR_EMPATHY_MAP.md`. All CSS is inline within each HTML file. Changes should be applied consistently across all 16 files.
- Data changes: Do not change locked data. If new data becomes available, update CLAUDE.md first, then propagate to all affected sections.

---

*Prepared as internal process documentation for the alche founding team. This document describes the transformation methodology and is not intended for investor distribution.*
