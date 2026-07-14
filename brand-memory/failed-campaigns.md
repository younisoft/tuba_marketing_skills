# Failed Campaigns — Tuba

> **Layer:** Brand Memory (living)
> **Purpose:** the honest, no-blame record of campaigns that didn't work — capturing the learning, not the fault. A failed campaign that's documented well is more valuable to this system than a win that's never analyzed.
> **Owner:** Marketing/Campaign Manager
> **Update trigger:** whenever a campaign in [campaign-history.md](campaign-history.md) clearly misses its KPI targets
> **Related documents:** [campaign-history.md](campaign-history.md), [lessons-learned.md](lessons-learned.md), [advertising-playbook.md §9](../advertising-system/advertising-playbook.md)

**Status: no campaigns logged yet.** See [README.md §2](README.md).

**Governing principle: no blame.** This file exists to build institutional memory, not to evaluate individual performance. Every entry should read as a hypothesis that was tested and disproven, not a mistake someone made — the tone of every entry should be scientific, not disciplinary.

---

## Entry Template

```markdown
## [Campaign Name] — [date]

**Link to full record:** [campaign-history.md entry]
**Hypothesis:** [what the campaign brief assumed would work, and why — link to the original creative-brief-template.md]
**Execution:** [what was actually produced and run — briefly, factually]
**Failure reason:** [the specific, diagnosed cause — not "it didn't perform" but *why*, e.g., "the Hook stage didn't name a real trigger" or "the audience/platform fit was weak"]
**Lessons:** [what this teaches, stated as a generalizable principle where possible]
**Future recommendations:** [what to do differently next time — specific, actionable]
**Logged by:** [name/role] on [date]
```

## Illustrative Example (NOT a real record)

```markdown
## [ILLUSTRATIVE] Generic Awareness Push — 2027-05

**Link to full record:** campaign-history.md
**Hypothesis:** broad-reach brand awareness content across all platforms would lift recognition
**Execution:** a single creative concept, resized without re-pacing, run identically across Instagram, TikTok, and Snapchat
**Failure reason:** violated social-media-playbook.md §11's "never cross-post identically" rule — the TikTok audience specifically disengaged from content paced like a static feed post
**Lessons:** platform-native pacing isn't a nice-to-have, it measurably affects performance even when the underlying message and brand system are correct
**Future recommendations:** always budget for platform-specific re-cuts, even under time pressure; treat social-media-playbook.md §11 as a hard gate, not a guideline
**Logged by:** [example] on [example date]
```

---

## Best Practices
- Diagnose failure to a *specific* stage or rule (Hook, Reassure, platform-fit, targeting) — a vague "it just didn't land" entry produces no reusable learning
- Always propose a specific future recommendation, not just a description of what went wrong

## Common Mistakes
- Treating this file as something to avoid populating (a sign the no-blame culture isn't actually working) — a healthy system logs failures as readily as wins
- Attributing failure to "the audience" or "the platform" generically instead of a specific, correctable execution choice

## Future Expansion Notes
- Any failure reason that recurs across multiple entries is a strong candidate for a new hard rule in the relevant advertising-system/ document — escalate to [lessons-learned.md](lessons-learned.md) and flag for the next system review
