# Alche — Dialog-first App Redesign · Progress

**Parent direction:** Dialog-first (Direction C from home study) — locked 2026-04-24
**Scope:** Every screen in the app, rewritten around Alche's voice as a longevity companion.
**Session started:** 2026-04-24

---

## Screen status matrix

Legend: ⬜ pending · 🟡 in progress · ✅ complete · 🟢 shipped (SwiftUI)

### Group 01 — Onboarding (Agent A1)
| # | Screen | Swift file | Audit | Mockup | Swift plan | Shipped |
|---|--------|-----------|:-----:|:------:|:----------:|:-------:|
| 01 | Welcome | `WelcomeView.swift` | ✅ | ✅ | ✅ | — |
| 02 | BrandMoment | `BrandMomentView.swift` | ✅ | ✅ | ✅ | — |
| 03 | QuickScan | `QuickScanView.swift` | ✅ | ✅ | ✅ | — |
| 04 | GoalSelection | `GoalSelectionView.swift` | ✅ | ✅ | ✅ | — |
| 05 | FocusAreaReveal | `FocusAreaRevealView.swift` | ✅ | ✅ | ✅ | — |
| 06 | SupplementRecommendation | `SupplementRecommendationView.swift` | ✅ | ✅ | ✅ | — |
| 07 | GlowScanInvitation | `GlowScanInvitationView.swift` | ✅ | ✅ | ✅ | — |
| 08 | Auth | `AuthView.swift` (or similar) | ✅ | ✅ | ✅ | 🟢 |

### Group 02 — Core tabs (Agent A2)
| # | Screen | Swift file | Audit | Mockup | Swift plan | Shipped |
|---|--------|-----------|:-----:|:------:|:----------:|:-------:|
| 09 | Home | `HomeView.swift` | ✅ | ✅ | ✅ | 🟢 |
| 10 | Discover | `Discover/*.swift` | ✅ | ✅ | ✅ | 🟢 |
| 11 | Booking | `Booking/*.swift` | ✅ | ✅ | ✅ | — |
| 12 | Shop | `Shop/*.swift` | ✅ | ✅ | ✅ | — |
| 13 | Profile | `Profile/*.swift` | ✅ | ✅ | ✅ | 🟢 |

### Group 03 — Wellness features (Agent A3)
| # | Screen | Swift file | Audit | Mockup | Swift plan | Shipped |
|---|--------|-----------|:-----:|:------:|:----------:|:-------:|
| 14 | GlowScan | `GlowScan/*.swift` | ✅ | ✅ | ✅ | 🟢 |
| 15 | Biomarkers | `Biomarkers/*.swift` | ✅ | ✅ | ✅ | 🟢 |
| 16 | Protocols | `Protocols/*.swift` | ✅ | ✅ | ✅ | 🟢 |
| 17 | Progress | `Progress/*.swift` | ✅ | ✅ | ✅ | 🟢 |

### Group 04 — Vision features (Agent A4)
| # | Screen | Swift file | Audit | Mockup | Swift plan | Shipped |
|---|--------|-----------|:-----:|:------:|:----------:|:-------:|
| 18 | DigitalTwin | `DigitalTwin/*.swift` | ✅ | ✅ | ✅ | — |
| 19 | HormonalBalance | `HormonalBalance/*.swift` | ✅ | ✅ | ✅ | — |
| 20 | Roadmap | `Roadmap/*.swift` | ✅ | ✅ | ✅ | — |

### Group 05 — Services & rituals (Agent A5)
| # | Screen | Swift file | Audit | Mockup | Swift plan | Shipped |
|---|--------|-----------|:-----:|:------:|:----------:|:-------:|
| 21 | InStore | `InStore/*.swift` | ✅ | ✅ | ✅ | — |
| 22 | Nutrition | `Nutrition/*.swift` | ✅ | ✅ | ✅ | — |
| 23 | Restaurants | `Restaurants/*.swift` | ✅ | ✅ | ✅ | — |
| 24 | DoctorSessions | `DoctorSessions/*.swift` | ✅ | ✅ | ✅ | — |
| 25 | Rituals | `Rituals/*.swift` | ✅ | ✅ | ✅ | — |

