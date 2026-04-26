# Modern CSS Layout — Container Queries, Subgrid, :has()

## Container Queries (Component-Level Responsiveness)

Container queries allow components to respond to their own container's size rather than the viewport. This is essential for reusable components that appear in different layout contexts.

```css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card { flex-direction: row; }
}

@container card (max-width: 399px) {
  .card { flex-direction: column; }
}
```

**Browser support:** 95%+ (Chrome 105+, Firefox 110+, Safari 16+). Production-ready in 2026.

## CSS Subgrid (Inherited Grid Tracks)

Subgrid allows child elements to participate in the parent's grid, ensuring alignment across nested components.

```css
.grid-parent {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

.grid-child {
  grid-column: span 6;
  display: grid;
  grid-template-columns: subgrid;  /* Inherits parent tracks */
}
```

Use for editorial layouts where child elements need to align with the parent grid.

## `:has()` Selector (Parent Selection)

The `:has()` selector enables parent selection — styling a parent based on its children, which was previously impossible in CSS.

```css
/* Card with image gets different layout */
.card:has(img) { grid-template-columns: 200px 1fr; }

/* Section with more than 3 items switches to grid */
.section:has(.item:nth-child(4)) { display: grid; }
```

## Bento / Modular Grid Layouts (2026 Trend)

Content compartmentalized into balanced, non-uniform sections. Structured without being rigid.

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(120px, auto);
  gap: var(--space-4);
}

.bento-grid .feature   { grid-column: span 2; grid-row: span 2; }
.bento-grid .stat      { grid-column: span 1; grid-row: span 1; }
.bento-grid .wide      { grid-column: span 3; grid-row: span 1; }
.bento-grid .full-row  { grid-column: 1 / -1; }
```

## Fluid Spacing with `clamp()`

```css
:root {
  --space-fluid-sm: clamp(0.75rem, 0.5rem + 1vw, 1.25rem);
  --space-fluid-md: clamp(1.5rem, 1rem + 2vw, 2.5rem);
  --space-fluid-lg: clamp(2rem, 1.5rem + 3vw, 4rem);
}
```

## Spacing System (4px Base)

```css
:root {
  --space-1:  4px;    /* Micro gaps */
  --space-2:  8px;    /* Tight spacing */
  --space-3:  12px;   /* Between related elements */
  --space-4:  16px;   /* Standard element gap */
  --space-6:  24px;   /* Between content blocks */
  --space-8:  32px;   /* Between sections */
  --space-10: 40px;   /* Major section breaks */
  --space-12: 48px;   /* Page-level section gaps */
  --space-16: 64px;   /* Hero spacing, cover page */
}
```

## Layout Principles for Editorial Design

- **Golden ratio** (1:1.618) for column splits. Not 50/50.
- **Alternating rhythm:** dense data page → breathing editorial page → dense.
- **At least 30% of every page should be breathing room.**
- **Visual entry/path/terminus:** every page needs a clear entry point, reading path, and resting point.
- **Break the grid intentionally:** one element per spread should defy the grid to create a "designed by hand" feeling.

## Sources

- [CSS Container Queries: Complete Guide 2026 — DevToolbox](https://devtoolbox.dedyn.io/blog/css-container-queries-guide)
- [Container Queries in 2026 — LogRocket](https://blog.logrocket.com/container-queries-2026/)
- [Modern CSS Solutions — moderncss.dev](https://moderncss.dev/)
- [Generating Font-Size CSS Rules and Creating a Fluid Type Scale — Modern CSS Solutions](https://moderncss.dev/generating-font-size-css-rules-and-creating-a-fluid-type-scale/)
