# Mother Document: iOS App Development via Agentic SDLC

> **What this is:** The single source of truth for building your iOS app autonomously with Claude Code. Every agent reads this. Every phase references this. You come back here when you're lost.
>
> **Philosophy:** Fast waterfall. Define thoroughly, build autonomously, check at human stops, ship in phases.

---

## Table of Contents

1. [Project Identity](#1-project-identity)
2. [Fast Waterfall Philosophy](#2-fast-waterfall-philosophy)
3. [Directory Structure](#3-directory-structure)
4. [OpenSpec Workflow](#4-openspec-workflow)
5. [The Process: 8 Phases](#5-the-process-8-phases)
6. [Agent Roster & Character Sheets](#6-agent-roster--character-sheets)
7. [Agent Infrastructure](#7-agent-infrastructure)
8. [Human Stops (Checkpoints)](#8-human-stops-checkpoints)
9. [Design Vibe System](#9-design-vibe-system)
10. [Testing Strategy for iOS](#10-testing-strategy-for-ios)
11. [Quality Gates](#11-quality-gates)
12. [CLAUDE.md Template](#12-claudemd-template)
13. [Prompt Cookbook](#13-prompt-cookbook)
14. [Operations, Cost & Setup](#14-operations-cost--setup)
15. [Anti-Patterns & Gotchas for Mobile](#15-anti-patterns--gotchas-for-mobile)
16. [Diarrhea Protocol](#16-diarrhea-protocol)

### Reference Files (Detailed Guides)

| File | What's in it |
|------|-------------|
| `plans/process-guide.md` | Full Fast Waterfall, OpenSpec, requirements writing, value analysis, parallelization, interface contracts |
| `plans/agent-infrastructure.md` | Communication patterns, 5-layer memory, senior dev checklist, priority queue, defeat tests, behavior testing |
| `plans/prompt-cookbook.md` | Every prompt you need, phase by phase, copy-paste ready |
| `plans/operations.md` | Model selection, budget protection, setup, iteration cycles, CTO mindset |
| `agents/*.md` | Individual agent character sheets (10 agents) |

---

## 1. Project Identity

Fill this in before anything else. This is your anchor.

```
APP NAME:        [your app name]
ONE-LINER:       [what it does in one sentence]
TARGET USER:     [who this is for]
PLATFORM:        iOS (SwiftUI, minimum iOS 17+)
LANGUAGE:        Swift 6
FRAMEWORK:       SwiftUI (not UIKit unless explicitly needed)
BACKEND:         [Supabase / Firebase / custom API / none]
MONETIZATION:    [free / freemium / paid / subscription]
APP STORE GOAL:  [date or "when ready"]
DESIGN VIBE:     [TBD — upload references to design/vibes/]
```

**Why SwiftUI:** Claude's training data for SwiftUI is massive and modern. UIKit is legacy-heavy and leads to more hallucinations. Use SwiftUI unless you have a hard reason not to.

---

## 2. Fast Waterfall Philosophy

This is not traditional waterfall. This is not traditional Agile. This is something new.

**The old math:** Adding one feature = 1-2 weeks of dev time -> small batches, sprints, standups
**The new math:** Adding one feature = 2-4 hours of agent time -> define everything upfront, build in phases, release working systems

```
Traditional Agile:
  Define minimal feature -> Build -> Test -> Deploy -> Sprint review
  -> Define next minimal feature -> Build -> Test -> Deploy...
  [Each cycle: 2 weeks]

Fast Waterfall:
  Define ALL Phase 1 features -> Build all in parallel -> Review phase
  -> Define Phase 2 -> Build all in parallel -> Review phase
  [Each phase: 2-3 days]
```

| Aspect | Traditional Agile | Fast Waterfall (Us) |
|--------|-------------------|---------------------|
| Planning | Sprint planning every 2 weeks | Plan phases, execute in days |
| Scope per cycle | One user story per sprint | Entire feature sets per day |
| Team coordination | Daily standups | Roadmap monitoring |
| Release cadence | Minimal features | Working systems |

You will spend more time upfront on requirements (Phases 0-1). "More time" = a few hours, not weeks. Then release in phases:
- **Phase 1 (MVP):** [Core loop works. Minimum viable product.]
- **Phase 2 (Features):** [Secondary features, notifications, social features.]
- **Phase 3 (Polish):** [Animations, onboarding, accessibility, App Store prep.]

> "Waterfall's back, but it's fast now. It's a big fast waterfall."

> **Full details:** `plans/process-guide.md` -- Section 1

---

## 3. Directory Structure

```
project-root/
+-- CLAUDE.md                    <- Agent context (auto-included)
+-- motherdoc_tobuild.md         <- This file (you are here)
|
+-- plans/
|   +-- braindump.md             <- Raw ideas, unfiltered
|   +-- requirements.md          <- REQ-001, REQ-002... testable specs
|   +-- priorities.md            <- Business value scores
|   +-- roadmap.md               <- Active phases only
|   +-- parallelization.md       <- Agent assignments + dependency graph
|   +-- status-board.md          <- Live agent status tracking
|   +-- process-guide.md         <- Fast Waterfall, OpenSpec, requirements, value analysis
|   +-- agent-infrastructure.md  <- Communication, memory, queues, quality gates
|   +-- prompt-cookbook.md        <- Every prompt, phase by phase
|   +-- operations.md            <- Cost, setup, cycles, CTO mindset
|   +-- completed/
|       +-- roadmap-archive.md   <- Done items with completion dates
|
+-- design/
|   +-- vibes/                   <- Screenshots, mood boards, references
|   |   +-- README.md            <- Describe what each image represents
|   |   +-- [images]
|   +-- tokens.md                <- Colors, fonts, spacing, radii
|   +-- components.md            <- Reusable component specs
|   +-- screens.md               <- Screen-by-screen specs
|
+-- agents/
|   +-- brain-dumper.md          <- Character sheets (personality, memories, checklist)
|   +-- requirements-engineer.md
|   +-- business-analyst.md
|   +-- project-manager.md
|   +-- ios-architect.md
|   +-- swift-dev.md             <- Roy
|   +-- ui-dev.md                <- Jen
|   +-- test-engineer.md
|   +-- release-manager.md
|   +-- design-translator.md
|   +-- memory/                  <- 5-layer memory per agent
|   |   +-- roy/
|   |   |   +-- long-term.md
|   |   |   +-- medium-term.md
|   |   |   +-- recent.md
|   |   |   +-- compost.md
|   |   +-- [etc per agent]/
|   +-- tests/                   <- Behavior tests per agent
|       +-- roy-behaviors.md
|       +-- [etc per agent]
|
+-- tasks/                       <- Priority queue system
|   +-- queue.json               <- Master queue
|   +-- claimed/                 <- In-progress items
|   +-- blocked/                 <- Waiting on dependencies
|   +-- completed/               <- Done items
|
+-- openspec/
|   +-- changes/                 <- Active feature proposals
|   |   +-- [feature-name]/
|   |       +-- proposal.md
|   |       +-- tasks.md
|   |       +-- design.md
|   |       +-- status.json
|   +-- archive/                 <- Completed features
|
+-- devlogs/                     <- Agent work summaries
+-- reviews/                     <- Code review outputs
|
+-- [AppName].xcodeproj/         <- The actual Xcode project
    +-- [AppName]/
        +-- App/
        +-- Features/
        |   +-- [Feature1]/
        |   +-- [Feature2]/
        |   +-- [Feature3]/
        +-- Core/
        |   +-- Networking/
        |   +-- Models/
        |   +-- Services/
        |   +-- Persistence/
        +-- Design/
        |   +-- Tokens/
        |   +-- Components/
        +-- Tests/
            +-- UnitTests/
            +-- UITests/
            +-- DefeatTests/
```

---

## 4. OpenSpec Workflow

[OpenSpec](https://github.com/Fission-AI/OpenSpec) is an open-source CLI for spec-driven development with AI coding assistants. It manages proposals, specs, and changes via terminal commands.

**CLI:** `openspec` (installed via `npm install -g @fission-ai/openspec`)
**Init:** `openspec init` (run in project root -- sets up integrations with Claude Code)

Every feature or change gets its own folder with a standardized set of files. Agents know exactly where to look.

```
openspec/changes/[feature-name]/
+-- proposal.md      <- Why we're building this, what problem it solves
+-- tasks.md         <- Step-by-step implementation checklist
+-- design.md        <- Technical decisions (which library, which approach)
+-- status.json      <- Machine-readable status
```

**Key CLI commands:**
- `openspec change create [name]` -- create a new change proposal
- `openspec list` -- list all active changes
- `openspec archive [name]` -- archive a completed change
- `openspec validate` -- validate specs and changes
- `openspec view` -- interactive dashboard

**Change workflow:** `Draft -> Review -> Implement -> Archive`

- **Draft:** Proposal created, still being refined
- **Review:** Approved at a human stop
- **Implement:** Agents actively building from `tasks.md`
- **Archive:** Feature shipped, folder moved to `openspec/archive/`

When an agent starts work, it reads `tasks.md` for work items, `design.md` for technical decisions, `proposal.md` for context on *why*, and updates `status.json` as tasks complete.

> **Full details:** `plans/process-guide.md` -- Section 2

---

## 4b. Required Tooling Setup

Run these before starting Phase 0:

| Tool | Command | Notes |
|------|---------|-------|
| **Git** | `git init` | Non-negotiable |
| **OpenSpec CLI** | `npm install -g @fission-ai/openspec` then `openspec init` | Interactive -- run in terminal |
| **Node.js 20+** | Required for OpenSpec | Check with `node --version` |

**Optional but recommended:**

| Tool | What for | Install |
|------|----------|---------|
| **Mac Whisper** | Voice input for brain dumps (3x faster than typing) | `brew install --cask mac-whisper` or App Store |
| **Claude Skills** | PDF/XLSX/DOCX/PPTX processing in Claude Code | Check Claude Code settings |
| **MCP servers** | Custom agent tools, hierarchical memory | Configure in `.claude/mcp.json` when needed |

---

## 5. The Process: 8 Phases

```
PHASE 0        PHASE 1         PHASE 2          PHASE 3
--------       ---------       ---------        ---------
Brain Dump  ->  Requirements  ->  Architecture  ->  Design System
& Vision       & Roadmap        & Scaffold        & Tokens

    v HUMAN STOP 1         v HUMAN STOP 2          v HUMAN STOP 3
    (approve scope)        (approve structure)      (approve look & feel)

PHASE 4         PHASE 5          PHASE 6          PHASE 7
---------       ---------        ---------        ---------
MVP Build    ->  Polish &      ->  TestFlight    ->  App Store
(core flows)    Secondary        & Beta            Submission
                Features

    v HUMAN STOP 4         v HUMAN STOP 5          v HUMAN STOP 6
    (test on device)       (beta feedback)          (final review)
```

### Phase 0: Brain Dump & Vision (You + Claude Code)

**Duration:** 1-2 hours
**Mode:** Conversational, no code yet
**Output:** `plans/braindump.md`

What happens:
- You talk, Claude listens and asks follow-ups
- Capture EVERYTHING -- features, feelings, vibes, competitors, anti-patterns
- No filtering, no organizing
- Use voice input if possible (3x faster)

Prompt to kick off:
```
I'm going to brain dump everything I want in my iOS app. Don't organize it yet,
just help me get it all out. Ask me follow-up questions to pull out more ideas.
I want to capture EVERYTHING, even stuff that's probably out of scope.

Here's my app: [1-2 sentence description]

Let me start dumping...
```

**What to include in your dump:**
- What screens exist
- What the user does first, second, third
- What makes you angry about existing apps in this space
- What the dream version looks like
- What the day-1 version looks like
- Offline capability needs
- Push notification needs
- Any API/backend requirements
- Monetization ideas
- Accessibility requirements
- Design vibes (upload to `design/vibes/` at this point)

### Phase 1: Requirements & Roadmap (Agents)

**Duration:** 1-2 hours
**Mode:** Sequential agent prompts
**Output:** `requirements.md`, `priorities.md`, `roadmap.md`, `parallelization.md`

Run these in order:

1. **Requirements Engine** -- transforms braindump into REQ-001, REQ-002...
2. **Business Analyst** -- scores value, complexity, priority matrix
3. **Project Manager** -- creates phased roadmap
4. **Parallelization Analyzer** -- maps dependencies, assigns agent streams

> **HUMAN STOP 1:** Review the roadmap. Does Phase 1 (MVP) contain only what's needed to prove the app works? Cut ruthlessly. You can always add later.

### Phase 2: Architecture & Scaffold (iOS Architect Agent)

**Duration:** 1-2 hours
**Mode:** Autonomous with CLAUDE.md context
**Output:** Xcode project scaffold, folder structure, core models

What the architect does:
- Creates Xcode project via Claude Code
- Sets up SwiftUI app structure (App/, Features/, Core/, Design/)
- Defines navigation architecture (NavigationStack vs TabView vs custom)
- Creates data models
- Sets up dependency injection pattern
- Configures Swift Package Manager dependencies
- Creates `design/tokens.md` from your vibes

> **HUMAN STOP 2:** Open the project in Xcode. Does it build? Does the navigation make sense? Are the models right? This is cheap to fix now, expensive later.

### Phase 3: Design System & Tokens (Design Translator Agent)

**Duration:** 1-2 hours
**Mode:** Autonomous, reads from `design/vibes/`
**Output:** SwiftUI design system, reusable components

What happens:
- Agent reads your uploaded vibe references
- Translates vibes into concrete design tokens (colors, typography, spacing)
- Creates reusable SwiftUI components (buttons, cards, inputs, etc.)
- Builds a preview catalog so you can see components in Xcode

> **HUMAN STOP 3:** Run previews in Xcode. Does this feel like your app? Adjust `design/tokens.md` and re-run if needed. This is the cheapest time to iterate on look & feel.

### Phase 4: MVP Build (Swift Dev + UI Dev Agents)

**Duration:** 2-5 days (agents work autonomously)
**Mode:** Parallel agents, release manager coordinates
**Output:** Working Phase 1 app

Agent assignments:
- **Swift Dev (Roy):** Business logic, data layer, networking, persistence
- **UI Dev (Jen):** SwiftUI views, animations, user flows
- **Test Engineer:** Unit tests, UI tests, snapshot tests

Agents follow the roadmap. Each requirement gets:
1. Tests written first (TDD)
2. Implementation
3. Tests pass
4. Commit with REQ-xxx reference
5. Roadmap updated

The release manager merges completed features, runs integration tests.

> **HUMAN STOP 4:** Install on your device via Xcode. Walk through every flow. Make notes. File issues as new requirements. Do NOT start Phase 5 until Phase 4 feels solid.

### Phase 5: Polish & Secondary Features

**Duration:** 2-5 days
**Mode:** Same as Phase 4
**Output:** Feature-complete app for beta

> **HUMAN STOP 5:** TestFlight build. Send to 5-10 people. Collect feedback for 3-5 days minimum.

### Phase 6: TestFlight & Beta

**Duration:** 1-2 weeks
**Mode:** Bug fix agents respond to feedback
**Output:** Stable beta build

### Phase 7: App Store Submission

**Duration:** 1-2 days prep + Apple review time
**Mode:** Checklist-driven

Checklist:
- [ ] App Store screenshots (6.7", 6.5", 6.1" if needed)
- [ ] App Store description and keywords
- [ ] Privacy policy URL
- [ ] App icon (1024x1024)
- [ ] Review notes for Apple
- [ ] In-app purchases configured (if applicable)
- [ ] App Tracking Transparency (if applicable)
- [ ] All test data removed
- [ ] Analytics/crash reporting configured
- [ ] Deep links working
- [ ] Push notification entitlements (if applicable)

> **HUMAN STOP 6:** Final review before submit. You press the button.

---

## 6. Agent Roster & Character Sheets

### Planning Agents

| Agent | Color | Role | When to Use |
|-------|-------|------|-------------|
| Brain Dumper | -- | Pulls ideas out of you | Phase 0 |
| Requirements Engineer | Purple | Turns ideas into REQ-xxx specs | Phase 1 |
| Business Analyst | Green | Scores value, creates priority matrix | Phase 1 |
| Project Manager | Blue | Maintains roadmap, sequences work | All phases |

### Building Agents

| Agent | Color | Role | When to Use |
|-------|-------|------|-------------|
| iOS Architect | -- | System design, scaffold, navigation | Phase 2 |
| Design Translator | Silver | Vibes -> design tokens -> SwiftUI components | Phase 3 |
| Swift Dev (Roy) | Brown | Business logic, data, networking | Phase 4+ |
| UI Dev (Jen) | Silver | SwiftUI views, animations, flows | Phase 4+ |
| Test Engineer | -- | Unit, UI, integration, snapshot tests | Phase 4+ |
| Release Manager | -- | Merges, conflict resolution, changelog | Phase 4+ |

### Maintenance Agents

| Agent | Role | When to Use |
|-------|------|-------------|
| Code Reviewer | Reviews every commit against checklist | Continuous |
| Documentarian | Keeps README, code comments updated | Continuous |
| Anti-Pattern Detective | Builds evolving checklist of bad patterns | Weekly |

### Character Sheets

Every agent has a character sheet in `agents/`. Each includes: personality (drives ambiguous decisions), core memories (including failure memories for self-correction), responsibilities, tools, coordination interfaces, and a role-specific quality checklist.

**Why character sheets matter:**
- **Personality** determines HOW the agent handles ambiguity. "Cautious, test-obsessed" vs "ship fast" = different decisions.
- **Failure memories** self-correct better than rules. Rules say "don't do X." Memories say "I did X, it was bad, here's what I do instead."
- **Coordination interfaces** define who talks to whom and in what format.

**Loading an agent:**
```
Read agents/[name].md -- this is your character sheet.
Read agents/memory/[name]/recent.md -- your recent memory.
Read plans/roadmap.md -- current state of the project.
Read CLAUDE.md -- project conventions.

You ARE this agent. Follow its personality, respect its core memories,
use its quality checklist before marking work as done.
```

> **Full character sheets:** `agents/*.md` (10 files)
> **Character sheet format:** `plans/agent-infrastructure.md` -- Gap 8

---

## 7. Agent Infrastructure

### Communication Patterns

Agents coordinate through files, not chat. Every handoff is a devlog entry:

```
devlogs/YYYY-MM-DD-REQ-xxx.md
+-- What changed
+-- Files touched
+-- Tests status
+-- What's unblocked for the next agent
+-- Notes for next agent
```

**Color-coding for parallel sessions:**

| Color | Agent | Domain |
|-------|-------|--------|
| Purple | Requirements Engineer | Plans |
| Green | Business Analyst | Plans |
| Blue | Project Manager | Plans |
| Brown | Roy (Swift Dev) | Code |
| Silver | Jen (UI Dev) | Code |
| Red | Release Manager | Merge |

### 5-Layer Memory System

```
CORE (permanent)         -> agents/[name].md (Core Memories section)
LONG-TERM                -> agents/memory/[name]/long-term.md
MEDIUM-TERM              -> agents/memory/[name]/medium-term.md
RECENT (last 3 sessions) -> agents/memory/[name]/recent.md
COMPOST (summarized)     -> agents/memory/[name]/compost.md
```

Memory flows up: Recent -> Medium-term -> Long-term -> Core. Everything else -> Compost. Run **REM Sleep** (consolidation) at end of each phase or weekly.

### Priority Queue System

```
tasks/
+-- queue.json          <- All items: CRITICAL > HIGH > MEDIUM > LOW
+-- claimed/            <- In-progress (one agent at a time)
+-- blocked/            <- Waiting on dependency
+-- completed/          <- Done (archive)
```

Agent workflow: Read queue -> Filter by priority + unblocked -> Claim -> Work -> Complete -> Check what's unblocked -> Next item.

> **Full details:** `plans/agent-infrastructure.md` -- Gaps 7, 9, 11

---

## 8. Human Stops (Checkpoints)

These are non-negotiable. Agents do NOT proceed past a human stop without your explicit go-ahead.

| Stop | After Phase | What You Check | Go/No-Go Criteria |
|------|-------------|----------------|-------------------|
| HS-1 | 1 (Roadmap) | Is the scope right? Is Phase 1 minimal enough? | You can explain the MVP in one sentence |
| HS-2 | 2 (Architecture) | Does it build? Is navigation logical? | Xcode builds, you can tap through placeholders |
| HS-3 | 3 (Design) | Does it look/feel right? | Previews match your vibe |
| HS-4 | 4 (MVP) | Does the core flow work on device? | You can complete the main user journey |
| HS-5 | 6 (Beta) | Is beta feedback addressed? | No P0/P1 bugs remaining |
| HS-6 | 7 (Submission) | Final review | You'd show this to your harshest critic |

### How to Signal Go/No-Go

In your Claude Code session after reviewing:

```
# GO -- proceed to next phase
HUMAN STOP [N] APPROVED. Proceed to Phase [N+1].
Notes: [any specific feedback or adjustments]

# NO-GO -- iterate on current phase
HUMAN STOP [N] NOT APPROVED. Issues to address:
1. [issue]
2. [issue]
Fix these before we proceed.
```

---

## 9. Design Vibe System

This is how you communicate visual direction without being a designer.

### How It Works

1. **Collect references** -- screenshots of apps you like, Dribbble shots, color palettes, typography examples, mood boards
2. **Drop them in `design/vibes/`**
3. **Describe each one in `design/vibes/README.md`**

### The Vibes README Template

```markdown
# Design Vibes

## Overall Direction
[2-3 sentences about the feeling you want. Example: "Minimal, warm, slightly
playful. Think Notion meets a cozy coffee shop. No corporate energy. Rounded
corners, soft shadows, warm neutrals with one accent color."]

## Color Vibe
- Reference: color-vibe.png
- What I like about it: [specific things]
- What I don't like: [things to avoid]

## Layout Vibe
- Reference: layout-inspo.png
- What I like: [specific things]

## Typography Vibe
- Reference: typography-ref.png
- What I like: [specific things]

## Micro-interactions
- [describe any animation vibes]

## Anti-vibes (what to AVOID)
- [things you hate]
```

---

## 10. Testing Strategy for iOS

### Test Pyramid for SwiftUI Apps

```
         /  E2E (XCUITest)  \        <- Expensive, few
        / Integration Tests   \      <- Medium, some
       /    Unit Tests          \    <- Cheap, many
      /  Preview Snapshots       \   <- Visual regression
     --------------------------------
```

### What Gets Tested

| Layer | Tool | What | When |
|-------|------|------|------|
| Unit | XCTest | ViewModels, Services, Utilities | Every commit |
| Integration | XCTest | Data flow, API calls, persistence | Every commit |
| UI | XCUITest | Core user journeys | Every PR/merge |
| Snapshot | Swift Snapshot Testing | Component visual regression | Every PR/merge |
| Preview | Xcode Previews | Component rendering | During dev |

### Non-Negotiable Test Rules

1. **Every ViewModel gets unit tests.** No exceptions.
2. **Every API call gets a mock test.** Network failures happen.
3. **The critical user path gets E2E tests.** If onboarding -> main feature -> completion breaks, you know immediately.
4. **Design components get snapshot tests.** Catch visual regressions.

---

## 11. Quality Gates

### Senior Developer Checklist

An evolving checklist built from REAL corrections. Every item exists because an agent made the mistake. The checklist grows over the project lifetime. It never shrinks.

Starting items (22): No force unwrapping, no hardcoded colors/fonts/strings, no business logic in Views, all ViewModels `@MainActor` + `@Observable`, no [backend] imports in Views/ViewModels, no singletons, services accessed through protocols, tests written before implementation, mock data resembles production, no catchall `utils.swift` files.

> **Full checklist:** `plans/agent-infrastructure.md` -- Gap 10

### Defeat Tests

Every bug that happens twice is a pattern. Every pattern gets a test that FAILS when it recurs.

```
Pattern Found -> Test Written -> Agent Trained -> Pattern Defeated
```

4 starter defeat tests (XCTest):
1. **Force Unwrap Scanner** -- scans source tree for `!` on optionals
2. **Hardcoded Color Scanner** -- catches `Color.blue` etc. in Views
3. **Business Logic in View** -- flags Views with >3 data-conditional branches
4. **@MainActor Omission** -- verifies all ViewModels have `@MainActor`

> **Full implementations:** `plans/agent-infrastructure.md` -- Gap 12

### Behavior Testing

Test the PROMPT, not just the code. When you change an agent's character sheet or memory, verify it still handles known scenarios correctly.

```
agents/tests/
+-- roy-behaviors.md     <- 5+ scenarios Roy must handle correctly
+-- jen-behaviors.md     <- 5+ scenarios Jen must handle correctly
+-- [etc per agent]
```

Run after every character sheet edit, memory change, or REM Sleep consolidation.

> **Full framework:** `plans/agent-infrastructure.md` -- Gap 13

---

## 12. CLAUDE.md Template

Copy this into your project root as `CLAUDE.md` and fill in the blanks.

```markdown
# [App Name]

## What This App Does
[2-3 sentences]

## Tech Stack
- Platform: iOS 17+
- Language: Swift 6
- UI Framework: SwiftUI
- Architecture: MVVM with dependency injection
- Backend: [Supabase / Firebase / none]
- Package Manager: Swift Package Manager
- Testing: XCTest + XCUITest

## Project Structure
- `/[App]/App/` -- App entry point, app-level config
- `/[App]/Features/` -- Feature modules (one folder per feature)
- `/[App]/Core/` -- Shared services, networking, persistence
- `/[App]/Design/` -- Design tokens, reusable components
- `/[App]/Tests/` -- All test targets

## Current Phase
Phase [N]: [Name]
Working on: [REQ-xxx, REQ-yyy]
Next human stop: HS-[N]

## Conventions
- Use SwiftUI, not UIKit, unless explicitly required
- MVVM: Views own no business logic. ViewModels are @Observable classes.
- All strings user-facing -> LocalizedStringKey ready
- All colors -> from design tokens, support dark mode
- Error handling: Result type or async throws, never force unwrap
- No singletons. Use environment injection.
- Commit messages: "REQ-xxx: [what changed]"

## Key Files
- `/plans/roadmap.md` -- What to build and in what order
- `/plans/requirements.md` -- Full spec
- `/design/tokens.md` -- Design system values
- `/design/vibes/README.md` -- Visual direction
- `/motherdoc_tobuild.md` -- The north star. Every agent reads this.

## Agent Notes
- Read the roadmap before starting any work
- Write tests BEFORE implementation (TDD)
- Commit after each completed requirement
- Update roadmap after completing work
- Write devlog entry summarizing what was done
```

---

## 13. Prompt Cookbook

The full prompt cookbook is in `plans/prompt-cookbook.md` -- copy-paste ready, every phase covered.

**Quick reference -- which prompt for which step:**

| Step | Prompt Name | Where |
|------|------------|-------|
| Phase 0: Start brain dump | Brain Dump Kick-off | `plans/prompt-cookbook.md` Phase 0 |
| Phase 0: Pull more ideas | Follow-up Questions | `plans/prompt-cookbook.md` Phase 0 |
| Phase 1: Generate requirements | Requirements Engineer (5-component) | `plans/prompt-cookbook.md` 1A |
| Phase 1: Score value | Business Value Analyst | `plans/prompt-cookbook.md` 1B |
| Phase 1: Create roadmap | Technical Program Manager | `plans/prompt-cookbook.md` 1C |
| Phase 1: Map dependencies | Dependency Analyzer | `plans/prompt-cookbook.md` 1D |
| Phase 1: Validate specs | Requirements Reviewer | `plans/prompt-cookbook.md` 1E |
| Phase 2: Scaffold project | iOS Architect | `plans/prompt-cookbook.md` Phase 2 |
| Phase 2: Generate CLAUDE.md | CLAUDE.md Generator | `plans/prompt-cookbook.md` Phase 2 |
| Phase 3: Design system | Design Translator | `plans/prompt-cookbook.md` Phase 3 |
| Phase 4+: Build feature | Feature Work (TDD) | `plans/prompt-cookbook.md` Phase 4+ |
| Phase 4+: Autonomous cycle | Self-directing Agent | `plans/prompt-cookbook.md` Phase 4+ |
| Phase 4+: Review code | Code Reviewer | `plans/prompt-cookbook.md` Phase 4+ |
| Phase 4+: Deep review | Senior Developer | `plans/prompt-cookbook.md` Phase 4+ |

**Also includes:** Requirements guide (5-component framework, granularity test, anti-patterns), interface contracts, and the parallelization decision matrix.

> **Full details:** `plans/process-guide.md` -- Sections 4, 5, 6

---

## 14. Operations, Cost & Setup

The full operations guide is in `plans/operations.md`.

### Model Selection (Quick Reference)

| Task | Model | Est. Tokens |
|------|-------|-------------|
| Brain dump, requirements, value analysis, reviews | Sonnet 4.6 | 5K-30K |
| Architecture, complex debugging, senior review | Opus 4.6 | 20K-80K |
| Devlogs, roadmap updates | Haiku 4.5 | 1K-5K |

**Rule:** Start with Sonnet. Switch to Opus when Sonnet loops or makes architectural mistakes.

### Budget Protection

- Claude Pro Max ($200/mo) -- non-negotiable for serious building
- If an agent retries the same operation 3x -> stop it, diagnose manually
- Conservation mode at 80% budget: reduce sessions, switch to Haiku for routine tasks

### Iteration Cycles

- **Micro** (minutes): TDD loop -- write tests -> implement -> pass -> commit -> next
- **Daily**: Morning roadmap check -> agent work -> evening review -> stop
- **Weekly**: Pattern review, memory cleanup, checklist update, roadmap health
- **Monthly**: Behavior audit, agent versioning, cost review, compost cleanup

### CTO Mindset

Watch: roadmap, agent status, errors, test results. Don't watch: every line of code, every file change.

> "Don't let the boss code. You're the boss now."

> **Full details:** `plans/operations.md`

---

## 15. Anti-Patterns & Gotchas for Mobile

### iOS-Specific Anti-Patterns

| Pattern | Why It's Bad | What to Do Instead |
|---------|-------------|-------------------|
| Force unwrapping (`!`) | Crash in production | Optional binding, guard let, nil coalescing |
| Massive Views | SwiftUI re-renders everything | Extract subviews, use ViewModels |
| Business logic in Views | Untestable | MVVM -- logic lives in ViewModel |
| Hardcoded strings | Can't localize | `LocalizedStringKey` from day 1 |
| Hardcoded colors | No dark mode | Design token system |
| `@State` for shared data | Doesn't propagate | `@Observable` ViewModel in environment |
| Ignoring `@MainActor` | UI updates off main thread | Mark ViewModels `@MainActor` |
| Network calls without error states | Blank screens on failure | Loading/error/empty states for every async view |
| No keyboard avoidance | Text fields hidden by keyboard | ScrollView or proper offset handling |
| Ignoring Safe Area | Content behind notch/home indicator | Respect safe area unless intentionally edge-to-edge |

### Agent-Specific Anti-Patterns

| Pattern | Why It's Bad | What to Do Instead |
|---------|-------------|-------------------|
| Agent creates UIKit code | Wrong framework, mixed paradigms | System prompt explicitly says SwiftUI only |
| Agent uses deprecated APIs | iOS 15 patterns in iOS 17+ project | Pin minimum deployment target in CLAUDE.md |
| Agent ignores design tokens | Inconsistent UI | Pre-commit check for hardcoded Color/Font |
| Agent commits failing tests | Broken main branch | Pre-commit hook runs tests |
| Agent over-engineers | Simple feature becomes architecture astronautics | Requirements have complexity caps |
| Agent skips accessibility | Inaccessible app | Acceptance criteria include VoiceOver testability |

---

## 16. Diarrhea Protocol

When you feel the pull to add "just one more feature" or start a second app or code at 3am:

1. **Capture the idea** -- tell the PM agent, it goes in `plans/braindump.md`
2. **Do NOT execute it now** -- the roadmap exists for a reason
3. **Close the laptop** -- agents work while you sleep
4. **Check the signs:**
   - Haven't eaten in 6 hours? Stop.
   - Skipped plans with people? Stop.
   - Started 3 things before finishing 1? Stop.
   - "Just one more feature" for the third time? Stop.
5. **Remember:** This capability isn't going away. The app will be there tomorrow. The roadmap is your external brain. Trust it. Defer to it. Come back tomorrow.

---

## How to Use This Document

1. **Fill in Section 1** (Project Identity) -- this is your anchor
2. **Run tooling setup** (Section 4b) -- git, openspec, voice tools
3. **Start Phase 0** -- brain dump prompt is in `plans/prompt-cookbook.md`
4. **Follow the phases in order** -- don't skip ahead
5. **Respect the human stops** -- they exist because autonomous agents will happily build the wrong thing perfectly
6. **Upload design vibes early** -- Phase 0 or Phase 1 at latest
7. **Read the reference files** -- they have the detail this doc summarizes
8. **Keep the roadmap as the single source of truth** -- all agents read it, all agents update it

### Quick Start Path

```
SETUP  -> git init, openspec init, copy reference files from template

NOW    -> Phase 0: Brain Dump (you + Claude, conversational)
         Output: plans/braindump.md

THEN   -> Phase 1: Requirements (agents from prompt-cookbook.md)
         Output: requirements.md, priorities.md, roadmap.md, parallelization.md

STOP   -> HUMAN STOP 1: Approve scope

THEN   -> Phase 2: Architecture (iOS Architect agent)
         Output: Xcode project scaffold

STOP   -> HUMAN STOP 2: Does it build?
         ...continue per phase diagram above
```

### New Project Setup Checklist

- [ ] Copy this template to your new project root as `motherdoc_tobuild.md`
- [ ] Copy reference files to `plans/`: `process-guide.md`, `agent-infrastructure.md`, `prompt-cookbook.md`, `operations.md`
- [ ] Copy `agents/*.md` character sheets to `agents/`
- [ ] Fill in Section 1 (Project Identity)
- [ ] Run `git init` and `openspec init`
- [ ] Create directory structure (Section 3)
- [ ] Fill in `CLAUDE.md` from template (Section 12)
- [ ] Upload design vibes to `design/vibes/`
- [ ] Start Phase 0

This is your north star. Everything else is execution.
