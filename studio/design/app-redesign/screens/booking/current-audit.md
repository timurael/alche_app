---
screen: Booking
slug: booking
group: core
primary-swift-file: app/Alche/Features/Booking/BookingListView.swift
status: audited
audit-date: 2026-04-24
---

# Booking — Audit

**Purpose:** Book a Red Light Therapy (LED) session — pick date, time, session type, optional smoothie pre-order, confirm.

**Current structure (top to bottom):**
- Editorial header: "BOOK A SESSION" overline + `alcheDisplayXL` italic "Red Light Therapy" + 2-line subtitle (lines 21-35)
- "UPCOMING" overline + list of `UpcomingBookingCard` rows (or empty state, lines 37-70)
- Wellness Sessions CTA card → navigates to `PractitionerListView` (lines 74-108)
- "SESSION TYPE" pair of `SessionTypeCard` tiles (Glow / Recovery, lines 112-127)
- "SELECT DATE" horizontal `DayButton` scroll of next 7 days (lines 131-151)
- "AVAILABLE TIMES" vertical list of `TimeSlotRow`s (lines 155-198)
- Conditional upsell block: smoothie toggle, smoothie picker navigation, Confirm button with credit + price, cancellation note (lines 202-290)
- `BookingConfirmationSheet` with checkmark, booking summary, QR code, Done button (lines 518-575)

**3 problems:**
1. **Six sequential overlined sections = form, not booking** — UPCOMING / Wellness CTA / SESSION TYPE / SELECT DATE / AVAILABLE TIMES / Upsell (lines 37-290) each announce themselves with identical `alcheOverline` labels. The screen is a stacked config form, not a curated act of reserving a ritual.
2. **Doctor Sessions CTA is a foreign graft** — Lines 74-108 embed a circle-avatar icon + 2-line text row for "Wellness Sessions", styled completely differently from the editorial header and the rest of the booking flow. It reads as a Phase-2.5 afterthought rather than a coherent offer.
3. **Confirm button is a filled-blue rounded CTA** — Line 262-278's `Color.alchePrimary` + `RoundedRectangle(cornerRadius: AlcheRadii.md)` + white text is legacy. It violates the 2px sharp corner token and the Editorial Longevity preference for text-button underlined primaries. The "1 credit + €price" concatenation inside the button (lines 263-273) also makes the action label a price calculator.

**Dialog-first transformation:**
Home already surfaces the next session as a `c-booking-row`. This screen opens with an italic read that connects to goals — "You chose Recovery. / Red Light is your longest-standing ritual. / Which day?" Then a compressed flow: horizontal day strip (unchanged vocabulary), single vertical time list, session type as a small mono toggle below ("· Glow · Recovery"), smoothie as an italic follow-up ("— and something for after?"). Confirm becomes a mono underlined sharp-corner CTA carrying the credit/price as a faint mono suffix line beneath, not inside. Upcoming bookings demote to a mono "previously booked" block below, not above.

**Available data to feed the dialog:**
- `viewModel.upcomingBookings`, `viewModel.availableSlots`
- `viewModel.selectedDate`, `selectedSlot`, `selectedSessionType`
- `viewModel.wantsPreOrder`, `selectedSmoothie`, `preOrderTotal`
- Member's credit balance, tier
- Selected wellness goals (for rec: "Glow suits your focus areas")
- Last session type booked (continuity)
- Next 7 days availability; sparse/full days
- Cancellation policy (2h)

**Tone direction for this screen:**
Instructive, quietly ritual — "here is the next window; show up."

---
