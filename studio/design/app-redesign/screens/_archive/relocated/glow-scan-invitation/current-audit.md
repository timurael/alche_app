---
screen: GlowScanInvitation
slug: glow-scan-invitation
group: onboarding
primary-swift-file: app/Alche/Features/Onboarding/GlowScanInvitationView.swift
status: audited
audit-date: 2026-04-24
---

# GlowScanInvitation — Audit

**Purpose:** Final onboarding step — invite the member to take a 60-second skin scan before landing on Home, or skip.

**Current structure (top to bottom):**
- Top `Spacer()` pushes content to vertical center (line 10)
- Large SF Symbol `faceid` at 56pt in `alchePrimary` blue (lines 14-18)
- Centered `alcheDisplayL` italic headline "See where your / skin stands" (lines 22-25)
- Centered `alcheBody` subtitle "Take a 60-second GlowScan for skin-specific protocols." (lines 27-31)
- Bottom `Spacer()` (line 37)
- Two buttons: filled-primary "Start GlowScan" (line 41) + ghost "Skip for now" (line 47)
- Fade-in animation on mount (lines 56-60)

**3 problems:**
1. **SF Symbol faceid is the loudest element on a screen meant to invite** — Line 15's 56pt `faceid` glyph in blue reads as a system prompt, not an editorial moment. It also misleads: the scan uses the camera for skin analysis, not Face ID authentication.
2. **Ghost "Skip for now" undercuts the moment** — Line 47's ghost style makes skip look safe and equal. If this screen exists, the invitation should feel like an opportunity, not a modal to dismiss. The skip exit route is correct; the visual framing of it is not.
3. **Zero continuity with the prior onboarding dialog** — The member just answered 5+ QuickScan questions, saw their Focus Areas, maybe reviewed supplements. This screen arrives cold: "See where your skin stands" with no thread back to what they already shared. Alche appears to have forgotten the conversation.

**Dialog-first transformation:**
Drop the faceid glyph. Open with an italic read that connects to the prior reading: "You told me your skin is where you see the years. / Let's look at it once — / and build from what we see." Primary mono CTA "START THE SCAN · 60 SEC →", secondary tiny mono escape "Not now, take me home". No pill icon, no filled blue. The screen becomes the hand-off from "Alche listening" to "Alche observing." If onboarding data has no skin signal, this screen is skipped entirely.

**Available data to feed the dialog:**
- `appState.userWellnessProfile.quickScanAnswers`
- `appState.userWellnessProfile.selectedGoals` (was radiantDefense / cellularVitality selected?)
- `appState.onboardingStep` (knows what came before)
- Device has front camera (always true on iOS)
- Time of day (natural lighting recommendation)
- Whether user already has GlowScan history (returning flow)

**Tone direction for this screen:**
Inviting, tethered to what was just shared, never pushy — the next natural step in the same conversation.

---
