# Source of Truth — Index

**Project:** Alche Subscription Model Architecture
**How to use:**
- You (Timu) edit any sheet below to add, correct, or update data
- Claude reads these files at the START of every session and before any agent launch
- Claude flags conflicts between these sheets and any new research
- These sheets OVERRIDE any agent findings

---

## Sheet Directory

| Sheet | What lives here | You update when... |
|-------|----------------|-------------------|
| `SOT-01-locked-numbers.md` | Hard numbers that cannot change | A number is definitively confirmed |
| `SOT-02-business-model.md` | Pricing, tiers, targets, P&L assumptions | You make a business decision |
| `SOT-03-market-data.md` | Market size, competitor data, WTP | New research confirms a number |
| `SOT-04-product-features.md` | Feature list, tier allocation, build phases | Product decisions are made |
| `SOT-05-team-context.md` | Team, advisors, investors, key people | People situations change |
| `SOT-06-decisions-log.md` | Every decision you've made + rationale | After each approval gate |

---

## How Claude Uses These Sheets

At the start of every session:
1. Read all 6 SOT sheets
2. Check if any agent findings conflict with SOT data
3. Flag conflicts to Timu before proceeding
4. Never override SOT data with agent findings without explicit Timu approval

When launching agents:
- Pass relevant SOT sections as context
- Instruct agents to flag (not fix) conflicts with SOT data
- Add verified findings back to SOT only after Timu approves

---

## Confidence Levels (used across all sheets)

| Level | Meaning |
|-------|---------|
| 🔒 LOCKED | From CLAUDE.md. Cannot be changed without Timu approval. |
| ✅ VERIFIED | Confirmed by research with primary source cited |
| 🔄 WORKING | Working assumption, not yet confirmed |
| ❓ UNCERTAIN | Needs more research or Timu decision |
| ❌ CORRECTED | Was wrong, now fixed (old value noted) |

---

**Last Updated:** 2026-02-24
