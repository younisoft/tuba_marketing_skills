# Visual Advertising System — Tuba

> **Part of:** [Tuba Advertising Identity System](../ADVERTISING_IDENTITY_GUIDE.md)
> **Builds on:** [current-brand-analysis.md](../knowledge-base/current-brand-analysis.md)
> **Governs:** every static and motion ad asset — social, display, print, outdoor, presentation, email

This document extends the official logo guidelines into a complete visual system for advertising. Where the source guideline PDF is silent (typography, grid, photography, motion — see the gap table in current-brand-analysis.md §19), the specifications below are the canonical answer going forward.

---

## 1. Color System

### 1.1 Primary colors

| Name | HEX | RGB | CMYK (calculated) | Pantone (nearest) | Role |
|---|---|---|---|---|---|
| **Tuba Purple** | `#2A0C72` | 42, 12, 114 | 91, 100, 0, 4 | PMS 2685 C (nearest match — verify with printer draw-down before production run) | Dominant / authority. Backgrounds, logotype, headlines, primary text on light |
| **Tuba Coral** | `#F95A60` | 249, 90, 96 | 0, 78, 55, 0 | PMS 178 C (nearest match — verify with printer draw-down) | Accent / warmth. Mark, CTAs, highlights, emotional emphasis |

> **WHY two colors only at the core:** a two-color system is what makes Tuba recognizable at a glance across hundreds of future assets. The moment a third "brand" color enters rotation, recognition dilutes. Every color below this line is a *utility* extension of these two, never a replacement.

### 1.2 Secondary / extended palette

Built as tints and a single neutral scale — never as new hues — to preserve color equity:

| Token | HEX | Use |
|---|---|---|
| Purple 100 (darkest, for depth/shadow states) | `#1A0750` | Dark-mode surfaces, deep gradients, video backgrounds |
| Purple 60 | `#5B3B9B` | Secondary text on dark, disabled states on dark |
| Purple 20 | `#DCD3F0` | Subtle tinted backgrounds, card fills on light layouts |
| Purple 8 | `#F0ECFB` | Section backgrounds, table stripes, light UI chrome |
| Coral 60 | `#FB8B90` | Hover states, secondary accents |
| Coral 20 | `#FFDCDE` | Tag/badge backgrounds, soft highlight fields |
| Coral 8 | `#FFF0F0` | Lightest accent wash |
| Ink (near-black, purple-tinted) | `#1A0E35` | Body copy on light backgrounds — never pure `#000000` |
| Muted (text-secondary) | `#6B5F8A` | Captions, metadata, secondary copy |
| Border | `#E5DFF5` | Dividers, card outlines, input borders |
| Surface | `#FFFFFF` | Cards, forms, primary light background |
| Canvas | `#F7F5FC` | Page background — a whisper of purple, never stark white |

**Common mistake:** designers reaching for pure black (`#000000`) or pure grey for body text "because it's safer." On Tuba, this reads as generic and off-brand. Always route neutral text through the purple-tinted **Ink** and **Muted** tokens above.

### 1.3 Functional / semantic colors (product & campaign UI only — used sparingly in brand advertising)

