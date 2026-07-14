# Current Brand Asset Analysis — Tuba

> **Document type:** Asset audit
> **Sources:** `tuba logo/TUBA GUIDLINES .pdf` (8 pages, Section "1.0 Logo Guide"), all files in `tuba logo/`, all files in `tuba icons/SVG/`
> **Part of:** [Tuba Advertising Identity System](../ADVERTISING_IDENTITY_GUIDE.md)

This document catalogs exactly what exists in Tuba's current brand asset library, what it means, what must never change, and what the rest of this system is free to build on top of. Everything below is traced to a specific source file — nothing is inferred design opinion presented as fact.

---

## 1. Asset Inventory

### Logo files (`tuba logo/`)
| File | Content |
|---|---|
| `TUBA GUIDLINES .pdf` | Official 8-page "1.0 Logo Guide" — concept, construction, color, versions, backgrounds, incorrect uses, page positioning |
| `en_logo.svg` / `en_coloredLogo.svg` | Primary English lockup (mark + "tuba" wordmark) |
| `Ar logo.svg` / `ar-color-TubaLogo2.svg` | Primary Arabic lockup (mark + "طوبة" wordmark) |
| `Ar logo-white-red.svg` | Arabic lockup, negative/dark-background version (white logotype + coral mark) |
| `Asset-white-logo.png` | Raster white/negative logo asset |

### Icon files (`tuba icons/SVG/` + nested `SVG/SVG/`)
Two icon families, each consistently built in **filled** and **outline/stroke** variants:

**A. Literal real-estate icons**
`house.svg`, `modren house.svg` / `modren house-outline.svg`, `saudi house.svg`, `doplix home.svg`, `home1.svg`, `modren-home.svg`

**B. Place / desert / lifestyle icons**
`sun.svg` / `sun-outline.svg` / `sun-desirt.svg` / `sun-desert2.svg`, `sun-sea.svg`, `sea-sun.svg` / `sea-sun-outline.svg`, `moon.svg`, `mountains.svg` / `mountain.svg`, `waves1.svg` / `waves2.svg`, `smooth waves.svg` / `smooth waves-outline.svg`, `sharp waves.svg` / `sharp waves-outline.svg`, `tree1/2/3.svg`, `tree_fat.svg` / `fat tree.svg` / `fat tree-outline.svg`, `thin tree.svg` / `thin tree-outline.svg`, `flower.svg`, `flower tree.svg`, `rose.svg`, `garden.svg`, `pulm.svg` (palm), `bulm.svg`

**C. Wayfinding / UI**
`street direction.svg`, `st direction.svg`, `direction.svg`, `dots.svg` / `dotes.svg`, `play-place.svg`

**D. Brand mark variant**
`tuba icon.svg`, `tuba logo fill.svg` (standalone mark, no wordmark), `Asset 14.svg`

This inventory alone is a strategic finding: **Tuba's icon library was clearly built with a "home + land + sky" concept**, not just "home." Someone made a deliberate decision to pair house icons with sun, sea, mountains, waves, and palm trees. That pairing is the seed of Tuba's entire secondary visual language — see [iconography.md](../advertising-system/iconography.md).

---

## 2. Logo Concept (source of truth, verbatim structure from guideline PDF §1.1–1.2)

The mark is constructed from three fused elements:

```
Globe (circle)  +  Arabic "ه" / English "a" flipped upside-down  +  Hut (rounded roof)
        =  a monogram whose overall silhouette reads as a home
```

**Why this matters for every future execution:** the mark is not decorative — it is a *rebus*. Globe = reach/world, flipped-a/ه = the literal wordmark letter doing double duty as the roof's window/door, hut = shelter. Any resizing, motion, or reinterpretation of the mark (Phase 5–6) must preserve this rebus logic or the mark becomes empty geometry.

**Logo consistency principle (§1.2, verbatim intent):** every letterform in both the English and Arabic logotypes is built from a **circle**. The Arabic "ة" in طوبة is deliberately drawn to be the *same shape, flipped upside-down*, as the English "a." Both wordmarks share: rounded corners, and matching cut-outs on both sides of each letter.

