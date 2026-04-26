---
screen: Nutrition
slug: nutrition
group: services
primary-swift-file: app/Alche/Features/Nutrition/MacroDashboardView.swift
plan-date: 2026-04-24
---

# Nutrition — Swift implementation plan

## Intent

Strip the macro dashboard of its ring-and-three-bar visualisation stack and reframe it as a **nutritionist's read**: one observation, then the numbers as editorial data (not pastel rings). One block of voice interrupts the data to flag the one thing Alche wants noticed. Meals become single-line rows. Date selector demotes to a mono footer. Disclaimer honest and present.

## Key behaviour changes

1. **Read replaces hero.** Three italic lines: observational opener ("You've eaten lunch. / Protein's holding. / *Fiber* is the one to watch.") derived from `todaySummary` + `macroGoal` + time of day.
2. **Ring killed.** Calorie metric becomes an italic masthead: big Newsreader `1,240 / 1,800` with mono unit `KCAL · 560 LEFT`. No ring, no animation.
3. **Macros as 2×2 grid of editorial cells.** Each cell: mono key, italic value (`82/130 g`), 2pt progress hairline underneath. The macro Alche flagged in the read gets a `WATCH` suffix and `--warning` color on the hairline — *only* that macro.
4. **Voice between blocks** (`AlcheInterstitial`): "Your lunch was protein-forward but light on leaves. *A handful of greens with dinner* closes the day cleanly." Addresses the "silent between blocks" cross-screen issue.
5. **Meals list flat.** No cards. Time / italic name (+ source sub) / mono kcal per row. Unlogged meals appear as dim italic placeholders (`Dinner — not yet logged` · `—`).
6. **Date strip demotes** from a sticky header to a 7-day mono footer; today is underlined + bold. Tapping a day still switches date.
7. **Disclaimer visible.** Dashed-border mono strip: *"All nutritional data is independently estimated — approximate, not clinical."* Required by REQ-025.

## File-by-file

### `Features/Nutrition/MacroDashboardView.swift` — rewrite

```swift
struct MacroDashboardView: View {
    @State private var viewModel = MacroDashboardViewModel()

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                AlcheContextBand(
                    left: .init(text: Self.contextDay()),
                    right: .init(text: viewModel.mealWindowLabel)
                )
                AlcheReadStamp(label: "ALCHE · YOUR NUTRITION TODAY")
                AlcheReadView(lines: viewModel.readLines)

                NutritionKcalMasthead(
                    consumed: viewModel.todaySummary.totalCalories,
                    goal: viewModel.macroGoal.dailyCalories,
                    remaining: viewModel.todaySummary.caloriesRemaining
                )
                NutritionMacroGrid(
                    summary: viewModel.todaySummary,
                    goal: viewModel.macroGoal,
                    watchKey: viewModel.flaggedMacro
                )

                AlcheInterstitial(line: viewModel.interstitialLine)

                AlcheSectionHead(label: "TODAY'S MEALS", count: viewModel.todayLogs.count)
                NutritionMealsList(
                    logs: viewModel.todayLogs,
                    unloggedWindows: viewModel.unloggedWindows
                )

                AlchePrimaryAction(title: "Log a meal", onTap: viewModel.openLogEntry)
                AlcheSecondaryAction(title: "Find a restaurant →", onTap: viewModel.openRestaurants)

                NutritionDisclaimer() // required REQ-025
                NutritionDateFooter(
                    selected: viewModel.selectedDate,
                    onSelect: viewModel.selectDate
                )
            }
        }
        .background(Color.alcheBackground)
        .task { await viewModel.load() }
        .sheet(isPresented: $viewModel.showLogEntry) {
            MacroLogEntryView(viewModel: viewModel.logEntryViewModel)
        }
    }
}
```

### `Features/Nutrition/MacroDashboardViewModel.swift` — extend

Add a **read composer** that maps summary → italic read lines, and a **flagged macro** selector that picks the one macro farthest under goal relative to time of day.

