---
screen: Auth
slug: auth
status: designed
design-date: 2026-04-24
---

# Auth — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Auth/AuthView.swift`

## What changes vs current

**Remove:**
- "alche" lowercase in `displayXL` + tagline "Your longevity, daily." (lines 17-25)
- System `SignInWithAppleButton(.signIn, onRequest:..., onCompletion:...)` black pill variant at 52pt (lines 32-41)
- Separate filled primary "Create Account" / "Sign In" button with `AlcheRadii.md` rounded corners (lines 74-86)
- Sign-in / sign-up caption toggle (lines 88-94)
- `GDPRConsentView` `.sheet` triggered on email submit (lines 117-127)
- `alcheSurface`-backgrounded email + SecureField shown by default (lines 57-72)

**Add:**
- `AlchePrevEcho` "PREV · TOGETHER · Four answers. Three focus areas. One stack. Now a signature."
- `AlcheStampMark` + "ALCHE · SIGN THE LETTER"
- `AlcheReadBlock` — 3 italic lines, "mine to write" underlined
- `EditorialAppleButton` — wraps the `SignInWithAppleButton` inside a 2px-sharp black container with our mono label, hard drop shadow, trailing arrow
- "Or" quiet editorial rule separator (not the full-width divider currently used)
- `EmailPathToggle` — mono secondary row that expands `EmailFormSection` inline on tap (no default showing)
- `ConsentSection` — 3 italic Newsreader rows with checkboxes, plain-language sublabel, "REQUIRED" tag on the first
- `AlcheInterstitial` — "Only the first is *required*. The rest you can change your mind about later."
- `AlchePrimaryActionButton` — "SIGN · OPEN MY FIRST READ →"
- Returning-user secondary "Welcome back, {firstName} · Sign me in" (wired to keychain / Apple relay detection)
- Footnote mono row — "GDPR · EU · DE" + "V · 1.04"

**Keep:**
- `AuthViewModel` — existing `email`, `password`, `isNewUser`, `isAuthenticated`, `isLoading`, `errorMessage`, `gdprConsents` state
- `SignInWithAppleButton.onRequest` / `.onCompletion` logic (wrapped visually, not re-implemented)
- Email + password validation
- Loading overlay (visual updated to editorial style)
- Returning-member detection (keychain check in `.onAppear`)

## View structure (top to bottom)

1. **QSTopBar** — "← Back" + "STEP 08 · OF · 08"
2. **AlchePrevEcho** — continuity tag
3. **StampRow** — mark + "ALCHE · SIGN THE LETTER"
4. **AlcheReadBlock** — 3 italic lines
5. **EditorialAppleButton** — wraps `SignInWithAppleButton` with custom chrome
6. **OrRule** — "Or" between two hairlines
7. **EmailPathToggle** — tap to expand; chevron direction flips
8. **EmailFormSection** (conditional) — 2 `AlcheTextField`s (email, password), inline submit as secondary
9. **ConsentSection** — header "● CONSENT · Before I listen" + 3 rows
10. **AlcheInterstitial** — requirement note
11. **AlchePrimaryActionButton** — sign + open first read
12. **AlcheSecondaryLink** — "Welcome back · Sign me in" (returning path)
13. **Footnote** — GDPR region + version

No tab bar.

## ViewModel changes

- Replace `showGDPRSheet` flag with inline `consentState: GDPRConsentState` struct — mirrors the 3 in-view rows
- Add `canSubmit: Bool` — `isAuthenticated && consentState.required`
- Add `isReturningMember: Bool` — keychain check; toggles the secondary link copy
- Add `firstNameFromApple: String?` — captured from Apple Sign In's one-time relay
- `primaryButtonLabel` — static "Sign · Open my first read"
- Remove the sign-in/sign-up toggle state — screen is always "enter or return"; differentiation is inferred at submit time

## New components needed

- `EditorialAppleButton(onRequest:onCompletion:)` — wraps the native `SignInWithAppleButton` inside our black 2px-sharp container with hard drop shadow. Native button is rendered with `.signInWithAppleButtonStyle(.black)` and its width/height matched to the container; the system button handles the auth, our container just provides the visual. Lives in `Design/Components/EditorialAppleButton.swift`.
- `ConsentRow(isRequired:isChecked:copy:sublabel:onToggle:)` — italic Newsreader copy + muted Noto Sans sublabel + 14px square checkbox. Lives in `Design/Components/ConsentRow.swift`.
- `EmailPathToggle` + inline `EmailFormSection` — expandable row. Simple `@State var isExpanded` toggle.
- `AlcheTextField` — already exists in design system per current code; verify it meets 2px-sharp + hairline border contract.
- Reuses `AlchePrevEcho`, `AlcheStampMark`, `AlcheReadBlock`, `AlcheInterstitial`, `AlchePrimaryActionButton`, `AlcheSecondaryLink`.

## Data dependencies

- Apple Sign In flow: `ASAuthorizationAppleIDRequest` → backend session
- Supabase (Frankfurt) for email/password
- Keychain for returning-member detection
- `AppState.userWellnessProfile` from previous onboarding screens (posted to backend after auth)
- `Locale.current` for EN/DE strings

## Accessibility / localization notes

- **VoiceOver:**
  - Apple button keeps its native accessibility trait — our wrapper is purely visual
  - Consent rows announce: "Consent 1 of 3. Required. Store my answers and focus areas on EU servers, so you can read me across devices. Frankfurt, Supabase, retained 24 months, deletable anytime. Currently checked. Double-tap to toggle."
- **Dynamic Type:** consent italic copy wraps to 3 lines at AX3; sublabel wraps to 3.
- **Legal review required:**
  - The italic consent copy rewords the legal substance — legal must verify it matches the GDPR contract.
  - Required vs optional marker must be unambiguous.
  - The data sovereignty statement (Frankfurt · Supabase · 24mo) must match our DPA.
- **Localization (EN/DE):**
  - `auth.prev.echo` — dynamic, built from onboarding progress
  - `auth.stamp` = "ALCHE · SIGN THE LETTER"
  - `auth.read.line1..3`
  - `auth.apple.cta` = "Continue with Apple"
  - `auth.or` = "Or"
  - `auth.email.toggle` = "Use an email instead"
  - `auth.consent.head` = "● CONSENT · Before I listen"
  - `auth.consent.1/2/3.copy` + `.sublabel` (legal-approved EN + DE)
  - `auth.consent.required.tag` = "REQUIRED"
  - `auth.interstitial` = "Only the first is required. The rest you can change your mind about later."
  - `auth.primary.cta` = "Sign · Open my first read"
  - `auth.secondary.cta.returning` = "Welcome back, {name} · Sign me in"
  - `auth.secondary.cta.fresh` = "Already a member · Sign in"

## Estimated effort

**L** — full day. Most of the work is the `EditorialAppleButton` wrapper (proving the HIG compliance of our custom chrome), plus the legal review loop on the rewritten GDPR strings. The view itself is 4 hours.
