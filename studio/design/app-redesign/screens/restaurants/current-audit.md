---
screen: Restaurants
slug: restaurants
group: services
primary-swift-file: app/Alche/Features/Restaurants/RestaurantListView.swift
status: audited
audit-date: 2026-04-24
---

# Restaurants — Audit

**Purpose:** Browse partner restaurants in Berlin — filter by cuisine, search, tap to see independently-analyzed nutrition data.

**Current structure (top to bottom):**
- Horizontal `CuisineFilterPill` row: "All" + `CuisineType.allCases` as capsule pills (lines 10-29, 88-105)
- Loading state (centered ProgressView, lines 32-40)
- Error state with `AlcheEmptyStateView` + retry (lines 42-50)
- Empty-filter state with `AlcheEmptyStateView` (lines 51-56)
- `LazyVStack` of `RestaurantCard`s, each: 72pt cuisine-colored gradient thumbnail with SF Symbol + name + "Cuisine · District" + price symbol + optional "Verified" seal + chevron (lines 58-68, 109-189)
- `DataSourceIndicator` at bottom (line 71)
- `.searchable` prompt in nav bar (line 79)
- Large `navigationTitle("Partner Restaurants")` (lines 77-78)

**3 problems:**
1. **Gradient-colored thumbnails with SF Symbol glyphs are kitsch** — Lines 161-176 generate a cuisine-typed gradient (mediterranean=amber, asian=blue, german=black, etc.) with a center SF Symbol (sun.max, leaf, fork.knife). This is the same pattern as `DiscoverView`'s eat-out preview (lines 163-200 there). Two different surfaces carrying the same toy thumbnail language.
2. **Capsule pill filter breaks the 2px sharp vocabulary** — Lines 99-103 use `.clipShape(Capsule())` (9999px radius) for cuisine filter pills. The token system calls `pill` appropriate only for "small status indicators, avatar masks, toggle backgrounds" — filter chips are not in that list. Also conflicts with the sharp-cornered `AlcheTag` used in Shop / Protocols for the same UX.
3. **No nutritional hook on cards** — The whole reason this tab exists is independent nutrition data (per CLAUDE.md REQ-025). But the `RestaurantCard` shows: name + cuisine + district + price + verified — the same info any Zagat listing would show. Nothing on the card previews *why* Alche is a better way to eat out (calories of their most-ordered dish? protein-density? goal fit?).

**Dialog-first transformation:**
Open with an italic read: "Three places I'd eat tonight, / given what you're asking of your body." Then three recommended restaurants featured as single lines — italic name, one-line rationale ("high protein, low processed — fits your Recovery goal"), faint mono district/price suffix. Below them: a mono footer "Browse all 24 partner restaurants →" leading to a flat compressed list (no gradients, no SF Symbol thumbnails, just name + cuisine + district typographically). Search and cuisine filter live inside that full-list escape hatch.

**Available data to feed the dialog:**
- `viewModel.filteredRestaurants` (PartnerRestaurant array)
- `viewModel.selectedCuisine`, `searchText`
- Per restaurant: name, cuisineType, district, priceRange, isVerified, isActive
- Member's selected goals (drives "what fits you")
- Member's recent macro logs (drives "you're protein-light today")
- Time of day (drives "for dinner" vs "for lunch" framing)
- Last restaurant visited (continuity)
- Dish-level nutrition availability per restaurant

**Tone direction for this screen:**
Concierge-at-the-bar — warm, specific, knows what you're after tonight. Never a listings app.

---
