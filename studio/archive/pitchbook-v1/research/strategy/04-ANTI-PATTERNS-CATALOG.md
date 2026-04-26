# Anti-Patterns Catalog: What to Avoid in Investor Documents

**Source**: Empathy Agent analysis of original HTML files + `_INVESTOR_EMPATHY_MAP.md` Section G
**Relevance**: Patterns that erode consulting-trained investor confidence. Applicable to any future investor materials.

---

## 1. Atmospheric Background Gradients

**What it is**: `body::before` with overlapping `radial-gradient()` at 3-8% opacity creating mood lighting behind content.

**Why it kills credibility**: Consulting documents have solid backgrounds. Atmospheric gradients signal lifestyle brand. They also cause print inconsistencies.

**Replace with**: `background: solid color`. No gradients.

**Source**: Empathy Agent, anti-pattern analysis from `_design-system.css` lines 186-196

---

## 2. Glassmorphic Backdrop Blur

**What it is**: `backdrop-filter: blur(16-24px)` with semi-transparent backgrounds on content containers.

**Why it kills credibility**: Glassmorphism is Apple's consumer interface language. In a financial document, it reads as decorative complexity. Does not print reliably.

**Replace with**: Simple bordered containers. Solid background, `1px solid` border, `border-radius: 4px` max.

**Source**: Empathy Agent, from `_design-system.css` lines 363-373

---

## 3. Label Headlines Instead of Action Titles

**What it is**: Using "The Market" or "Business Model" as page headlines.

**Why it kills credibility**: Labels tell the reader WHAT the page is about. Conclusions tell the reader WHAT TO THINK. Consulting-trained readers expect the Pyramid Principle: conclusion first.

**Replace with**: Complete sentences stating the page's key finding. Example: "Break-even at Month 12 with 145 subscribers and 24-month runway."

**Source**: Empathy Agent, from multiple section HTML files; McKinsey Pyramid Principle methodology

---

## 4. KPI Cards in Glass Containers

**What it is**: Centered number + label inside individual glassmorphic cards, repeated in a horizontal row.

**Why it kills credibility**: Dashboard UI pattern, not document pattern. Centered alignment wastes space and makes comparison harder.

**Replace with**: Horizontal table row or data strip. Left-aligned labels, right-aligned values, no glass containers.

**Source**: Empathy Agent, from `section-07-business-model.html` lines 193-214

---

## 5. Pull Quotes with Decorative Borders

**What it is**: Serif italic text with amber left border, used to highlight key insights.

**Why it kills credibility**: Pull quotes are magazine/editorial devices. They signal storytelling, not evidence presentation.

**Replace with**: Single-line callout row. Bordered top and bottom. No italic. No serif. Maximum 2 lines.

**Source**: Empathy Agent, from `section-01-insight.html` lines 269-272

---

## 6. Dark Inverted Vision Blocks

**What it is**: Dark background section with large serif headline ("The Endgame") and aspirational brand copy.

**Why it kills credibility**: Brand storytelling in its purest form. Communicates "founders think about brand more than business." Company comparisons to billion-dollar brands at pre-seed stage destroy trust instantly.

**Replace with**: Remove entirely. Close with a growth table, contact info, and CTA.

**Source**: Empathy Agent, from `section-13-closing.html` lines 172-176

---

## 7. Narrative Prose in Data Sections

**What it is**: Paragraph text containing multiple critical data points that force the reader to hunt for numbers.

**Why it kills credibility**: Consulting investors scan, they don't read paragraphs in financial sections. Every number buried in prose is a number they might miss.

**Replace with**: Data table. One row per metric. Immediately scannable.

**Source**: Empathy Agent, from `section-07-business-model.html` line 465

---

## 8. Unanchored Conversion Rates

**What it is**: Stating "4.5% convert to paid (modeled target)" without source attribution or assumption basis.

**Why it kills credibility**: Without attribution, the investor assumes the number was chosen to make the model work, not derived from evidence.

**Replace with**: Assumption row: "4.5% modeled target (RevenueCat 2025 health/fitness median: 2-3%, adjusted upward for community-driven acquisition)."

**Source**: Empathy Agent + `_INVESTOR_CRITIQUE.md` conversion rate flag; RevenueCat 2025 benchmark data

---

## 9. Aspirational Company Comparisons

**What it is**: Referencing CrossFit, Peloton, Soho House, or Aesop as positioning anchors.

**Why it kills credibility**: Comparing pre-product company to billion-dollar brands with decades of history is the fastest credibility killer. The appropriate comparison frame at pre-seed is the graveyard (companies that failed and what you learned from them).

**Replace with**: Graveyard analysis. Companies that tried and failed. What you designed around.

**Source**: Empathy Agent + `_INVESTOR_CRITIQUE.md` Section 10 critique

---

## 10. Research Metrics Presented as Traction

**What it is**: Third-party statistics (Reddit subscriber counts, competitive spending estimates) displayed in KPI card format identical to first-party metrics.

**Why it kills credibility**: Conflates market research with company execution. An investor scanning KPI cards expects company data. Finding "711K Reddit subscribers" where they expected "waitlist signups" erodes trust in all other metrics.

**Replace with**: Clearly label what is research vs. traction. Research goes in Market section. Traction section shows ONLY first-party data (or honestly states "pre-product, pre-revenue").

**Source**: Empathy Agent + `_TRACTION_CRITIQUE.md` red flag analysis
