---
screen: Booking
slug: booking
status: designed
design-date: 2026-04-24
---

# Booking — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Booking/BookingListView.swift`

## What changes vs current

**Remove:**
- Editorial header block "BOOK A SESSION / Red Light Therapy / 2-line subtitle" (lines 21-35). The read replaces it.
- `UPCOMING` list at top (lines 37-70). Upcoming demotes to a "Previously" block at the bottom.
- `SessionTypeCard` pair of tiles (lines 112-127). Becomes an inline mono toggle ("· Recovery · Glow").
- Wellness Sessions CTA circle-avatar row (lines 74-108). Wellness bookings surface only inside the "Previously" block; discovery moves to a dedicated entry point in Discover's "Elsewhere" or a Profile sub-screen.
- Filled-blue rounded Confirm button (lines 262-278). Replaced by the shared `AlchePrimaryAction` (black fill, 2px corners, mono label, arrow glyph, hard shadow). Credit + price move to a mono meta line beneath.
- Section overlines "SESSION TYPE", "SELECT DATE", "AVAILABLE TIMES". Narrator interstitials replace them.

**Add:**
- `AlcheReadCard` (shared) — three-line italic read tied to user's chosen goal and last-booked session type. Example: "You chose Recovery. / Red Light is your longest- / standing ritual — which day?"
- `SessionTypeToggle` — inline mono row with two options separated by a dot, active one underlined.
- Two `AlcheInterstitial` blocks: one after the day strip ("Friday is quiet after 2pm — suite two opens up."), one before the Reserve action ("And something for after? — a cacao-protein blend is on your protocol.").
- Restyled `AlchePrimaryAction` Reserve button + mono meta line.
- `PreviouslyBookedSection` at the bottom — a mono kicker followed by `AlcheUtilityRow`s for each upcoming booking (LED or Wellness Session).

**Keep:**
- `BookingViewModel` and its selection state (`selectedDate`, `selectedSlot`, `selectedSessionType`, `wantsPreOrder`, `selectedSmoothie`).
- `DayButton` component (restyle to sharp corners, italic Newsreader number, mono DOW).
- `TimeSlotRow` (restyle to italic time + mono suite, hairline dividers).
- `BookingConfirmationSheet` unchanged — still presents summary, QR, done.
- Smoothie pre-order logic; surfaces as "Add smoothie →" secondary action + a follow-up sheet for pickup time.

## View structure (top to bottom)
1. `ContextBand` — "BERLIN · MITTE · {credits} CREDITS" / "NEXT · {nextSession}"
2. `AlcheReadStamp` — "ALCHE · YOUR NEXT RITUAL"
3. `AlcheReadCard` — goal-aware three-line read
4. `SessionTypeToggle` — inline mono
5. `DayStripScroll` — horizontal 7-day strip
6. `AlcheInterstitial` — day-aware suite/availability observation
7. `TimeSlotList` — vertical slots, hair dividers, selected slot has a 2px black left border
8. `AlcheInterstitial` — smoothie nudge ("And something for after?")
9. `AlchePrimaryAction` Reserve CTA + mono meta line (credit · price · cancel policy)
10. "Add smoothie →" secondary underline link
11. `alche-inner-divider`
12. "PREVIOUSLY · {n} UPCOMING" mono head
13. `AlcheUtilityRow` × upcoming bookings (LED + Wellness Sessions interleaved by date)

## ViewModel changes
- Add `narratorLeadRead: AlcheRead` — three-line read computed from `selectedSessionType`, last-booked type, user's goals (via `ProfileViewModel.goals`).
- Add `daySubtext: String?` — optional interstitial copy driven by `availableSlots(for: selectedDate)` density ("Friday is quiet after 2pm — suite two opens up").
- Add `smoothieNudge: String?` — optional interstitial copy driven by the user's active protocol (looks up one suggested smoothie from `ProtocolService.currentProtocol`).
- Rename `confirmButton` label logic to `reserveCTALabel = "Reserve · \(dayShort) \(time) · \(suite)"`.
- Expose `combinedUpcoming: [UpcomingBooking]` — LED + Wellness Session bookings merged, sorted by startAt, limit 3.

## New components needed
- `AlcheReadCard` (shared — first shipped by A2 on Home)
- `AlcheInterstitial` (shared)
- `AlcheReadStamp` (shared)
- `SessionTypeToggle` (Booking-local; 2 options with mono-underline active state)
- `AlchePrimaryAction` (shared — supersedes `AlcheButton` filled-blue for primary screens; to be added under `Design/Components/`)

## Data dependencies
- `viewModel.availableSlots` grouped by date
- `viewModel.combinedUpcoming` (new) — pulls both `LEDBookingService.upcoming` and `DoctorSessionService.upcomingBookings`
- `ProfileViewModel.selectedGoals` (to write the read)
- `ProtocolService.currentProtocol.recommendedPreRitualSnack` (for smoothie nudge copy)
- `MembershipViewModel.creditBalance`

## Accessibility / localization notes
- Every mono label (`· Recovery`, `SUITE 2 · SELECTED`, `1 CREDIT · €0 · CANCEL ≤ 2H FREE`) must be `LocalizedStringKey` — German translations need to keep the em-dash spacing because they feed the editorial rhythm.
- Session-type toggle: announce as "Session type, Recovery selected. Double-tap to switch to Glow." VoiceOver should not read the leading "·".
- Time slots: selected slot uses a visual 2px left border; VoiceOver gets `.isSelected` trait.
- Day strip: `.accessibilityAdjustableAction` for left/right swipe to change date; each day is its own accessible element with full context ("Friday the 25th, three slots available, currently selected").
- Reserve CTA must remain above fold when the keyboard is absent; if keyboard is visible (no fields here, so unlikely), fall back to a floating safe-area inset.
- Minimum tap targets: day cells 44×56, time slots 44pt tall, toggle options hit area 44pt wide each.

## Estimated effort
M