---

## Deliverables

| Artifact | Path | Status |
|----------|------|:------:|
| Shared CSS tokens | `app-redesign/shared-tokens.css` | ✅ |
| Shared components CSS | `app-redesign/shared-components.css` | ✅ |
| Per-screen audits | `app-redesign/screens/{slug}/current-audit.md` | ✅ |
| Per-screen mockups | `app-redesign/screens/{slug}/dialog-mockup.html` | ✅ |
| Per-screen Swift plans | `app-redesign/screens/{slug}/swift-plan.md` | ✅ |
| Master deck | `app-redesign/alche-app-redesign.html` | ✅ |
| Home SwiftUI implementation | `app/Alche/Features/Home/*` | 🟢 |
| `AlcheRead` model | `app/Alche/Core/Models/AlcheRead.swift` | 🟢 |
| `AlcheReadCard` component | `app/Alche/Design/Components/AlcheReadCard.swift` | 🟢 |
| `AlcheDataStrip` component | `app/Alche/Design/Components/AlcheDataStrip.swift` | 🟢 |
| Profile body-tracking pref | `app/Alche/Features/Profile/BodyTrackingPreferencesView.swift` | 🟢 |
| xcodebuild 0 errors | `e00054e` on `redesign/editorial-longevity` | ✅ |

---

## Session summary — 2026-04-24

**FORGE run:** 7 agents launched (1 audit · 1 Swift implementer · 5 design), all delivered clean.

- **Audit:** 24 screens (all non-Home) with full diagnostic briefs. 3 caveats flagged in frontmatter.
- **Swift:** Direction C Home shipped to `redesign/editorial-longevity` · commit `e00054e` · `BUILD SUCCEEDED` · 4 new files, 4 modified, 2 orphans deleted.
- **Design:** 24 dialog-first mockups + 24 swift-plans across 5 groups. Cross-agent reusable components surfaced (AlcheReadCard, AlcheInterstitial, AlcheDataStrip, AlcheReadStamp) — consistent grammar across all 25 screens.
- **Deck:** `alche-app-redesign.html` — cover, preface, narrator kit, 5 groups × screen cards, Home spotlight with live commit info, 25-row implementation roadmap across 5 sprints, colophon. Print-ready A3.

**Next session — Sprint 1 (Voice):** Welcome · Profile · Discover → Swift ports using AlcheReadCard + AlcheInterstitial components. Follow swift-plan.md for each screen. Expected effort: 2 S + 2 M. See the roadmap table in the master deck.

---

## Sprint 1 — 2026-04-24 · SHIPPED

**FORGE run:** 4 agents (1 blend + 1 Lix + 1 Profile&Discover). All delivered, all builds green.

| Deliverable | Commit | Files |
|-------------|--------|-------|
| Lix chat onboarding subsystem | `d3884f1` | 9 created · 4 modified · 9 deleted/moved |
| Profile dialog-first | `70437f5` | 1 created (ExtendedProfile) · 2 modified |
| Discover dialog-first | `f0b7d01` | 2 modified |

**What Lix replaces:** 8 editorial onboarding cards → 1 scripted 7-turn chat + Auth handoff. Welcome, BrandMoment, QuickScan (+VM), GoalSelection, FocusAreaReveal, OnboardingContainer/View (+VM) all deleted. SupplementRecommendation moved to Shop, GlowScanInvitation moved to GlowScan/first-run banner.

**Live verification:** simulator screenshot captured at `/tmp/alche-lix-turn1.png` — iridescent droplet mascot rendered via SwiftUI Shape + radial gradient, Turn 01/07 progress, italic lowercase Lix prompts, text input field.

**v1 limitations (flagged):**
- Lix API client uses fallback reactions only. Cloudflare Worker wiring is TODO'd — URL from UserDefaults `"alche.lix.workerURL"`.
- Discover item rows have no tap destinations (next sprint).
- Orphan views in Discover folder (ContentCardView, EventCardView, EventDetailView) — keep or delete next sprint.
- Profile retrospective read is mock-generated — swap to real BookingService / ritual-log when available.
- `bodyMode` read directly from UserDefaults in Profile VM — shared `BodyModeStore` would be cleaner.

