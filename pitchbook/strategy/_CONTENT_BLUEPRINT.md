# CONTENT BLUEPRINT
## Alche Pre-Seed Pitch Book | Single Source of Truth
### Synthesized February 2026 | Orchestrator

**Status**: LOCKED. All downstream agents read this document. Do not deviate without orchestrator approval.

**Inputs synthesized**:
- `_FUNDRAISER_BRIEF.md` (investor psychology, objection preemption, data audit)
- `_STORYTELLER_BRIEF.md` (narrative arc, emotional pacing, density rules)
- `claude.md` (locked data, design system, brand identity)
- User-provided locked overrides (titles, runway, prevention spending, competitive window)

---

## 0. LOCKED FACTS — OVERRIDE EVERYTHING

These facts override ANY conflicting data in the briefs, the claude.md, or the existing HTML files. No exceptions.

| Fact | Locked Value | Overrides |
|------|-------------|-----------|
| Timur Tasdogan | Co-founder & CMO (49%) | claude.md says "CEO" — OVERRIDDEN. He is CMO. |
| Daria Dijan Roth | Co-founder & COO (51%) | No change needed. |
| CEO title | **Does not exist.** Neither founder holds CEO. | Fundraiser recommended assigning CEO to Timur — OVERRIDDEN by user. Do not assign CEO title. |
| Runway | 24 months | Fundraiser brief mentions "18-24 months" in one place — correct to 24 months everywhere. |
| Prevention spending | 4.8% of health expenditure | Insight HTML currently shows 3.1% — MUST be corrected. |
| Global wellness market | $6.3T (GWI 2024) | Do not use $6.8T anywhere. |
| Competitive window | 12-18 months | Do not use 18-24 months anywhere. |
| German wellness CAGR | 3.3% | Do not use 3.4%. |

---

## 1. FINAL SECTION SEQUENCE (Sections 00-13)

Structural authority: **Storyteller** (calibrated for reading experience).
The arc follows: **tension --> resolution --> proof --> action**.

| # | Section | Pages | Emotional Beat | Density Type | Voice |
|---|---------|-------|---------------|-------------|-------|
| 00 | Cover | 1.0 | Quiet intrigue | Full-bleed, minimal | Brand |
| 01 | The Insight | 2.0 | Tension --> Recognition | Editorial prose + 1 data callout | Founder (closing para), Editorial (opening) |
| 02 | Who We Serve | 1.5 | Identification | Persona card + spending data | Editorial |
| 03 | The Market | 2.5 | Validation | Data-heavy with editorial framing | Editorial |
| 04 | Competitive Landscape | 2.0 | Clarity --> Respect | Matrix visual + graveyard callout | Editorial |
| 05 | The Solution | 2.0 | Recognition --> Excitement | Framework visual + editorial | Founder (intro), Editorial (body) |
| 06 | The Product | 2.5 | Tangibility | Mixed — editorial + feature snapshots | Editorial |
| 07 | Business Model | 2.5 | Trust | Data tables + clean unit economics | Editorial (body), Founder (graveyard sidebars) |
| 08 | Go-to-Market | 2.0 | "That's smart" | Flywheel visual + milestones | Editorial |
| 09 | Traction | 2.5 | Credibility | Mixed — data + narrative | Founder |
| 10 | The Moat | 1.0 | Reassurance | Glass card, 3 bullets | Editorial + 1 honest founder line |
| 11 | The Team | 2.5 | Confidence | Bios + governance structure | Founder |
| 12 | The Ask | 1.0 | Urgency + Clarity | Clean data, term-sheet format | Term-sheet (professional) |
| 13 | Closing | 1.5 | Conviction | Emotional + brand | Founder |
| | **TOTAL** | **26.5** | | | |

**Page count note**: 26.5 pages sits within the lower end of the 28-32 target, consistent with the "take the lower number" conflict resolution rule and the Storyteller's observation that "at page 26-28 the investor either wants a meeting or doesn't." If any section runs slightly long in production, the total should not exceed 28. If it runs short, do NOT pad. Brevity wins at pre-seed.

---

## 2. PER-SECTION CONTENT SPECIFICATION

---

### Section 00 — Cover
**Pages**: 1.0 | **Density**: Full-bleed | **Voice**: Brand

**Data points**: None. Typography and atmosphere only.

**Narrative arc**: Sets premium tone. Signals "this is not another startup deck." The reader should feel quiet intrigue and aesthetic respect.

**Reader should feel after**: "This looks premium. I will keep reading."

**What to KEEP from existing HTML** (`01-alche-cover (1).html`):
- The clean typographic layout
- "The Art of Curated Longevity" tagline
- Atmospheric gradient background
- Minimal composition

**What to CUT**:
- Nothing. The cover is strong as-is.

**Graveyard callouts**: None.

**Design notes**:
- 0 glass cards
- 0 pull quotes
- 0 data tables
- 0 KPI rows
- Full-bleed atmospheric gradient with centered brand mark and tagline

---

### Section 01 — The Insight
**Pages**: 2.0 | **Density**: Editorial prose + 1 data callout | **Voice**: Editorial opening, Founder closing paragraph

**Data points placed here**:
- Germany prevention spending: **4.8%** (CRITICAL FIX from 3.1% in existing HTML)
- 77% of health app users churn by Day 3
- 44% cancel within first 90 days
- Graveyard Rule #3 (Preventive Health Paradox) — integrated as pull quote

**Narrative arc**: This is the founding tension. The problem statement must land in under 30 seconds. The framing "people became project managers of their own health" is the single best line in the pitch book — it goes here, prominently.

**Reader should feel after**: "I've felt this. The wellness market is broken in a way nobody is fixing."

**What to KEEP from existing HTML** (`02-alche-insight (1).html`):
- "People became project managers of their own health" framing
- The fragmentation pain point narrative
- The churn statistics (77% Day 3, 44% within 90 days)

**What to CUT**:
- The 3.1% figure — replace with 4.8%
- Any visualization direction options or production notes
- Q&A prep content
- Any content exceeding 2 pages

**Graveyard callout — Rule #3 (Preventive Health Paradox)**:
- Format: Pull quote + 2-sentence editorial context
- Content: "Arivale's CEO said he did not believe there was a market for preventing future disease. He was right about the framing — and wrong about the opportunity. We sell how you FEEL today, not disease prevention tomorrow."
- Space: ~1/5 page

