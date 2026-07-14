# Versioning — Tuba Knowledge Platform

> **Part of:** [brand-evolution/README.md](README.md)
> **Purpose:** defines how the platform's version numbers work, so [CHANGELOG.md](CHANGELOG.md) entries are consistent and future contributors know what triggers a version bump.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** annually

---

## 1. Scheme: Semantic-Style Versioning (MAJOR.MINOR.PATCH)

The platform uses a semantic-versioning-inspired scheme, adapted for a documentation system rather than software:

| Segment | Bumped when... | Example |
|---|---|---|
| **MAJOR** | A foundational rule changes (Brand Promise, core colors, archetype) — something that would invalidate content produced under the old rule | A rebrand, a new logo, a changed brand promise |
| **MINOR** | A new folder/layer or a substantial set of new documents is added, without changing foundational rules | Adding `brand-intelligence/` and `brand-memory/` (v1.2.0) |
| **PATCH** | A correction, clarification, or small addition within existing documents | Fixing a broken link, correcting a stat, adding one new headline formula |

## 2. What Counts as "The Platform Version"

There is one platform-wide version number, tracked in [CHANGELOG.md](CHANGELOG.md), **not** a separate version per document. Individual documents track their own currency via the `last_updated` frontmatter field ([../metadata/FRONTMATTER_STANDARD.md](../metadata/FRONTMATTER_STANDARD.md)), not a per-document version number — this keeps the system simple: one version for "the platform as a coherent whole," granular dates for "when was this specific document last touched."

## 3. Version History Summary

| Version | Date | Milestone |
|---|---|---|
| v1.0.0 | 2026-07-14 | Knowledge base + advertising-system strategy layer founded |
| v1.1.0 | 2026-07-14 | Advertising operating system (execution layer) added |
| v1.2.0 | 2026-07-14 | Brand Intelligence + Brand Memory layers added |
| v1.3.0 | 2026-07-14 | AI Knowledge Graph, Context Packs, Routing, Metadata, Evaluation, Brand Evolution layers added |

Full detail per version: [CHANGELOG.md](CHANGELOG.md).

## 4. When to Bump MAJOR (rare, high-bar)

A MAJOR bump requires Brand Owner approval and a logged entry in [DECISIONS.md](DECISIONS.md) explaining the change and its trigger (e.g., an official new brand guideline supersedes current-brand-analysis.md). This should be a rare event — the whole point of the foundational layer (knowledge-base/, advertising-dna.md) is stability.

## 5. When to Bump MINOR

Any addition of a new folder, a new document family (e.g., a 6th persona type), or a structurally significant new framework. Does not require Brand Owner approval unless it touches foundational content, but should be logged in [CHANGELOG.md](CHANGELOG.md).

## 6. When to Bump PATCH

Any other real, substantive change — corrections, clarifications, small additions, new examples. Does not require formal approval for non-foundational documents (see [README.md §3](README.md)'s approval table). Purely cosmetic fixes (typos with zero content impact) don't require a version bump at all, just a `last_updated` refresh on the affected document.

---

## Best Practices
- Bump the version and log to CHANGELOG.md in the same edit that makes the change — never batch multiple changes under one vague version bump after the fact
- When unsure whether a change is MINOR or PATCH, err toward PATCH — MINOR should feel like "we added something new," not "we improved something existing"

## Common Mistakes
- Treating every small edit as worthy of a MINOR bump, inflating the version history's signal-to-noise ratio
- Forgetting to log a MAJOR change's reasoning in DECISIONS.md — a MAJOR bump without a linked decision record breaks the traceability this whole folder exists to provide

## Cross-references
- The actual change log this scheme organizes: [CHANGELOG.md](CHANGELOG.md)
- Where MAJOR-bump reasoning is recorded: [DECISIONS.md](DECISIONS.md)
