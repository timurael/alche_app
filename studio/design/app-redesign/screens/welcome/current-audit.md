---
screen: Welcome
slug: welcome
group: onboarding
primary-swift-file: app/Alche/Features/Onboarding/WelcomeView.swift
status: audited
audit-date: 2026-04-24
---

# Welcome — Audit

**Purpose:** First impression screen — convince a new visitor to begin, or let an existing member sign in.

**Current structure (top to bottom):**
- "WELCOME TO ALCHE" mono overline (line 25-28)
- Hero headline `Your / longevity, / curated.` in Newsreader 48pt italic (lines 33-37)
- 64px primary-colored divider accent (lines 40-43)
- Two-line body subtitle "The operating system for living longer. / Treatments. Nutrition. Science. Community." (lines 46-51)
- Decorative 3-cell opacity grid, 80px tall (lines 54-62)
- Filled blue "BEGIN" CTA on navy primary (lines 70-80) + "Already a member? Sign in" link (lines 84-96)
- Footer "V.1.04 — PRIVATE RELEASE" + lock icon (lines 101-112)
- Right-side 30%-width surface panel behind content (lines 13-19)

**3 problems:**
1. **Generic marketing copy, no voice** — The headline "Your longevity, curated." and subtitle "The operating system for living longer. Treatments. Nutrition. Science. Community." (lines 33-50) reads like a product landing page, not a letter. Alche doesn't *speak* yet; it *advertises*.
2. **Decorative noise competing with hero** — The 3-cell opacity grid at lines 54-62 and the 30%-width surface panel (lines 13-19) add visual weight with zero communicative value. They fragment the page into zones instead of anchoring one read.
3. **CTA is a filled blue button** — Line 77's `Color.alchePrimary` background button violates the dialog-first vocabulary where primary actions are mono-text underlined or sharp-cornered editorial. The rounded `AlcheRadii.sm` + blue fill is a legacy button, not the 2px-sharp Editorial Longevity primary.

**Dialog-first transformation:**
The welcome screen becomes the first letter Alche writes. Replace the four-line marketing stack with a single italic read — something like "Some apps count steps. / This one listens to your body / and reads back what it hears." The decorative grid and panel disappear. The CTA collapses to one uppercase mono underlined line ("BEGIN YOUR READ →") with "Already a member? Sign in" as a tiny secondary mono escape hatch. The companion is introduced by tone, not by tagline.

**Available data to feed the dialog:**
- No prior data — this is pre-auth
- Device locale (language, region)
- Time of day (morning/afternoon/evening greeting)
- App version / release channel (private beta)
- Whether the device has Face ID (implies scan capability later)
- First-visit vs return-after-uninstall (keychain residue)

**Tone direction for this screen:**
Quietly inviting, editorial, a whisper that promises an ongoing correspondence — never sales pitch, never motivational.

---
