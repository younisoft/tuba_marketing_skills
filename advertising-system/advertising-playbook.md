# Advertising Playbook — Tuba

> **Part of:** [Tuba Advertising Identity System](../ADVERTISING_IDENTITY_GUIDE.md) — Execution Layer
> **This is the master execution document.** [campaign-workflows.md](campaign-workflows.md) shows the *flow* (as Mermaid diagrams); this document explains the *why*, assigns **ownership**, defines **KPIs**, and sets the **quality gates** and **approval checkpoints** that make the flow actually govern real work rather than being a diagram nobody follows.

---

## 1. The Ten Stages, Explained

```
Idea → Research → Brief → Copy → Design → Review → Approval → Publishing → Optimization → Reporting → Knowledge Capture
```

### Stage 1: Idea
**What happens:** a business trigger (new listing, seasonal moment, KPI gap, product launch) becomes a candidate campaign.
**Owner:** anyone — Marketing Manager, Product, a broker request, a seasonal calendar trigger from [campaign-playbook.md](campaign-playbook.md).
**Gate to pass:** the idea can be stated in one sentence and maps to a real business goal (project-analysis.md §9-10).

### Stage 2: Research
**What happens:** check what's already known before generating anything new — competitor precedent (competitor-analysis.md), existing content pillars (content-system.md), audience data (messaging-framework.md).
**Owner:** Campaign/Marketing Manager, or AI-assisted research against this system's existing documents first.
**Gate to pass:** research summary attached; no campaign starts from a blank page when this system already has an answer.

### Stage 3: Brief
**What happens:** [creative-brief-template.md](creative-brief-template.md) filled completely.
**Owner:** Marketing/Campaign Manager.
**Gate to pass:** [creative-brief-template.md §3](creative-brief-template.md) Brief Quality Gate — objective, audience, message, emotion, CTA, and metrics all present and specific.

### Stage 4: Copy
**What happens:** copy drafted using the Guidance Framework (copywriting.md §1), in Arabic and English natively and in parallel.
**Owner:** Copywriter (human or AI, following [ai-prompt-library.md](ai-prompt-library.md) and [prompt-patterns.md](prompt-patterns.md)).
**Gate to pass:** self-check against [advertising-checklists.md §2](advertising-checklists.md).

### Stage 5: Design
**What happens:** visual production using [visual-decision-tree.md](visual-decision-tree.md) to route to the correct layout/photography/typography/CTA/animation treatment, assembled from [design-components.md](design-components.md) and [asset-library.md](asset-library.md).
**Owner:** Designer (human or AI).
**Gate to pass:** self-check against the visual checklists in [advertising-checklists.md §1, 4-7](advertising-checklists.md).

### Stage 6: Review
**What happens:** formal, dual-track review — [design-review-checklist.md](design-review-checklist.md) (scored 1-10 per dimension) and [content-review-checklist.md](content-review-checklist.md) (pass/fail per item) run in parallel.
**Owner:** a reviewer who did **not** produce the asset (a second set of eyes is mandatory — self-review at Stages 4-5 is not a substitute for Stage 6).
**Gate to pass:** design average score ≥8/10 with no dimension below 6/10, **and** all content checklist items pass. See §4 below for what happens on failure.

### Stage 7: Approval
**What happens:** sign-off from the correct approval tier based on campaign scale (see §5 Ownership Matrix below).
**Owner:** Marketing Manager at minimum; Brand Owner and/or Budget Owner added for higher-tier campaigns.
**Gate to pass:** documented, timestamped approval — not a verbal "looks good."

### Stage 8: Publishing
**What happens:** export and deployment per [advertising-checklists.md §15](advertising-checklists.md), scheduled per [social-media-playbook.md](social-media-playbook.md) cadence or campaign calendar.
**Owner:** Marketing Manager / channel owner.
**Gate to pass:** Export Checklist complete, CTA destination verified live, publish timing confirmed against any seasonal calendar lock (campaign-playbook.md §1).

### Stage 9: Optimization
**What happens:** for performance/paid content, A/B test one variable at a time ([campaign-workflows.md §9](campaign-workflows.md)); for all content, monitor against KPI targets and adjust.
**Owner:** Marketing Manager / Performance lead.
**Gate to pass:** any underperformance is diagnosed to a specific stage of the Guidance Framework (Hook/CTA/Reassure) before a fix is attempted — no blind re-testing.

### Stage 10: Reporting → Knowledge Capture
**What happens:** results compiled against the brief's success metrics; **at least one concrete update** is made to a living system document (new proven pattern, corrected assumption, competitor move logged).
**Owner:** Marketing Manager.
**Gate to pass:** a report that produces zero system updates is incomplete — see [campaign-workflows.md §12](campaign-workflows.md) for why this is treated as a hard requirement, not a nice-to-have.

---

## 2. Ownership Matrix