**Next sprint — Sprint 2 (Body):** Biomarkers · Protocols · Progress · Glow scan. All Wellness features. Expected: 1 L + 3 M.

---

## Sprint 2 — 2026-04-24 · SHIPPED (same session)

**Auth redesign** also landed this session (originally Sprint 3 · Flow). Six commits in one session beyond Sprint 1:

| Deliverable | Commit | Notes |
|-------------|--------|-------|
| Auth — dialog-first "signing the letter" | `6ced987` | SIGNING THE LETTER overline · italic opener (uses LixProfile.name) · 3 italic GDPR statements · Apple Sign In chrome-wrapped · USE EMAIL INSTEAD collapsed form · Encrypted · GDPR · German company footer · GDPRConsentView deleted (inline voice replaces modal) |
| Biomarkers — dialog-first | `5b1866e` | Narrated-preview state · 4 marker groups (Metabolic · Inflammation · Hormones · Cardio) · narrator interstitials · single DataSourceIndicator · out-of-range in alcheError color · BOOK BLOOD PANEL primary |
| Protocols — dialog-first | `4b043db` | Active-first read · compact italic active summary · "A few I'd put on your list" interstitial · library rows with mono overlines · 5 sample protocols |
| Progress (WellnessProgressView) — dialog-first | `c261392` | Weekly read · single curated chart (1px editorial-black path) · inline annotation on inflection · mono text row replaces segmented picker · `EditorialLineChart` private view |
| Glow scan — dialog-first | `90a26d8` | Two italic lines replace all spinners & fake camera chrome ("Hold it steady. I'll look for 30 seconds.") · appearance-based result language · qualitative strip (GLOW · HYDRATION · T-ZONE) · LOOK AGAIN primary |

**Total this session (2026-04-24):** 9 SwiftUI screens shipped to `redesign/editorial-longevity`:
Home (`e00054e`) · Lix (`d3884f1`) · Profile (`70437f5`) · Discover (`f0b7d01`) · Auth (`6ced987`) · Biomarkers (`5b1866e`) · Protocols (`4b043db`) · Progress (`c261392`) · Glow scan (`90a26d8`).

**Next sprint — Sprint 3 (Utility):** Booking · Shop · In-store · Rituals · Nutrition · Restaurants · Doctor sessions. All transactional/services. Before Sprint 3: master deck requires one more patch pass to reflect the 5 additional shipped screens (Auth + 4 wellness).

---

## Sprint 3 + 4 — 2026-04-25 · SHIPPED · Strategy 1 applied

**Strategy 1 locked:** per-screen direction selection. Each screen picks Ritual-first / Signal-first / Dialog-first based on its primary intent. Voice family preserved across all three via shared narrator kit (`AlcheReadCard`, `AlcheDataStrip`, narrator interstitial, mono primary action).

**11 commits shipped this wave:**

| Commit | Screen | Direction |
|--------|--------|:---------:|
| `6b54150` | Shop | Dialog (hybrid) |
| `5033b3f` | In-store | Ritual (GREEN audit) |
| `6c9f7b7` | Rituals | Ritual (GREEN audit) |
| `3fe87fa` | Nutrition | Signal (hybrid) |
| `2ef9831` | Restaurants | Dialog (hybrid) |
| `f9d6372` | Hormonal balance | **Signal** |
| `6648cb0` | Doctor sessions | **Dialog** |
| `3ed579e` | The map (DigitalTwin) | **Signal** |
| `e35e297` | Roadmap | **Dialog** (chapters) |
| `3b4074d` | Booking REDO | **Ritual** (replaces `ab47d6b`) |

**Booking redo highlights:** the dialog-first opener was wrong fit for transactional. Replaced with single italic next-slot hero (`Recovery / Wednesday / 15:00 · Suite 2`) + full-width `BOOK NOW →` mono primary + inline session-type filter + restrained 1-line interstitial. Slot is the moment.

