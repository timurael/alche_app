---
screen: DoctorSessions
slug: doctor-sessions
group: services
primary-swift-file: app/Alche/Features/DoctorSessions/PractitionerListView.swift
plan-date: 2026-04-24
---

# DoctorSessions — Swift implementation plan

## Intent

Rebuild the practitioner browse surface as an **introduction**: Alche introduces three practitioners it thinks fit what the member is working on. Stars and review counts gone. Capsule pill filters gone. Disclaimer present at entry (voice-framed) *and* persistent at the bottom (full legal copy). Title "Dr." only appears when a practitioner is an actual medical doctor with a name. Otherwise "wellness practitioner" / "longevity practitioner".

## Key behaviour changes

1. **Read opens the screen.** Three italic lines: "Three practitioners / I'd *introduce you to* — / based on what you're working on."
2. **Disclaimer as voice, above the list.** Tag + italic muted Newsreader line: *"These are wellness conversations, not medical consultations. Choose who you'd like to meet."* — reframes the list before the member scans it.
3. **Three practitioner recommendations**, numbered 01/02/03. Each:
   - Newsreader italic name (with "Dr." only when a medical qualification is on file).
   - Noto Sans role: `Longevity practitioner · sleep & recovery`.
   - Italic left-rule pull-quote from a real past-member note.
   - Mono meta row: `FIRST SESSION COMPLIMENTARY` (when tier = Longevity+ *and* practitioner hasn't been seen before) + `NEXT · <day> <time>`.
4. **No stars, no review counts.** `RatingStarsView` is gone from this surface.
5. **Filter demoted** to a mono underlined link "Filter by specialty →" that opens a sheet, with a mono `N PRACTITIONERS` count on the right.
6. **Primary action** pre-selects the top recommendation's next available slot.
7. **Full legal disclaimer at the bottom** — REQ-026 required copy, 1pt black border + `Color.alcheSurfaceWarm` background (use `bg-warm` equivalent), visible on every render.

## Title & language discipline

- `Practitioner` model gets `displayTitle` computed:
  - If `medicalLicense != nil` → `"Dr. \(firstName) \(lastName)"`.
  - Else → `"\(firstName) \(lastName)"` (no "Dr.").
- `Practitioner.roleLabel` always `"Longevity practitioner"` or `"Wellness practitioner"` (never "Doctor" without name).
- All copy passes a lint that forbids: `treat|cure|heal|diagnose` as verbs applied to the member.

## File-by-file

### `Features/DoctorSessions/PractitionerListView.swift` — rewrite

```swift
struct PractitionerListView: View {
    @State private var viewModel = PractitionerListViewModel()

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                AlcheContextBand(
                    left: .init(text: Self.contextTime()),
                    right: .init(text: viewModel.tierLabel) // "LONGEVITY+ MEMBER"
                )
                AlcheReadStamp(label: "ALCHE · INTRODUCTIONS")
                AlcheReadView(lines: viewModel.readLines)

                PractitionerDisclaimerVoice() // voice-framed, above list

                PractitionerRecommendationList(
                    recommendations: viewModel.topThree,
                    onTap: viewModel.open
                )

                PractitionerFilterRow(
                    onFilter: viewModel.openFilterSheet,
                    totalCount: viewModel.allFiltered.count
                )

                AlchePrimaryAction(
                    title: viewModel.primaryCTATitle,   // "Book with Dr. Mensah · Wed 14:00"
                    onTap: viewModel.bookTopRecommendation
                )
                AlcheSecondaryAction(
                    title: "See all practitioners →",
                    onTap: viewModel.scrollToFullList
                )

                PractitionerLegalDisclaimer() // full REQ-026 copy
                DataSourceIndicator("Sample Data")
            }
        }
        .background(Color.alcheBackground)
        .task { await viewModel.load() }
        .sheet(isPresented: $viewModel.showFilterSheet) {
            PractitionerFilterSheet(viewModel: viewModel)
        }
    }
}
```

### `Features/DoctorSessions/PractitionerListViewModel.swift` — extend

```swift
@Observable @MainActor
final class PractitionerListViewModel {
    // existing: filteredPractitioners, selectedSpecialty, availableSpecialties …

    var topThree: [PractitionerRecommendation] = []
    var readLines: [AlcheReadLine] = []
    var tierLabel: String = ""
    var primaryCTATitle: String = ""
    var showFilterSheet = false

    func load() async {
        // existing load …
        let ranking = PractitionerRanker.rank(
            practitioners: allPractitioners,
            memberGoals: memberGoals,
            activeProtocol: activeProtocol,
            pastSessions: pastSessions
        )
        self.topThree = Array(ranking.prefix(3))
        self.tierLabel = tier.displayUppercased  // "LONGEVITY+ MEMBER"
        self.readLines = [
            .plain("Three practitioners"),
            .emphasised(before: "I'd ", emphasis: "introduce you to", after: " —"),
            .dim("based on what you're working on.")
        ]
        self.primaryCTATitle = Self.composeCTATitle(for: topThree.first)
    }

    static func composeCTATitle(for rec: PractitionerRecommendation?) -> String {
        guard let rec else { return "Browse practitioners" }
        return "Book with \(rec.practitioner.displayTitle) · \(rec.nextSlot.formattedShort)"
    }
}

struct PractitionerRecommendation: Identifiable {
    let id: UUID
    let practitioner: Practitioner
    let memberPullQuote: String?   // curated, real past note — ellipsis if absent
    let nextSlot: Date
    let isComplimentary: Bool
}
```

### `Features/DoctorSessions/Components/PractitionerDisclaimerVoice.swift` — new

- `VStack(alignment: .leading, spacing: AlcheSpacing.xs)`.
- Tag: `.font(.alcheOverline)` `"BEFORE YOU CHOOSE"`.
- Line: `.font(.alcheBody)` italic Newsreader 15pt, `.alcheTextMuted`, with emphasised `"wellness conversations"` in `.alcheInk`.
- Bottom 1pt divider.

### `Features/DoctorSessions/Components/PractitionerRecommendationList.swift` — new

- `ForEach` 0..<topThree.count.
- Row `Grid`: 24pt num · flexible body · trailing chev.
- Body: Newsreader italic 22pt name (from `displayTitle`), Noto 13pt role (`roleLabel + " · " + specialty`), a 2pt left-rule pull-quote in italic 13.5pt muted (only renders when `memberPullQuote != nil`), mono 9pt meta row.
- `FIRST SESSION COMPLIMENTARY` appears in `.alchePrimary`, bold, only when `isComplimentary`.
- 1pt divider between rows.

### `Features/DoctorSessions/Components/PractitionerFilterRow.swift` — new

- `HStack`: mono 10pt underlined link "Filter by specialty →" (black, letter-spacing 0.22em); right-aligned mono 9.5pt muted count.
- 16pt vertical padding. 1pt light bottom divider.

### `Features/DoctorSessions/Components/PractitionerLegalDisclaimer.swift` — new

- 1pt `.alcheInk` border, `Color.alcheSurfaceWarm` background (use `bg-warm` token).
- Title mono bold 9pt uppercase: `"WELLNESS, NOT MEDICAL"`.
- Body Noto 11pt 1.5 line-height: `"Sessions are for wellness guidance and lifestyle optimization. They do not constitute medical advice, diagnosis, or treatment."`
- 16pt outer margin, 12pt inner padding.

### `Features/DoctorSessions/PractitionerDetailView.swift` — edit

- Remove any `RatingStarsView` usage; replace with a muted italic line showing member tenure ("Working with Alche members since March 2024").
- Ensure `PractitionerLegalDisclaimer` is present here as well.

### `Features/DoctorSessions/SessionBookingView.swift` — edit

- Pre-fill with recommended slot when navigated from primary CTA.
- Confirm step includes `PractitionerLegalDisclaimer` above the Stripe / Longevity+ credit line.

### Components to delete / archive

- `SpecialtyFilterPill` — delete.
- `RatingStarsView` — delete (or move to a `/Archive` folder if referenced elsewhere; audit says this is the only caller).
- `PractitionerCard` gradient / rating / review-count block. Replaced by `PractitionerRecommendationList` + `PractitionerCompactList` (the sheet's full-list variant).

## Design token compliance

- No `Capsule()`, no `.clipShape(Capsule())` anywhere in `Features/DoctorSessions/`.
- Colors: `.alcheInk`, `.alcheTextMuted`, `.alchePrimary`. No amber stars. No pastel.
- Radii: `AlcheRadii.sm` (2pt) on the legal-disclaimer box; zero elsewhere.
- Fonts via Alche tokens only.

## Localisation

- Role labels ("Longevity practitioner", "Wellness practitioner") translatable (DE: *Longevitäts-Expertin* / *Wellness-Expertin*, verify with copy review).
- Disclaimer text has a DE translation approved by legal — **do not auto-translate**.
- Pull quotes stored per locale; EN renders only if no DE version exists and vice versa.

## Acceptance criteria

- [ ] No stars / review count on any DoctorSessions view.
- [ ] No `Capsule()` filters.
- [ ] `PractitionerDisclaimerVoice` visible above the list on entry.
- [ ] `PractitionerLegalDisclaimer` visible at the bottom of the list view AND on `PractitionerDetailView` AND in the booking confirmation step.
- [ ] Practitioner `displayTitle` is `"Dr. X"` only when `medicalLicense != nil`.
- [ ] `FIRST SESSION COMPLIMENTARY` chip only appears for Longevity+ members who have not previously booked that practitioner.
- [ ] `DataSourceIndicator("Sample Data")` shown.
- [ ] `.font(.alcheBody)` / `.alcheMono` / `.alcheDisplayS` only.
- [ ] VoiceOver reads: stamp → read → disclaimer-voice → each practitioner (title, role, pull-quote, next slot, complimentary if applicable) → filter → primary CTA → legal disclaimer.
- [ ] `xcodebuild` passes with 0 errors.

## Out of scope

- Video-call integration.
- Insurance billing UI (Alche sessions are out-of-pocket or Longevity+ membership-included).
- Practitioner availability calendar scrub (stays on detail/booking views).
