---
screen: Restaurants
slug: restaurants
group: services
primary-swift-file: app/Alche/Features/Restaurants/RestaurantListView.swift
plan-date: 2026-04-24
---

# Restaurants — Swift implementation plan

## Intent

Kill the capsule-pill filter and the gradient-thumbnail-plus-SF-Symbol cards. Replace with a **concierge-at-the-bar read** plus three featured recommendations (each a one-line italic name + one-line rationale + mono meta), then a voice-framed escape into a flat compressed list filtered by editorial segmented text (no pills). Dish-level nutrition honesty flagged on every dish screen.

## Key behaviour changes

1. **Read opens the screen.** Two italic lines: "Three places I'd eat tonight, / given what you're *asking of your body*." Derived from member goals + recent macro logs + time of day.
2. **Three recommendations, numbered.** 01 / 02 / 03 mono prefix. Italic Newsreader name. Italic muted rationale ("High-protein, low-processed. Fits your recovery goal."). Mono meta row: district · walk time · price.
3. **No gradient thumbnails.** No SF Symbols. Name lives by typography alone.
4. **Interstitial voice:** "Or browse the *full 24* — all independently vetted for nutritional honesty."
5. **Cuisine filter is editorial segmented text**, not pills. Horizontal scroll, mono 10pt, active gets 1.5pt bottom underline + bold + black.
6. **Sort / count row** below filter: "SORTED BY DISTANCE · 24 RESULTS" in mono — `DISTANCE` is the active sort, bold black.
7. **Full list compressed.** Each row = single `HStack` with name + cuisine sub + distance + price. No card chrome.
8. **Disclaimer on the list AND the dish detail** (required REQ-025). Dashed mono strip at bottom of list; integrated into dish nutrition section on `DishDetailView`.

## File-by-file

### `Features/Restaurants/RestaurantListView.swift` — rewrite

```swift
struct RestaurantListView: View {
    @State private var viewModel = RestaurantListViewModel()

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                AlcheContextBand(
                    left: .init(text: Self.contextDayCity()),
                    right: .init(text: viewModel.memberDistrictLabel)
                )
                AlcheReadStamp(label: "ALCHE · THREE I'D EAT TONIGHT")
                AlcheReadView(lines: viewModel.readLines)

                RestaurantRecommendationList(
                    recommendations: viewModel.topThree,
                    onTap: viewModel.open
                )

                AlcheInterstitial(line: viewModel.interstitialLine)

                RestaurantSegmentedFilter(
                    options: viewModel.cuisineOptions,
                    selection: $viewModel.selectedCuisine
                )
                RestaurantSortRow(
                    sort: viewModel.activeSort,
                    totalCount: viewModel.allFiltered.count
                )

                RestaurantCompactList(
                    restaurants: viewModel.allFiltered,
                    onTap: viewModel.open
                )

                RestaurantDisclaimer()
                DataSourceIndicator("Sample Data")
            }
        }
        .background(Color.alcheBackground)
        .searchable(text: $viewModel.searchText, prompt: "Search restaurants")
        .task { await viewModel.load() }
    }
}
```

### `Features/Restaurants/RestaurantListViewModel.swift` — extend

Add:

```swift
@Observable @MainActor
final class RestaurantListViewModel {
    // existing state: filteredRestaurants, selectedCuisine, searchText …

    var topThree: [RestaurantRecommendation] = []
    var readLines: [AlcheReadLine] = []
    var interstitialLine: InterstitialLine = .empty
    var activeSort: RestaurantSort = .distance
    var allFiltered: [PartnerRestaurant] { /* filtered by cuisine + search */ }

    func load() async {
        // existing load …
        let ranking = RestaurantRanker.rank(
            restaurants: allRestaurants,
            memberGoals: memberGoals,
            recentMacros: recentMacros,
            timeOfDay: .current,
            memberDistrict: memberDistrict
        )
        self.topThree = Array(ranking.prefix(3))
        self.readLines = RestaurantReadComposer.compose(
            goals: memberGoals, timeOfDay: .current
        )
        self.interstitialLine = .init(
            prefix: "Or browse the ",
            emphasis: "full \(allRestaurants.count)",
            suffix: " — all independently vetted for nutritional honesty."
        )
    }
}

struct RestaurantRecommendation {
    let restaurant: PartnerRestaurant
    let rationale: String         // "High-protein, low-processed. Fits your recovery goal."
    let walkMinutes: Int
}
```

