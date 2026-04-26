---
screen: Discover
slug: discover
status: designed
design-date: 2026-04-24
---

# Discover — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Discover/DiscoverView.swift`

## What changes vs current

**Remove:**
- `Picker("Section", selection:)` with `.pickerStyle(.segmented)` (lines 9-16). No iOS segmented control on this screen.
- `switch selectedSection` branching (lines 18-30). Single-surface view.
- Inline `eatOutSection` mini-homepage (lines 95-161). Moves behind an "Elsewhere" link → reuses `RestaurantListView`.
- Large `.navigationTitle("Discover")` (line 32). Replaced by in-frame read stamp + mini masthead.
- `savedSection` as a top-level tab (lines 70-91). Reachable through Elsewhere link; full surface can still push `SavedArticlesView`.

**Add:**
- `AlcheReadCard` at the top (shared dialog component) reading Alche's three-line weekly framing. Copy driven by `DiscoverViewModel.weeklyRead` (computed from day-of-week + number of flagged articles).
- `FeaturedArticleCard` — a new component: image, kicker, meta, italic headline, byline. Uses the first `viewModel.articles` item sorted by `featuredScore`.
- `ArticleDigestRow` — a lean row with numbered index (02 / 03 / 04), mono meta (topic · read time · date), italic Newsreader headline. One line of horizontal padding, 1px hair divider between rows.
- `AlcheInterstitial` — narrator voice block (already in shared-components.css; ship a SwiftUI equivalent). Used between lead and list, and between list and Elsewhere.
- `ElsewhereSection` — three NavigationLink rows (Events / Eat Out / Saved) styled as mono underlined labels with italic Newsreader hint text on the right (count or phrase).

**Keep:**
- `DiscoverViewModel` with `articles`, `bookmarkedArticles`, `events`, `restaurants`. ViewModel surface is unchanged; the view rearranges consumption.
- `ContentCardView` as reusable (but now only used inside the lead + digest, re-skinned).
- `toggleBookmark(id:)` affordance on the featured article detail (long-press) and on individual article pages — not on the list.

## View structure (top to bottom)
1. `ContextBand` — "WEEK {n} · {WEEKDAY}" / "ISSUE {issueNumber}"
2. `AlcheReadStamp` — "ALCHE · THIS WEEK I'M READING"
3. `AlcheReadCard` — three-line italic framing
4. `MastheadRow` — italic "The Lead" + mono "X MIN READ" trailing
5. `FeaturedArticleCard` — hero article with border, hard shadow, 2px radius
6. `AlcheInterstitial` — "And three quieter ones I kept flagged for you."
7. `ArticleDigestList` — 3 numbered rows
8. `AlcheInterstitial` — "Looking for something else?"
9. `ElsewhereSection` — Events / Eat Out / Saved as mono underlined NavigationLinks with italic hints

## ViewModel changes
- Add `weeklyRead: AlcheRead` — computed property producing three italic lines derived from `articles.count`, `flaggedTopics`, current weekday.
- Add `featuredArticle: ContentArticle?` — first article sorted by (pinnedByCurator, featuredScore, publishedAt).
- Add `digestArticles: [ContentArticle]` — next 3 after featured.
- Add `issueNumber: Int` — weeks since user.createdAt.
- Add `elsewhereCounts: ElsewhereCounts` — `(eventsNearMe, partnerRestaurants, savedCount)`.

## New components needed
- `AlcheReadCard` (shared — A2 owns the first implementation)
- `AlcheInterstitial` (shared)
- `FeaturedArticleCard` (Discover-local)
- `ArticleDigestRow` (Discover-local)
- `ElsewhereRow` (Discover-local; could graduate to shared if Booking reuses)

## Data dependencies
- `viewModel.articles` (existing)
- `viewModel.events` (existing — only `.count` and `.nearMeCount` exposed on this screen)
- `viewModel.restaurants` (existing — only count)
- `viewModel.bookmarkedArticles` (existing — only count)
- `viewModel.user.createdAt` for issueNumber
- Current weekday from `Date.now` via locale-aware calendar
- **Navigation destinations** (existing): `EventsListView`, `RestaurantListView`, `SavedArticlesView`, `ArticleDetailView`.

## Accessibility / localization notes
- Italic Newsreader on `.headline` role is fine for sighted readers; VoiceOver should announce without italic hint ("This week I'm reading: three pieces on slow strength…").
- Every mono label (WEEK 17 · FRI, ISSUE 41, FOR YOU · LONGEVITY) must be `LocalizedStringKey`. Formatters: `Date.FormatStyle` for week / weekday; localized issue string "Issue {n}".
- "Elsewhere" label and its three destinations must pluralize correctly ("1 near you", "2 near you").
- Minimum tap target 44pt for every row in the digest and elsewhere block — widen row padding to 12pt vertical.
- Numbered index (02, 03, 04) is decorative; mark `.accessibilityHidden(true)`.

## Estimated effort
M
