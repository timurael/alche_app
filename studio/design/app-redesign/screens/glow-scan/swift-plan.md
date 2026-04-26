---
screen: GlowScan
slug: glow-scan
group: wellness
primary-swift-file: app/Alche/Features/GlowScan/GlowScanView.swift
direction: dialog-first
status: planned
plan-date: 2026-04-24
---

# GlowScan — Swift Implementation Plan

## What changes (high level)

The camera interface becomes **quiet**. All theatrical chrome is cut. The view reduces to:

1. A dark surface with a tiny top bar (close + unified `DataSourceIndicator`).
2. A two-line italic read from Alche above the viewfinder — appearance-based, never clinical, never numeric.
3. A minimal viewfinder (four corner brackets + a faint face silhouette hint). No rotating circle. No scan line. No grid overlay.
4. A mono meta row of real-only status values (camera state, light level). Nothing fictional.
5. One primary action: `Tap to Capture · 30s`.
6. One secondary link: `See last scan →`.
7. A previous-scan echo line in Alche's voice (appearance-based) at the bottom.

Post-capture, navigation pushes to `GlowScanResultView` (separate plan) which speaks the scan back in appearance-based language.

## View structure (target)

```swift
struct GlowScanView: View {
    @State private var viewModel = GlowScanViewModel()
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        ZStack {
            Color.alcheInk.ignoresSafeArea()   // dark canvas
            VStack(spacing: 0) {
                topBar
                AlcheReadLines(                // new small component
                    lines: openingRead,
                    tone: .onDark
                )
                .padding(.horizontal, AlcheSpacing.lg)
                .padding(.vertical, AlcheSpacing.md)
                viewfinder
                metaRow
                Spacer()
                captureButton
                secondaryLink
                prevEchoRow
            }
        }
        .toolbar(.hidden)
        .onAppear { viewModel.startSession() }
    }

    private var openingRead: [String] {
        [
            "Hold it steady.",
            "I'll look for 30 seconds."
        ]
    }
}
```

### Sub-views

- `topBar` — `HStack` with `Button { dismiss() } label: { Image(systemName: "xmark") }` styled white, and a trailing `DataSourceIndicator("Sample · Mock Scan", style: .dark)` (needs a `.dark` variant).
- `viewfinder` — `ZStack` of four corner brackets (`CornerBracket` shapes) + a faint dashed `Capsule()` silhouette at 40% width. No animations.
- `metaRow` — `HStack` of three mono labels separated by 4pt muted dots. Values come from `viewModel.captureReadiness` (camera state enum: `.ready`, `.waiting`, `.lowLight`).
- `captureButton` — white-on-dark filled `AlcheButton.primaryOnDark(label, arrow)` variant. Title is `"Tap to Capture · 30s"`.
- `secondaryLink` — mono underlined link that navigates to `GlowScanHistoryView`.
- `prevEchoRow` — `HStack` of a mono tag (`"PREV · \(formattedDelta)"`) and an italic appearance-based echo, sourced from `viewModel.lastScanNarrative` (String or nil).

## ViewModel changes

Edits to `GlowScanViewModel`:

- Remove all mock numeric callouts that drove the floating "HYDRATION 64%" / "COLLAGEN INDEX 0.8" UI.
- Remove `selectedMode: ScanMode` and `ScanMode` enum entirely (the three tabs are cut).
- Add:
  - `var captureReadiness: CaptureReadiness` (computed from camera permissions + `AVCaptureDevice` light metering).
  - `var lastScanNarrative: String?` — appearance-based one-liner produced by `GlowScanNarrator.previous(from: history)`.
  - `var lastScanDelta: String` — e.g. "12 DAYS AGO", derived from `history.first?.date`.
- Keep: `history`, `startSession()`, `capture()` → pushes result to `GlowScanResultView`.

## New / renamed components

| Component | Purpose |
|-----------|---------|
| `AlcheReadLines(lines:tone:)` | Reusable italic Newsreader stacked-line read block. `tone: .onLight / .onDark`. |
| `CornerBracket(corner:)` | `Shape` that renders one of the 4 L-shaped brackets. Stroke only. |
| `GlowScanNarrator` | Utility that turns a `GlowScanResult` into an appearance-based string. Enforces vocabulary list (no "indicates", "demonstrates", "levels"). |
| `DataSourceIndicator` (extend) | Add `.dark` variant (white 60% text + 25% border). Single unified style used across all mock screens. |
| `AlcheButton.primaryOnDark` | New style: white fill, black text, 2px radius, 2px white hard shadow. |

## Data dependencies

- `GlowScanViewModel.history` — existing.
- `GlowScanResult` — existing. `GlowScanNarrator` converts this; no new fields needed.
- Camera permission via existing `AVCaptureDevice.authorizationStatus(for: .video)`.

## Accessibility notes

- Close button: `.accessibilityLabel("Close scan")`.
- Viewfinder: `.accessibilityHidden(true)` — decorative.
- Read lines: grouped as `.accessibilityElement(children: .combine)`, label "Alche: Hold it steady. I'll look for 30 seconds."
- Meta row: combined label, e.g. "Camera ready, front camera, good light."
- Capture button: `.accessibilityHint("Starts a 30 second mock skin scan.")`.
- All white-on-dark text tested at min 4.5:1 against `Color.alcheInk`.
- VoiceOver users get the same italic read text (not the decorative viewfinder).

## Compliance gates

- [x] No clinical language. Vocabulary whitelist enforced in `GlowScanNarrator`: only "looks," "reads," "we see," "your skin," "brightness," "hydrated-looking," "tired-looking."
- [x] No numeric callouts during live scan. Post-capture detail view may show raw numbers in a collapsed section, but only prefaced by an appearance-based sentence.
- [x] One unified `DataSourceIndicator` (top right only). No duplicates.
- [x] Sharp 2px radii only; hard drop shadow.
- [x] No emoji. Unicode `×` for close, `→` for arrow.

## Effort estimate

- `AlcheReadLines` shared component: **1h**.
- `CornerBracket` + viewfinder refactor (delete existing animation state): **1.5h**.
- `GlowScanNarrator` utility + vocabulary tests: **1.5h**.
- `DataSourceIndicator.dark` variant + `AlcheButton.primaryOnDark`: **1h**.
- `GlowScanView` rewrite + ViewModel trim: **2h**.
- A11y audit + snapshot tests: **1h**.

**Total: ~8h (1 dev day).**

## Rollout notes

- This is a breaking change to `GlowScanViewModel` (removes `selectedMode`). Downstream: `GlowScanResultView` may branch on mode — remove those branches in the same PR.
- Feature-flag if desired (`AlcheFlags.glowScanDialogFirst`) to A/B against the existing cinematic version, but recommend shipping direct — the existing version crosses the clinical-language line per CLAUDE.md.
