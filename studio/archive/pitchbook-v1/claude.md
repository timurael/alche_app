CLAUDE.md — Alche Pitch Book Project

AGENT MODEL ASSIGNMENT — NON-NEGOTIABLE
ALWAYS use the correct model for each task type. This is a hard rule.

- Planning, architecture, orchestration, strategy → model="opus" (Claude Opus)
- Research, fact-checking, writing, analysis, data gathering → model="sonnet" (Claude Sonnet 4.6)

Every time you spawn a Task agent, CHECK which type of work it is doing and assign the correct model.
Remind yourself of this rule at the start of every new session.
WHAT THIS PROJECT IS
Build a pitch book (NOT a pitch deck) for alche, a longevity lifestyle platform based in Berlin. A pitch book is information-dense, editorial, beautiful — think McKinsey meets Aesop meets Apple. Final output: a set of HTML section files that get assembled into a single high-fidelity PDF.
CRITICAL: READ BEFORE DOING ANYTHING

Read ALCHE_PITCHBOOK_AGENTS.md FIRST — it contains the full orchestrator prompt, agent definitions, content architecture, and build sequence.
The html/ folder contains reference HTML files from previous work. Use them for DATA and DESIGN REFERENCE only — do not copy their structure wholesale.
Every stat, number, and claim has been fact-checked across 35+ research sessions. DO NOT substitute your own data. Use ONLY the locked data listed in the agents doc.

BRAND IDENTITY — NON-NEGOTIABLE

Name: alche (lowercase in running text, "Alche" at sentence start)
Pronunciation: AL-keh
Tagline: "The Art of Curated Longevity"
Category: Longevity Lifestyle Platform
One-liner: The longevity lifestyle platform that translates the science of living longer into daily rituals you actually enjoy.

DESIGN SYSTEM — APPLE GLASSMORPHIC × NEO-APOTHECARY
Typography
Headlines: Cormorant Garamond (300, 400, 600)
Body: Outfit (300, 400, 500, 600)
Data/Mono: Space Mono (400, 700)
Import: https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap
Color Palette
css:root {
  /* Core */
  --cream: #F5F0E8;
  --cream-mid: #EDE7DC;
  --deep: #2C2418;        /* PRIMARY TEXT — must be dark enough for print */
  --deep-90: rgba(44, 36, 24, 0.9);
  --deep-70: rgba(44, 36, 24, 0.7);
  --deep-50: rgba(44, 36, 24, 0.5);
  --deep-30: rgba(44, 36, 24, 0.3);
  --deep-15: rgba(44, 36, 24, 0.15);
  --deep-08: rgba(44, 36, 24, 0.08);

  /* Accent */
  --amber: #C4956A;
  --sage: #8B9E7C;
  --terra: #B86B4A;
  --rose: #C47A8A;
  --stone: #9E948A;

  /* Glass */
  --glass: rgba(255, 252, 246, 0.55);
  --glass-strong: rgba(255, 252, 246, 0.75);
  --glass-border: rgba(196, 149, 106, 0.18);
  --glass-border-strong: rgba(196, 149, 106, 0.3);
}
Glassmorphic Treatment
css/* Standard glass card */
.glass {
  background: var(--glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
}

/* Elevated glass card */
.glass-elevated {
  background: var(--glass-strong);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--glass-border-strong);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(44, 36, 24, 0.06), 0 2px 8px rgba(44, 36, 24, 0.03);
}

/* Background atmospheric layer */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse at 15% 20%, rgba(196, 149, 106, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 85% 80%, rgba(139, 158, 124, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(184, 107, 74, 0.03) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}
Page Format

Size: A4 (210mm × 297mm)
Margins: 20mm top/bottom, 22mm left/right
Each HTML file = one section (may span multiple A4 pages)
Print CSS: Every file must include @page { size: A4; margin: 0; } and .page { width: 210mm; min-height: 297mm; } with page-break-after: always;

Design Rules

Text color is ALWAYS var(--deep) or its opacity variants. NEVER use pure black (#000).
Accent colors are for labels, highlights, borders — NEVER for body text.
Every page has the subtle radial gradient background.
Glass cards float OVER the background — maintain depth illusion.
Data should use Space Mono. Financial tables use tabular-nums.
Section labels: 10px, uppercase, letter-spacing 0.15em, --amber color.
No stock imagery. Use typography, data visualization, and spatial composition.
Generous whitespace. This is a book, not a cramped slide deck.

LOCKED DATA — DO NOT CHANGE THESE NUMBERS
Global wellness market:              $6.3 trillion (GWI 2024)
German wellness market growth:       3.3% CAGR (NOT 3.4%)
Germany prevention spending:         4.8% of health expenditure (NOT 3.1%)
Berlin purchasing power index:       92.4 (GfK)
Berlin tech worker median salary:    EUR 75,000 gross
Germans willing to pay OOP for apps: 27% (SpringerMedizin)
EU consumers share health data:      8% (BEUC)
Competitive window:                  12-18 months (NOT 18-24)
Funding target:                      EUR 500K pre-seed
Valuation cap:                       EUR 2.5M
Pricing tiers:                       EUR 19 / 49 / 99 per month
Break-even:                          Month 12, ~145 paying subscribers + EUR 10K/month space
Oura valuation:                      $11B, 5.5M rings sold
Hims revenue:                        $2.3B, 2.5M subscribers
ZOE:                                 ~$100M revenue, 300K microbiome profiles
AG1:                                 $600M revenue, profitable
Graveyard total:                     $1.4B+ in failed health/nutrition startups
Retention: 77% of health app users churn by Day 3
Retention: 44% cancel within first 90 days
TEAM COMPOSITION

Timu — Co-founder & CEO. Marketer. Brand strategy, design, community.
Daria — Co-founder & COO. Media/PR background. Established figure in longevity/wellness topics. Market analysis, operations, competitive intelligence.
Doctor (via Daria) — CGM expert physician. Medical advisor. NOT investor, NOT co-founder.
CTO — Gap. Flagged as "funding unlocks this hire."

KEY PEOPLE (EXTERNAL)

Shai — Serial entrepreneur. Potential angel investor. Interested but NOT committed. Do NOT present as confirmed.

THE ASK
Mark as "[Detailed allocation shared separately upon request]" — do NOT include full use-of-funds breakdown in the book.
BUILD SEQUENCE
See /Users/timoel/Downloads/pitchbook/agents_prompt.md for the full agent-by-agent build order.
HTML → PDF PIPELINE
Use Playwright (headless Chromium) for conversion:
bashnpx playwright install chromium
node convert-to-pdf.js
The conversion script is defined in the agents doc. Key requirements:

Print each HTML at exactly A4 (210mm × 297mm)
Print background graphics enabled
Wait for fonts to load before rendering
Combine all section PDFs into one final file using pdf-lib
Target file size: under 15MB for email-ability