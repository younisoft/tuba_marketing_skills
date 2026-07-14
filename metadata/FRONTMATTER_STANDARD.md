# Frontmatter Standard — Tuba Knowledge Platform

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** the metadata schema every Markdown file in this platform should carry — makes every document machine-readable for retrieval, staleness-checking, and ownership tracking, not just human-readable.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** annually, or when a new metadata need emerges

---

## 1. The Schema

```yaml
---
title: "Document Title"
description: "One-sentence description of what this document contains."
owner: "Role or name responsible for this document"
status: "active | draft | deprecated | superseded"
priority: "critical | high | medium | low"
domain: "Brand | Marketing | Advertising | Content | Psychology | Campaigns | Design | Operations | AI | Research | Memory"
tags: ["#tag1", "#tag2", "#tag3"]
review_frequency: "e.g., annually, semi-annually, monthly, continuous"
last_updated: "YYYY-MM-DD"
related_documents: ["path/to/doc1.md", "path/to/doc2.md"]
ai_summary: "One or two sentences an AI system can use as a pre-read summary before loading the full document."
---
```

## 2. Field-by-Field Explanation

| Field | Type | Required? | Explanation |
|---|---|---|---|
| **title** | string | Yes | The document's display name — should match its H1, not be a separate invention |
| **description** | string | Yes | One sentence, human-readable, appears in listings/indexes |
| **owner** | string | Yes | The role (not necessarily a named individual) accountable for keeping this current — see each document's own header for the canonical value |
| **status** | enum | Yes | `active` (current, in use) / `draft` (not yet approved) / `deprecated` (being phased out, still linked for history) / `superseded` (replaced — must name the replacement in related_documents) |
| **priority** | enum | Yes | Maps directly to [../knowledge-graph/INDEX.md](../knowledge-graph/INDEX.md)'s Priority column — Critical/High/Medium/Low |
| **domain** | enum | Yes | One value from [../knowledge-graph/TAXONOMY.md §1](../knowledge-graph/TAXONOMY.md)'s eleven root branches — single-parent, never multiple |
| **tags** | array | Yes | 3-6 tags from the controlled vocabulary in [../knowledge-graph/TAGS.md §1](../knowledge-graph/TAGS.md) — never invent an untracked tag |
| **review_frequency** | string | Yes | Matches the cadence stated in the document's own header |
| **last_updated** | date | Yes | ISO format, updated on every substantive edit (not for typo fixes) |
| **related_documents** | array | Recommended | Relative paths to the 3-5 most load-bearing related documents — mirrors the "Cross-references" section already standard in every document body |
| **ai_summary** | string | Recommended for Critical/High priority docs | A 1-2 sentence pre-read summary — lets an AI system decide whether to load the full document without reading it first, directly supporting the retrieval-budget discipline in [../knowledge-graph/ONTOLOGY.md §8](../knowledge-graph/ONTOLOGY.md) |

## 3. Example (fully filled)

```yaml
---
title: "Copywriting System"
description: "The Guidance Framework, voice/tone rules, headline and CTA formulas, and vocabulary for all Tuba copy."
owner: "Copy lead"
status: "active"
priority: "critical"
domain: "Content"
tags: ["#framework", "#execution", "#educational"]
review_frequency: "semi-annually"
last_updated: "2026-07-14"
related_documents: ["advertising-dna.md", "../brand-intelligence/headline-library.md", "../brand-intelligence/cta-library.md"]
ai_summary: "Defines the six-stage Guidance Framework and all copy rules; load before writing any Tuba copy."
---
```

## 4. Adoption Note

At the time this standard was written, most existing documents use the established prose-header convention (`> **Purpose:** ... **Owner:** ... **Review frequency:** ...`) rather than YAML frontmatter — both carry equivalent information. **New documents going forward should use YAML frontmatter** (as demonstrated in every `context-packs/` file) since it's machine-parseable; existing documents should be migrated to frontmatter opportunistically (whenever they're substantively edited for another reason), not as a dedicated retroactive project — see [DOCUMENT_LIFECYCLE.md §4](DOCUMENT_LIFECYCLE.md).

## 5. Why This Matters for AI Retrieval

A consistent frontmatter schema lets any AI system (or a future automated indexing tool) build a query-able document index without parsing full prose — filter by `domain`, `priority`, or `tags` alone to shortlist candidate documents before reading any of them in full. This is the machine-readable backbone underneath [../knowledge-graph/INDEX.md](../knowledge-graph/INDEX.md) and [../routing/TASK_ROUTER.md](../routing/TASK_ROUTER.md), which are currently maintained as hand-written tables reflecting this same data.

---

## Best Practices
- Fill every field, even for a low-priority document — an incomplete frontmatter block is worse than none, since it implies completeness that isn't there
- Keep `ai_summary` genuinely useful as a *filter*, not a marketing description — it should let an AI system correctly decide "not relevant, skip" as often as "relevant, load"

## Common Mistakes
- Letting `last_updated` go stale after a substantive edit — this breaks staleness-detection for anyone relying on it
- Using a `tags` value not present in [../knowledge-graph/TAGS.md](../knowledge-graph/TAGS.md)'s controlled vocabulary

## Cross-references
- Controlled tag vocabulary: [TAG_GUIDE.md](TAG_GUIDE.md), [../knowledge-graph/TAGS.md](../knowledge-graph/TAGS.md)
- File naming rules: [NAMING_CONVENTION.md](NAMING_CONVENTION.md)
- Status transitions over time: [DOCUMENT_LIFECYCLE.md](DOCUMENT_LIFECYCLE.md)
