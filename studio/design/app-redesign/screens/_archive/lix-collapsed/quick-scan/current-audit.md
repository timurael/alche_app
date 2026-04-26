---
screen: QuickScan
slug: quick-scan
group: onboarding
primary-swift-file: app/Alche/Features/Onboarding/QuickScanView.swift
status: audited
audit-date: 2026-04-24
---

# QuickScan — Audit

**Purpose:** A multi-question onboarding quiz that captures goals/concerns so the next screen can surface Focus Areas.

**Current structure (top to bottom):**
- 2px progress bar + "N OF N" counter (lines 45-69)
- Back button row with mono "BACK" label (lines 73-96)
- Display-medium italic question text (lines 105-109)
- Optional "SELECT UP TO N (count/max)" multi-select indicator (lines 114-122)
- Vertical list of answer cards with optional SF Symbol, label, checkmark (lines 125-133, 170-236)
- Conditional "Continue" `AlcheButton` for multiSelect questions (lines 137-150)
- Micro-insight banner with sparkles icon + caption (lines 240-268)

**3 problems:**
1. **Feels like a form, not a conversation** — The progress bar, "N OF N" counter (line 63), and sequential question/answer pattern (lines 101-153) is a Typeform clone. No voice from Alche between questions. The micro-insight banner (lines 240-268) *tries* to be the voice but arrives as a styled toast rather than dialog.
2. **Rounded cards + primary-colored checkmarks violate Editorial Longevity** — Answer cards use `RoundedRectangle(cornerRadius: AlcheRadii.md)` (line 220) which is legacy 8-12px, not the 2px sharp. The blue checkmark + blue border on selection (lines 213, 224) is functional but un-editorial.
3. **No narrative spine** — Each question stands alone. There's no sense of Alche listening and building a picture. The user answers into a void; results only appear on the *next* screen.

**Dialog-first transformation:**
Each question becomes a page of dialog where Alche speaks first ("I want to understand where you are. Tell me —") and the question is its own italic read below. Answer cards become mono-list rows (no rounded chrome, 1px hairline dividers, selection = left-side solid 2px blue accent bar instead of border glow). Between questions, insert a brief italic "echo" that reflects back what was just said ("So — your sleep is where it hurts most.") before the next prompt. The progress counter demotes to a faint mono footer.

**Available data to feed the dialog:**
- Previous answers in this session (`viewModel.allAnswers`)
- Question index / total questions
- Time since onboarding started
- Device locale
- Reduce-motion preference
- Saved-progress flag (returning to quiz)
- Selection state for current question

**Tone direction for this screen:**
Attentive, unhurried, reflective — the companion asking one thing at a time and echoing it back before moving on.

---
