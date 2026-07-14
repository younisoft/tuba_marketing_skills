# Campaign Workflows — Tuba

> **Part of:** [Tuba Advertising Identity System](../ADVERTISING_IDENTITY_GUIDE.md) — Execution Layer
> **Use:** the operational sequence for taking any campaign from idea to reported results. [advertising-playbook.md](advertising-playbook.md) explains the *why* behind each stage and assigns ownership/KPIs; this document is the *flow*.

---

## 0. Master End-to-End Workflow

```mermaid
flowchart TD
    A[Idea / Business Trigger] --> B[Campaign Planning]
    B --> C[Creative Briefing]
    C --> D[Research]
    D --> E[Copywriting]
    E --> F[Visual Production]
    F --> G[Internal Review]
    G -->|Fails checklist| E
    G -->|Passes| H[Approval]
    H -->|Rejected| C
    H -->|Approved| I[Publishing]
    I --> J[A/B Testing]
    J --> K[Optimization]
    K --> L[Reporting]
    L --> M[Post-Campaign Retrospective]
    M --> N[Knowledge Capture]
    N -.feeds back into.-> B
```

Every arrow in this diagram is a real handoff between roles — see [advertising-playbook.md §5](advertising-playbook.md) for the ownership matrix.

---

## 1. Campaign Planning

```mermaid
flowchart LR
    A[Business goal identified] --> B{Which campaign type?}
    B -->|Seasonal| C[Check campaign-playbook.md §1]
    B -->|Product/Business| D[Check campaign-playbook.md §2]
    B -->|Marketing function| E[Check campaign-playbook.md §3]
    C --> F[Confirm calendar lock date]
    D --> G[Confirm business trigger e.g. new listing, launch]
    E --> H[Confirm funnel role: awareness/lead-gen/performance]
    F --> I[Draft campaign objective]
    G --> I
    H --> I
    I --> J[Move to Creative Briefing]
```

**Inputs:** a business need (new listing, seasonal moment, product launch, KPI gap)
**Outputs:** a one-paragraph campaign objective + assigned campaign type from [campaign-playbook.md](campaign-playbook.md)

---

## 2. Creative Briefing

```mermaid
flowchart TD
    A[Campaign objective] --> B[Fill creative-brief-template.md]
    B --> C{Audience defined?}
    C -->|No| D[Pull from messaging-framework.md]
    D --> C
    C -->|Yes| E{Emotion + CTA defined?}
    E -->|No| F[Pull from advertising-dna.md + copywriting.md]
    F --> E
    E -->|Yes| G[Brief reviewed by Marketing Manager]
    G -->|Incomplete| B
    G -->|Complete| H[Move to Research]
```

**Owner:** Campaign/Marketing Manager
**Output:** a completed [creative-brief-template.md](creative-brief-template.md) instance, signed off before any copy or design work begins

---

## 3. Research

```mermaid
flowchart LR
    A[Brief received] --> B{Is this a new campaign type or audience?}
    B -->|Yes| C[Check competitor-analysis.md for relevant precedent]
    B -->|No| D[Reuse existing pillar/format from content-system.md]
    C --> E[Check messaging-framework.md for audience pain points]
    D --> E
    E --> F[Check psychological-triggers.md for applicable persuasion angle]
    F --> G[Research summary attached to brief]
    G --> H[Move to Copywriting]
```

**Rule:** research never starts from a blank page — always check whether [competitor-analysis.md](../knowledge-base/competitor-analysis.md), [content-system.md](content-system.md), or [messaging-framework.md](messaging-framework.md) already answers the question before commissioning new research.

---

## 4. Copywriting

```mermaid
flowchart TD
    A[Brief + research] --> B[Draft using Guidance Framework — copywriting.md §1]
    B --> C[Select headline formula — copywriting.md §3]
    C --> D[Select CTA formula — copywriting.md §4]
    D --> E[Write Arabic and English natively, in parallel — not translated]
    E --> F[Self-check against advertising-checklists.md §2 Copy Checklist]
    F -->|Fails| B
    F -->|Passes| G[Submit for Content Review]
```

**Output:** bilingual copy pair, ready for [content-review-checklist.md](content-review-checklist.md)

---

## 5. Visual Production

```mermaid
flowchart TD
    A[Approved copy] --> B[Select layout template — visual-system.md §9]
    B --> C[Apply visual-decision-tree.md for campaign type]
    C --> D[Pull assets from asset-library.md]
    D --> E[Assemble using design-components.md]
    E --> F[Self-check against advertising-checklists.md §1,4,5,6,7 visual checklists]
    F -->|Fails| C
    F -->|Passes| G[Submit for Design Review]
```

---

## 6. Internal Review (Design + Content combined gate)

