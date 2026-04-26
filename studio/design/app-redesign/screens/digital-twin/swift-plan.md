---
screen: DigitalTwin
slug: digital-twin
group: vision
primary-swift-file: app/Alche/Features/DigitalTwin/DigitalTwinView.swift
status: plan
plan-date: 2026-04-24
---

# DigitalTwin — Swift Implementation Plan

**Framing:** "Digital Twin" is deleted from the UI entirely. The feature renames to **The Map**. Swift namespace can remain `DigitalTwin` for file structure continuity — only the user-facing surface changes.

---

## Files touched

| Path | Change |
|------|--------|
| `app/Alche/Features/DigitalTwin/DigitalTwinView.swift` | **Rewrite.** Renamed section, removed stacked lists, new read header + silhouette + observations. |
| `app/Alche/Features/DigitalTwin/DigitalTwinViewModel.swift` | Extend — add `readLines: [ReadLine]`, `observationLines: [ObservationLine]`, `lastRenderDate`, `nextReadDate`. |
| `app/Alche/Features/DigitalTwin/Components/BodyMapVisualization.swift` | **Simplify.** Strip interactive region hit-tests to two states: filled (thriving) / open (attention). Kill scores-on-nodes. |
| `app/Alche/Features/DigitalTwin/Components/RegionSummaryRow.swift` | **Delete.** Replaced by two inline italic sentences. |
| `app/Alche/Features/DigitalTwin/Components/RegionDetailSheet.swift` | **Keep** — accessible via map tap. Retitle sheet to region name + observation, no score hero. |
| `app/Alche/Design/Components/AlcheReadCard.swift` | **Reuse** (from Home ship). Holds the 3-line italic read. |
| `app/Alche/Design/Components/AlcheDataStrip.swift` | **Reuse.** Mono sub-line under title. |
| `app/Alche/Features/Profile/ProfileView.swift` | Update entry row label: "Digital Twin" → "The Map · 6 weeks since last read". |

---

## ViewModel additions

```swift
extension DigitalTwinViewModel {
    struct ReadLine: Identifiable, Hashable {
        let id = UUID()
        let text: String
        let emphasis: String?   // optional span styled in accent
    }

    struct ObservationLine: Identifiable, Hashable {
        let id = UUID()
        let region: String      // e.g. "gut", "sleep"
        let sentence: String    // "is restless — the smoothie week showed in your signals"
    }

    var readLines: [ReadLine] {
        let thriving = thrivingRegions.count
        let attention = attentionRegions.count
        return [
            ReadLine(text: "Across your body,", emphasis: nil),
            ReadLine(text: "\(thriving.spelledOut) regions thriving,", emphasis: "\(thriving.spelledOut) regions thriving"),
            ReadLine(text: "\(attention.spelledOut) asking for attention.", emphasis: nil)
        ]
    }

    var observationLines: [ObservationLine] {
        attentionRegions.prefix(2).map { region in
            ObservationLine(
                region: region.name.lowercased(),
                sentence: region.observation  // NEW field on RegionState — editorial line, not a score
            )
        }
    }

    var lastRenderLabel: String { "Rendered \(lastRenderDate.formatted(.dateTime.day().month(.abbreviated)))" }
    var nextReadLabel: String  { "Next re-read in \(weeksUntilNextRead) weeks" }
}
```

Model change: `RegionState` gains `observation: String?` — an authored editorial line per region ("is restless — the smoothie week showed in your signals"). Falls back to a generic line ("is asking for attention") when not yet authored.

---

## View structure (SwiftUI skeleton)

```swift
ScrollView {
    VStack(alignment: .leading, spacing: 0) {
        AlcheContextBand(left: "THE MAP · READ 03", right: "REFRESHED \(vm.daysSinceLastRead) DAYS AGO")

        HStack {
            AlcheBackLink(destination: "PROFILE")
            Spacer()
            DataSourceIndicator("Sample Data")   // mandatory per CLAUDE.md
        }
        .padding(.horizontal, AlcheSpacing.lg)

        AlcheScreenTitle(
            prefix: "The Map",
            italicDim: "— as I read you now."
        )
        AlcheMonoSubline(vm.renderCadenceLine)  // "RENDERED 18 APR · NEXT RE-READ IN 6 WEEKS"

        AlcheReadCard(lines: vm.readLines, style: .bareHero)
            .padding(.vertical, AlcheSpacing.sm)

        BodyMapVisualization(
            silhouette: .anterior,
            thriving: vm.thrivingRegions,
            attention: vm.attentionRegions,
            onTapRegion: { vm.select($0) }
        )
        .padding(.horizontal, AlcheSpacing.lg)

        ObservationsBlock(lines: vm.observationLines)

        AlcheInterstitial("In six weeks, I'll read you again. The map will have moved.")

        AlcheUtilityRow(
            kicker: "IF YOU HOLD THIS PATH",
            title: "See the projection at 12 weeks",
            arrow: "→",
            action: { vm.openProjection() }
        )

        AlcheSignatureStrip("ALCHE", role: "CARTOGRAPHER")
    }
}
.sheet(item: $vm.selectedRegion) { region in
    RegionDetailSheet(region: region)
}
```

---

## Token compliance checklist

- [ ] No rounded corners > 2px anywhere. All cards use `AlcheRadii.sharp`.
- [ ] Primary action (`AlcheUtilityRow`) uses sharp border + Space Mono kicker, no `alchePrimary` blue fill.
- [ ] Map legend swatches are 7×7 filled/open squares, not colored pills.
- [ ] Italic read uses `.font(.alcheDisplayL)` or the new `.font(.alcheRead)` token if introduced.
- [ ] No `RoundedRectangle(cornerRadius: AlcheRadii.md)` legacy chrome.
- [ ] `DataSourceIndicator("Sample Data")` appears exactly once, top-right of the back row.
- [ ] No emoji. No icons drawn as system SF Symbols with decorative intent.

---

## Copy rules (locked)

1. **Never** print the literal string "Digital Twin" in UI. Always "The Map".
2. Observation sentences authored per region, never concatenated from scores ("region X scored 74").
3. Cadence is honest: "Next re-read in N weeks" — not "real-time" or "live".
4. The word "score" does not appear in body copy. Only `.dt-map-legend` counts ("THRIVING · 3") and internal analytics.

---

## Acceptance criteria

- [ ] Screen builds (`xcodebuild` 0 errors).
- [ ] "Digital Twin" string search returns 0 hits in `Features/DigitalTwin/` view code.
- [ ] `RegionSummaryRow` file deleted; no call sites remain.
- [ ] Map renders with exactly two visual states (filled / open ring).
- [ ] Sample Data indicator visible above the fold.
- [ ] Tapping a region opens `RegionDetailSheet` with editorial observation, not a score hero.
- [ ] VoiceOver reads: title → read lines → "Body map: 3 regions thriving, 2 attention" → observations → cadence line.

---

## Open questions for master-deck integration

- Should **ProfileView** entry row also adopt "The Map" language, or keep "Digital Twin" as a reveal-later rename to avoid a Profile PR in this agent's scope? (Recommend: rename in entry row now — consistency.)
- Does the `FutureProjectionView` existing file survive as the destination of the new projection row, or is it re-scoped? (Recommend: keep file, re-enter from the utility row only — no toggle on main screen.)
