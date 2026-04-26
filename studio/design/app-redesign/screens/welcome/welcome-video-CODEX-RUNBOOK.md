---
project: Alche · Welcome Video Loop
version: codex-runbook-v1
date: 2026-04-26
status: ready-to-execute
companion: welcome-video-brief-v2.md, welcome-video-prompts-v2.md
audience: Codex (OpenAI coding agent)
---

# Codex Runbook — Welcome Video Production

You are Codex, executing Alche's Welcome screen video production. Everything is pre-decided. Your job is to **orchestrate the APIs, generate the assets, run QA, assemble the loop, and ship the file** — not to make creative choices. The brief is locked. The prompts are locked. Don't re-litigate.

---

## 1. Mandatory reads (in order, before any action)

```
1. studio/design/app-redesign/screens/welcome/welcome-video-brief-v2.md
2. studio/design/app-redesign/screens/welcome/welcome-video-prompts-v2.md
3. studio/design/app-redesign/screens/welcome/current-audit.md
4. studio/design/app-redesign/screens/welcome/swift-plan.md
5. studio/design/app-redesign/screens/welcome/dialog-mockup.html
6. studio/design/mascot-lab/A-lix/prompt.md   (only if shot 02 needs a Lix re-render)
```

Confirm in chat that you have read all six before proceeding. Quote one specific line from each as proof.

---

## 2. Tooling — what you call, in what order

| Stage | Tool | Why this exact tool |
|-------|------|---------------------|
| **Stills (10)** | **Nano Banana Pro** via Google Gemini API (`gemini-2.5-flash-image-preview` or current Nano Banana Pro endpoint) | Brief specifies Nano Banana Pro. Do NOT substitute gpt-image-1 — its texture is wrong for Alche's editorial Portra-400 register, and the brief's photographer references (Chung / Kawauchi / Scheltens & Abbenes) are tuned to Nano Banana's render. |
| **Motion (3 hero shots: 04, 05, 07)** | **Veo 3.1 Fast** (silent variant) via Gemini API | Brief specifies Veo 3.1 Fast. 4-second clips, image-to-video with the still as first frame. |
| **Ken Burns + crossfade (7 stills: 01, 02, 03, 06, 08, 09, 10)** | **DaVinci Resolve Fusion** via the bundled CLI/scripting API (`Resolve.GetMediaPool`, etc.) — NOT Resolve Edit page (Edit page easing is broken per brief §6 / R5 finding) | Deterministic, free, used for all non-hero shots. |
| **Color unification + grain + final encode** | **DaVinci Resolve** Color page + Deliver page | One LUT across all 10 shots, 4-6% 35mm grain (Dehancer or FilmConvert if installed; built-in Resolve grain otherwise). |
| **Reduce Motion fallback still** | Frame 05 (the ear) saved as JPEG | Brief §6 — single hero still, NOT Ken Burns. |

**Required env vars** (check before starting; halt and ask Timu if missing):
- `GOOGLE_API_KEY` (or `GEMINI_API_KEY`) — for Nano Banana Pro + Veo 3.1 Fast
- Path to DaVinci Resolve scripting library (`/Library/Application Support/Blackmagic Design/DaVinci Resolve/Developer/Scripting/Modules` on macOS)

---

## 3. Output filesystem

Create this exact tree before generating anything:

```
studio/video/welcome-loop/
├── stills/
│   ├── shot-01-step.png
│   ├── shot-02-window-dawn-lix.png
│   ├── shot-03-unwritten-letter.png
│   ├── shot-04-ink-water.png        ← hero
│   ├── shot-05-ear.png              ← hero + Reduce Motion fallback source
│   ├── shot-06-pulse-wrist.png
│   ├── shot-07-breath-glass.png     ← hero
│   ├── shot-08-read-returns.png
│   ├── shot-09-hand-chest.png
│   └── shot-10-window-dusk.png
├── stills-rerolls/                  ← every reject lives here, never delete
│   └── shot-NN-attempt-MM.png
├── motion/
│   ├── shot-04-ink-water.mp4
│   ├── shot-05-ear.mp4
│   └── shot-07-breath-glass.mp4
├── motion-rerolls/
│   └── shot-NN-attempt-MM.mp4
├── resolve/
│   └── welcome-loop.drp             ← Resolve project file
├── master/
│   └── welcome-loop-master.mov      ← ProRes 422 HQ master, pre-compress
└── ship/
    ├── welcome-loop.mp4             ← HEVC 1080×1920 30fps ~4MB, the deliverable
    └── welcome-still.jpg            ← P3 SDR, for Reduce Motion fallback
```

