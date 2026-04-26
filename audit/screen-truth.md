# Screen Truth Audit · 2026-04-25

**Method.** Walked every Swift file under `app/Alche/Features/` and verified Strategy 1 voice family signals (italic Newsreader narrator, Space Mono / `design: .monospaced` overlines, hard 2px corners via `Rectangle().stroke`, no rating stars, no pastel rings, no capsule pills, no fake mono metadata). Cross-checked against `app-redesign/PROGRESS.md` row markers.

**Branch.** `redesign/editorial-longevity` (submodule).

---

## Summary

- **Total original deck rows:** 25 (+ Lix chat #26 as the consolidated onboarding artifact)
- **COLLAPSED:** 5 (legacy onboarding views deleted into Lix subsystem, deliberately not Swift-built)
- **RELOCATED:** 2 (SupplementRecommendation into Shop; GlowScanInvitation into GlowScan first-run)
- **BUILT-PRE-REDESIGN:** 0
- **BUILT-NEEDS-POLISH:** 0
- **SHIPPED-FINAL artifacts:** 19 (Lix chat #26 + Auth + 17 post-auth app screens)

The 5 collapsed screens are all in Group 01 — they were collapsed into the single Lix chat subsystem per the LIX-BLEND decision (2026-04-24) and their Swift files explicitly deleted. SupplementRecommendation and GlowScanInvitation are no longer standalone onboarding screens; they survive as relocated post-auth surfaces. Counted separately for accounting honesty.

---

## Conflicts with PROGRESS.md

The PROGRESS.md matrix is **stale** — it has not been updated to reflect Sprint 3 + 4 + final polish wave shipments. The session-summary prose (Sprints 0–5 narrative) is accurate; the screen status matrix (lines 13–56) is not.

| # | Screen | PROGRESS row says | Code reality | Why it diverges |
|---|--------|------------------|--------------|-----------------|
| 11 | Booking | `—` | **SHIPPED-FINAL** | Sprint 3 commit `3b4074d` (Booking REDO · Ritual). Matrix never updated. |
| 12 | Shop | `—` | **SHIPPED-FINAL** | Sprint 3 commit `6b54150`. Matrix never updated. |
| 18 | DigitalTwin | `—` | **SHIPPED-FINAL** | Sprint 3 commit `3ed579e` ("The map" · Signal). Matrix never updated. |
| 19 | HormonalBalance | `—` | **SHIPPED-FINAL** | Sprint 3 commit `f9d6372`. Matrix never updated. |
| 20 | Roadmap | `—` | **SHIPPED-FINAL** | Sprint 3 commit `e35e297`. Matrix never updated. |
| 21 | InStore | `—` | **SHIPPED-FINAL** | Sprint 3 commit `5033b3f` (GREEN audit). Matrix never updated. |
| 22 | Nutrition | `—` | **SHIPPED-FINAL** | Sprint 3 commit `2ef9831` + Sprint 4 polish `eb90497`. Matrix never updated. |
| 23 | Restaurants | `—` | **SHIPPED-FINAL** | Sprint 3 commit `2ef9831` + Sprint 4 polish `5f76e3e`. Matrix never updated. |
| 24 | DoctorSessions | `—` | **SHIPPED-FINAL** | Sprint 3 commit `6648cb0` + Sprint 4 polish `605dbfc` + final `18edacb` (MySessions). Matrix never updated. |
| 25 | Rituals | `—` | **SHIPPED-FINAL** | Sprint 3 commit `6c9f7b7` (GREEN audit). Matrix never updated. |
| 01–05 | Welcome, BrandMoment, QuickScan, GoalSelection, FocusAreaReveal | `—` (with `✅` mockup/plan) | **COLLAPSED** (Lix-collapsed) | LIX-BLEND merged 5 cards into one chat. Old views deleted. Matrix should reflect this is intentional. |
| 06 | SupplementRecommendation | `—` | **RELOCATED** to post-auth Shop (`Features/Shop/SupplementRecommendations/`) | Onboarding instance deleted per LIX-BLEND; Shop instance survives. |
| 07 | GlowScanInvitation | `—` | **RELOCATED** as `GlowScanFirstRunBanner` in `Features/GlowScan/` | Sub-component shipped, not a discrete onboarding screen. |

**Net effect.** The old matrix showed 8/25 🟢. Code reality is **19 SHIPPED-FINAL SwiftUI artifacts**: Lix chat (#26), Auth, and the 17 post-auth app screens. The remaining original onboarding rows are 5 deliberate collapses plus 2 relocations, not pending work.

---

## Per-screen detail

### Group 01 — Onboarding

| # | Screen | PROGRESS says | Code reality | Files audited | Voice family signals | Notes |
|---|--------|---------------|--------------|---------------|----------------------|-------|
| 01 | Welcome | — | **NOT-BUILT** (intentional) | `Onboarding/Lix/*` (8 files), `Onboarding/AuthHandoffView.swift` | n/a — collapsed into Lix chat | Per LIX-BLEND, replaced by `LixChatView` Turn 01. |
| 02 | BrandMoment | — | **NOT-BUILT** (intentional) | (collapsed) | n/a | Lix Turn 02–03 covers brand voice introduction. |
| 03 | QuickScan | — | **NOT-BUILT** (intentional) | (collapsed) | n/a | Lix turns capture name + age + chief complaint inline. |
| 04 | GoalSelection | — | **NOT-BUILT** (intentional) | (collapsed) | n/a | Lix Turn 04–05 captures goal via choice chips. |
| 05 | FocusAreaReveal | — | **NOT-BUILT** (intentional) | (collapsed) | n/a | Lix Turn 06 functions as the reveal beat. |
| 06 | SupplementRecommendation | — | **RELOCATED** to post-auth Shop | `SupplementRecommendationView.swift`, `SupplementRecommendationViewModel.swift` | Newsreader + mono present in Shop instance | Onboarding instance deleted per LIX-BLEND; lives only as post-auth Shop nudge. |
| 07 | GlowScanInvitation | — | **RELOCATED** as first-run component | `GlowScanFirstRunBanner.swift` | mono + Newsreader in banner | Per LIX-BLEND moved to Home first-run / GlowScan banner, not a standalone screen. |
| 08 | Auth | 🟢 | **SHIPPED-FINAL** | `Auth/AuthView.swift` (368 lines), `Auth/AuthViewModel.swift` | `Newsreader16pt-LightItalic` 28pt opener (`AuthView.swift:115`); `SIGNING THE LETTER` Space Mono overline @ 9pt tracking 2.0 (`AuthView.swift:96–98`); Apple button wrapped in 2px sharp `Rectangle().stroke` (`AuthView.swift:184–186`); 3 italic GDPR statements (`AuthView.swift:144–149`); footer `ENCRYPTED · GDPR · GERMAN COMPANY`. | Sprint 2 commit `6ced987`. Pulls `LixProfile.name` for in-name salutation. |

### Group 02 — Core tabs

| # | Screen | PROGRESS says | Code reality | Files audited | Voice family signals | Notes |
|---|--------|---------------|--------------|---------------|----------------------|-------|
| 09 | Home | 🟢 | **SHIPPED-FINAL** | `Home/HomeView.swift`, `Home/HomeViewModel.swift` | Context band Space Mono (line 76); `AlcheReadCard` hero; previous-echo italic Newsreader 13pt (line 126); booking row 2px `Rectangle().stroke` (line 171); `BROWSE INSTEAD →` mono escape hatch | Direction C lock · commit `e00054e`. |
| 10 | Discover | 🟢 | **SHIPPED-FINAL** | `Discover/DiscoverView.swift`, `Discover/DiscoverViewModel.swift`, `Discover/ContentCardView.swift`, `Discover/EventCardView.swift`, `Discover/EventDetailView.swift` | `AlcheReadCard` curatorial opener; mono filter rail with 1px underline active state (lines 110–135); item rows italic Newsreader 22pt (line 189); `ALCHE NOTES` narrator interstitials every 3 items | Sprint 1 commit `f0b7d01` + Discover-cards polish `d3a24db` + EventDetail polish `b1e1aeb`. |
| 11 | Booking | — (stale) | **SHIPPED-FINAL** | `Booking/BookingListView.swift`, `BookingDetailView.swift`, `BookingViewModel.swift`, `QRCheckInView.swift`, `SlotPickerView.swift`, `SmoothieMenuView.swift`, `SmoothieMenuViewModel.swift` | Italic Newsreader 38pt session-type hero (line 130); `NEXT AVAILABLE` mono kicker (line 119); full-width `BOOK NOW →` mono primary on `alcheEditorialBlack` (lines 168–189); single narrator interstitial; sub-screens polished commit `56b3bc0`; SmoothieMenu polished `994d92a` (Ritual register) | Booking REDO · Ritual · commit `3b4074d`. |
| 12 | Shop | — (stale) | **SHIPPED-FINAL** | `Shop/ShopView.swift`, `Shop/ShopViewModel.swift`, `Shop/CartView.swift`, `Shop/ProductDetailView.swift`, `Shop/SupplementRecommendations/*` | `AlcheReadCard` "Three I'd take myself" opener (line 109–124); featured rows italic Newsreader 22pt (line 261); `ALCHE NOTES` interstitial; mono cart strip pinned bottom (lines 339–372); Newsreader-italic legal footer (line 378) | Sprint 3 commit `6b54150`. |
| 13 | Profile | 🟢 | **SHIPPED-FINAL** | `Profile/ProfileView.swift`, `Profile/ProfileViewModel.swift`, plus 7 sub-views (BodyTracking, DeepProfile, Membership, NotificationPreferences, PersonalizationLevel, Referral, Settings, SubscriptionPaywall) | `AlcheReadCard` retrospective read; Identity block italic Newsreader 22pt (line 163); deferred fields use mono labels + italic value-set state (line 321); 2px `Rectangle().stroke` body-tracking card (line 230) | Sprint 1 commit `70437f5` · pills polished commit `cbe3bec`. Membership/Paywall NUDGE-cleared. |

### Group 03 — Wellness features

| # | Screen | PROGRESS says | Code reality | Files audited | Voice family signals | Notes |
|---|--------|---------------|--------------|---------------|----------------------|-------|
| 14 | GlowScan | 🟢 | **SHIPPED-FINAL** | `GlowScan/GlowScanView.swift`, `GlowScanViewModel.swift`, `GlowScanResultView.swift`, `GlowScanHistoryView.swift`, `BioSyncView.swift`, `GlowScanFirstRunBanner.swift`, `SkinCategoryCard.swift` | Dark-and-quiet background (line 73); two italic Newsreader 22pt scan lines (line 121); appearance language only (line 161 "Your skin looks well-hydrated"); qualitative strip `GLOW · HYDRATION · T-ZONE` mono (lines 180–207); `LOOK AGAIN` primary | Sprint 2 commit `90a26d8` · 5 sub-views polished commit `3e2aa04`. |
| 15 | Biomarkers | 🟢 | **SHIPPED-FINAL** | `Biomarkers/BiomarkerDashboardView.swift`, `BiomarkerViewModel.swift`, `BiomarkerCategoryView.swift` (orphan-flagged), `BiomarkerDetailView.swift` (orphan-flagged), `BiologicalAgeCard.swift` (orphan-marked), `MarkerTrendChart.swift` | `AlcheReadCard` narrated-preview opener; 4 marker groups with mono overlines (line 116); marker rows display italic Newsreader 18pt with `alcheError` for out-of-range (line 154); single `DataSourceIndicator` | Sprint 2 commit `5b1866e` · 4 sub-views polished commit `d6f7f48`. Category/Detail flagged "Legacy state". |
| 16 | Protocols | 🟢 | **SHIPPED-FINAL** | `Protocols/ProtocolListView.swift`, `Protocols/ProtocolListViewModel.swift` (named `ProtocolsViewModel`), `Protocols/ProtocolDetailView.swift` | `AlcheReadCard` active-first read; library mono overlines + italic rows; ProtocolDetail opens with italic Day-X-of-Y narrator + 2pt hairline progress | Sprint 2 commit `4b043db` · ProtocolDetail polished commit `c8e9471`. |
| 17 | Progress | 🟢 | **SHIPPED-FINAL** | `Progress/ProgressView.swift` (type `WellnessProgressView`), `Progress/ProgressViewModel.swift` | `YOUR WEEK` mono kicker; `AlcheReadCard` weekly read; single curated chart with 1px editorial-black path; mono text row swaps metrics (no segmented picker) | Sprint 2 commit `c261392`. |

### Group 04 — Vision features

| # | Screen | PROGRESS says | Code reality | Files audited | Voice family signals | Notes |
|---|--------|---------------|--------------|---------------|----------------------|-------|
| 18 | DigitalTwin | — (stale) | **SHIPPED-FINAL** | `DigitalTwin/DigitalTwinView.swift`, `DigitalTwinViewModel.swift`, `BodyMapVisualization.swift`, `RegionDetailSheet.swift`, `FutureProjectionView.swift` | Renamed user-facing to "The map" (line 51) — Swift type retained; Signal-first cadence row `LAST RENDER · MAR 14 · NEXT · JUN 06`; 1px anatomical silhouette path; 2-state pins (filled black / action-blue); zero "Digital Twin" in user strings | Sprint 3 commit `3ed579e` · 2 sub-views polished commit `493ee1c`. BodyMap GREEN. |
| 19 | HormonalBalance | — (stale) | **SHIPPED-FINAL** | `HormonalBalance/HormonalBalanceView.swift`, `HormonalBalance/HormonalBalanceViewModel.swift` | Signal-first; 3 modes (Menstrual 28-day curve / Androgen 24h cortisol / None empty state); AMAB-inclusive default; `DataSourceIndicator`; observational language only | Sprint 3 commit `f9d6372` (added VM that was missing per audit). |
| 20 | Roadmap | — (stale) | **SHIPPED-FINAL** | `Roadmap/RoadmapView.swift`, `Roadmap/RoadmapViewModel.swift` | 6 authored chapters; active-chapter italic Newsreader hero; past compact `DONE ✓`; future dashed-divider muted; **zero fake mono metadata** (`VER 5.0` / `LAT 34.05` / `GRID REF` removed); fake-metadata grep guard test in test suite | Sprint 3 commit `e35e297`. |

### Group 05 — Services & rituals

| # | Screen | PROGRESS says | Code reality | Files audited | Voice family signals | Notes |
|---|--------|---------------|--------------|---------------|----------------------|-------|
| 21 | InStore | — (stale) | **SHIPPED-FINAL** | `InStore/InStoreView.swift`, `InStoreViewModel.swift`, `MembershipCardView.swift` | Ritual register (GREEN audit · already on-spec); `BERLIN · MITTE · ALCHE SPACE` mono context; `AlcheReadCard` space-arrival read; QR demoted below read; ritual handoff row | Sprint 3 commit `5033b3f`. |
| 22 | Nutrition | — (stale) | **SHIPPED-FINAL** | `Nutrition/MacroDashboardView.swift`, `MacroDashboardViewModel.swift`, `MacroLogEntryView.swift` | Signal-first (`MacroDashboardView` is canonical Signal reference per Lane B audit); `AlcheReadCard` time-aware read; 44pt italic kcal masthead; 2x2 macro grid; selective `· WATCH` flag at ≥40% threshold | Sprint 3 commit `2ef9831` · log-entry polished commit `eb90497`. |
| 23 | Restaurants | — (stale) | **SHIPPED-FINAL** | `Restaurants/RestaurantListView.swift`, `RestaurantListViewModel.swift`, `RestaurantDetailView.swift`, `RestaurantDetailViewModel.swift`, `DishDetailView.swift` | Dialog (hybrid); pills retired everywhere → mono `LABEL · VALUE` rows; `INDEPENDENTLY ESTIMATED NUTRITION · BY ALCHE` tag; 2x2 macro grid mirroring Nutrition; signature dish as `· SIGNATURE` mono not stars | Sprint 3 commit `2ef9831` · sub-views polished commit `5f76e3e`. |
| 24 | DoctorSessions | — (stale) | **SHIPPED-FINAL** | `DoctorSessions/PractitionerListView.swift`, `PractitionerListViewModel.swift`, `PractitionerDetailView.swift`, `SessionBookingView.swift`, `SessionBookingViewModel.swift`, `SessionDetailView.swift`, `MySessionsView.swift`, `MySessionsViewModel.swift` | Dialog register; `AlcheReadCard` voice-frame; **rating chrome confirmed gone** (`PractitionerDetailView.swift:11` comment "no stars, no review counts, no pastel rings"); italic pull-quote + mono attribution replaces stars (line 155); legal disclaimer staged twice (italic top + bordered warm-cream legal box bottom); MySessions count-aware italic narrator (`Two waiting. Three closed.`) | Sprint 3 commit `6648cb0` · sub-views polished `605dbfc` · MySessions polished `18edacb`. `Practitioner.rating`/`reviewCount` model fields orphaned (deprecation candidates). |
| 25 | Rituals | — (stale) | **SHIPPED-FINAL** | `Rituals/RitualNotificationView.swift` | GREEN audit (7/7 PASS · cinematic modal already on-spec); italic Newsreader title/subtitle; real `DURATION · STREAK · LAST` data strip (`AlcheDataStrip`); 3 numbered steps before `BEGIN` CTA; legacy `variantLabel`/`sequenceLabel` params retained for source compat but **no longer rendered as fake mono code** (lines 16–19) | Sprint 3 commit `6c9f7b7`. |

---

## What's actually left to ship for Sprint 3 (Utility) per code reality

**Nothing.** All 7 utility screens are SHIPPED-FINAL.

| Screen | State | Commits |
|--------|-------|---------|
| Booking | SHIPPED-FINAL | `3b4074d` + `56b3bc0` + `994d92a` |
| Shop | SHIPPED-FINAL | `6b54150` |
| In-store | SHIPPED-FINAL | `5033b3f` |
| Rituals | SHIPPED-FINAL | `6c9f7b7` |
| Nutrition | SHIPPED-FINAL | `2ef9831` + `eb90497` |
| Restaurants | SHIPPED-FINAL | `2ef9831` + `5f76e3e` |
| Doctor sessions | SHIPPED-FINAL | `6648cb0` + `605dbfc` + `18edacb` |

The Sprint 3 label in the matrix should flip to ✅ for all 7 rows. The work happened; the matrix lagged.

## What's actually left to ship for Sprint 4 (Vision) per code reality

**Nothing.** All 3 vision screens are SHIPPED-FINAL.

| Screen | State | Commits |
|--------|-------|---------|
| DigitalTwin (renamed "The map" in copy) | SHIPPED-FINAL | `3ed579e` + `493ee1c` |
| HormonalBalance | SHIPPED-FINAL | `f9d6372` |
| Roadmap | SHIPPED-FINAL | `e35e297` |

## Onboarding (Group 01) status

**Critical clarification.** The onboarding rows are **not pending work** — they are either deliberately collapsed or relocated:

- **Welcome / BrandMoment / QuickScan / GoalSelection / FocusAreaReveal** (5 screens): Swift files **deleted** per LIX-BLEND commit `d3884f1`. Replaced by single `LixChatView` 7-turn scripted chat at `Features/Onboarding/Lix/`. This was a deliberate architecture call, not a missed deliverable.
- **SupplementRecommendation**: Onboarding instance **deleted**. Only the post-auth Shop instance survives at `Features/Shop/SupplementRecommendations/SupplementRecommendationView.swift`.
- **GlowScanInvitation**: Standalone view **deleted**. Replaced by `GlowScanFirstRunBanner` (a banner sub-component, not a screen) in `Features/GlowScan/`.
- **Auth (#08)**: SHIPPED-FINAL (`6ced987`).
- **Lix subsystem**: 8 Swift files in `Features/Onboarding/Lix/` (LixChatView · LixChatViewModel · LixMascot · LixMoodState · LixProfile · LixSystemPrompt · LixTurns · LixAPIClient) + `AuthHandoffView`. All voice-family-clean.

**Recommendation.** PROGRESS.md should be amended so the Onboarding row reads "Lix chat (8-files) + Auth handoff + AuthView" rather than enumerating 8 deleted ghost screens. The 7 PROGRESS rows for the deleted screens are misleading — they suggest pending work where the work was rejected.

---

## Health flags discovered during audit (already tracked in PROGRESS, restating for completeness)

- `Practitioner.rating` / `Practitioner.reviewCount` — orphaned model fields, no UI consumers. Safe deprecation.
- `BiomarkerCategoryView` / `BiomarkerDetailView` — "Legacy state" per BiomarkerViewModel; parent dashboard does not route to them. Polished prophylactically; needs wire-or-delete decision.
- `BiologicalAgeCard` — production-orphaned; only `#Preview` references it. Marked with comment, kept polished.
- `PractitionerDetailView` — hard-codes `.longevityPlus` member tier. Wire to `AppState.member.tier` once that exists.
- `SmoothieMenuViewModel.toggleFavorite` / `isFavorite` / `favoriteSmoothies` — view stopped consuming them. Other-call-site sweep needed before deletion.
- `ContentCardView` / `EventCardView` (Discover) — orphaned. `DiscoverView` ships its own inline `itemRow`. Polished prophylactically. Wire-or-delete pending.

None of these block SHIPPED-FINAL classification. They are post-Strategy-1 housekeeping.

---

## Bottom line

The "Sprints 0–5 shipped" claim from the prior session is **correct on substance** — 19 shipped SwiftUI artifacts carry the Strategy 1 voice family in code. The remaining original onboarding rows are 5 deliberate collapses plus 2 relocations per LIX-BLEND. The conflict was stale accounting language, not a code-reality gap. 🤍
