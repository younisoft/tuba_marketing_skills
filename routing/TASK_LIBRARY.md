# Task Library — Detailed Task Definitions

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** where [TASK_ROUTER.md](TASK_ROUTER.md) maps a task to documents, this file defines each **task category** properly — what inputs are needed from the requester, what the output should structurally contain, and common variations/edge cases. Use this when a task is ambiguous or when briefing a human on what to provide an AI system for a good result.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** whenever a new task category is added

---

## Category: Content Creation

**Definition:** producing a single, publishable piece of copy or copy+visual direction for a specific format and platform.

**Inputs needed from requester:**
- Format/platform (Instagram post, email, property description, etc.)
- Audience/persona (if not specified, default to the closest match in messaging-framework.md — never "everyone")
- Specific subject (a real property's details, a real topic, a real offer) — generic requests produce generic output
- Language(s) required (default: both Arabic primary + English secondary)

**Output structure:** Hook → (Recognize/Guide/Solve as format allows) → Reassure (if commerce-adjacent) → Decide (one CTA), formatted per the platform's spec in social-media-playbook.md or visual-system.md §9.

**Common variations:** persona-specific tone shifts (§Persona-Specific Content below), register shifts (luxury/performance/B2B), bilingual vs. single-language requests.

**Edge cases:** if no real property/offer details are given, flag this rather than inventing specifics (per advertising-dna.md §8 — no fabricated claims); a template/placeholder structure is acceptable, invented specifics are not.

---

## Category: Campaign Planning

**Definition:** producing a strategic brief or full concept for a multi-asset, time-bound marketing effort.

**Inputs needed from requester:**
- Business objective (what triggered this campaign — a season, a launch, a KPI gap)
- Target audience/persona
- Budget/channel constraints if known
- Timeline

**Output structure:** a filled creative-brief-template.md instance at minimum; for a fuller concept, add channel-by-channel deliverable breakdown per campaign-playbook.md's relevant section.

**Common variations:** seasonal (locked to real calendar rules — see TASK_ROUTER.md rows 27-34), product/business-triggered, marketing-function-triggered (awareness/lead-gen/etc.).

**Edge cases:** a seasonal campaign request without knowledge of that year's official theme (National Day) should flag the need to check before finalizing, not guess a theme.

---

## Category: Persona-Specific Content

**Definition:** content deliberately tailored to one named sub-persona's specific psychology, not generic audience content.

**Inputs needed from requester:** which persona (specific sub-type, e.g., "Distressed Seller" not just "Seller")

**Output structure:** matches the persona's documented Emotional Triggers, Best CTA, and Content/Visual Preferences fields exactly (see the relevant persona file's table).

**Common variations:** the same underlying message adapted across 2+ personas for a comparison/multi-audience campaign — each version should feel genuinely distinct, not just re-labeled.

**Edge cases:** Distressed Seller and similarly sensitive personas (buyer-personas/seller-personas flagged sub-types) should never receive broad-promotional-register content — always route to direct, human-contact-oriented messaging.

---

## Category: Design & Visual

**Definition:** producing a layout, component spec, or visual concept description (not a rendered image — this platform's documents guide visual production, they don't generate pixels).

**Inputs needed from requester:** campaign type or context (routes through visual-decision-tree.md), format/dimensions if known

**Output structure:** a description using the system's actual named tokens/components (colors by name/hex, named components from design-components.md, named icon categories) — never generic mood-board adjectives (prompt-patterns.md §7).

**Common variations:** luxury vs. standard register, static vs. motion, per-platform format constraints.

**Edge cases:** if a needed asset doesn't exist yet (check asset-library.md's gap table first), flag the gap rather than describing a visual that can't actually be assembled from current assets.

---

## Category: Review & Quality

**Definition:** evaluating an existing (draft or shipped) asset against the system's standards, producing a scored or pass/fail verdict.

**Inputs needed from requester:** the actual asset/copy/design to review; ideally the original brief it was produced against

**Output structure:** per the relevant scorecard in evaluation/ — numeric scores per dimension, a PASS/REVISE/REJECT verdict per quality-thresholds.md, and specific (not vague) notes on any failing dimension.

**Common variations:** design-only review, copy-only review, full-campaign review, AI-prompt review.

**Edge cases:** a review that finds a hard-boundary violation (CLAUDE_SYSTEM_PROMPT.md §7) is an automatic REJECT regardless of how well other dimensions score — see quality-thresholds.md's quick-fail logic.

---

## Category: Strategy & Research

**Definition:** answering a "why" or "how do we compare" question rather than producing creative output.

**Inputs needed from requester:** the specific strategic question or competitor being discussed

**Output structure:** a reasoned answer citing the relevant static knowledge (brand-intelligence/) and, where relevant, living evidence (brand-memory/) — never a fabricated competitive claim.

**Common variations:** competitor comparison, positioning questions, psychology/audience questions, historical decision lookup.

**Edge cases:** never disparage a named competitor in any output derived from this category, even when the question is explicitly comparative (advertising-dna.md §5).

---

## Category: Channel & Format Specific

**Definition:** producing content constrained to a specific technical format (ad platform specs, store listing character limits, etc.).

**Inputs needed from requester:** the exact format constraints (character limits, aspect ratios) if the platform's spec isn't already documented

**Output structure:** exactly matches the technical constraint while still passing brand voice checks — format constraint is never an excuse to abandon the Guidance Framework's core discipline (one CTA, customer-as-hero).

**Common variations:** paid ad formats (compressed register, per copywriting.md §6), owned formats (full register available).

**Edge cases:** at extreme size constraints (e.g., a 320×50 banner), the system explicitly permits reducing to mark + headline fragment + CTA only — this is a documented exception, not a voice violation.

---

## Category: Memory, Logging & Meta

**Definition:** recording real-world outcomes, decisions, or observations into the living brand-memory/ layer, or navigating/maintaining the platform itself.

**Inputs needed from requester:** the real event/decision/observation being logged — **never fabricate an entry to fill out a template** (brand-memory/README.md §2)

**Output structure:** matches the specific file's entry template exactly (see the target brand-memory/ file for its template)

**Common variations:** campaign logging, test logging, feedback logging, decision logging, platform maintenance tasks (adding a document, proposing a rule change)

**Edge cases:** if no real data exists yet for a log entry, the correct output is "this file is not yet populated — log the first real instance when it occurs," never an invented placeholder presented as real.

---

## Best Practices
- Match the requester's input against the "Inputs needed" list before generating — a request missing key inputs (audience, real specifics) should prompt a clarifying question rather than defaulting to generic output
- Use the "Edge cases" entries as the first check whenever a request feels unusual — most genuinely edge-case requests have already been anticipated here

## Common Mistakes
- Producing confident, specific-sounding output when the requester hasn't actually provided the specifics needed (inventing a property's features, inventing a statistic)
- Treating Memory/Logging tasks the same as Content Creation tasks — logging must reflect reality, content creation can be prospective/hypothetical when clearly framed as such

## Cross-references
- Document-level routing for each task: [TASK_ROUTER.md](TASK_ROUTER.md)
- Visual routing-decision logic: [DECISION_TREE.md](DECISION_TREE.md)
- Full-depth guidance for major tasks: [../knowledge-graph/AI_INDEX.md](../knowledge-graph/AI_INDEX.md)
