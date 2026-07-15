# Tuba Carousel — "بيتك الأول... طوبة معاك"

Imported from Claude Design project `تصميم كاروسيل Tuba العقارية` ([701db47f-837b-48ed-8452-722c5e897f2b](https://claude.ai/design/p/701db47f-837b-48ed-8452-722c5e897f2b?file=Tuba+Carousel.dc.html)) and implemented as standalone, production-ready HTML — no design-tool runtime dependency.

## Contents
- `index.html` — full 5-slide board (preview scale, matches the original design canvas layout) for reviewing the set as one designed object
- `slide-1.html` … `slide-5.html` — each slide at true Instagram Carousel size (1080×1080, per [`../../production/format-specifications.md`](../../production/format-specifications.md) row 1), for individual screenshot/export
- `assets/` — the SVGs the design references (Arabic logo lockups, Tuba mark, direction/house/sun icons)

## Format check (against format-specifications.md row 1 + design-components.md)
- Slide 1: headline-only hook, no body copy ✓
- Slides 2–4: one idea each, identical header/logo/pagination position across all three ✓
- Slide 5: single CTA + full logo lockup ✓
- Coral used only for the CTA button, the active pagination dot, and the coral element of the logo mark — within the ≤2-use-per-composition rule (design-components.md §10.3)
- No FAL/Verified badge — correct per design-components.md §10.2: this is general app-awareness content, not a specific property/agent listing

## Pre-publish dependency
Slide 5's CTA (`حمّل تطبيق طوبة`) links to `#` as a placeholder — swap in the real App Store / Google Play (or smart) link before this goes live.

## How to export slide images
Open each `slide-N.html` in a browser at its native 1080×1080 size and screenshot, or run headless:
```
# example with Chrome headless (adjust binary path per OS)
chrome --headless --screenshot=slide-1.png --window-size=1080,1080 slide-1.html
```
