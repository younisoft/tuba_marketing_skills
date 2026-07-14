# Quality Thresholds

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** the single, unified PASS / REVISE / REJECT logic that every scorecard in this folder resolves to — so "what's a good enough score" is answered once, consistently, rather than differently per scorecard.
> **Owner:** Brand Owner
> **Review frequency:** annually

---

## 1. The Three Verdicts

| Verdict | Meaning | What happens next |
|---|---|---|
| **PASS** | Ready to ship as-is | Proceed to Approval ([../advertising-system/campaign-workflows.md §7](../advertising-system/campaign-workflows.md)) |
| **REVISE** | Close, but a specific fix is needed | Return to the producing stage with specific notes tied to the failing dimension |
| **REJECT** | Fundamentally off-brand, non-compliant, or unusable | Escalate — do not attempt a quick patch; rework from an earlier stage |

## 2. Numeric Thresholds (for any 1-10 scorecard)

```
PASS:    Average ≥ 8.0  AND  no single dimension below 6
REVISE:  Average 6.0–7.9  OR  one dimension between 4-5
REJECT:  Average below 6.0  OR  any dimension at 3 or below  OR  any hard-boundary violation
```

This mirrors the threshold already established in [../advertising-system/design-review-checklist.md](../advertising-system/design-review-checklist.md) — extended here to apply uniformly across all scorecards in this folder ([brand-scorecard.md](brand-scorecard.md), [copy-scorecard.md](copy-scorecard.md), [design-scorecard.md](design-scorecard.md), [campaign-scorecard.md](campaign-scorecard.md), [prompt-scorecard.md](prompt-scorecard.md)).

## 3. The Hard-Boundary Override (automatic REJECT, no exceptions)

Regardless of numeric average, these always produce REJECT:
- Any violation of [../CLAUDE_SYSTEM_PROMPT.md §7](../CLAUDE_SYSTEM_PROMPT.md)'s "Things Never Allowed" list
- A missing or fabricated FAL/trust element on a commerce-adjacent asset
- More than one CTA on a single asset
- Fabricated data, statistics, or social proof anywhere in the asset

**Why an override exists:** a numeric average can mask a single catastrophic problem (e.g., a beautifully designed, well-written ad that happens to fabricate a statistic). The hard-boundary override ensures no averaging can launder a genuine violation into a passing score.

## 4. Non-Numeric Verdicts (for checklist-style reviews)

For pass/fail checklists ([../advertising-system/advertising-checklists.md](../advertising-system/advertising-checklists.md), [../advertising-system/content-review-checklist.md](../advertising-system/content-review-checklist.md)):

```
PASS:    Every checklist item checked
REVISE:  1-3 items unchecked, none are Quick-Fail conditions
REJECT:  Any Quick-Fail condition present, OR 4+ items unchecked
```

## 5. Verdict Ownership

| Verdict | Who can issue it |
|---|---|
| PASS | Any trained reviewer per the relevant scorecard's Owner |
| REVISE | Any trained reviewer |
| REJECT (numeric threshold) | Any trained reviewer |
| REJECT (hard-boundary override) | Any reviewer — this is a mechanical trigger, not a judgment call |
| **Exception to any of the above** | Brand Owner (brand/voice rules) or Compliance (regulatory rules) only, per [../advertising-system/advertising-playbook.md §6](../advertising-system/advertising-playbook.md) |

## 6. Escalation Path

A REJECT that recurs on the same dimension across multiple independent assets is a signal the underlying *rule* may be under-specified, not that production keeps failing by chance — escalate to a system-level review (update the relevant advertising-system/ or brand-intelligence/ document) rather than repeatedly re-briefing the same correction. See [../advertising-system/advertising-playbook.md §4](../advertising-system/advertising-playbook.md).

---

## Best Practices
- Apply the hard-boundary override check (§3) *before* computing any numeric average — it's faster and catches the most serious issues first
- Use REVISE, not REJECT, for anything genuinely close and fixable — reserving REJECT for hard-boundary violations and clearly failing scores keeps the distinction meaningful

## Common Mistakes
- Letting a high average talk a reviewer out of flagging a real hard-boundary violation ("but it scored 9/10 everywhere else") — the override exists precisely to prevent this
- Treating REVISE and REJECT as interchangeable — REVISE implies a specific, known fix; REJECT implies a more fundamental rework

## Cross-references
- Applied in every scorecard: [brand-scorecard.md](brand-scorecard.md), [copy-scorecard.md](copy-scorecard.md), [design-scorecard.md](design-scorecard.md), [campaign-scorecard.md](campaign-scorecard.md), [prompt-scorecard.md](prompt-scorecard.md)
- The broader process this fits into: [evaluation-framework.md](evaluation-framework.md)
