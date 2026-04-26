---
screen: Rituals
slug: rituals
group: services
primary-swift-file: app/Alche/Features/Rituals/RitualNotificationView.swift
status: audited
audit-date: 2026-04-24
---

# Rituals — Audit

**Purpose:** Full-screen cinematic "time for ritual" moment — a modal that appears when a scheduled ritual is due, with a title/subtitle reveal and Begin/Dismiss actions.

**Current structure (top to bottom):**
- Water-background gradient + black vignette (lines 48-95)
- Top header: dismiss chevron-left in a circular glass button + centered "alche" wordmark + right-aligned "[ ALCHE ]" mono meta (lines 99-127)
- Vertical drop line (1pt × 48pt white) near top (lines 26-29)
- Center content stack (lines 131-163): "TIME FOR RITUAL" mono overline (10pt, tracking 5) → stacked italic Newsreader title+subtitle (52pt ExtraLight + Italic, e.g. "Cellular / Hydration") → "VAR. 7 · H20-SEQ" mono meta
- Bottom footer row: "Dismiss" (white muted) on left + "BEGIN" mono-bold underlined on right (lines 168-196)
- Staggered fade-in animation (lines 200-206): line 0.3s → overline 0.6s → title 0.9s → meta 1.3s → footer 1.7s

**3 problems:**
1. **2.4 seconds of animation delay before any action is visible** — The `animateIn()` chain at lines 200-206 delays the footer (where Begin/Dismiss live) until 1.7s after appearance. A ritual notification that's asking for attention *now* should not hide its controls for nearly 2 seconds. Accessibility reduce-motion also not honored.
2. **Decorative mono tags are fiction** — "VAR. 7" and "H20-SEQ" (line 156) and "[ ALCHE ]" meta (line 118) are aesthetic stamps pretending to be system-generated identifiers. "H20-Seq" is not a real sequence. This is the same "ver 5.0" and "lat 34.05" fiction as Roadmap — editorial costume without meaning.
3. **Title and subtitle split the concept awkwardly** — Line 143 and 146 render "Cellular" on one line and "Hydration" on another, with -6 spacing (line 142's `VStack(spacing: -6)`) stacking them tightly. The semantic unit is "Cellular Hydration" but the visual hierarchy breaks it in half, relying on font-weight shift to suggest unity. Reading pauses awkwardly.

**Dialog-first transformation:**
This screen is already closest to the dialog-first vocabulary — single read, one primary, one escape, strong typography. Tighten: unify title+subtitle into one italic line ("Cellular hydration") and below it a second italic line that *speaks* ("It's been 3 hours since your last glass. / 12 minutes will set you right."). Drop "VAR. 7 · H20-SEQ" and "[ ALCHE ]" meta completely. Begin button keeps its mono underlined style. Dismiss stays muted below. Fade-in: single 400ms on mount, no 2-second cascade. Respect reduce-motion.

**Available data to feed the dialog:**
- `ritualTitle`, `ritualSubtitle` (passed in)
- `variantLabel`, `sequenceLabel` (passed in — should drop)
- Time since last occurrence of this ritual
- Member's goals (drives which ritual is foregrounded)
- Context: time of day, active session, recent biomarker read
- Current completed ritual streak
- Ritual duration (suggested from the ritual itself)

**Tone direction for this screen:**
Reminder-as-voice — a quiet tap on the shoulder. The companion mid-conversation saying "— and there's also this, now." Never alarm, never theater.

---