**The map highlights:** "Digital Twin" → "The map" in user-facing copy. 1px anatomical silhouette path replaces concentric rings + score nodes. 2-state annotation pins (filled black for thriving, action-blue for attention). Mono cadence: `LAST RENDER · MAR 14 · NEXT · JUN 06`.

**Roadmap detox:** all fake mono metadata gone (no `VER 5.0`, no `LAT 34.05`, no `GRID REF`). 6 authored chapters from "Baseline" through "A year in, I read you again." Active chapter as italic Newsreader hero. Past compact + `DONE ✓`. Future dashed-divider muted.

**Hormonal balance:** new ViewModel (audit flagged "no VM"). 3 modes — Menstrual (28-day cycle curve, you-are-here pin), Androgen (24h cortisol, AM peak), None (default empty state with NavigationLink to Profile body-tracking). AMAB-inclusive by default.

**In-store + Rituals audit:** both **GREEN** under Strategy 1. Already Ritual-first enough. No nudge required. Audit notes saved per-screen.

**Total this session (2026-04-24/25):** **20 screens shipped** to `redesign/editorial-longevity`. Tests: 21/21 (Roadmap suite grew +3, including a fake-metadata grep guard).

**Next:** Bump to 1.2.0 build 4, archive, upload to TestFlight.

---

## Sprint 4 polish wave — 2026-04-25 · SHIPPED · Sub-screen Strategy 1 sweep

**Forge swarm:** 5 parallel agents polishing detail surfaces to match list-view register. List views shipped clean in the prior wave; detail views lagged with pre-Strategy-1 chrome (rating stars, dialog openers where Ritual fit, capsule pills).

**4 commits shipped this wave:**

| Commit | Screen(s) | Register |
|--------|-----------|:--------:|
| `eb90497` | Nutrition log entry | **Signal** |
| `56b3bc0` | Booking detail · slot picker · QR check-in | **Ritual** |
| `5f76e3e` | Restaurant detail · Dish detail | **Dialog** |
| `605dbfc` | Practitioner detail · Session detail · Session booking | **Dialog** |

**5th agent · Rituals notification:** GREEN audit (7/7 PASS), no commit needed. Cinematic modal already on-spec.

**Highlights:**
- **DoctorSessions:** rating chrome stripped from UI; italic pull-quotes attributed in mono micro-caps replace stars; complimentary session as mono benefit tag, not CTA; disclaimer staged twice (italic top + bordered warm-cream legal box bottom).
- **Booking:** Ritual voice carried through — italic next-slot hero, BOOK NOW/CHECK IN mono primary, mono inline session-type toggles in SlotPickerView replace pastel grid, QRCheckInView opens with "Show this at the door" italic hero (instruction not chrome).
- **Restaurants:** cuisine-specific curator openers; pills retired everywhere → mono LABEL · VALUE rows; DishDetailView gets "INDEPENDENTLY ESTIMATED NUTRITION · BY ALCHE" tag + 2x2 macro grid mirroring MacroDashboardView + new editorial calorie-split bar; signature dish as `· SIGNATURE` mono not stars.
- **Nutrition log entry:** Signal-first 2x2 grid extends MacroDashboardView pattern; 2pt hairline progress; selective-attention `· WATCH` tag fires only when one macro consumes ≥40% of daily goal.

**Tests:** 21/21 passing.

**Surfaced for follow-up cleanup** (flagged not fixed, walled off per scope):
- `RatingStarsView` declared in `PractitionerListView.swift` is now UI-orphaned. Safe deletion.
- `Practitioner.rating` and `Practitioner.reviewCount` model fields no longer consumed by UI. Deprecation candidates.
- `PractitionerDetailView` mock member tier hard-coded `.longevityPlus` — wire to `AppState.member.tier` once that exists.

**No version bump.** TestFlight build 4 still processing. These polishes batch with the next version cut.

---

## Notes

### Lix blend — 2026-04-24

