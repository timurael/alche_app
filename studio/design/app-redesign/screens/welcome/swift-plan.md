---
screen: Welcome
slug: welcome
status: designed
design-date: 2026-04-24
---

# Welcome — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Onboarding/WelcomeView.swift`

## What changes vs current

**Remove:**
- `Color.alcheSurface` 30%-width right panel (current lines 13-19)
- Decorative 3-cell `Rectangle().opacity(...)` grid (current lines 54-62)
- "Your longevity, curated." three-line italic hero + primary-color divider accent (lines 33-43)
- Subtitle "The operating system for living longer. Treatments. Nutrition. Science. Community." (lines 46-51)
- Filled `Color.alchePrimary` rounded "BEGIN" button (lines 70-80)
- Footer "V.1.04 — PRIVATE RELEASE" + lock HStack (lines 101-112)

**Add:**
- `WelcomeMasthead` subview at top: small lowercase "alche." wordmark left, 2-line mono stamp right ("PRIVATE RELEASE" / "V · 1.04")
- `WelcomeRead` subview: three italic Newsreader lines, middle line contains a `primary`-tinted underlined span (use `Text` concatenation with `.foregroundColor(.alchePrimary)` + `.underline()`)
- `WelcomeSignature` subview: 28px horizontal rule `Rectangle().frame(width:28,height:1)` + mono caps "ALCHE · YOUR READ"
- `AlchePrimaryActionButton` (the new dialog-first 2px-sharp filled-black mono button with hard drop shadow and trailing arrow) — "BEGIN YOUR READ →"
- Secondary mono underlined link — "Already a member · Sign in" — navigates to Auth

**Keep:**
- `GeometryReader` outer frame layout intent (but simplify — no surface panel)
- `.animation(.easeOut(duration: 0.8))` subtle fade on mount (gated by `@Environment(\.accessibilityReduceMotion)`)
- Navigation intent: primary → `BrandMoment`, secondary → `Auth` (existing member)

## View structure (top to bottom)

1. **WelcomeMasthead** — padding(.top, 56) / horizontal 24 — wordmark + release stamp
2. **Spacer(minLength: 80)** — breathing room above the read
3. **WelcomeRead** — three italic lines; line 2 has primary-tinted underlined "listen to your body"
4. **WelcomeSignature** — rule + "Alche · Your Read"
5. **Spacer()** — expands to push actions down
6. **Actions VStack** pinned 56pt from bottom — primary button + secondary link
7. **Footnote HStack** pinned 20pt from bottom — "EN · BERLIN" left, "● INVITATION OPEN" right, 9pt mono muted

No tab bar (pre-auth).

## ViewModel changes

- No ViewModel needed — this is a presentation-only screen.
- Add `WelcomeNavigationIntent` enum (`.begin`, `.signIn`) passed up to the onboarding coordinator.
- Read `Locale.current.language.languageCode` to toggle read copy EN/DE via `LocalizedStringKey` (preserve italic formatting in `.strings` as `Newsreader italic` token).

## New components needed

- `AlchePrimaryActionButton(label:trailingIcon:action:)` — 2px sharp, filled `Color.alcheEditorialBlack`, Space Mono 11pt / letterSpacing 0.22em / uppercase, trailing `Text("→")` in 13pt Space Mono regular, hard drop shadow `(x: 2, y: 2, radius: 0)`. Reused across all onboarding screens.
- `AlcheSecondaryLink(label:action:)` — centered Space Mono 10pt underlined, muted color. Reused everywhere.
- `AlcheReadBlock(lines:highlightLineIndex:highlightRange:)` — italic Newsreader three-line block; accepts a string range to underline in `alchePrimary`. Reused on many onboarding screens.

## Data dependencies

- None (pre-auth).
- Reads `Locale.current` for EN/DE copy switch.
- Reads `@Environment(\.accessibilityReduceMotion)` for the entrance fade.

## Accessibility / localization notes

- **Dynamic Type:** the italic Newsreader scales via `.font(.custom("Newsreader-LightItalic", size: 32, relativeTo: .largeTitle))`. Test at XXL + AX3 — the three lines must wrap rather than truncate.
- **VoiceOver:** announce as one accessible element — "Alche. Some apps count steps. This one will listen to your body and read back what it hears." Followed by "Button. Begin your read." and "Button. Already a member. Sign in."
- **Localization strings (EN/DE):**
  - `welcome.read.line1` = "Some apps count steps." / "Manche Apps zählen Schritte."
  - `welcome.read.line2` = "This one will listen to your body" / "Diese hört deinem Körper zu"
  - `welcome.read.line3` = "and read back what it hears." / "und liest dir vor, was sie hört."
  - `welcome.signature` = "ALCHE · YOUR READ" / "ALCHE · DEINE LESUNG"
  - `welcome.cta.primary` = "Begin your read" / "Lesung beginnen"
  - `welcome.cta.secondary` = "Already a member · Sign in" / "Schon dabei · Anmelden"
- **Reduce motion:** disable the 0.8s fade; content appears immediately.

## Estimated effort

**S** — under 2 hours once `AlchePrimaryActionButton`, `AlcheSecondaryLink`, and `AlcheReadBlock` shared components exist (those components take another 2 hours; amortized across the onboarding group).
