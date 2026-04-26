# Senior Dev Checklist · 31 items

Run before every commit on changed files. Built from motherdoc-template's 22 starter items + 9 FORGE-PROCESS grep audit patterns. **The checklist grows. It never shrinks.**

---

## Code hygiene (motherdoc starters · 1–22)

- [ ] **1.** No force unwrapping (`!` on optionals). Use `guard let` / `if let` / `??`.
- [ ] **2.** No hardcoded colors in Views. Use `Color.alche*` tokens from `Alche/Design/Tokens/`.
- [ ] **3.** No hardcoded fonts. Use the design token font families (`AlcheTypography.*` or `Newsreader-LightItalic` / Space Mono via `design: .monospaced`).
- [ ] **4.** No hardcoded user-facing strings. Use `LocalizedStringKey` / string catalog.
- [ ] **5.** No business logic in Views. ViewModels own state + actions. Views render only.
- [ ] **6.** All ViewModels marked `@MainActor` + `@Observable`.
- [ ] **7.** No backend imports (e.g. Firebase, Supabase) in Views or ViewModels. Wrap in service protocols.
- [ ] **8.** No singletons. Use environment injection or explicit dependencies.
- [ ] **9.** Services accessed through protocols, not concrete types.
- [ ] **10.** Tests written before implementation (TDD on net-new logic).
- [ ] **11.** Mock data resembles production shape and ranges.
- [ ] **12.** No catch-all `Utils.swift` / `Helpers.swift`. Group helpers by domain.
- [ ] **13.** Error handling: `Result` type or `async throws`. Never silent failure.
- [ ] **14.** Loading / error / empty states present for every async view.
- [ ] **15.** `LocalizedStringKey` for every user-facing string from day one.
- [ ] **16.** Dark mode supported via design tokens (no hardcoded `.white` / `.black`).
- [ ] **17.** `@State` only for view-local state. Shared state → `@Observable` VM in environment.
- [ ] **18.** Network calls have explicit error states + retry / fallback.
- [ ] **19.** Keyboard avoidance handled (ScrollView or proper offset).
- [ ] **20.** Safe Area respected unless intentionally edge-to-edge.
- [ ] **21.** SwiftUI Previews compile + render for new components.
- [ ] **22.** Commit messages reference REQ-xxx or LANE-N + brief change description.

---

## Strategy 1 voice family (FORGE 9-grep patterns · 23–31)

Run these greps against every changed file. **Any non-zero match outside intentional usage = blocker.**

- [ ] **23. Token drift (system fonts).** No `.font(.body)`, `.font(.caption)`, `.font(.subheadline)`, `.font(.headline)`, `.font(.title)`. Use `AlcheTypography.*`.
  ```bash
  grep -nE "\.font\(\.body|\.font\(\.caption|\.font\(\.subheadline|\.font\(\.headline|\.font\(\.title" <file>
  ```
- [ ] **24. Hardcoded named colors.** No `Color.cream`, `Color.linen`. Use `Color.alche*`.
  ```bash
  grep -nE "Color\.cream|Color\.linen" <file>
  ```
- [ ] **25. Fake mono costume metadata.** No `VER 5.0`, `LAT 34.05`, `GRID REF`, `SEQ-001`, `VAR. 7`. Mono is for real data only.
  ```bash
  grep -nE "VER [0-9]|LAT [0-9]|GRID REF|SEQ-[0-9]|VAR\. [0-9]" <file>
  ```
- [ ] **26. Star / rating chrome.** No `star.fill`, `StarRating`, ★. Pull-quotes + mono attribution replace stars.
  ```bash
  grep -nE "star\.fill|StarRating|★" <file>
  ```
- [ ] **27. Capsule pills.** No `Capsule()` for status badges, filter chips, type tags. Use mono `LABEL · VALUE` rows or 2px `Rectangle().stroke`.
  ```bash
  grep -nE "Capsule\(\)" <file>
  ```
- [ ] **28. Pastel filled rings / opacity rectangles.** No `RoundedRectangle.*opacity(0.*)`, no `Circle().fill(*opacity)`. Hard 2px borders only.
  ```bash
  grep -nE "RoundedRectangle.*opacity\(0\.[0-9]+\)|Circle\(\).*\.fill\(.*opacity" <file>
  ```
- [ ] **29. Clinical language (esp. Glow Scan).** No "Health Score", "indicates", "demonstrates", "diagnoses", "treats", "cures", "heals". Appearance-based language only.
  ```bash
  grep -nE "Health Score|hydration levels|indicates|demonstrates|diagnoses|treats|cures|heals" <file>
  ```
- [ ] **30. Sci-fi / AI hype (Vision screens).** No "AI-powered", "machine learning", "neural", "[N]% confidence". Editorial register, not tech-marketing.
  ```bash
  grep -nE "AI[- ]powered|machine learning|neural|[0-9]+%[- ]confidence" <file>
  ```
- [ ] **31. Naming guard (DigitalTwin).** No "Digital Twin" / "digital twin" in user-facing copy. Use "the map" in user strings; Swift type names are fine.
  ```bash
  grep -nE "Digital Twin|digital twin" <file>
  ```

---

## One-liner: run all 9 audits at once

```bash
cd /Users/timoel/Desktop/Projects/brands/alche/app
FEATURE="<FeatureName>"

grep -rnE "\.font\(\.body|\.font\(\.caption|\.font\(\.subheadline|\.font\(\.headline|\.font\(\.title|Color\.cream|Color\.linen|VER [0-9]|LAT [0-9]|GRID REF|SEQ-[0-9]|VAR\. [0-9]|star\.fill|StarRating|★|Capsule\(\)|RoundedRectangle.*opacity\(0\.[0-9]+\)|Health Score|indicates|demonstrates|diagnoses|treats|cures|heals|AI[- ]powered|machine learning|neural|Digital Twin|digital twin" Alche/Features/$FEATURE/
```

Or use the helper script: `bin/forge-status audit <FeatureName>`.

---

## Defeat tests (SPEC'D, not written yet)

These are planned XCTest tests that should **fail when the pattern recurs**. They do not exist in the tree yet. Target path when implemented: `app/AlcheTests/DefeatTests/`.

| # | Test | Pattern caught |
|---|---|---|
| DT-1 | `ForceUnwrapScanner` | `!` on optionals in source tree (excludes test files + safe forced-unwraps) |
| DT-2 | `HardcodedColorScanner` | `Color.cream`, `Color.linen`, `Color.blue` etc. in Views |
| DT-3 | `BusinessLogicInView` | Views with `>3` data-conditional branches (ternary / if-let chains) |
| DT-4 | `MainActorOmission` | ViewModels missing `@MainActor` annotation |

**Currently live:** the Roadmap test suite has a fake-metadata grep guard that fires if `VER N.N`, `LAT N.N`, or `GRID REF` reappears in `RoadmapView.swift`. Treat as DT-5 once DT-1 through DT-4 are implemented.

---

## Adding to the checklist

**New rule from a real correction → append here.** Format:

```
- [ ] **N. Short rule.** Why it exists. Pattern to grep / verify.
```

Date the addition. Reference the commit / agent / lane that surfaced it.

🤍
