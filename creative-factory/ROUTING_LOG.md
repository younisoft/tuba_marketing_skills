# Routing Log — Creative Factory

> **Purpose:** a transparent record of exactly which documents were retrieved for this production run, and why — proof the AI Knowledge Platform's retrieval discipline (routing/TASK_ROUTER.md, [`../AI_KNOWLEDGE_PLATFORM.md`](../AI_KNOWLEDGE_PLATFORM.md) §4) actually works under real production load, not just in theory.
> **Rule followed:** load the minimum sufficient context per task, never everything available. Every row below traces to a specific [`routing/TASK_ROUTER.md`](../routing/TASK_ROUTER.md) row.

---

## Shared grounding (read once, used across all 8 campaigns)

These are foundational — re-reading them per campaign would be wasteful; they were loaded once at the start of this production run and referenced throughout.

| Document | Why | TASK_ROUTER row |
|---|---|---|
| [`advertising-system/advertising-dna.md`](../advertising-system/advertising-dna.md) | Every campaign must trace to the Brand Promise, the six-emotion set, the five voice adjectives, and the forbidden-territory list — the strategic center every downstream decision is checked against | Governs all rows |
| [`advertising-system/copywriting.md`](../advertising-system/copywriting.md) | The Guidance Framework (six-stage copy structure), headline/CTA formulas, vocabulary and forbidden-phrase lists — used in every campaign's Copy Direction section | Row 26 |
| [`advertising-system/campaign-playbook.md`](../advertising-system/campaign-playbook.md) | The Objective → Key Message → Channels → Visual Notes → Timing → What Not To Do structure for every campaign category this brief covers | Rows 27–45 |
| [`advertising-system/creative-brief-template.md`](../advertising-system/creative-brief-template.md) | The brief structure and its Quality Gate (§3) — every campaign file in `campaigns/` is a filled instance of this template | Row 26 |
| [`advertising-system/messaging-framework.md`](../advertising-system/messaging-framework.md) | The Audience × Pain Point × Message × Proof × CTA × Emotion matrix — the primary audience row for every campaign is named from here | Cross-referenced by rows 46–60 |
| `evaluation/quality-thresholds.md`, `evaluation/brand-scorecard.md`, `evaluation/copy-scorecard.md`, `evaluation/design-scorecard.md`, `evaluation/campaign-scorecard.md` | The exact scoring dimensions and PASS/REVISE/REJECT logic every campaign's Brand Review section applies | Rows 71–78 |
| [`advertising-system/visual-system.md`](../advertising-system/visual-system.md) §1–9 | Hex values, typography, spacing/radius/shadow tokens, and the 9 canonical format specs (§9.1–9.9) — the single source `production/format-specifications.md` compresses and every campaign's Design Output matrix references | Rows 61–69 |
| [`advertising-system/iconography.md`](../advertising-system/iconography.md) | The Home + Place icon-pairing grammar used in Art Direction across every campaign | Row 65 |
| [`advertising-system/social-media-playbook.md`](../advertising-system/social-media-playbook.md) | Platform priority tier and per-platform cadence/register rules underlying every Social Execution section | Governs content-creation rows 1–9 |
| [`advertising-system/content-system.md`](../advertising-system/content-system.md) §1 | The seven content pillars each campaign's content is assigned to | Referenced throughout |
| `narrative-system/` (full — read in Phases 16–17, held in working context, re-verified against source for this run) | Every campaign's Creative Platform section must be a specific instance of **Everyone's Tuba Is Different**, drawing a named narrative pillar and character archetype rather than inventing new brand philosophy, per this phase's explicit instruction | N/A — narrative layer sits above the router |

## Campaign-specific retrieval

| Campaign | Additional documents retrieved | Why (beyond shared grounding) | TASK_ROUTER row(s) |
|---|---|---|---|
| **01 — Brand Awareness** | none beyond shared grounding | Awareness campaigns route to `campaign-playbook.md §3.3/§3.4` only — already loaded | 43, 44 |
| **02 — First Home Buyers** | [`brand-intelligence/buyer-personas.md`](../brand-intelligence/buyer-personas.md) §1 | First-Time Buyer's specific fears/objections/questions are needed verbatim to write an honest Reassure stage | 46 |
| **03 — Property Investors** | [`brand-intelligence/investor-personas.md`](../brand-intelligence/investor-personas.md), [`brand-intelligence/buyer-personas.md`](../brand-intelligence/buyer-personas.md) §3 | Investment campaigns require the data-first register (`copywriting.md §5.7`) — the persona's exact Questions/Objections determine which data point leads | 39, 48 |
| **04 — Real Estate Brokers** | [`brand-intelligence/broker-personas.md`](../brand-intelligence/broker-personas.md) | B2B broker-acquisition copy must answer a real, named lead-quality objection, not a generic partnership pitch | 38, 56, 57 |
| **05 — Developers** | [`brand-intelligence/developer-personas.md`](../brand-intelligence/developer-personas.md) | Distinguishes Large Master-Plan vs. Boutique vs. Off-Plan developer anxieties — the campaign targets one named sub-type, not "developers" generically | 37, 58, 59 |
| **06 — Saudi National Day** | none beyond shared grounding | `campaign-playbook.md §1.1` is self-contained for this task; did not read `ai-prompt-library.md §16` since no AI-prompt generation was required for this deliverable | 27 |
| **07 — Ramadan** | none beyond shared grounding | `campaign-playbook.md §1.3` is self-contained | 29 |
| **08 — Corporate Brand** | [`brand-intelligence/developer-personas.md`](../brand-intelligence/developer-personas.md) §4 (re-referenced, not re-read) | Not a router row that exists verbatim — reasoned by analogy from Row 44 ("Plan brand campaign") plus the institutional/formal register defined for Government-Linked Developer, since a corporate/B2B-facing brand campaign shares that audience's register needs | Row 44 (analogy) |

## Documents deliberately NOT read for this run

Per the explicit instruction to read only what's required:
- `brand-intelligence/seller-personas.md` — no seller-facing campaign was requested
- `advertising-system/visual-decision-tree.md`, `advertising-system/design-components.md` — their content is already fully subsumed by `visual-system.md` §9 for this deliverable's purposes (format dimensions, badge placement); reading them would have added component-level UI detail (e.g., exact card padding) not needed at the campaign-brief altitude this phase operates at
- `advertising-system/psychological-triggers.md` — its guardrails are already restated in full inside `copywriting.md §9`, which was read directly
- `advertising-system/ai-prompt-library.md` — no AI image/video prompt generation was requested; its seasonal sections (§15, §16) are cross-referenced but not required reading since `campaign-playbook.md` §1.1/§1.3 already contain the operative rules
- `knowledge-base/`, `context-packs/`, `brand-memory/` — this run operates at the execution-layer altitude; foundation-layer and memory-layer documents were already internalized in earlier phases of this engagement and did not need re-reading for campaign production specifically

## Cross-references
- The routing tool this log follows: [`../routing/TASK_ROUTER.md`](../routing/TASK_ROUTER.md)
- Where this discipline is defined: [`../AI_KNOWLEDGE_PLATFORM.md`](../AI_KNOWLEDGE_PLATFORM.md) §4 (Retrieval Strategy)
