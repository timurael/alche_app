# Subscription Model Architecture — Session Log

**Project:** Alche — Subscription Model Architecture
**Started:** 2026-02-24
**Owner:** Timu (Co-founder & CEO)

This file is a running record of every step, decision, and communication in the subscription model build. Updated after every action.

---

## RULE: MODEL ASSIGNMENT (NON-NEGOTIABLE)
- **Planning / architecture / orchestration** → model="opus"
- **Research / fact-checking / writing / analysis** → model="sonnet" (4.6)

---

## Phase 0 — Setup

### Step 0.1 — Plan Approved
**Date:** 2026-02-24
**From:** Timu
**Action:** Approved 7-phase sequential plan with approval gates
**Files referenced:** Plan document (in-conversation)

### Step 0.2 — Folder Structure Created
**Date:** 2026-02-24
**Action:** Created `/subscription-model-architecture/` with 4 subfolders
```
01-research/       ← raw research outputs
02-options/        ← scenario options for each decision
03-decisions/      ← Timu's decisions + session log
04-deliverables/   ← final outputs for pitch book + P&L
```

---

## Phase 1 — Competitive Research & Feature Inventory

### Step 1.1 — Agents Launched (3 parallel, model=sonnet)
**Date:** 2026-02-24
**Agents:**
- Competitor Tier Analyst (Oura, Hims, ZOE, WHOOP)
- Behavioral Psychology Researcher (upgrade triggers, German WTP)
- Feature Inventory Builder (all alche features)

