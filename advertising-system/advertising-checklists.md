# Advertising Checklists — Tuba

> **Part of:** [Tuba Advertising Identity System](../ADVERTISING_IDENTITY_GUIDE.md) — Execution Layer
> **Use:** run the relevant checklist(s) below before any Tuba asset ships. Every line item traces back to a rule defined elsewhere in the system — this document doesn't invent new rules, it makes existing ones checkable in seconds.

Each checklist is written as literal checkboxes so it can be pasted into a task tool, a PR description, or an approval thread. If any box in a checklist fails, the asset does not publish until it's fixed or an explicit exception is approved (see [advertising-playbook.md §6](advertising-playbook.md) for who can grant exceptions).

---

## 1. Visual Checklist

- [ ] Uses only Tuba Purple (`#2A0C72`) and Tuba Coral (`#F95A60`) as brand colors — no third brand hue introduced
- [ ] Color hierarchy is roughly 60% Canvas/neutral, 30% Purple, 10% Coral (visual-system.md §1.7)
- [ ] Coral appears at most twice in the composition (design-components.md §10)
- [ ] All corners are rounded per the border-radius scale — zero sharp 0px corners on brand-owned containers (visual-system.md §3.3)
- [ ] Shadows (if used) are purple-tinted, not neutral grey/black (visual-system.md §4)
- [ ] Logo lockup matches the background-pairing rule (light bg → coral mark + purple logotype; dark bg → coral mark + white logotype; solid/gradient color bg → white or black only) (current-brand-analysis.md §5)
- [ ] Logo is not moved, rotated, recolored per-element, distorted, shadowed, or placed on a busy multicolor image (current-brand-analysis.md §6)

## 2. Copy Checklist

- [ ] Passes the Guidance Framework check — at minimum contains a Hook and a Decide stage (copywriting.md §1)
- [ ] Headline is 5-8 words, uses no more than 2 formulas layered (copywriting.md §3)
- [ ] Exactly one CTA, drawn from the approved CTA list or a clear variant of it (copywriting.md §4)
- [ ] No forbidden expressions present — cross-check against copywriting.md §8.3
- [ ] No fear-based urgency, no unverifiable superlatives ("#1," "best") unless independently citable (advertising-dna.md §5)
- [ ] Customer is the grammatical subject/hero, not Tuba (advertising-dna.md §3, Principle 1)
- [ ] Arabic copy was written natively for this asset, not translated from English after the fact (advertising-dna.md §9)

## 3. Brand Checklist

- [ ] Traceable to the Brand Promise — *"You will never have to figure this out alone"* (advertising-dna.md §2)
- [ ] Could not run unchanged for a competitor (advertising-dna.md §1) — if it could, rewrite
- [ ] Reflects the five voice adjectives: Warm, Clear, Grounded, Guiding, Respectful (advertising-dna.md §11)
- [ ] Matches the correct luxury/professional/approachability register for this campaign type (advertising-dna.md §10)

## 4. Typography Checklist

- [ ] Uses Almarai (Arabic) / Plus Jakarta Sans (Latin) only — no substitute typeface (visual-system.md §2.2)
- [ ] No more than 3 type sizes in one creative (visual-system.md §2.3)
- [ ] Arabic set 1-2px larger than paired Latin text at equivalent visual weight (visual-system.md §2.4)
- [ ] Arabic body copy not justified in narrow columns (visual-system.md §2.4)
- [ ] Western numerals used for prices/specs, not Eastern Arabic-Indic (visual-system.md §2.4)

## 5. Color Checklist

- [ ] No pure black (`#000000`) or pure neutral grey used for text — routed through Ink/Muted tokens instead (visual-system.md §1.2)
- [ ] Contrast ratio ≥4.5:1 for all body text (visual-system.md §1.6)
- [ ] No Purple text on Coral background or Coral text on Purple background for body copy (visual-system.md §1.6)
- [ ] Gradient background (if used) reserved for sparse-headline hero moments only, not dense body copy (visual-system.md §1.4)

## 6. Spacing Checklist

- [ ] All margins/padding/gaps use the 8px-based spacing scale: 4·8·16·24·32·48·64·96px (visual-system.md §3.1)
- [ ] Grid followed for the format in use (12-col digital / 4-col social safe grid / print clear-space) (visual-system.md §3.2)
- [ ] Social/story formats respect platform safe zones (top 250px / bottom 350px reserved on 9:16) (visual-system.md §9.3)

## 7. Icon Checklist

- [ ] All icons are Purple only — no coral-filled icons anywhere (iconography.md §1, §2)
- [ ] One icon treatment (filled OR outline) held consistently per composition — not mixed (iconography.md §1.1)
- [ ] Icons scaled proportionally, never stretched non-uniformly (iconography.md §2)
- [ ] Desert/lifestyle icons used for storytelling/decoration only, never as literal functional UI buttons (iconography.md §3.6)

## 8. Accessibility Checklist

