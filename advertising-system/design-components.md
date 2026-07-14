# Design Component Library — Tuba

> **Part of:** [Tuba Advertising Identity System](../ADVERTISING_IDENTITY_GUIDE.md)
> **Builds on:** [visual-system.md](visual-system.md) (tokens: color, type, spacing, radius, shadow) · [iconography.md](iconography.md)

This is the reusable-component reference for anyone assembling Tuba advertising creative — social templates, landing pages, decks, print. Every component below is built exclusively from tokens already defined in visual-system.md; nothing here introduces a new color, radius, or type size.

---

## 1. Cards

### 1.1 Property card
```
┌─────────────────────────────┐
│ [photo, 12px inset radius]  │  ← visual-system.md §6.2 photography rules
│  ● Featured (Coral tag)      │  ← optional, top-left overlay on photo
├─────────────────────────────┤
│ SAR 1,250,000          ♡     │  ← price: Purple bold, Display/H3 weight
│ Villa · 4BD · 3BA · 320m²    │  ← Body, Muted color
│ Al Nakheel, Riyadh           │  ← Body, Ink color
│ ┌───────────────┐            │
│ │ ✓ FAL 1234567 │            │  ← Trust badge, see §2.1
│ └───────────────┘            │
└─────────────────────────────┘
```
- Container: Surface background, 16-20px radius, Shadow SM → Shadow MD on hover (visual-system.md §4)
- Price always leads the info block, bold, largest text in the card after the image
- FAL badge always present, bottom of card, never omitted (advertising-dna.md §8)

### 1.2 Agent/broker card
Photo (circular crop — per the circle motif, visual-system.md §7.1) + name + FAL/TruBroker-equivalent badge (see §2.2) + listing count + "Contact" CTA (Secondary button style, visual-system.md §5.2)

### 1.3 Article/content card
Image top (12px inset) → Overline/eyebrow label (pillar name, e.g., "Guidance & Education") → H3 headline → one-line excerpt → Muted metadata (read time/date)

---

## 2. Badges & Labels

### 2.1 FAL / License Trust Badge (highest-priority component in this library)

Per REGA's own regulation (competitor-analysis.md §11, research/competitor-research-notes.md "REGA" section), a license can be displayed minimally as **license number + QR code** without "disfiguring" ad design — this is the regulator-sanctioned basis for the badge spec below.