### Step 1.2 — Results Returned
**Status:** Agents returned findings in-conversation only. Files NOT written to disk (error — agents didn't persist output).

**Key findings from in-memory results:**
- Oura: 2-tier (Free + $5.99/mo Premium)
- Hims: Treatment-specific ($32–$1,800/mo)
- ZOE: One-time $294 test + $39–60/mo membership
- WHOOP: 3-tier annual-only ($199/$239/$359/yr)
- 117 features catalogued across 6 revenue streams
- 72-hour window for upgrade decisions
- 27% German WTP, 8% EU data sharing (both verified ✅)

### Step 1.3 — Gate 1 Presented to Timu
**Date:** 2026-02-24
**Timu's response:** "deeper research and fact check. also log every step we made by communicating me for future reference."

### Step 1.4 — Phase 1B Fact-Checking Launched (3 parallel, model=sonnet)
**Date:** 2026-02-24
**Agents:**
- Competitor Data Fact-Checker
- Psychology Data Fact-Checker
- Feature Inventory Cross-Checker

**Results (in-memory only — not persisted to disk):**
- Phase 1 quality: B+ (85/100)
- 11 corrections identified (4 competitor, 3 psychology, 4 feature)
- 7 missing features identified
- All CLAUDE.md locked data verified ✅

**Critical corrections needed:**
1. Oura trial: claimed 6 months → actual 1 month
2. ZOE pricing: $39–60/mo → actual $9.99–24.99/mo (60% price cut)
3. "70% choose middle tier" → reframe as strategy goal, not empirical fact
4. Feature count: 117 → ~111 unique (some double-counting)

### Step 1.5 — Model Rule Established
**Date:** 2026-02-24
**From:** Timu
**Content:** "research plan is done by opus, research must be done by sonnet 4.6"
**Action:** Added rule to CLAUDE.md. Model switched to claude-sonnet-4-6.

### Step 1.6 — Source of Truth System Requested
**Date:** 2026-02-24
**From:** Timu
**Content:** "build me a source of truth sheets. so that i can add everything there and you check there every time for improvements."
**Action:** Designing system now (see `/03-decisions/SOURCE_OF_TRUTH_INDEX.md`)

### Step 1.7 — Folder Structure Actually Created (Fix)
**Date:** 2026-02-24
**Note:** Previous agents returned results in-conversation only. Folder didn't exist. Fixed by running mkdir directly.

### Step 1.8 — Parallel Execution Approved
**Date:** 2026-02-24
**From:** Timu: "keep going"
**Action:** Executing Option C in parallel:
- Applying Phase 1 corrections (direct file writing)
- Launching Phase 2 tier allocation agents (model=sonnet)
- Launching background deep research (model=sonnet)
- Building source of truth system

---

## Phase 2 — Tier Allocation Options

### Step 2.1 — Agents Launched (2 parallel, model=sonnet)
**Date:** 2026-02-24
**Agents:**
- Option Matrix Builder (3 tier allocation scenarios)
- Deep Research Agent (ZOE, German pricing, Premium economics)

### Step 2.2 — Results Complete ✅
**Date:** 2026-02-24

**Tier Allocation Scenarios (written to `/02-options/tier-allocation-options.md`):**

| Scenario | Logic | Likely ARPU |
|----------|-------|------------|
| A: Minimal Free, Rich Core | Fast paywall, Core as entry product | EUR 40–44 |
| B: Generous Free, Premium-Focused | Trust-building, Premium as aspiration | EUR 48–55 |
| C: Pro as Hero Tier | Decoy effect, 52% land on Pro | EUR 54–58 |

**Key structural finding:** CGM kit at Pro, CGM coaching at Premium, AI features start at Pro — consistent across all 3 scenarios. Physical space placement is the primary differentiator between scenarios.

**Deep Research (written to `/01-research/deep-research-strategic.md`):**

| Question | Key Finding |
|----------|-------------|
| ZOE price cuts | Root cause was front-loaded value (one-time insight, not daily ritual). EUR 49 safe IF alche creates ritual dependency. |
| German annual pricing | 17–20% discount optimal. Frame as "Verlässlichkeit" (reliability). "2 Monate gratis" framing. |
| EUR 99 Premium COGS | Physician range EUR 16–80% gross margin. Confirm Daria's physician rate. Alternative: pharmacist + health coach = 65–75% margin. |

---

## Phase 1 Corrections — Applied ✅

### Step C.1 — Corrections Applied to SOT Sheets
**Date:** 2026-02-24
**Files corrected:**
- `SOT-03-market-data.md` — Oura trial (1 month), Hims revenue ($2.35B), ZOE pricing, decoy effect framing, guarantee lift range
- All corrections applied directly to SOT sheets (source of truth)

---

## Source of Truth System — Built ✅

### Step SOT.1 — System Created
**Date:** 2026-02-24
**Files created:**
- `SOURCE_OF_TRUTH_INDEX.md` — Master index + usage rules
- `SOT-01-locked-numbers.md` — All CLAUDE.md locked data
- `SOT-02-business-model.md` — Pricing, targets, tier mix scenarios
- `SOT-03-market-data.md` — Competitor data + market research (now includes deep research)
- `SOT-04-product-features.md` — Feature list + tier allocation candidates
- `SOT-05-team-context.md` — Team, advisors, investors
- `SOT-06-decisions-log.md` — Every decision with rationale

---

## Approval Gates

| Gate | Phase | Status | Timu's Decision |
|------|-------|--------|-----------------|
| Gate 1 | Research quality | ⏸️ Pending corrections | Requested fact-check |
| Gate 2 | Tier allocation | ⏸️ Not yet reached | — |
| Gate 3 | Retention research | ⏸️ Not yet reached | — |
| Gate 4 | Churn defense | ⏸️ Not yet reached | — |
| Gate 5 | ARPU validation | ⏸️ Not yet reached | — |
| Gate 6 | Launch pricing | ⏸️ Not yet reached | — |
| Final | All deliverables | ⏸️ Not yet reached | — |

---

## Open Questions

1. Which competitor tier structure resonates with alche's positioning?
2. Should Pro (EUR 49) be positioned as middle "obvious choice" or Premium as "aspirational"?
3. Is 20% Core→Pro upgrade rate realistic?
4. Should alche lead with annual pricing to boost retention?
5. Is EUR 99 tier sustainable given physician COGS (17–25%)?

---

## Phase 3 — Habit, Seduction & Community Research

### Step 3.1 — Research Prompt Written (Orchestrator)
**Date:** 2026-02-25
**File:** `01-research/PROMPT_habit-seduction-community.md`
**Action:** Timu requested research on habit formation, seduction psychology, and community belonging as foundations for product design and churn defense.

### Step 3.2 — 3 Parallel Research Agents Launched (model=sonnet)
**Date:** 2026-02-25
- **Habit Architect** → `01-research/habit-mechanics.md` ✅
- **Seduction Strategist** → `01-research/seduction-mechanics.md` ✅
- **Community Architect** → `01-research/community-mechanics.md` ✅

### Step 3.3 — Synthesis Agent Launched (model=sonnet)
**Date:** 2026-02-25
- **Synthesis Agent** → `01-research/engagement-architecture.md` ✅

### Key findings logged:
- 66-day habit arc invalidates 14-day free trials — trial architecture needs redesign
- Day 3 is highest-risk moment (77% gone) — needs automated reactivation sequence
- Morning habits automate 31% faster than evening — morning anchors should be default
- Proactive engagement at Day 14 lifts 90-day retention from 31% → 71%
- Peloton: community-driven model achieves 85%+ annual retention (2.5x industry)
- Peloton: 60% lower churn when members engage 2+ disciplines/month
- Dunbar's Number warning: sub-groups of 25–80 needed from start — avoid scaling past intimacy threshold
- alche's enemy defined: supplement overwhelm, wellness theatre, longevity clinic pricing, passive medicine, joyless optimization
- #dailyalche: morning window, 30–90 sec completion, give-to-get visibility (feed locked until check-in)

**Last Updated:** 2026-02-25 — Step 3.3 (Engagement architecture complete)
