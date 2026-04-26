---
screen: Shop
slug: shop
status: designed
design-date: 2026-04-24
---

# Shop — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Shop/ShopView.swift`

## What changes vs current

**Remove:**
- "THE SHOP" overline + full hero editorial header "Curated for / Longevity" (lines 19-33). Replaced by read stamp + italic read.
- Horizontal category `AlcheTag` row including the Saved-with-count-bubble button (lines 38-98). Categories move behind "Search →" in Elsewhere; Saved becomes one line in Elsewhere.
- 2-column staggered `LazyVGrid` of `ProductCard`s (lines 101-153). Replaced by a 3-row vertical list of hero products.
- BESTSELLER / NEW badges on product cards (part of 236-337). Editorial kicker text replaces them ("FOR SLEEP · REORDER", "FOR BRAIN · NEW BATCH").
- SF Symbol heart overlay on product cards (part of 236-337). Save lives on product detail.
- Three-column "Ethically Sourced / Science-Backed / Free Shipping 60€+" info strip (lines 157-178). Single italic disclaimer footer replaces it.
- `.searchable(text:)` nav-bar prompt (line 223). Search reachable via Elsewhere "Search →" → pushes a dedicated `ShopSearchView`.

**Add:**
- `AlcheReadCard` (shared) — three-line italic read referencing the member's protocol + restock state.
- `MonthlyPicksSection` — a month masthead ("April formulations" italic + "3 PICKS" mono) above a vertical list of 3 `HeroProductRow`s.
- `HeroProductRow` — numbered index, 64×80 bordered image, kicker (mono, 2 tokens), italic product name as a sentence, one Noto Sans mechanism line, mono price + member price, mono underlined "Add →" button.
- `AlcheInterstitial` — narrator voice between hero picks and Elsewhere.
- `ElsewhereSection` — three NavigationLinks: Full catalogue / Saved / Search, mono underlined with italic hints (count / descriptor).
- `CartStrip` — sharp 2px-corner black mono strip just above the tab bar, showing "N · BASKET · €total" + "Review →". Replaces the floating bag-icon bar.
- `LegalFooter` — single italic disclaimer line inside frame.

**Keep:**
- `ShopViewModel` (products, filteredProducts, wishlist, cart), `CartView` sheet as destination of Cart Strip.
- Product model with `memberPrice`, `categories`, `sortOrder`, `inStock`.
- `isMember` flag; drives member-price display.
- `.accessibilityLabel` treatment for prices (current implementation is solid; do not regress).

## View structure (top to bottom)
1. `ContextBand` — "APRIL · MEMBER · FREE SHIPPING 60€+" / "{cartCount} IN CART"
2. `AlcheReadStamp` — "ALCHE · THREE I'D TAKE MYSELF"
3. `AlcheReadCard` — protocol + restock read
4. `MonthMastheadRow` — italic "{Month} formulations" + "3 PICKS"
5. `HeroProductRow` × 3 — hairline dividers between
6. `AlcheInterstitial` — "Everything else lives below."
7. `ElsewhereSection` — Full catalogue / Saved / Search
8. `LegalFooter` — italic disclaimer
9. `CartStrip` — pinned above tab bar (conditional on cart > 0)

## ViewModel changes
- Add `monthlyPicks: [HeroPick]` — curated set of 3 products computed from (a) protocol recommendations, (b) reorder signals (last-ordered ≥ 25 days ago), (c) new-batch flag. Falls back to bestsellers if signals are empty.
- Add `heroRead: AlcheRead` — three italic lines. Example: "Your protocol calls for magnesium. / The iron you restocked last / month is almost out — this month, three."
- Add `monthLabel: String` — localized current month, title-case.
- Add `elsewhereCounts: (catalogue: Int, saved: Int)`.
- Add `addToCart(hero:)` — animates adds, increments `cartCount`, pushes `CartStrip` into view.

## New components needed
- `AlcheReadCard` (shared)
- `AlcheInterstitial` (shared)
- `HeroProductRow` (Shop-local)
- `CartStrip` (Shop-local; could graduate to shared if other screens reuse)
- `MonthMastheadRow` (Shop-local)

## Data dependencies
- `ProductService.allProducts`
- `ProtocolService.currentProtocol.recommendedSupplements` (drives monthly picks #1)
- `OrderHistory.lastOrdered(productId:)` (drives restock kicker)
- `ProductService.newBatchFlagged` (drives "NEW BATCH" kicker)
- `MembershipViewModel.isMember`
- `CartService.count`, `.formattedTotal`
- `WishlistService.count`
- User's `genderPresentation` / `bodyTracking` preference — iron-bisglycinate copy must explicitly mention menstruating bodies when relevant (women & queer first default: included for all unless user's body-tracking preference is "androgen").

## Accessibility / localization notes
- Each `HeroProductRow` is a single accessible element combining kicker, name, mechanism, and price. "Add →" is a nested button with its own label ("Add magnesium glycinate to basket").
- Italic product names: VoiceOver should not read as italic; just the text.
- Price accessibility: "Twenty-eight euros, member price. Regular price thirty-four euros."
- Iron copy must localize gracefully — German: "für alle, die menstruieren". Do not hard-code "women".
- Legal footer: `LocalizedStringKey`, German variant tested. "Supports wellness" → "unterstützt Wohlbefinden". Never use "behandelt / heilt / diagnostiziert".
- Cart strip: tap target 64pt tall; announced as "Review basket, 3 items, 84 euros".
- Numbered indexes (01, 02, 03) are decorative — `.accessibilityHidden(true)`.

## Estimated effort
L (restructure is significant; product detail + add-to-cart flows stay but the list surface is entirely new)
