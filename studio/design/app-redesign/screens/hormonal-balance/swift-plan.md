---
screen: HormonalBalance
slug: hormonal-balance
group: vision
primary-swift-file: app/Alche/Features/HormonalBalance/HormonalBalanceView.swift
status: plan
plan-date: 2026-04-24
caveat: Current screen has NO ViewModel, NO service, NO model — only hard-coded constants. This plan introduces all three.
---

# HormonalBalance — Swift Implementation Plan

**Rename:** "Hormonal Balance" → **"The Rhythm Reading"** in UI. Swift namespace can stay.

**Two modes, one architecture:**
- `BodyMode.menstrual` — cycle day, estrogen curve, follicular/ovulation/luteal phase logic
- `BodyMode.androgen` — testosterone + diurnal cortisol, circadian-led reads

Mode is chosen once in Profile ("How would you like me to read your hormones?") and stored on `MemberProfile.bodyMode`. Default: unset — the feature is hidden from navigation until the member opts in. **This is the AMAB/queer inclusion fix** the audit demanded.

---

## Files touched (all new unless noted)

| Path | Change |
|------|--------|
| `app/Alche/Core/Models/BodyMode.swift` | **New.** `enum BodyMode: String, Codable, Sendable { case menstrual, androgen }` |
| `app/Alche/Core/Models/HormonalReading.swift` | **New.** Model for a single reading (phase, metrics, authored read lines, week observation). |
| `app/Alche/Core/Services/HormonalReadingServiceProtocol.swift` | **New.** `func currentReading(for: BodyMode) async throws -> HormonalReading` |
| `app/Alche/Core/MockServices/MockHormonalReadingService.swift` | **New.** Returns editorial mock readings per mode. 0.4s latency. |
| `app/Alche/Features/HormonalBalance/HormonalBalanceViewModel.swift` | **New.** Observable, loads reading by mode. |
| `app/Alche/Features/HormonalBalance/HormonalBalanceView.swift` | **Rewrite.** Branches on `vm.mode` → `MenstrualModeView` or `AndrogenModeView`. |
| `app/Alche/Features/HormonalBalance/Components/RhythmChart.swift` | **New.** Single-curve chart with "you are here" marker. Two variants (cycle / diurnal). |
| `app/Alche/Features/HormonalBalance/Components/RhythmDataStrip.swift` | **New.** Mono strip replacement for 2×2 grid. |
| `app/Alche/Features/Profile/ProfileView.swift` | **Extend.** Add "How should I read your hormones?" preference row. |
| `app/Alche/Core/Models/MemberProfile.swift` | **Extend.** Add `var bodyMode: BodyMode?`. |

---

## Model

```swift
struct HormonalReading: Codable, Identifiable, Sendable, Hashable {
    let id: UUID
    let mode: BodyMode
    let capturedAt: Date
    let phase: String               // "Late Follicular" / "Steady AM peak"
    let phaseSubline: String        // "Estrogen climbing" / "Cortisol elevated AM"

    // Three-line authored read
    let readLines: [String]         // ["Day 12.", "Estrogen climbing.", "This is the week your body gives you back."]
    let readEmphasis: String?       // span to accent in line 2

    // Mono strip (authored, not computed)
    let stripCells: [StripCell]     // [("PHASE","FOLLICULAR"), ("BBT","36.4°C"), ("READINESS","HIGH")]

    // Chart
    let curve: CurveData            // points + markers
    let youAreHereIndex: Int        // index into curve.points
    let curveTitle: String          // "Estrogen, this cycle" / "Cortisol, last 7 days"
    let curveMeta: String           // "EST · DAY 1–28"
    let axisLabels: [String]        // ["DAY 1","OVULATION","DAY 28"] / ["06:00","12:00","22:00"]

    // Week observation
    let weekObservation: String     // authored line
    let weekEmphasis: String?

    // Provenance
    let syncSource: String          // "OURA"
    let syncedAt: Date

    static let preview: HormonalReading = .init(
        id: UUID(),
        mode: .menstrual,
        capturedAt: .now,
        phase: "Late Follicular",
        phaseSubline: "Estrogen climbing",
        readLines: ["Day 12.", "Estrogen climbing.", "This is the week your body gives you back."],
        readEmphasis: "Estrogen climbing",
        stripCells: [.init("PHASE","FOLLICULAR"), .init("BBT","36.4°C"), .init("READINESS","HIGH")],
        curve: .mockCyclePreview,
        youAreHereIndex: 12,
        curveTitle: "Estrogen, this cycle",
        curveMeta: "EST · DAY 1–28",
        axisLabels: ["DAY 1","OVULATION","DAY 28"],
        weekObservation: "Strength tolerates you best now. If you lift, this is the week. Sleep will still feel short — that softens next.",
        weekEmphasis: "this is the week",
        syncSource: "OURA",
        syncedAt: .now.addingTimeInterval(-600)
    )
}
```

---

## Service protocol

```swift
protocol HormonalReadingServiceProtocol: Sendable {
    func currentReading(for mode: BodyMode) async throws -> HormonalReading
    func history(for mode: BodyMode, range: DateInterval) async throws -> [HormonalReading]
}

final class MockHormonalReadingService: HormonalReadingServiceProtocol {
    func currentReading(for mode: BodyMode) async throws -> HormonalReading {
        try await Task.sleep(for: .milliseconds(400))
        switch mode {
        case .menstrual: return .menstrualMock
        case .androgen:  return .androgenMock
        }
    }
    // history() returns last 6 readings
}
```

`HormonalReading.menstrualMock` and `.androgenMock` each carry fully authored editorial copy — **the audit called out that the screen "would work with real data later" if the observational copy is honest now**. That demands authored strings, not templated "{hormone} is {trending}".

