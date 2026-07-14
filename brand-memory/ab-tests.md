# A/B Tests — Tuba

> **Layer:** Brand Memory (living)
> **Purpose:** the formal, statistically-grounded A/B test log — distinct from [creative-experiments.md](creative-experiments.md), which captures smaller or qualitative tests. Every entry here should have a real sample size and a defined confidence threshold.
> **Owner:** Marketing/Performance lead
> **Update trigger:** whenever a formal A/B test reaches conclusion
> **Related documents:** [campaign-workflows.md §9](../advertising-system/campaign-workflows.md), [creative-experiments.md](creative-experiments.md), [headline-performance.md](headline-performance.md), [cta-performance.md](cta-performance.md)

**Status: no tests logged yet.** See [README.md §2](README.md).

**Governing rule (from campaign-workflows.md §9): test one variable at a time.** A test that changes the headline and the image simultaneously produces a result but no reusable learning — reject any test design that violates this before it runs, not after.

---

## Entry Template

```markdown
## [Test Name] — [date]

**Hypothesis:** [what you believe and why, stated as a testable claim]
**Variant A (control):** [description]
**Variant B:** [description — must differ from A in exactly one variable]
**Sample size / duration:** [numbers]
**Winner:** [A/B/no significant difference]
**Confidence:** [statistical confidence level reached]
**Insights:** [what this teaches beyond just "B won" — the *why*, connected to a brand-intelligence principle if possible]
**Logged by:** [name/role] on [date]
```

## Illustrative Example (NOT a real record)

```markdown
## [ILLUSTRATIVE] CTA test — "Request your property" vs. "See what's out there" — 2027-04

**Hypothesis:** a higher-commitment CTA ("Request your property") will convert better for warm retargeting audiences than a lower-commitment browse CTA, per customer-journey.md §3's stage-matched CTA intensity logic
**Variant A (control):** "See what's out there"
**Variant B:** "Request your property"
**Sample size / duration:** [example only]
**Winner:** [example only]
**Confidence:** [example only]
**Insights:** [example only — e.g., confirms or challenges the customer-journey.md stage-CTA mapping]
**Logged by:** [example] on [example date]
```

---

## Best Practices
- Define the confidence threshold *before* running the test, not after seeing results
- Always connect the insight back to a brand-intelligence hypothesis being tested (e.g., messaging-framework.md, customer-journey.md) — a test result without a theoretical connection is a data point, not knowledge

## Common Mistakes
- Calling a test result before reaching statistical significance, especially under deadline pressure
- Testing a variable that doesn't actually matter to any live strategic question — always start from a real hypothesis, not from "let's just try something"

## Future Expansion Notes
- Aggregate results by test category over time into [headline-performance.md](headline-performance.md) and [cta-performance.md](cta-performance.md); a repeated winning pattern across multiple independent tests is strong promotion evidence for the relevant brand-intelligence document