| Purpose | HEX | Note |
|---|---|---|
| Success / verified | `#1F9D6B` | FAL/REGA verification badges, confirmation states |
| Warning | `#E8A73C` | Time-sensitive campaign flags (e.g., "limited units") |
| Error | `#D33F46` | Form errors only — never used decoratively (too close to Coral, would confuse the accent color's meaning) |

### 1.4 Gradient usage

**Approved gradient:** Purple → Coral, diagonal (135°), as shown in the official guideline's "Gradient" logo-background example.

```
background: linear-gradient(135deg, #2A0C72 0%, #F95A60 100%);
```

- **WHEN to use:** hero backgrounds for campaign key visuals, video intros/outros, story/reel backgrounds, premium/luxury project campaigns where a richer background is warranted
- **WHEN NOT to use:** small UI elements, body backgrounds behind long text (contrast becomes unreliable at the coral end), anywhere the two-tone color logo will sit (rule from guideline §1.5 — gradient backgrounds require white/black logo only)
- **Best practice:** keep the gradient's midpoint (50%) out of primary text placement — that's the zone with the least reliable contrast against either white or dark text
- **Common mistake:** using the gradient at full saturation behind dense body copy. Reserve full-strength gradient for backgrounds with sparse, large-type headlines only; use a 20-30% opacity gradient overlay on photography instead when text density is higher

### 1.5 Background usage rules

| Background type | Logo/text treatment |
|---|---|
| White / Canvas / light tint | Purple headlines, Ink body text, Coral accents/CTAs |
| Solid Purple | White headlines/body, Coral accents/CTAs (coral pops hardest here — reserve for the single most important element per layout) |
| Solid Coral | White or Purple-100 text only (never purple mid-tones — insufficient contrast) |
| Purple→Coral gradient | White text only, white or black full logo lockup |
| Photography | Always apply a scrim/overlay (see §7.5) before placing any text or logo |

### 1.6 Contrast rules

- Body text minimum contrast ratio: **4.5:1** (WCAG AA) against its background — always verify Coral-on-white and white-on-Coral combinations, which sit closest to the failure threshold
- Never place Purple text on Coral background or Coral text on Purple background for body copy — the vibration between two saturated, similarly-weighted hues is fatiguing to read. Large, bold display headlines (48px+) are the only exception, used sparingly
- Coral is a **spot color**, not a field color, for text-heavy layouts — use it for short headlines, tags, numerals, and CTAs, not paragraphs

### 1.7 Color hierarchy (how much of each color, per layout)

A practical ratio for any given ad, page, or template:

```
60% Canvas/Surface (neutral ground)
30% Purple (authority — headline, dominant shape, or primary background block)
10% Coral (the one thing you want the eye to land on last — CTA, price, key stat, the mark)
```

**WHY this ratio:** Coral's job is to be the exception, not the wallpaper. When coral exceeds ~15% of a layout's visual weight, it stops functioning as an accent and starts competing with itself — nothing reads as "the important part" anymore. This is the single most common way brand-new designers (and AI image generators) get Tuba layouts wrong: they treat the two brand colors as equal partners instead of a 3:1 authority-to-warmth relationship.

---

## 2. Typography

The official guideline PDF specifies no typeface — this is a foundational gap this system closes.

### 2.1 Selection logic

The logo's letterforms are built entirely from circles with soft, consistent terminals. The typeface pairing must echo that geometry without literally copying the logotype (logotype stays exclusive to the logo file — see current-brand-analysis.md §10).

### 2.2 Recommended pairing

| Role | Typeface | Why |
|---|---|---|
| **Arabic — display/headline** | **Almarai** (Bold/ExtraBold) | Originated for a Saudi digital-brand context; geometric, rounded, warm — the closest open-source match to the logo's circular letterform discipline. Excellent legibility at large display sizes |
| **Arabic — body/UI** | **Almarai** (Regular/Light) or **IBM Plex Sans Arabic** (Regular) for dense body copy needing slightly tighter economy | Both are free, well-hinted, widely supported across Google Fonts/Adobe Fonts |
| **Latin — display/headline** | **Plus Jakarta Sans** (Bold/ExtraBold) | Geometric sans with rounded apertures and soft joints — pairs naturally with Almarai's warmth without competing with it |
| **Latin — body/UI** | **Plus Jakarta Sans** (Regular/Medium) | One type family for both roles keeps the system simple and consistent |

**Fallback stack** (system fonts, for environments without web font loading): `Almarai, "Segoe UI", Tahoma, sans-serif` (Arabic) / `"Plus Jakarta Sans", "Poppins", -apple-system, sans-serif` (Latin)

### 2.3 Type hierarchy

| Level | Use | Size (web, desktop / mobile) | Weight |
|---|---|---|---|
| Display | Campaign hero headlines only | 56–72px / 36–44px | ExtraBold |
| H1 | Page/section headline | 40–48px / 28–32px | Bold |
| H2 | Sub-section headline | 28–32px / 22–24px | Bold |
| H3 | Card/component headline | 20–22px / 18–20px | SemiBold |
| Body Large | Lead paragraph, key descriptions | 18px / 16px | Regular |
| Body | Standard copy | 16px / 15px | Regular |
| Caption | Metadata, labels, legal/FAL text | 13px / 12px | Regular/Medium |
| Overline/Eyebrow | Small label above headlines | 12px, all-caps or tracked | Bold, letter-spacing +0.06em |

**Rule:** never use more than 3 type sizes in a single ad creative (one headline, one supporting line, one CTA/label). Real estate ads are already visually busy (photography + price + specs + CTA) — typographic restraint is what keeps them feeling premium rather than cluttered.

### 2.4 Bilingual typesetting rules

- Arabic and English never share a text block set to the same point size by default — Arabic scripts typically need to run **1–2px larger** than Latin at matching visual weight for equivalent legibility
- Line height: 1.5× for Arabic body copy (vs. 1.4× Latin) to accommodate diacritics and descenders
- Never justify Arabic body text in narrow columns (creates uneven letter-stretching, called "kashida abuse") — left/right-align per reading direction instead
- Numerals: use **Western Arabic numerals (0–9)**, not Eastern Arabic-Indic numerals (٠١٢), for prices and specs — this matches current Saudi digital-platform convention and keeps prices scannable across bilingual layouts

---

## 3. Spacing & Grid System

### 3.1 Spacing scale (8px base unit)

`4 · 8 · 16 · 24 · 32 · 48 · 64 · 96px`

Use only values from this scale for margins, padding, and gaps — arbitrary spacing (e.g., "13px") is the fastest way for a layout to feel unintentional.

### 3.2 Grid

- **Digital layouts:** 12-column grid, 24px gutter (desktop), 16px gutter (mobile), 5% outer margin minimum
- **Social square/portrait formats:** 4-column safe grid with generous outer margin (min. 8% of canvas width) to survive platform UI cropping (profile pictures, captions, swipe indicators)
- **Print/outdoor:** logo clear-space = height of the mark's circle element, per standard monogram clear-space convention (no explicit value given in source PDF — apply this as the working default until a print-specific guideline is issued)

### 3.3 Border radius

Matches the logo's rounded-corner language — **never use sharp 0px corners on brand-owned containers.**

| Component | Radius |
|---|---|
| Buttons | 12px (or fully pill/999px for primary CTAs — see §5.2) |
| Cards | 16–20px |
| Images within cards | 12px (slightly less than the card, so the photo reads as "inset") |
| Badges/tags | 999px (full pill) |
| Modals/large surfaces | 24px |

---

## 4. Shadow System

Soft, warm-toned shadows only — never neutral grey/black shadows, which fight the brand's warmth.

| Level | Value | Use |
|---|---|---|
| Shadow SM | `0 2px 16px rgba(42,12,114,.09)` | Cards at rest |
| Shadow MD | `0 8px 36px rgba(42,12,114,.15)` | Hover/elevated cards, dropdowns |
| Shadow LG | `0 20px 60px rgba(42,12,114,.20)` | Modals, hero image cards, featured listing cards |

**Why purple-tinted shadows:** a shadow tinted with the brand's own dominant color reads as intentional design rather than a generic UI-framework default — it's a small, high-leverage consistency signal.

---

## 5. Components

### 5.1 Cards
- White/Surface background, 16–20px radius, Shadow SM at rest → Shadow MD on hover
- Image at top (12px inset radius), 16–24px internal padding for content
- Property cards specifically: price in Coral or Purple bold numerals (never body-weight grey), FAL/license micro-badge bottom corner (see design-components.md)

### 5.2 Buttons
| Type | Style |
|---|---|
| Primary CTA | Coral fill, white text, pill radius (999px), bold label, generous horizontal padding (24–32px) |
| Secondary CTA | Purple outline (1.5–2px), Purple text, transparent fill, same pill radius |
| Tertiary/text link | Purple text, no container, underline on hover only |
| On dark/photo backgrounds | White fill, Purple text (never coral-on-photo — coral can clash with warm-toned property photography; test per-image) |

**Common mistake:** using a purple-filled button as primary CTA. Purple is authority/structure; Coral is the "act now" signal. A purple CTA under-performs precisely because it blends into the rest of the brand's dominant color instead of standing out.

### 5.3 Badges & Labels
- FAL/REGA "Licensed" badge: pill shape, Purple 8 background, Purple text, small verified-checkmark icon (success green accent only for the checkmark, not the field)
- "New," "Featured," "Off-Plan" tags: Coral 20 background, Coral or Purple text depending on background context

---

## 6. Image Treatment

### 6.1 Photography style

| Dimension | Direction |
|---|---|
| **Subject** | Real Saudi homes, neighborhoods, and people — never generic Western stock-photo interiors or anonymous international skylines |
| **Lighting** | Warm, golden-hour bias where possible (echoes the sun iconography and the "warmth" brand value) — avoid flat, cold, overcast lighting |
| **People** | Real family and individual moments *in* spaces, not posed real-estate-agent-handshake clichés. Show the life that happens in a home, not the transaction of acquiring it |
| **Composition** | Leave negative space for text overlay (rule of thirds, subject off-center) — never center-crop a hero image that also needs headline space |
| **Color grading** | Slightly warm white balance, moderate contrast, avoid oversaturated HDR "real estate photographer" look that reads as untrustworthy/over-edited |

**WHY this matters more for Tuba than most categories:** the brand promise is "relief and guidance," not "aspiration and spectacle." Overly glossy, staged luxury photography contradicts the warm, human positioning established in project-analysis.md — save that register exclusively for explicitly luxury-segment campaigns (see campaign-playbook.md).

### 6.2 Property photography specifically
- Always straighten verticals (no keystone distortion) — signals professionalism and trustworthiness
- Consistent aspect ratio per placement (see templates §9) so listing grids feel uniform
- Exterior shots: include sky — even a sliver — to connect to the sun/desert icon language
- Interior shots: at least one shot per set should include a human presence or human trace (a cup of coffee, an open book) to keep the "home," not "product," framing

### 6.3 Illustration rules

Use illustration (not photography) when:
- Explaining a process (how buying/renting/listing works)
- Showing data/market trends
- Representing abstract concepts (trust, guidance, security) that photography struggles to convey without cliché

Illustration style: **flat, rounded, two-color-plus-neutral** (Purple + Coral + Canvas/white only) — matching the icon set's geometric discipline. Never mix illustration styles (e.g., no 3D-rendered isometric alongside flat icons) within one campaign.

---

## 7. Graphic Elements

### 7.1 Shapes
- The circle is the brand's core geometric signature (from the mark) — use circular crops, circular badges, and circular decorative elements as a recurring motif
- The hut/roof pentagon-with-rounded-top shape from the mark can be extracted as a standalone decorative device (sparingly — it should still read as "belonging to the logo," not become a generic house icon)

### 7.2 Patterns
- Approved: a repeating outline pattern of the mark itself at low opacity (6–10%) on Purple backgrounds — this exact device is already used in the official guideline PDF's own cover page and is sanctioned brand practice
- Approved: loose, scattered desert-icon patterns (sun/wave/palm outline icons at varied scale and low opacity) for lifestyle-oriented campaign backgrounds
- Avoid: generic geometric patterns (dots, grids, chevrons) with no connection to brand assets

### 7.3 Frames & decorative elements
- Thin (2–3px) rounded-rect frames in Purple or Coral around featured/premium content (e.g., a featured listing photo) — never a hard black frame
- The horizontal rule device from the guideline PDF header (a colored underline beneath section labels) is a reusable "section marker" — apply it above campaign eyebrows/labels across templates

### 7.4 Brand textures
No official texture library exists yet. Where texture is needed (e.g., premium project campaigns), use **subtle grain/noise overlays at ≤4% opacity** on gradient backgrounds only — never on photography, and never as a primary surface treatment. This keeps a "considered, non-flat-corporate" feel without inventing an unapproved new visual language.

### 7.5 Overlay rules
- Text-over-photography always requires a scrim: either (a) a linear gradient from transparent to 60-70% Purple-100 at the text zone, or (b) a flat 40-50% Purple-100 wash across the full image when text coverage is heavy
- Never place white text directly on unmodified photography — verify contrast every time, no exceptions

---

## 8. Motion & Animation Principles

No motion system exists in source material — this is a new specification.

| Principle | Rule |
|---|---|
| **Easing** | Soft ease-in-out only (e.g., cubic-bezier(0.4, 0, 0.2, 1)) — never linear or bouncy/elastic easing, which contradicts the calm, trustworthy tone |
| **Logo motion** | The mark may gently scale/fade in; it should never spin, bounce, or distort — same "never distort" rule as the static logo guideline extends to motion |
| **Transitions** | Cross-dissolve or soft slide (200–400ms) between states/scenes — avoid hard cuts in brand-owned motion content except for fast-paced short-form social edits where cuts are the platform norm (see social-media-playbook.md) |
| **Color motion** | The Purple→Coral gradient may animate slowly (8-12s loop) as an ambient background; never flash or strobe between the two colors |
| **Icon animation** | Simple line-draw-on reveals for outline icons (stroke animates from 0% to 100%) — matches the icon set's construction logic |

---

## 9. Advertising Layout Templates

Format specifications for designers/AI tools generating Tuba creative. Each entry: canvas, safe zone, and layout logic.

### 9.1 Social — feed post (1:1 and 4:5)
- 1080×1080 (feed) / 1080×1350 (portrait feed)
- Logo mark only (not full lockup) in a corner, 5% margin
- One headline (max 8 words per language), one supporting line, one CTA element
- Photography or gradient background per §1.4–1.6

### 9.2 Carousel (multi-slide)
- Slide 1: Hook — headline only, minimal copy, strong visual (see copywriting.md Hook formulas)
- Slides 2–4: One idea/benefit/step per slide, consistent header treatment (same position/size every slide so the swipe feels like one designed object, not four separate ads)
- Final slide: CTA + logo lockup (full, not mark-only) + FAL badge if applicable

### 9.3 Story / Reel (9:16)
- 1080×1920, **critical safe zone:** top 250px and bottom 350px reserved for platform UI (profile bar, caption, reply field) — no essential text or logo in those zones
- Vertical composition, single focal point, large tap-friendly CTA sticker zone in bottom third

### 9.4 Video thumbnail (YouTube/16:9 and Shorts/9:16)
- Bold 3–5 word text overlay in Display type, high-contrast scrim
- Face or property hero shot, rule-of-thirds framing
- Small mark watermark, bottom corner, consistent across all thumbnails for channel recognizability

### 9.5 Display / banner ads
- Standard IAB sizes (300×250, 728×90, 160×600, 320×50)
- At smallest sizes (320×50), reduce to: mark + 3-4 word headline + CTA button only — never attempt full messaging hierarchy below 300×250

### 9.6 Performance marketing creative (paid social/search feed ads)
- Lead with the specific offer/property/benefit, not brand scene-setting (performance contexts reward clarity-first, unlike brand-awareness contexts)
- Price, location, and key spec visible without interaction
- CTA button always present and high-contrast (Coral fill)

### 9.7 Outdoor (billboard/transit)
- Extreme legibility bias: one headline (3-5 words), logo, single strong image or color-field background
- Test legibility at "3 seconds from a moving car" — if the message needs more than 3 seconds to parse, cut copy further
- Full-lockup logo (not mark-only) for standalone brand-awareness boards; mark-only acceptable when paired with a recognizable campaign, not for first-touch brand exposure

### 9.8 Presentation / deck templates
- Cover: Purple or gradient background, full logo lockup, white type
- Content slides: Canvas/white background, Purple headlines, Ink body, Coral used only for callout stats/numbers (mirrors the color hierarchy in §1.7)
- Section dividers: Purple background, large section number + title (mirrors the guideline PDF's own section-divider pattern — reuse this device, it's already established brand practice)

### 9.9 Email templates
- Header: logo lockup (horizontal), Canvas background
- Body: white content cards on Canvas background, 16-20px radius per §3.3
- One primary CTA button per email (Coral pill), never multiple competing CTAs
- Footer: FAL/license info, social icons (mark-colored, not platform-brand-colored, where platform guidelines allow), unsubscribe/legal in Muted grey text

---

## Cross-references
- Color and shape rules trace directly to [current-brand-analysis.md](../knowledge-base/current-brand-analysis.md)
- Icon-specific rules are detailed fully in [iconography.md](iconography.md)
- Component specs (cards, badges, testimonials, pricing blocks) are cataloged in [design-components.md](design-components.md)
- Channel-specific format rules build on §9 in [social-media-playbook.md](social-media-playbook.md)