**Implication:** this is a **unified bilingual type system**, not two logos that happen to say the same thing in two languages. Any custom lettering, wordmark extensions, or sub-brand names created in the future must obey the same circle-based construction discipline in *both* scripts, or brand consistency breaks at the most fundamental level.

---

## 3. Color System (source: §1.3, verbatim values)

| Name | HEX | RGB | Role |
|---|---|---|---|
| **Tuba Purple** | `#2A0C72` | 42, 12, 114 | Logotype / dominant, authority color |
| **Tuba Coral** *(labeled "Tuba Red" in source PDF)* | `#F95A60` | 249, 90, 96 | Mark / accent, warmth color |

> **Naming note:** the guideline PDF itself labels `#F95A60` as "Tuba Red," while the project brief for this system calls it "Coral." This document standardizes on **Coral** going forward (more accurate to the actual hue — a warm coral-pink, not true red) and flags the discrepancy so future guideline revisions can reconcile the naming. Do not treat this as two different colors — it is one color, one hex value, two names in circulation.

The PDF specifies **print (CMYK/Pantone)** and **digital (RGB/HEX)** as the two required color modes but does not provide the actual CMYK/Pantone conversions. This gap is closed with calculated equivalents in [visual-system.md](../advertising-system/visual-system.md).

---

## 4. Logo Versions & Lockups (source: §1.4)

Four official lockups, each available in positive, negative, and black/white:

1. **Primary English** — mark left, "tuba" wordmark right
2. **Primary Arabic** — "طوبة" wordmark right-aligned reading position, mark to its right (RTL-correct)
3. **Dual-Language Horizontal** — mark centered above, English + Arabic wordmarks side by side beneath
4. **Dual-Language Stacked** — mark top, Arabic wordmark, English wordmark stacked beneath

## 5. Background & Color-Pairing Rules (source: §1.5)

| Background | Correct logo treatment |
|---|---|
| White / light background or light image | Coral mark + **Purple** logotype |
| Dark background or dark image | Coral mark + **White** logotype |
| Solid color or gradient background (any hue) | Full **white** or full **black** logo only — never the two-tone color version |

