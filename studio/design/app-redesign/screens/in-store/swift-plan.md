---
screen: InStore
slug: in-store
group: services
primary-swift-file: app/Alche/Features/InStore/InStoreView.swift
plan-date: 2026-04-24
---

# InStore — Swift implementation plan

## Intent

Transform the physical-venue companion screen from a five-block utility dashboard (membership card, active session card, QR card, 2×2 quick actions, membership status row) into a single **doorman/concierge read**: Alche welcomes the member by name, confirms what they're here for, and presents the QR as the one action. Two quick escapes below. No duplicated tab-bar navigation tiles. No stub buttons.

## Key behaviour changes

1. **One read, one action.** The read is three italic lines; the QR is the action. Everything else is demoted or removed.
2. **State-aware read.** Three states drive the read copy:
   - **Arriving (booked, pre-session):** "Welcome back, Lena. / You're booked for Suite 2. / Show this at the door."
   - **In session:** "Session in progress. / 6m 14s remaining." — QR replaced with a minimal countdown row.
   - **Between sessions, no booking:** "You're at Alche Berlin. / Nothing on the calendar. / Browse today's openings."
3. **QR gets editorial framing.** No raw white card. Corner-marked frame, mono kicker "ENTRY CODE · VALID 15:00–15:45", italic helper ("Or tap your phone on the reader.").
4. **2×2 grid removed.** Replaced with two mono escape links: "Order a smoothie from my seat →" (real, opens order sheet) and "Back to home →". "My Credits" and "Events" stubs deleted — credits move to the footer; events live in Discover.
5. **Membership status demoted** to a mono footer row (`LONGEVITY+ MEMBER · 4 LED CREDITS LEFT`).

## File-by-file

### `Features/InStore/InStoreView.swift` — rewrite

```swift
struct InStoreView: View {
    @State private var viewModel = InStoreViewModel()
    @Environment(\.colorScheme) var scheme
    private let timer = Timer.publish(every: 1, on: .main, in: .common).autoconnect()

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 0) {
                AlcheContextBand(
                    left: .init(kind: .venueLive, text: "You're at Alche Berlin"),
                    right: .init(text: Self.contextTime())
                )
                AlcheReadStamp(label: readStampLabel)
                AlcheReadView(lines: readLines)

                switch viewModel.surface {
                case .qrEntry(let code, let validWindow):
                    InStoreQRSurface(code: code, validWindow: validWindow)
                    InStoreNextBookingRow(booking: viewModel.nextBooking)
                case .activeSession(let session):
                    InStoreActiveSessionRow(session: session)
                case .noBooking:
                    InStoreNoBookingCTA()
                }

                InStoreEscapeRow(
                    onOrder: viewModel.startSmoothieOrder,
                    onHome: viewModel.goHome
                )

                InStoreCreditsFooter(
                    tierName: viewModel.membershipTierName,
                    creditsRemaining: viewModel.creditsRemaining
                )
            }
        }
        .background(Color.alcheBackground)
        .onReceive(timer) { _ in viewModel.tick() }
        .task { await viewModel.load() }
    }

    private var readStampLabel: LocalizedStringKey {
        switch viewModel.surface {
        case .qrEntry:       return "ALCHE · WELCOME BACK"
        case .activeSession: return "ALCHE · IN SESSION"
        case .noBooking:     return "ALCHE · YOU'RE HERE"
        }
    }

    private var readLines: [AlcheReadLine] { viewModel.readLines }
}
```

### `Features/InStore/InStoreViewModel.swift` — extend

Add:

