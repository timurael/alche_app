# Anti-AI-Slop & Frontend Aesthetics

## The Problem: Distributional Convergence

Anthropic identified that LLMs naturally converge on the most common design choices in their training data. They called this "distributional convergence." The result: Inter fonts, purple gradients on white, predictable card grids, SaaS landing page layouts. Every AI-generated page looks the same.

## The Fix: Three Strategies

1. **Guide specific design dimensions** — typography, color, motion, backgrounds individually
2. **Reference design inspirations** — brand references or cultural aesthetics
3. **Call out common defaults** — explicitly ban the generic choices

## Anthropic's Official Frontend Design Skill

Anthropic built a ~400-token skill prompt that dramatically improves design output. It can be installed as a plugin or pasted into CLAUDE.md:

```
/plugin marketplace add anthropics/claude-code
/plugin install frontend-design@claude-code-plugins
```

Core prompt:
```xml
<frontend_aesthetics>
You tend to converge toward generic outputs. In frontend design, this creates
"AI slop." Avoid this: make creative, distinctive frontends.

Focus on:
- Typography: Avoid Inter, Roboto, Arial. Use distinctive fonts.
- Color: Dominant colors with sharp accents. CSS variables for consistency.
- Motion: CSS-only animations. One orchestrated page load > scattered micro-interactions.
- Backgrounds: Atmosphere and depth, not solid colors. Layer gradients.

Avoid: overused fonts, purple gradients on white, predictable layouts,
cookie-cutter patterns. Think outside the box.
</frontend_aesthetics>
```

## Prompting Techniques That Work

| Technique | Example |
|---|---|
| Name the aesthetic | "Neo-apothecary meets Apple glassmorphism" |
| Ban defaults explicitly | "Never use Inter, Roboto, or pure black" |
| Specify font pairing | "Cormorant Garamond for headlines, Outfit for body" |
| Give colors as CSS vars | Provide full `:root` block with the palette |
| Reference real brands | "Typography density of McKinsey, whitespace of Aesop" |
| Describe the feeling | "Quiet luxury, not startup energy" |
| Set physical constraints | "A4, 22mm margins, print-safe colors" |
| Provide visual reference | Screenshot or URL of a design you like |

## What Doesn't Work

- Vague prompts: "make it look nice" or "make it professional"
- Over-specifying every pixel (kills creative problem-solving)
- Not providing a design system (forces convergence to defaults)
- Mixing too many aesthetic directions

## Sources

- [Improving Frontend Design Through Skills — Anthropic](https://claude.com/blog/improving-frontend-design-through-skills)
- [Prompting for Frontend Aesthetics — Claude Cookbook](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics)
- [Claude Code Frontend Design Skill (source)](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md)
- [Claude Code Plugins: Breaking the AI Slop Aesthetic — Paddo](https://paddo.dev/blog/claude-code-plugins-frontend-design/)
- [Complete Claude Code Prompts to Avoid Generic Design — Medium](https://medium.com/@henriallevi/complete-collection-of-claude-code-prompts-to-avoid-generic-ux-ui-design-4565496cd894)
- [Building Websites with Claude Code — Leon Furze](https://leonfurze.com/2026/02/14/building-websites-with-claude-code/)
