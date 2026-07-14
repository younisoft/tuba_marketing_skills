# Roadmap — Tuba Knowledge Platform

> **Part of:** [brand-evolution/README.md](README.md)
> **Purpose:** what's intentionally not built yet, and why — so a future contributor doesn't mistake an absence for an oversight.
> **Owner:** Brand Owner / Knowledge Platform maintainer
> **Review frequency:** quarterly

---

## 1. Deliberately Deferred (not gaps — sequencing decisions)

| Item | Why deferred | Trigger to build it |
|---|---|---|
| Populated `brand-memory/` entries | No real campaigns have run under this system yet — fabricating entries would violate the platform's own honesty standard (see [DECISIONS.md](DECISIONS.md)) | The first real campaign, test, or decision — see [../brand-memory/README.md](../brand-memory/README.md) |
| CMYK/Pantone print-production sign-off | Documented as calculated/nearest-match values pending an actual printer draw-down verification ([visual-system.md §1.1](../advertising-system/visual-system.md)) | First real print production run |
| Full icon library gap-fill (map pin, verified shield, apartment/villa icons, etc.) | Prioritized roadmap already exists ([iconography.md §6](../advertising-system/iconography.md)) but production wasn't commissioned as part of documentation | Design resourcing decision |
| Photography/video asset library population | [asset-library.md](../advertising-system/asset-library.md) specifies the standard; actual shoots weren't part of this documentation engagement | Production budget allocation |
| Automated tooling built on the metadata/tagging schema | [FRONTMATTER_STANDARD.md](../metadata/FRONTMATTER_STANDARD.md) is designed to be machine-parseable, but no indexing tool has been built against it yet | Engineering resourcing for a documentation-search tool |

## 2. Candidate Future Expansions

These are plausible next layers, not committed work — listed so future planning starts from an informed baseline rather than rediscovering the same ideas:

- **A localization/dialect expansion** if Tuba expands marketing emphasis into specific regional Saudi dialects beyond the current neutral Gulf register ([saudi-real-estate-language.md §11](../brand-intelligence/saudi-real-estate-language.md) already flags regional differences as a known area)
- **A dedicated App Store/Product Marketing context pack** if app-store optimization becomes a larger, recurring workstream (currently covered lightly via [routing/TASK_ROUTER.md](../routing/TASK_ROUTER.md) row 93)
- **An automated evaluation pipeline** wiring the [evaluation/](../evaluation/) scorecards into an actual CI-style check on new creative, rather than a manual review process
- **A second language platform pack** if Tuba's English-language investment/international-buyer content (a confirmed white-space opportunity, [competitor-analysis.md §2](../knowledge-base/competitor-analysis.md)) grows into a large enough workstream to warrant its own context pack beyond the current persona-level coverage

## 3. Explicitly Out of Scope (not roadmap items — deliberate boundaries)

- This platform does not generate final production assets (images, videos, code) — it generates the *specifications and copy* that guide human or downstream-AI production
- This platform does not include actual customer PII, real contract terms, or live pricing data — those live in Tuba's operational systems, not the brand knowledge platform
- This platform's brand-memory/ layer will never contain fabricated data, even for demonstration purposes — this is permanent, not a phase-based limitation (see [DECISIONS.md](DECISIONS.md))

---

## Best Practices
- Check this document before proposing "new" work — it may already be a known, sequenced future item rather than an oversight
- Update §1's "Trigger" column honestly — a vague trigger ("when we have time") is not a real trigger

## Common Mistakes
- Treating an unpopulated brand-memory/ file as a bug to fix immediately with placeholder data — it's a deliberate, documented state (§1, [DECISIONS.md](DECISIONS.md))
- Building toward a §2 candidate expansion without confirming it's still relevant — review quarterly, don't treat this list as static commitments

## Cross-references
- The reasoning behind the deferred items: [DECISIONS.md](DECISIONS.md)
- The full platform architecture this roadmap extends: [../AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
