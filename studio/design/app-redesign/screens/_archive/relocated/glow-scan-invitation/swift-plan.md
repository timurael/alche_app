---
screen: GlowScanInvitation
slug: glow-scan-invitation
status: designed
design-date: 2026-04-24
---

# GlowScanInvitation — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Onboarding/GlowScanInvitationView.swift`

## What changes vs current

**Remove:**
- Centered 56pt `faceid` SF Symbol in `alchePrimary` blue (lines 14-18)
- Centered `alcheDisplayL` italic "See where your / skin stands" headline (lines 22-25)
- Centered `alcheBody` subtitle (lines 27-31)
- Filled blue "Start GlowScan" rounded primary button (line 41)
- Ghost "Skip for now" secondary button (line 47)
- Fade-in-on-appear animation (lines 56-60)

**Add:**
- `AlchePrevEcho` carrying the user's own skin QuickScan answer as a quoted echo
- `AlcheStampMark` + "ALCHE · A FIRST LOOK"
- `AlcheReadBlock` — 4 italic lines, last line dimmed, line 3 has underlined primary "Let's look once"
- `GlowCaptureCard` — 1px hairline bordered card with italic head, muted subline, and a small 4-corner geometric scan mark (no SF Symbol)
- `PrivacyPromiseList` — 3 rows: ● encrypted local-only, ● deleted after analysis, ○ skip-is-safe
- `AlcheInterstitial` — "If now isn't the time, that's fine. I'll ask again on a morning with better light."
- `AlchePrimaryActionButton` — "START THE SCAN · 60 SEC →"
- `AlcheSecondaryLink` — "Not now · Take me home"
- Footnote mono row — "DRAFT · BASELINE" + "CAMERA · FRONT · PRIVATE"

**Keep:**
- 60-second duration mention (moved into capture card label)
- Skip path to Home
- Start-scan path to `GlowScanCaptureView`
- Fall-through logic: if `appState.userWellnessProfile.selectedGoals.contains(.radiantDefense)` is false, skip this screen automatically (existing intent, now documented)

## View structure (top to bottom)

1. **QSTopBar** — "← Back" + "STEP 07 · OF · 08"
2. **AlchePrevEcho** — member's QuickScan skin answer as quote
3. **StampRow** — mark + "ALCHE · A FIRST LOOK"
4. **AlcheReadBlock** — 4 italic lines
5. **GlowCaptureCard** — label / italic head / subline / geometric corner mark
6. **PrivacyPromiseList** — 3 rows
7. **AlcheInterstitial** — graceful out copy
8. **AlchePrimaryActionButton** — start scan
9. **AlcheSecondaryLink** — not now
10. **Footnote** — mono row

No tab bar.

## ViewModel changes

- Add `hasSkinFocus: Bool` — `selectedGoals.contains(where: \.relatesToSkin)` — used by the onboarding coordinator to skip this screen entirely when false
- Add `quotedSkinAnswer: String?` — returns the user's own QuickScan skin answer if present
- Add `autoAdvanceIfNoSkinFocus()` — coordinator hook; fires `.scanSkipped` navigation

## New components needed

- `GeometricScanMark` — 4-corner editorial SVG/Shape primitive with a primary-tinted center dot. Lives in `Design/Components/GeometricScanMark.swift`. Reusable for any "scan frame" moment.
- `PrivacyPromiseRow(marker:text:)` — simple 2-column row, marker is ● (filled) / ○ (outline). Reusable for any consent list.
- Reuses `AlchePrevEcho`, `AlcheStampMark`, `AlcheReadBlock`, `AlcheInterstitial`, `AlchePrimaryActionButton`, `AlcheSecondaryLink`.

## Data dependencies

- `appState.userWellnessProfile.quickScanAnswers` — for the echo quote
- `appState.userWellnessProfile.selectedGoals` — for the skip-fall-through
- `appState.onboardingStep` — for the "07 · OF · 08" crumb
- No camera permission request here — that happens on the capture screen itself (correct separation)

## Accessibility / localization notes

- **VoiceOver:** single accessible group. "Alche, a first look. You told me your skin is where you see the years. Let's look once, together. Then we build from what we see. Your scan lives on your phone, encrypted. Deleted after analysis unless you pin it. Skip and we'll set a baseline later."
- **Dynamic Type:** `GlowCaptureCard` head wraps to 2 lines; subline wraps to 3 at AX3.
- **Reduce motion:** no entrance fade.
- **Localization (EN/DE):**
  - `glow.stamp` = "ALCHE · A FIRST LOOK" / "ALCHE · ERSTER BLICK"
  - `glow.read.line1..4` per EN/DE
  - `glow.capture.label` = "GlowScan · 60 seconds"
  - `glow.capture.head` = "A quiet photograph, front-lit — not a Face ID."
  - `glow.capture.sub` = "Indirect window light, no makeup if possible. I'll measure tone, hydration signal, even-ness — nothing else."
  - `glow.privacy.1..3` per EN/DE
  - `glow.interstitial` + `glow.primary.cta` + `glow.secondary.cta`
- **Consent clarity:** the promise rows are not the GDPR consent — only a plain-language summary. Actual consent is collected on `GlowScanCaptureView` before camera activation.

## Estimated effort

**S** — 2 hours once shared components exist. The `GeometricScanMark` shape takes 30 minutes on its own.
