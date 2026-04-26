---
screen: Profile
slug: profile
status: designed
design-date: 2026-04-24
---

# Profile — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Profile/ProfileView.swift`

## What changes vs current

**Remove:**
- 96pt circle avatar + `alcheDisplayL` italic name + "FOUNDING MEMBER · TIER" overline (lines 12-47). Collapses to a mono identity row: 28pt initials square + name in mono + session count on the right.
- Wellness Snapshot 3-column Energy/Sleep/Mood grid + tap-to-checkin prompt (lines 53-93). This feature moves to Home; Profile is not a daily check-in surface.
- `PersonalizationLevelView` card chrome (lines 96-160). Replaced by a single italic offer card: "Want me to read you more closely? →".
- Five-row card-based settings menu with chevrons (lines 163-213). Replaced by a mono underlined row list with right-aligned value text.
- Full-width red "Sign Out" button (lines 216-229). Becomes a single mono danger row at the foot of the settings list.
- Large footer "MEMBER SINCE MARCH 2026" (lines 232-243). Moved to top context band.

**Add:**
- `AlcheReadCard` (shared) reading history-as-letter: "We've been reading together since March — 41 days, / 12 sessions, 3 goals on the wall."
- `AlcheDataStrip` (shared) — checkin count / LED count / scan count / goals live, mono.
- `PersonalizationOfferCard` — sharp 2px border, hard shadow, italic "Want me to read you more closely? →". NavigationLink to `DeepProfileView`.
- `AlcheInterstitial` — narrator between offer and body-tracking: "One thing worth deciding: how I track your body."
- **`BodyTrackingPreferenceRow`** (new, prominent) — bordered block with:
  - Mono kicker "BODY TRACKING"
  - Noto Sans title "How I read your cycle" + chevron → pushes `BodyTrackingDetailView` with fuller copy.
  - Italic Newsreader sub-explanation "Menstrual phase, androgen rhythm, or off — off is the default because not every body is a cycle."
  - Inline three-option radio row: `Menstrual / Androgen / Off`, **default Off**.
- `SettingsList` — mono row list: Membership / Notifications / Privacy & Data / Language / Refer a Friend / Sign out (danger-red). Each row: underlined mono label left, mono muted value right.

**Keep:**
- `ProfileViewModel` data surfaces (user, membership, checkinHistory, selectedLocale, personalizationLevel).
- Destinations (`DeepProfileView`, `SupplementRecommendationView`, `MembershipView`, `NotificationPreferencesView`, `PrivacyDataView`, `LanguageView`, `ReferralView`).
- `CheckinSheet` exists but is no longer invoked from Profile (Home owns it now).

## View structure (top to bottom)
1. `ContextBand` — "MEMBER SINCE {MONTH}" / "{TIER} · TIER II"
2. `QuietIdentityRow` — initials square · NAME · "SESSION {n}"
3. `AlcheReadStamp` — "ALCHE · WHAT WE'VE DONE TOGETHER"
4. `AlcheReadCard` — retrospective read
5. `AlcheDataStrip` — history counts
6. `PersonalizationOfferCard` — italic single-line offer
7. `AlcheInterstitial` — "One thing worth deciding…"
8. `BodyTrackingPreferenceRow` — kicker + title + chevron + sub + radio options
9. "SETTINGS" mono head
10. `SettingsList` — six rows including danger Sign out
11. `AppFooter` — "ALCHE · BERLIN · V1.0" centered mono

## ViewModel changes
- Add `retrospectiveRead: AlcheRead` — three italic lines derived from `(daysSinceJoined, ledSessionCount, activeGoalCount)`.
- Add `historyCounts: HistoryCounts` — `(checkins, ledSessions, glowScans, activeGoals)`.
- Add **`bodyTrackingMode: BodyTrackingMode`** — new enum `{ .menstrual, .androgen, .off }` with `.off` as the **default**. Persisted to `UserDefaults` and, when wired, synced to Supabase `user_preferences.body_tracking_mode`.
- Add `updateBodyTrackingMode(_:)` — writes preference, publishes change so Home's cycle band (if re-introduced elsewhere) appears/disappears accordingly.
- Add `signOut()` — confirmation alert before actual sign-out (one-tap danger is too easy to mis-fire).

## New components needed
- `AlcheReadCard` (shared)
- `AlcheDataStrip` (shared)
- `AlcheInterstitial` (shared)
- `AlcheReadStamp` (shared)
- `QuietIdentityRow` (Profile-local)
- `PersonalizationOfferCard` (Profile-local; could graduate to shared)
- `BodyTrackingPreferenceRow` + `BodyTrackingDetailView` (Profile-local)
- `SettingsList` + `SettingsRow` (Profile-local)

## Data dependencies
- `viewModel.user.displayName`, `.initials`, `.createdAt`
- `viewModel.membership.tier`, `.renewalDate`
- `viewModel.checkinHistory.count`
- `BookingService.ledSessionCount(for: user)`
- `GlowScanService.scanCount(for: user)`
- `GoalService.activeGoals(for: user).count`
- `UserDefaults.standard` for `bodyTrackingMode` (key: `"com.alche.bodyTrackingMode"`)
- `NotificationPreferences.summary` → drives "DAILY READ · ON" right-side value
- `LocaleSelection.current` → drives "EN" right-side value
- `MembershipService.renewalDateFormatted`

## Accessibility / localization notes
- **Body tracking radio group**: `.accessibilityElement(children: .contain)`, `role: .radiogroup`, each option announces as "Menstrual / Androgen / Off, selected / not selected. Double-tap to change." German: "Menstruation / Androgen / Aus".
- The explanatory italic sub must localize without sounding clinical. German draft: "Menstruationsphase, Androgen-Rhythmus oder aus — aus ist voreingestellt, denn nicht jeder Körper ist ein Zyklus."
- Default is **Off** — when a new account is created, `bodyTrackingMode = .off`. No cycle UI appears in Home until the user opts in here. This is the AMAB/queer-inclusion fix.
- Sign out row must show a confirmation alert. Single tap on a mono text link can fire too easily.
- Initials square is decorative beside the mono NAME; mark `.accessibilityHidden(true)` and combine name + session into one element ("Marlene K., session 41").
- Entire settings list: each row hits 44pt tap target (padding padded to match).
- `BodyTrackingPreferenceRow` is the first surface where we write the preference. Make sure the preference exists before the Home surface tries to read it (ship order: Profile first, then Home's cycle band removal lands together).

## Estimated effort
L (body-tracking model + migration + UI + copy + detail view)
