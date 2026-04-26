# Sub-view Audit Sweep — Terminal B

**Date:** 2026-04-25 18:48
**Branch:** `redesign/editorial-longevity`
**Mode:** AUDIT-ONLY · zero edits · zero commits · zero push
**Scope:** 4 sub-views never touched by the Strategy 1 sprint walk
**Auditor:** Terminal B
**Process reference:** `app-redesign/FORGE-PROCESS.md` (audit-first protocol + 9 grep cheatsheet)

---

## Audit table

| File | Verdict | Drift signals | Suggested register | Effort |
|---|---|---|---|---|
| **SmoothieMenuView** | **FULL POLISH** | 3× `Capsule()` pills (CategoryPill L171, goal-tag chips L218, BoostChip L291); pastel-tinted chip backgrounds (`alchePrimary.opacity(0.06)` L217, `alcheSuccess.opacity(0.06)` L248); category color rect with SF-Symbol overlay (`bolt`/`cup.and.saucer`) at L190–196; generic non-narrator header; favorite heart icon-row metadata; no register voice | **Ritual** (matches Booking parent `3b4074d`) | M |
| **MySessionsView** | **NUDGE** | Greps clean. Surface chrome on-spec (AlcheCard + AlcheTag + section overlines + DataSourceIndicator). Missing italic narrator opener to anchor to Dialog parent; practitioner name uses `alcheBodyMedium` instead of italic Newsreader; no time-aware Read framing the upcoming/past split | **Dialog** (DoctorSessions parent `605dbfc`) | S |
| **MacroDashboardView** | **GREEN** | All 9 greps clean. Mono context band, AlcheReadCard narrator, italic 44pt kcal masthead, 2×2 macro grid with 2pt hairline progress, "WATCH" flag, italic narrator interstitial, mono-overline + italic-dish + mono-kcal meal rows, disclaimer mono. | **Signal** (already shipped Signal-first) | — |
| **AuthHandoffView** | **GREEN** | All 9 greps clean. Black-curtain ZStack with single italic Newsreader 28pt `— Alche` line, 0.8s hold, fade-in respects reduce-motion, accessibility traits set. Cinematic threshold = the moment IS the page. | **Ritual** (Lix→Auth handoff threshold) | — |

---

## NUDGE / POLISH detail

### SmoothieMenuView — FULL POLISH (Ritual-first)

- Replace all 3 `Capsule()` pill clusters with hard-2px rectangles or text-only mono labels (CategoryPill row L158–175, goal-tag chips inside SmoothieCard L210–219, BoostChip L272–295).
- Drop the placeholder color tile + SF-Symbol overlay on each card (L190–196); replace with hard 2px frame + mono category overline so cards read as menu *entries*, not e-commerce items.
- Reframe header as a Ritual masthead: kicker `ORDER · BOOKED FOR HH:MM` + italic Newsreader headline naming the slot ("Pair the session with one drink."), single mono primary CTA at bottom.
- Goal-tag `opacity(0.06)` backgrounds → remove; tags become uppercase mono inline labels with bullet separators or hairline cells.

### MySessionsView — NUDGE (Dialog-first)

- Add an italic Newsreader narrator opener above UPCOMING (e.g. *"Two sessions waiting. Three closed."*) using live counts from `viewModel.upcomingSessions.count` / `viewModel.pastSessions.count`.
- Make practitioner name italic Newsreader ~22pt instead of `alcheBodyMedium` (L146) so Dialog voice carries the card.
- Optional: replace status-dot circle + AlcheTag pair (L140–143, L164–174) with a single mono status line (e.g. `CONFIRMED · 24-04-29 · 10:30`) to match the parent's editorial register; lower priority — AlcheTag is sanctioned.

---

## GREEN justifications

- **MacroDashboardView** — already the Signal-first reference for Nutrition; voice family complete (Newsreader italic + Space Mono overlines + 2pt hairlines + WATCH flag); no drift, no action needed.
- **AuthHandoffView** — single italic Newsreader line on black, threshold cinematic; already the canonical Ritual moment between Lix and AuthView.

---

## Recommended next-wave priorities

1. **SmoothieMenuView** — biggest delta, anchors Booking sub-flow under the Ritual register established by parent `3b4074d`. M-effort polish, agent-able as a single sprint task.
2. **MySessionsView** — small Dialog nudge, ~30-min agent task. Completes the DoctorSessions Dialog cluster (parent `605dbfc` + detail view `605dbfc`).
3. **MacroDashboardView + AuthHandoffView** — no action; flag as audited-GREEN in PROGRESS.md.

---

## Method

For each file:

1. Ran all 9 grep patterns from `FORGE-PROCESS.md`:
   - Token drift (system fonts where alche tokens belong)
   - Hardcoded colors (`Color.cream` / `Color.linen`)
   - Fake mono costume metadata (`VER N`, `LAT N`, `GRID REF`, etc.)
   - Star / rating chrome
   - Capsule pills
   - Pastel filled rings / opacity rectangles
   - Clinical language
   - Sci-fi / AI hype
   - Naming guard (DigitalTwin)
2. Read the full file to surface structural drift (icon-row metadata, missing italic narrator, AlcheTag pills, pastel gradients).
3. Classified GREEN / NUDGE / FULL POLISH against Strategy 1 register voice family.

## Constraints honoured

- Zero edits to any file.
- Zero commits.
- Zero push.
- Walled-off discipline: out-of-scope drift flagged in this report only — not fixed in this lane.
