# AI Index — The AI's Homepage

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **This is the single most important document in the platform for an AI assistant.** If you are an AI working on any Tuba task and can only read one file before starting, read this one. It tells you exactly what to read next, what to skip, what the output should look like, and how to check your own work — for every major task type.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** whenever a new major task type emerges or a document is added/retired

**How this document works:** find your task below. Follow **Required reading** in order — these are the minimum documents needed to produce correct, on-brand output. Consult **Optional reading** only if the task is unusually complex or novel. **Ignore** everything else for this task — loading irrelevant documents wastes context and dilutes focus. Every task ends with an **Expected output** shape and a **Quality checklist** to self-review against before presenting your answer (this is the same discipline as [CLAUDE_SYSTEM_PROMPT.md §11](../CLAUDE_SYSTEM_PROMPT.md)).

---

## Before Any Task: The One Thing to Always Load

Regardless of task, always have [CLAUDE_SYSTEM_PROMPT.md](../CLAUDE_SYSTEM_PROMPT.md) in context — it is the compressed hard-boundary contract (colors, forbidden patterns, decision priorities) that governs every single task below. Everything in this file assumes that document is already loaded.

---

## Task: Instagram Carousel

**Required reading:**
1. [../context-packs/social-media.md](../context-packs/social-media.md)
2. advertising-dna.md (voice, if not already internalized)
3. copywriting.md §1, §3 (Guidance Framework, headline formulas)
4. content-hooks.md §4 (Carousel opening)
5. cta-library.md
6. visual-system.md §9.2 (carousel template spec)

**Optional reading:** headline-library.md (for formula variety), buyer-personas.md if targeting a specific segment

**Ignore:** market-language.md, developer-personas.md, evaluation/campaign-scorecard.md (this is a single-asset task, not a full campaign)

**Expected output:** 5-slide structure — Slide 1 headline-only hook, Slides 2-4 one idea each, Slide 5 CTA + trust element if commerce-adjacent. Bilingual (AR primary, EN secondary) unless told otherwise.

**Quality checklist:** [evaluation/copy-scorecard.md](../evaluation/copy-scorecard.md) + [evaluation/design-scorecard.md](../evaluation/design-scorecard.md) (if visual direction included) → [evaluation/quality-thresholds.md](../evaluation/quality-thresholds.md)

---

## Task: General Social Post (single asset, any platform)

**Required reading:** [../context-packs/social-media.md](../context-packs/social-media.md), copywriting.md §1, the relevant platform section of social-media-playbook.md

**Optional reading:** the relevant persona file if audience is specified

**Ignore:** campaign-playbook.md (unless this post is part of a named campaign), evaluation/campaign-scorecard.md

**Expected output:** platform-native format (aspect ratio, length, hashtag count per social-media-playbook.md), one CTA

**Quality checklist:** [evaluation/copy-scorecard.md](../evaluation/copy-scorecard.md)

---

## Task: TikTok / Reel Script

**Required reading:** [../context-packs/social-media.md](../context-packs/social-media.md), social-media-playbook.md §2-3, content-hooks.md §1, §6

**Optional reading:** copywriting.md §7.1 (casual register rules)

**Ignore:** market-language.md, luxury-framework.md (unless explicitly a luxury asset)

**Expected output:** timestamped script — [time] / [on-screen text] / [spoken line] / [visual direction], per ai-prompt-library.md §3

**Quality checklist:** [evaluation/copy-scorecard.md](../evaluation/copy-scorecard.md) §Hook, §Platform Optimization

---

## Task: Property Listing / Description

**Required reading:** [../context-packs/copywriting.md](../context-packs/copywriting.md), copywriting.md §5.8, real-estate-terminology.md, design-components.md §2.1 (FAL badge)

**Optional reading:** luxury-framework.md if the property is explicitly luxury-segment

**Ignore:** campaign-playbook.md, social-media-playbook.md (unless the listing is being adapted into a social asset)

**Expected output:** life-context opener → specs (bed/bath/area/price order) → one distinguishing detail → gentle close, with FAL license placeholder marked

**Quality checklist:** [evaluation/copy-scorecard.md](../evaluation/copy-scorecard.md), [evaluation/brand-scorecard.md §Trust](../evaluation/brand-scorecard.md)

---

## Task: Full Campaign Concept/Brief

**Required reading:** [../context-packs/campaigns.md](../context-packs/campaigns.md), campaign-playbook.md (relevant section), creative-brief-template.md, messaging-framework.md, advertising-dna.md

**Optional reading:** campaign-ideas.md (for concept generation), the relevant persona file(s), competitor-differentiation.md

**Ignore:** individual format specs (visual-system.md §9 details) until the brief is approved and execution begins

**Expected output:** a filled creative-brief-template.md instance — objective, audience, core message, emotion, CTA, deliverables, KPIs

**Quality checklist:** [creative-brief-template.md §3](../advertising-system/creative-brief-template.md) Brief Quality Gate

---

## Task: Seasonal Campaign (National Day / Ramadan / Eid / White Friday / etc.)