**Final ship destinations** (copied, not moved — keep originals in `studio/`):
- `app/Alche/Resources/welcome-loop.mp4`
- `app/Alche/Resources/welcome-still.jpg`

---

## 4. Workflow — execute in this order, halt at every gate

### Gate A — Setup
1. Verify env vars present.
2. Create the filesystem tree above.
3. Quote one line from each of the 6 mandatory reads. **Halt. Wait for Timu's "go".**

### Gate B — Shot 01 proof of life
1. Read shot 01 prompt verbatim from `welcome-video-prompts-v2.md`.
2. Append the four locks from §"Character / location lock token" at the prompt's end (palette, light, style, negative).
3. Generate 1 still via Nano Banana Pro at 1080×1920.
4. Save to `stills/shot-01-step.png`.
5. Run the §6 QA checklist on it.
6. **Halt. Show Timu the image. Wait for approval.**

If Timu says "regen": save the reject to `stills-rerolls/`, regenerate up to 3 more times, halt again. If still rejected after 4 attempts, halt and ask Timu what to change in the prompt — don't keep burning credits.

### Gate C — Stills 02–10
After shot 01 approval, generate shots 02–10 the same way. **Up to 4 attempts per shot, save every reject to `stills-rerolls/`.** Run §6 QA on each. After all 10 are saved, halt and show Timu the contact sheet (10 thumbnails in a single image). Wait for global approval before motion.

For shot 02 specifically: if Lix's render drifts (extra eyes, wrong palette, glossy plastic finish), re-read `mascot-lab/A-lix/prompt.md` and tighten the Lix paragraph in the prompt. Lix's 13-item negative list is non-negotiable.

### Gate D — Motion (3 hero shots)
1. For each of shots 04, 05, 07: call Veo 3.1 Fast with the corresponding still as `image=` first frame and Prompt B from the prompts doc as the motion prompt.
2. Duration: 4 seconds each. Motion strength per shot (3, 4, or 4 — see prompts doc).
3. Up to 6 attempts per hero. Save rejects to `motion-rerolls/`.
4. Watch for: melting objects, drifting subject identity, AI shimmer on the still elements, audio bleed (output must be silent — strip audio if Veo emits any).
5. After all 3 are accepted, halt and show Timu the three clips. Wait for approval before assembly.

### Gate E — Resolve assembly
Use Resolve scripting (Python via `DaVinciResolveScript`):
1. Create project `welcome-loop`, timeline 1080×1920 30fps.
2. Import all 10 stills + 3 motion clips.
3. Lay out per the assembly map in `welcome-video-prompts-v2.md` §"Loop assembly map".
4. Apply Ken Burns to the 7 still shots — exact percentages and anchors per each shot's "Prompt B (Resolve Ken Burns)" instruction. Use **Fusion**, not the Edit page transform.
5. 12-frame crossfades between every shot.
6. Match-cut from end of shot 10 to start of shot 01.
7. Color page: one LUT applied across all clips (Kodak Portra 400 emulation; if no LUT installed, a manual grade pass — lift +0.05, gamma -0.03, gain neutral, sat -0.10 as starting point). The 3 Veo clips will need stronger correction to match the 7 stills — they tend to drift cool and crushed.
8. Add 35mm grain at 4-6% strength on a top track.
9. Render master to `master/welcome-loop-master.mov` as ProRes 422 HQ (lossless intermediate).

Halt. Show Timu the master. Wait for approval.

### Gate F — Final encode
Encode `master/welcome-loop-master.mov` to `ship/welcome-loop.mp4` with these exact ffmpeg args:

