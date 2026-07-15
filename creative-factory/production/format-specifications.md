# Format Specifications — Creative Factory

> **Purpose:** the single canonical spec sheet for the 13 production formats every campaign in `campaigns/` must deliver against. Written once here; every campaign file references this document and states only what's *campaign-specific* (headline, visual concept, CTA) — never repeats a canvas dimension or safe zone.
> **Source:** dimensions and safe zones are not invented here — they extend [`../../advertising-system/visual-system.md`](../../advertising-system/visual-system.md) §9's canonical templates. Two formats (WhatsApp Status, Digital Billboard) are not covered by visual-system.md §9 and are specified fresh below, marked accordingly.

---

| # | Format | Canvas | Safe zone / notes | Source |
|---|---|---|---|---|
| 1 | Instagram Carousel | 1080×1080 (or 1080×1350 portrait) | Slide 1 = headline-only hook, no body copy (content-hooks.md §4); slides 2–4 one idea each, identical header position every slide; final slide = CTA + full logo lockup + FAL badge | visual-system.md §9.2 |
| 2 | Instagram Post (feed) | 1080×1080 / 1080×1350 | Mark-only logo, 5% margin corner; one headline (≤8 words/language), one supporting line, one CTA element | visual-system.md §9.1 |
| 3 | Instagram Story | 1080×1920 | Critical safe zone: top 250px + bottom 350px reserved for platform UI — no essential text/logo there; single focal point, tap-friendly CTA sticker zone bottom third | visual-system.md §9.3 |
| 4 | Reel Cover | 1080×1920 | First-frame composition is the "thumbnail" (autoplay platform, no separate cover asset norm) — bold 3–5 word overlay, consistent mark watermark bottom corner across a channel's whole Reel set | visual-system.md §9.4 (adapted for Reels) |
| 5 | TikTok (native video, cover frame) | 1080×1920 | Sub-2-second hook baked into first frame; brand color/mark present but not dominant — more raw-cut than Instagram (social-media-playbook.md §3) | social-media-playbook.md §3 |
| 6 | Snapchat (Snap ad / Story) | 1080×1920 | Full-screen vertical, single message per Snap, swipe-up CTA; Hook stage is an image/moment *before* any text appears | social-media-playbook.md §4 |
| 7 | LinkedIn (feed post image) | 1200×627 (1.91:1) | Purple-dominant, minimal Coral; data-visualization or professional-photography register; longer-form caption permitted (150–300 words) alongside | visual-system.md §9.8 logic, applied to feed-image ratio |
| 8 | Display Banner | 300×250 (primary) / 728×90, 160×600, 320×50 (secondary) | At 320×50: mark + 3–4 word headline + CTA button only — never attempt full hierarchy below 300×250 | visual-system.md §9.5 |
| 9 | Email Header | 600px wide (responsive), header block ~150–200px tall | Horizontal logo lockup, Canvas background; one primary CTA button per full email, never multiple competing CTAs | visual-system.md §9.9 |
| 10 | WhatsApp Status | 1080×1920 | *(Not covered by visual-system.md §9 — specified fresh.)* Same safe-zone discipline as Story (top/bottom UI reserved); most conversational register in the system (copywriting.md §5.13) — a single message, single image, no dense layout | New spec, this document |
| 11 | Presentation Cover | 1920×1080 (16:9) | Purple or gradient background, full logo lockup, white type — mirrors the guideline PDF's own section-divider pattern | visual-system.md §9.8 |
| 12 | Print Poster | A1 (594×841mm), scalable | Extreme legibility bias at large format; one headline (3–5 words), logo, single strong image or color-field background; test at "3 seconds from a moving car" per OOH discipline even when displayed indoors | visual-system.md §9.7 (OOH logic, applied to print) |
| 13 | Digital Billboard | 1920×1080 or venue-specific (confirm per site) | *(Not covered by visual-system.md §9 — specified fresh.)* Same 3-second legibility test as static OOH, but motion is permitted: soft ease-in-out only, no strobing between Purple/Coral, 8–12s loop maximum per visual-system.md §8's gradient-motion rule | visual-system.md §9.7 + §8, combined |

---

## Standing rules that apply to every format, every campaign (not repeated per-campaign below)

- **One CTA per asset**, always (advertising-dna.md §10, quality-thresholds.md §3 hard-boundary override)
- **FAL/trust badge present on every commerce-adjacent asset** (design-components.md §2.1) — B2B/awareness/institutional assets are the exception per campaign brief, stated explicitly where that's the case
- **60/30/10 color ratio held** (visual-system.md §1.7) — no campaign gets a palette swap, only content and accent-usage changes (see [`../design-system/campaign-visual-treatments.md`](../design-system/campaign-visual-treatments.md))
- **Bilingual from brief stage**, not translated after (advertising-dna.md §9) — every campaign's headline/CTA set in `social-media/` ships both languages together

## Cross-references
- Full technical source: [`../../advertising-system/visual-system.md`](../../advertising-system/visual-system.md) §9
- Per-campaign application of these formats: `../campaigns/*.md` "Design Output Specs" section
- Campaign-specific visual accents layered on top of these formats: [`../design-system/campaign-visual-treatments.md`](../design-system/campaign-visual-treatments.md)
- Motion-specific treatment of formats 4, 5, 6, 13: [`../motion/motion-treatments.md`](../motion/motion-treatments.md)
