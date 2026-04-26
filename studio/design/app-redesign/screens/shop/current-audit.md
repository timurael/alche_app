---
screen: Shop
slug: shop
group: core
primary-swift-file: app/Alche/Features/Shop/ShopView.swift
status: audited
audit-date: 2026-04-24
---

# Shop — Audit

**Purpose:** Browse and purchase supplements and curated products, with wishlist, category filter, cart, and checkout sheet.

**Current structure (top to bottom):**
- Hero editorial header: "THE SHOP" overline + `alcheDisplayXL` italic "Curated for / Longevity" + 3-line subtitle (lines 19-33)
- Horizontal `AlcheTag` category row: "All" + "SAVED ♥" (with count bubble) + `ProductCategory.allCases` tags (lines 38-98)
- 2-column staggered `LazyVGrid` of `ProductCard`s — 4:5 aspect, no card chrome, badges (BESTSELLER/NEW), favorite heart, price/member-price/strikethrough (lines 101-153, 236-337)
- Empty state variants for wishlist-only vs general (lines 113-131)
- Info section: "Ethically Sourced / Science-Backed / Free Shipping 60€+" 3-column info strip (lines 157-178)
- Legal disclaimer footer (lines 182-187)
- Floating cart bar: bag icon + item count + total, opens `CartView` sheet (lines 195-218)
- `.searchable` prompt in nav bar (line 223)

**3 problems:**
1. **Three parallel browse taxonomies** — Search (nav bar), Saved/Wishlist toggle (mixed into category row), and 5+ category tags (lines 85-96). The SAVED tag has its own button styling (lines 52-83) with a count bubble, different from the other `AlcheTag` variants — visual hierarchy breaks.
2. **Product cards silent of editorial voice** — The `ProductCard` at lines 236-337 is image placeholder + SF Symbol + name + price strikethrough + favorite heart. No ingredient story, no "why this for you", no Alche curation note. Every product looks like every other.
3. **Disclaimer and Info strip bury at bottom, hero shouts at top** — The "Curated for / Longevity" hero (lines 22-27) uses the full editorial vocabulary, but below it the grid is a pure commerce grid with no commentary. Then lines 157-187 dump "Ethically Sourced / Science-Backed / Free Shipping" as afterthought. The screen loses its voice after the hero.

**Dialog-first transformation:**
Open with a single italic read in Alche's voice: "For this month, three formulations / I would take myself. / Everything else lives below." Feature three hero products vertically — each a single line with italic name, one-line mechanism in Noto Sans, tiny mono price/member price. Below them, a quiet mono escape hatch: "Browse the full shop →". Category filter, search, saved — all demote to the escape-hatch level, not the top. Cart bar stays but collapses to a sharp 2px-corner mono summary.

**Available data to feed the dialog:**
- `viewModel.filteredProducts`, `selectedCategory`, `showWishlistOnly`, `wishlistCount`
- `isMember` flag (drives member pricing)
- `cartCount`, `formattedCartTotal`
- Each `Product`: name, productType, price, memberPrice, inStock, sortOrder (for BESTSELLER/NEW)
- Member's selected goals (drives "for you" recommendations)
- Member's current supplement stack (avoid duplicates)
- Past orders (restock nudges)
- Search text

**Tone direction for this screen:**
Curatorial, restrained — "I would take this one. Here's why." Never aisle-shouting.

---
