# Codex QA Follow-up Flag Verification

Date: 2026-04-26

| # | Flag | Verdict | Evidence |
|---:|---|---:|---|
| 1 | `ContentCardView` + `EventCardView` zero callers | PASS | `rg` finds only each struct definition plus its own `#Preview` call. No production call sites. |
| 2 | `BiomarkerCategoryView` + `BiomarkerDetailView` "Legacy state" accurate | PASS | `BiomarkerViewModel.swift:55` marks `Legacy state (retained for BiomarkerCategoryView / BiomarkerDetailView)`. External references are only the category view linking to detail plus previews. Parent dashboard does not route to them. |
| 3 | `SmoothieMenuViewModel.toggleFavorite` / `isFavorite` / `favoriteSmoothies` orphaned after `SmoothieMenuView` decoupling | PASS | `rg` under `Alche/Features/Booking` excluding `SmoothieMenuViewModel.swift` returns no references. The similarly named Shop favorite methods are separate product code, not SmoothieMenu consumers. |
| 4 | `PractitionerDetailView` hard-codes `.longevityPlus` | PASS | `PractitionerDetailView.swift:23-24` says `In production this comes from AppState.member.tier` and sets `private let memberTier: MemberTier = .longevityPlus`. |
| 5 | `ScanRecommendation` Hashable behavior is per-instance UUID | PASS | `GlowScanResult.swift:58-59` defines `struct ScanRecommendation: Codable, Identifiable, Sendable, Hashable` with `let id = UUID()`. New XCTest confirms same-instance id stability and distinct same-content instances. |

Additional note:
- `PractitionerListViewModel.memberTier` is also hard-coded to `.longevityPlus` with the same `AppState.member.tier` comment. The requested flag was specifically `PractitionerDetailView`; this is adjacent drift, not fixed.

