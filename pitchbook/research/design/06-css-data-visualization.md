# CSS-Only Data Visualization for Print/PDF

## Why CSS-Only?

For PDF/print output, all visualization MUST be pure CSS. JavaScript chart libraries (D3, Chart.js, etc.) break in headless browser rendering or produce inconsistent results. CSS visualizations are also deterministic — they render identically every time.

## Critical Print Rule

```css
* {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}
```

Without this, `background` properties (which CSS charts rely on) may not render in print.

## Technique Reference

### Horizontal Bar Chart

```css
.bar-chart { display: flex; flex-direction: column; gap: 12px; }
.bar-row { display: flex; align-items: center; gap: 12px; }
.bar-label { width: 100px; font-size: 13px; }
.bar-track { flex: 1; height: 28px; background: var(--text-08); border-radius: 4px; }
.bar-fill {
  height: 100%;
  border-radius: 4px;
  background: var(--accent-primary);
  display: flex;
  align-items: center;
  padding-left: 8px;
  font-family: monospace;
  font-size: 11px;
  color: white;
}
/* Usage: <div class="bar-fill" style="width: 72%">72%</div> */
```

### KPI Display Card

```css
.kpi { text-align: center; padding: 24px; }
.kpi-number {
  font-family: monospace;
  font-size: 48px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
.kpi-label {
  font-size: 12px;
  color: var(--text-50);
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

### Pie / Donut Chart (Pure CSS)

```css
.donut {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    var(--accent-primary) 0% 35%,
    var(--accent-growth) 35% 55%,
    var(--accent-neutral) 55% 100%
  );
  position: relative;
}
.donut::after {
  content: '';
  position: absolute;
  inset: 25%;
  border-radius: 50%;
  background: var(--bg);
}
```

### 2x2 Competitive Matrix

```css
.matrix {
  position: relative;
  width: 400px;
  height: 400px;
  border-left: 2px solid var(--text-15);
  border-bottom: 2px solid var(--text-15);
}
.matrix-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-primary);
}
.matrix-dot.highlighted {
  width: 16px;
  height: 16px;
  background: var(--accent-urgency);
  box-shadow: 0 0 0 4px rgba(184, 107, 74, 0.2);
}
```

### Timeline / Milestones

```css
.timeline { position: relative; padding-left: 32px; }
.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--text-15);
}
.timeline-node { position: relative; padding-bottom: 32px; }
.timeline-node::before {
  content: '';
  position: absolute;
  left: -28px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 2px solid var(--bg);
}
```

### Additional Techniques

- **Progress rings:** `conic-gradient()` on a circular element, single-color variant of donut
- **Stacked bars:** flexbox row with colored segments, percentage widths
- **Sparklines:** `clip-path: polygon()` on a thin div for simple trend lines
- **CSS counters:** `counter-increment` and `counter()` for auto-numbered lists and cards
- **Clip-path shapes:** `clip-path: polygon()` for hexagons, arrows, custom geometry

### Key Rule

Always include the specific number ON the visualization. Never make the reader guess from bar height or segment size.

## Framework

[Charts.css](https://chartscss.org/) — a CSS data visualization framework that transforms HTML elements into charts using utility classes. Open source, no JavaScript, print-safe.

## Sources

- [Charts.css — CSS Data Visualization Framework](https://chartscss.org/)
- [Making Charts with CSS — CSS-Tricks](https://css-tricks.com/making-charts-with-css/)
- [8 CSS Charting Techniques — WebFX](https://www.webfx.com/blog/web-design/css_techniques_charting_data/)
- [46 CSS Chart Examples — WP Dean](https://wpdean.com/css-charts/)
