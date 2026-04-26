---
screen: Protocols
slug: protocols
group: wellness
primary-swift-file: app/Alche/Features/Protocols/ProtocolListView.swift
status: audited
audit-date: 2026-04-24
---

# Protocols — Audit

**Purpose:** Browse curated wellness routines ("protocols") filtered by goal, with one optional active protocol pinned at top and a gated list of locked/tier-restricted ones below.

**Current structure (top to bottom):**
- Header: `alcheDisplayL` "Protocols" + 1-line `alcheBody` subtitle (lines 10-19)
- Horizontal `AlcheTag` goal filter row: "All" + `ProtocolGoal.allCases` tags (lines 22-41)
- "ACTIVE PROTOCOL" overline + `ActiveProtocolCard` (subheading name + goal tag + green sage progress bar + "N of N steps completed today") (lines 44-67, 122-177)
- "ALL PROTOCOLS" overline + `LazyVStack` of `ProtocolCard`s — each with name + optional ACTIVE pill + 2-line description + goal tag + "N steps" label + optional tier-required lock (lines 71-97, 179-252)
- Cards use `AlcheCard` with subtle shadow, rounded corners, dim when locked
- `navigationTitle("Protocols")` inline (line 104)

**3 problems:**
1. **Cards compete with each other as equals** — Active, unlocked, and locked protocols all render as identical `AlcheCard` rows with only subtle modifiers (line 239's `.opacity(0.6)` for locked, line 195-203's small "ACTIVE" pill). The active protocol at lines 59-64 is the *one thing* that matters today, but it competes visually with 8-12 browse-mode rows below.
2. **Goal filter repeats language already owned elsewhere** — `ProtocolGoal.allCases` in the horizontal scroll (line 31) mirrors the wellness goals chosen in onboarding. Same 5-6 categories, in the same color coding, appear here as filters. No narrative connects "you chose these goals" to "here are the protocols for those goals." Just a second copy of the taxonomy.
3. **"Step" as the unit hides what protocols actually are** — Line 218's "N steps" (Label with "list.bullet" icon) reduces a multi-week wellness regimen to a to-do count. The description is lineLimit(2) (line 210). There's no sense of duration, intensity, or what the member actually has to commit to. It reads like a recipe list, not a protocol library.

**Dialog-first transformation:**
Active protocol becomes the whole screen's primary read: "You're 3 weeks into Deep Recovery. / 2 of 4 steps today." With one primary action: "OPEN TODAY'S STEPS →". Everything else drops below a hairline divider with an italic echo like "Other protocols I'd consider for you —" and three recommended options shown as single-line reads (italic name, one-line rationale, faint mono duration). Full library survives as a mono escape hatch: "Browse all protocols →". Locked tier items vanish from the main flow; they appear only inside the full library, clearly marked.

**Available data to feed the dialog:**
- `viewModel.protocols` (all protocols)
- `viewModel.activeProtocolId` + matching protocol
- `viewModel.completedSteps(for:totalSteps:)`
- `viewModel.selectedGoal` filter
- `viewModel.isProtocolLocked(_:)` + `tierRequired`
- Member's selected wellness goals (drives recommendations)
- Days since protocol started (progress context)
- Member tier (Longevity+ vs base)

**Tone direction for this screen:**
Instructive, focused on the one thing today — "this is what you're in. Everything else is noise until you finish this step."

---
