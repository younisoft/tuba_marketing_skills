# Knowledge Graph — Master Index

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md) — the architecture document this index serves
> **Purpose:** the master navigation map of every document in the Tuba knowledge platform, grouped by domain. This is the "table of contents for the whole company's brand brain" — use it to find *which document* answers a question before reading anything in full.
> **Owner:** Brand Owner / Knowledge Platform maintainer
> **Review frequency:** whenever a document is added, retired, or re-scoped

**How to read the tables below:** Priority = how foundational the document is to correct output (Critical/High/Medium). AI Importance = how an AI assistant should treat it (**Always-load** = load into context for nearly any Tuba task; **Task-load** = load only when the specific task calls for it, see [QUERY_GUIDE.md](QUERY_GUIDE.md) and [../routing/TASK_ROUTER.md](../routing/TASK_ROUTER.md); **Reference-only** = consult when cited by another document, rarely a first load).

---

## Domain: Brand

| Document | Purpose | Owner | Dependencies | Priority | AI Importance |
|---|---|---|---|---|---|
| [knowledge-base/project-analysis.md](../knowledge-base/project-analysis.md) | Who Tuba is, market, audience, opportunity | Brand Owner | Source PDFs/SVGs | Critical | Always-load |
| [knowledge-base/current-brand-analysis.md](../knowledge-base/current-brand-analysis.md) | Official logo/asset audit, immutable rules | Brand Owner | project-analysis.md | Critical | Always-load |
| [knowledge-base/competitor-analysis.md](../knowledge-base/competitor-analysis.md) | Saudi real estate competitive landscape | Marketing Strategy | research/competitor-research-notes.md | Critical | Always-load |
| [advertising-system/advertising-dna.md](../advertising-system/advertising-dna.md) | Brand promise, principles, archetype, voice | Brand Owner | project-analysis.md, current-brand-analysis.md, competitor-analysis.md | Critical | Always-load |
| [brand-intelligence/brand-positioning-framework.md](../brand-intelligence/brand-positioning-framework.md) | Formal positioning statement + map | Brand Owner | advertising-dna.md, competitor-analysis.md | High | Task-load |

## Domain: Marketing (Psychology, Personas, Journey)

| Document | Purpose | Owner | Dependencies | Priority | AI Importance |
|---|---|---|---|---|---|
| [brand-intelligence/market-psychology.md](../brand-intelligence/market-psychology.md) | How Saudi RE customers think | Brand Strategy | project-analysis.md | High | Task-load |
| [brand-intelligence/customer-journey.md](../brand-intelligence/customer-journey.md) | 6-stage journey map | Marketing Strategy | personas, decision-triggers.md | High | Task-load |
| [brand-intelligence/decision-triggers.md](../brand-intelligence/decision-triggers.md) | What moves a decision forward | Marketing Strategy | market-psychology.md | Medium | Task-load |
| [brand-intelligence/buyer-personas.md](../brand-intelligence/buyer-personas.md) | 7 buyer sub-personas | Marketing Strategy | messaging-framework.md | Critical | Task-load |
| [brand-intelligence/seller-personas.md](../brand-intelligence/seller-personas.md) | 5 seller sub-personas | Marketing Strategy | messaging-framework.md | High | Task-load |
| [brand-intelligence/broker-personas.md](../brand-intelligence/broker-personas.md) | 5 broker sub-personas | Marketing Strategy | messaging-framework.md | High | Task-load |
| [brand-intelligence/developer-personas.md](../brand-intelligence/developer-personas.md) | 4 developer sub-personas | Marketing Strategy | messaging-framework.md | Medium | Task-load |
| [brand-intelligence/investor-personas.md](../brand-intelligence/investor-personas.md) | 5 investor sub-personas | Marketing Strategy | messaging-framework.md | High | Task-load |
| [advertising-system/messaging-framework.md](../advertising-system/messaging-framework.md) | Audience × Goal × Emotion × CTA matrix | Marketing Strategy | project-analysis.md §8 | Critical | Always-load |

## Domain: Advertising (Visual & Content Systems)