- [ ] Text contrast meets WCAG AA (4.5:1 body, 3:1 large text) (visual-system.md §1.6)
- [ ] No essential information conveyed by color alone (e.g., a status conveyed only by a colored dot needs a label too)
- [ ] Minimum tap target size on interactive elements (buttons, CTAs) is comfortable for mobile thumbs (~44×44px equivalent)
- [ ] Video/motion content has captions available for sound-off viewing (standard for Reels/Stories/TikTok consumption)
- [ ] Icons below 20px avoided for outline style, which becomes illegible at small sizes (iconography.md §2)

## 9. Trust Checklist

- [ ] Every commerce-adjacent asset (property, agent, listing) carries the FAL/Verified trust badge (design-components.md §2.1)
- [ ] Trust claims are specific, not generic — "FAL-licensed, verify anytime" beats "we're trusted" (copywriting.md §5.6)
- [ ] No badge or claim appears that isn't operationally true right now (advertising-dna.md §8 — badges must be backed by real enforcement)

## 10. REGA / FAL Compliance Checklist

- [ ] FAL/ad-license number is present and current for the specific listing/agent/campaign in question
- [ ] Where space allows, a QR code linking to the REGA license-verification lookup is included alongside the number (design-components.md §2.1)
- [ ] Ad content contains no misleading data, no disparagement of competitors, no duplicate/fake listing claims (per REGA's advertising bylaw — competitor-analysis.md §6, §11)
- [ ] Compliance element is visually integrated (pill badge), not a bulky disclaimer block that disfigures the creative

## 11. CTA Checklist

- [ ] Exactly one CTA on the asset — no two competing calls to action (advertising-dna.md §10, copywriting.md §4)
- [ ] CTA button uses Coral fill (or white fill + Purple text on photo/dark backgrounds) — never a Purple-filled primary CTA (visual-system.md §5.2)
- [ ] CTA copy is specific to the action, not a generic "Contact us today" (copywriting.md §8.3)
- [ ] CTA is visually the highest-contrast element after the headline

## 12. Mobile Readability Checklist

- [ ] Headline legible at actual mobile screen size, not just on a desktop preview
- [ ] Tested against the "3 seconds from a moving thumb" scroll-speed standard — if the point isn't clear in 3 seconds, cut copy further (adapted from visual-system.md §9.7's OOH legibility test)
- [ ] No text smaller than 12px (Caption size) anywhere on a mobile-facing asset (visual-system.md §2.3)

## 13. Social Optimization Checklist

- [ ] Asset is native to its platform's aspect ratio and pacing — not a resized version of a different platform's asset (social-media-playbook.md §11)
- [ ] Hook lands within the first 3 seconds (video) or first line (caption) (social-media-playbook.md §2-4)
- [ ] Correct hashtag count and mix for the platform (social-media-playbook.md, per-platform sections)
- [ ] Thumbnail/cover frame is compelling standalone, without autoplay (social-media-playbook.md §3)

## 14. Campaign Consistency Checklist

- [ ] Asset matches the campaign's assigned funnel role, pillar, and Guidance Framework stage (content-system.md §3, campaign-playbook.md §4)
- [ ] Visual and verbal tone consistent with every other asset in the same campaign — no palette or voice drift mid-campaign (advertising-dna.md §9)
- [ ] Seasonal assets are locked to their correct real-world calendar date, using that year's correct official theme where applicable (National Day) (campaign-playbook.md §1.1)

## 15. Export Checklist

- [ ] Correct file format for destination (see asset-library.md for format standards)
- [ ] Correct color profile (RGB for digital, CMYK for print — visual-system.md §1.1)
- [ ] File named per convention: `tuba_[campaign]_[platform]_[format]_[date]` (or team's adopted naming standard)
- [ ] Logo/mark resolution sufficient for placement size (no visible pixelation at final display size)
- [ ] Arabic and English versions exported as a matched pair, not just one language

## 16. Designer Checklist (pre-handoff self-check)

- [ ] Ran visual, typography, color, spacing, and icon checklists above
- [ ] Cross-checked against [design-review-checklist.md](design-review-checklist.md) informally before formal review
- [ ] Confirmed source files (fonts, icon SVGs, logo files) came from the official asset library, not recreated by hand (current-brand-analysis.md §6)
- [ ] Prepared both Arabic and English versions where the campaign requires bilingual assets

## 17. Marketing Manager Checklist (pre-publish sign-off)

- [ ] Ran copy, brand, trust, REGA/FAL, and campaign consistency checklists above
- [ ] Confirmed the asset serves a real business objective from the current campaign brief (creative-brief-template.md)
- [ ] Confirmed CTA destination (link/landing page/contact flow) is live and correct
- [ ] Confirmed publish date/time aligns with campaign-workflows.md scheduling and any seasonal calendar lock
- [ ] Logged the asset for post-campaign reporting (advertising-playbook.md §9)

---

## Cross-references
- Full rule source: [visual-system.md](visual-system.md), [copywriting.md](copywriting.md), [iconography.md](iconography.md), [design-components.md](design-components.md), [advertising-dna.md](advertising-dna.md)
- Formal review process: [design-review-checklist.md](design-review-checklist.md), [content-review-checklist.md](content-review-checklist.md)
- Where this fits in the full process: [advertising-playbook.md](advertising-playbook.md)
