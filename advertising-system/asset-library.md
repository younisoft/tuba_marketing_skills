# Asset Library — Tuba

> **Part of:** [Tuba Advertising Identity System](../ADVERTISING_IDENTITY_GUIDE.md) — Execution Layer
> **Use:** the governance spec for every reusable asset category — what exists today, what format it must follow, and what's still a gap to commission. Treat this as the index a designer checks *before* creating a new asset from scratch — most needs should be met by pulling from the existing library, not reinventing.

**Status legend:** ✅ Exists in official library · ⚠️ Partial / informal · ❌ Gap — needs commissioning

---

## 1. Photography

| Category | Status | Spec |
|---|---|---|
| Property exteriors | ⚠️ | Straightened verticals, sky visible, golden-hour bias where possible (visual-system.md §6.1-6.2) |
| Property interiors | ⚠️ | Human presence/trace in at least one shot per set; warm white balance |
| Lifestyle/place | ❌ | Real Saudi neighborhoods, streets, city life — not generic stock. Highest-priority commissioning gap (competitor-analysis.md §9 identifies this as the single most under-invested content category in the category) |
| People (candid) | ❌ | Real family/individual moments in spaces — never posed handshake-over-contract clichés (visual-system.md §6.1) |
| Format standard | — | Source at minimum 3000px on the long edge; deliver web-optimized (WebP/JPEG) at platform-specific dimensions per visual-system.md §9 |

## 2. Drone / Aerial

| Category | Status | Spec |
|---|---|---|
| Project/masterplan aerials | ❌ | Use sparingly and always pair with at least one ground-level, human-scale shot in the same set — per the campaign-playbook.md §2.3 note on avoiding purely "clinical bird's-eye" framing (a specific weakness identified in a competitor rebrand case study, competitor-analysis.md) |
| Neighborhood context shots | ❌ | For district/location storytelling content (content-system.md pillar 3) |

## 3. People

| Category | Status | Spec |
|---|---|---|
| Real customers (testimonial subjects) | ❌ | Only real people who've consented — never stock photos presented as testimonials (copywriting.md §9 — no fabricated social proof) |
| Agents/brokers | ❌ | Consistent, professional headshot style — circular crop per design-components.md §1.2 |
| Diverse Saudi family representation | ❌ | Reflects actual target personas (project-analysis.md §8), not generic international stock casting |

## 4. Architecture

| Category | Status | Spec |
|---|---|---|
| Modern residential | ⚠️ | Matches "modern house" icon family conceptually (iconography.md §3.1) |
| Najdi/heritage/traditional | ⚠️ | Matches "Saudi house" icon — reserve for heritage/National Day-adjacent content |
| Commercial | ❌ | Gap — needed for developer/B2B content pillar |

## 5. Icons

| Category | Status | Spec |
|---|---|---|
| Real estate (house, modern house, Saudi house) | ✅ | Full spec in [iconography.md §1-3](iconography.md) |
| Place/desert/lifestyle (sun, waves, palm, mountains, moon) | ✅ | Full spec in iconography.md §3.6 |
| Wayfinding (direction, dots) | ✅ | iconography.md §3.2 |
| Map pin, verified/checkmark shield, apartment/villa, riyal/currency, growth chart, broker/agent, family, security/lock, support/chat | ❌ | See [iconography.md §6](iconography.md) full gap-filling roadmap and priority order |

## 6. Illustrations

| Category | Status | Spec |
|---|---|---|
| Process/how-it-works illustrations | ❌ | Flat, rounded, two-color-plus-neutral (Purple + Coral + Canvas/white only) per visual-system.md §6.3 |
| Data/market-trend illustrations | ❌ | Pairs with market-insight content (content-system.md §4.7) |
| Abstract concept illustrations (trust, guidance, security) | ❌ | Use only when photography can't convey the concept without cliché (visual-system.md §6.3) |

## 7. Backgrounds

| Category | Status | Spec |
|---|---|---|
| Canvas/Surface solid | ✅ | `#F7F5FC` / `#FFFFFF` — visual-system.md §1.2 |
| Purple→Coral gradient | ✅ (defined, not yet asset-produced) | 135°, per visual-system.md §1.4 — for sparse-headline hero moments only |
| Mark-outline repeat pattern | ✅ (defined, precedent exists in official guideline PDF cover) | Low-opacity (6-10%) on Purple backgrounds, visual-system.md §7.2 |
| Desert/lifestyle icon scatter pattern | ❌ | Needs production — concept fully specified in visual-system.md §7.2 |

## 8. Textures

| Category | Status | Spec |
|---|---|---|
| Subtle grain/noise overlay | ❌ | ≤4% opacity, gradient backgrounds only, premium/project campaigns (visual-system.md §7.4) — no other texture library approved |

