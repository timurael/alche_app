# Master Deck ↔ Screen Tracker Coverage Audit · 2026-04-25

Source files cross-referenced:
- Master deck: `app-redesign/alche-app-redesign.html` (1,422 lines)
- Tracker: `app-redesign/PROGRESS.md` (360 lines)
- Per-screen folders: `app-redesign/screens/` (25 folders found)

## Summary

- **25** screens listed in PROGRESS.md
- **15** screens given a full deck surface (1 Home spotlight + 1 Lix spotlight + 13 screen cards). The other 10 (the six pre-Lix onboarding cards + SupplementRecommendation + GlowScanInvitation + Home + Lix-chat as they live in spotlights, not cards) are either intentionally consolidated under Lix or live in non-card surfaces.
- **15 1:1 matched** to a deck surface (spotlight or card). **6** tracker rows intentionally resolved-by-Lix (no card, with explicit deck rationale). **2** tracker rows relocated (no card; relocated to other features). **2** tracker rows live in spotlights (Home, Auth-via-Lix).
- **0 deck-only** screen cards that lack a tracker row.
- **6 tracker-only** screens in the strict "no individual deck card" sense, but ALL six are explicitly accounted for in deck section V (Group 01) as `merged into Lix` or `relocated`.
- **Strategy 1 register tally (per deck):** Dialog **9** · Signal **3** · Ritual **3** · Resolved-by-Lix (no register) **6** · Relocated (no register) **2** · Auth Dialog **1** = **25 total**.

## Per-screen coverage matrix

