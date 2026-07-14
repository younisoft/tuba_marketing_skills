# Iconography System — Tuba

> **Part of:** [Tuba Advertising Identity System](../ADVERTISING_IDENTITY_GUIDE.md)
> **Source assets:** `tuba icons/SVG/` (30+ existing icons) — see full inventory in [current-brand-analysis.md §1](../knowledge-base/current-brand-analysis.md)

Tuba's existing icon library was never accompanied by a written rulebook. This document reverse-engineers the construction discipline already present in the SVG files and extends it into a complete, governable icon system — so new icons (created by any designer or AI tool) are indistinguishable in quality and logic from the originals.

---

## 1. Icon Style

| Property | Specification | Source |
|---|---|---|
| **Construction** | Rounded, geometric, friendly — same "comfort and empathy" logic as the logo's hut shape | Guideline PDF §1.1 |
| **Stroke thickness** | ≈1.72px at native SVG viewBox scale (scale proportionally; do not use a fixed px value across all sizes) | Measured directly from `modren house-outline.svg`, `sun-outline.svg`, `tuba icon.svg` |
| **Corner radius** | Soft throughout — `stroke-miterlimit:10` keeps joints rounded, never sharp/pointed | Measured from outline SVGs |
| **Fill vs. outline** | Two parallel families exist for most subjects — filled (solid, no stroke) and outline (stroke-only, no fill) | Confirmed pairs: `modren house.svg`/`modren house-outline.svg`, `sun.svg`/`sun-outline.svg`, `sea-sun.svg`/`sea-sun-outline.svg`, `smooth waves.svg`/`-outline.svg`, `sharp waves.svg`/`-outline.svg`, `thin tree.svg`/`-outline.svg`, `fat tree.svg`/`-outline.svg` |
| **Color** | **Purple (`#2A0C72`) only.** Coral does not appear in any existing icon file. | Confirmed across all inspected icon SVGs |
| **Grid** | Roughly square viewBoxes (e.g., 168×188, 188×188, 97×108) — icons are drawn to their natural silhouette proportions, not forced into a uniform bounding square the way many UI icon systems work | Measured from source files |

### 1.1 Filled vs. Outline — when to use which

| Use filled when... | Use outline when... |
|---|---|
| Icon appears small (under 24px) — filled shapes stay legible at small sizes, thin strokes don't | Icon appears large (badges, section headers, decorative use) where a lighter visual weight is wanted |
| It needs to carry strong visual weight (primary navigation, key CTAs) | It's layered over photography or a colored background (outline icons read as more refined, less like a UI sticker) |
| It's used as a solid brand mark/watermark | It's part of a decorative pattern (see §7.2 in visual-system.md) — outline icons at low opacity read as texture, filled icons read as clutter |

**Common mistake:** mixing filled and outline icons within the same row/group (e.g., a filled house icon next to an outline sun icon in one icon set for a single ad). Pick one treatment per composition and hold it consistently — mixing reads as unfinished, not intentional.

### 1.2 Animation

No motion icon set exists yet. When animating (per visual-system.md §8):
- Outline icons: stroke draw-on (0% → 100% path length) over 400-600ms, soft ease-out
- Filled icons: scale + fade in (90% → 100% scale, 0 → 100% opacity), never bounce/overshoot
- Never rotate, skew, or distort icons in motion — same rule as the logo mark itself

---

## 2. Usage Rules

1. **Icons are Purple by default.** Only recolor to white when placed on a Purple or dark/photo background with a scrim (per visual-system.md §7.5). Never recolor an icon to Coral — coral is reserved for the logo mark, CTAs, and accent text, not general iconography (this is a deliberate constraint discovered in the existing asset library, not an arbitrary new rule).
2. **Minimum size:** outline icons should not be used below 20px (stroke becomes illegible); filled icons can go as small as 14px.
3. **Clear space:** maintain padding around every icon equal to at least 15% of its own bounding box when placed near text or other icons.
4. **Never stretch non-uniformly.** Icons must scale proportionally (lock aspect ratio) — several source icons are not perfect squares, and non-uniform scaling will visibly distort the rounded geometry.
5. **One family per touchpoint.** A given screen, ad, or template should draw icons from a single conceptual family (see §3) unless deliberately combining "home" and "place" icons to tell a location + property story together (an approved, brand-native pairing — see §4).

---

## 3. Icon Categories

### 3.1 Real estate icons (existing + to extend)
| Icon | Status | Use |
|---|---|---|
| House (classic) | ✅ Exists (`house.svg`) | Generic property reference |
| Modern house | ✅ Exists (filled + outline) | Villa/modern-build listings, "new build" contexts |
| Saudi house (najdi-style) | ✅ Exists | Heritage/traditional-architecture context, National Day campaigns, "local" cultural framing |
| Apartment/building | ❌ Gap — needs design | Apartment/multi-unit listings, urban rental content |
| Villa (standalone) | ❌ Gap — needs design | Distinguish villa listings from generic "house" |
| Off-plan/under-construction | ❌ Gap — needs design | Project/off-plan campaign content |

