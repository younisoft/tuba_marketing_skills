# Review Prompts — Reusable AI Review Templates

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** ready-to-run prompts for having an AI system automatically review a piece of Tuba creative, output format matched to [quality-thresholds.md](quality-thresholds.md)'s PASS/REVISE/REJECT logic.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** semi-annually

**Every prompt below assumes [CLAUDE_SYSTEM_PROMPT.md](../CLAUDE_SYSTEM_PROMPT.md) is already loaded.**

---

## 1. Review an Advertisement

```
Review the following Tuba advertisement against:
- evaluation/brand-scorecard.md (score 1-10 per dimension)
- evaluation/copy-scorecard.md (if copy is present)
- evaluation/design-scorecard.md (if visual direction is described)

Apply the hard-boundary override from evaluation/quality-thresholds.md §3 FIRST,
before any numeric scoring. Return: scores per dimension, average, verdict
(PASS/REVISE/REJECT), and specific notes for any dimension below 8.

[PASTE ADVERTISEMENT]
```

## 2. Review a Campaign

```
Review the following Tuba campaign (brief + assets) against evaluation/campaign-scorecard.md.
Check business alignment, audience fit, creative strength, offer framing (especially
seasonal financing-vs-discount rules per campaign-playbook.md §1.3 if applicable),
message clarity, channel fit, KPI specificity, and expected impact.
Return scores, verdict, and — if REVISE or REJECT — the single most important fix.

[PASTE CAMPAIGN BRIEF + ASSETS]
```

## 3. Review Copy

```
Review the following copy against evaluation/copy-scorecard.md and
advertising-system/content-review-checklist.md's Quick-Fail Conditions.
Check the Quick-Fail conditions FIRST. If none are triggered, score all
10 dimensions. Verify Arabic (if present) was written natively, not translated.
Return scores, verdict, and the corrected copy if verdict is REVISE.

[PASTE COPY]
```

## 4. Review a Design/Visual Concept

```
Review the following design description against evaluation/design-scorecard.md.
Check color ratio (60/30/10), icon treatment consistency, typography hierarchy,
and — if this is a luxury or seasonal asset — the relevant visual-decision-tree.md
branch compliance. Return scores, verdict, and specific fixes for any score below 8.

[PASTE DESIGN DESCRIPTION OR IMAGE]
```

## 5. Review a Landing Page

```
Review the following landing page copy + structure against:
- evaluation/copy-scorecard.md (for all copy blocks)
- evaluation/design-scorecard.md (for layout/visual direction)
- Confirm: ONE CTA type repeated throughout (advertising-dna.md §10), hero →
  value/guide → reassure/trust → social proof (if real) → close structure
  (visual-system.md §9 pattern).
Return a section-by-section verdict, not just one overall score.

[PASTE LANDING PAGE]
```

## 6. Review an Email

```
Review the following email against evaluation/copy-scorecard.md.
Check: subject line ≤8 words and Hook-formula-based (copywriting.md §5.11),
body under 150 words, ONE CTA button, FAL/support footer present.
Return scores, verdict, and a revised subject line if the current one scores below 8.

[PASTE EMAIL]
```

## 7. Review a Video Script

```
Review the following video script against evaluation/copy-scorecard.md
(for spoken/on-screen copy) and context-packs/video-production.md's hook rules
for the specific format (Reel/TikTok/Story/YouTube — specify which).
Check: hook lands within the format's required window (3s Reel, 2s TikTok,
5s YouTube), single CTA at close, motion principles respected if animation
is described (visual-system.md §8).
Return scores, verdict, and specific timestamp-level fixes if REVISE.

[PASTE SCRIPT + FORMAT]
```

## 8. Review a Presentation/Deck

```
Review the following presentation content against evaluation/brand-scorecard.md
and visual-system.md §9.8's structure (Purple/gradient cover → Canvas content
slides with Purple headlines/Coral-only-for-stats → Purple section dividers).
Check for market-language.md register if this is an investor/developer-facing deck.
Return a slide-by-slide verdict.

[PASTE DECK CONTENT]
```

## 9. Review Social Media Content

```
Review the following social post against evaluation/copy-scorecard.md and
context-packs/social-media.md's platform-specific rules for [PLATFORM].
Check: platform-native pacing (not cross-posted identically from another
platform), hook timing for the format, hashtag count/mix, single CTA.
Return scores, verdict, and platform-fit notes specifically.

[PASTE POST + PLATFORM]
```

## 10. Review an AI Prompt (meta-review)

```
Review the following AI prompt against evaluation/prompt-scorecard.md.
Check: Brand Block inclusion, completeness, whether it references living
library documents (headline-library.md, cta-library.md) rather than
hard-coding copy inline, and reusability via [VARIABLE] placeholders.
Return scores, verdict, and a revised version if REVISE.

[PASTE PROMPT]
```

---

## Best Practices
- Always paste the *actual* asset, not a description of it — a review prompt run against a vague summary produces an unreliable verdict
- Chain prompts when reviewing a multi-part asset (e.g., a campaign with copy + design + video) — run each relevant type-specific prompt, then a final Brand Scorecard pass across the whole set

## Common Mistakes
- Skipping the Quick-Fail/hard-boundary check specified at the top of several prompts — always run it first, it's faster and catches the most serious issues
- Using a review prompt as a substitute for human final sign-off on high-stakes (brand/seasonal) campaigns — AI review supports the process defined in [evaluation-framework.md](evaluation-framework.md), it doesn't replace its approval tiers

## Cross-references
- The scorecards these prompts invoke: [brand-scorecard.md](brand-scorecard.md), [copy-scorecard.md](copy-scorecard.md), [design-scorecard.md](design-scorecard.md), [campaign-scorecard.md](campaign-scorecard.md), [prompt-scorecard.md](prompt-scorecard.md)
- Verdict logic: [quality-thresholds.md](quality-thresholds.md)
- The full review process: [evaluation-framework.md](evaluation-framework.md)
