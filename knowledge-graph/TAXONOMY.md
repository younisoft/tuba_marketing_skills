# Knowledge Graph — Taxonomy

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** the formal, single-parent classification tree — every document in the platform belongs to exactly one taxonomy leaf below. Where [INDEX.md](INDEX.md) groups documents loosely for browsing (with a document sometimes relevant to several domains), this document is the authoritative, non-overlapping classification used to generate [TAGS.md](TAGS.md) and to answer "what category is this file, formally?"
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** whenever a new document is added

**Note on folder vs. taxonomy:** the physical folder a file lives in (knowledge-base/, advertising-system/, etc.) is a *storage* decision. The taxonomy below is a *classification* decision. They mostly align but aren't identical — e.g., `advertising-system/psychological-triggers.md` is stored in the execution folder but classified under **Psychology**, not Advertising.

---

## 1. Root Taxonomy

```
Tuba Knowledge Platform
├── 1. Brand
├── 2. Marketing
├── 3. Advertising
├── 4. Content
├── 5. Psychology
├── 6. Campaigns
├── 7. Design
├── 8. Operations
├── 9. AI
├── 10. Research
└── 11. Memory
```

## 2. Full Classification

### 1. Brand
- project-analysis.md
- current-brand-analysis.md
- advertising-dna.md
- brand-positioning-framework.md
- creative-principles.md

### 2. Marketing
- market-psychology.md *(cross-listed conceptually under Psychology §5; classified here as its primary home since its function is audience understanding, not persuasion mechanics)*
- customer-journey.md
- decision-triggers.md
- buyer-personas.md, seller-personas.md, broker-personas.md, developer-personas.md, investor-personas.md
- messaging-framework.md
- competitor-differentiation.md

### 3. Advertising
- visual-system.md
- iconography.md
- design-components.md *(cross-listed under Design §7; classified here as it is a component spec, not a general design rule)*
- content-system.md
- social-media-playbook.md
- campaign-playbook.md
- asset-library.md

### 4. Content
- copywriting.md
- headline-library.md
- cta-library.md
- content-hooks.md
- storytelling-framework.md
- emotional-keywords.md
- saudi-real-estate-language.md
- market-language.md
- real-estate-terminology.md
- ai-prompt-library.md
- prompt-patterns.md
- copy-library.md *(Memory instance, but content-type classified)*

### 5. Psychology
- psychological-triggers.md
- trust-framework.md
- luxury-framework.md

### 6. Campaigns
- creative-brief-template.md
- campaign-workflows.md
- campaign-ideas.md
- swipe-file.md
- creative-inspirations.md
- advertising-playbook.md *(cross-listed under Operations §8; classified here as its primary content is campaign execution, not general operations)*

### 7. Design
- visual-decision-tree.md
- visual-metaphors.md
- design-review-checklist.md
- visual-library.md *(Memory instance, but design-type classified)*

### 8. Operations
- advertising-checklists.md
- content-review-checklist.md
- FRONTMATTER_STANDARD.md, TAG_GUIDE.md, NAMING_CONVENTION.md, DOCUMENT_LIFECYCLE.md (metadata/)
- evaluation-framework.md, quality-thresholds.md (evaluation/)

### 9. AI
- knowledge-graph/ (all 8 files)
- context-packs/ (all 11 files)
- routing/ (all 3 files)
- review-prompts.md, prompt-scorecard.md (evaluation/)
- CLAUDE_SYSTEM_PROMPT.md
- AI_KNOWLEDGE_PLATFORM.md

### 10. Research
- competitor-analysis.md
- research/competitor-research-notes.md
- references/source-assets-index.md
- market-observations.md *(Memory instance, but research-type classified)*
- competitor-watch.md *(Memory instance, but research-type classified)*

### 11. Memory
- brand-memory/README.md
- campaign-history.md, winning-campaigns.md, failed-campaigns.md
- creative-experiments.md, ab-tests.md
- headline-performance.md, cta-performance.md
- customer-feedback.md, marketing-insights.md
- monthly-retrospectives.md, lessons-learned.md, knowledge-log.md
- brand-evolution/ (all 6 files — evolution is a specialized Memory sub-branch, see §3)

## 3. Sub-Taxonomy: Memory Branch Detail

```
11. Memory
├── 11.1 Campaign Records (campaign-history, winning, failed)
├── 11.2 Testing Records (creative-experiments, ab-tests)
├── 11.3 Performance Records (headline-performance, cta-performance)
├── 11.4 Signal Records (customer-feedback, marketing-insights, market-observations, competitor-watch)
├── 11.5 Synthesis Records (monthly-retrospectives, lessons-learned)
├── 11.6 Decision Records (knowledge-log)
└── 11.7 Evolution Records (brand-evolution/README, CHANGELOG, DECISIONS, TIMELINE, VERSIONING, ROADMAP)
```

## 4. Sub-Taxonomy: Evaluation Branch Detail

```
Evaluation (spans Operations §8 and AI §9)
├── Scorecards (brand, copy, design, campaign, prompt)
├── Governance (quality-thresholds, evaluation-framework)
└── Tooling (review-prompts)
```

## 5. On Cross-Listing

A handful of documents genuinely serve two taxonomy branches (noted with *italics* above). The rule: **classify by primary function, note the secondary relevance in the entry itself.** Never list a document under two leaves in the tree in §2 — that would break the single-parent property this taxonomy is designed to guarantee. Use [RELATIONSHIPS.md](RELATIONSHIPS.md) to express the multi-branch connections instead.

---

## Best Practices
- When adding a new document, ask "what is this document's *primary function*?" before placing it — storage-folder convenience is not a valid classification reason (see the folder-vs-taxonomy note above)
- Use this taxonomy, not intuition, when generating tags in [TAGS.md](TAGS.md) — the tag system should trace directly back to this tree

## Common Mistakes
- Classifying a document by its folder location instead of its function (e.g., assuming everything in `advertising-system/` is "Advertising" — psychological-triggers.md is Psychology)
- Cross-listing a document under multiple top-level branches, breaking single-parent classification

## Cross-references
- Entity definitions: [ENTITIES.md](ENTITIES.md)
- The conceptual model this taxonomy sits inside: [ONTOLOGY.md](ONTOLOGY.md)
- Tag generation built from this tree: [TAGS.md](TAGS.md)
