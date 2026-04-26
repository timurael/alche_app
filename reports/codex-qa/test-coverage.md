# Codex QA Test Coverage

Date: 2026-04-26

Added tests in `app/AlcheTests/AlcheTests.swift`:
- `testAppStateTabsAreReachableInDeckOrder`
  Verifies all five tabs are reachable and ordered as `HOME`, `DISCOVER`, `BOOK`, `SHOP`, `PROFILE`.
- `testAlcheTabBarUsesBindingAndActiveDotContract`
  Source-contract guard for `AlcheTabBar`: binding-backed tab switching (`selected = tab`), `AppState.Tab.allCases`, 6x6 `Circle` indicator, uppercase labels, selected accessibility trait, no `.tabItem`, and no SF Symbol image in the bar.
- `testScanRecommendationIdentityIsStablePerInstanceAndDistinctAcrossInstances`
  Verifies `ScanRecommendation.id` is stable for repeated reads of the same instance and distinct for separate same-content instances; also confirms current Hashable semantics treat same-content instances as distinct because `id` participates in synthesized equality/hash.
- `testRemovedRatingSymbolsStayRemoved`
  Grep-style CI guard that `Practitioner.rating`, `reviewCount`, `RatingStarsView`, and `star.fill` stay out of the practitioner model/list surface.
- `testStrategyOneRegisterContractsForPolishedScreens`
  Source-contract guards for polished Strategy 1 surfaces across Nutrition, Booking, Restaurants, Discover, DoctorSessions, Protocols, GlowScan, DigitalTwin, and Biomarkers. These assert register anchors such as Newsreader narrator copy, monospaced cadence, no banned rating/clinical/AI tokens, and screen-specific voice markers.

Why source-contract tests:
- Existing test style is plain XCTest (`AlcheTests.swift`, `RoadmapTests.swift`).
- No snapshot, UI-introspection, or ViewInspector-style helper exists in the tree.
- Per brief, I did not introduce new frameworks or test infrastructure.

Verification:
- Cold requested command `xcodebuild test -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 16'` could not run because this machine has no simulator named exactly `iPhone 16`.
- Available simulator verification used `xcodebuild test -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 17 Pro'`.
- First post-test run executed 26 tests and failed only my over-strict source-contract assertion for `RestaurantDetailView`; I corrected the test to match the shipped source contract.
- Final direct verification on `iPhone 17 Pro`: `TEST SUCCEEDED`, 26/26 tests passed.
- Final `bin/forge-status` after QA edits: `BUILD SUCCEEDED`, `TEST SUCCEEDED`, 26/26 tests passed.

Coverage still not added:
- True rendered-dot inspection for `AlcheTabBar` active/inactive view hierarchy. That needs UI/snapshot/introspection support not present in the existing test suite. Current coverage guards the binding/action/source contract instead.
