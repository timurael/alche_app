# Alche Pitch Book v6 — Deliverables

**Session date:** 2026-04-24
**Scope:** Full rebuild of Alche pre-seed pitch book from subscription-model (v5) to retail-first (v6), plus 9-agent research swarm for investor targeting, supplier DD, and EU regulatory landscape.

---

## 📦 Top-level files

| # | File | Size | Lines | What it is |
|---|------|------|-------|------------|
| 1 | **`PRIORITY-ACTIONS.md`** | 9.6 KB | 141 | **Read first.** Urgent this-week list, Top 10 investors, Top 5 suppliers, 3 regulatory risks, exit comps, biggest bet of the week (BSS deadline May 4). |
| 2 | `DELIVERABLES.md` | — | — | This file. Complete inventory of v6 outputs. |
| 3 | `decisions-locked.md` | 4.5 KB | 69 | The 6 strategic decisions resolved this session + downstream slide-by-slide impact map. |
| 4 | `pitchbook-v6-slides.md` | 17 KB | 420 | Source content for every slide in markdown. Editable. Drives the HTML deck. |

---

## 🎨 Deck (investor-facing)

| # | File | Size | Lines | What it is |
|---|------|------|-------|------------|
| 5 | **`deck/index.html`** | 68 KB | 879 | **The deck.** 26 slides. A4 print-optimized. Opens in any browser. Retail-first math, Xiaohongshu comp, Sunday Natural correctly positioned (€800M CVC exit). |
| 6 | `deck/_design-system.css` | 32 KB | 1,287 | Alche's existing design system — Cormorant Garamond + Outfit + Space Mono, cream/amber/deep palette, glass components, print CSS. Copied from `pitchbook/design-system/`. |

**Deck structure — 26 slides:**

```
01 Cover                    14 Traction
02 Problem                  15 Roadmap
03 Insight                  16 Financial Projections
04 Solution                 17 Unit Economics
05 How It Works             18 The Team
06 Product Preview          19 Why Now
07 Key Features             20 Vision
08 Competitive Landscape    21 The Ask (€500K pre-seed)
09 Market Opportunity       22 Why Alche
10 Target Audience          23 In the Wild
11 Go-to-Market             24 Contact
12 Business Model           25 Appendix
13 The Flywheel             26 Back Cover
```

---

## 💰 Financials

| # | File | Size | Lines | What it is |
|---|------|------|-------|------------|
| 7 | **`financials/pnl-model.html`** | 22 KB | 416 | **24-month P&L model.** Interactive — toggle Conservative / Base / Optimistic scenario. 3-page A4 layout: assumptions dashboard, full P&L table, sensitivity matrix + risk register. Prints cleanly. |
| 8 | `financials/_design-system.css` | 32 KB | 1,287 | Same design system as deck, self-contained so P&L can ship standalone. |

**Scenario outcomes (Year 3):**

| Scenario | Revenue | EBITDA | Gross margin |
|----------|---------|--------|--------------|
| Conservative | €14.0M | (€0.2M) | 50% |
| **Base** | **€22.2M** | **€7.3M** | **60%** |
| Optimistic | €38.0M | €14.0M | 65% |

---

## 🔍 Research — 9 agent swarms

### Investors (4 files, 1,903 lines)

| # | File | Size | Lines | Coverage |
|---|------|------|-------|----------|
| 9 | `research/investors-uk.md` | 37 KB | 423 | **19 UK/London funds.** Top picks: Ada Ventures (10/10), JamJar (10/10 conditional), V3 Ventures (hidden gem). Also: dmg ventures just led Equi comp. |
| 10 | `research/investors-dach.md` | 33 KB | 423 | **20 DACH funds** + 9 deprioritized. Top: Vorwerk, Heartcore, Calm/Storm, Cherry. **Berlin Startup Stipendium Batch II deadline May 4, 2026.** |
| 11 | `research/investors-eu.md` | 40 KB | 481 | **23 pan-EU funds.** Top: Calm/Storm (10/10), Goddess Gaia Ventures, Eka, Five Seasons. |
| 12 | `research/investors-angels.md` | 44 KB | 576 | **Operator-angels, family offices, queer/female networks.** Foelsch (BRAINEFFECT), Murray-Serter (Heights), Ogaenics' Suse Leifer. Gaingels + Out Investors flagged. |

