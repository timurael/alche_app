---
screen: Rituals
slug: rituals
group: services
primary-swift-file: app/Alche/Features/Rituals/RitualNotificationView.swift
plan-date: 2026-04-24
---

# Rituals — Swift implementation plan

## Intent

The ritual notification modal is already closest to the dialog-first vocabulary — single read, strong typography, dark cinema. This plan tightens it: **strip the fake mono costume**, unify title + subtitle into one italic line, add a one-line whispered rationale, surface the actual ritual steps inline, and cut the 2.4-second staggered entrance down to a single 400ms fade that respects `reduceMotion`.

This is where Home's "Begin" lands. It carries one moment, beautifully.

## Key behaviour changes

1. **Fake mono killed.** Delete `"VAR. 7"`, `"H20-SEQ"`, and `"[ ALCHE ]"`. Replace the meta row with *real* data only: duration, streak, last occurrence.
2. **Title unified.** "Cellular Hydration" / "Hydration" split becomes one line: `"Hydration ritual."` — 46pt italic Newsreader. If the ritual has a longer title, it wraps normally.
3. **Rationale line added below title.** One italic sentence explaining *why now* — derived from time since last ritual + biomarker context. Example: "It's been *3 hours* since your last glass. Twelve minutes will set you right."
4. **Steps surfaced.** Three editorial numbered rows visible without tapping Begin — member sees what they're committing to. Each row: mono 01/02/03, Noto 500 step title, 12pt muted sub instruction, trailing mono duration.
5. **Entrance animation.** Single 400ms opacity+6pt-slide-up on mount. Respect `accessibilityReduceMotion` — instant show when enabled.
6. **Begin button shows duration.** `"Begin · 12 min"` — no ambiguity on commitment length.
7. **Dismiss becomes "Remind me in an hour"** — a real action, not just a close. Back chevron still dismisses entirely.

## File-by-file

### `Features/Rituals/RitualNotificationView.swift` — rewrite

```swift
struct RitualNotificationView: View {
    let ritual: Ritual           // model change below
    let onBegin: () -> Void
    let onSnooze: () -> Void
    let onDismiss: () -> Void

    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @State private var appeared = false

    var body: some View {
        ZStack(alignment: .top) {
            RitualBackground()       // single gradient, static, no vignette layer
                .ignoresSafeArea()

            VStack(alignment: .leading, spacing: 0) {
                RitualHeader(onDismiss: onDismiss)

                AlcheReadStampDark(label: "A RITUAL FOR NOW")
                    .padding(.top, AlcheSpacing.lg)

                VStack(alignment: .leading, spacing: AlcheSpacing.md) {
                    Text(ritual.title)
                        .font(.alcheDisplayXL)   // 46pt italic Newsreader
                        .foregroundStyle(.white)

                    Text(ritual.rationale)        // markdown w/ emphasis
                        .font(.alcheDisplayS)
                        .foregroundStyle(.white.opacity(0.7))
                }
                .padding(.horizontal, AlcheSpacing.lg)
                .padding(.top, AlcheSpacing.md)

                RitualDataStrip(
                    durationMinutes: ritual.durationMinutes,
                    streakDays: ritual.streakDays,
                    lastAt: ritual.lastOccurredAt
                )

                RitualStepsList(steps: ritual.steps)
                    .padding(.horizontal, AlcheSpacing.lg)

                Spacer(minLength: 0)

                RitualFooter(
                    beginLabel: "Begin · \(ritual.durationMinutes) min",
                    onBegin: onBegin,
                    onSnooze: onSnooze
                )
            }
            .opacity(appeared ? 1 : 0)
            .offset(y: appeared ? 0 : 6)
            .animation(reduceMotion ? .none : .easeOut(duration: 0.4), value: appeared)
            .onAppear { appeared = true }
        }
    }
}
```

### `Features/Rituals/Models/Ritual.swift` — edit or add

```swift
struct Ritual: Identifiable, Sendable, Hashable {
    let id: UUID
    let title: String                   // "Hydration ritual."
    let rationale: AttributedString     // italic, with one emphasised phrase
    let durationMinutes: Int
    let streakDays: Int
    let lastOccurredAt: Date?
    let steps: [RitualStep]

    // REMOVE: variantLabel, sequenceLabel. Do not pass "VAR. 7" / "H20-SEQ" anywhere.
}

struct RitualStep: Identifiable, Sendable, Hashable {
    let id: UUID
    let title: String                   // "Pour 500 ml, room temperature"
    let instruction: String?            // "Add a pinch of sea salt if you have it"
    let durationMinutes: Int
}
```

### `Features/Rituals/Components/RitualHeader.swift` — new

