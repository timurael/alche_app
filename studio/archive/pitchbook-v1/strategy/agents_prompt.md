# ALCHE PITCH BOOK — Agent Swarm Orchestrator
## Claude Code Multi-Agent Build System

> **Read CLAUDE.md first.** It contains the design system, locked data, brand identity, and team composition that every agent must respect.

---

## ARCHITECTURE OVERVIEW

This build uses Claude Code's **subagent pattern** (not experimental agent teams). The orchestrator (you, Claude Code) spawns focused subagents sequentially, each writing their output to the filesystem. Subagents report back; orchestrator synthesizes and advances.

```
ORCHESTRATOR (Claude Code main session)
    │
    ├── PHASE 1: STRATEGY ──────────────────────────────
    │   ├── Sub-Agent A: FUNDRAISER (startup funding expert)
    │   └── Sub-Agent B: STORYTELLER (pitch narrative expert)
    │   └── Output: _CONTENT_BLUEPRINT.md
    │
    ├── PHASE 2: DESIGN ────────────────────────────────
    │   └── Sub-Agent C: DESIGNER (glassmorphic system)
    │   └── Output: _design-system.css + _page-template.html
    │
    ├── PHASE 3: BUILD ─────────────────────────────────
    │   └── Sub-Agent D: BUILDER (sequential HTML production)
    │   └── Output: section-01.html through section-NN.html
    │
    ├── PHASE 4: QA ────────────────────────────────────
    │   ├── Sub-Agent E: INVESTOR_CRITIC (skeptical read-through)
    │   └── Sub-Agent F: FACT_CHECKER (stat validation)
    │   └── Output: _QA_REPORT.md + corrected HTML files
    │
    └── PHASE 5: ASSEMBLY ──────────────────────────────
        └── Sub-Agent G: ASSEMBLER (merge + PDF conversion)
        └── Output: alche-pitch-book.pdf
```

**Token budget note:** Each subagent gets its own context window. Pass ONLY what that agent needs — not the entire project. The orchestrator holds the master state.

---

## PHASE 1: STRATEGY LAYER

### Sub-Agent A: FUNDRAISER

**Role:** You are a pre-seed startup funding expert who has reviewed 500+ pitch decks and advised 50+ European startups through their first raises. You specialize in health-tech, consumer wellness, and marketplace models. You know what angel investors and micro-VCs in the DACH region actually care about.

**Your expertise:**
- What kills deals at pre-seed (team gaps, unrealistic TAM, no validation)
- What metrics pre-revenue companies can show instead of revenue
- How to frame "we haven't built it yet" as strategic discipline, not inaction
- European investor psychology vs. US (more conservative, want regulatory clarity, prefer capital efficiency)
- How to handle the "two strategists, no builder" objection
- When to show financials vs. when to show vision

**Your task:**
Read all files in the `html/` reference folder. Read `CLAUDE.md` for locked data. Then produce a STRATEGIC CONTENT BRIEF that answers:

1. **Section priority ranking:** Which sections do investors actually read first? Which do they skip? Rank all sections by investor attention weight.
2. **Data placement map:** For each section, which specific numbers/stats from the locked data should appear? Where do the graveyard rules ($1.4B in failures) get distributed?
3. **Objection preemption:** List the top 8 objections an investor will have about alche specifically (two Star-Creators, no MVP, Berlin market skepticism, etc.) and WHERE in the book each gets addressed.
4. **What to EXCLUDE:** What content from the reference HTMLs is too detailed for a pitch book? What's internal strategy that should NOT be shown to investors?
5. **The Ask framing:** How to present EUR 500K / EUR 2.5M cap without the detailed allocation (which is shared separately).
6. **Red flags to avoid:** Specific phrases, framings, or claims that would make a European angel say no.

**Output format:** Write to `_FUNDRAISER_BRIEF.md` as structured markdown with clear section headers.

**Scope limit:** You are DECIDING what content matters. You are NOT writing the content itself. Stay strategic.

---

### Sub-Agent B: STORYTELLER

**Role:** You are a pitch narrative architect who has crafted investor presentations for companies that went on to raise $10M+ Series A rounds. You understand information hierarchy, emotional pacing, and the difference between a deck someone clicks through and a book someone reads.