| Role | Owns | Approves |
|---|---|---|
| **Copywriter** | Stage 4 output | — |
| **Designer** | Stage 5 output | — |
| **Reviewer** (peer, not the asset's own creator) | Stage 6 scoring | Pass/fail gate to Stage 7 |
| **Marketing/Campaign Manager** | Stages 1-3, 8-10 orchestration | All standard campaigns |
| **Brand Owner** | Brand DNA integrity (advertising-dna.md) | Seasonal/brand-tier campaigns |
| **Budget Owner** | Spend efficiency | Paid/performance spend above the org's set threshold |
| **Compliance/Legal contact** | FAL/REGA accuracy | Any asset making a specific licensing/regulatory claim |

*(This matrix assumes standard marketing-team roles — map actual named individuals to these roles in your team's operating documentation; this system defines the checkpoints, not the org chart.)*

---

## 3. Approval Tiers

| Tier | Examples | Required sign-off |
|---|---|---|
| **Standard** | Routine social post, single property listing | Marketing Manager |
| **Seasonal/Brand** | National Day, Ramadan, brand-awareness campaign | Marketing Manager + Brand Owner |
| **Paid/Performance above threshold** | Any campaign with budget above the org's defined threshold | Marketing Manager + Budget Owner |
| **Regulatory-sensitive** | Any asset with a specific FAL/license/financing-term claim | + Compliance contact |

---

## 4. Quality Gates — What Happens on Failure

- **Stage 4/5 self-check fails:** revise before submitting to Stage 6 — do not submit known-failing work "to see what the reviewer says."
- **Stage 6 review fails:** returned to the responsible stage (4 or 5) with specific notes tied to the failing checklist item or scoring dimension — not a vague "make it better."
- **Repeated failure on the same dimension across multiple campaigns:** escalate to a system-level fix — update the relevant advertising-system/ document itself (the rule may be under-specified, not just under-executed) rather than repeatedly re-briefing the same correction.
- **Exception requests** (an asset that can't meet a checklist item for a specific, justified reason): must be explicitly approved by the Brand Owner and documented — silent exceptions erode the system's authority over time.

---

## 5. KPI Reference Set

Map every campaign's success metrics (creative-brief-template.md) to the correct KPI family for its funnel role (content-system.md §3):

| Funnel role | Primary KPIs |
|---|---|
| **Awareness/Brand** | Aided/unaided recall, reach, share of voice, earned media pickup |
| **Authority/Trust content** | Content saves/shares, time-on-page, citation/backlink pickup, market-report downloads |
| **Lead generation** | Cost per qualified request, request-to-match rate, form completion rate |
| **Conversion** | CPL, CPA, listing-to-contact rate |
| **Retention** | Repeat engagement rate, saved-search activity, re-visit frequency |
| **Referral** | Referral conversion rate, cost per referred lead vs. paid acquisition |
| **Performance (paid)** | CTR, CPM, ROAS, CPA — per social-media-playbook.md and visual-system.md §9.6 |
| **Engagement (social)** | Engagement rate (target 4-7% per content-system.md benchmarking against category norms — research/competitor-research-notes.md), save rate, share rate |

**Category benchmark note:** competitor-analysis.md's raw research references a 1-2% baseline engagement rate as a common industry starting point with a 4-7%/90-day improvement target achievable with disciplined execution (research/competitor-research-notes.md) — use this as a directional benchmark, not a guarantee, and recalibrate against Tuba's own baseline once real data exists.

---

## 6. Exceptions & Escalation

Any checklist item can be waived **only** by the Brand Owner (for brand/voice/visual rules) or Compliance contact (for FAL/regulatory rules), and only with a written reason attached to the campaign record. This applies to every checklist referenced in [advertising-checklists.md](advertising-checklists.md).

## 7. Quality Gate Summary Table

| Gate | Where | Pass condition |
|---|---|---|
| Brief Quality Gate | Stage 3 | creative-brief-template.md §3 all boxes checked |
| Copy self-check | Stage 4 | advertising-checklists.md §2 |
| Visual self-check | Stage 5 | advertising-checklists.md §1, 4-7 |
| Design Review score | Stage 6 | design-review-checklist.md avg ≥8, min ≥6 |
| Content Review | Stage 6 | content-review-checklist.md all items pass, zero quick-fail conditions |
| Export Checklist | Stage 8 | advertising-checklists.md §15 |
| Knowledge Capture | Stage 10 | at least one system-document update logged |

---

## 8. How Idea Becomes a Published Campaign — Worked Example

1. **Idea:** Ramadan is approaching; last year's engagement dipped during the transaction slowdown.
2. **Research:** Check campaign-playbook.md §1.3 (financing-term convention) and competitor-analysis.md §10 (no competitor has a strong documented Ramadan campaign — a white space).
3. **Brief:** Objective = sustain engagement + generate qualified leads via a "no down payment until handover" financing offer. Audience = first-time buyers + families (messaging-framework.md §2, §8).
4. **Copy:** Hook = "The home that changes everything, ready before Ramadan ends." Reassure = financing terms stated plainly. CTA = "Request your property." Arabic written natively.
5. **Design:** visual-decision-tree.md §6 (Seasonal → Ramadan branch) — moon icon in brand outline style, warm gathering photography, standard color hierarchy.
6. **Review:** Design scores 8.4/10 average, no dimension below 7. Content checklist passes, no quick-fail conditions.
7. **Approval:** Seasonal tier — Marketing Manager + Brand Owner sign off.
8. **Publishing:** Scheduled across Instagram, Snapchat, TikTok per social-media-playbook.md cadence, timed to the Ramadan content arc (early/mid/late structure, campaign-playbook.md §1.3).
9. **Optimization:** Mid-campaign, CTR is strong but conversion is soft — diagnosed to a weak Reassure stage, financing terms clarified in follow-up creative.
10. **Reporting:** Engagement and lead volume compared against KPI targets (§5 above).
11. **Knowledge Capture:** The clarified financing-terms phrasing that improved conversion is added to copywriting.md's approved vocabulary for future Ramadan campaigns.

## Cross-references
- Process flow diagrams: [campaign-workflows.md](campaign-workflows.md)
- Brief template: [creative-brief-template.md](creative-brief-template.md)
- All checklists referenced: [advertising-checklists.md](advertising-checklists.md), [design-review-checklist.md](design-review-checklist.md), [content-review-checklist.md](content-review-checklist.md)
- The permanent AI behavioral contract that operationalizes this entire playbook: [CLAUDE_SYSTEM_PROMPT.md](../CLAUDE_SYSTEM_PROMPT.md)
