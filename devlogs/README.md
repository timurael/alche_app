# Devlogs

One file per shipped task. Format:

```markdown
# YYYY-MM-DD · LANE-N · Brief Title

**Agent:** [release-manager / test-engineer / roy / jen / etc.]
**Lane:** [1 Lix · 2 Welcome video · 3 Build 5 · 4 Housekeeping]
**Commit(s):** `abc1234` (app), `def5678` (parent)
**Effort:** [actual time vs estimate]

## What changed
[2-4 sentences]

## Files touched
| File | Change |
|------|--------|
| `path/to/file.swift` | [what] |

## Tests
- xcodebuild: [SUCCEEDED / FAILED → fixed in commit X]
- Test suite: [21/21 / 22/22 / etc.]
- Grep audits: [clean / N drifts found → fixed]

## Unblocked next
[what other lanes / tasks this enables]

## Notes for future agents
[anything subtle or non-obvious]
```

**Filename:** `YYYY-MM-DD-LANE-N-brief-slug.md` (e.g. `2026-04-26-LANE-1-lix-worker-deploy.md`).
