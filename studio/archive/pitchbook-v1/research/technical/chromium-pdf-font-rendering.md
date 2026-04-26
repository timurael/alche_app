# Chromium PDF Font Rendering: Complete Investigation

## The Problem

Playwright (and Puppeteer) use Chromium's `page.pdf()` to render HTML to PDF. This function does NOT embed @font-face web fonts. All custom typography falls back to system fonts (Times New Roman, Arial, etc.), making PDFs look broken or empty.

## What Was Tested (All Failed)

### 1. Google Fonts via `<link>` tag over file:// protocol
- **Result:** Fonts sometimes load in browser but never embed in PDF
- **Why:** file:// protocol has CORS restrictions; Chromium PDF engine ignores @font-face regardless

### 2. Google Fonts via `<link>` tag over HTTP (local server)
- **Result:** Fonts load in browser (13/51 loaded), still not in PDF
- **Why:** Chromium's Skia PDF backend uses system fonts, not CSS @font-face

### 3. Base64-embedded fonts (data: URI in @font-face)
- **Result:** Fonts load in browser, not in PDF
- **Verified:** base64 data decodes to valid woff2 (magic bytes 774F4632)
- **Why:** Same Skia PDF limitation

### 4. Local file fonts (file:// URLs in @font-face)
- **Result:** Blocked by CORS on file:// protocol
- **Chrome flags tested:** `--allow-file-access-from-files`, `--disable-web-security`
- **Why:** Chromium blocks cross-origin file:// font loading

### 5. Local file fonts via HTTP server (relative ../fonts/ paths)
- **Result:** Fonts load in browser (13/14 loaded), not in PDF
- **Why:** PDF engine still ignores @font-face

### 6. System font installation (~/Library/Fonts/)
- **Result:** Fonts detected as "AVAILABLE" via canvas measurement, still not in PDF
- **Discovery:** Google Fonts woff2 files have incorrect internal name tables (see below)
- **Why:** Even with correct names, Playwright's bundled Chromium may not access ~/Library/Fonts/

### 7. document.fonts.ready + waitForTimeout
- **Result:** All fonts confirmed loaded, PDF still missing them
- **API output:** `{ total: 14, loaded: 13, failed: 0 }`
- **Why:** Font loading status is irrelevant; PDF engine uses different code path

## Key Discovery: Google Fonts Internal Name Tables

Google Fonts serves woff2 files that are slices of variable fonts. These slices have INCORRECT internal name tables:

```
CormorantGaramond-300-normal.woff2 -> Family: "Cormorant Garamond Light"
CormorantGaramond-400-normal.woff2 -> Family: "Cormorant Garamond Light"  (WRONG - should be Regular)
CormorantGaramond-500-normal.woff2 -> Family: "Cormorant Garamond Light"  (WRONG - should be Medium)
CormorantGaramond-600-normal.woff2 -> Family: "Cormorant Garamond Light"  (WRONG - should be SemiBold)
CormorantGaramond-700-normal.woff2 -> Family: "Cormorant Garamond Light"  (WRONG - should be Bold)
```

All weight variants report the same family name "Cormorant Garamond Light". This means:
- macOS Font Book can't distinguish between weights
- System font matching by CSS font-family name fails
- The @font-face CSS works around this by explicitly mapping family + weight to each file

**Fix:** Used Python fonttools to rewrite name tables:
```python
from fontTools.ttLib import TTFont
font = TTFont('file.woff2')
font.flavor = None  # Convert to TTF
font['name'].setName('Cormorant Garamond', 1, 3, 1, 0x0409)  # Family
font['name'].setName('Regular', 2, 3, 1, 0x0409)              # Subfamily
font['OS/2'].usWeightClass = 400                                # Weight
font.save('file.ttf')
```

## The Solution That Works

**Screenshot-per-page rendering with pdf-lib:**

1. Serve HTML via local HTTP server (not file://)
2. Load page in Playwright, wait for `document.fonts.ready`
3. For each `.page`/`.cover` element, call `elementHandle.screenshot({ type: 'png' })`
4. Embed each screenshot into an A4 PDF page using pdf-lib
5. Save assembled PDF

**Trade-offs:**
- Text in PDF is rasterized (not selectable/searchable)
- Font rendering is pixel-perfect (exactly matches browser)
- File sizes are comparable (2-3 MB for 28-30 page deck)
- No dependency on system font installation

## Sources

- Chromium PDF rendering architecture: https://chromium.googlesource.com/chromium/src/+/HEAD/components/printing/
- Playwright page.pdf() documentation: https://playwright.dev/docs/api/class-page#page-pdf
- Known Chromium issue with @font-face in print: https://bugs.chromium.org/p/chromium/issues/detail?id=422040
- pdf-lib documentation: https://pdf-lib.js.org/
- Google Fonts CSS API: https://developers.google.com/fonts/docs/css2
- fonttools Python library: https://fonttools.readthedocs.io/
- woff2 specification (magic bytes): https://www.w3.org/TR/WOFF2/
- Chromium font matching for PDF: https://source.chromium.org/chromium/chromium/src/+/main:components/printing/