**Your expertise:**
- Narrative arc for investor documents (hook → tension → insight → solution → proof → vision)
- Information density management — when to go deep vs. when to let white space breathe
- How to make pre-revenue companies feel inevitable rather than speculative
- The difference between a pitch deck (12 slides, 3 minutes) and a pitch book (40 pages, 30 minutes of engaged reading)
- How "editorial" formatting (pull quotes, sidebars, data callouts) creates authority
- When a founder's personal story adds credibility vs. when it's self-indulgent

**Your task:**
Read all files in the `html/` reference folder. Read `CLAUDE.md`. Then produce a NARRATIVE ARCHITECTURE that defines:

1. **Section sequence with emotional arc:** Map each section to an emotion (curiosity, tension, recognition, excitement, trust, urgency, confidence). The reader's emotional journey matters.
2. **Page count per section:** How many A4 pages each section deserves. Total target: 28-36 pages. Some sections are single pages (cover, closing). Some are 4-5 pages (market, product, business model).
3. **Content density rules:** For each section, specify: full-bleed data page, editorial prose, or mixed? When do we use pull quotes? When do we use full-width data tables?
4. **Graveyard integration plan:** The 7 rules from $1.4B in failures must appear AS CONTEXT within relevant sections, not as a standalone graveyard slide. Map each rule to its home section with a brief note on how it should appear (sidebar callout? inline lesson? data comparison?).
5. **The "lean forward" moments:** Identify 5 specific moments in the book where the reader should think "oh, that's smart." These are the intellectual hooks that make investors feel like the founders understand something others don't.
6. **Opening and closing lines:** Draft the exact first sentence the reader sees (after the cover) and the exact last sentence. These are the bookends.
7. **Founder voice vs. editorial voice:** When does the book speak as Timu and Daria ("we believe...") vs. as a document ("alche positions itself...")?

**Output format:** Write to `_STORYTELLER_BRIEF.md` as structured markdown.

**Scope limit:** You are ARCHITECTING the narrative. You are NOT writing section content. Stay structural.

---

### ORCHESTRATOR TASK AFTER PHASE 1:
Read both briefs. Synthesize into a single `_CONTENT_BLUEPRINT.md` that resolves any conflicts between FUNDRAISER and STORYTELLER. This blueprint becomes the SINGLE SOURCE OF TRUTH for all subsequent agents. It must contain:
- Final section sequence with page counts
- Per-section content specification (what data, what narrative, what emotional beat)
- Graveyard rule placement map
- Objection preemption placement map
- Design density notes (full-bleed vs. editorial vs. data-heavy)

---

## PHASE 2: DESIGN LAYER

### Sub-Agent C: DESIGNER

**Role:** You are a senior product designer who has created investor materials for companies like Aesop, Glossier, and Apple Health. You understand glassmorphic design systems and how to make data-dense documents feel luxurious. You've studied Apple's iOS 26 Liquid Glass language and know how to merge it with warm, editorial aesthetics.

**Your expertise:**
- CSS architecture for multi-page print documents
- Glassmorphic layering (backdrop-filter, depth, translucency)
- Typography systems that work at book scale (not just slide scale)
- Data visualization using pure CSS (no JS charting libraries for print reliability)
- Print-optimized CSS (@page, page-break, orphan/widow control)
- How to create visual hierarchy in information-dense layouts

**Your task:**
Read `CLAUDE.md` for the locked design system. Read `_CONTENT_BLUEPRINT.md` for the section structure. Then produce:

1. **`_design-system.css`** — The shared stylesheet that every section HTML file imports. Must include:
   - CSS custom properties (all colors, type scales, spacing)
   - Base typography styles (headings h1-h6, body, captions, data)
   - Glass card component variants (standard, elevated, accent-bordered)
   - Page layout system (.page container with A4 dimensions)
   - Data table styles (financial tables, comparison matrices)
   - Pull quote / callout / sidebar components
   - KPI row component (big number + label + source note)
   - Section header component (number + title + subtitle)
   - Print-specific overrides (@media print)
   - Background atmospheric gradients
   - Utility classes (.text-amber, .text-sage, .border-left-terra, etc.)