- 3-column `HStack`: dismiss button (left) · wordmark "alche" italic 20pt (center) · spacer 32×32 (right).
- Dismiss: 32×32 rect, 1pt white 25% border, 2pt radius, arrow-left glyph.
- **No `"[ ALCHE ]"` mono chip on the right.**

### `Features/Rituals/Components/AlcheReadStampDark.swift` — new

- Inverted version of `AlcheReadStamp`: white stamp dots (third still `.alchePrimary`), white mono label.

### `Features/Rituals/Components/RitualDataStrip.swift` — new

- `HStack(spacing: 10)` mono 10pt.
- 3 groups with 3pt dot separators:
  - `DURATION · 12 MIN`
  - `STREAK · 6 DAYS` (or hide if streak == 0)
  - `LAST · 11:40` (or hide if nil)
- All values in bold white; keys in 55% white.
- Padding: 0 lg horizontal, 20 bottom, 0 top (sits right under rationale).

### `Features/Rituals/Components/RitualStepsList.swift` — new

- `VStack(spacing: 0)`.
- Top 1pt 18%-white divider. Each step has a bottom 1pt 12%-white divider.
- Each step row: `Grid` 3 cols — `32pt` num · flexible title/sub · trailing `dur`.
- Title: Noto 500 14.5pt white. Instruction: Noto 400 12pt 55%-white.
- Duration: mono bold 10pt 60%-white.

### `Features/Rituals/Components/RitualFooter.swift` — new

- `VStack(spacing: 14)` pinned to bottom via outer `Spacer`.
- Begin button: full-width, white background, black text, mono bold 11pt, 2pt radius, 16pt padding.
  - Left label `Begin · N min`, right `→` arrow.
- Snooze: transparent button, mono 10pt white-60, underlined, centered — `"Remind me in an hour"`.
- Bottom padding 36 for home-indicator clearance.

### `Features/Rituals/Components/RitualBackground.swift` — new

- Single `LinearGradient` top→bottom: `#0d121b` → `#1a2538` (55%) → `#0d121b`.
- Optional subtle noise overlay at 3% opacity (`Image("alche-grain")` if present) — no vignette layer, no water-background image.
- No animated blur.

### Components to delete / archive

- Water-background gradient stack + vertical drop line (lines 26-95 of current).
- Right-side `[ ALCHE ]` mono meta (line 118).
- `VAR. 7 · H20-SEQ` meta row (line 156).
- Staggered `animateIn()` chain and all its timers (lines 200-206).
- Parameter properties `variantLabel`, `sequenceLabel` — dropped from all call sites.

## Animation discipline

- Only one mount animation: 0.4s ease-out fade + 6pt translateY.
- `@Environment(\.accessibilityReduceMotion)` short-circuits to identity.
- No chained delays. No 1.7-second footer entrance. The Begin button must be tappable within ~100ms of present.

## Design token compliance

- Typography via `.font(.alcheDisplayXL / DisplayS / alcheMono)` only.
- No system `.font(.body)`.
- Colors: `.white` / `.white.opacity(x)` / `.alchePrimary` (for stamp accent) only.
- Radii: `AlcheRadii.sm` on Begin button and dismiss box.
- No shadows on dark — only subtle gradient.

## Localisation

- `ritual.title`, `ritual.rationale` (AttributedString with one emphasised range), and step `title` / `instruction` all translatable.
- Duration formatting via `DateComponentsFormatter` locale-aware (`"12 min"` EN / `"12 Min."` DE).
- Data strip keys (`DURATION`, `STREAK`, `LAST`) translated and kept ≤ 10 chars to preserve layout.

## Acceptance criteria

- [ ] No string `"VAR."`, `"H20-SEQ"`, `"[ ALCHE ]"` in any Rituals source file.
- [ ] No `variantLabel` / `sequenceLabel` parameters on `RitualNotificationView`.
- [ ] Title and rationale render in two lines, not split across a weight shift.
- [ ] Three steps render with mono 01/02/03, title, optional instruction, trailing duration.
- [ ] Begin button visible (hit-testable) within 500ms of first render.
- [ ] `accessibilityReduceMotion = true` skips the fade entirely.
- [ ] "Remind me in an hour" snooze actually schedules a local notification 60 minutes out (via `UNUserNotificationCenter`).
- [ ] Back-chevron dismisses modal fully.
- [ ] `DataSourceIndicator` — not shown here (this is a notification surface, not a mock-data inventory screen).
- [ ] `xcodebuild` passes with 0 errors.

## Out of scope

- Ritual-in-progress UI (step-by-step timer flow — lives in its own view after Begin tap).
- Post-completion reflection card.
- Haptic pattern during steps (future).
