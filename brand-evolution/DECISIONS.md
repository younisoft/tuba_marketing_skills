# Decisions — Tuba Knowledge Platform

> **Part of:** [brand-evolution/README.md](README.md)
> **Purpose:** the reasoning record behind significant brand/system-level decisions — a specialized subset of [../brand-memory/knowledge-log.md](../brand-memory/knowledge-log.md) focused specifically on decisions that changed the *platform itself* (its structure, its rules, its scope), as opposed to marketing/business decisions.
> **Owner:** Brand Owner
> **Update trigger:** any MAJOR or MINOR version change ([VERSIONING.md](VERSIONING.md)), or any structural decision worth preserving reasoning for

---

## Entry Template

```markdown
## [Decision title] — [date] — [Version bump, if applicable]

**Decision:** [what was decided]
**Reason:** [why]
**Alternatives considered:** [what else was on the table]
**Final outcome:** [result, updated over time]
**Future review date:** [if applicable]
```

---

## Decision: Layered Platform Architecture (knowledge-base → advertising-system → brand-intelligence/brand-memory → knowledge-graph/context-packs/routing/metadata/evaluation/brand-evolution)

**Date:** 2026-07-14 — v1.0.0 through v1.3.0

**Decision:** build the Tuba brand and advertising documentation as a strictly layered system — foundational discovery, then execution rules, then deep intelligence and living memory, then an AI-native retrieval/evaluation layer on top — rather than one large monolithic brand guide.

**Reason:** a single-document brand guide cannot serve the range of consumers this platform needs to serve (a designer needing a color hex code in 5 seconds vs. an AI system needing full campaign reasoning) without either being too shallow for depth-needing tasks or too heavy for quick lookups. Layering lets each consumer load only what they need — formalized as the retrieval discipline in [../knowledge-graph/ONTOLOGY.md §8](../knowledge-graph/ONTOLOGY.md).

**Alternatives considered:** a single large brand book (rejected — doesn't scale, defeats fast retrieval); a flat set of unorganized topic documents with no navigation layer (rejected — becomes unnavigable past ~20 documents, and this platform has 100+).

**Final outcome:** four layers built successfully (see [TIMELINE.md](TIMELINE.md)); the retrieval layer (Phase 15) was built specifically because the first three layers, while complete, had grown large enough that an AI system needed explicit routing to use them efficiently — validating the layered approach's core premise.

**Future review date:** first annual platform review.

---

## Decision: Brand Memory Must Never Contain Fabricated Data

**Date:** 2026-07-14 — v1.2.0

**Decision:** every `brand-memory/` document ships fully templated but explicitly unpopulated (no invented campaign results, no fake customer quotes, no simulated performance numbers), with illustrative examples clearly labeled as such.

**Reason:** the entire advertising system this platform documents (advertising-dna.md §5, psychological-triggers.md §2) forbids fabricated social proof and unverifiable claims in *customer-facing* content — applying a double standard by fabricating "realistic-sounding" internal data would undermine the system's own credibility and could mislead future strategic decisions built on that invented data.

**Alternatives considered:** populating brand-memory/ with plausible hypothetical data to "demonstrate the system working" (rejected — indistinguishable from real data risk once decoupled from this decision record); leaving brand-memory/ documents completely empty with no template (rejected — provides no guidance on the intended structure).

**Final outcome:** all 17 brand-memory/ documents ship with templates + explicitly-labeled illustrative examples + a clear "Status: no entries logged yet" marker. See [../brand-memory/README.md §2](../brand-memory/README.md).

**Future review date:** N/A — this is a permanent operating principle, not a time-bound decision.

---

## Decision: Two File-Naming Conventions (lowercase-hyphenated vs. UPPERCASE)

**Date:** 2026-07-14 — v1.3.0

**Decision:** use UPPERCASE filenames exclusively for system-navigation/architecture documents (knowledge-graph/, routing/, metadata/ contents, plus the three root meta-documents), lowercase-hyphenated for all topic documents.

**Reason:** as the platform grew past 100 documents, a purely uniform naming scheme made it hard to visually distinguish "documents about a topic" from "documents about navigating the system" in a directory listing — a low-cost, high-signal convention was worth the minor inconsistency.

**Alternatives considered:** fully uniform lowercase (rejected — loses the visual distinction at scale); a prefix convention like `_INDEX.md` (rejected — UPPERCASE is a more standard, widely-recognized signal, e.g., README.md, CHANGELOG.md conventions already in common use).

**Final outcome:** applied consistently across Phase 15's new folders; documented in [../metadata/NAMING_CONVENTION.md](../metadata/NAMING_CONVENTION.md).

**Future review date:** N/A — a stable convention going forward.

---

## Cross-references
- The version scheme these decisions map to: [VERSIONING.md](VERSIONING.md)
- The full change record: [CHANGELOG.md](CHANGELOG.md)
- The broader, non-platform-structural decision journal: [../brand-memory/knowledge-log.md](../brand-memory/knowledge-log.md)