**Required reading:** [../context-packs/campaigns.md](../context-packs/campaigns.md), campaign-playbook.md §1 (the specific occasion), ai-prompt-library.md (the matching seasonal prompt), visual-decision-tree.md §6

**Optional reading:** campaign-ideas.md (seasonal section), the relevant persona file

**Ignore:** performance-marketing context-pack (unless this is explicitly a paid-performance seasonal push)

**Expected output:** on-calendar creative respecting the season's specific rule (e.g., Ramadan = financing-term-not-discount; National Day = check that year's official theme first)

**Quality checklist:** [evaluation/campaign-scorecard.md](../evaluation/campaign-scorecard.md) §Channel Fit, §Business Alignment

---

## Task: Luxury Property / Campaign

**Required reading:** luxury-framework.md, copywriting.md §5.3, buyer-personas.md §2, visual-decision-tree.md §1

**Optional reading:** broker-personas.md §3 (if broker-facing), campaign-playbook.md §2.6

**Ignore:** urgency-related sections of psychological-triggers.md (luxury register almost never uses urgency), performance-marketing context-pack

**Expected output:** restrained, specific copy (no "luxurious"/"exclusive" labels), softer CTA ("Talk to a guide," not "Request now")

**Quality checklist:** [evaluation/copy-scorecard.md §Luxury Register](../evaluation/copy-scorecard.md), [evaluation/brand-scorecard.md §Luxury Perception](../evaluation/brand-scorecard.md)

---

## Task: Broker / Agent Acquisition Content

**Required reading:** [../context-packs/sales.md](../context-packs/sales.md), broker-personas.md, cta-library.md §9, copywriting.md §5.2

**Optional reading:** campaign-playbook.md §2.4

**Ignore:** consumer-facing emotional-keywords.md categories (Relief/Belonging) — B2B register is Confidence-led, low-medium intensity

**Expected output:** professional-register copy, proof-driven (lead-quality data), CTA "Grow with Tuba"

**Quality checklist:** [evaluation/copy-scorecard.md §Brand Tone](../evaluation/copy-scorecard.md)

---

## Task: Developer Partnership Content

**Required reading:** [../context-packs/sales.md](../context-packs/sales.md), developer-personas.md, campaign-playbook.md §2.3

**Optional reading:** market-language.md (if government-linked/institutional developer)

**Ignore:** emotional/consumer content-hooks categories

**Expected output:** data-forward partnership content, ground-level imagery paired with any masterplan visuals (never aerial-only)

**Quality checklist:** [evaluation/campaign-scorecard.md §Audience Fit](../evaluation/campaign-scorecard.md)

---

## Task: Investment / Market Insight Content

**Required reading:** [../context-packs/campaigns.md](../context-packs/campaigns.md), copywriting.md §5.7, investor-personas.md, content-system.md §5 ("دليل طوبة")

**Optional reading:** market-language.md, market-psychology.md §2

**Ignore:** emotional-keywords.md's high-intensity categories — this content is data-first, feeling-second

**Expected output:** real, sourced stat leading, plain-language conclusion, one grounded emotional closing line

**Quality checklist:** [evaluation/copy-scorecard.md §Persuasion](../evaluation/copy-scorecard.md) — verify no unsourced claims

---

## Task: Email Campaign

**Required reading:** [../context-packs/copywriting.md](../context-packs/copywriting.md), copywriting.md §5.11, headline-library.md §13, visual-system.md §9.9

**Optional reading:** the relevant persona file

**Ignore:** social-media-playbook.md

**Expected output:** subject line (≤8 words) + compressed Solve→Reassure→Decide body + one CTA button + FAL/support footer

**Quality checklist:** [evaluation/copy-scorecard.md](../evaluation/copy-scorecard.md)

---

## Task: Landing Page

**Required reading:** [../context-packs/design.md](../context-packs/design.md) + [../context-packs/copywriting.md](../context-packs/copywriting.md), visual-system.md §9, headline-library.md §12, design-components.md

**Optional reading:** the relevant persona file, trust-framework.md

**Ignore:** social-media-playbook.md

**Expected output:** hero (headline+CTA) → value/guide section → reassure/trust section → social proof (if real) → single-CTA-type close

**Quality checklist:** [evaluation/design-scorecard.md](../evaluation/design-scorecard.md) + [evaluation/copy-scorecard.md](../evaluation/copy-scorecard.md)

---

## Task: Performance / Paid Ad (Google, Meta, etc.)

**Required reading:** [../context-packs/performance-marketing.md](../context-packs/performance-marketing.md), copywriting.md §6, visual-system.md §9.5-9.6, ai-prompt-library.md §5-6

**Optional reading:** psychological-triggers.md §3-4 (scarcity/urgency guardrails — real deadlines only)

**Ignore:** the fuller Guidance Framework's Hook/Recognize stages — performance copy compresses to Solve-forward

**Expected output:** offer/spec/location visible immediately, single high-contrast CTA, no scene-setting

**Quality checklist:** [evaluation/campaign-scorecard.md §Expected Impact](../evaluation/campaign-scorecard.md)

