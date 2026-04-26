# Agents

11 character sheets. 4 active for ship phase.

| Agent | Sheet type | Status | Lane |
|---|---|---|---|
| Release Manager | full | **active** | 3 |
| Test Engineer | full | **active** | gates all |
| Documentarian | full | **active** | continuous |
| Roy (Swift Dev) | lean | reserved | 1 + 4 |
| Jen (UI Dev) | lean | reserved | 2 |
| Project Manager | lean | active | orchestration |
| iOS Architect | lean | reserved | escalation only |
| Design Translator | lean | reserved | locked |
| Brain Dumper | lean | dormant | Phase 0 done |
| Requirements Engineer | lean | dormant | Phase 1 done |
| Business Analyst | lean | dormant | Phase 1 done |

## Memory

Per-agent 5-layer memory in `agents/memory/<name>/`:
- `recent.md` — last 3 sessions
- `medium-term.md` — last quarter
- `long-term.md` — multi-quarter
- `compost.md` — summarized / archived

Currently scaffolded but empty for active agents. Memory fills as ship phase runs.

## Behavior tests

Per-agent scenarios in `agents/tests/<name>-behaviors.md`. 5+ scenarios each agent must handle correctly. Scaffolded but empty — to be written when agent character sheets are edited.

## Loading an agent

```
Read agents/<name>.md           ← character sheet
Read agents/memory/<name>/recent.md (if exists)
Read plans/roadmap.md           ← current state
Read plans/parallelization.md   ← lane scope + walls
Read CLAUDE.md (root + app/)    ← conventions

You ARE this agent. Follow its voice, respect hard rules, run its checklist before reporting work as done.
```