```
┌──────────────────────┐
│ ✓  FAL 1234567   [QR] │
└──────────────────────┘
```
- Pill shape (999px radius), Purple 8 background, Purple text, small green (success token, visual-system.md §1.3) checkmark
- QR code included on digital assets where space allows (verifies license per REGA's public lookup — competitor-analysis.md §11); omit QR only on space-constrained formats (Snap ads, small display banners) and keep the license number
- **Recommended naming:** give this badge a proprietary name rather than a generic label, following the pattern Bayut uses successfully with "TruCheck"/"TruBroker" (competitor-analysis.md §7-8) — e.g., internally referred to as the **"Tuba Verified"** mark. This turns a compliance requirement into a brand-owned trust asset, exactly the pattern flagged as a category best-practice in competitor-analysis.md §8.
- Placement: bottom corner of property cards (§1.1), footer of ads (visual-system.md §9.5-9.9), never hidden in fine print

### 2.2 Agent verification badge
Same visual language as §2.1, adapted: checkmark + "Verified Agent" / "وسيط موثّق" — pairs with FAL badge on agent cards, never replaces it

### 2.3 Status/category tags
"New," "Featured," "Off-Plan," "Exclusive" — Coral 20 background, Coral or Purple text (visual-system.md §5.3), pill shape, used sparingly (one tag per card maximum to avoid visual noise)

---

## 3. Statistics & Data Components

### 3.1 Stat block (single number callout)
```
     14%
Average 3-year
appreciation
```
- Number: Display or H1 weight, **Coral** color (the one place Coral is used for a large numeral — justified because a stat is the "exception" the color hierarchy reserves Coral for, visual-system.md §1.7)
- Label: Caption weight, Muted color, max 2 lines

### 3.2 Stat row (multiple stats, e.g., market report)
3-5 stat blocks in a horizontal row, equal width, divided by thin Border-color rules — directly modeled on the "زبدة العقار"/market-report pattern identified as category-standard authority content (competitor-analysis.md §9, content-system.md §5)

### 3.3 Comparison card
Two or three columns (e.g., "Buy vs. Rent," "This district vs. city average") — Purple header row, Canvas body, one column subtly highlighted (Purple 8 background) to guide the eye without hard-selling

---

## 4. CTA Blocks

### 4.1 Inline CTA block (end of article/content piece)
Canvas or Purple 8 background, H3 headline (single Guidance Framework Decide-stage line), one Primary button (visual-system.md §5.2)

### 4.2 Hero CTA block (campaign landing page top)
Full-width, Purple or gradient background (visual-system.md §1.4), H1/Display headline, one supporting line, one Primary CTA button — never a second competing CTA in the same viewport (advertising-dna.md §10)

---

## 5. Testimonials & Quote Cards

### 5.1 Testimonial card
Photo (circular, small) + name + role ("First-time buyer, Riyadh") + quote in Body Large, opening quotation mark styled large and Coral-colored as a decorative accent (only decorative use of Coral as a "character," not a data color)

### 5.2 Quote card (extractable/shareable — content-system.md §2.1)
Designed specifically for screenshot-sharing: square or portrait format, large centered quote text (H2/H3 weight), Tuba mark small in corner, Purple or gradient background — built to work standalone with zero surrounding context

---

## 6. Comparison & Feature Components

### 6.1 Feature block
Icon (Purple, from iconography.md library) + short headline (3-5 words) + one supporting line — used in sets of 3 (never more, per copywriting.md's "one idea per sentence" discipline applied visually)

### 6.2 Property highlight strip
Row of icon+label pairs beneath a property card/hero image: bed icon, bath icon, area icon, FAL badge — all Purple, outline style at this small size (iconography.md §1.1 sizing rule)

### 6.3 Investment highlight block
Combines §3.1 stat block + §6.1 feature block pattern — used specifically for investment-pillar content (content-system.md §4.2), always paired with a data-source citation line in Caption weight

---

## 7. Maps

- Map pins: custom-drawn using the mark's circular language (a small Purple circle with a Coral center-dot, or a miniaturized version of the house mark) — never a default red teardrop map pin, which instantly reads as "generic Google Maps," not Tuba
- Map UI chrome (search bar, filters over a map view): Surface background cards floating over a desaturated/Purple-tinted map style where the mapping provider allows custom styling

---

## 8. Pricing Components

- Price display: always Purple or Ink, bold, largest number in its context — Coral reserved for the "before/after" or "was/now" secondary price in a financing-offer display, never the primary price (keeps the color hierarchy meaning consistent: Coral = "the thing to notice," which in a discount context is the *savings*, not the base price)
- Financing/installment breakdown component: monthly figure large and bold (per the Sakani "concrete number" pattern, copywriting.md §3), fine print (total cost, terms) in Caption/Muted below

---

## 9. Icons, Patterns, Backgrounds, Decorative Assets

Full specification lives in [iconography.md](iconography.md) and [visual-system.md](visual-system.md) §7. Quick reference for component use:
- Icons: Purple only, filled below 24px / outline above (iconography.md §1.1)
- Patterns: mark-outline repeat at 6-10% opacity on Purple backgrounds; desert/lifestyle icon scatter at low opacity for lifestyle content (visual-system.md §7.2)
- Backgrounds: Canvas (`#F7F5FC`) default for content-dense layouts; Purple→Coral gradient reserved for sparse-headline hero moments (visual-system.md §1.4)
- Decorative frames: 2-3px rounded-rect Purple/Coral frames around featured content only (visual-system.md §7.3)

---

## 10. Component Assembly Rules

1. **Never combine more than 3 component types in a single composition** above and beyond the base layout (e.g., a property card + a trust badge + one CTA is fine; adding a stat block and a testimonial to the same card is not)
2. **The FAL/Verified badge (§2.1) is the only component required in every single commerce-adjacent asset** — cards, landing pages, ads featuring a specific property or agent
3. **Coral appears at most twice in any single composition**: once as the primary accent/CTA, and optionally once as a stat/number callout — never as a general decorative color throughout
4. All components inherit RTL-mirroring automatically for Arabic layouts (icon/text order reverses, badge position mirrors) — per the reading-direction placement logic in current-brand-analysis.md §7

## Cross-references
- Token source for every spec above: [visual-system.md](visual-system.md)
- Icon specifications: [iconography.md](iconography.md)
- Copy that fills these components: [copywriting.md](copywriting.md)
- Where each component is used in a full layout: [visual-system.md](visual-system.md) §9, [campaign-playbook.md](campaign-playbook.md)
