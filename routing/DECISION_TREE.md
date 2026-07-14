# Decision Tree — Task Routing Visualized

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** the visual (Mermaid) counterpart to [TASK_ROUTER.md](TASK_ROUTER.md)'s table and [TASK_LIBRARY.md](TASK_LIBRARY.md)'s definitions — trace an incoming request through these decision trees to arrive at the correct reading order without scanning the full table.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** whenever routing logic changes

---

## 1. Master Routing Decision Tree

```mermaid
flowchart TD
    START[Incoming request] --> Q1{What kind of task is this?}
    Q1 -->|Produce new content/creative| CONTENT[Go to §2]
    Q1 -->|Plan a campaign| CAMPAIGN[Go to §3]
    Q1 -->|Design/visual work| DESIGN[Go to §4]
    Q1 -->|Review/evaluate existing work| REVIEW[Go to §5]
    Q1 -->|Strategic/research question| STRATEGY[Go to §6]
    Q1 -->|Log something real| MEMORY[Go to §7]
    Q1 -->|Navigate/maintain the platform| META[Go to §8]
```

## 2. Content Creation Routing

```mermaid
flowchart TD
    A[Content task] --> B{Which format?}
    B -->|Social post/carousel/Reel/Story| C[context-packs/social-media.md]
    B -->|Property description| D[copywriting.md §5.8 + real-estate-terminology.md]
    B -->|Email/WhatsApp/Push| E[copywriting.md §5.11-5.13]
    B -->|Landing page| F[context-packs/copywriting.md + design.md]
    B -->|Video/YouTube script| G[context-packs/video-production.md]
    C --> H{Which persona?}
    D --> H
    E --> H
    F --> H
    G --> H
    H -->|Specified| I[Load relevant persona file]
    H -->|Not specified| J[Ask, or default to messaging-framework.md's closest general match]
    I --> K{Register?}
    J --> K
    K -->|Standard| L[copywriting.md default voice]
    K -->|Luxury| M[luxury-framework.md]
    K -->|B2B| N[copywriting.md §5.2]
    K -->|Performance/paid| O[copywriting.md §6]
    L --> P[Generate using headline-library.md + cta-library.md]
    M --> P
    N --> P
    O --> P
    P --> Q[Self-review: CLAUDE_SYSTEM_PROMPT.md §11]
    Q --> R[Score: evaluation/copy-scorecard.md]
```

## 3. Campaign Planning Routing

```mermaid
flowchart TD
    A[Campaign task] --> B{Seasonal?}
    B -->|Yes| C{Which occasion?}
    C -->|National Day| D[Check official theme FIRST — campaign-playbook.md §1.1]
    C -->|Ramadan| E[Financing-term rule — campaign-playbook.md §1.3]
    C -->|Other seasonal| F[campaign-playbook.md §1, matching subsection]
    B -->|No| G{Product/business or marketing-function?}
    G -->|Product/business| H[campaign-playbook.md §2, matching subsection]
    G -->|Marketing-function| I[campaign-playbook.md §3, matching subsection]
    D --> J[Fill creative-brief-template.md]
    E --> J
    F --> J
    H --> J
    I --> J
    J --> K[Route each deliverable through §2 Content Creation tree]
    K --> L[campaign-workflows.md full process]
```

## 4. Design & Visual Routing

```mermaid
flowchart TD
    A[Design task] --> B[Check asset-library.md — does this already exist?]
    B -->|Yes| C[Reuse/reference existing asset]
    B -->|No| D[visual-decision-tree.md — route by campaign type]
    D --> E{Which campaign type?}
    E -->|Luxury| F[§1: negative space, editorial photo, outline CTA]
    E -->|Property Showcase| G[§2: card/carousel, warm photo, Coral CTA]
    E -->|Investment/Data| H[§3: stat block, data-viz]
    E -->|Educational| I[§4: carousel/infographic, flat illustration]
    E -->|B2B| J[§5: LinkedIn-native, professional]
    E -->|Seasonal| K[§6: occasion-specific icon pairing]
    E -->|Performance| L[§7: compressed, offer-forward]
    E -->|Awareness/Brand| M[§8: OOH-legibility, highest polish]
    F --> N[Score: evaluation/design-scorecard.md]
    G --> N
    H --> N
    I --> N
    J --> N
    K --> N
    L --> N
    M --> N
```

