# SOT-06 — Decisions Log

**Every decision Timu has made, with rationale.**
**Claude references this before making any recommendation or building any output.**

Last Updated: 2026-02-24

---

## How to Use This File

After each approval gate, Claude logs:
- What options were presented
- Which option Timu chose
- Any modifications or hybrid approaches
- Downstream implications

Timu can also add decisions made outside sessions.

---

## Session-Level Decisions

| # | Date | Decision | Rationale | Downstream Impact |
|---|------|---------|-----------|------------------|
| D-001 | 2026-02-24 | Approved 7-phase plan with sequential approval gates | Need structured process with human-in-loop | All phases gated on Timu approval |
| D-002 | 2026-02-24 | Research plan = Opus, Research execution = Sonnet 4.6 | Model quality matched to task type | All agent launches must respect this rule |
| D-003 | 2026-02-24 | Build source of truth system | Prevent data drift across sessions | Claude reads SOT sheets at session start |
| D-004 | 2026-02-24 | Option C: Parallel approach (corrections + Phase 2 + background deep research) | Efficient use of time, Phase 1 is 85% accurate | Phase 2 launched while corrections applied |

---

## Approval Gate Decisions

### Gate 1 — Research Quality
**Status:** ⏸️ PENDING (awaiting Phase 2 results + corrections)
**Options presented:** Approve / Request revisions / Pause
**Timu's choice:** Requested deeper research and fact-check
**Follow-up:** Fact-check completed, 11 corrections identified
**Resolution needed:** Approve corrected Phase 1 OR request further revisions

---

### Gate 2 — Tier Allocation
**Status:** ⏸️ NOT YET REACHED
**Will present:**
- Scenario A: Minimal Free, Rich Core (maximize EUR 19 conversions)
- Scenario B: Generous Free, Premium-focused (maximize EUR 99 conversions)
- Scenario C: Balanced (optimize for EUR 49 ARPU)
- Physical integration: Options A/B/C
- Cross-sell integration: Options A/B/C
**Decision needed:** Select tier allocation + physical + cross-sell approach

---

### Gate 3 — Retention Research
**Status:** ⏸️ NOT YET REACHED

---

### Gate 4 — Churn Defense
**Status:** ⏸️ NOT YET REACHED

---

### Gate 5 — ARPU Validation
**Status:** ⏸️ NOT YET REACHED

---

### Gate 6 — Launch Pricing
**Status:** ⏸️ NOT YET REACHED

---

### Final Gate — Deliverables
**Status:** ⏸️ NOT YET REACHED

---

## Product Decisions (Add as made)

| # | Date | Feature / Area | Decision | Notes |
|---|------|---------------|---------|-------|
| — | — | Tier allocation | PENDING | Gate 2 |
| — | — | Annual discount % | PENDING | Gate 2 |
| — | — | Physical access per tier | PENDING | Gate 2 |
| — | — | Founder tier | PENDING | Gate 6 |
| — | — | Launch pricing strategy | PENDING | Gate 6 |

---

## Timu Notes (Add your own decisions here)

<!-- Add any decisions made outside of formal gates below -->