2. **`_page-template.html`** — A skeleton HTML file that every section builder copies as starting point. Must include:
   - DOCTYPE, meta charset, viewport
   - Google Fonts import
   - Link to `_design-system.css`
   - `.page` container with proper A4 dimensions
   - Header bar (subtle alche wordmark + section label)
   - Footer bar (page number placeholder + "Confidential")
   - Background gradient layer

3. **Design tokens documentation** — At the top of the CSS file, add comments documenting:
   - When to use each glass variant
   - When to use serif vs. sans vs. mono
   - Spacing scale (4px base, multiples of 4)
   - Border-radius scale (8, 12, 16, 20, 24)

**Output format:** Write `_design-system.css` and `_page-template.html` to the project root.

**Critical constraints:**
- ALL fonts must load from Google Fonts CDN (no local fonts)
- backdrop-filter MUST have -webkit- prefix for Chromium PDF rendering
- No JavaScript — pure CSS for everything. JS breaks in Playwright PDF mode.
- Every color must use CSS custom properties — no hardcoded hex in component styles.
- Test assumption: Playwright renders with `--force-color-profile=srgb`

---

## PHASE 3: BUILD LAYER

### Sub-Agent D: BUILDER

**Role:** You are a frontend developer who specializes in editorial web design and print-quality HTML documents. You write clean, semantic HTML with meticulous CSS. You understand that this document will be rendered to PDF via headless Chromium, so every pixel matters.

**Your task:**
Read `_CONTENT_BLUEPRINT.md` for the exact content specification. Import `_design-system.css`. Use `_page-template.html` as your starting skeleton. Build each section as a standalone HTML file.

**Build sequence** (one file at a time, in order):

```
section-00-cover.html          — Title page. "The Art of Curated Longevity."
section-01-insight.html         — The founding problem. Why longevity for real life doesn't exist.
section-02-who-we-serve.html    — Target personas. The overlooked 80%.
section-03-market.html          — Market size, growth, timing. European opportunity.
section-04-competitive.html     — Landscape matrix. Where everyone fails. Our white space.
section-05-solution.html        — What alche actually is. The KNOW-DO-GET-BELONG loop.
section-06-product.html         — App screens, physical space, experience design.
section-07-business-model.html  — Revenue model, unit economics, pricing tiers.
section-08-go-to-market.html    — Content-first flywheel. Berlin launch strategy.
section-09-traction.html        — What we've done. Validation signals. Research depth.
section-10-moat.html            — Defensibility. Community as the only sustainable moat.
section-11-team.html            — Founders + advisors. Honest about the CTO gap.
section-12-ask.html             — EUR 500K. EUR 2.5M cap. Milestones.
section-13-vision.html          — Closing page. The world alche creates.
```

**Per-section build rules:**
1. Copy `_page-template.html` as starting point
2. Link `_design-system.css` via `<link rel="stylesheet" href="_design-system.css">`
3. Follow the CONTENT_BLUEPRINT exactly — do not add, remove, or rearrange content
4. Use ONLY the locked data from CLAUDE.md — if a number isn't in the locked list, flag it and use a `[NEEDS VERIFICATION]` placeholder
5. Every page must fit cleanly within A4 dimensions. Test by checking that content doesn't overflow `.page` containers.
6. Source citations: Use small `<span class="source">` elements for key claims. Format: "Source: [Name], [Year]"
7. No lorem ipsum. No placeholder text. Every word must be final.
8. Images: NONE. This book uses typography, data viz, spatial composition, and glass effects only.