```bash
ffmpeg -i master/welcome-loop-master.mov \
  -c:v libx265 \
  -preset slow \
  -crf 28 \
  -tag:v hvc1 \
  -pix_fmt yuv420p10le \
  -profile:v main10 \
  -color_primaries display-p3 \
  -color_trc bt709 \
  -colorspace bt709 \
  -movflags +faststart \
  -an \
  -vf "scale=1080:1920:flags=lanczos,fps=30" \
  ship/welcome-loop.mp4
```

Verify output:
- File size between 3–5 MB (target ~4). If over, raise CRF to 30 and re-encode. If under, lower to 26.
- `ffprobe` confirms: HEVC, 1080×1920, 30fps, no audio stream, P3 tagged, ~10–13s.
- Open in QuickTime, scrub the loop seam (last frame → first frame). Should be invisible.

Export the Reduce Motion fallback:
```bash
ffmpeg -i stills/shot-05-ear.png \
  -vf "scale=1080:1920:flags=lanczos" \
  -q:v 2 \
  -color_primaries display-p3 \
  ship/welcome-still.jpg
```

Halt. Show Timu both files. Wait for approval.

### Gate G — Ship to app
1. Copy `ship/welcome-loop.mp4` → `app/Alche/Resources/welcome-loop.mp4`
2. Copy `ship/welcome-still.jpg` → `app/Alche/Resources/welcome-still.jpg`
3. Run `git status` to confirm only those two files (plus the studio/video/welcome-loop/ tree if not gitignored) are staged.
4. Halt. Do NOT commit. Tell Timu the files are in place; commit is Timu's call.

---

## 5. Prompt-call reference — exact API patterns

### Nano Banana Pro (Gemini API)
```python
import google.generativeai as genai
import os

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
model = genai.GenerativeModel("gemini-2.5-flash-image-preview")  # confirm latest Nano Banana Pro model id at runtime

response = model.generate_content(
    [PROMPT_TEXT_FROM_PROMPTS_DOC + "\n\n" + LOCK_TOKEN_BLOCK],
    generation_config={
        "response_mime_type": "image/png",
        "image_config": {"aspect_ratio": "9:16"},
    },
)
# Save response image bytes to stills/shot-NN-slug.png
```

If the SDK signature has shifted by the time you run this, `WebFetch` https://ai.google.dev/gemini-api/docs/image-generation and adapt.

### Veo 3.1 Fast (Gemini API, image-to-video)
```python
operation = client.models.generate_videos(
    model="veo-3.1-fast-generate-preview",  # confirm exact id at runtime
    prompt=MOTION_PROMPT_FROM_PROMPTS_DOC,
    image=Image.from_file(f"stills/shot-{n:02d}-{slug}.png"),
    config={
        "aspect_ratio": "9:16",
        "duration_seconds": 4,
        "generate_audio": False,
    },
)
# Poll operation.done(), then download to motion/shot-NN-slug.mp4
```

If Veo's image-to-video is unavailable, halt and tell Timu — do NOT silently fall back to text-to-video. Text-to-video is forbidden for hero shots per the brief and `~/.claude/image-to-video-guide.md`.

### DaVinci Resolve scripting
```python
import sys
sys.path.append("/Library/Application Support/Blackmagic Design/DaVinci Resolve/Developer/Scripting/Modules")
import DaVinciResolveScript as dvr

resolve = dvr.scriptapp("Resolve")
project_manager = resolve.GetProjectManager()
project = project_manager.CreateProject("welcome-loop")
# ... see https://documents.blackmagicdesign.com/UserManuals/DaVinci-Resolve-19-Reference-Manual.pdf for the Fusion + Timeline scripting API
```

---

## 6. Per-still QA checklist (run before showing any image to Timu)

For each generated still, verify in this order. Any single failure → reroll.

