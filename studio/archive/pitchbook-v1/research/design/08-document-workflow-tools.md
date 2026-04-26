# Document Workflow Tools — PPTX, DOCX, PDF Generation

## claude-office-skills

A community tool for generating Office documents from Claude Code.

- **Repository:** [github.com/tfriedel/claude-office-skills](https://github.com/tfriedel/claude-office-skills)
- **Install:** `pip install -r requirements.txt && npm install`
- **Supports:** HTML-to-PPTX conversion, template-based workflows, thumbnail grid generation, direct OOXML editing, DOCX with tracked changes

### PPTX Best Approach

1. Design in HTML first (maximum visual control)
2. Convert HTML to PPTX (preserves typography and layout better than direct generation)
3. Alternatively: start from a branded `.pptx` template, inject content per slide

### DOCX Capabilities

- Supports tracked changes and OOXML manipulation
- Content extraction maintains revision data and formatting
- Embed or specify custom fonts in document styles for brand consistency

## Anthropic Official Skills

- **Repository:** [github.com/anthropics/skills](https://github.com/anthropics/skills)
- Includes: `skills/pptx/`, `skills/docx/`, `skills/pdf/`, `skills/xlsx/`
- These are the same skills powering Claude's built-in document capabilities

### Frontend Design Skill (Anti-Slop)

Anthropic provides a ~400-token skill that dramatically improves design output:

```
/plugin marketplace add anthropics/claude-code
/plugin install frontend-design@claude-code-plugins
```

Or paste the core prompt into your CLAUDE.md (see `01-anti-ai-slop-and-frontend-aesthetics.md`).

## AI Presentation Tools (External)

| Tool | Best For | Cost Range |
|---|---|---|
| [Beautiful.ai](https://www.beautiful.ai/) | Auto-designed, brand-tight slides | ~$12/mo |
| [Gamma](https://gamma.app) | Interactive web-based decks with analytics | Free tier |
| [PlusAI](https://plusai.com) | Works inside Google Slides / PowerPoint | ~$25/mo |
| [Canva](https://www.canva.com) | Quick, template-driven presentations | Free tier |
| [Slidebean](https://slidebean.com) | Startup templates + agency option | ~$15/mo |
| [Decktopus](https://decktopus.com) | Guided Q&A drafting with speaker notes | ~$10/mo |
| [Alai](https://getalai.com) | Trained on 1000+ pitch decks, investor analytics | Varies |

**Note:** For information-dense documents (pitch books, reports, white papers), HTML-to-PDF gives far more design control than any of these tools.

## Format Decision Guide

| Format | Best For | Control Level |
|---|---|---|
| HTML → PDF | Pitch books, reports, white papers, data-dense docs | Maximum |
| PPTX (direct) | Quick internal presentations, template-driven decks | Medium |
| HTML → PPTX | Branded external presentations needing design precision | High |
| DOCX | Contracts, proposals, tracked-change workflows | Medium |
| XLSX | Financial models, data sheets | Low (structural) |

## Sources

- [Claude Office Skills — PPTX, DOCX, XLSX, PDF](https://github.com/tfriedel/claude-office-skills)
- [Anthropic Official Skills Repository](https://github.com/anthropics/skills)
- [Claude Code Frontend Design Skill (source)](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md)
- [Best AI Pitch Deck Generators 2026 — Zapier](https://zapier.com/blog/best-ai-presentation-maker/)
- [Building Websites with Claude Code — Leon Furze](https://leonfurze.com/2026/02/14/building-websites-with-claude-code/)
- [Claude Code Plugins: Breaking the AI Slop Aesthetic — Paddo](https://paddo.dev/blog/claude-code-plugins-frontend-design/)
