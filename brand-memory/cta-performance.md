# CTA Performance — Tuba

> **Layer:** Brand Memory (living)
> **Purpose:** the ranked, evidence-based performance record of CTAs — turns [brand-intelligence/cta-library.md](../brand-intelligence/cta-library.md)'s categorized CTA list into a data-backed ranking, broken out by audience, campaign, and platform.
> **Owner:** Copy lead / Marketing-Performance lead
> **Update trigger:** monthly rollup from all live campaign data
> **Related documents:** [cta-library.md](../brand-intelligence/cta-library.md), [ab-tests.md](ab-tests.md), [messaging-framework.md](../advertising-system/messaging-framework.md)

**Status: no performance data logged yet.** See [README.md §2](README.md).

---

## Ranking Tables (three cuts — maintain all three)

### By Audience

```markdown
| CTA (cta-library.md §) | Audience | Click-through | Completion rate | Sample size | Last updated |
|---|---|---|---|---|---|
| [CTA] | [persona] | [%] | [%] | [#] | [date] |
```

### By Campaign Type

```markdown
| CTA | Campaign type (campaign-playbook.md) | Click-through | Conversion | Sample size | Last updated |
|---|---|---|---|---|---|
| [CTA] | [type] | [%] | [%] | [#] | [date] |
```

### By Platform

```markdown
| CTA | Platform | Click-through | Completion rate | Sample size | Last updated |
|---|---|---|---|---|---|
| [CTA] | [platform] | [%] | [%] | [#] | [date] |
```

## Illustrative Example Row (NOT real data)

```markdown
| "Request your property" | First-Time Buyer | [example]% | [example]% | [example] | [example date] |
```

---

## Best Practices
- Always segment by at least one of the three cuts above — an unsegmented CTA ranking hides the persona/platform interaction effects that actually matter for briefing decisions
- Cross-check any surprising CTA result against [customer-journey.md](../brand-intelligence/customer-journey.md)'s stage-matched intensity logic before trusting it — a low-commitment CTA outperforming a high-commitment one may simply mean the asset was reaching an earlier-stage audience than intended

## Common Mistakes
- Comparing CTA performance across fundamentally different funnel roles (e.g., comparing an Awareness-category CTA's click-through against a Lead-Gen-category CTA's) as if they're competing on the same axis
- Not maintaining all three cuts — a CTA that wins overall may lose badly for a specific high-value audience

## Future Expansion Notes
- A CTA phrasing that consistently outperforms across audience, campaign, and platform cuts is the strongest possible candidate to become the new default in [cta-library.md](../brand-intelligence/cta-library.md) at its semi-annual review