## 9. Patterns

See Backgrounds (§7) and Iconography (§5) — Tuba's pattern library is built exclusively from the mark outline and the desert/lifestyle icon set, per visual-system.md §7.2. Do not introduce generic geometric patterns (dots, grids, chevrons) with no brand-asset connection.

## 10. Frames

| Category | Status | Spec |
|---|---|---|
| Featured-content frame | ❌ | 2-3px rounded-rect, Purple or Coral, around featured/premium photos only (visual-system.md §7.3) |

## 11. Gradients

| Category | Status | Spec |
|---|---|---|
| Purple→Coral (135°) | ✅ Defined | The only approved brand gradient — visual-system.md §1.4. Never introduce a second gradient direction or color pair. |

## 12. Mockups

| Category | Status | Spec |
|---|---|---|
| App screen mockups (device frames) | ❌ | Needed for app-store, social, and presentation contexts |
| Print/OOH mockups | ❌ | Needed for stakeholder presentation of outdoor campaign concepts (visual-system.md §9.7) |
| Social post mockups (in-platform preview frames) | ❌ | Useful for internal review/approval stage (campaign-workflows.md §6) |

## 13. Logos

| Category | Status | Spec |
|---|---|---|
| Primary English | ✅ | `tuba logo/en_logo.svg`, `en_coloredLogo.svg` |
| Primary Arabic | ✅ | `tuba logo/Ar logo.svg`, `ar-color-TubaLogo2.svg` |
| Dual-language horizontal/stacked | ✅ | Per current-brand-analysis.md §4 (referenced in official PDF, source files to be confirmed present in production asset repository) |
| Negative/dark-background versions | ✅ | `Ar logo-white-red.svg`, `Asset-white-logo.png` |
| Mark-only (standalone) | ✅ | `tuba icons/SVG/tuba icon.svg`, `tuba logo fill.svg` |

Full usage rules: [current-brand-analysis.md §4-7](../knowledge-base/current-brand-analysis.md).

## 14. Badges

| Category | Status | Spec |
|---|---|---|
| FAL / "Tuba Verified" trust badge | ❌ | Needs production — full spec in [design-components.md §2.1](design-components.md) |
| Agent verification badge | ❌ | design-components.md §2.2 |
| Status tags (New/Featured/Off-Plan/Exclusive) | ❌ | design-components.md §2.3 |

## 15. Compliance Marks

| Category | Status | Spec |
|---|---|---|
| FAL license number display | ❌ (product-side workflow exists — project-analysis.md §1; marketing-asset badge does not yet) | Pill + QR code where space allows, per REGA's own minimal-disclosure allowance (competitor-analysis.md §11) |
| REGA verification reference | ❌ | Paired with FAL badge, not a separate mark |

## 16. Motion Assets

| Category | Status | Spec |
|---|---|---|
| Logo motion (scale/fade only) | ❌ | Never spin, bounce, or distort — visual-system.md §8 |
| Icon draw-on animation | ❌ | Outline icons stroke-animate 0→100%, visual-system.md §8, iconography.md §1.2 |
| Gradient ambient motion | ❌ | 8-12s slow loop, never flash/strobe — visual-system.md §8 |
| Transition library (cross-dissolve, soft slide) | ❌ | 200-400ms, soft ease-in-out — visual-system.md §8 |

## 17. Social Templates

| Category | Status | Spec |
|---|---|---|
| Feed post (1:1, 4:5) | ❌ | visual-system.md §9.1 |
| Carousel | ❌ | visual-system.md §9.2 |
| Story/Reel (9:16) | ❌ | visual-system.md §9.3, with platform safe-zones marked |
| Video thumbnail | ❌ | visual-system.md §9.4 |
| Display/banner (IAB sizes) | ❌ | visual-system.md §9.5 |
| Presentation deck | ❌ | visual-system.md §9.8 |
| Email | ❌ | visual-system.md §9.9 |

---

## Commissioning Priority (build order for the current gap list)

1. **FAL/Verified trust badge** — blocks every commerce-adjacent asset from being fully spec-compliant (design-components.md §2.1)
2. **Social templates (feed, carousel, story)** — blocks all routine content production
3. **Real Saudi lifestyle/place photography** — the single most differentiating asset category per competitor-analysis.md §9
4. **Icon gaps** (map pin, verified shield, apartment/villa) — per iconography.md §6 priority order
5. **Motion asset library** — once static templates are stable

## Cross-references
- Format specs for every template: [visual-system.md §9](visual-system.md)
- Icon specifications: [iconography.md](iconography.md)
- Badge/component specs: [design-components.md](design-components.md)
- Original source files: [references/source-assets-index.md](../references/source-assets-index.md)
