# Naming Convention — Tuba Knowledge Platform

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** the file- and folder-naming rules that keep the platform navigable as it grows — a predictable naming pattern is itself a retrieval aid.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** annually

---

## 1. Folder Naming

- All lowercase, hyphenated: `brand-intelligence/`, `advertising-system/`, `context-packs/`
- Plural where the folder holds a collection of similar things (`context-packs/`, `personas` conceptually), singular-descriptive where it holds a system (`knowledge-graph/`)
- No abbreviations in folder names — clarity over brevity at the folder level

## 2. File Naming — Two Conventions in Use (both intentional, not inconsistent)

### Convention A: lowercase-hyphenated (most documents)
Used for all documents in `knowledge-base/`, `advertising-system/`, `brand-intelligence/`, `brand-memory/`, `context-packs/`.
Pattern: `topic-name.md`, e.g., `buyer-personas.md`, `campaign-playbook.md`, `market-psychology.md`

### Convention B: UPPERCASE (index/architecture documents only)
Used exclusively for the small set of documents that function as **system-level entry points or architecture references**, to visually distinguish them from topic documents at a glance:
- `AI_KNOWLEDGE_PLATFORM.md` (root)
- `ADVERTISING_IDENTITY_GUIDE.md` (root)
- `CLAUDE_SYSTEM_PROMPT.md` (root)
- All files in `knowledge-graph/` (INDEX.md, ENTITIES.md, RELATIONSHIPS.md, TAXONOMY.md, ONTOLOGY.md, QUERY_GUIDE.md, TAGS.md, AI_INDEX.md)
- All files in `routing/` (TASK_ROUTER.md, TASK_LIBRARY.md, DECISION_TREE.md)
- All files in `metadata/` (FRONTMATTER_STANDARD.md, TAG_GUIDE.md, NAMING_CONVENTION.md, DOCUMENT_LIFECYCLE.md)

**Rule of thumb:** if a document is *about a topic* (a persona, a color rule, a campaign type), it's Convention A. If a document is *about the system itself* (how to navigate, how to classify, how to route), it's Convention B. `README.md` (brand-memory/, brand-evolution/) follows the universal README convention regardless of folder.

## 3. Why Two Conventions Instead of One

A uniform lowercase system would make it harder to visually distinguish "read this to understand a topic" from "read this to understand how to navigate everything" when scanning a directory listing — the UPPERCASE convention is a deliberate, low-cost visual signal for exactly the small number of documents where that distinction matters most.

## 4. Naming Rules Within Convention A

- Descriptive noun or noun-phrase, not a verb phrase: `copywriting.md` not `how-to-write-copy.md`
- Plural for collections: `buyer-personas.md` (multiple personas inside), singular for a single system/framework: `trust-framework.md`
- No version numbers in filenames (`copywriting-v2.md`) — version history belongs in [../brand-evolution/CHANGELOG.md](../brand-evolution/CHANGELOG.md) and [../brand-evolution/VERSIONING.md](../brand-evolution/VERSIONING.md), not the filename
- No dates in filenames — `last_updated` frontmatter field carries that information instead

## 5. New Document Checklist

Before naming a new document:
- [ ] Check [../knowledge-graph/TAXONOMY.md](../knowledge-graph/TAXONOMY.md) — does this genuinely need a new file, or does it belong as a new section in an existing one?
- [ ] Confirm which convention applies (§2)
- [ ] Use lowercase-hyphenated unless it's a system-navigation document
- [ ] Avoid a name that duplicates or closely resembles an existing file's name in a different folder (e.g., don't create a second `copywriting.md` outside `context-packs/` and `advertising-system/` without a clearly differentiating name, as those two are already intentionally same-named across folders — see §6)

## 6. Known Intentional Duplicate Names

`context-packs/copywriting.md` and `advertising-system/copywriting.md` share a filename by design — the context pack is explicitly the compressed version of the full document, and matching names make that relationship self-evident. This is the **only** sanctioned same-name pattern; it should not be extended casually to other file pairs without the same clear compression relationship.

---

## Best Practices
- When naming a new document, ask "would a teammate scanning this folder's file list understand roughly what this contains, without opening it?" — if not, the name needs work
- Keep filenames under ~40 characters where possible for readability in directory listings

## Common Mistakes
- Using UPPERCASE for a topic document "to make it feel more important" — reserve it strictly for the system-navigation set in §2
- Creating near-duplicate filenames across folders without the compression relationship that justifies context-packs/copywriting.md's exception

## Cross-references
- Where a document's title is formally declared: [FRONTMATTER_STANDARD.md](FRONTMATTER_STANDARD.md)
- Full folder structure: [../AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