### `Features/Restaurants/Components/RestaurantRecommendationList.swift` — new

- `ForEach` 0..<3.
- Row: `Grid` 3 columns: `24pt` num · flexible body · trailing chev.
- Body: italic Newsreader 22pt name, italic muted rationale 13.5pt, mono meta row (district · walk · price) with 3pt dot separators.
- 1pt bottom divider per row.

### `Features/Restaurants/Components/RestaurantSegmentedFilter.swift` — new

- `ScrollView(.horizontal, showsIndicators: false)` with `HStack(spacing: 18)`.
- Each option: `Text(option.label)` in `.alcheOverline`.
- Selected: `.foregroundStyle(.alcheInk).fontWeight(.bold).overlay(bottomRule)`.
- **No `Capsule()`.** No `.background(Color.alcheCuisineAmber)` or similar.

### `Features/Restaurants/Components/RestaurantSortRow.swift` — new

- `HStack` mono 9.5pt.
- Left: "SORTED BY DISTANCE" with `DISTANCE` bold + black.
- Right: "24 RESULTS" muted.
- 10pt vertical padding, 1pt bottom divider light.

### `Features/Restaurants/Components/RestaurantCompactList.swift` — new

- `LazyVStack(spacing: 0)`.
- Row: 3-column `Grid` — name + cuisine sub / distance mono / price mono.
- 1pt light divider between rows.
- Tap row → `open(restaurant)`.

### `Features/Restaurants/Components/RestaurantDisclaimer.swift` — new

- Identical to `NutritionDisclaimer` — dashed border, mono 9.5pt.
- Copy: `"All nutritional data is independently estimated — approximate, not clinical."`

### `Features/Restaurants/DishDetailView.swift` — edit

- Retain dish-level nutrition table.
- **Add** `RestaurantDisclaimer` component above or below the nutrition table (required REQ-025).
- Any pill tags in this file (if any) replaced with `AlcheTag` (sharp 2pt corner).

### Components to delete / archive

- `CuisineFilterPill` — delete.
- `RestaurantCard` gradient-thumbnail + SF-Symbol header block. Gradient generator method removed. `isVerified` seal removed from the card (verification is a backend-side curation fact, not a member-facing badge here).
- Any `.clipShape(Capsule())` in this feature folder.

## Ranking logic (`RestaurantRanker`)

Score = weighted sum of:
- Goal fit (member goals × restaurant tags) — 0.4
- Walk distance (closer = higher) — 0.25
- Time-of-day match (dinner-oriented restaurants after 17:00) — 0.15
- Macro gap fit (protein-light today + protein-forward restaurant) — 0.15
- Verified partner — 0.05

Deterministic given inputs. Returns `[RestaurantRecommendation]` sorted desc.

## Design token compliance

- Read: `.font(.alcheDisplayL)`.
- Recommendation name: `.font(.alcheDisplayS)` italic.
- Body mono: `.font(.alcheOverline)`.
- All corners `AlcheRadii.sm` (2pt) or none. Zero `pill` radii on filter chrome.
- Colors: `.alcheInk`, `.alcheTextMuted`, `.alchePrimary` for emphasis in the read only.

## Localisation

- Cuisine labels via `CuisineType.localizedName` (EN + DE).
- Walk distance uses user locale units (always metric for DE, metric in EU).
- Currency glyphs (`€€€€`) stay symbolic.

## Acceptance criteria

- [ ] No `Capsule()` or `.clipShape(Capsule())` anywhere in `Features/Restaurants/`.
- [ ] No gradient backgrounds on restaurant rows or recommendation rows.
- [ ] No SF Symbol ornament (leaf, fork.knife, sun.max) on this screen.
- [ ] Top of screen renders: context band → read stamp → read → 3 recommendations → interstitial → filter → sort row → list → disclaimer → data-source.
- [ ] `RestaurantDisclaimer` appears on both `RestaurantListView` and `DishDetailView`.
- [ ] Selected filter has 1.5pt underline, not a pill.
- [ ] `DataSourceIndicator("Sample Data")` present.
- [ ] `xcodebuild` passes with 0 errors.

## Out of scope

- Map view (keep as future escape hatch).
- Reservation integration (OpenTable / Resy).
- Per-restaurant nutrition scoring aggregate (flag on dishes only for now).
