---
screen: Nutrition
slug: nutrition
group: services
primary-swift-file: app/Alche/Features/Nutrition/MacroDashboardView.swift
status: audited
audit-date: 2026-04-24
---

# Nutrition — Audit

**Purpose:** Daily macro tracking dashboard — calories ring, protein/carbs/fat/fiber breakdown, logged meals list, and manual add-meal entry.

**Current structure (top to bottom):**
- Horizontal `DateSelectorStrip`: 7-day scroll with today highlighted (lines 10-15, 216-269)
- Calorie Ring card (hero): "DAILY CALORIES" overline + 180pt `MacroProgressRing` + "N kcal remaining" / "Goal reached" caption (lines 83-113)
- Macros card: "MACROS" overline + three `MacroProgressBar`s (Protein/Carbs/Fat) + optional Fiber row (lines 117-162)
- "TODAY'S MEALS" (or "MEALS") overline + `MealLogRow`s or empty state (lines 166-202, 271-343)
- "Add Meal" secondary `AlcheButton` with plus icon (lines 206-211)
- Disclaimer caption (lines 41-46)
- `DataSourceIndicator` (lines 49-54)
- Toolbar navigation link to `RestaurantListView` via fork.knife icon (lines 63-71)
- Sheet: `MacroLogEntryView` for manual entry (lines 73-75)

**3 problems:**
1. **Calorie ring is visual theater for a number** — The 180×180 `MacroProgressRing` (lines 91-94) dominates vertical space to animate a single quantity: calories consumed vs goal. Below it, 3 `MacroProgressBar`s (lines 126-145) repeat the same "% of goal" vocabulary with linear bars. Two visualization languages for the same metric type, stacked.
2. **Ring + 3 bars + meal list + disclaimer + data-source = 5 informational strata** — Each stratum has its own overline ("DAILY CALORIES" / "MACROS" / "TODAY'S MEALS"). The screen ends up as a printout of a food journal rather than a conversation about how the member ate.
3. **No editorial read on food** — Food is how members interact with their bodies most often; the screen speaks entirely in units (kcal, g of protein) with no "you've eaten well today" or "you're protein-light; consider the smoothie." Even the empty state ("No meals logged yet") is transactional.

**Dialog-first transformation:**
Open with a one-line italic read: "You've eaten lunch. / Protein holding. Fiber's the one to watch." The ring survives as a single quieter element — smaller, monochrome, with italic "1,240 of 1,800" instead of ring-and-label. Macros become a horizontal mono data strip: "PROTEIN 82/130 · CARBS 145/220 · FAT 40/65 · FIBER 18G". Meals list becomes mono-row, one line each, no card chrome. "Add Meal" becomes a single mono underlined escape. The date strip demotes to a mono footer row.

**Available data to feed the dialog:**
- `viewModel.todaySummary` (totalCalories, totalProtein, totalCarbs, totalFat, totalFiber, caloriesRemaining)
- `viewModel.macroGoal` (daily targets)
- `viewModel.todayLogs` (meal entries with type, name, calories, restaurantName, loggedAt)
- `viewModel.selectedDate`, `isToday`
- Member's goals (affects which macro Alche foregrounds)
- Time of day (morning/post-lunch/evening framing)
- Previous day's macro outcome (trend)
- Partner restaurant logs (context for dish names)

**Tone direction for this screen:**
Nutritionist-as-reader — observing, flagging one thing, never shaming. "This is what today looks like."

---
