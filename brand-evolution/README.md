# Brand Evolution — README

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** this folder documents how the Tuba brand and its knowledge platform change over time — distinct from [brand-memory/](../brand-memory/), which logs campaign-level evidence and day-to-day learning. Brand Evolution tracks changes to **the system itself**: rule changes, guideline updates, versioning, and the historical timeline.
> **Owner:** Brand Owner
> **Review frequency:** whenever a system-level change occurs; full folder review annually

---

## 1. How This Folder Differs from Brand Memory

| | brand-memory/ | brand-evolution/ |
|---|---|---|
| **Tracks** | Campaign results, tests, feedback, day-to-day decisions | Changes to the brand system/guidelines themselves |
| **Granularity** | Every campaign, every test | Only changes that alter a rule, add/retire a document, or shift strategy |
| **Update frequency** | Continuous | Only when a real system-level change happens |
| **Feeds** | Promotes patterns into brand-intelligence/ | Documents *why and when* brand-intelligence/advertising-system rules actually changed |

**Relationship:** a pattern proven repeatedly in brand-memory/ (e.g., in [lessons-learned.md](../brand-memory/lessons-learned.md)) that gets promoted into a static document is exactly the kind of event this folder should record — [DECISIONS.md](DECISIONS.md) captures the decision to make that change, [CHANGELOG.md](CHANGELOG.md) records that it happened.

## 2. Files in This Folder

| File | Purpose |
|---|---|
| [CHANGELOG.md](CHANGELOG.md) | Chronological, version-stamped record of every substantive change to the platform |
| [DECISIONS.md](DECISIONS.md) | The reasoning behind significant brand/system decisions — a specialized subset of [knowledge-log.md](../brand-memory/knowledge-log.md) focused specifically on decisions that changed the system itself |
| [TIMELINE.md](TIMELINE.md) | The brand's historical narrative — from founding through each platform phase |
| [VERSIONING.md](VERSIONING.md) | How the platform's version numbers work and what triggers a version bump |
| [ROADMAP.md](ROADMAP.md) | Planned future expansions — what's intentionally not built yet |

## 3. How Changes Are Approved

| Change type | Approval required |
|---|---|
| Typo/clarity fix, no rule change | Any contributor, no formal approval needed |
| New document addition | Knowledge Platform maintainer, per [../metadata/DOCUMENT_LIFECYCLE.md §2](../metadata/DOCUMENT_LIFECYCLE.md) |
| A rule change within an existing document (not foundational) | The document's stated Owner |
| A change to advertising-dna.md or current-brand-analysis.md (foundational layer) | Brand Owner, logged in [DECISIONS.md](DECISIONS.md) |
| A visual identity change (colors, logo) | Brand Owner + official brand guideline update — see [../knowledge-base/current-brand-analysis.md](../knowledge-base/current-brand-analysis.md)'s own supersession rule |

## 4. How History Is Preserved

- **Nothing is deleted** — deprecated/superseded documents are archived per [../metadata/DOCUMENT_LIFECYCLE.md §7](../metadata/DOCUMENT_LIFECYCLE.md), never removed outright
- **Every significant decision is traceable** to its reasoning via [DECISIONS.md](DECISIONS.md), cross-linked to the [CHANGELOG.md](CHANGELOG.md) entry it produced
- **The full platform's build history** is preserved in [TIMELINE.md](TIMELINE.md) as a permanent record of how the system reached its current state

## 5. Review Process

Any proposed system-level change should be checked against:
1. Does it contradict advertising-dna.md's Brand Promise or Principles? (If yes, it needs Brand Owner sign-off regardless of scope)
2. Is there brand-memory/ evidence supporting it, or is it a judgment call? (Evidence-backed changes are lower-risk)
3. Does it require updating [CLAUDE_SYSTEM_PROMPT.md](../CLAUDE_SYSTEM_PROMPT.md) to stay in sync? (Any Non-Negotiable or hard-boundary change does)

---

## Cross-references
- The living campaign/learning record this folder complements: [../brand-memory/README.md](../brand-memory/README.md)
- The architecture this folder is part of: [../AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