| # | Screen (PROGRESS) | In tracker | In deck (line range) | Folder exists | Folder complete (a/m/p) | Register (deck) | Status |
|---|---|---|---|---|---|---|---|
| 01 | Welcome | Yes | Resolved-by-Lix · L839-872 (no individual card) | Yes (`welcome/`) | a + m + p + extra video brief assets | Lix · Dialog (consolidated) | Tracker row stale — slated for deletion per LIX-BLEND |
| 02 | BrandMoment | Yes | Resolved-by-Lix · L839-872 | Yes (`brand-moment/`) | a + m + p | Lix · Dialog (consolidated) | Tracker row stale — Swift view slated for deletion |
| 03 | QuickScan | Yes | Resolved-by-Lix · L839-872 | Yes (`quick-scan/`) | a + m + p | Lix · Dialog (consolidated) | Tracker row stale — Swift view slated for deletion |
| 04 | GoalSelection | Yes | Resolved-by-Lix · L839-872 | Yes (`goal-selection/`) | a + m + p | Lix · Dialog (consolidated) | Tracker row stale — Swift view slated for deletion |
| 05 | FocusAreaReveal | Yes | Resolved-by-Lix · L839-872 | Yes (`focus-area-reveal/`) | a + m + p | Lix · Dialog (consolidated) | Tracker row stale — Swift view slated for deletion |
| 06 | SupplementRecommendation | Yes | Relocated to Shop · L867 chip + roadmap L1393 | Yes (`supplement-recommendation/`) | a + m + p | Relocated (no own register) | Folder is orphan — consider archiving |
| 07 | GlowScanInvitation | Yes | Relocated to Home/GlowScan first-run · L869 chip + L1394 | Yes (`glow-scan-invitation/`) | a + m + p | Relocated (no own register) | Folder is orphan — consider archiving |
| 08 | Auth | Yes | Card · L874-896 (Screen 01) | Yes (`auth/`) | a + m + p | Dialog | OK |
| 09 | Home | Yes | Spotlight III · L755-794 (no screen card) | None at `screens/home/` | Lives in `home-redesign/direction-c-mockup.html` | Dialog | OK — spotlight by design |
| 10 | Discover | Yes | Card · L934-952 (Screen 10) | Yes (`discover/`) | a + m + p | Dialog | OK |
| 11 | Booking | Yes | Card · L954-972 (Screen 11) | Yes (`booking/`) | a + m + p | Ritual | OK |
| 12 | Shop | Yes | Card · L974-992 (Screen 12) | Yes (`shop/`) | a + m + p | Dialog | OK |
| 13 | Profile | Yes | Card · L994-1012 (Screen 13) | Yes (`profile/`) | a + m + p | Dialog | OK |
| 14 | GlowScan | Yes | Card · L1047-1065 (Screen 14) | Yes (`glow-scan/`) | a + m + p | Dialog | OK |
| 15 | Biomarkers | Yes | Card · L1067-1085 (Screen 15) | Yes (`biomarkers/`) | a + m + p | Dialog | OK |
| 16 | Protocols | Yes | Card · L1087-1105 (Screen 16) | Yes (`protocols/`) | a + m + p | Dialog | OK |
| 17 | Progress | Yes | Card · L1107-1125 (Screen 17) | Yes (`progress/`) | a + m + p | Dialog | OK |
| 18 | DigitalTwin | Yes | Card · L1160-1178 (Screen 18, "The map") | Yes (`digital-twin/`) | a + m + p | Signal | Naming drift — folder still `digital-twin/`, deck calls it "The map" |
| 19 | HormonalBalance | Yes | Card · L1180-1198 (Screen 19) | Yes (`hormonal-balance/`) | a + m + p | Signal | OK |
| 20 | Roadmap | Yes | Card · L1200-1218 (Screen 20) | Yes (`roadmap/`) | a + m + p | Dialog | OK |
| 21 | InStore | Yes | Card · L1254-1272 (Screen 21) | Yes (`in-store/`) | a + m + p (+ STRATEGY1-AUDIT.md) | Ritual | OK |
| 22 | Nutrition | Yes | Card · L1274-1292 (Screen 22) | Yes (`nutrition/`) | a + m + p | Signal | OK |
| 23 | Restaurants | Yes | Card · L1294-1312 (Screen 23) | Yes (`restaurants/`) | a + m + p | Dialog | OK |
| 24 | DoctorSessions | Yes | Card · L1314-1332 (Screen 24) | Yes (`doctor-sessions/`) | a + m + p | Dialog | OK |
| 25 | Rituals | Yes | Card · L1334-1352 (Screen 25) | Yes (`rituals/`) | a + m + p (+ STRATEGY1-AUDIT.md) | Ritual | OK |

Bonus folder (not in 25-list): `lix-chat/` — has only `dialog-mockup.html`, no audit/swift-plan. Surfaces in deck as Spotlight IV (L796-837) plus the six "merged" chips in Group 01.

## Deck-only sections (in deck, not in 25-list)

| Section | Lines | Status |
|---|---|---|
| Cover | L599-628 | Decorative — no tracker row needed |
| I · Preface | L631-687 | Editorial framing — no tracker row needed |
| II · Narrator kit | L690-753 | 8 component patterns (Context band, Read stamp, The read, Data strip, Interstitial, Previous echo, Browse escape, Lix voice) — these are kit primitives, not screens |
| III · Home spotlight | L755-794 | **Maps to PROGRESS row #09 Home** — uses spotlight format because Home was the pilot |
| IV · Lix spotlight | L796-837 | **No tracker row.** Lix is a 7-turn chat subsystem, not in the 25-screen list. PROGRESS.md "Notes · Lix blend" section L335-345 acknowledges it. **Recommend:** add `Lix chat` as either a 26th tracker row or an explicit Onboarding-subsystem entry. |
| V · Group 01 framing | L839-872 | Group intro screens-list lists `Lix chat`, `Auth`, `Supplement rec.`, `Glow scan invite` as 4 chips — only Auth gets a card |
| X · Roadmap table | L1356-1409 | 21 rows including `Sprint 0 Home`, `Lix chat`, all 18 list-view screens, `Supplement rec. (in Shop)`, `Glow scan invite (first-run)`. Aligns with tracker. |
| Colophon | L1411-1417 | Decorative |

