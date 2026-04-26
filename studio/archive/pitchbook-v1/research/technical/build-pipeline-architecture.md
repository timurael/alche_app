# Build Pipeline Architecture

## Overview

Each pitch book version (A-E) has its own directory with modified HTML sections and a `build.mjs` script. The build script:

1. Reads section HTML files (modified from local dir, originals from parent dir)
2. Extracts `<style>` blocks and `<body>` content from each section
3. Strips em dashes from body text (preserves CSS custom properties)
4. Fixes image paths for parent-dir sections (screens/ -> ../screens/)
5. Assembles a single combined HTML file with inlined CSS
6. Renders PDF via screenshot-per-page approach

## Directory Structure

```
pitchbook/
  _design-system.css          # Shared CSS (1,288 lines)
  render-pdf.mjs              # Shared PDF renderer
  fonts/                      # Local font files (14 woff2 + 14 TTF)
    fonts-local.css           # @font-face declarations with ../fonts/ paths
    fonts-embedded.css        # @font-face with base64 data (unused, kept as backup)
  screens/                    # 15 individual app screen PNGs (S01-S15)
  section-00-cover.html       # Original sections (shared across versions)
  section-01-insight.html
  ...
  section-13-closing.html
  version-a/                  # Each version has modified sections + build script
    build.mjs
    section-05-solution.html  # Modified sections
    section-06-product.html
    section-11-team.html
    ...
  version-b/ ... version-e/
```

## Key Technical Decisions

### Em Dash Stripping
Build scripts use regex to replace textual `--`, `&mdash;`, em dash, en dash with commas in body content while preserving CSS `var(--custom-property)` syntax.

### Image Path Resolution
- Sections from parent dir: `screens/` rewritten to `../screens/`
- Sections from version dir: already use `../screens/`
- HTTP server serves from parent dir, making all paths resolve correctly

### Font Loading Strategy
- Local @font-face declarations with `../fonts/` relative paths (primary)
- Google Fonts CDN `<link>` tag (fallback for HTML viewing)
- Screenshot-based rendering captures fonts regardless of PDF engine support

### Print Overrides
- Glass/backdrop-filter effects replaced with solid backgrounds (PDF doesn't support backdrop-filter)
- Page break rules for A4 layout
- Overflow hidden on .page elements
- Image max-width and table-layout fixes

## Sources

- Playwright API: https://playwright.dev/docs/api/class-page
- pdf-lib for PDF assembly: https://pdf-lib.js.org/
- CSS @page specification: https://www.w3.org/TR/css-page-3/
- Google Fonts CSS2 API: https://developers.google.com/fonts/docs/css2
