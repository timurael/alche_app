# Codex QA Audit Results

Date: 2026-04-26
Scope: `app` submodule diff `1500d35..HEAD` (18 app commits).

Method:
- Ran `git diff --name-status 1500d35..HEAD -- Alche`.
- Ran all 9 `FORGE-PROCESS.md` grep patterns on every non-deleted changed file.
- Cross-checked touched feature folders with `bin/forge-status audit <Folder>`.

Legend: PASS = all 9 patterns clean. FAIL = at least one pattern matched. N/A = deleted file.

| File | 9-grep result | Notes |
|---|---:|---|
| `Alche/App/AppState.swift` | PASS | clean |
| `Alche/App/ContentView.swift` | PASS | clean |
| `Alche/Core/Models/GlowScanResult.swift` | PASS | clean |
| `Alche/Core/Models/Practitioner.swift` | PASS | clean |
| `Alche/Design/Components/AlcheTabBar.swift` | PASS | clean |
| `Alche/Design/Tokens/AlcheColors.swift` | FAIL | token-drift grep catches preview/demo `.font(.headline)` at lines 144, 153, 162, 171, 180, 188, 194 and `.font(.caption2)` at line 216 |
| `Alche/Features/Biomarkers/BiologicalAgeCard.swift` | PASS | clean |
| `Alche/Features/Biomarkers/BiomarkerCategoryView.swift` | PASS | clean |
| `Alche/Features/Biomarkers/BiomarkerDetailView.swift` | PASS | clean |
| `Alche/Features/Biomarkers/MarkerTrendChart.swift` | PASS | clean |
| `Alche/Features/Booking/BookingDetailView.swift` | PASS | clean |
| `Alche/Features/Booking/QRCheckInView.swift` | PASS | clean |
| `Alche/Features/Booking/SlotPickerView.swift` | PASS | clean |
| `Alche/Features/Booking/SmoothieMenuView.swift` | PASS | clean |
| `Alche/Features/DigitalTwin/FutureProjectionView.swift` | PASS | clean |
| `Alche/Features/DigitalTwin/RegionDetailSheet.swift` | PASS | clean |
| `Alche/Features/Discover/ContentCardView.swift` | PASS | clean |
| `Alche/Features/Discover/EventCardView.swift` | PASS | clean |
| `Alche/Features/Discover/EventDetailView.swift` | PASS | clean |
| `Alche/Features/DoctorSessions/MySessionsView.swift` | PASS | clean |
| `Alche/Features/DoctorSessions/PractitionerDetailView.swift` | PASS | clean |
| `Alche/Features/DoctorSessions/PractitionerListView.swift` | PASS | clean |
| `Alche/Features/DoctorSessions/SessionBookingView.swift` | PASS | clean |
| `Alche/Features/DoctorSessions/SessionDetailView.swift` | PASS | clean |
| `Alche/Features/GlowScan/BioSyncView.swift` | PASS | clean |
| `Alche/Features/GlowScan/GlowScanFirstRunBanner.swift` | PASS | clean |
| `Alche/Features/GlowScan/GlowScanHistoryView.swift` | PASS | clean |
| `Alche/Features/GlowScan/GlowScanResultView.swift` | PASS | clean |
| `Alche/Features/GlowScan/SkinCategoryCard.swift` | PASS | clean |
| `Alche/Features/Nutrition/MacroLogEntryView.swift` | PASS | clean |
| `Alche/Features/Profile/MembershipManagementView.swift` | PASS | clean |
| `Alche/Features/Profile/SubscriptionPaywallView.swift` | PASS | clean |
| `Alche/Features/Protocols/ProtocolDetailView.swift` | PASS | clean |
| `Alche/Features/Restaurants/DishDetailView.swift` | PASS | clean |
| `Alche/Features/Restaurants/RestaurantDetailView.swift` | PASS | clean |
| `Alche/Features/Roadmap/PhaseCardView.swift` | N/A | deleted in `05f6b3d` |
| `Alche/Features/Roadmap/TimelineNodeView.swift` | N/A | deleted in `05f6b3d` |

Folder helper cross-check:
- `bin/forge-status audit Biomarkers`: clean.
- `bin/forge-status audit Booking`: clean.
- `bin/forge-status audit DigitalTwin`: clean.
- `bin/forge-status audit Discover`: clean.
- `bin/forge-status audit DoctorSessions`: clean.
- `bin/forge-status audit Nutrition`: clean.
- `bin/forge-status audit Profile`: clean.
- `bin/forge-status audit Protocols`: clean.
- `bin/forge-status audit Restaurants`: clean.
- `bin/forge-status audit Roadmap`: clean.
- `bin/forge-status audit GlowScan`: folder-level helper flags `GlowScanView.swift:4` comment text "Health Score"; this file was not touched in `1500d35..HEAD`, so it is outside the changed-file audit above.