```swift
enum InStoreSurface: Equatable {
    case qrEntry(code: String, validWindow: ClosedRange<Date>)
    case activeSession(BookingSession)
    case noBooking
}

@Observable @MainActor
final class InStoreViewModel {
    var surface: InStoreSurface = .noBooking
    var readLines: [AlcheReadLine] = []
    var membershipTierName: String = "Longevity+"
    var creditsRemaining: Int = 0
    var nextBooking: Booking?

    func load() async { /* existing logic — derive surface + readLines */ }
    func tick() { /* update countdown on activeSession surface */ }
    func startSmoothieOrder() { /* route to SmoothieOrderView sheet */ }
    func goHome() { /* AppState.selectedTab = .home */ }
}

extension InStoreViewModel {
    private func composeReadLines(for surface: InStoreSurface, firstName: String) -> [AlcheReadLine] {
        switch surface {
        case .qrEntry(_, _):
            return [
                .plain("Welcome back, \(firstName)."),
                .emphasised(before: "You're booked for ", emphasis: "Suite 2", after: "."),
                .dim("Show this at the door.")
            ]
        case .activeSession(let session):
            return [
                .plain("Session in progress."),
                .dim("\(session.remainingFormatted) remaining.")
            ]
        case .noBooking:
            return [
                .plain("You're at Alche Berlin."),
                .dim("Nothing on the calendar."),
                .emphasised(before: "Browse ", emphasis: "today's openings", after: ".")
            ]
        }
    }
}
```

### `Features/InStore/Components/InStoreQRSurface.swift` — new

- Uses `CoreImage` to render QR into 180pt image (existing logic preserved).
- Wraps it in `AlcheFramedSurface(kind: .cornerMarks)` (black 1.5px stroke, filled black 8pt corner dots, `AlcheRadii.sm`).
- Above QR: mono kicker with validWindow range formatted as `HH:mm–HH:mm`.
- Below QR: `AlcheMonoCode` showing the code with letter-spacing `0.3em`.
- Below frame: italic Newsreader helper "Or tap your phone on the reader." in `.alcheTextMuted`.

### `Features/InStore/Components/InStoreEscapeRow.swift` — new

- `HStack(spacing:0)` with two tap targets.
- Left: "Order a smoothie / from my seat →" (multi-line mono, 10pt, letter-spacing 0.22em).
- Right (with `1pt` left divider): "Back to home →".
- Top 1pt divider. Tap targets min-height 52pt.

### `Features/InStore/Components/InStoreCreditsFooter.swift` — new

- Single `HStack`, 18pt padding, mono 10pt.
- Left: `"LONGEVITY+ MEMBER"` (or tier).
- Right: `"N LED CREDITS LEFT"` with the `N` bold black, rest muted.

### Components to delete / archive

- `MembershipCardView.swift` — remove from InStore. Retain only if referenced in Profile; otherwise archive.
- Inline 2×2 `LazyVGrid` and its `QuickActionTile` uses (lines 38-82, 252-294 of current file).
- `NoBookingCard` as a bordered card — replaced by `InStoreNoBookingCTA` (a read + one `AlcheButton`).
- "My Credits" and "Events" TODO navigation stubs.

## Design token compliance

- Read typography: `.font(.alcheDisplayL)` italic Newsreader for the three lines (mirrors Home).
- QR frame stroke: `Color.alcheInk` (editorial-black), `AlcheRadii.sm` (2pt).
- Shadow on QR frame: `AlcheShadow.sm` (hard 2pt drop).
- No pastel. No capsule pills. No SF Symbol quick-action tiles.

## Localisation

- All user-facing strings `LocalizedStringKey`.
- First name pulled from `ProfileService` not hard-coded `"Lena M."`.
- Time-window formatter uses user locale (24h in DE, 12h in EN-US).

## Acceptance criteria

- [ ] Screen shows one read + QR + one booking line + two escapes + credits footer. Nothing else.
- [ ] Read copy switches correctly across three states (qrEntry / activeSession / noBooking).
- [ ] No `TODO: Navigate to...` stubs remain.
- [ ] No `MembershipCardView` references on this surface.
- [ ] No capsule (`Capsule()`) or `.clipShape(Capsule())` anywhere on the screen.
- [ ] Uses `.font(.alcheMono)`, `.font(.alcheDisplayL)`, `.font(.alcheCaption)` — no system fonts.
- [ ] Dark mode tested — `Color.alcheBackground` / `Color.alcheSurface` only.
- [ ] VoiceOver reads: stamp label → three read lines → QR value → booking row → escapes → footer.
- [ ] `xcodebuild` passes with 0 errors.

## Out of scope

- Geofence-driven auto-open (post-MVP).
- NFC tap-on-reader flow (the "Or tap your phone" copy is aspirational — backing service is future work).
- Paying for smoothies from seat (link only; real order flow lives in existing `Shop/Smoothie` module).