- [ ] **Aspect** — exactly 1080×1920. (`identify` or PIL — check pixel dimensions.)
- [ ] **Palette** — sample 10 random pixels. They must fall on `#fcfcfd ± 8`, `#0d121b ± 12`, `#1152d4 ± 12`, or warm-skin neutrals. Any amber, moss, teal, honey-gold, lavender (except Lix in shot 02) → reject.
- [ ] **No text** — OCR the image (Tesseract or vision model). Zero detected characters. Any text → reject.
- [ ] **No faces above the nose line** — vision-model check. Cropping must end at nose-tip max. Visible eyes → reject (except Lix's two-dot eyes in shot 02).
- [ ] **No interlaced or gesturing hands** — vision-model check.
- [ ] **40% top negative space** — top 768px of frame must be visually clear (mean luminance variance under threshold). Subject pushed below.
- [ ] **No off-brand list items** — DNA, molecules, ECG, crystals, yoga, matcha, fitness body, lab equipment, glass UI, accent lines, equal-weight grids, chrome, plastic.
- [ ] **Reference-photographer register** — vision-model sanity check: does this read as Justin Chung / Rinko Kawauchi / Scheltens & Abbenes per the shot's anchor?
- [ ] **Shot 02 specifically**: Lix is exactly one droplet, ~120px tall, lower-left third, on dry oak (not in water), iridescent cream/pink/pistachio/lavender, two black dot eyes only, no limbs, no thick outline, no glossy plastic, no Duolingo register. If any fail → reroll Lix paragraph.
- [ ] **Shot 02 vs Shot 10**: window framing identical (same casement, same curtain position, same camera angle). The match-cut depends on this.

If a single shot fails QA 4 times in a row, halt and ask Timu what to change in the prompt. Do not keep generating.

---

## 7. Approval gates — SUMMARY

You **must halt and wait for Timu** at each of these points. Do not proceed without explicit approval ("go", "ship it", "approved", or equivalent):

1. After mandatory reads — proof of comprehension.
2. After shot 01 still — proof of pipeline.
3. After all 10 stills — contact sheet review.
4. After all 3 hero motion clips — animation review.
5. After Resolve master render — full-loop review.
6. After final HEVC encode — file-size + seam review.
7. Before any git commit — Timu commits, not you.

---

## 8. Forbidden — non-negotiable

- **No text-to-video for hero shots.** Image-to-video only. (Text-to-video is permitted ONLY for abstract ambient loops, which this project does not have.)
- **No substituting tools.** Nano Banana Pro for stills, Veo 3.1 Fast for motion. Not gpt-image-1, not Sora, not Runway. The brief is locked.
- **No silent fallbacks.** If a tool is unavailable, halt and tell Timu. Don't pick a substitute alone.
- **No deleting rerolls.** Every reject lives in `stills-rerolls/` or `motion-rerolls/` for diff and retrospective.
- **No Edit-page Ken Burns in Resolve.** Fusion only. (Edit-page easing is broken per the R5 finding cited in the brief.)
- **No commits.** Timu commits.
- **No Strategy 1 design re-litigation.** The voice family is locked. The brief is locked. Don't propose alternatives — execute.
- **No starting Sprint 6 / new features.** Project is in ship phase. This task is one of the 4 open lanes; stay in lane.
- **No prompt drift.** Use the prompts in `welcome-video-prompts-v2.md` verbatim, with the lock token block appended. If a shot consistently fails, halt and let Timu rewrite the prompt — don't quietly mutate it.

---

## 9. Budget guardrails

| Asset | Per-unit cost | Hard cap (rerolls included) | Total cap |
|-------|---------------|-----------------------------|-----------|
| Stills (Nano Banana Pro) | ~$0.04/image | 4 attempts × 10 shots = 40 | ~$1.60 |
| Motion (Veo 3.1 Fast, 4s, silent) | ~$0.10/second × 4s = $0.40/clip | 6 attempts × 3 hero shots = 18 | ~$7.20 |
| Resolve | $0 | unlimited | $0 |
| **Total ceiling** | — | — | **~$9 (well under brief's $18 estimate)** |

If you hit the per-asset cap (4 stills or 6 motions for any single shot), **halt** — do not exceed.

---

## 10. When done

1. Files in place at `app/Alche/Resources/welcome-loop.mp4` and `welcome-still.jpg` (uncommitted).
2. `studio/video/welcome-loop/` populated per §3.
3. Write a devlog at `devlogs/welcome-video-production.md` summarizing: shots generated, rerolls used, total API cost, any prompt deviations from the brief (with reason), final file size, ffprobe output.
4. Tell Timu the runbook is complete. Wait for the commit call.

---

*Brief authority: `welcome-video-brief-v2.md` (locked 2026-04-25). Prompt authority: `welcome-video-prompts-v2.md`. This runbook executes; it does not override.*
