# Archived screen folders

These design folders represent intent that was either **collapsed into Lix chat** or **relocated** to other surfaces during the LIX-BLEND decision (2026-04-24, commit `d3884f1`). They are preserved here as design history — the original audits, mockups, and Swift plans remain useful for understanding how the onboarding compressed.

**Do not treat these as active screens.** PROGRESS.md row markers `⊘` flag them as deliberately collapsed, not pending.

---

## `lix-collapsed/` — 5 onboarding screens merged into the Lix scripted chat

Original intent → Lix turn mapping:

| Original screen | Lix turn | Notes |
|---|---|---|
| `welcome/` | Turn 01 | "hello, i'm Lix" cold open |
| `brand-moment/` | Turn 02–03 | Alche introduction + first-name capture |
| `quick-scan/` | Turn 03 | Inline name + age capture (no separate scan beat) |
| `goal-selection/` | Turn 04–05 | Choice chips: Recovery · Energy · Skin · Longevity |
| `focus-area-reveal/` | Turn 06 | The reveal beat — "your axis is X" |

Live implementation: `app/Alche/Features/Onboarding/Lix/` (8 Swift files: LixChatView, LixChatViewModel, LixMascot, LixMoodState, LixProfile, LixSystemPrompt, LixTurns, LixAPIClient) + `AuthHandoffView.swift`.

## `relocated/` — 2 screens moved to other surfaces (no longer onboarding)

| Original screen | New home | Live file |
|---|---|---|
| `supplement-recommendation/` | Post-auth Shop nudge | `app/Alche/Features/Shop/SupplementRecommendations/SupplementRecommendationView.swift` |
| `glow-scan-invitation/` | GlowScan first-run banner (sub-component, not screen) | `app/Alche/Features/GlowScan/GlowScanFirstRunBanner.swift` |

---

**Source of truth:** `audit/screen-truth.md` (project-root audit) · `app-redesign/LIX-BLEND.md` (full blend rationale).