**Design notes**:
- 0 glass cards (editorial prose page)
- 1 pull quote (Arivale CEO / Rule #3 reframe)
- 0 data tables
- 1 data callout block (churn stats: 77% + 44%)
- Opening sentence: "Sixty percent of consumers say healthy aging is their top priority. Yet the average health-conscious person manages eight disconnected apps, three supplement subscriptions, and zero integrated guidance."

---

### Section 02 — Who We Serve
**Pages**: 1.5 | **Density**: Persona card + spending data | **Voice**: Editorial

**Data points placed here**:
- Berlin tech worker median salary: EUR 75,000
- Berlin purchasing power index: 92.4 (frame carefully — see note)
- 27% of Germans willing to pay OOP for health apps (supporting stat)

**Narrative arc**: Moves from abstract pain (section 01) to a concrete person. The persona must feel like someone the investor KNOWS personally.

**Reader should feel after**: "I know this person. My partner / friend / I am this person."

**What to KEEP from existing HTML** (`alche-slide-03-who-we-serve-investor.html`):
- The Mira persona card
- The spending consolidation data
- Specific, believable persona details

**What to CUT**:
- Anything beyond 1.5 pages — the current 3-page slide must be compressed
- Excessive demographic detail
- Any Berlin purchasing power data presented as "wealthy city" framing

**Berlin framing (per Fundraiser)**:
Do NOT frame Berlin as wealthy. The purchasing power index is 92.4 (below average). Instead frame as: "Berlin has the highest concentration of health-conscious expats in DACH, a 15-20% English-speaking population matching Alche's content language, and lower operational costs that extend runway. The Biohackers Berlin Meetup alone has 2,213 members."

**Graveyard callouts**: None.

**Design notes**:
- 1 glass card (persona card for Mira)
- 0 pull quotes
- 1 small data element (spending/demographic snapshot)
- 0 KPI rows

---

### Section 03 — The Market
**Pages**: 2.5 | **Density**: Data-heavy with editorial framing | **Voice**: Editorial

**Data points placed here**:
- $6.3T global wellness market (GWI 2024) — **NOT $6.8T**
- German wellness 3.3% CAGR
- TAM / SAM / SOM structure (clean visual)

**Narrative arc**: Validates the gut feeling from sections 01-02 with hard numbers. The market is real and the timing is now.

**Reader should feel after**: "OK, the numbers confirm this. The market is enormous and growing."

**What to KEEP from existing HTML** (`alche-market-investor.html`):
- Core market sizing data
- German market context
- European timing argument

**What to CUT**:
- Multi-page deep-dive detail
- Any instance of $6.8T — replace with $6.3T
- Any instance of 3.4% CAGR — replace with 3.3%
- Lengthy narrative around TAM (do NOT lead with "$6.3 trillion" as if Alche addresses it — per Fundraiser, this repels investors)
- Year 4+ market projection

**TAM framing (per Fundraiser)**:
Lead with SAM (German wellness-tech) or better yet the serviceable addressable: "800K Berlin residents aged 25-45 with above-average health spending." The $6.3T number is a context marker, not the headline.

**Graveyard callouts**: None.

**Design notes**:
- 1-2 glass cards (market sizing visual)
- 0 pull quotes
- 1 data table (TAM/SAM/SOM — 3-row visual, not a spreadsheet)
- 1 callout block (German paradox: high health spending, low prevention)

---

### Section 04 — Competitive Landscape
**Pages**: 2.0 | **Density**: Matrix visual + graveyard summary callout | **Voice**: Editorial

**Data points placed here**:
- Oura: $11B valuation / 5.5M rings (reference point, do not over-index)
- Hims: $2.3B revenue / 2.5M subscribers (reference point)
- ZOE: ~$100M revenue / 300K profiles (survivor example)
- AG1: $600M revenue (survivor example, content-first vindication)
- Competitive window: **12-18 months** (NOT 18-24)
- $1.4B+ graveyard total (headline number for callout)

**Narrative arc**: Creates the white space. "They have done their homework. Nobody else occupies that quadrant." This is the "oh, they studied the market" moment — the graveyard callout lands here.

**Reader should feel after**: "These founders know the landscape cold. There is a clear gap nobody fills."

**What to KEEP from existing HTML** (`05-alche-competitive-landscape.html`):
- The positioning concept (what quadrant Alche occupies)
- Competitor reference data

**What to CUT**:
- Anything exceeding 2 pages
- Exhaustive competitor analysis (reduce to 4-5 competitors, one sentence each)
- Any mention of 18-24 month window — replace with 12-18

**From `04-alche-the-moat.html`** (content migrates here):
- The Oura counter-argument, compressed to one sentence: "Oura tells you your sleep score. It does not help you fix it."

**From `alche-graveyard-lessons.html`** (content migrates here):
- "What $1.4B Taught Us" callout box — three bullet points:
  1. Survivors are asset-light (ZOE, AG1, Levels)
  2. Survivors lead with content, not clinical infrastructure
  3. Survivors build community before product
- ~80 words total. Glass card, amber accent.

**Graveyard callout — Summary Box**:
- Format: Glass card callout box titled "What $1.4B Taught Us"
- Space: ~1/4 page
- Three survivor-pattern bullets (above)

**Design notes**:
- 2 glass cards (positioning matrix + graveyard callout)
- 1 pull quote ("We studied $1.4B in failures so we could build differently")
- 1 data table (competitor comparison, 4-5 rows max)
- 0 KPI rows
- The 2x2 positioning map dominates the top half of page 1

---

### Section 05 — The Solution
**Pages**: 2.0 | **Density**: Framework visual + editorial | **Voice**: Founder intro, Editorial body

**Data points placed here**:
- 8% of EU consumers share health data (frame as "we designed for this reality")

**Narrative arc**: The competitive landscape created the white space; the solution fills it. The KNOW-DO-GET-BELONG framework is the intellectual core. It must feel elegant, not complex.

**Reader should feel after**: "The KNOW-DO-GET-BELONG loop is elegant. This is not just an app — it is a system."

**What to KEEP from existing HTML** (`05-alche-solution.html`):
- The KNOW-DO-GET-BELONG framework concept
- The user experience narrative ("what the user feels" punchline)
- The thesis statement

**What to CUT**:
- Science evidence cards (move to data room)
- Q&A prep content (founders memorize)
- Fallback positioning (internal strategy)
- Visualization direction options (production notes)
- Any content beyond 2 pages (current ~650 lines must compress to ~120 lines of final content)

**Graveyard callouts**: None in this section.

**Design notes**:
- 1 glass card (KDGB framework visual — the centerpiece)
- 0 pull quotes
- 0 data tables
- 0 KPI rows
- The KDGB loop visual should be a half-page element with one sentence per layer beneath it

---

### Section 06 — The Product
**Pages**: 2.5 | **Density**: Mixed — editorial + feature snapshots | **Voice**: Editorial

**Data points placed here**:
- EUR 19 / 49 / 99 pricing tiers (preview — detailed in section 07)
- Membership tier comparison

**Narrative arc**: Makes the product tangible. The reader can picture using it. The experience design feels considered, not hypothetical.

**Reader should feel after**: "I can picture using this. The experience design is thoughtful."

**What to KEEP from existing HTML** (`07-alche-product (3).html`):
- The user journey / experience flow (simplified)
- Membership tier comparison
- The experience vision

**What to CUT**:
- Sprint roadmap (internal production doc)
- Module-by-module breakdown (10 MVP modules — move to data room)
- Tech stack decisions (internal)
- Sticky nav elements (web UI, not book format)
- **Physical space as a funded deliverable** — see Resolution below

**PHYSICAL SPACE RESOLUTION** (Critical — addresses Fundraiser's #1 red flag):
The Berlin space concept remains in this section as a VISION element (2-3 sentences max), explicitly tagged as: "Phase 2 — Funded at Seed round (EUR 3M target). Pre-seed is 100% digital-first." The LED panels, sauna, smoothie bar, and functional potions description is CUT from the pre-seed pitch book. Replace with: "The Berlin experience space launches with seed funding as a brand touchpoint and content production studio — not a revenue requirement."

**Graveyard callouts**: None.

**Design notes**:
- 2 glass cards (app experience preview + membership tier comparison)
- 0 pull quotes
- 1 comparison element (tier table — EUR 19 / 49 / 99)
- 0 KPI rows

---

### Section 07 — Business Model
**Pages**: 2.5 | **Density**: Data tables + clean unit economics | **Voice**: Editorial body, Founder voice for graveyard sidebars

**Data points placed here**:
- EUR 19 / 49 / 99 pricing tiers (full detail)
- Break-even: Month 12, ~145 paying subscribers (HERO STAT)
- LTV, CAC, LTV:CAC ratio
- Revenue mix (digital subscriptions + partnerships)
- 24-month runway (LOCKED — not 18-24)

**Narrative arc**: Builds trust through conservative assumptions. The break-even number (145 subscribers) is the single most grounding stat in the book — an investor can count 145 people in their network who would subscribe. This is "Lean Forward Moment #4."

**Reader should feel after**: "Conservative assumptions. They will not burn my money. 145 subscribers is tiny — they can do this."

**What to KEEP from existing HTML** (`08-alche-business-model-pitchbook.html`):
- Pricing tiers
- Unit economics (LTV, CAC, LTV:CAC)
- Break-even path
- Revenue mix concept

**What to CUT**:
- Year 3-5 projections (not credible at pre-seed, penalized by European angels)
- Standalone physical space P&L (removed per physical space resolution)
- CGM phased rollout detail (internal)
- Physical buildout line item from use of funds (EUR 80-150K — REMOVED)
- Physical space CAC figures (EUR 100-130) — no longer relevant
- Any use-of-funds breakdown (per claude.md: "[Detailed allocation shared separately upon request]")
- Scale trajectory / EUR 60M ARR / EUR 250M+ valuation projections
- "Content CAC: EUR 0" phrasing — replace with: "Content acquisition runs on founder labor, not capital. Pre-funding CAC is effectively zero in direct spend."

**PHYSICAL SPACE USE-OF-FUNDS RESOLUTION**:
The pre-seed EUR 500K funds: app MVP + content engine + team + operations. EUR 0 goes to physical space. The roadmap's digital-first allocation is the canonical version. The business model's EUR 80-150K buildout line is REMOVED. Physical space investment comes from the EUR 3M seed round.

**Graveyard callout — Rule #1 (Closed Loop Trap)**:
- Format: Glass sidebar, amber left-border. 50-60 words.
- Content: "We do not own food production. We curate and connect. Every company that tried to own the full stack — from test to food — burned through capital and shut down."
- Space: ~1/6 page

**Graveyard callout — Rule #4 (Two-Business Death Spiral)**:
- Format: Glass sidebar paired with Rule #1 on same page spread. 50-60 words.
- Content: "Forward built software, clinics, and hardware simultaneously — then burned $657M. We chose asset-light: the app is the business. The Berlin space launches only when seed-funded and justified by its own P&L."
- Space: ~1/6 page
- NOTE: Updated language from Storyteller brief — no longer says "the Berlin space is one revenue module." It now says the space launches at seed, consistent with the physical space resolution.

**Design notes**:
- 2 glass cards (graveyard rule sidebars — paired on same page)
- 0 pull quotes
- 2 data tables (pricing tiers + unit economics)
- 1 KPI row (Break-even: M12 / 145 subscribers / EUR 10K MRR — big numbers, Space Mono)
- Break-even stat is the visual hero — largest type size on the page

---

### Section 08 — Go-to-Market
**Pages**: 2.0 | **Density**: Flywheel visual + milestones | **Voice**: Editorial

**Data points placed here**:
- Content-first flywheel model
- 12-month milestone targets (Month 3 / Month 6 / Month 12)

**Narrative arc**: The content-first GTM is "Lean Forward Moment #3." "Build the audience before the product" inverts the typical startup sequence. At pre-seed with EUR 0 capital spend, this is the most compelling GTM story possible.

**Reader should feel after**: "That is smart. Build the audience first, then convert. Zero capital required."

**What to KEEP from existing HTML** (`alche-gtm-strategy.html`):
- The two-flywheel model concept
- The content-first thesis ("Build the audience before the product")
- Channel strategy (compressed)

**What to CUT**:
- Quarterly metrics tables (too operational)
- Channel-by-channel detail (compress to a visual)
- Any timeline beyond 12 months

**Milestone format**: Replace quarterly detail with: "By Month 3: X audience. By Month 6: Y waitlist. By Month 12: Z paying subscribers." One row, three columns.

**Evidence requirement (per Fundraiser)**: By the time this pitch book goes to investors, the @alche.space accounts must be live with real content. The GTM section should include a small "already live" proof point if available: X posts, Y followers, Z engagement rate. Even 500 followers with high engagement beats zero. If no live content exists at time of distribution, note this gap for the founders to resolve pre-launch.

**Graveyard callouts**: None.

**Design notes**:
- 1 glass card (content flywheel visual — half page)
- 1 pull quote ("Build the audience before the product")
- 0 data tables
- 1 milestone row (Month 3 / 6 / 12 targets — clean, horizontal)

---

### Section 09 — Traction
**Pages**: 2.5 | **Density**: Mixed — data + narrative | **Voice**: Founder

**CONTENT SOURCE**: Founders are providing this section's content.

**Data points placed here**:
- Research interviews conducted
- Hypotheses validated / killed
- Pre-funding work completed
- Any live content metrics (if available)

**Narrative arc**: "Show your work." This section proves the founders execute, not just plan. It bridges GTM strategy (what they will do) and the team (who they are).

**Reader should feel after**: "They have done real work. Research, interviews, validated hypotheses. These are builders, not theorists."

**Specification for founders**:
- Show what has been validated through research and interviews
- Show what hypotheses were killed (intellectual honesty)
- Show what funding unlocks (the delta between "done" and "needed")
- If live social accounts exist: follower count, engagement rate, content cadence
- Maximum 2.5 pages
- Founder voice throughout

**What to KEEP**: N/A — content coming from founders.
**What to CUT**: N/A — content coming from founders.

**Graveyard callouts**: None. The graveyard work itself IS traction evidence — founders can reference it.

**Design notes**:
- 2-3 glass cards (validation milestones)
- 0-1 pull quotes (founder discretion)
- 0-1 data tables (validation summary)
- 0 KPI rows

---

### Section 10 — The Moat
**Pages**: 1.0 | **Density**: Glass card, 3 bullets | **Voice**: Editorial + 1 honest founder line

**Data points placed here**:
- 8% of EU consumers share health data (trust barrier — "we designed for this reality")
- Competitive window: 12-18 months

**Narrative arc**: Honest reassurance. The reader needs to know the founders understand that no moat exists at pre-seed. The triple-lock thesis is the plan for building one.

**Reader should feel after**: "Honest about limitations. The community thesis is sound. The 12-18 month window is real."

**What to KEEP from existing HTML** (`04-alche-the-moat.html`):
- Triple-lock thesis concept (3 bullet points)
- The honest framing: "We do not claim a moat at pre-seed — we have a thesis for one."

**What to CUT**:
- The other ~460 lines. The current 470-line file becomes ONE page.
- Full competitor moat analysis (competitive section handles this)
- Sourcing warnings table (NEVER in investor-facing docs — fix the sourcing or remove the claims)
- AI-proof deep-dive (reduce to one sentence)
- Source index tables (move to data room)

**Graveyard callouts**: None.

**Design notes**:
- 1 glass card (triple-lock thesis — 3 bullets)
- 0 pull quotes
- 0 data tables
- 0 KPI rows
- This is the most minimal section in the book. Maximum whitespace.

---

### Section 11 — The Team
**Pages**: 2.5 | **Density**: Bios + governance structure | **Voice**: Founder

**Data points placed here**:
- Timur Tasdogan: Co-founder & CMO (49%)
- Daria Dijan Roth: Co-founder & COO (51%)
- Technical credentials (elevated — see notes)
- Medical advisor (Doctor via Daria)
- CTO gap framed as deliberate first hire

**Narrative arc**: This is the highest-attention section per the Fundraiser (30% of investor attention at pre-seed). "Lean Forward Moment #5": The CTO gap is deliberate, not accidental.

**Reader should feel after**: "Technical credentials hidden under marketing titles. They are deeper than they look. The CTO gap is a hiring principle, not an oversight."

**What to KEEP from existing HTML** (`alche-team-section.html`):
- Core founder bios
- Medical advisor
- Domain split / governance concept

**What to CUT**:
- ALL yellow-bordered TBD placeholder boxes — resolve or remove before distribution
- "COMPENSATION STRUCTURE NEEDED" labels — resolve before distribution
- "Four People, No Gaps" headline — replace with "Four people covering product, growth, engineering, and medical. CTO is the first funded hire."
- Any placeholder text visible in PDF

**TITLE RESOLUTION**:
- Timur Tasdogan: **Co-founder & CMO** (49%). NOT CEO. The user has locked this.
- Daria Dijan Roth: **Co-founder & COO** (51%). Confirmed.
- No CEO title exists. Both are co-founders with domain-specific titles.
- The 49/51 split should be presented without explanation in the pitch book. If investors ask, founders explain in the meeting.
- Per Fundraiser recommendation (adapted for no-CEO reality): Include a "Decision Framework" row in the governance showing how domains are split and how deadlocks are resolved. This replaces the need for a CEO title.

**Technical credentials — ELEVATE**:
- Timur: MSc Data Science + Hepsiburada (NASDAQ) experience. Lead with technical credentials, marketing experience second.
- Daria: BSc Computer Engineering + backend development experience. Lead with technical credentials, media/PR experience second.
- Current framing undersells their technical capacity. Reorder bio bullets.

**CTO gap framing**:
"We will not add a technical co-founder who has not seen the thesis validated. CTO is the first funded hire. Pre-product infrastructure is handled by our technical lead. MVP development is contracted to a dev agency for speed to market."

**Graveyard callouts**: None.

**Design notes**:
- 2 glass cards (founder bio cards — one each)
- 0 pull quotes
- 1 governance element (domain split + decision framework)
- 0 KPI rows
- Medical advisor as a smaller supporting card or line item

---

### Section 12 — The Ask
**Pages**: 1.0 | **Density**: Clean data, term-sheet format | **Voice**: Professional / term-sheet

**Data points placed here**:
- Instrument: Wandeldarlehen (Convertible Loan)
- Raise target: EUR 500K
- Valuation cap: EUR 2.5M
- Discount: 20%
- Competitive window: 12-18 months
- Tranche milestones (headline only): EUR 200K signing / EUR 150K at MVP + 100 users / EUR 150K at EUR 10K MRR

**Narrative arc**: Converts confidence into action. Clean, professional, not greedy. The 12-18 month competitive window creates urgency without desperation.

**Reader should feel after**: "EUR 500K, tranche-gated, 12-18 month window. Clean structure. Not greedy. I want to learn more."

**What to KEEP**: The teaser approach is correct per both briefs and claude.md.

**What to CUT**:
- Full use-of-funds breakdown (per claude.md: "[Detailed allocation shared separately upon request]")
- Detailed term sheet (separate PDFs for German/DACH and US/International)
- Any return projections or equity story math

**Teaser content (the full page)**:
1. Instrument: Wandeldarlehen (Convertible Loan)
2. Raise target: EUR 500K
3. Valuation cap: EUR 2.5M
4. Discount: 20%
5. Use in one sentence: "24-month runway to 500 paying subscribers and seed-readiness."
6. Tranche milestones: 3-line summary
7. Competitive window: "12-18 months before well-funded incumbents integrate European longevity protocols."
8. Call to action: "Detailed term sheet, use of funds, and jurisdiction-specific documentation shared upon request."

**NOTE**: The runway sentence uses "24-month" per locked facts, not "18-month" as in the Fundraiser brief.

**Graveyard callouts**: None.

**Design notes**:
- 1 glass card (the entire ask as a clean term-sheet card)
- 0 pull quotes
- 1 structured data element (terms in clean label:value format)
- 0 KPI rows

---

### Section 13 — Closing
**Pages**: 1.5 | **Density**: Emotional + brand | **Voice**: Founder

**CONTENT SOURCE**: Founders are providing this section's content.

**Narrative arc**: The final conviction beat. "These founders will build this regardless. My capital accelerates inevitability."

**Reader should feel after**: "I want in. These people will build this with or without me."

**Specification for founders**:
- "Your longevity, daily" as the final line — echoes the tagline without repeating it
- "What Alche is not" cards — effective negative-space positioning, KEEP
- Four-phase timeline to category ownership — KEEP but compress to 4 bullet points
- Conviction close — KEEP

**What to CUT from existing HTML** (`15-alche-closing-vision.html`):
- Q&A preemption table (internal coaching notes, not investor-facing)
- Equity story / return math table (belongs in Ask PDFs, not the closing)
- Footer coaching notes
- Everything after the brand close

**Graveyard callouts**: None.

**Design notes**:
- 1-2 glass cards ("What Alche is not" cards)
- 1 pull quote (closing conviction line)
- 0 data tables
- 0 KPI rows

---

## 3. GRAVEYARD RULE PLACEMENT MAP

**Source file**: `alche-graveyard-lessons.html` (~520 lines). This file is DISSOLVED. It does not appear as a standalone section. Its content is distributed across three sections.

**Reframe**: "The $1.4 Billion Graveyard" --> "What $1.4B Taught Us"

### Rules IN the Pitch Book (3 of 7)

| Rule | # | Home Section | Format | Reframed Lesson | Word Count | Space |
|------|---|-------------|--------|-----------------|------------|-------|
| Preventive Health Paradox | #3 | Section 01 (Insight) | Pull quote + 2-sentence editorial | "Arivale's CEO said he did not believe there was a market for preventing future disease. He was right about the framing — and wrong about the opportunity. We sell how you FEEL today, not disease prevention tomorrow." | ~40 words | ~1/5 page |
| Closed Loop Trap | #1 | Section 07 (Business Model) | Glass sidebar, amber left-border | "We do not own food production. We curate and connect. Every company that tried to own the full stack — from test to food — burned through capital and shut down." | ~50 words | ~1/6 page |
| Two-Business Death Spiral | #4 | Section 07 (Business Model) | Glass sidebar, paired with Rule #1 | "Forward built software, clinics, and hardware simultaneously — then burned $657M. We chose asset-light: the app is the business. The Berlin space launches only when seed-funded and justified by its own P&L." | ~50 words | ~1/6 page |

### Summary Callout in Section 04

| Element | Section | Format | Content |
|---------|---------|--------|---------|
| "What $1.4B Taught Us" box | Section 04 (Competitive) | Glass card callout, amber accent | 3 bullet survivor pattern: asset-light, content-led, community-first. ~80 words. |

### Rules NOT in the Pitch Book (4 of 7 — Founders Memorize for Q&A)

| Rule | # | When to Use in Meeting |
|------|---|----------------------|
| Front-Loading Curse | #2 | If asked about onboarding complexity |
| Identity Crisis Kill Zone | #5 | If asked "are you wellness or medical?" |
| Reimbursement Wall | #6 | If asked about DiGA certification path |
| Hardware Multiplier | #7 | If asked about Oura/WHOOP integration risks |

**Total graveyard content in the pitch book**: ~220 words across 3 sections. Down from ~520 lines in the source file.

---

## 4. OBJECTION PREEMPTION MAP

Top 8 investor objections from the Fundraiser brief, mapped to where each is addressed.

| # | Objection | Severity | Addressed In | How It Is Addressed |
|---|-----------|----------|-------------|-------------------|
| 1 | "You have no CTO. Who builds this?" | HIGH | Section 11 (Team) | CTO framed as deliberate first funded hire. Technical lead handles pre-product. Dev agency for MVP. "We will not add a technical co-founder who has not seen the thesis validated." Timur's MSc Data Science and Daria's BSc Computer Engineering elevated. |
| 2 | "Physical space = Two-Business Death Spiral you identified in your own graveyard" | CRITICAL | Section 06 (Product) + Section 07 (Business Model) | **RESOLVED**: Digital-first for pre-seed. Physical space is Phase 2 (seed-funded). EUR 0 of pre-seed funds to buildout. Graveyard Rule #4 sidebar in section 07 explicitly addresses this. Product section tags space as "Phase 2 — Seed funded." |
| 3 | "EUR 2.5M cap on pre-revenue, pre-product company with no CTO?" | MEDIUM | Section 12 (The Ask) | Justified by: (a) content traction underway at EUR 0 cost, (b) EUR 500K provides 24-month runway, (c) break-even at M12 with 145 subscribers, (d) 20% discount de-risks early investors, (e) tranche-gated so capital releases against milestones. |
| 4 | "What prevents Oura from adding protocols?" | MEDIUM-HIGH | Section 04 (Competitive) | One sentence: "Oura tells you your sleep score. It does not help you fix it." Positioning map shows Alche in unoccupied quadrant. |
| 5 | "Two non-technical co-founders from marketing/brand backgrounds?" | HIGH | Section 11 (Team) | Technical credentials elevated: Timur (MSc Data Science, NASDAQ-listed company), Daria (BSc Computer Engineering, backend development). Bio bullets reordered: technical first, marketing second. |
| 6 | "Content-first GTM — but where is the content?" | MEDIUM | Section 08 (GTM) + Section 09 (Traction) | GTM section includes "already live" proof point if accounts are active. Traction section (founder-provided) shows research, interviews, validated hypotheses. Founders MUST have live @alche.space accounts before distribution. |
| 7 | "Why Berlin? Purchasing power is below German average." | LOW-MEDIUM | Section 02 (Who We Serve) + Section 03 (Market) | Berlin framed as: highest health-conscious expat concentration in DACH, 15-20% English-speaking, lower operational costs extend runway, Biohackers Berlin Meetup (2,213 members). NOT framed as wealthy. |
| 8 | "Physical space CAC (EUR 100-130) is worse than digital (EUR 60-80). Why spend on the space?" | HIGH | **DISSOLVED** | No longer applicable. Physical space removed from pre-seed scope entirely. No physical CAC figures appear in the book. Space is seed-funded Phase 2. |

---

## 5. DESIGN DENSITY NOTES

For each section: glass card count, pull quote placement, data table placement, KPI row placement. The Designer agent uses this as a binding specification.

| Section | Glass Cards | Pull Quotes | Data Tables | KPI Rows | Dominant Visual Element |
|---------|------------|-------------|-------------|----------|----------------------|
| 00 Cover | 0 | 0 | 0 | 0 | Typography + atmospheric gradient |
| 01 Insight | 0 | 1 (Arivale/Rule #3) | 0 | 0 | Editorial whitespace + data callout block (churn stats) |
| 02 Who We Serve | 1 (persona) | 0 | 0 | 0 | Persona card (Mira) |
| 03 Market | 1-2 (sizing) | 0 | 1 (TAM/SAM/SOM) | 0 | Market sizing visual |
| 04 Competitive | 2 (matrix + graveyard) | 1 ("$1.4B in failures") | 1 (competitor table, 4-5 rows) | 0 | 2x2 positioning map (half page, top) |
| 05 Solution | 1 (KDGB framework) | 0 | 0 | 0 | KDGB loop visual (half page) |
| 06 Product | 2 (app preview + tiers) | 0 | 1 (tier comparison) | 0 | App experience flow |
| 07 Business Model | 2 (graveyard sidebars) | 0 | 2 (pricing + unit economics) | 1 (break-even hero: M12 / 145 subs / EUR 10K MRR) | KPI row with break-even as hero stat |
| 08 GTM | 1 (flywheel) | 1 ("Build the audience before the product") | 0 | 1 (milestone row: M3 / M6 / M12) | Content flywheel visual (half page) |
| 09 Traction | 2-3 (validation cards) | 0-1 (founder discretion) | 0-1 | 0 | Validation milestone cards |
| 10 Moat | 1 (triple-lock) | 0 | 0 | 0 | Single glass card, maximum whitespace |
| 11 Team | 2 (founder cards) | 0 | 0 | 0 | Founder bio cards with governance |
| 12 The Ask | 1 (term sheet) | 0 | 1 (terms in label:value) | 0 | Clean term-sheet card |
| 13 Closing | 1-2 ("not" cards) | 1 (conviction close) | 0 | 0 | "What Alche is not" cards + brand close |

**Totals across the book**:
- Glass cards: 16-20
- Pull quotes: 4 (sections 01, 04, 08, 13)
- Data tables: 6 (sections 03, 04, 06, 07 x2, 12)
- KPI rows: 2 (sections 07, 08)

---

## 6. CONTRADICTION RESOLUTION LOG

Every data conflict found across the three input documents. Each is resolved and marked LOCKED.

| # | Contradiction | Source A | Source B | Resolution | Status |
|---|--------------|---------|---------|------------|--------|
| 1 | Prevention spending: 3.1% vs 4.8% | Insight HTML (`02-alche-insight`) shows 3.1% | Locked data (claude.md + user override): 4.8% | **Use 4.8% everywhere.** The 3.1% figure is incorrect in the HTML and must be replaced. If 3.1% refers to a different metric (OECD prevention-specific), it is not used — only 4.8% appears. | LOCKED |
| 2 | Global wellness market: $6.8T vs $6.3T | Potentially in market HTML | Locked data: $6.3T (GWI 2024) | **Use $6.3T everywhere.** No exceptions. | LOCKED |
| 3 | German wellness CAGR: 3.4% vs 3.3% | Potentially in market HTML | Locked data: 3.3% | **Use 3.3% everywhere.** | LOCKED |
| 4 | Competitive window: 18-24 months vs 12-18 months | Some slide drafts + moat file | Locked data: 12-18 months | **Use 12-18 months everywhere.** The moat file's own sourcing notes agree. | LOCKED |
| 5 | Physical space: funded in pre-seed vs digital-first | Business model (EUR 80-150K buildout, 13% Y1 revenue from space, CAC EUR 100-130) | Roadmap ("Digital-first, no lease, no buildout, no physical overhead") + Graveyard Rule #4 | **Digital-first for pre-seed. Physical space is Phase 2 (seed-funded).** Remove buildout costs, physical CAC, standalone space P&L, and physical revenue from the pre-seed pitch book. The Berlin space appears only as a 2-3 sentence vision element in the Product section, tagged "Phase 2 — Seed funded." | LOCKED |
| 6 | Use of funds: EUR 230K product+tech (roadmap) vs EUR 100-200K app + EUR 80-150K buildout (business model) | Roadmap page 3 | Business model use-of-funds table | **Roadmap's digital-first allocation wins.** Business model's buildout line is removed. Use-of-funds detail is not shown in the pitch book per claude.md ("[Detailed allocation shared separately upon request]"). | LOCKED |
| 7 | Team claim: "Four People, No Gaps" vs reality | Team section headline | No CTO, first hire TBD, compensation placeholder | **Replace headline** with: "Four people covering product, growth, engineering, and medical. CTO is the first funded hire." Remove all placeholder text. | LOCKED |
| 8 | Founder title: "Co-Founder & CEO" (Timur) in claude.md vs user-locked "Co-Founder & CMO" | claude.md team section | User override (locked facts) | **Timur is Co-founder & CMO (49%). Daria is Co-founder & COO (51%). No CEO title exists.** The user override takes absolute precedence over claude.md. | LOCKED |
| 9 | Runway: "18-24 months" (Fundraiser brief, section on Ask) vs 24 months (user-locked) | Fundraiser brief mentions "18-24 months" in Ask validation | User override: 24 months | **Use 24 months everywhere.** The Ask teaser reads "24-month runway." | LOCKED |
| 10 | Fundraiser recommends 15-20 pages vs Storyteller targets 24-26 vs task requirement 28-32 | Fundraiser: "A pitch book should be 15-20 pages for pre-seed" | Storyteller: "Total target: 28-32 pages" | **Target: 26.5 pages (lower end per conflict rule).** The Fundraiser's 15-20 target is for pitch decks, not pitch books. This is explicitly a pitch book (per claude.md: "information-dense, editorial, beautiful"). The Storyteller's range and the task requirement of 28-32 are the governing constraints. Taking the lower number: ~27 pages. | LOCKED |
| 11 | Break-even description | Some references omit space revenue | Locked data: "Month 12, ~145 paying subscribers + EUR 10K/month space" | **Digital-first resolution means break-even is restated.** Since physical space is Phase 2, break-even at M12 should reference 145 paying subscribers. If space revenue (EUR 10K/mo) is removed from the pre-seed model, the break-even subscriber count or timeline may need founder re-validation. **FLAG FOR FOUNDERS**: Please confirm the break-even figure without physical space revenue. Until confirmed, use "Month 12, ~145 paying subscribers" as the displayed stat. | LOCKED (pending founder confirmation on break-even without space revenue) |

---

## 7. TOTAL PAGE TARGET — MATH BREAKDOWN

**Target**: ~27 pages (range: 26-28)

| Section | Pages | Running Total |
|---------|-------|---------------|
| 00 Cover | 1.0 | 1.0 |
| 01 Insight | 2.0 | 3.0 |
| 02 Who We Serve | 1.5 | 4.5 |
| 03 Market | 2.5 | 7.0 |
| 04 Competitive | 2.0 | 9.0 |
| 05 Solution | 2.0 | 11.0 |
| 06 Product | 2.5 | 13.5 |
| 07 Business Model | 2.5 | 16.0 |
| 08 GTM | 2.0 | 18.0 |
| 09 Traction | 2.5 | 20.5 |
| 10 Moat | 1.0 | 21.5 |
| 11 Team | 2.5 | 24.0 |
| 12 The Ask | 1.0 | 25.0 |
| 13 Closing | 1.5 | 26.5 |
| **TOTAL** | **26.5** | |

**Tolerance**: If production runs to 28, that is acceptable. If it runs to 30+, content must be cut. If it runs under 25, check that no section was under-built.

**Reading time estimate**: At ~1.5 minutes per page for an engaged reader, 27 pages = ~40 minutes. European pre-seed angels allocate ~12 minutes for initial scan. The section sequence is designed so that the first 9 pages (Cover through Market) deliver enough to earn the remaining 18 pages of attention.

---

## 8. LANGUAGE RED FLAGS — BINDING FOR ALL CONTENT AGENTS

These phrases and framings are BANNED from the pitch book. Content agents must check against this list.

| Banned Phrase/Framing | Replace With |
|----------------------|-------------|
| "Disrupting healthcare" | "Filling the prevention gap consumers are already paying to fill" |
| "We're the Uber/Airbnb of longevity" | Drop the analogy entirely. Describe what Alche is. |
| "AI-powered" as a leading claim | "Data-informed protocols" or "personalized based on biomarker data." AI goes in roadmap (Phase 3+), not value prop. |
| "First mover advantage" | "12-18 month positioning window in a market with no integrated European player" |
| "Our TAM is $6.3 trillion" | Lead with SAM or serviceable addressable. $6.3T is context, not headline. |
| "Content CAC: EUR 0" | "Content acquisition runs on founder labor, not capital. Pre-funding CAC is effectively zero in direct spend." |
| "Four People, No Gaps" | "Four people covering product, growth, engineering, and medical. CTO is the first funded hire." |
| "We reverse-engineered our model from $1.4B in failure data" | "We studied what killed seven companies with better funding than us. Then we designed to avoid their structural mistakes." |
| Revenue projections beyond 18 months | Remove entirely. European angels penalize over-projection. |
| "10x return potential" or explicit return promises | Show the math implicitly (cap, break-even, seed target). Let the investor calculate. |
| Year 4+ projections (EUR 60M ARR, EUR 250M+) | Remove entirely. Not credible at pre-seed. |
| Any mention of $6.8T | Correct to $6.3T |
| Any mention of 3.1% prevention spending | Correct to 4.8% |
| Any mention of 18-24 month competitive window | Correct to 12-18 months |
| Any mention of 3.4% CAGR | Correct to 3.3% |
| Physical space buildout costs in pre-seed context | Tag as "Phase 2 — Seed funded" or remove |

---

## 9. EXISTING HTML FILE MAP — WHAT BECOMES WHAT

For the Builder agent: which source HTML files feed into which pitch book sections, and what content migrates.

| Source HTML File | Feeds Into Section(s) | Treatment |
|-----------------|----------------------|-----------|
| `01-alche-cover (1).html` | Section 00 (Cover) | Keep structure. Minor refinement only. |
| `02-alche-insight (1).html` | Section 01 (Insight) | FIX 3.1% to 4.8%. Keep core framing. Compress. Add Rule #3 callout. |
| `alche-slide-03-who-we-serve-investor.html` | Section 02 (Who We Serve) | Compress from 3 pages to 1.5. Keep Mira persona. Fix Berlin framing. |
| `alche-market-investor.html` | Section 03 (Market) | Fix any $6.8T to $6.3T, any 3.4% to 3.3%. Compress. Lead with SAM not TAM. |
| `05-alche-competitive-landscape.html` | Section 04 (Competitive) | Compress to 2 pages. Add graveyard "What $1.4B Taught Us" callout. Add 2x2 matrix. |
| `05-alche-solution.html` | Section 05 (Solution) | Massive cut: ~650 lines to ~120 lines. Keep KDGB framework only. |
| `07-alche-product (3).html` | Section 06 (Product) | Massive cut: remove sprint roadmap, module breakdown, tech stack. Keep UX flow + tiers. Resolve physical space to "Phase 2 vision." |
| `08-alche-business-model-pitchbook.html` | Section 07 (Business Model) | Cut Year 3-5 projections, space P&L, buildout costs, CGM detail. Keep pricing, unit economics, break-even. Add Rules #1 + #4 sidebars. |
| `alche-gtm-strategy.html` | Section 08 (GTM) | Compress quarterly detail to M3/M6/M12 milestones. Keep flywheel + content-first thesis. |
| *Founder-provided* | Section 09 (Traction) | New content from founders. Spec provided above. |
| `04-alche-the-moat.html` | Section 10 (Moat) + partial to Section 04 | Massive cut: ~470 lines to ~60 lines. Keep triple-lock thesis + honest pre-seed framing. Oura counter-argument migrates to Section 04. |
| `alche-team-section.html` | Section 11 (Team) | Remove all placeholders/TBDs. Fix titles to CMO/COO. Elevate technical credentials. Add CTO-gap framing. Add decision framework. |
| *Derived from claude.md + briefs* | Section 12 (The Ask) | New build. 1-page teaser per specification above. |
| `15-alche-closing-vision.html` | Section 13 (Closing) | Founder-provided content. Cut Q&A table, equity math, coaching notes. Keep conviction close + "What Alche is not." |
| `alche-graveyard-lessons.html` | DISSOLVED into Sections 01, 04, 07 | No standalone section. ~220 words distributed across 3 sections. |
| `alche-roadmap-final.html` | NOT a standalone section | Roadmap data feeds into Section 08 (GTM milestones) and Section 12 (tranche milestones). The roadmap is a "confirmation slide" per Fundraiser — its content is absorbed, not displayed as its own section. |

---

## 10. CRITICAL OPEN ITEMS FOR FOUNDERS

These items cannot be resolved by agents. Founders must provide input before distribution.

| # | Item | Blocking Section | Urgency |
|---|------|-----------------|---------|
| 1 | Section 09 (Traction) content | Section 09 | HIGH — no content exists yet |
| 2 | Section 13 (Closing) content review | Section 13 | MEDIUM — existing file needs cuts confirmed |
| 3 | Break-even without physical space revenue | Section 07 | HIGH — is 145 subscribers still correct without EUR 10K/mo space revenue? |
| 4 | Live @alche.space social accounts | Section 08 | HIGH — GTM thesis collapses without live content proof |
| 5 | CTO / Technical Lead compensation resolution | Section 11 | HIGH — placeholder must be resolved or removed |
| 6 | Decision framework for co-founder disagreements | Section 11 | MEDIUM — needed since no CEO title exists |
| 7 | 49/51 split rationale (if investors ask) | Section 11 | LOW — not in book, but founders need a verbal answer |

---

## 11. VOICE ARCHITECTURE — THE ARC

The book follows a deliberate voice pattern:

```
FOUNDER VOICE              EDITORIAL VOICE              FOUNDER VOICE
   Sec 00-01            -->    Sec 02-08             -->    Sec 09-13
  "Why we care"            "Here is the proof"           "Who we are + join us"
```

**Detailed mapping**:
- 00 Cover: Brand voice (tagline only)
- 01 Insight: Editorial opening, Founder closing paragraph ("We experienced this ourselves...")
- 02 Who We Serve: Editorial (third-person persona description)
- 03 Market: Editorial (third-person data authority)
- 04 Competitive: Editorial (analytical, not emotional)
- 05 Solution: Founder intro ("We designed alche around a single thesis..."), Editorial body
- 06 Product: Editorial (feature descriptions)
- 07 Business Model: Editorial body, Founder voice for graveyard sidebars ("We studied what killed...")
- 08 GTM: Editorial
- 09 Traction: Founder voice throughout
- 10 Moat: Editorial + one honest founder line ("We do not claim a moat...")
- 11 Team: Founder voice (personal motivation, 2 sentences max each)
- 12 The Ask: Professional / term-sheet voice
- 13 Closing: Founder voice (conviction close)

**The feeling this creates**: Founders tell you why they care --> Rigorous analysis proves they are right --> They show you who they are --> They ask you to join.

---

## 12. FIVE "LEAN FORWARD" MOMENTS

These are the five moments where the investor should think: "Oh, that is smart." Every downstream agent must ensure these moments are prominent and uncluttered.

| # | Moment | Section | The Line / Stat | Why It Works |
|---|--------|---------|----------------|-------------|
| 1 | "Project managers of their own health" | 01 Insight | "People became project managers of their own health" | Reframes fragmentation as a LABOR problem. Every investor has felt this. |
| 2 | "We studied $1.4B in failures" | 04 Competitive | "What $1.4B Taught Us" callout | No pre-seed company does failure analysis of their sector. Signals different thinking. |
| 3 | "Build the audience before the product" | 08 GTM | Content-first flywheel headline | Inverts build-launch-market to audience-community-product. EUR 0 capital cost. |
| 4 | "Break-even at 145 subscribers" | 07 Business Model | KPI hero stat: M12, 145 subscribers | 145 is a tiny number. It makes the model feel achievable, not aspirational. |
| 5 | "The CTO gap is deliberate" | 11 Team | "We will not add a technical co-founder who has not seen the thesis validated" | Turns a weakness into evidence of hiring discipline. |

---

*Blueprint prepared by ORCHESTRATOR SYNTHESIZER. This document is the single source of truth for all subsequent agents. Any conflict between this document and the source briefs is resolved in favor of this document. Any conflict between this document and the user's locked facts is resolved in favor of the locked facts.*