### Money flow (1 file)

| # | File | Size | Lines | Coverage |
|---|------|------|-------|----------|
| 13 | `research/comp-raises-and-money-flow.md` | 48 KB | 300 | **34 disclosed rounds** 2021-2026 mapped to investors. Key finding: **Bioniq → Herbalife acquisition up to $150M, announced 2026.** Five Seasons pattern: her1, ARTAH, Spacegoods, Puresport, KoRo. |

### Suppliers (3 files, 918 lines)

| # | File | Size | Lines | Coverage |
|---|------|------|-------|----------|
| 14 | `research/suppliers-nordic.md` | 31 KB | 409 | **Puori, Nordic Naturals, Swedish Nutra** — specific wholesale contacts, DE distributors, hero SKUs. |
| 15 | `research/suppliers-uk.md` | 28 KB | 266 | **Vivo Life, Artah, Innermost, Viridian, Wild Nutrition** — Brexit logistics, ashwagandha risk on 3/5 brands. Only Vivo Life has real EU warehouse. |
| 16 | `research/suppliers-german.md` | 29 KB | 243 | **Naturtreu, Ogaenics, BRAINEFFECT, Her.one, Sunday Natural.** Sunday = don't pursue (€800M CVC-owned, DTC-only). Naturtreu + Ogaenics are the Phase 1 workhorses. |

### Regulatory (2 files, 760 lines)

| # | File | Size | Lines | Coverage |
|---|------|------|-------|----------|
| 17 | `research/regulatory-germany.md` | 28 KB | 373 | **BVL notification process, labeling (LMIV + NemV + LFGB), ashwagandha watchlist, VAT (7% solid / 19% liquid), GDPR health data.** Critical: new online form mandatory July 1, 2026. |
| 18 | `research/regulatory-eu.md` | 27 KB | 387 | **EU Health Claims (Reg 1924/2006), ~260 approved claims, Green Claims Directive, VAT OSS, cross-border rules.** |

---

## 📊 By the numbers

| Metric | Count |
|--------|-------|
| Files produced | 18 |
| Total lines of output | 8,124 |
| Total size | ~550 KB |
| Deck slides | 26 |
| P&L scenarios | 3 |
| Investors researched | **82+** (19 UK + 20 DACH + 23 EU + 20 angels/family offices) |
| Suppliers assessed | 13 brands |
| Funding rounds mapped | 34 |
| Agent swarms launched | 9 (all completed, all files written) |
| Strategic decisions locked | 6 |

---

## 🔗 How the files connect

```
PRIORITY-ACTIONS.md                         ← start here
   │
   ├─→ decisions-locked.md                  ← the 6 strategic choices
   │
   ├─→ pitchbook-v6-slides.md               ← source content (markdown)
   │      │
   │      └─→ deck/index.html               ← rendered deck (investor-facing)
   │
   ├─→ financials/pnl-model.html            ← drivable P&L
   │
   └─→ research/
          ├─ investors-*.md     (4 files)    ← who to pitch
          ├─ comp-raises*.md                 ← follow-the-money evidence
          ├─ suppliers-*.md     (3 files)    ← who to stock
          └─ regulatory-*.md    (2 files)    ← what to comply with
```

---

## ⏭️ What's still open (for next session)

- **Slide 23** (In the Wild) — placeholder until a real beta-user quote is captured
- **Slide 6** (Product Preview) — placeholder screens; replace with actual app screenshots
- **PDF export** of the deck — needs headless browser (Puppeteer / Playwright) run locally, or print-to-PDF from Chrome
- **`alche.health` domain + waitlist page** — check current status
- **GmbH formation** — pitch credibility (~€2-4K in fees)
- **NDA template** — standardize before sharing deck externally

🤍
