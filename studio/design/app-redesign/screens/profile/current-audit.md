---
screen: Profile
slug: profile
group: core
primary-swift-file: app/Alche/Features/Profile/ProfileView.swift
status: audited
audit-date: 2026-04-24
---

# Profile — Audit

**Purpose:** Member identity hub — avatar/name, today's wellness snapshot, personalization tuning, settings menu, and sign-out.

**Current structure (top to bottom):**
- 96pt circle avatar with initials + primary border + `alcheDisplayL` italic name + "FOUNDING MEMBER · TIER" overline (lines 12-47)
- Wellness Snapshot: 3-column Energy/Sleep/Mood grid on warm-gray block; tap-to-checkin if no check-in today (lines 53-93)
- Personalization card row (`PersonalizationLevelView`), NavigationLinks to `DeepProfileView` and `SupplementRecommendationView` (lines 96-160)
- Settings menu rows: Membership, Notification Preferences, Privacy & Data, Language, Refer a Friend — each a 1-line `ProfileMenuItem` with chevron and 1px dividers (lines 163-213)
- Red "Sign Out" button centered (lines 216-229)
- Footer: faint "MEMBER SINCE MARCH 2026" mono (lines 232-243)
- `CheckinSheet` with 3 slider rows + notes + Save button (lines 331-412)

**3 problems:**
1. **Identity block is sterile — avatar + name + tier** — Lines 12-47 follow iOS profile-screen conventions (circle avatar, name, badge). A longevity-companion app with years of dialog history should not present identity as a social-media head-shot. Nothing Alche knows about the member surfaces here as voice.
2. **Wellness snapshot is a mini-checkin widget smuggled above settings** — Lines 53-93 add a 3-number grid as the second block. It fragments the screen's purpose (am I managing my identity / preferences, or am I checking in?). The "TAP TO CHECK IN" prompt (line 82-86) is a mini-CTA competing with the settings menu below.
3. **Five settings rows + Sign Out + Footer = 7 terminal blocks** — The menu (lines 163-213) treats Membership, Notifications, Privacy, Language, Refer a Friend as equal weight. Language has a trailing "EN" / "DE" value (line 199); nothing else does. Sign Out (lines 216-229) is a red full-width block with no group containment. The screen has no hierarchy beyond "a list of doors."

**Dialog-first transformation:**
Open with a letter-style read in Alche's voice using the member's history: "We've been reading together since March. / 41 days of checkins, / 12 LED sessions, / 3 goals still on your wall." Avatar and tier collapse to a quiet mono row at top. Settings become a single mono-text list at the bottom ("Settings · Membership · Sign Out" underlined sequentially), not five card rows. The check-in prompt leaves this screen entirely (it belongs on Home). Personalization becomes a single italic offer: "Want me to read you more closely? →"

**Available data to feed the dialog:**
- `viewModel.user.displayName`, membership tier, memberSince date
- `viewModel.checkinHistory` (latest checkin, streak)
- `viewModel.selectedLocale`
- Total sessions booked, total GlowScans, active protocol
- `viewModel.membership` (tier, renewal date)
- Notification preferences state
- Personalization level (PersonalizationLevelView) value

**Tone direction for this screen:**
Retrospective, warm — a companion looking back at what you've done together. Settings demote to service doors, not the main read.

---
