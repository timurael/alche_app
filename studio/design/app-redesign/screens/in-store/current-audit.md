---
screen: InStore
slug: in-store
group: services
primary-swift-file: app/Alche/Features/InStore/InStoreView.swift
status: audited
audit-date: 2026-04-24
---

# InStore — Audit

**Purpose:** The physical-space companion screen for when a member is at the Berlin venue — membership card, active-session countdown, QR check-in, quick-actions, membership status.

**Current structure (top to bottom):**
- `MembershipCardView` (member card, line 15)
- Conditional `ActiveSessionCard`: name + "In progress" / "Session complete" + countdown timer (`.displayL.monospacedDigit()`) + progress bar (lines 20-25, 119-176)
- Conditional `QRCheckInCard` (CoreImage QR generator, white card, 180×180 QR, "Show this at the entrance" helper, mono code, lines 180-226) OR `NoBookingCard` fallback (lines 230-249)
- "QUICK ACTIONS" overline + 2×2 `LazyVGrid`: Order Smoothie / Book Session / My Credits / Events — each a tile with icon + title + subtitle (lines 38-82, 252-294)
- Membership status row: credit card icon + "N Member" + "N LED credits this month" (lines 85-102)
- `.navigationTitle("In-Store")` large (lines 108-109)
- 1-second session timer publisher drives countdown refresh (lines 7, 23-26)

**3 problems:**
1. **Five equal-weight blocks = no moment** — Membership card, active session, QR code, 2×2 quick actions grid, membership status row. Each is an `AlcheCard`-styled block with its own accent color (lines 85-102 has its own card). The screen is the most physically-contextual surface in the app (member is literally in the building) and it renders as a utility dashboard.
2. **QR code as a raw white card with mono code fallback** — Lines 180-226 render a 180×180 QR on `alcheWhite` with "Show this at the entrance" + the raw code underneath as mono. No editorial framing, no "welcome back, Lena — scan this at the door." The moment of arrival in the physical space carries zero voice.
3. **Two out of four quick actions are TODO stubs** — Line 71's "My Credits" and line 79's "Events" both have `// TODO: Navigate to...` comments. Shipping visible tiles that do nothing when tapped breaks the screen's trust. The 2×2 grid also duplicates navigation to features already reachable from the tab bar (Book Session → Booking tab, Events → Discover).

**Dialog-first transformation:**
When the member arrives at the venue (auto-detect via geofence or session start), the screen opens with context-aware dialog: "Welcome back, Lena. / You're booked for Suite 2, 15:00. / Show this at the door →" with the QR large below, framed as a single card-free surface. While a session is active, the screen replaces the read with "Session in progress. / 6m 14s remaining." Quick actions collapse to two mono escape hatches: "Order a smoothie from my seat →" and "Back to home →". The screen has one thing to say at a time.

**Available data to feed the dialog:**
- `viewModel.membership`, `viewModel.membershipTierName`, `creditsRemaining`
- `viewModel.activeSession` (booking + remaining time + progress + isComplete)
- `viewModel.qrCodeString`, `viewModel.isCheckedIn`
- User's first name (hard-coded "Lena M." at line 17)
- Current time vs scheduled session start
- Next upcoming booking (if no active session)
- Last smoothie ordered (quick re-order)

**Tone direction for this screen:**
Doorman / concierge — aware of where the member is, what they're about to do, and saying exactly what's needed. Warm, brief.

---
