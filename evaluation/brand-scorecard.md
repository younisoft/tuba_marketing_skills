# Brand Scorecard

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** the gestalt, whole-asset brand-consistency check — distinct from [copy-scorecard.md](copy-scorecard.md) and [design-scorecard.md](design-scorecard.md), which score their specific craft dimensions. This scorecard answers one question: **does this feel unmistakably like Tuba, as a whole?**
> **Owner:** Brand Owner
> **Review frequency:** semi-annually
> **Use at:** final gate before Approval (advertising-playbook.md §1, Stage 7), or whenever "is this on-brand?" is asked about a finished asset

---

## Scoring Dimensions (1-10 each)

### 1. Consistency
Does this asset use the same colors, typography, voice, and shape language as every other Tuba asset? Reference: [visual-system.md](../advertising-system/visual-system.md), [copywriting.md](../advertising-system/copywriting.md).

### 2. Recognition
Could someone identify this as Tuba with the logo removed, based on color, shape, and voice alone? Reference: [current-brand-analysis.md §13](../knowledge-base/current-brand-analysis.md).

### 3. Trust
Is the FAL/verification signal present, specific, and operationally true? Reference: [trust-framework.md](../brand-intelligence/trust-framework.md).

### 4. Professionalism
Does this read as coming from a licensed, regulated, competent platform — no typos, no placeholder text, no sloppy craft undermining the trust language?

### 5. Luxury Perception
For standard assets: does it feel premium without feeling exclusive/cold? For explicit luxury assets: does it earn restraint-and-specificity register without contradicting Tuba's warm core? Reference: [luxury-framework.md](../brand-intelligence/luxury-framework.md).

### 6. Emotional Clarity
Can a viewer name the intended feeling within 2 seconds? Reference: [advertising-dna.md §4](../advertising-system/advertising-dna.md).

### 7. Visual Hierarchy
Does the eye land on one focal point first, in a deliberate order? Reference: [visual-system.md §1.7, §2.3](../advertising-system/visual-system.md).

### 8. Brand Compliance
Zero violations of the hard boundaries in [CLAUDE_SYSTEM_PROMPT.md §7](../CLAUDE_SYSTEM_PROMPT.md) — this dimension is binary in practice: any violation caps the whole scorecard at REJECT regardless of other scores (see [quality-thresholds.md](quality-thresholds.md)).

## Scoring Sheet

```markdown
Asset: _______________
Reviewer: _______________
Date: _______________

1. Consistency: __/10
2. Recognition: __/10
3. Trust: __/10
4. Professionalism: __/10
5. Luxury Perception: __/10
6. Emotional Clarity: __/10
7. Visual Hierarchy: __/10
8. Brand Compliance: __/10 (any hard-boundary violation = automatic 0, triggers REJECT)

AVERAGE: __/10
VERDICT: per quality-thresholds.md
```

## Relationship to Other Scorecards

This is the **only** scorecard that should be run on every asset regardless of type — [copy-scorecard.md](copy-scorecard.md) and [design-scorecard.md](design-scorecard.md) are craft-specific and complementary, not substitutes. Run Brand Scorecard last, after craft-specific scores, as the final "does this feel like one coherent thing" check.

---

## Best Practices
- Score this with fresh eyes — if you produced the asset, get a second reviewer for this scorecard specifically (self-scoring your own gestalt read is the least reliable check in the system)
- Dimension 8 (Brand Compliance) should be checked first, not last — a hard-boundary violation makes the other seven scores moot

## Common Mistakes
- Treating Brand Compliance as just another 1-10 dimension to average in — it's a gate, not a scale (see [quality-thresholds.md](quality-thresholds.md))
- Running this scorecard as a substitute for copy/design-specific review rather than alongside it

## Cross-references
- Verdict logic: [quality-thresholds.md](quality-thresholds.md)
- Craft-specific scorecards: [copy-scorecard.md](copy-scorecard.md), [design-scorecard.md](design-scorecard.md)
- The full process this fits into: [evaluation-framework.md](evaluation-framework.md)