**Deck-only entity worth flagging: `Lix chat`** — referenced as a screen in Spotlight IV, group intro chips, and the Sprint 1 roadmap row, but has no row in PROGRESS.md's matrix (only mentioned in Notes). Consider promoting to row #26.

## Tracker-only screens (in 25-list, not in deck as screen card)

All six are explicitly accounted for in deck section V (Group 01, L839-872) but lack a per-screen card:

| # | Screen | Deck treatment | Recommendation |
|---|---|---|---|
| 01 | Welcome | Merged into Lix · chip in group-intro screens-list | OK as-is (Lix consolidation is the design decision) |
| 02 | BrandMoment | Merged into Lix · no chip, only mentioned in spotlight bullets L832 | Add chip to group-intro for parity |
| 03 | QuickScan | Merged into Lix · mentioned in spotlight bullets L832 | Add chip |
| 04 | GoalSelection | Merged into Lix · mentioned in spotlight bullets L832 | Add chip |
| 05 | FocusAreaReveal | Merged into Lix · mentioned in spotlight bullets L832 | Add chip |
| 06 | SupplementRecommendation | Relocated to Shop · L868 chip + roadmap L1393 | OK |
| 07 | GlowScanInvitation | Relocated to Home/GlowScan first-run · L869 chip + roadmap L1394 | OK |
| 09 | Home | Spotlight III, not card | OK — pilot status by design |

## Per-screen folder issues

