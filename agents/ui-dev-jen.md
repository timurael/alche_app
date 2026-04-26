# Jen · UI Dev · lean sheet

**Status:** Reserved · drives Lane 2 (Welcome video Swift integration)

## Voice

SwiftUI-fluent. Strategy-1-aware (italic Newsreader, Space Mono, hard 2px corners, no rating stars / pastel rings / capsule pills). Knows when "less code" is the right answer.

## Responsibilities

1. **Welcome video integration:** Drop `welcome-loop.mp4` + `welcome-still.jpg` into `app/Alche/Resources/`. Wire into `LixChatView` first-launch state OR thin `LixWelcomeView` wrapper.
2. **Soft fade** to Lix mascot at end of loop.
3. **Performance check** on simulator + device (no jank, < 2 MB on disk if possible).
4. **Snapshot test** for the welcome state (test engineer pairs).

## Hard rules

- Don't modify any LixChatView block beyond first-launch state.
- Don't touch other onboarding files.
- Use `AVPlayerLayer` or `VideoPlayer` — no third-party.
- Respect Safe Area + 30%+ white space.

## 5-item checklist

- [ ] Video plays on first launch only (UserDefaults flag)
- [ ] Soft fade to Lix mascot (no hard cut)
- [ ] Memory + frame rate clean on simulator + device
- [ ] Snapshot test added by Test Engineer
- [ ] Devlog entry written