| Document | Purpose | Owner | Dependencies | Priority | AI Importance |
|---|---|---|---|---|---|
| [advertising-system/visual-system.md](../advertising-system/visual-system.md) | Color, type, spacing, layout templates | Design | current-brand-analysis.md | Critical | Always-load |
| [advertising-system/iconography.md](../advertising-system/iconography.md) | Icon rules, categories | Design | current-brand-analysis.md | High | Task-load |
| [advertising-system/design-components.md](../advertising-system/design-components.md) | Reusable component specs | Design | visual-system.md | High | Task-load |
| [advertising-system/content-system.md](../advertising-system/content-system.md) | Content pillars, formats, funnel roles | Content lead | advertising-dna.md | Critical | Always-load |
| [advertising-system/social-media-playbook.md](../advertising-system/social-media-playbook.md) | Platform-by-platform specs | Marketing | content-system.md | Critical | Task-load |
| [advertising-system/campaign-playbook.md](../advertising-system/campaign-playbook.md) | Seasonal + business campaign systems | Marketing Strategy | advertising-dna.md, content-system.md | Critical | Task-load |

## Domain: Copywriting

| Document | Purpose | Owner | Dependencies | Priority | AI Importance |
|---|---|---|---|---|---|
| [advertising-system/copywriting.md](../advertising-system/copywriting.md) | Guidance Framework, voice, formulas, vocabulary | Copy lead | advertising-dna.md | Critical | Always-load |
| [brand-intelligence/headline-library.md](../brand-intelligence/headline-library.md) | Categorized headline formulas | Copy lead | copywriting.md §3 | High | Task-load |
| [brand-intelligence/cta-library.md](../brand-intelligence/cta-library.md) | Full CTA library by purpose | Copy lead | copywriting.md §4 | High | Task-load |
| [brand-intelligence/content-hooks.md](../brand-intelligence/content-hooks.md) | Opening techniques by format | Copy + Design | copywriting.md §1 | High | Task-load |
| [brand-intelligence/storytelling-framework.md](../brand-intelligence/storytelling-framework.md) | 9 narrative models | Content lead | copywriting.md §1 | Medium | Task-load |
| [brand-intelligence/emotional-keywords.md](../brand-intelligence/emotional-keywords.md) | Categorized emotional vocabulary | Copy lead | copywriting.md §8 | Medium | Task-load |
| [brand-intelligence/saudi-real-estate-language.md](../brand-intelligence/saudi-real-estate-language.md) | Colloquial customer language | Copy lead | copywriting.md §7 | High | Task-load |
| [brand-intelligence/market-language.md](../brand-intelligence/market-language.md) | Formal press/investor register | Marketing Comms | copywriting.md §5.2 | Medium | Task-load |
| [brand-intelligence/real-estate-terminology.md](../brand-intelligence/real-estate-terminology.md) | Neutral technical glossary | Content/Compliance | copywriting.md §5.4 | High | Task-load |
| [advertising-system/prompt-patterns.md](../advertising-system/prompt-patterns.md) | Prompt-engineering technique guide | — | copywriting.md | Critical | Always-load (for AI) |
| [advertising-system/ai-prompt-library.md](../advertising-system/ai-prompt-library.md) | Ready-to-run brand-injected prompts | — | prompt-patterns.md | Critical | Task-load |

## Domain: Design

| Document | Purpose | Owner | Dependencies | Priority | AI Importance |
|---|---|---|---|---|---|
| [advertising-system/visual-decision-tree.md](../advertising-system/visual-decision-tree.md) | Routes campaign type → layout/photo/CTA/animation | Design | visual-system.md | Critical | Task-load |
| [brand-intelligence/visual-metaphors.md](../brand-intelligence/visual-metaphors.md) | Symbolic visual language | Design | iconography.md | Medium | Task-load |
| [advertising-system/asset-library.md](../advertising-system/asset-library.md) | Asset category governance + status | Design | visual-system.md §9 | High | Task-load |

## Domain: Psychology

| Document | Purpose | Owner | Dependencies | Priority | AI Importance |
|---|---|---|---|---|---|
| [advertising-system/psychological-triggers.md](../advertising-system/psychological-triggers.md) | Persuasion frameworks + guardrails | Marketing Strategy | advertising-dna.md §5 | Critical | Always-load |
| [brand-intelligence/trust-framework.md](../brand-intelligence/trust-framework.md) | Full trust psychology + signal catalog | Marketing Strategy | advertising-dna.md §8 | High | Task-load |
| [brand-intelligence/luxury-framework.md](../brand-intelligence/luxury-framework.md) | Luxury-segment psychology + rules | Creative Director | copywriting.md §5.3 | Medium | Task-load |

## Domain: Campaigns