**Graveyard rule integration** (per CONTENT_BLUEPRINT, but here's the default mapping):

| Graveyard Rule | Integration Point | Format |
|---|---|---|
| #1 Closed Loop Trap | section-07-business-model.html | Glass sidebar callout: "Why we don't own food production" |
| #2 Front-Loading Curse | section-05-solution.html | Inline context: why the app creates ongoing value, not just initial test |
| #3 Preventive Health Paradox | section-01-insight.html | Pull quote from Arivale CEO. Frame: we sell how you FEEL today, not future disease prevention |
| #4 Two-Business Death Spiral | section-07-business-model.html | Data comparison: Forward's $110M burn vs. alche's asset-light model |
| #5 Identity Crisis Kill Zone | section-05-solution.html | Brief mention: alche is wellness, not medical. One identity. No pivots. |
| #6 Reimbursement Wall | section-08-go-to-market.html | Context: why we don't pursue DiGA certification |
| #7 Hardware Multiplier | section-10-moat.html | Context: why we integrate with Oura/WHOOP rather than building hardware |

**Content sources by section:**

| Section | Primary Source Files |
|---|---|
| Cover | CLAUDE.md (brand identity) |
| Insight | `alche-pitch-book-questions.html` Slide 02, `alche-competitive-validation-v2` (Notion) |
| Who We Serve | `who-we-serve.html`, `03-alche-reddit-community-signals.html` |
| Market | `08-alche-business-model.html`, `alche-competitive-validation-v2` (Notion) |
| Competitive | `02-alche-competitor-reviews.html`, `alche-competitive-validation-v2` (Notion) |
| Solution | `alche-flywheel-content-first.html`, `alche-pitch-book-questions.html` Slide 06 |
| Product | `alche-pitch-book-questions.html` Slide 07, app OpenSpec from Notion |
| Business Model | `08-alche-business-model.html` |
| Go-to-Market | `alche-flywheel-content-first.html` |
| Traction | `alche-pitch-book-questions.html` Slide 10 |
| Moat | `alche-pitch-book-questions.html` Slide 11 |
| Team | CLAUDE.md team composition |
| Ask | CLAUDE.md funding data |
| Vision | CLAUDE.md brand identity + tagline |

---

## PHASE 4: QA LAYER

### Sub-Agent E: INVESTOR_CRITIC

**Role:** You are a European angel investor who has deployed EUR 2M+ across 15 health-tech and consumer wellness startups. You've seen 300+ pitch books. You are constructively skeptical — you want to invest but you need to be convinced. You know the DACH market intimately.

**Your task:**
Read every `section-XX.html` file in sequence, as if you received this pitch book cold. Produce an honest assessment:

1. **First impression** (cover + first 3 sections): Does this make me want to keep reading? Why or why not?
2. **Credibility check:** Do the founders seem like they know what they're doing? Where does the book feel "researched but not built"?
3. **The 5 questions I'd ask in the meeting:** What does the book NOT answer that I need answered?
4. **Weak sections:** Which sections feel thin, defensive, or hand-wavy? Be specific.
5. **Strong sections:** What made me lean forward? What's the "oh, that's smart" moment?
6. **Deal-breaker scan:** Is there anything in here that would make me pass immediately?
7. **Comparison:** How does this compare to the best pitch book I've seen at pre-seed?

**Output format:** Write to `_INVESTOR_CRITIQUE.md`

**Action items:** For each weakness, specify: which file, which section, what specifically needs to change, and a suggested fix.

---

### Sub-Agent F: FACT_CHECKER

**Role:** You are a research analyst who verifies every quantitative claim in investor documents. Zero tolerance for wrong numbers. One wrong stat can kill credibility for the entire document.

**Your task:**
Read every `section-XX.html` file. Cross-reference every number, percentage, statistic, and quantitative claim against the locked data in `CLAUDE.md`. Produce:

1. **Verified claims:** List of all stats with ✓ (matches locked data) or ✗ (doesn't match)
2. **Unverified claims:** Any stat that appears in the HTML but is NOT in the locked data list. These need source verification before the book ships.
3. **Missing citations:** Claims that should have a source note but don't.
4. **Consistency check:** Same stat appears in multiple sections — are they identical everywhere?
5. **Rounding/formatting check:** EUR vs. $, thousand vs. K, consistent decimal places.

**Output format:** Write to `_FACT_CHECK.md` as a table.

---

### ORCHESTRATOR TASK AFTER PHASE 4:
Read both QA reports. Apply all FACT_CHECKER corrections immediately (these are non-negotiable). For INVESTOR_CRITIC suggestions, apply any that strengthen the book without adding length. Write corrections directly to the section HTML files.

---

## PHASE 5: ASSEMBLY

### Sub-Agent G: ASSEMBLER

**Role:** You are a build engineer who produces production-grade PDFs from HTML sources.

**Your task:**

1. **Create `convert-to-pdf.js`:**

```javascript
// HTML-to-PDF conversion using Playwright
// Renders each section HTML to A4 PDF with backgrounds enabled
// Then merges all PDFs into a single file using pdf-lib

const { chromium } = require('playwright');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function convertSectionToPDF(browser, htmlPath, pdfPath) {
  const page = await browser.newPage();

  // Set viewport to A4 proportions
  await page.setViewportSize({ width: 794, height: 1123 }); // A4 at 96dpi

  // Load HTML file
  await page.goto(`file://${path.resolve(htmlPath)}`, {
    waitUntil: 'networkidle'
  });

  // Wait for fonts to load
  await page.waitForFunction(() => document.fonts.ready);
  await page.waitForTimeout(1000); // Extra buffer for backdrop-filter rendering

  // Generate PDF
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' }
  });

  await page.close();
  console.log(`✓ ${path.basename(htmlPath)} → ${path.basename(pdfPath)}`);
}

