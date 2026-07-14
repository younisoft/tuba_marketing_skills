# Prompt Scorecard

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** evaluates an AI prompt itself (not its output) — for new additions to [../advertising-system/ai-prompt-library.md](../advertising-system/ai-prompt-library.md) or any ad hoc prompt built for a Tuba task.
> **Owner:** Copy lead / Knowledge Platform maintainer
> **Review frequency:** semi-annually

---

## Scoring Dimensions (1-10 each)

### 1. Completeness
Does the prompt include everything needed to produce a correct result without follow-up clarification — format, audience, register, language, length constraints?

### 2. Context Quality
Does the prompt include (or reference) the Brand Block (per [prompt-patterns.md §0](../advertising-system/ai-prompt-library.md)) — brand promise, voice, colors, structure, forbidden list? A prompt missing brand context will drift off-brand regardless of how well-written it otherwise is.

### 3. Brand Alignment
Does the prompt actively route the model toward Tuba-specific formulas/rules (headline-library.md, cta-library.md) rather than generic best practices?

### 4. Output Consistency
Would this prompt, run five times, produce five outputs that all clearly belong to the same brand system? A well-built prompt narrows variance without eliminating creative range entirely.

### 5. Maintainability
If a rule changes (a new CTA is added, a color updates), does this prompt reference the rule (e.g., "per cta-library.md") rather than hard-coding it inline where it would go stale?

### 6. Reusability
Is the prompt templated with clear [VARIABLE] placeholders, usable across many real instances, rather than written for one single one-off case?

## Scoring Sheet

```markdown
Prompt: _______________
Reviewer: _______________
Date: _______________

1. Completeness: __/10
2. Context Quality: __/10
3. Brand Alignment: __/10
4. Output Consistency: __/10
5. Maintainability: __/10
6. Reusability: __/10

AVERAGE: __/10
VERDICT: per quality-thresholds.md
```

## What a 10/10 Prompt Looks Like (checklist)

- [ ] Includes or references the Brand Block
- [ ] States format, audience, language, and length explicitly
- [ ] References specific system documents/formulas rather than re-explaining rules inline
- [ ] Uses [VARIABLE] placeholders for anything instance-specific
- [ ] Instructs the model to self-check against [../CLAUDE_SYSTEM_PROMPT.md §11](../CLAUDE_SYSTEM_PROMPT.md) before finalizing

## What a Failing Prompt Looks Like

- No brand context at all — relies entirely on the model's general training
- Hard-codes specific copy/colors/CTAs inline instead of referencing the living library documents (breaks the moment those libraries update)
- So generic it could produce output for any real estate brand, not specifically Tuba

---

## Best Practices
- Score any new prompt before adding it to [../advertising-system/ai-prompt-library.md](../advertising-system/ai-prompt-library.md) — the library should only contain scored, proven prompts
- Re-score existing library prompts whenever a referenced document (e.g., cta-library.md) changes significantly

## Common Mistakes
- Writing a prompt that produces good output once by accident, without the structural elements (§1-6) that make it reliably reusable
- Letting a prompt's inline examples become stale copies of once-current but now-outdated brand copy

## Cross-references
- The prompt library this scorecard governs additions to: [../advertising-system/ai-prompt-library.md](../advertising-system/ai-prompt-library.md)
- The technique guide behind good prompts: [../advertising-system/prompt-patterns.md](../advertising-system/prompt-patterns.md)
- Verdict logic: [quality-thresholds.md](quality-thresholds.md)