Lix (the droplet mascot, shipped as a working demo at `mascot-lab/lix-impl/`) takes over onboarding. The eight editorial dialog-first cards in Group 01 collapse into one scripted 7-turn chat with Lix plus a post-chat Auth handoff. Lix speaks lowercase (character voice); Alche speaks italic (narrator voice); they are the same sensibility at two registers, and the baton-pass happens on a 0.8s black-curtain interstitial between turn 7 and Auth. Mascot disappears after onboarding — Lix's droplet form survives only as the app icon. Blend decisions and Sprint 1 guidance live in `app-redesign/LIX-BLEND.md`.

Status changes:
- **Onboarding group:** 8 screens → 1 scripted chat (Lix subsystem) + 1 handoff Auth screen. Six screens merged (Welcome / BrandMoment / QuickScan / GoalSelection / FocusAreaReveal / SupplementRecommendation-onboarding-instance). GlowScanInvitation relocates out of onboarding entirely into post-auth first-run (Group 03 / Home).
- **New subsystem:** `app/Alche/Features/Onboarding/Lix/` (LixChatView + LixChatViewModel + LixMascot + LixTurns + LixSystemPrompt + LixAPIClient + LixProfile + LixMoodState) — to be implemented in Sprint 1.
- **Old onboarding Swift files:** Welcome / BrandMoment / QuickScan / GoalSelection / FocusAreaReveal views slated for deletion once Lix subsystem lands. SupplementRecommendationView retargeted to post-auth Shop/Protocols. GlowScanInvitationView moves to Home first-run. AuthView kept and repurposed as the Lix handoff.
- **Mockup:** `app-redesign/screens/lix-chat/dialog-mockup.html` — Figma-style frame, turn 3 (age → axis), with mascot, chat history, choice chips.
- **Blend doc:** `app-redesign/LIX-BLEND.md` — full decision record: scope comparison, voice reconciliation, mascot-presence decision (option a — disappears after handoff), technical architecture, master deck patches, Sprint 1 briefings.
- **Sprint 1 scope shift:** the "Welcome" agent becomes the "Lix chat" agent — effort bumps S → L. Profile and Discover agents are unaffected; Profile inherits deferred data fields (weight, height, sleep habits) as editable defaults rather than onboarding questions.

### Audit pass — 2026-04-24
All 24 remaining screens audited (Home was already complete). Each audit lives at `app-redesign/screens/{slug}/current-audit.md` and follows the standard frontmatter + structure (purpose, structure, 3 problems with Swift line cites, dialog-first transformation, available data, tone).

Two caveats logged in frontmatter:
- **Progress** — file defines `WellnessProgressView` (renamed to avoid collision with SwiftUI's `ProgressView`).
- **DoctorSessions** — feature folder has no single entry view; audit targets `PractitionerListView`, the destination of Booking's "Wellness Sessions" CTA.
- **HormonalBalance** — all data is hard-coded constants; no ViewModel/service exists yet.

### Cross-screen patterns surfaced (to inform redesign)
1. **Legacy token violations are everywhere.** Most screens still use `RoundedRectangle(cornerRadius: AlcheRadii.md)` (8-12px) and filled `alchePrimary` blue buttons instead of 2px sharp + mono-underlined primaries. `.pickerStyle(.segmented)` appears in Discover and Progress. `.clipShape(Capsule())` filter pills appear in Restaurants and DoctorSessions — same design failure written twice.
2. **Voice is absent between data blocks.** Nearly every screen (Shop, Biomarkers, Digital Twin, Protocols, Progress, Nutrition, Restaurants) delivers dense information with zero Alche commentary connecting the blocks. Overlines announce sections; nothing speaks across them.
3. **Fictional mono metadata as costume.** Roadmap ("VER 5.0 · LAT 34.05 · GRID REF A-142"), Rituals ("VAR. 7 · H20-SEQ · [ ALCHE ]"), GlowScan ("S: 1/200 ISO 120"). Each pastes faux-technical tags that carry no real data. Editorial typography has been confused for editorial meaning — decoration masquerading as information.
4. **Mock-data honesty varies.** Biomarkers double-labels "Sample Data" (signs of unease). HormonalBalance carries no indicator at all. GlowScan renders numeric "64%" readouts during a mock live scan. This inconsistency will be load-bearing when real data starts arriving.
