---
screen: Roadmap
slug: roadmap
group: vision
primary-swift-file: app/Alche/Features/Roadmap/RoadmapView.swift
status: plan
plan-date: 2026-04-24
---

# Roadmap — Swift Implementation Plan

**Rename:** "Roadmap" → **"The Arc"** in UI. File namespace stays for continuity.

**Detox contract:** Zero fictional metadata in UI. The following strings never appear anywhere on this screen:
- `VER 5.0` / any `VER *` badge
- `LAT 34.05` / any geographic coordinate
- `GRID REF A-142` / any grid reference
- `PROJECT: LONGEVITY / ROADMAP`
- `SYNC AUTO`

This is enforceable by CI-level grep if desired.

---

## Files touched

| Path | Change |
|------|--------|
| `app/Alche/Features/Roadmap/RoadmapView.swift` | **Rewrite.** New structure: context band → read → honest strip → chapter list → interstitial → escape. Bell removed. |
| `app/Alche/Features/Roadmap/RoadmapViewModel.swift` | **Extend.** Authored read lines + observation-aware chapter summaries. |
| `app/Alche/Core/Models/RoadmapPhase.swift` | **Extend** or create. Add `authoredTitle`, `chapterSummary`, `realDateRange`, keep `status`. |
| `app/Alche/Features/Roadmap/Components/PhaseCardView.swift` | **Rewrite.** Becomes `ChapterRow` — hairline rule + node + authored title + summary + optional progress bar. |
| `app/Alche/Features/Roadmap/Components/TimelineNodeView.swift` | **Simplify** to three states (filled / ringed / dashed). No scale animation, no gradient. |
| `app/Alche/Features/Roadmap/Components/BlueprintGridBackground.swift` | **Delete.** No more costume grid. |
| `app/Alche/Design/Components/AlcheReadCard.swift` | **Reuse.** 3-line italic read. |

---

## Model

```swift
struct RoadmapPhase: Codable, Identifiable, Sendable, Hashable {
    enum Status: String, Codable, Sendable { case done, active, locked }

    let id: UUID
    let ordinal: Int            // 1...5
    let phaseLabel: String      // "CHAPTER 2 · CELLULAR REPAIR"
    let authoredTitle: String   // "The quiet work."
    let chapterSummary: String  // authored paragraph in Alche's voice
    let dateRange: DateInterval?   // real, nil for "summer" / "autumn" labels
    let loosenDateLabel: String?   // "Summer" / "Autumn" for far-future chapters
    let status: Status
    let weeksInChapter: Int?        // only for .active — drives progress bar
    let weeksTotalInChapter: Int?

    var whenLabel: String {
        if let range = dateRange {
            let f = Date.FormatStyle().day().month(.abbreviated)
            return "\(range.start.formatted(f)) – \(range.end.formatted(f))".uppercased()
        }
        return loosenDateLabel?.uppercased() ?? ""
    }
}
```

---

## ViewModel additions

```swift
@Observable
@MainActor
final class RoadmapViewModel {
    var phases: [RoadmapPhase] = []
    var memberStartDate: Date = .distantPast
    var errorMessage: String?
    var isLoading = false

    private let service: RoadmapServiceProtocol = MockRoadmapService()

    var activePhase: RoadmapPhase? { phases.first { $0.status == .active } }
    var weeksSinceStart: Int { ... }
    var weeksUntilNextChapter: Int { ... }

    var readLines: [String] {
        guard let ap = activePhase,
              let w = ap.weeksInChapter,
              let t = ap.weeksTotalInChapter
        else { return ["You are on the arc."] }
        return [
            "You are here —",
            "Phase \(ap.ordinal), week \(w) of \(t).",
            "The next page opens in \(weeksUntilNextChapter.monthsLabel)."
        ]
    }

    var readEmphasis: String? {
        guard let ap = activePhase, let w = ap.weeksInChapter, let t = ap.weeksTotalInChapter else { return nil }
        return "week \(w) of \(t)"
    }

    var stripCells: [StripCell] {
        [
            .init("STARTED", memberStartDate.formatted(.dateTime.day().month(.abbreviated)).uppercased()),
            .init("NOW", "WEEK \(weeksSinceStart)"),
            .init("NEXT CHAPTER", "~\(weeksUntilNextChapter) WEEKS")
        ]
    }
}
```

`weeksUntilNextChapter.monthsLabel` returns `"a month"`, `"two months"`, `"six weeks"` — authored literal strings, not `"\(n) weeks"`. This is where voice lives in generated content.

---

## View structure