```swift
enum MacroKey { case protein, carbs, fat, fiber }

@Observable @MainActor
final class MacroDashboardViewModel {
    // existing: todaySummary, macroGoal, todayLogs, selectedDate …

    var readLines: [AlcheReadLine] = []
    var interstitialLine: InterstitialLine = .empty
    var flaggedMacro: MacroKey?

    func load() async {
        // existing load …
        (self.readLines, self.flaggedMacro, self.interstitialLine) =
            NutritionReadComposer.compose(
                summary: todaySummary,
                goal: macroGoal,
                logs: todayLogs,
                timeOfDay: .current,
                userGoals: userGoals
            )
    }
}

enum NutritionReadComposer {
    static func compose(
        summary: NutritionSummary,
        goal: MacroGoal,
        logs: [MealLog],
        timeOfDay: TimeOfDay,
        userGoals: [UserGoal]
    ) -> ([AlcheReadLine], MacroKey?, InterstitialLine) {
        // Rule set — each case emits 2–3 lines + a flagged macro + an interstitial:
        // 1. Late morning, one meal logged: "You've had breakfast. / Off to a clean start."
        // 2. Post-lunch, protein%>70 of target, fiber<50%: the mockup's exact copy.
        // 3. Evening, kcal >110% goal: "You've eaten plenty. / Tomorrow resets — no math."
        // 4. No logs by 14:00: "You haven't logged yet. / Tap below when you can."
        …
    }
}
```

### `Features/Nutrition/Components/NutritionKcalMasthead.swift` — new

- `HStack` with `alignment: .lastTextBaseline`.
- Left: Newsreader italic 44pt "1,240" then muted "/ 1,800" (goal color `.alcheTextMuted`).
- Right: mono 10pt `KCAL · ` then bold `N LEFT` in editorial-black.
- Bottom 1pt divider, top padding `AlcheSpacing.xs`.

### `Features/Nutrition/Components/NutritionMacroGrid.swift` — new

- `LazyVGrid(columns: [flexible, flexible], spacing: 0)` wrapped in a 1pt bordered frame.
- Each cell: `VStack(spacing: AlcheSpacing.xs)` with key / value / 2pt progress hairline.
- The hairline = `Rectangle().fill(.alcheTextMuted.opacity(0.2))` with a child `Rectangle().fill(.alcheInk)` sized to `geo.width * progress`.
- When `watchKey == key`: key string appends ` · WATCH`, hairline fill `Color.alcheWarning` (or token for `warning`).
- **No rings, no pastel fills.**

### `Features/Nutrition/Components/NutritionMealsList.swift` — new

- `ForEach` over `todayLogs` sorted by `loggedAt`.
- Each row: `Grid(alignment: .firstTextBaseline)` with 3 columns: 48pt time, flexible title/source, trailing kcal.
- Source line: `restaurantName ?? "Logged manually"` in 11pt caption.
- `unloggedWindows` appended at the end as `.empty` rows with italic muted title `"Dinner — not yet logged"`, trailing `—`.

### `Features/Nutrition/Components/NutritionDateFooter.swift` — new

- 7 days rendered as mono 10pt uppercase, today marked with 1pt bottom underline + bold + black.
- Tap area min 44pt per day.
- Replaces the old `DateSelectorStrip` in header position.

### `Features/Nutrition/Components/NutritionDisclaimer.swift` — new

- Dashed 1pt border, 10pt horizontal padding, mono 9.5pt copy.
- Copy fixed: `"All nutritional data is independently estimated — approximate, not clinical."`

### Components to delete / archive

- `MacroProgressRing` — remove from this screen (keep if used elsewhere; otherwise archive).
- `MacroProgressBar` usages here. The macro grid replaces them.
- Toolbar fork.knife icon → replaced by secondary action link "Find a restaurant →".

## Design token compliance

- Newsreader italic via `.font(.alcheDisplayL)` (read) + custom 44pt Newsreader italic for masthead (add `.font(.alcheMacroMasthead)` token if not present).
- Mono via `.font(.alcheMono)` / `.font(.alcheOverline)`.
- `Color.alcheBackground` for scroll bg; `Color.alcheSurface` nowhere needed (no cards).
- No capsules, no pastel fills, no SF Symbol ornaments.

## Localisation

- Every composed read line and interstitial string through `LocalizedStringKey`.
- Numbers via `NumberFormatter(locale: .current)` (1,240 in EN; 1.240 in DE).
- "KCAL" stays uppercase across locales; unit labels translatable.

## Acceptance criteria

- [ ] No `MacroProgressRing` rendered on this screen.
- [ ] `readLines.count` is 2 or 3, driven by `NutritionReadComposer`.
- [ ] `AlcheInterstitial` appears between macros and meals.
- [ ] `NutritionDisclaimer` visible on every render (not gated behind info button).
- [ ] `DataSourceIndicator("Sample Data")` shown at bottom (before or after disclaimer).
- [ ] Date footer at the bottom of scroll, not the top.
- [ ] `.font(.alcheBody)` / `.alcheMono` / `.alcheDisplayL` only — no `.font(.body)`.
- [ ] VoiceOver reads the read first, then masthead, then macros (labelled), then meals (time + name + kcal).
- [ ] `xcodebuild` passes with 0 errors.

## Out of scope

- Macro goal editing (lives in Profile).
- Meal photo OCR (future).
- Export / share CSV (future).
