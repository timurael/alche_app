# Design System Tokens Reference

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--cream` | #F5F0E8 | Page background, primary surface |
| `--deep` | #2C2418 | Primary text, headlines |
| `--amber` | #C4956A | Accent, CTAs, data highlights |
| `--sage` | #8B9E7C | Physical/nature, secondary accent |
| `--terra` | #B86B4A | Tertiary accent, warnings |
| `--rose` | #C47A8A | Invalidated/removed items |
| `--stone` | #9E978E | Muted text, captions |

### Opacity Variants
`--deep-70`, `--deep-30`, `--deep-15`, `--deep-08`, `--deep-04` for text and border opacity levels.

## Typography

| Token | Font | Usage |
|-------|------|-------|
| `--font-serif` | Cormorant Garamond, Georgia, Times New Roman | Headlines h1-h6, pull quotes, wordmark |
| `--font-sans` | Outfit, -apple-system, sans-serif | Body text, descriptions, labels, UI |
| `--font-mono` | Space Mono, Courier New, monospace | Financial data, KPIs, dates, table values |

### Size Scale
`--text-xs` (10px), `--text-sm` (11.5px), `--text-base` (13px), `--text-lg` (16px), `--text-xl` (20px), `--text-2xl` (26px), `--text-3xl` (34px)

## Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--page-width` | 210mm | A4 width |
| `--page-height` | 297mm | A4 height |
| `--page-margin-y` | 20mm | Top/bottom page margin |
| `--page-margin-x` | 22mm | Left/right page margin |

## Glass Components

| Class | Usage |
|-------|-------|
| `.glass` | Standard card container |
| `.glass-elevated` | Hero-level containers, KPI rows |
| `.glass-accent` | Narrative sidebars with color signal |
| `.glass-accent--amber/sage/terra/rose` | Colored accent variants |

## Sources

- Design system file: `_design-system.css` (1,288 lines)
- Google Fonts: https://fonts.google.com/specimen/Cormorant+Garamond
- Google Fonts: https://fonts.google.com/specimen/Outfit
- Google Fonts: https://fonts.google.com/specimen/Space+Mono