| Document | Purpose | Owner | Dependencies | Priority | AI Importance |
|---|---|---|---|---|---|
| [advertising-system/creative-brief-template.md](../advertising-system/creative-brief-template.md) | Reusable brief templates | Marketing Manager | messaging-framework.md | Critical | Task-load |
| [advertising-system/campaign-workflows.md](../advertising-system/campaign-workflows.md) | Mermaid process flows | Marketing Manager | advertising-playbook.md | High | Task-load |
| [brand-intelligence/campaign-ideas.md](../brand-intelligence/campaign-ideas.md) | Generative concept matrix (300+) | Marketing Strategy | campaign-playbook.md | Medium | Task-load |
| [brand-intelligence/swipe-file.md](../brand-intelligence/swipe-file.md) | In-category pattern extraction | Creative Director | competitor-analysis.md | Medium | Task-load |
| [brand-intelligence/creative-inspirations.md](../brand-intelligence/creative-inspirations.md) | Cross-industry inspiration | Creative Director | advertising-dna.md | Low | Reference-only |
| [brand-intelligence/competitor-differentiation.md](../brand-intelligence/competitor-differentiation.md) | Applied differentiation playbook | Marketing Strategy | competitor-analysis.md | High | Task-load |

## Domain: Operations

| Document | Purpose | Owner | Dependencies | Priority | AI Importance |
|---|---|---|---|---|---|
| [advertising-system/advertising-checklists.md](../advertising-system/advertising-checklists.md) | 17 pre-publish checklists | All roles | all execution docs | Critical | Task-load |
| [advertising-system/advertising-playbook.md](../advertising-system/advertising-playbook.md) | Master execution playbook | Marketing Manager | campaign-workflows.md | Critical | Task-load |
| [advertising-system/design-review-checklist.md](../advertising-system/design-review-checklist.md) | 15-dimension design scoring | Design | visual-system.md | High | Task-load |
| [advertising-system/content-review-checklist.md](../advertising-system/content-review-checklist.md) | Copy review + quick-fail conditions | Copy lead | copywriting.md | High | Task-load |

## Domain: Intelligence (see [brand-intelligence/](../brand-intelligence/) — cross-referenced above by function)

All 25 files are listed under their functional domain above (Marketing, Copywriting, Design, Psychology, Campaigns, Brand). This "Intelligence" grouping exists as a folder-level concept — see [TAXONOMY.md](TAXONOMY.md) §2 for the folder-vs-domain distinction.

## Domain: Memory

| Document | Purpose | Owner | Priority | AI Importance |
|---|---|---|---|---|
| [brand-memory/README.md](../brand-memory/README.md) | Governance for the entire memory layer | Brand Owner | Critical | Always-load (for AI) |
| [brand-memory/campaign-history.md](../brand-memory/campaign-history.md) | Permanent campaign database | Marketing Manager | Critical | Task-load |
| [brand-memory/winning-campaigns.md](../brand-memory/winning-campaigns.md) | Curated successes | Marketing Manager | High | Task-load |
| [brand-memory/failed-campaigns.md](../brand-memory/failed-campaigns.md) | No-blame failure record | Marketing Manager | High | Task-load |
| [brand-memory/creative-experiments.md](../brand-memory/creative-experiments.md) | Informal experiment log | Marketing Manager | Medium | Task-load |
| [brand-memory/ab-tests.md](../brand-memory/ab-tests.md) | Formal statistical tests | Performance lead | High | Task-load |
| [brand-memory/copy-library.md](../brand-memory/copy-library.md) | Archive of shipped copy | Copy lead | Medium | Task-load |
| [brand-memory/visual-library.md](../brand-memory/visual-library.md) | Archive of shipped visuals | Design lead | Medium | Task-load |
| [brand-memory/headline-performance.md](../brand-memory/headline-performance.md) | Ranked headline formula data | Copy lead | High | Task-load |
| [brand-memory/cta-performance.md](../brand-memory/cta-performance.md) | Ranked CTA data | Copy lead | High | Task-load |
| [brand-memory/customer-feedback.md](../brand-memory/customer-feedback.md) | Recurring customer language | Marketing Strategy | High | Task-load |
| [brand-memory/marketing-insights.md](../brand-memory/marketing-insights.md) | Insights from own campaigns | Marketing Strategy | High | Task-load |
| [brand-memory/market-observations.md](../brand-memory/market-observations.md) | External market signals | Marketing Strategy | Medium | Task-load |
| [brand-memory/competitor-watch.md](../brand-memory/competitor-watch.md) | Living competitor log | Marketing Strategy | High | Task-load |
| [brand-memory/monthly-retrospectives.md](../brand-memory/monthly-retrospectives.md) | Fixed-cadence synthesis | Marketing Strategy | Medium | Reference-only |
| [brand-memory/lessons-learned.md](../brand-memory/lessons-learned.md) | Curated durable lessons | Brand Owner | Critical | Task-load |
| [brand-memory/knowledge-log.md](../brand-memory/knowledge-log.md) | Every major strategic decision | Brand Owner | Critical | Task-load |

