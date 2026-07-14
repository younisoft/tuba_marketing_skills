# Tag Guide — How to Tag a Document

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** the practical, how-to companion to [../knowledge-graph/TAGS.md](../knowledge-graph/TAGS.md) (which holds the tag vocabulary and per-document assignments). This document explains the *process* of tagging correctly.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** whenever the tag vocabulary changes

---

## 1. The Golden Rule

**Always select tags from the controlled vocabulary in [../knowledge-graph/TAGS.md §1](../knowledge-graph/TAGS.md).** Never invent a new tag on the fly — if no existing tag fits, that's a signal to propose a new vocabulary entry (see §4), not to freelance one.

## 2. How Many Tags

3-6 tags per document. Fewer than 3 under-describes the document; more than 6 dilutes precision (the same principle as visual-system.md's "don't stack more than 3 type sizes" — restraint keeps the system usable).

## 3. Tag Selection Process

1. **Start with Domain** — pick the single [../knowledge-graph/TAXONOMY.md](../knowledge-graph/TAXONOMY.md) branch this document belongs to; this typically becomes one implicit "anchor" even though Domain is a separate frontmatter field, not a tag itself
2. **Add Content-pillar or Audience tags** if the document is audience- or pillar-specific (a persona file gets `#buyer` or `#broker`; a general framework document may need none)
3. **Add Function tags** (`#framework`, `#checklist`, `#persona`, `#template`, `#library`, `#playbook`, `#scorecard`, `#log`) — nearly every document needs exactly one of these
4. **Add Layer tag** (`#foundational`, `#execution`, `#intelligence`, `#memory`, `#ai-meta`) — matches which of the platform's major folders/layers this document belongs to
5. **Add Seasonal/Register tags only if genuinely specific** — don't tag a general document with `#ramadan` just because it's mentioned in an example

## 4. Proposing a New Tag

If a genuinely new concept recurs across 2+ documents and no existing tag fits:
1. Check [../knowledge-graph/TAXONOMY.md](../knowledge-graph/TAXONOMY.md) first — the new concept may already have a home under a different name
2. Propose the new tag with its category placement to the Knowledge Platform maintainer
3. Add it to [../knowledge-graph/TAGS.md §1](../knowledge-graph/TAGS.md)'s vocabulary table before using it anywhere
4. Retroactively tag existing documents that should carry it (don't leave it applied to only the newest document)

## 5. Tag Quality Checklist

- [ ] Every tag comes from the controlled vocabulary
- [ ] 3-6 tags total
- [ ] At least one Function tag present
- [ ] At least one Layer tag present
- [ ] No redundant tags (e.g., both `#buyer` and `#firsttimebuyer` when only the more specific one adds value)

---

## Best Practices
- Tag at document creation time — retroactive tagging is far more likely to be skipped or done poorly
- When in doubt between two tags, pick the more specific one — `#firsttimebuyer` beats `#buyer` when the document is genuinely that specific

## Common Mistakes
- Tagging by folder/location instead of actual content (the same mistake flagged in [../knowledge-graph/TAXONOMY.md §5](../knowledge-graph/TAXONOMY.md))
- Over-tagging "just in case" a tag might be useful for retrieval — this degrades precision for everyone

## Cross-references
- The tag vocabulary and per-document assignments: [../knowledge-graph/TAGS.md](../knowledge-graph/TAGS.md)
- Where tags live in a document: [FRONTMATTER_STANDARD.md §2](FRONTMATTER_STANDARD.md)
