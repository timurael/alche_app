# Design Systems — Both Deck Themes

Reference for the two visual systems built. Use these tokens for future materials.

---

## Theme 1: Original (Dark Gold)

File: `alche-imperfect-longevity-positioning.pptx`
Script: `build_positioning_deck.py`

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0A0A` | Slide background |
| Gold accent | `#C8A44E` | Headlines, stats, accent bar |
| Cream text | `#F5F0EB` | Primary body text |
| Light gray | `#CCCCCC` | Secondary text |
| Muted | `#999999` | Labels, captions |
| Dark gray | `#555555` | Tertiary text, sources |
| Card background | `#141414` | Content cards |
| Font | Arial | All text |
| Top bar | 4px `#C8A44E` | Every slide |
| Slide size | 10" x 5.625" (16:9) | Standard widescreen |

---

## Theme 2: Apothecary Table (Aesop meets Nature Medicine)

File: `alche-apothecary-positioning.pptx`
Script: `build_apothecary_deck.py`

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#2C2418` | Deep warm charcoal |
| Glass fill | `#40362C` | Glass-morphism panels (30% transparent) |
| Glass border | `#5E5243` | Panel borders (0.75pt) |
| Amber | `#D4A853` | Primary accent, stats, caps |
| Amber light | `#E8C97A` | Secondary stats |
| Amber muted | `#8B7442` | Vial borders, subtle accents |
| Cream | `#F5EDE0` | Primary text |
| Stone | `#B0A48F` | Secondary/body text |
| Stone dark | `#7A6F5E` | Captions, sources, labels |
| Warm gray | `#4A3F33` | Dividers, rules |
| Warm dark | `#382F24` | Inactive cells |

### Typography

| Element | Font | Size | Color | Notes |
|---------|------|------|-------|-------|
| Headlines | Cormorant Garamond | 32-52pt | Cream | Oversized serif |
| Stat numbers | Cormorant Garamond | 34-96pt | Amber | Display scale in vials |
| Body text | Outfit | 9-14pt | Stone/Cream | Clean sans-serif |
| Labels | Outfit | 8-10pt | Stone dark | Uppercase, letter-spaced (250-350) |
| Section markers | Outfit | 8.5pt | Stone dark | "01 — LABEL" format, spaced (350) |
| Sources | Outfit | 6.5-7pt | Stone dark | Bottom of slides |

### Signature Elements

- **Glass-morphism panels**: Rounded rectangles with `#40362C` fill at 30% transparency, 0.75pt `#5E5243` border
- **Glass vial motif**: Glass panel + 3px amber cap line inside top edge. Used for stat callouts, pillar cards, and grid items.
- **Thin amber rule**: 2px `#D4A853` line at top of every slide (thinner than Theme 1's 4px)
- **Letter spacing**: Generous tracking on labels (250 hundredths/pt) and section markers (350)
- **Dividers**: 0.75px warm gray (`#4A3F33`) horizontal rules

### Fonts Installed

Both fonts downloaded from Google Fonts, converted from WOFF2 to TTF, installed to `~/Library/Fonts/`:
- Cormorant Garamond: Light (300), Regular (400), SemiBold (600), Bold (700)
- Outfit: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)
- Source TTFs also in: `/Users/timoel/Desktop/alche/fonts/`

### Mood References

- Aesop retail interiors
- Tom Ford Beauty packaging
- Kinfolk magazine dark editorial spreads
- Diptyque product photography
- Berlin Neue Nationalgalerie at night
