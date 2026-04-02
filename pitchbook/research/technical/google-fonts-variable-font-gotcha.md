# Google Fonts Variable Font Slice Gotcha

## Discovery

When downloading individual weight files from Google Fonts API, the woff2 files are **slices of variable fonts** with broken internal name tables.

## The Problem

All weight variants of a font family report the SAME internal family name:

```
Cormorant Garamond 300 (Light)   -> Internal name: "Cormorant Garamond Light"
Cormorant Garamond 400 (Regular) -> Internal name: "Cormorant Garamond Light"  ← WRONG
Cormorant Garamond 500 (Medium)  -> Internal name: "Cormorant Garamond Light"  ← WRONG
Cormorant Garamond 600 (SemiBold)-> Internal name: "Cormorant Garamond Light"  ← WRONG
Cormorant Garamond 700 (Bold)    -> Internal name: "Cormorant Garamond Light"  ← WRONG
```

Same issue affects Outfit:
```
Outfit 300-700 all report as the same internal name
```

## Impact

1. **macOS Font Book** registers all weights as duplicates of the same font
2. **System font matching** by CSS `font-family` name fails (CSS expects "Cormorant Garamond", system has "Cormorant Garamond Light")
3. **CSS @font-face works fine** because it explicitly maps weight + family to each file
4. **Any tool relying on system fonts** (Chromium PDF, LibreOffice, etc.) will fail

## Fix

Use Python fonttools to rewrite the name tables:

```python
from fontTools.ttLib import TTFont

font = TTFont('CormorantGaramond-400-normal.woff2')
font.flavor = None  # Converts woff2 to raw TTF

# Fix name table
font['name'].setName('Cormorant Garamond', 1, 3, 1, 0x0409)   # Family name
font['name'].setName('Regular', 2, 3, 1, 0x0409)               # Subfamily
font['name'].setName('Cormorant Garamond', 4, 3, 1, 0x0409)    # Full name
font['name'].setName('CormorantGaramond-Regular', 6, 3, 1, 0x0409)  # PostScript
font['name'].setName('Cormorant Garamond', 16, 3, 1, 0x0409)   # Preferred family
font['name'].setName('Regular', 17, 3, 1, 0x0409)              # Preferred subfamily

# Fix weight class
font['OS/2'].usWeightClass = 400

font.save('CormorantGaramond-400-normal.ttf')
```

## Why This Happens

Google Fonts API optimizes delivery by serving variable font instances as static woff2 files. The slicing process preserves the original variable font's name table from the lightest weight instance, rather than generating correct names for each slice.

## Verification

Check font names with fonttools:
```python
font = TTFont('file.woff2')
name = font['name']
print('Family:', name.getName(1, 3, 1, 0x409))
print('Subfamily:', name.getName(2, 3, 1, 0x409))
print('Weight:', font['OS/2'].usWeightClass)
```

Or verify woff2 is valid:
```python
with open('file.woff2', 'rb') as f:
    magic = f.read(4)
    assert magic == b'wOF2', 'Not a valid woff2 file'
```

## Sources

- Google Fonts CSS2 API: https://developers.google.com/fonts/docs/css2
- fonttools documentation: https://fonttools.readthedocs.io/en/latest/
- OpenType name table spec: https://learn.microsoft.com/en-us/typography/opentype/spec/name
- OS/2 weight class spec: https://learn.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass
- woff2 format specification: https://www.w3.org/TR/WOFF2/