---

## ViewModel

```swift
@Observable
@MainActor
final class HormonalBalanceViewModel {
    var reading: HormonalReading?
    var isLoading = false
    var errorMessage: String?

    let mode: BodyMode
    private let service: HormonalReadingServiceProtocol

    init(mode: BodyMode, service: HormonalReadingServiceProtocol = MockHormonalReadingService()) {
        self.mode = mode
        self.service = service
    }

    func load() async {
        isLoading = true
        defer { isLoading = false }
        do { reading = try await service.currentReading(for: mode) }
        catch { errorMessage = "I couldn't pull your signals just now." }
    }
}
```

---

## View structure

```swift
struct HormonalBalanceView: View {
    @State var vm: HormonalBalanceViewModel

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                AlcheContextBand(
                    left: vm.mode == .menstrual ? "THE MONTH'S READING" : "THE WEEK'S READING",
                    right: vm.contextRight   // "DAY 12 OF 28" / "WED · 08:41"
                )

                HStack {
                    AlcheBackLink(destination: "PROFILE")
                    Spacer()
                    DataSourceIndicator("Sample Data")  // MANDATORY — audit fix
                }
                .padding(.horizontal, AlcheSpacing.lg)

                AlcheScreenTitle(
                    prefix: vm.titlePrefix,        // "The month's" / "The week's"
                    italicDim: "reading."
                )
                AlcheMonoSubline(vm.phaseSubline)  // "LATE FOLLICULAR · ESTROGEN CLIMBING"

                AlcheReadCard(lines: vm.readLines, emphasis: vm.readEmphasis)

                RhythmDataStrip(cells: vm.stripCells)

                RhythmChart(
                    data: vm.curve,
                    youAreHere: vm.youAreHereIndex,
                    title: vm.curveTitle,
                    meta: vm.curveMeta,
                    axis: vm.axisLabels
                )

                RhythmWeekBlock(
                    label: "THIS WEEK",
                    text: vm.weekObservation,
                    emphasis: vm.weekEmphasis
                )

                AlcheInterstitial(vm.interstitialVoice)  // mode-specific: "rhythm to know"

                RhythmSyncFooter(source: vm.syncSource, syncedAt: vm.syncedAt, label: vm.syncLabel)

                AlcheSignatureStrip("ALCHE", role: "RHYTHM")
            }
        }
        .task { await vm.load() }
    }
}
```

---

## Profile preference gate (audit-mandated)

`ProfileView.swift` gains:

```swift
Section(header: AlcheSectionHeader(label: "HOW I READ YOUR BODY")) {
    Picker(selection: $profile.bodyMode) {
        Text("Track my cycle").tag(BodyMode.menstrual as BodyMode?)
        Text("Steady rhythm").tag(BodyMode.androgen as BodyMode?)
        Text("Not yet").tag(Optional<BodyMode>.none)
    } label: {
        Text("How should I read your hormones?")
            .font(.alcheBodyMedium)
    }
    .pickerStyle(.inline)

    AlcheCaption("You can change this any time. I use it to choose which rhythm to track.")
}
```

If `bodyMode == nil`, HormonalBalance entry is **hidden** in Profile navigation (not grayed, hidden). This is the inclusion fix: no one is shown a menstrual tracker they didn't ask for.

---

## Token compliance checklist

- [ ] `DataSourceIndicator("Sample Data")` above the fold — the audit specifically flagged its absence.
- [ ] 2px sharp corners on chart card and sync footer divider.
- [ ] No `RoundedRectangle(cornerRadius: AlcheRadii.md)`.
- [ ] No `.pickerStyle(.segmented)` for mode — inline editorial picker in Profile.
- [ ] Chart curve: `stroke-width: 1.6px`, 1 color (`editorial-black`), one primary-blue "you are here" marker.
- [ ] No pastel-rose / pastel-indigo fills on the chart (kill the old rose/indigo palette).
- [ ] No emoji. No "stable/surging/rising" progress-bar cells.

---

## Copy rules (locked)

1. Never ship menstrual-mode copy to members with `bodyMode == .androgen`. Never the reverse.
2. Authored observations only — no string templating from raw metric values.
3. The word "balance" does not appear. The feature is a reading, not a balance.
4. "Hormonal Balance" appears nowhere in UI. Only in filenames / analytics events.
5. Provenance ("OURA · SYNCED 14:02") stays minimal and honest. If sync failed, say so — don't fake freshness.

---

## Acceptance criteria

- [ ] `xcodebuild` 0 errors.
- [ ] Grep `"Hormonal Balance"` in `Features/HormonalBalance/*.swift` view code returns 0 hits.
- [ ] `DataSourceIndicator` present and visible in both modes.
- [ ] Profile preference picker renders, writes to `MemberProfile.bodyMode`, hides entry when nil.
- [ ] Both `.menstrualMock` and `.androgenMock` readings render without layout breakage on 375×812 and 428×926.
- [ ] VoiceOver reads each mode's read as a single paragraph; chart announces "curve, you are here at day 12" (menstrual) / "curve, you are here at 08:41" (androgen).
- [ ] Snapshot tests for both modes, light + dark.

---

## Open questions for master-deck integration

- Should the Profile body-mode row be designed by A2 (Core tabs) or shipped in this agent's PR? (Recommend: shipped in this PR since it's the inclusion gate — blocking the feature's correctness.)
- Should `bodyMode` be settable during onboarding (QuickScan), or deferred to Profile only? (Recommend: deferred. Onboarding should not force this choice — opt-in only.)
- Does `.androgen` mode need a separate "cycle" concept (weekly circadian review) vs. the menstrual 28-day arc? (Current plan: yes — the context band already reflects it: "THE WEEK'S READING" vs. "THE MONTH'S READING".)