---

## Task: Video Production / YouTube Script

**Required reading:** [../context-packs/video-production.md](../context-packs/video-production.md), content-hooks.md §5, visual-system.md §8-9.4

**Optional reading:** storytelling-framework.md (for the narrative model)

**Ignore:** static-image-only sections of visual-system.md §9

**Expected output:** 5-second value-statement opening, structured body, single CTA + subscribe prompt

**Quality checklist:** [evaluation/copy-scorecard.md §Hook](../evaluation/copy-scorecard.md)

---

## Task: Design Asset / Visual Concept

**Required reading:** [../context-packs/design.md](../context-packs/design.md), visual-decision-tree.md, visual-system.md, iconography.md

**Optional reading:** visual-metaphors.md, asset-library.md (check for reusable existing assets first)

**Ignore:** copywriting-only documents unless copy is being paired

**Expected output:** a layout/composition described using the system's actual named components and tokens, not generic mood-board adjectives (per prompt-patterns.md §7)

**Quality checklist:** [evaluation/design-scorecard.md](../evaluation/design-scorecard.md)

---

## Task: Trust / Compliance Content

**Required reading:** trust-framework.md, real-estate-terminology.md §1, design-components.md §2.1

**Optional reading:** competitor-analysis.md §11 (REGA badge-design precedent)

**Ignore:** luxury-framework.md, emotional-keywords.md's high-intensity categories

**Expected output:** plain-language explanation + specific, checkable trust mechanism (never a bare "we're trusted" claim)

**Quality checklist:** [evaluation/brand-scorecard.md §Trust](../evaluation/brand-scorecard.md)

---

## Task: Customer Support Response

**Required reading:** [../context-packs/customer-support.md](../context-packs/customer-support.md), real-estate-terminology.md, trust-framework.md §6

**Optional reading:** customer-feedback.md (check if this is a recurring question worth escalating)

**Ignore:** campaign/creative documents entirely — this is a direct-response task

**Expected output:** direct, warm, non-defensive response; specific fix stated if this is an incident, not vague reassurance

**Quality checklist:** trust-framework.md §6's trust-repair protocol

---

## Task: Competitive Analysis / "How do we compare to X"

**Required reading:** [../context-packs/branding.md](../context-packs/branding.md), competitor-differentiation.md, competitor-analysis.md

**Optional reading:** competitor-watch.md (for anything more recent than the last full research refresh)

**Ignore:** execution-layer documents (visual-system.md, copywriting.md) — this is a strategic, not creative, task

**Expected output:** differentiation angle stated per competitor-differentiation.md §1, never disparaging the named competitor publicly

**Quality checklist:** advertising-dna.md §5 (no-disparagement rule)

---

## Task: Review Existing Creative Before Publishing

**Required reading:** [evaluation/review-prompts.md](../evaluation/review-prompts.md), advertising-checklists.md, the relevant scorecard(s)

**Optional reading:** the original creative-brief-template.md instance if available (to check the asset against its own brief)

**Ignore:** generation-focused documents (ai-prompt-library.md) — this is an evaluation task, not a creation task

**Expected output:** a scored review (per the relevant scorecard) with a PASS/REVISE/REJECT verdict per [evaluation/quality-thresholds.md](../evaluation/quality-thresholds.md)

**Quality checklist:** the task *is* the quality checklist — see [evaluation/evaluation-framework.md](../evaluation/evaluation-framework.md) for the review process itself

---

## Task: Onboarding (new team member or fresh AI session)

**Required reading:** [../AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md) → [CLAUDE_SYSTEM_PROMPT.md](../CLAUDE_SYSTEM_PROMPT.md) → [../ADVERTISING_IDENTITY_GUIDE.md](../ADVERTISING_IDENTITY_GUIDE.md) → this document

**Optional reading:** project-analysis.md, current-brand-analysis.md, advertising-dna.md, brand-positioning-framework.md (for full foundational depth)

**Ignore:** nothing is truly ignorable at onboarding, but not everything needs reading *before* starting — most documents are reference material to consult per-task via this index going forward

**Expected output:** N/A — this task produces readiness, not an asset

**Quality checklist:** can you correctly answer "what's our brand promise, what colors do we use, what's forbidden, and where do I check before shipping anything?" — if yes, onboarding succeeded

---

## Best Practices
- Trust this index over improvisation — if a task isn't listed, find the closest analog above rather than guessing a reading list from scratch
- Add a new task entry here the first time a genuinely new task type is handled, so the next AI session doesn't have to rediscover the reading order

## Common Mistakes
- Reading every document "to be safe" — this defeats the entire purpose of the platform's retrieval discipline (see [ONTOLOGY.md §8](ONTOLOGY.md))
- Skipping the Quality checklist step and presenting output directly — every task above ends with a checklist for a reason

## Cross-references
- The exhaustive systematic version: [../routing/TASK_ROUTER.md](../routing/TASK_ROUTER.md)
- The narrative/example version: [QUERY_GUIDE.md](QUERY_GUIDE.md)
- The architecture this index serves: [../AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
