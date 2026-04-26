---
screen: BrandMoment
slug: brand-moment
status: designed
design-date: 2026-04-24
---

# BrandMoment — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Onboarding/BrandMomentView.swift`

## What changes vs current

**Remove:**
- Single centered "Alche." wordmark as the only content (current lines 13-16)
- `Task.sleep(for: .seconds(4.0))` fixed 4-second hold (line 26)
- Fade-in → hold-only animation without a voice payload (lines 19-28)

**Add:**
- Three-line italic Newsreader read spoken in first person
- "— Alche" italic signature beneath a 28pt horizontal rule
- "FIRST READ · OPENING" mono stamp with the 4-cell grid mark (1 blue cell)
- Tap-anywhere skip gesture + persistent top-right "Tap to continue" affordance
- Quiet bottom footnote: "CURTAIN · 2.5S" + a mono progress bar that advances as the timer runs
- Reduce-motion branch that instantly shows the read and auto-advances after 800ms instead of 2500ms

**Keep:**
- Black full-bleed `Color.alcheEditorialBlack` surface — retained because it now holds voice, not just a logo
- Auto-advance navigation to `.quickScan` after the timer
- `OnboardingCoordinator.advance(from: .brandMoment)` hook

## View structure (top to bottom)

1. **Top-right SkipControl** (position overlay) — "TAP TO CONTINUE" mono 9pt white-at-55% with underline; full-screen `TapGesture` wrapper also triggers skip
2. **Centered VStack** (vertically centered via `GeometryReader` or `.frame(maxHeight:.infinity, alignment:.center)`) containing:
   - `HStack` with 4-cell `StampMark` + "FIRST READ · OPENING" mono 9pt
   - 24pt spacer
   - `AlcheReadBlock` three italic lines on white — "I'll be reading you / every morning. / Let's start by *listening.*" with the word "listening" underlined in `Color(hex: 0xD1DEFC)` (light-primary for dark surface)
   - 36pt spacer
   - `HStack` — 28x1 rule + italic "— Alche" signature in Newsreader 18pt
3. **Bottom footnote HStack** pinned 32pt from bottom — "CURTAIN · 2.5S" mono + 8-segment progress bar, filling in time with the animation

No tab bar (pre-auth).

## ViewModel changes

- Convert current inline `Task.sleep` into a `@StateObject BrandMomentTimer` observable that owns a `TimeInterval` progress and emits `.complete`.
- Read `@Environment(\.accessibilityReduceMotion)` — if true, set `duration = 0.8s` and skip the sequential line fade.
- New computed property `minuteOfDay` → conditions whether the read says "morning" vs "today" (optional v2, not blocking launch).

## New components needed

- `AlcheStampMark` — the 4-cell 2x2 grid with one primary-tinted cell. Lives in `Design/Components/AlcheStampMark.swift`, parameterised for dark/light surface.
- `AlcheProgressBar(segments:Int, filled:Int)` — 8x2 mono progress used here and potentially in QuickScan's footer progress.
- Reuses `AlcheReadBlock` from Welcome with a `palette: .onDark` variant.

## Data dependencies

- None (pre-auth).
- `Locale.current.language.languageCode` to choose EN/DE strings.
- `@Environment(\.accessibilityReduceMotion)`.

## Accessibility / localization notes

- **Reduce motion:** no sequential line fade; all content appears at 0s; timer shortened to 0.8s; signature label for VoiceOver remains.
- **VoiceOver:** one accessible element with combined label "Alche introduces itself. I'll be reading you every morning. Let's start by listening. Signed, Alche." + a "Tap to continue" action hint.
- **Repeat visitors:** `UserDefaults` flag `brandMoment.seen` — if true, screen reduces to 600ms and auto-advances (no curtain re-play).
- **Localization (EN/DE):**
  - `brand.stamp` = "FIRST READ · OPENING" / "ERSTE LESUNG · AUFTAKT"
  - `brand.line1` = "I'll be reading you" / "Ich werde dich lesen"
  - `brand.line2` = "every morning." / "jeden Morgen."
  - `brand.line3` = "Let's start by listening." / "Fangen wir mit Zuhören an."
  - `brand.signature` = "— Alche" (unchanged)
  - `brand.skip` = "Tap to continue" / "Tippen zum Fortfahren"

## Estimated effort

**S** — 2 hours. Main work is the dark-surface variant of `AlcheReadBlock` and the progress-bar primitive.
