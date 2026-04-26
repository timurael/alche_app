---
screen: BrandMoment
slug: brand-moment
group: onboarding
primary-swift-file: app/Alche/Features/Onboarding/BrandMomentView.swift
status: audited
audit-date: 2026-04-24
---

# BrandMoment — Audit

**Purpose:** A 4-second title-card pause between Welcome and QuickScan — brand signature moment.

**Current structure (top to bottom):**
- Full-screen `Color.alcheEditorialBlack` background (line 10-11)
- Centered wordmark "Alche." in `alcheDisplayHero` (Newsreader ExtraLight Italic 60pt) in white (lines 13-16)
- Fade-in animation over 1.0s, then hold for 3s (lines 19-28)
- Auto-advance to `.quickScan` after 4s total (line 27)
- No interactive affordances, no skip button, no body copy

**3 problems:**
1. **Dead airtime with no voice** — 4 seconds of a wordmark is a logo splash, not a moment. The brand is introduced as a *name* not as a *presence*. Nothing is said — the companion has no opening line.
2. **No skip, no control** — The `Task.sleep(for: .seconds(4.0))` at line 26 locks the user out for four seconds. Users returning through onboarding twice will feel this as friction. Accessibility: reduce-motion users still wait the full duration.
3. **Black-on-white reversal orphaned from the system** — The screen flips to `alcheEditorialBlack` full-bleed, breaking the light editorial surface of every adjacent screen. This reads as a 2010s splash screen, not an editorial rhythm.

**Dialog-first transformation:**
Either delete the screen entirely, or transform it into the first spoken line of the dialog. If kept, the wordmark becomes a signature beneath a single italic read that fades in sequentially — e.g. "I'll be reading you / every morning. / Let's start by listening." with "— Alche" as the signature. Shorten to 2.5s. Honor reduce-motion with instant-display. Tap-to-skip must exist. The black background could stay as a deliberate "curtain" moment *if* it holds the first line of voice.

**Available data to feed the dialog:**
- Nothing user-specific yet
- Time of day (can condition "morning/evening" language)
- Locale (EN/DE greeting pattern)
- Device capabilities
- Returning vs first-visit (from Welcome)

**Tone direction for this screen:**
A signature — brief, first-person, warm. The companion saying hello, not the brand shouting its name.

---