## Domain: Context (AI Context Packs)

| Document | Purpose | Priority | AI Importance |
|---|---|---|---|
| [context-packs/branding.md](../context-packs/branding.md) | Compressed brand context | Critical | Task-load (entry point) |
| [context-packs/advertising.md](../context-packs/advertising.md) | Compressed advertising-system context | Critical | Task-load |
| [context-packs/copywriting.md](../context-packs/copywriting.md) | Compressed copy context | Critical | Task-load |
| [context-packs/social-media.md](../context-packs/social-media.md) | Compressed social context | Critical | Task-load |
| [context-packs/campaigns.md](../context-packs/campaigns.md) | Compressed campaign context | Critical | Task-load |
| [context-packs/performance-marketing.md](../context-packs/performance-marketing.md) | Compressed paid/performance context | High | Task-load |
| [context-packs/design.md](../context-packs/design.md) | Compressed design context | High | Task-load |
| [context-packs/video-production.md](../context-packs/video-production.md) | Compressed video context | Medium | Task-load |
| [context-packs/sales.md](../context-packs/sales.md) | Compressed B2B/sales context | Medium | Task-load |
| [context-packs/seo.md](../context-packs/seo.md) | Compressed SEO context | Medium | Task-load |
| [context-packs/customer-support.md](../context-packs/customer-support.md) | Compressed support context | High | Task-load |

## Domain: Evaluation

| Document | Purpose | Priority | AI Importance |
|---|---|---|---|
| [evaluation/brand-scorecard.md](../evaluation/brand-scorecard.md) | Brand-consistency 1-10 scoring | Critical | Task-load |
| [evaluation/copy-scorecard.md](../evaluation/copy-scorecard.md) | Copy quality scoring | Critical | Task-load |
| [evaluation/design-scorecard.md](../evaluation/design-scorecard.md) | Design quality scoring | Critical | Task-load |
| [evaluation/campaign-scorecard.md](../evaluation/campaign-scorecard.md) | Campaign quality scoring | High | Task-load |
| [evaluation/prompt-scorecard.md](../evaluation/prompt-scorecard.md) | AI prompt quality scoring | High | Task-load |
| [evaluation/quality-thresholds.md](../evaluation/quality-thresholds.md) | PASS/REVISE/REJECT criteria | Critical | Always-load (for AI) |
| [evaluation/review-prompts.md](../evaluation/review-prompts.md) | Reusable AI review prompts | High | Task-load |
| [evaluation/evaluation-framework.md](../evaluation/evaluation-framework.md) | Review stages, ownership, gates | High | Task-load |

## Meta-layer (this folder, plus routing/metadata/brand-evolution)

| Document | Purpose | Priority | AI Importance |
|---|---|---|---|
| [ENTITIES.md](ENTITIES.md) | Every major entity, defined | Critical | Reference-only |
| [RELATIONSHIPS.md](RELATIONSHIPS.md) | The relationship graph | Critical | Reference-only |
| [TAXONOMY.md](TAXONOMY.md) | Knowledge classification hierarchy | High | Reference-only |
| [ONTOLOGY.md](ONTOLOGY.md) | Conceptual model, knowledge flow | High | Reference-only |
| [QUERY_GUIDE.md](QUERY_GUIDE.md) | How to retrieve info for 50+ tasks | Critical | Always-load (for AI) |
| [TAGS.md](TAGS.md) | Unified tagging system | Medium | Reference-only |
| [AI_INDEX.md](AI_INDEX.md) | **The AI's homepage** | Critical | Always-load (for AI, first) |
| [../routing/TASK_ROUTER.md](../routing/TASK_ROUTER.md) | 100+ task-to-document mappings | Critical | Always-load (for AI) |
| [../routing/TASK_LIBRARY.md](../routing/TASK_LIBRARY.md) | Detailed task definitions | High | Task-load |
| [../routing/DECISION_TREE.md](../routing/DECISION_TREE.md) | Mermaid routing decisions | Medium | Reference-only |
| [../metadata/FRONTMATTER_STANDARD.md](../metadata/FRONTMATTER_STANDARD.md) | Metadata schema for all docs | Medium | Reference-only |
| [../brand-evolution/README.md](../brand-evolution/README.md) | How the brand evolves | Medium | Reference-only |

---

## Cross-references
- Start here: [AI_INDEX.md](AI_INDEX.md) for task-first navigation, or [../AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md) for the full architecture
- The relationship structure behind this index: [RELATIONSHIPS.md](RELATIONSHIPS.md)