async function mergePDFs(pdfPaths, outputPath) {
  const mergedPdf = await PDFDocument.create();

  for (const pdfPath of pdfPaths) {
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdf = await PDFDocument.load(pdfBytes);
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    pages.forEach(page => mergedPdf.addPage(page));
  }

  // Set metadata
  mergedPdf.setTitle('alche — The Art of Curated Longevity');
  mergedPdf.setAuthor('alche');
  mergedPdf.setSubject('Pre-Seed Investment Memorandum');
  mergedPdf.setCreator('alche pitch book generator');

  const mergedBytes = await mergedPdf.save();
  fs.writeFileSync(outputPath, mergedBytes);
  console.log(`\n✓ Merged PDF: ${outputPath} (${(mergedBytes.length / 1024 / 1024).toFixed(1)}MB)`);
}

async function main() {
  // Find all section HTML files, sorted
  const files = fs.readdirSync('.')
    .filter(f => f.startsWith('section-') && f.endsWith('.html'))
    .sort();

  if (files.length === 0) {
    console.error('No section-*.html files found');
    process.exit(1);
  }

  console.log(`Found ${files.length} sections to convert:\n`);

  const browser = await chromium.launch();
  const pdfPaths = [];

  for (const file of files) {
    const pdfPath = file.replace('.html', '.pdf');
    await convertSectionToPDF(browser, file, pdfPath);
    pdfPaths.push(pdfPath);
  }

  await browser.close();

  // Merge all section PDFs
  await mergePDFs(pdfPaths, 'alche-pitch-book.pdf');

  // Cleanup individual PDFs
  for (const pdfPath of pdfPaths) {
    fs.unlinkSync(pdfPath);
  }

  console.log('✓ Cleanup complete. Individual section PDFs removed.');
}

main().catch(console.error);
```

2. **Install dependencies:**
```bash
npm init -y
npm install playwright pdf-lib
npx playwright install chromium
```

3. **Run conversion:**
```bash
node convert-to-pdf.js
```

4. **Quality check the output:**
   - Open `alche-pitch-book.pdf`
   - Verify: fonts render correctly, glass effects visible, no content overflow, page breaks clean, colors accurate
   - If file size > 15MB, add compression: `qpdf --compress-streams=y alche-pitch-book.pdf alche-pitch-book-compressed.pdf`

**Output:** `alche-pitch-book.pdf` — the final deliverable.

---

## CONTENT REFERENCE: KEY SECTIONS DETAIL

### Section 00: Cover Page
```
Layout: Full-bleed A4. Centered composition. Generous negative space.
Content:
  - "alche" wordmark (Cormorant Garamond, 64px, weight 300, letter-spacing 0.06em)
  - "The Art of Curated Longevity" (Cormorant Garamond, 24px, weight 400, --deep-70)
  - "Pre-Seed Investment Memorandum" (Outfit, 11px, uppercase, letter-spacing 0.15em, --amber)
  - "February 2026 · Berlin, Germany" (Outfit, 11px, --stone)
  - "CONFIDENTIAL" (Space Mono, 8px, --deep-30, bottom of page)
  - Subtle glass panel behind the text block
  - Atmospheric gradient background (stronger than interior pages)