### 3.2 Place / location icons
| Icon | Status | Use |
|---|---|---|
| Direction / street direction | ✅ Exists (`direction.svg`, `st direction.svg`, `street direction.svg`) | Location/neighborhood content, "find your area" features |
| Map pin | ❌ Gap — needs design (high priority — near-universal real-estate UI need) | Listing location markers, map-based search |
| Compass/qibla-adjacent direction marker | ❌ Optional gap | Neighborhood/mosque-proximity context (culturally relevant search filter in KSA) |

### 3.3 Investment / finance icons
| Icon | Status | Use |
|---|---|---|
| Growth/chart | ❌ Gap — needs design | Investment content, market-insight posts |
| Riyal/currency | ❌ Gap — needs design | Pricing, financing content |
| Handshake/deal | ❌ Gap — use sparingly if designed (cliché risk — prefer the trust/security icon instead, see §3.5) | Broker-deal-closed context only |

### 3.4 People / roles
| Icon | Status | Use |
|---|---|---|
| Broker/agent | ❌ Gap — needs design | Agent profile UI, broker-facing campaigns |
| Developer/company | ❌ Gap — needs design | Developer partnership content |
| Family/household | ❌ Gap — needs design | Lifestyle, rental-for-family content |

### 3.5 Trust / support icons
| Icon | Status | Use |
|---|---|---|
| Verified/checkmark shield | ❌ Gap — needs design (high priority — pairs directly with the FAL/REGA badge system in design-components.md) | Licensed-listing badge, verified-agent badge |
| Security/lock | ❌ Gap — needs design | Data privacy, secure-payment messaging |
| Support/headset or chat | ❌ Gap — needs design | Support Center, contact CTAs |

### 3.6 Place / desert / lifestyle icons (existing — Tuba's most distinctive, underused asset)
Sun (filled + outline + desert variants), moon, mountains, waves (smooth + sharp, filled + outline), palm/trees (multiple styles, filled + outline), rose, garden, flower. See full inventory in current-brand-analysis.md §1.

**Use for:** section dividers, campaign backgrounds, seasonal/lifestyle content, decorative patterns (per visual-system.md §7.2) — never as literal UI functional icons (a "sun" icon should not appear as a button in the property-search flow; it belongs in brand storytelling contexts, not product chrome).

---

## 4. Icon Pairing Logic — "Home + Place" (a Tuba-native pattern)

Because the existing library deliberately contains both a real-estate family and a desert/lifestyle family, Tuba can do something most competitors can't: **pair a literal property icon with a place/lifestyle icon in the same composition** to visually say "not just a house — a place in the world" (directly echoing the logo brief's own language — see project-analysis.md §2).

**Example pairings:**
- Modern house + sun = new-build, bright-future framing (good for first-time-buyer campaigns)
- Saudi house + palm/desert = heritage, National Day, cultural-rootedness framing
- House + waves = coastal/Red Sea project campaigns (Jeddah, NEOM-adjacent, coastal listings)
- House + mountains = Abha/Taif or elevated/view-property listings

This pairing logic should be documented as a creative brief input whenever a campaign needs "more than a generic house icon" — see [campaign-playbook.md](campaign-playbook.md).

---

## 5. Do and Don't Examples

| ✅ Do | ❌ Don't |
|---|---|
| Use Purple icons on white/Canvas backgrounds | Use Coral-colored icons anywhere |
| Keep stroke weight visually consistent when scaling (proportional, not fixed-px) | Apply a flat 2px stroke regardless of icon size (breaks consistency at small/large extremes) |
| Pick one icon family (filled OR outline) per composition | Mix filled and outline icons in the same row/group |
| Use desert/lifestyle icons for brand storytelling and campaign texture | Use desert/lifestyle icons as functional UI buttons |
| Extend the library by matching existing stroke width, corner softness, and proportion logic | Import generic icon-pack icons (e.g., Font Awesome/Material defaults) that don't match Tuba's rounded, hand-tuned geometry |
| Animate with soft draw-on or fade/scale | Spin, bounce, or skew icons |

---

## 6. Icon Library Roadmap (gap-filling priority)

For any designer commissioning new icons, priority order based on current campaign-readiness needs identified across this system:

1. Map pin, verified/checkmark shield (both referenced directly by design-components.md's badge and card specs)
2. Apartment/building, villa (both referenced by content-system.md's property-showcase content pillar)
3. Riyal/currency, growth/chart (referenced by copywriting.md's investment-copy category)
4. Broker/agent, developer/company, family/household (referenced by social-media-playbook.md's audience-specific content)
5. Security/lock, support/chat (referenced by trust-content in content-system.md)

Every new icon must be built at the same stroke weight, corner treatment, and Purple-only color rule documented in §1 before being added to the shared library.