```mermaid
flowchart TD
    A[Draft asset: copy + visual] --> B[Run design-review-checklist.md — score /10 per dimension]
    A --> C[Run content-review-checklist.md]
    B --> D{Average score ≥ 8/10 AND no dimension below 6?}
    C --> E{All content checklist items pass?}
    D -->|No| F[Return to Visual Production with notes]
    E -->|No| G[Return to Copywriting with notes]
    D -->|Yes| H[Ready for Approval]
    E -->|Yes| H
```

**Quality gate:** an asset does not proceed to Approval unless *both* the design score threshold and content checklist pass — see [design-review-checklist.md §Scoring](design-review-checklist.md) and [advertising-playbook.md §7](advertising-playbook.md) for the exact thresholds and escalation path.

---

## 7. Approval

```mermaid
flowchart LR
    A[Reviewed asset] --> B{Campaign tier?}
    B -->|Standard listing/social post| C[Marketing Manager sign-off]
    B -->|Seasonal/brand campaign| D[Marketing Manager + Brand Owner sign-off]
    B -->|Paid/performance spend above threshold| E[Marketing Manager + Budget Owner sign-off]
    C --> F[Approved — timestamped]
    D --> F
    E --> F
    F --> G[Move to Publishing]
```

---

## 8. Publishing

```mermaid
flowchart TD
    A[Approved asset] --> B[Run advertising-checklists.md §15 Export Checklist]
    B --> C{Platform?}
    C -->|Social| D[Schedule per social-media-playbook.md cadence]
    C -->|Performance| E[Load into ad platform with correct targeting]
    C -->|OOH/Print| F[Send to production vendor with visual-system.md §9.7 specs]
    C -->|Email/WhatsApp| G[Load into CRM/messaging tool]
    D --> H[Publish confirmed]
    E --> H
    F --> H
    G --> H
    H --> I[Move to A/B Testing if applicable]
```

---

## 9. A/B Testing

```mermaid
flowchart TD
    A[Live asset] --> B{Performance channel with sufficient volume?}
    B -->|No| C[Skip to Optimization on qualitative signals]
    B -->|Yes| D[Define single test variable: headline OR image OR CTA — never multiple at once]
    D --> E[Run variants at even split]
    E --> F[Reach statistical confidence threshold]
    F --> G[Declare winner]
    G --> H[Move to Optimization]
    C --> H
```

**Rule:** test one variable at a time. A test that changes the headline *and* the image at once produces a result but no learning.

---

## 10. Optimization

```mermaid
flowchart LR
    A[Test result or live performance data] --> B{Underperforming vs. KPI target?}
    B -->|Yes, weak CTR/engagement| C[Revisit Hook stage — copywriting.md §1]
    B -->|Yes, weak conversion| D[Revisit CTA + Reassure stage — copywriting.md §1, §4]
    B -->|Yes, weak reach| E[Revisit platform-fit — social-media-playbook.md]
    B -->|On/above target| F[Scale budget or extend cadence]
    C --> G[Redeploy]
    D --> G
    E --> G
    F --> G
    G --> H[Move to Reporting]
```

---

## 11. Reporting

```mermaid
flowchart LR
    A[Campaign live/complete] --> B[Pull metrics per advertising-playbook.md §9 KPI set]
    B --> C[Compare against brief's success metrics — creative-brief-template.md]
    C --> D[Compile campaign report]
    D --> E[Share with Marketing Manager + stakeholders]
    E --> F[Move to Post-Campaign Retrospective]
```

---

## 12. Post-Campaign Retrospective

```mermaid
flowchart TD
    A[Campaign report] --> B[What worked? Tag against pillar/format in content-system.md]
    B --> C[What underperformed? Tag against DNA/voice/visual rule if a violation contributed]
    C --> D[Any new competitor move observed? Log to competitor-analysis.md for next research refresh]
    D --> E[Any new proven headline/CTA/visual pattern? Add to ai-prompt-library.md or messaging-framework.md]
    E --> F[Knowledge Capture complete]
    F -.-> G[Feeds next Campaign Planning cycle]
```

**This is the step most teams skip and the one that compounds the most value over time.** Every retrospective should produce at least one concrete update to a living document in this system (a new proven headline pattern, a corrected assumption in messaging-framework.md, a competitor move worth tracking) — a campaign that doesn't update the system was a one-off, not a system improvement.

---

## Cross-references
- Ownership and KPIs for each stage: [advertising-playbook.md](advertising-playbook.md)
- Brief template used at stage 2: [creative-brief-template.md](creative-brief-template.md)
- Checklists used at stages 4-6, 8: [advertising-checklists.md](advertising-checklists.md), [design-review-checklist.md](design-review-checklist.md), [content-review-checklist.md](content-review-checklist.md)
