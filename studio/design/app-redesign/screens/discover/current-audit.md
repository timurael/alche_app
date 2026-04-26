---
screen: Discover
slug: discover
group: core
primary-swift-file: app/Alche/Features/Discover/DiscoverView.swift
status: audited
audit-date: 2026-04-24
---

# Discover — Audit

**Purpose:** Four-segment browse tab — editorial content articles, events, partner restaurants ("Eat Out"), and saved/bookmarked items.

**Current structure (top to bottom):**
- iOS segmented `Picker` with 4 segments: Content, Events, Eat Out, Saved (lines 9-16)
- `ScrollView` switching on `selectedSection` to one of four section bodies (lines 18-30)
- `contentSection`: LazyVStack of `ContentCardView` articles with bookmark toggle (lines 41-66)
- `eventsSection`: LazyVStack of `EventCardView` with RSVP state, NavigationLink to `EventDetailView` (lines 228-261)
- `eatOutSection`: Intro `AlcheCard` + 4 restaurant rows + "Browse all N" link + `DataSourceIndicator` (lines 95-161)
- `savedSection`: bookmarked-only article list or empty state (lines 70-91)
- Large `.navigationTitle("Discover")` (line 32)
- All sections use `AlcheEmptyStateView` when empty

**3 problems:**
1. **iOS segmented picker is the loudest thing on screen** — Line 13's `.pickerStyle(.segmented)` is a system control with pill-rounded edges and system-blue accent. It has no editorial character and makes four utterly different content types appear functionally equivalent ("choose a tab"). Editorial magazines don't have tabs.
2. **Eat Out section smuggles a sub-homepage** — Lines 95-161 render an intro card, 4 restaurant previews, and a "Browse all" CTA inside a single Picker segment. That's its own mini Discover, awkwardly nested. The only data-source indicator (line 155) lives here, nowhere else.
3. **Zero editorial voice on a screen called "Discover"** — No overline reads, no Alche curation language, no "this week I'm reading —" frame. It's a generic segmented feed. `ContentCardView` is thumbnail + title + timestamp; nothing tells the member *why* Alche is surfacing this.

**Dialog-first transformation:**
The screen becomes a weekly letter — "This week I'm reading —" as the italic read, then a single editorial piece featured large, then a quiet list of three more articles below. Events, restaurants, and saved become mono overlined escape hatches at the bottom (underlined mono links), not top-level tabs. If all four categories must stay equal, replace the segmented picker with a mono horizontal nav (four underlined labels, active one carries a 2px blue underline) and give each section an italic opener in Alche's voice. Saved collapses into Profile. Eat Out moves to Booking or gets its own nav slot.

**Available data to feed the dialog:**
- `viewModel.articles`, `viewModel.bookmarkedArticles`, `viewModel.events`, `viewModel.restaurants`
- `viewModel.isBookmarked(id)`, `viewModel.isRSVPd(id)`
- Current day of week (for weekly cadence framing)
- Member's selected goals (filter content relevance)
- Recently-read articles (continuity)
- Upcoming RSVPs (next event date)
- Last visit to Discover (what's new since)

**Tone direction for this screen:**
Curatorial, editorial — a weekly dispatch from a careful reader, never a content feed.

---