```swift
struct RoadmapView: View {
    @State var vm = RoadmapViewModel()

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                AlcheContextBand(
                    left: "THE ARC · CHAPTER \(vm.activePhase?.ordinal ?? 1)",
                    right: "STARTED \(vm.weeksSinceStart) WEEKS AGO"
                )

                HStack {
                    AlcheBackLink(destination: "PROFILE")
                    Spacer()
                    DataSourceIndicator("Sample Data")
                }
                .padding(.horizontal, AlcheSpacing.lg)

                AlcheScreenTitle(prefix: "Your longevity,", italicDim: "as a story.")
                AlcheMonoSubline("FIVE CHAPTERS · ONE IN PROGRESS")

                AlcheReadCard(lines: vm.readLines, emphasis: vm.readEmphasis)

                AlcheDataStrip(cells: vm.stripCells)

                ChapterTimeline(phases: vm.phases)     // <- new component

                AlcheInterstitial("A roadmap isn't a schedule. It's a story — and yours is still being written.")

                AlcheEscapeLink("See the whole arc →", action: { vm.openFullArc() })

                AlcheSignatureStrip("ALCHE", role: "NARRATOR")
            }
        }
        .task { await vm.load() }
    }
}

struct ChapterTimeline: View {
    let phases: [RoadmapPhase]
    var body: some View {
        VStack(spacing: 0) {
            ForEach(phases) { ChapterRow(phase: $0) }
        }
        .padding(.leading, 24)          // rule indent
        .overlay(alignment: .leading) {
            Rectangle()
                .fill(Color.alcheDivider)
                .frame(width: 1)
                .padding(.leading, 6)
                .padding(.vertical, 12)
        }
        .padding(.horizontal, AlcheSpacing.lg)
    }
}
```

`ChapterRow` renders: node glyph absolute-left-of-rule + phase overline + date range + italic title + summary paragraph + (active-only) progress hairline + (active-only) "YOU ARE HERE" black tag.

---

## Token compliance checklist

- [ ] `BlueprintGridBackground` file deleted (or rendered to no-op). No grid drawn anywhere.
- [ ] No `alcheBlueprintBg` references.
- [ ] No "VER" / "LAT" / "GRID REF" / "SYNC AUTO" strings in code. (CI grep.)
- [ ] Node glyph: 13×13, 1.3px stroke, three states filled/ringed/dashed — no gradients.
- [ ] Progress hairline is 2px `alchePrimary`, not a filled pill.
- [ ] `DataSourceIndicator("Sample Data")` above the fold.
- [ ] No bell icon anywhere. Remove the no-op button entirely — do not comment out.
- [ ] Chapter titles use `.font(.alcheDisplayS)` or `.alcheDisplayM` italic.
- [ ] Chapter summaries use `.font(.alcheBody)`, line-height 1.5.

---

## Copy rules (locked)

1. No fake metadata. Never. Not as overline, not as footer, not as flair.
2. Dates shown are real dates derived from `memberStartDate` + chapter duration. Future chapters with no hard date use a season label ("Summer", "Autumn") — honest about uncertainty.
3. Every chapter has an authored title and authored summary. No templated "Phase N begins on date".
4. The word "roadmap" does not appear in body copy. "Arc" / "story" / "chapter" replace it.
5. Active chapter shows a progress hairline. Done chapters show nothing. Locked chapters are muted — no lock icon, no "coming soon" pill.

---

## Authored mock data (for MockRoadmapService)

Mirrors the HTML mockup exactly:

| Ord | Phase label | Title | Status | Range |
|-----|-------------|-------|--------|-------|
| 1 | CHAPTER 1 · BASELINE | Learning your body. | done | Feb 27 – Mar 19 |
| 2 | CHAPTER 2 · CELLULAR REPAIR | The quiet work. | active | Mar 20 – May 22 (week 3/12) |
| 3 | CHAPTER 3 · STRENGTH & SIGNAL | When the body asks to push. | locked | From May 22 |
| 4 | CHAPTER 4 · RHYTHM | Becoming a pattern. | locked | Summer (loose) |
| 5 | CHAPTER 5 · RE-READ | A year in, I read you again. | locked | Autumn (loose) |

---

## Acceptance criteria

- [ ] `xcodebuild` 0 errors.
- [ ] Grep audit: 0 hits for `VER 5`, `LAT `, `GRID REF`, `SYNC AUTO`, `BlueprintGrid`, `alcheBlueprintBg`.
- [ ] Bell icon removed (not hidden, removed from the view tree).
- [ ] `DataSourceIndicator` visible on initial render.
- [ ] Active chapter displays progress hairline and "YOU ARE HERE" tag; done chapters do not.
- [ ] Locked chapters render summary text at `.editorialMuted` color.
- [ ] VoiceOver reads: title → read lines → strip → chapter 1 done → chapter 2 active (you are here, week 3 of 12) → chapter 3 locked → ...
- [ ] Snapshot tests for light + dark mode.

---

## Open questions for master-deck integration

- "See the whole arc →" escape hatch — what does it open? (Recommend: a static article-style view rendering all five chapter summaries plus a sixth "What comes after a year" coda. Authored once, read always.)
- Should chapter dates recompute daily based on `memberStartDate`, or freeze once the chapter begins? (Recommend: freeze on start to avoid gaslighting the member as calendar slippage happens. Display original plan, track real in analytics.)
- If the member pauses their subscription and returns, does the arc restart or resume? (Out of scope for this screen, but flag for Profile / membership flow.)
