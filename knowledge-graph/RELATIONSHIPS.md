# Knowledge Graph — Relationships

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** the complete relationship graph connecting every [entity](ENTITIES.md) in the Tuba knowledge platform — represented as Mermaid diagrams so both humans and AI systems can trace "what feeds what" without reading every document.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** whenever a new document or entity relationship is introduced

---

## 1. The Persona-to-Execution Pipeline

The core creative-production chain — how understanding an audience becomes a shipped, evaluated asset:

```mermaid
flowchart TD
    A[Persona<br/>buyer/seller/broker/developer/investor-personas.md] --> B[Pain Points & Objections]
    B --> C[Emotional Triggers<br/>emotional-keywords.md]
    C --> D[Messaging Framework<br/>advertising-system/messaging-framework.md]
    D --> E[Headline Library<br/>brand-intelligence/headline-library.md]
    D --> F[CTA Library<br/>brand-intelligence/cta-library.md]
    E --> G[Campaign Ideas<br/>brand-intelligence/campaign-ideas.md]
    F --> G
    G --> H[AI Prompt Library<br/>advertising-system/ai-prompt-library.md]
    H --> I[Advertising Playbook<br/>advertising-system/advertising-playbook.md]
    I --> J[Published Content]
    J --> K[Campaign History<br/>brand-memory/campaign-history.md]
    K -.promotion loop.-> A
```

## 2. Document Layer Dependency Graph

How the four major layers depend on each other:

```mermaid
flowchart LR
    subgraph L1[Layer 1: knowledge-base/]
        A1[project-analysis.md]
        A2[current-brand-analysis.md]
        A3[competitor-analysis.md]
    end
    subgraph L2[Layer 2: advertising-system/]
        B1[advertising-dna.md]
        B2[visual-system.md / copywriting.md / etc.]
        B3[checklists / workflows / AI prompts]
    end
    subgraph L3[Layer 3: brand-intelligence/]
        C1[personas / psychology / language]
        C2[creative libraries]
        C3[strategic frameworks]
    end
    subgraph L4[Layer 4: brand-memory/]
        D1[logs and living records]
    end

    L1 --> B1
    B1 --> B2
    B2 --> B3
    L1 --> C1
    B1 --> C3
    C1 --> C2
    L3 --> D1
    L2 --> D1
    D1 -.confirmed patterns promote up.-> L3
```

## 3. Content Production Relationship Graph

```mermaid
flowchart TD
    P[Persona] --> M[Messaging Framework]
    M --> B[Creative Brief]
    B --> R[Research: competitor-analysis.md + brand-memory]
    R --> CW[Copy: Guidance Framework]
    R --> DS[Design: Visual Decision Tree]
    CW --> H[Headline + CTA selection]
    DS --> V[Visual/Icon/Layout selection]
    H --> AS[Asset]
    V --> AS
    AS --> REV[Review: Design + Content Scorecards]
    REV -->|pass| APP[Approval]
    REV -->|fail| CW
    APP --> PUB[Publishing]
    PUB --> PERF[Performance Data]
    PERF --> HP[headline-performance.md / cta-performance.md]
    HP -.-> M
```

## 4. Trust & Compliance Relationship Graph

```mermaid
flowchart LR
    REGA[REGA Regulation] --> FAL[FAL License Entity]
    FAL --> TB[Trust Badge — design-components.md]
    TB --> PC[Property Content]
    TB --> AC[Agent/Broker Content]
    TF[trust-framework.md] --> TB
    TF --> CL[Compliance Checklist — advertising-checklists.md §10]
    CL --> REV2[Every commerce-adjacent Review]
    REV2 -->|violation| ESC[Escalate to Compliance — advertising-playbook.md §6]
```

## 5. Memory Feedback Loop (the system's learning cycle)

```mermaid
flowchart TD
    K1[Static Knowledge<br/>brand-intelligence/] --> C1[Applied in a Campaign]
    C1 --> L1[Logged<br/>brand-memory/campaign-history.md]
    L1 --> W{Won or Failed?}
    W -->|Won| WC[winning-campaigns.md]
    W -->|Failed| FC[failed-campaigns.md]
    WC --> INS[marketing-insights.md]
    FC --> INS
    INS --> LL{Pattern confirmed 3+ times?}
    LL -->|Yes| LES[lessons-learned.md]
    LL -->|No, still emerging| INS
    LES --> PROMO[Promoted into brand-intelligence/ at next review]
    PROMO --> K1
```

## 6. Evaluation & Quality Gate Relationship Graph

```mermaid
flowchart LR
    ASSET[Any Asset] --> SC{Which scorecard?}
    SC -->|Brand-wide| BS[brand-scorecard.md]
    SC -->|Copy| CS[copy-scorecard.md]
    SC -->|Design| DS[design-scorecard.md]
    SC -->|Campaign| CMS[campaign-scorecard.md]
    SC -->|AI Prompt| PS[prompt-scorecard.md]
    BS --> QT[quality-thresholds.md]
    CS --> QT
    DS --> QT
    CMS --> QT
    PS --> QT
    QT -->|PASS| SHIP[Ship]
    QT -->|REVISE| BACK[Return to producer]
    QT -->|REJECT| ESC2[Escalate — evaluation-framework.md]
```

## 7. AI Retrieval Relationship Graph

How an AI assistant should traverse the graph for any incoming task:

```mermaid
flowchart TD
    TASK[Incoming Task] --> AII[AI_INDEX.md]
    AII --> TR[TASK_ROUTER.md]
    TR --> CP[Relevant Context Pack]
    CP -->|needs more depth| FULL[Full source documents]
    CP -->|sufficient| GEN[Generate output]
    GEN --> SELFCHECK[CLAUDE_SYSTEM_PROMPT.md §11 self-review]
    SELFCHECK --> EVAL[Relevant Scorecard]
    EVAL -->|PASS| DELIVER[Deliver to user]
    EVAL -->|REVISE| GEN
```

---

## 8. Relationship Type Legend

| Relationship type | Meaning | Example |
|---|---|---|
| **informs** | One entity's content shapes another's decisions | Persona informs Messaging Framework |
| **produces** | One entity generates instances of another | Campaign produces Content |
| **belongs-to** | Membership/categorization | Persona belongs-to Audience |
| **governs** | One entity constrains what's valid for another | Rule governs Asset |
| **feeds** | One entity's output becomes another's input | Performance Data feeds Headline Performance |
| **promotes-to** | A Memory pattern becomes Intelligence | Lessons Learned promotes-to Brand Intelligence |
| **evaluates** | A Scorecard entity assesses another | Copy Scorecard evaluates Content |

## Best Practices
- When adding a new document, place it in the relevant Mermaid graph above (or add a new graph) so its dependencies are traceable, not just described in prose
- Treat §5 (Memory Feedback Loop) as the single most important diagram in this file — it's the mechanism that keeps the entire platform from going stale

## Common Mistakes
- Adding a new document without connecting it to at least one existing relationship graph — an orphaned document is invisible to AI retrieval logic
- Treating relationships as one-directional when they're actually loops (especially the Memory→Intelligence promotion cycle)

## Cross-references
- Entity definitions: [ENTITIES.md](ENTITIES.md)
- How this maps to retrieval strategy: [QUERY_GUIDE.md](QUERY_GUIDE.md), [../routing/TASK_ROUTER.md](../routing/TASK_ROUTER.md)