This third rule is the one most commonly violated in practice across brands generally (teams default to the color logo everywhere because it's the "default" file) — it should be called out explicitly in onboarding for any designer or AI system generating Tuba creative.

## 6. Incorrect Uses (source: §1.6 — six documented violations)

Never:
1. Move, change, or rotate any element of the logo
2. Add drop shadows or effects
3. Change the color of any individual element (i.e., never swap which part is purple vs. coral vs. white)
4. Distort, stretch, or squeeze any element
5. Place the two-tone color logo on a solid/gradient color background (must use white/black — see §5)
6. Place the logo over a busy, high-color-variance background image

## 7. Logo Placement (source: §1.7)

| Communication language | Preferred logo position |
|---|---|
| English | Left side or center of page/canvas, both portrait and landscape |
| Arabic | Right side or center of page/canvas, both portrait and landscape |

This is a **reading-direction-aware placement rule**, not an arbitrary preference — it aligns logo position with where the eye naturally lands first in each script's reading flow. Every template in [design-components.md](../advertising-system/design-components.md) inherits this rule.

## 8. Icon Construction Discipline (observed directly from SVG source, not documented in PDF)

Because the PDF guideline stops at the logo, the icon set's construction rules had to be reverse-engineered from the files themselves:

- **Outline variants:** stroke-only paths, no fill, consistent stroke width **≈1.72px** at native viewBox scale, `stroke-miterlimit:10` (soft, non-sharp miter joins — consistent with the logo's rounded-corner language)
- **Filled variants:** solid `#2A0C72` (Tuba Purple) fills, no stroke
- **Color usage in icons:** exclusively Tuba Purple observed in both filled and outline icon files — **coral is never used as an icon color in the existing set.** This is an important discovered constraint: coral is reserved for the mark/accent role, not general iconography, in the current system.
- **Corner treatment:** consistently rounded, matching the logo's "comfort and empathy" rationale for round shapes

This reverse-engineered ruleset is formalized into an actionable icon system in [iconography.md](../advertising-system/iconography.md).

---

## 9. What Already Works (protect and amplify)

1. **The rebus logic of the mark** (globe + letter + hut) — genuinely distinctive, defensible, story-rich
2. **The circle-based bilingual type construction** — rare discipline, a real moat against generic "translated" brand execution
3. **The purple/coral pairing** — distinctive in a blue/green-saturated category (validated further in competitor-analysis.md)
4. **The dual filled/outline icon system** — production-flexible, already extensive (30+ icons across two families)
5. **The desert/lifestyle icon vocabulary** (sun, sea, waves, palm, mountains) — an asset with no equivalent yet activated in most competitor visual systems
6. **Explicit, well-illustrated incorrect-use documentation** — reduces the single most common way brand identities erode (well-intentioned misuse)

## 10. What Should Never Change

These are treated as **immutable brand law** throughout every other document in this system:

- The mark's three-part construction (globe / letter / hut) and its silhouette
- The two core hex values: `#2A0C72` and `#F95A60`
- The circle-based letterform logic in both English and Arabic wordmarks
- The rule that the logotype never appears without the mark being available in the same lockup family (mark can stand alone; logotype alone cannot — per §1.3 of the guideline PDF)
- The background-pairing rules in §5 above
- Reading-direction-aware placement (English left/center, Arabic right/center)

## 11. Visual DNA (summary construct for use across this system)

> **Round. Bilingual by design. Purple authority, coral warmth. Home built from a globe and a letter. Land signaled by sun, sea, and palm.**

This single sentence is the compression test for every future asset: if a new logo variant, ad layout, icon, or animation can't trace back to this sentence, it is off-brand.

## 12. Core Identity Elements (non-negotiable building blocks)

| Element | Specification |
|---|---|
| Mark | Globe + flipped letter (ه/a) + hut, rounded corners, coral fill on light/dark backgrounds |
| Wordmark | Circle-constructed lowercase "tuba" / "طوبة", purple on light, white on dark |
| Primary palette | `#2A0C72` + `#F95A60` |
| Icon stroke weight | ≈1.72px at native scale, soft miter |
| Icon color | Purple only (coral reserved for mark/accent use) |
| Shape language | Rounded corners throughout — zero sharp right angles in brand-owned shapes |

## 13. Brand Recognition Elements

Ranked by how much of the brand a viewer can identify **without** seeing the full logo or reading the wordmark:

1. **The mark alone** (globe/hut monogram) — highest recognition potential, should be tested as a standalone favicon/app-icon/social-avatar asset
2. **The purple + coral color pair** — second-highest; even a color-only swatch or gradient should be identifiable as "Tuba" in-market once applied consistently
3. **Rounded shape language** — subtler but reinforces the above two whenever new UI or ad components are designed
4. **Desert/lifestyle iconography** — currently the *least* leveraged recognition asset; highest-upside opportunity for differentiation (see iconography.md)

## 14. Elements to Amplify

- The mark as a **standalone social/app avatar** — it's distinctive enough to work without the wordmark, which most competitor marks are not
- The **desert/lifestyle icon set** as a full graphic language for social and campaign backgrounds, not just occasional decoration
- The **purple-dominant, coral-accent** ratio (not 50/50) as a recognizable "color signature" across ad templates — see color hierarchy rules in [visual-system.md](../advertising-system/visual-system.md)
- **Bilingual parity** as a visible craft signal in every campaign — Arabic is not a translation of the English creative, it is designed with equal intent

## 15. Elements to Avoid

- Introducing new accent colors that compete with coral for the "warmth" role (dilutes color equity)
- Using coral as an icon fill color (breaks the established purple-only icon convention)
- Sharp corners, hard drop shadows, or high-gloss/glassmorphism effects — inconsistent with the deliberately soft, rounded, comfort-oriented shape language
- Generic real-estate stock imagery (skyscraper facades, handshake-over-contract, disembodied keys) that ignores the desert/lifestyle icon vocabulary already available
- Treating the Arabic lockup as a secondary/mirrored afterthought of the English one in new layouts