## 5. Review & Evaluation Routing

```mermaid
flowchart TD
    A[Review task] --> B{What's being reviewed?}
    B -->|Copy only| C[evaluation/copy-scorecard.md]
    B -->|Design only| D[evaluation/design-scorecard.md]
    B -->|Full campaign| E[evaluation/campaign-scorecard.md]
    B -->|AI prompt| F[evaluation/prompt-scorecard.md]
    B -->|Brand consistency check| G[evaluation/brand-scorecard.md]
    C --> H[evaluation/quality-thresholds.md]
    D --> H
    E --> H
    F --> H
    G --> H
    H --> I{Verdict?}
    I -->|PASS| J[Ship]
    I -->|REVISE| K[Return with specific notes]
    I -->|REJECT| L[Escalate — evaluation-framework.md]
```

## 6. Strategy & Research Routing

```mermaid
flowchart TD
    A[Strategic question] --> B{Question type?}
    B -->|Competitor comparison| C[brand-intelligence/competitor-differentiation.md]
    B -->|Positioning| D[brand-intelligence/brand-positioning-framework.md]
    B -->|Audience psychology| E[brand-intelligence/market-psychology.md]
    B -->|Historical decision| F[brand-memory/knowledge-log.md]
    B -->|Recent competitor move| G[brand-memory/competitor-watch.md]
    C --> H{Answer requires more recent data than last research refresh?}
    D --> H
    E --> H
    G --> H
    H -->|Yes| I[Check brand-memory/ living logs first]
    H -->|No| J[Static knowledge-base/ or brand-intelligence/ is sufficient]
    F --> J
```

## 7. Memory & Logging Routing

```mermaid
flowchart TD
    A[Logging task] --> B{What happened?}
    B -->|A campaign completed| C[brand-memory/campaign-history.md]
    C --> D{Won or failed?}
    D -->|Won| E[brand-memory/winning-campaigns.md]
    D -->|Failed| F[brand-memory/failed-campaigns.md]
    B -->|A test concluded| G{Formal statistical or informal?}
    G -->|Formal| H[brand-memory/ab-tests.md]
    G -->|Informal| I[brand-memory/creative-experiments.md]
    B -->|Customer said something| J[brand-memory/customer-feedback.md]
    B -->|A strategic decision was made| K[brand-memory/knowledge-log.md]
    B -->|Nothing real happened yet| L[STOP — do not fabricate an entry. See brand-memory/README.md §2]
```

## 8. Platform Navigation & Maintenance Routing

```mermaid
flowchart TD
    A[Meta/platform task] --> B{What kind?}
    B -->|Find the right document for a task| C[knowledge-graph/AI_INDEX.md or routing/TASK_ROUTER.md]
    B -->|Understand how everything connects| D[knowledge-graph/RELATIONSHIPS.md]
    B -->|Add a new document| E[metadata/FRONTMATTER_STANDARD.md + NAMING_CONVENTION.md]
    B -->|Propose a rule change| F[brand-evolution/DECISIONS.md]
    B -->|Understand the whole architecture| G[../AI_KNOWLEDGE_PLATFORM.md]
```

---

## Best Practices
- Start at §1 (Master Routing) for any ambiguous request — it's designed to sort into exactly one of the seven sub-trees within one decision
- Treat "STOP — do not fabricate" (§7) as a hard stop, not a soft suggestion — this is the same honesty principle enforced throughout brand-memory/

## Common Mistakes
- Jumping straight to a sub-tree without confirming the task type at §1 — a design task routed through the Content tree will miss visual-decision-tree.md entirely
- Treating the diagrams as optional decoration rather than literal, followable logic

## Cross-references
- The table version of this same logic: [TASK_ROUTER.md](TASK_ROUTER.md)
- Task definitions and required inputs: [TASK_LIBRARY.md](TASK_LIBRARY.md)
- The ontological reasoning behind this routing model: [../knowledge-graph/ONTOLOGY.md §8](../knowledge-graph/ONTOLOGY.md)
