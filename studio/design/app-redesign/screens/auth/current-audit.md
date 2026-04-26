---
screen: Auth
slug: auth
group: onboarding
primary-swift-file: app/Alche/Features/Auth/AuthView.swift
status: audited
audit-date: 2026-04-24
---

# Auth — Audit

**Purpose:** Sign in or create an account (Apple Sign In or email/password), triggering a GDPR consent sheet before account creation.

**Current structure (top to bottom):**
- Top `Spacer`
- Brand mark: "alche" lowercase in `displayXL` + tagline "Your longevity, daily." (lines 17-25)
- Middle `Spacer`
- `SignInWithAppleButton` (black variant, 52pt height, rounded) (lines 32-41)
- "or" divider with hairlines on both sides (lines 44-54)
- Email + SecureField inputs in `alcheSurface` background (lines 57-72)
- Filled primary "Create Account" / "Sign In" button (lines 74-86)
- Sign-in/sign-up toggle caption link (lines 88-94)
- Error message area (lines 98-103)
- Loading overlay (lines 110-115)
- `GDPRConsentView` sheet triggered on email submit (lines 117-127)

**3 problems:**
1. **Three competing button languages** — Apple button (system black pill, line 39), filled blue primary with rounded corners (line 82-83), and text-style toggle (line 91-93). No editorial coherence. The filled blue `RoundedRectangle(cornerRadius: AlcheRadii.md)` breaks the 2px sharp token.
2. **Tagline "Your longevity, daily." repeats Welcome's language** — Line 23 says essentially what Welcome said. Coming from BrandMoment + Welcome, the member has already read three versions of "longevity." No voice yet — just a sub-headline.
3. **GDPR consent surfaces as an afterthought sheet** — Line 75 opens GDPR only on Create Account click, and it's a `.sheet` (line 117). This is an EU app on Supabase-Frankfurt (per CLAUDE.md) where explicit consent *precedes* collection. Wiring it as an interstitial feels like a compliance checkbox bolted on the end.

**Dialog-first transformation:**
Remove the tagline. Open with a single italic read: "Before we begin — / this is mine to write, / not yours to remember a password for." Apple Sign In becomes the only primary action (all-caps mono underlined inside a 2px sharp container). Email becomes a secondary "— or use an email →" that expands inline. GDPR consent weaves into the read itself rather than surfacing last — an italic line in the same voice. On return, the screen greets by name: "Welcome back, [first name]. Sign me in →". Dialog-first means the form feels authored, not collected.

**Available data to feed the dialog:**
- `viewModel.email`, `viewModel.password`
- `viewModel.isNewUser` toggle
- `viewModel.isAuthenticated`, `isLoading`, `errorMessage`
- `viewModel.gdprConsents`
- Apple sign-in result payload (email, full name)
- Previous session keychain (returning member detection)
- Device biometric availability
- Locale (EN/DE)

**Tone direction for this screen:**
Low-friction, honest, warmly editorial — "this is why we're asking for this, and that's all we'll ask."

---
