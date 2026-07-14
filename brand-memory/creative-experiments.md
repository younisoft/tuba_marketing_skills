# Creative Experiments — Tuba

> **Layer:** Brand Memory (living)
> **Purpose:** the log of every deliberate creative experiment — smaller and more frequent than full campaigns ([campaign-history.md](campaign-history.md)), and distinct from formal statistical [ab-tests.md](ab-tests.md) in that experiments here may be qualitative or too small-sample for statistical confidence.
> **Owner:** Marketing/Campaign Manager, with Design/Copy lead input
> **Update trigger:** whenever a deliberate creative variation is tried, regardless of scale
> **Related documents:** [ab-tests.md](ab-tests.md), [visual-decision-tree.md](../advertising-system/visual-decision-tree.md), [copywriting.md](../advertising-system/copywriting.md)

**Status: no experiments logged yet.** See [README.md §2](README.md).

---

## Experiment Categories

| Category | What's tested |
|---|---|
| Headline tests | Which formula (headline-library.md) performs best for a given context |
| Photography tests | Style, composition, or subject variations (visual-system.md §6) |
| CTA tests | Which CTA (cta-library.md) drives more action for a given audience |
| Animation tests | Motion treatment variations (visual-system.md §8) |
| Layout tests | Template/composition variations (visual-decision-tree.md) |
| Copy tests | Register, length, or structural variations (copywriting.md) |
| Timing tests | Send-time, publish-day, or campaign-length variations |
| Audience tests | Persona-targeting variations for the same core creative |

## Entry Template

```markdown
## [Experiment Name] — [Category] — [date]

**What was tested:** [specific variation]
**Why:** [what question this was meant to answer]
**Method:** [how it was run — e.g., sequential test, small-sample comparison, qualitative observation]
**Result:** [what happened]
**Confidence level:** [low/medium/high — note if sample size was too small for real statistical confidence; if it warrants formal A/B testing, escalate to ab-tests.md]
**Next step:** [what this suggests trying next]
**Logged by:** [name/role] on [date]
```

## Illustrative Example (NOT a real record)

```markdown
## [ILLUSTRATIVE] Headline formula comparison — Headline test — 2027-04

**What was tested:** "The Open Dream" formula vs. "The Concrete Number" formula for the same First-Time Buyer carousel
**Why:** to see which headline-library.md §1/§3 formula better suits this specific audience/format combination
**Method:** sequential test, two weeks each, same audience targeting
**Result:** [example only]
**Confidence level:** [example only]
**Next step:** [example only — e.g., "run a formal A/B test if the difference looks meaningful"]
**Logged by:** [example] on [example date]
```

---

## Best Practices
- Log experiments even when inconclusive — a null result is still useful institutional memory
- Escalate any experiment with a promising but statistically uncertain result into a formal [ab-tests.md](ab-tests.md) entry rather than treating a small-sample win as proven

## Common Mistakes
- Only logging experiments that "worked" — creates a false record of the team's actual hit rate
- Changing more than one variable at once and still calling it a clean experiment (campaign-workflows.md §9's one-variable rule applies here too)

## Future Expansion Notes
- Recurring experiment categories with consistent results should graduate into a standing rule in the relevant advertising-system/ document, cited back to the specific experiments that proved it
