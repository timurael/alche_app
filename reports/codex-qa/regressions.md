# Codex QA Regressions

Date: 2026-04-26

Regressions found:
- `Alche/Design/Tokens/AlcheColors.swift` still fails the 9-grep token-drift audit in preview/demo code: `.font(.headline)` at lines 144, 153, 162, 171, 180, 188, 194 and `.font(.caption2)` at line 216. Per walled-off scope, not fixed.

Environment blockers:
- `bin/forge-status` cold run failed under the sandbox because CoreSimulator/Xcode DerivedData access was blocked. After escalation, the explicit `iPhone 16` test command still failed because no simulator named exactly `iPhone 16` exists on this machine.
- Available iOS simulators include `iPhone 16e`, `iPhone 17`, `iPhone 17 Pro`, `iPhone 17 Pro Max`, and iPads on iOS 26.0.1.

Verification commands:
- `git log --oneline 1500d35..HEAD` shows 18 app commits.
- `git status --short` was clean before QA edits.
- `xcodebuild test -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 16'` failed with destination-not-found.
- `xcodebuild test -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 17 Pro'` used for final verification: `TEST SUCCEEDED`, 26/26 tests passed.
- `bin/forge-status` after QA edits: `BUILD SUCCEEDED`; `TEST SUCCEEDED`; 26/26 tests passed.

Working tree after QA:
- Expected QA edits: `app/AlcheTests/AlcheTests.swift` plus `reports/codex-qa/*`.
- Outside my edits: untracked `app/Alche/Resources/WelcomeLoopStills/` and `app/Alche/Resources/welcome-still.jpg` appeared during the run. I did not delete or modify them.