| Screen | Issue |
|---|---|
| Home (#09) | No `screens/home/` folder. Mockup lives at `home-redesign/direction-c-mockup.html` (referenced from spotlight L770). Per-screen audit/swift-plan absent. |
| Lix chat | Not in 25-list. Folder exists but has only `dialog-mockup.html` — no audit, no swift-plan. Lix is a 7-turn subsystem; LIX-BLEND.md substitutes for swift-plan. |
| Welcome (#01) | Folder still complete (a/m/p) plus video brief artifacts but tracker row + folder are stale per Lix consolidation; Swift view scheduled for deletion. |
| BrandMoment, QuickScan, GoalSelection, FocusAreaReveal (#02-#05) | Folders complete (a/m/p), but content is now obsolete — these screens no longer exist as Swift views post-Lix. |
| SupplementRecommendation (#06) | Folder content describes onboarding-instance design; behavior relocated to Shop. Consider archiving folder or rewriting as a Shop sub-surface brief. |
| GlowScanInvitation (#07) | Same orphaning as #06 — relocated to Home/GlowScan first-run banner. |
| DigitalTwin (#18) | Folder slug `digital-twin/` no longer matches user-facing copy "The map." Folder name retained per swift convention; deck name diverged. Consider adding `screens/the-map/` symlink or rename note. |
| In-store (#21), Rituals (#25) | Both have an extra `STRATEGY1-AUDIT.md` alongside `current-audit.md` (GREEN audit artifacts). Not an issue — bonus documentation. |

## Strategy 1 register distribution

Pulled from deck card overlines, group-intro chips, and roadmap "Why this sprint" notes.

| Register | Screens | Count |
|---|---|---|
| **Dialog-first** | Auth · Discover · Shop · Profile · Glow scan · Biomarkers · Protocols · Progress · Roadmap · Restaurants · Doctor sessions | **11** |
| **Signal-first** | The map (DigitalTwin) · Hormonal balance · Nutrition | **3** |
| **Ritual-first** | Booking · In-store · Rituals | **3** |
| **Resolved-by-Lix (consolidated, no own register)** | Welcome · BrandMoment · QuickScan · GoalSelection · FocusAreaReveal | **5** |
| **Relocated (no own card/register)** | SupplementRecommendation (→Shop) · GlowScanInvitation (→Home/GlowScan) | **2** |
| **Spotlight (Dialog implied, but framed as pilot)** | Home | **1** |

Totals: **11 + 3 + 3 + 5 + 2 + 1 = 25.** All accounted for. (Lix chat sits outside the 25 — its own subsystem, Dialog-first per L813.)

The deck explicitly names register on every shipped screen via the SHIPPED tag overline (e.g. `SHIPPED · Ritual-first · 3b4074d` at L957) or the group-intro chip list. No tracker rows are unassigned by deck — only the 5 Lix-merged + 2 relocated rows lack a register, which is correct.

## Stale or thin deck sections

| Section | Lines | Issue |
|---|---|---|
| Group 01 (Onboarding) screen cards | L874-896 | **Only Auth has a card.** The 5 collapsed onboarding screens get group-intro chips and Lix-spotlight bullets but no per-screen card; the 2 relocated rows are covered by their destination surfaces. Intentional per design (Lix consolidation), but a tracker reader looking for Welcome through FocusAreaReveal will find no individual surface. |
| Lix spotlight | L796-837 | **Thin on screen-card-equivalent detail.** Has commit, files, mascot data, but lacks the decision-list breakdown a screen card carries. Functions more as a section than a screen. |
| Home spotlight | L755-794 | Same as Lix — spotlight format omits the structured decision-list. Acceptable since Home is the pilot. |
| Roadmap rows for relocated screens | L1393-1394 | `Supplement rec. (in Shop)` and `Glow scan invite (first-run)` show effort `M` and `S` (not Shipped). Current tracker resolves these as relocated, not standalone pending screens. |

Note: deck content elsewhere is dense and on-spec. No placeholder/empty sections found.

## Recommendations

**Tracker housekeeping (PROGRESS.md):**
1. **Add a `Lix chat` row** as either screen #26 or as a separate `Onboarding subsystem` entry. It currently lives only in `Notes · Lix blend` (L335-345), which makes it invisible to the screen matrix.
2. **Update onboarding rows #01-#05** to reflect their consolidation status: either strike them through, mark with a `consolidated-into-Lix` legend, or move them to a `Resolved` group beneath the matrix. The current ✅ ✅ ✅ marks on Welcome through FocusAreaReveal misrepresent reality (those views are slated for deletion, not shipping).
3. **Update rows #06 (SupplementRecommendation) and #07 (GlowScanInvitation)** to mark them `relocated` with pointers to Shop and Home/GlowScan respectively.

**Deck additions:**
1. **Add chips to Group 01 group-intro** for BrandMoment, QuickScan, GoalSelection, FocusAreaReveal (currently only Lix chat, Auth, Supplement, Glow scan invite are listed at L866-869). Improves traceability for the tracker reader.
2. **Optional:** convert Lix spotlight (L796-837) into a more decision-list-style screen card to match the structure of every other shipped screen.
3. **Optional:** add `screens/the-map/` rename or note documenting the user-facing copy change at the folder level (`digital-twin/` retained as Swift directory).

**Folder cleanup (`app-redesign/screens/`):**
1. **Archive obsolete onboarding folders:** `welcome/`, `brand-moment/`, `quick-scan/`, `goal-selection/`, `focus-area-reveal/` — move to `screens/_archived-pre-lix/` or similar. They describe a design that's been superseded.
2. **Archive relocated folders:** `supplement-recommendation/`, `glow-scan-invitation/` — same treatment, with a note pointing to Shop and Home/GlowScan respectively.
3. **Add `screens/home/`** with an audit/swift-plan even if its mockup remains in `home-redesign/`. Currently Home is the only shipped screen without per-screen folder parity.
4. **Add `screens/lix-chat/swift-plan.md` and `current-audit.md`** to bring the Lix folder up to per-screen parity. LIX-BLEND.md can serve as source material.

**Register reassignments:** none required. Every shipped card carries an explicit register overline matching deck consensus and PROGRESS.md Sprint 3+4 table (L142-153).