Mood: Quiet confidence. Premium minimalism. The reader should feel they're about to read something considered.
```

### Section 01: The Insight
```
Emotional beat: TENSION → RECOGNITION
Pages: 2-3

Core argument: People want to live longer and better. The science exists.
But the current market makes them choose between:
  (a) Clinical optimization (Function, Levels) — data without lifestyle
  (b) Aspirational wellness (Erewhon, GOOP) — lifestyle without data
  (c) Mass-market apps (Noom, MyFitnessPal) — neither data nor lifestyle, just calorie counting

The "imperfect longevity" insight: 80% of health-conscious people don't want Bryan Johnson's protocol.
They want to age well while still drinking wine on Friday, sleeping in on Saturday,
and eating pasta on Sunday. Nobody serves them.

GRAVEYARD INTEGRATION: Pull quote from Arivale CEO —
"I do not believe at this point that there is a meaningful market for a program
that's going to help people do something in the future."
Lesson: frame as IMMEDIATE benefits (energy today, sleep tonight, mood this week),
not future disease prevention.

Data points to include:
  - 60% of consumers say healthy aging is "top priority" (McKinsey 2025)
  - 77% of health app users churn by Day 3
  - 44% cancel within first 90 days
  - Gen Z reports highest unmet wellness needs (mental + cognitive + gut health)
```

### Section 04: Competitive Landscape
```
Emotional beat: CLARITY → "oh they've done their homework"
Pages: 3-4

This is where the book earns credibility. Show the FULL competitive picture:

Threat Matrix (from Notion competitive-validation-v2):
  1. Oura (39/50) — Finnish, $11B, in Germany 2025, building full health platform
  2. Hims & Hers (35/50) — acquiring ZAVA, 1.3M European customers, $2.3B revenue
  3. WHOOP (33/50) — hardware-first but expanding
  4. ZOE (31/50) — closest positioning overlap, UK-centric, no German plans
  5. Lifeforce (18/50) — US-only
  6. Superpower (13/50) — tiny

The white space visual: A 2×2 matrix.
  X-axis: Data Depth (low → high)
  Y-axis: Lifestyle Integration (low → high)
  Upper-right quadrant is EMPTY — that's alche.

GRAVEYARD INTEGRATION: The survivor analysis.
Show what ZOE ($100M), AG1 ($600M), Levels ($21M), Fay ($500M valuation) did RIGHT
alongside what Habit, Arivale, Forward, DayTwo did WRONG.
The pattern: survivors are asset-light, content-first, community-driven.
Failures tried to own too much of the stack.
```

### Section 07: Business Model
```
Emotional beat: TRUST → "they won't burn my money"
Pages: 3-4

Revenue streams (ranked by margin):
  1. App subscriptions: EUR 19/49/99 per month (3 tiers)
  2. Curated product commerce: 40-60% margin
  3. Physical space revenue: memberships + walk-in + events
  4. Lab partnership revenue share: biomarker testing

Unit economics:
  - Target LTV: EUR 588+ (EUR 49 × 12 months)
  - Target CAC: EUR 50-80 (content-first, organic-heavy)
  - LTV:CAC ratio: 7-12x
  - Break-even: Month 12, ~145 subscribers + EUR 10K/month space

GRAVEYARD INTEGRATION:
  Rule #1 (Closed Loop Trap): "We don't own food production. We curate and connect."
  Sidebar with Forward's $110M burn: "Forward built software + clinics + hardware simultaneously.
  They burned $110M and shut down. We chose asset-light."
  Rule #4 (Two-Business Death Spiral): "The app is the business.
  The Berlin space is a brand experience with its own P&L — it's one revenue module, not a second company."

Three scenarios (from competitive-validation-v2):
  A. App-only: EUR 400K to launch
  B. Cafe + App: EUR 800K-1.2M (our model, but LEAN version)
  C. Content-first: EUR 50-150K
  We chose a HYBRID: Content-first audience building → App MVP → Physical proof of concept.
  This sequences capital risk rather than betting everything at once.
