# Design Review Checklist — Tuba

> **Part of:** [Tuba Advertising Identity System](../ADVERTISING_IDENTITY_GUIDE.md) — Execution Layer
> **Use:** the senior-art-director-level review every visual asset passes through at [campaign-workflows.md §6](campaign-workflows.md) before Approval. Written so a reviewer with no prior Tuba context can apply it consistently — and so an AI system can self-score its own output before presenting it.

---

## How to Use This Document

Score the asset **1-10 on each of the 15 dimensions below**. Write the score and a one-line justification for any score below 8. An asset passes review only if:

- **Average score ≥ 8/10**, AND
- **No single dimension scores below 6/10**

A single weak dimension can sink an otherwise-strong asset — this mirrors how a real viewer's eye catches the one broken thing (a badly cropped face, illegible price text) regardless of how good everything else is.

---

## Scoring Dimensions

### 1. Hierarchy (1-10)
Does the eye land on the single most important element first, then move in a deliberate order? Reference: visual-system.md §1.7 color hierarchy, §2.3 type hierarchy — a 10 has exactly one dominant focal point; a 3 has three or more elements competing for first attention.

### 2. Contrast (1-10)
Is there enough visual difference between the focal point and everything else (size, color, weight) that hierarchy actually reads at a glance? Check against visual-system.md §1.6 contrast rules.

### 3. Spacing (1-10)
Does every element use the 8px spacing scale (visual-system.md §3.1)? Is there enough breathing room around text and CTAs, or does the layout feel cramped? A 10 has intentional, consistent white space; a 3 has elements touching or unevenly spaced.

### 4. Balance (1-10)
Does the composition feel weighted correctly — not lopsided, not center-frozen unless intentional? Check text-block placement against photography's negative space (visual-system.md §6.1).

### 5. Brand Consistency (1-10)
Correct colors (only Purple/Coral + approved neutrals), correct logo lockup and placement rule (current-brand-analysis.md §5, §7), correct icon treatment (iconography.md §1). A 10 is indistinguishable in system-fluency from the reference documents; any deviation drops the score proportionally to how visible the deviation is.

### 6. Typography (1-10)
Correct typefaces, correct hierarchy, no more than 3 sizes (visual-system.md §2.3), correct bilingual sizing parity (visual-system.md §2.4).

### 7. Photography (1-10)
Matches visual-system.md §6 direction — warm lighting, real Saudi context, straightened verticals, negative space left for text, no oversaturated "real estate HDR" look. A 10 feels like it belongs in the same shoot as every other Tuba image; a 3 looks like generic stock.

### 8. CTA Visibility (1-10)
Is the single CTA (advertising-checklists.md §11) the second-highest-contrast element after the headline? Can a viewer find it without hunting?

### 9. Readability (1-10)
At actual display size (test at real mobile/OOH scale, not a zoomed-in desktop view), is every word legible? Check against visual-system.md §9.7's "3 seconds" legibility standard for anything meant to be parsed quickly.

### 10. Accessibility (1-10)
Contrast ratios, tap target sizes, no color-only meaning — full checklist at advertising-checklists.md §8.

### 11. Color Usage (1-10)
Correct 60/30/10 ratio (visual-system.md §1.7), Coral used ≤2 times (design-components.md §10), no forbidden color pairings (visual-system.md §1.6).

### 12. Luxury Perception (1-10, *context-dependent*)
For a **standard/accessible-premium asset**, a 10 means it feels premium without feeling exclusive or cold — restraint and craft, not opulence signaling. For an **explicit luxury-segment campaign** (campaign-playbook.md §2.6), a 10 means it earns restraint-and-specificity luxury register (copywriting.md §5.3) without contradicting Tuba's warm core. Score against the *correct* register for this asset's campaign type, not a generic "does it look expensive" instinct.

### 13. Professional Perception (1-10)
Does this look like it came from a licensed, regulated, trustworthy platform? Straightened photography, correct trust badge placement, no typos, no placeholder text.

### 14. Trust Perception (1-10)
Is the FAL/Verified badge present, correctly placed, and legible (design-components.md §2.1, advertising-checklists.md §9-10)? Does the overall craft level itself signal trustworthiness (sloppy design undermines trust language, however well-written)?

### 15. Emotional Clarity (1-10)
Can a viewer name the feeling this asset is going for in one word, within 2 seconds? Cross-check against the brief's stated Emotion (creative-brief-template.md). A 10 unmistakably lands the intended emotion; a 3 feels emotionally flat or mismatched to the brief.

---

## Scoring Sheet Template

```markdown
Asset: _______________
Campaign: _______________
Reviewer: _______________
Date: _______________

1. Hierarchy: __/10
2. Contrast: __/10
3. Spacing: __/10
4. Balance: __/10
5. Brand Consistency: __/10
6. Typography: __/10
7. Photography: __/10
8. CTA Visibility: __/10
9. Readability: __/10
10. Accessibility: __/10
11. Color Usage: __/10
12. Luxury Perception: __/10
13. Professional Perception: __/10
14. Trust Perception: __/10
15. Emotional Clarity: __/10

AVERAGE: __/10
LOWEST SCORE: __/10 (must be ≥6 to pass)

VERDICT: [ ] Pass — proceed to Approval  [ ] Return with notes

Notes on any score below 8:
```

---

## Common Failure Patterns (what usually drags scores down)

| Symptom | Usual root cause | Fix |
|---|---|---|
| Everything feels flat/equal weight | Hierarchy and Contrast both scoring low | Reduce to one focal point; cut competing headlines/CTAs |
| "Looks fine but not like Tuba" | Brand Consistency low despite other dimensions high | Check color hierarchy ratio and logo lockup rule first — this is the most common single miss |
| CTA gets lost | CTA Visibility low | Switch to Coral fill if currently Purple-filled (visual-system.md §5.2 — Purple CTAs are the most common mistake) |
| Feels like generic real estate stock | Photography low | Re-shoot or re-select per visual-system.md §6.1 warmth/authenticity direction |
| Feels cluttered on mobile | Spacing + Readability both low | Re-test at actual mobile size, not desktop zoom level |

## Cross-references
- Where this fits in the process: [campaign-workflows.md §6](campaign-workflows.md)
- Rule source for every dimension: [visual-system.md](visual-system.md), [design-components.md](design-components.md), [iconography.md](iconography.md)
- Companion content-side review: [content-review-checklist.md](content-review-checklist.md)