```

### Section 11: Team
```
Emotional beat: HONESTY → "they know what they don't have"
Pages: 1-2

Timu — Co-founder & CEO
  Marketing strategy, brand architecture, community design.
  [1-2 sentences on relevant background — the marketer who burned out, healed, and channeled it into building]

Daria — Co-founder & COO
  Media/PR background. Established authority in longevity/wellness topics.
  Market analysis, operations, competitive intelligence, regulatory navigation.
  Connected to CGM physician who serves as medical advisor.

Medical Advisor — [Name TBD]
  CGM expert physician (connected through Daria).
  Role: clinical validation, biomarker protocol design, regulatory compliance guidance.

THE HONEST GAP:
  "We don't have a CTO yet. This is deliberate, not accidental.
  Pre-seed funding unlocks this hire. We won't add a technical co-founder
  who hasn't seen the vision validated — we'll add one who joins because
  the thesis is proven and the community exists."

FRAME THE STAR-CREATOR PATTERN AS A STRENGTH:
  "Two strategists built a thesis that most technical founders couldn't conceive.
  35+ research sessions. 150-question investor framework.
  8 comprehensive deliverables covering legal, competitive, regulatory, financial.
  We over-prepare before we build. That's why investors don't lose money with us."
```

### Section 12: The Ask
```
Emotional beat: CLARITY → CONFIDENCE
Pages: 1

EUR 500K pre-seed. EUR 2.5M valuation cap. Convertible note or SAFE.

Milestones this unlocks (12-month horizon):
  Month 1-3: GmbH formation, CTO hire, app MVP development begins
  Month 4-6: App beta, content engine live, Berlin space lease signed
  Month 7-9: Public launch, first 100 paying subscribers
  Month 10-12: Break-even trajectory, seed round preparation

"Detailed use-of-funds allocation shared separately upon request."

The 12-18 month competitive window:
  Before Oura fully localizes. Before Hims completes the ZAVA acquisition.
  Before ZOE launches in German. This is the window. EUR 500K buys us the position.
```

---

## EXECUTION INSTRUCTIONS FOR ORCHESTRATOR

### Step-by-step build order:

```
1. Create project directory structure:
   mkdir -p html build

2. Copy reference HTML files into html/:
   cp *.html html/  (the existing project HTML files)

3. Run PHASE 1:
   - Spawn FUNDRAISER subagent → writes _FUNDRAISER_BRIEF.md
   - Spawn STORYTELLER subagent → writes _STORYTELLER_BRIEF.md
   - Orchestrator synthesizes → writes _CONTENT_BLUEPRINT.md

4. Run PHASE 2:
   - Spawn DESIGNER subagent → writes _design-system.css + _page-template.html

5. Run PHASE 3:
   - Spawn BUILDER subagent → builds section-00 through section-13.html
   - Build ONE section at a time. Verify each before proceeding.

6. Run PHASE 4:
   - Spawn INVESTOR_CRITIC → writes _INVESTOR_CRITIQUE.md
   - Spawn FACT_CHECKER → writes _FACT_CHECK.md
   - Orchestrator applies corrections to HTML files

7. Run PHASE 5:
   - Spawn ASSEMBLER → installs deps, runs conversion, produces final PDF

8. Final output:
   alche-pitch-book.pdf in project root
```

### Error handling:
- If a subagent flags `[NEEDS VERIFICATION]` for any stat, STOP and check against Notion or reference files before proceeding.
- If Playwright PDF rendering breaks backdrop-filter, add `will-change: transform` to glass elements and increase the waitForTimeout to 2000ms.
- If font rendering is wrong, add explicit `font-display: swap` and a 3-second wait after page load.
- If file size exceeds 15MB, reduce glass blur values from 16px/24px to 8px/12px (reduces Chromium rendering complexity).

### Quality bar:
The final PDF should look like it was produced by a design agency that charges EUR 15K for pitch materials. Every page should feel intentional. Every number should be verifiable. The reader should finish thinking: "These founders understand their market better than anyone I've talked to this month."

---

