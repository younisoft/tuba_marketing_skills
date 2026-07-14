# Query Guide — Teaching AI to Retrieve the Right Documents

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** trains an AI system's retrieval reasoning by example — given a natural-language request, which documents actually answer it. For the exhaustive, systematic lookup table, see [../routing/TASK_ROUTER.md](../routing/TASK_ROUTER.md) (100+ mappings); this document teaches the *pattern* behind that table through 50+ worked examples.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** whenever a new task type or document is added

**How to use:** find the query pattern closest to the incoming request, follow its reading order. Start with the linked [Context Pack](../context-packs/) where one exists — it's the fast path; only descend into full source documents when the pack is insufficient (per [ONTOLOGY.md §8](ONTOLOGY.md)).

---

## Content Creation Queries

**"Create an Instagram post"**
→ [context-packs/social-media.md](../context-packs/social-media.md) → advertising-dna.md (voice) → copywriting.md → content-hooks.md → headline-library.md → cta-library.md → social-media-playbook.md §2

**"Write a TikTok script"**
→ [context-packs/social-media.md](../context-packs/social-media.md) → social-media-playbook.md §3 → content-hooks.md §1 → copywriting.md §7.1 (casual register permitted)

**"Create a carousel"**
→ [context-packs/social-media.md](../context-packs/social-media.md) → visual-system.md §9.2 → content-hooks.md §4 → headline-library.md

**"Write a property description"**
→ [context-packs/copywriting.md](../context-packs/copywriting.md) → copywriting.md §5.8 → real-estate-terminology.md → design-components.md (FAL badge)

**"Write an email campaign"**
→ [context-packs/copywriting.md](../context-packs/copywriting.md) → copywriting.md §5.11 → headline-library.md §13 → cta-library.md

**"Write a WhatsApp message"**
→ copywriting.md §5.13 → cta-library.md §5

**"Write a push notification"**
→ copywriting.md §5.12 → headline-library.md §14

**"Create a landing page"**
→ [context-packs/copywriting.md](../context-packs/copywriting.md) + [context-packs/design.md](../context-packs/design.md) → visual-system.md §9 → headline-library.md §12 → design-components.md

**"Write a market report / market insight piece"**
→ [context-packs/copywriting.md](../context-packs/copywriting.md) → copywriting.md §5.7 → content-system.md §4.7 → market-language.md

**"Write educational/how-it-works content"**
→ copywriting.md §5.4 → content-system.md §4.1 → real-estate-terminology.md → content-hooks.md

---

## Campaign Queries

**"Create a campaign"**
→ [context-packs/campaigns.md](../context-packs/campaigns.md) → campaign-playbook.md → creative-brief-template.md → messaging-framework.md → advertising-dna.md

**"Plan a Ramadan campaign"**
→ campaign-playbook.md §1.3 → ai-prompt-library.md §15 → visual-decision-tree.md §6

**"Plan a National Day campaign"**
→ campaign-playbook.md §1.1 → ai-prompt-library.md §16 → visual-decision-tree.md §6

**"Plan a White Friday / performance offer campaign"**
→ campaign-playbook.md §1.5 → visual-system.md §9.6 → psychological-triggers.md §4 (urgency guardrail)

**"Launch a new property"**
→ campaign-playbook.md §2.2 → ai-prompt-library.md §12 → copywriting.md §5.8

**"Launch a developer partnership"**
→ campaign-playbook.md §2.3 → developer-personas.md → ai-prompt-library.md §14

**"Plan a broker acquisition campaign"**
→ campaign-playbook.md §2.4 → broker-personas.md → cta-library.md §9 → ai-prompt-library.md §13

**"Plan a luxury property campaign"**
→ [context-packs/campaigns.md](../context-packs/campaigns.md) → luxury-framework.md → campaign-playbook.md §2.6 → visual-decision-tree.md §1

**"Generate campaign ideas"**
→ campaign-ideas.md → messaging-framework.md → campaign-playbook.md

**"Plan a referral campaign"**
→ campaign-playbook.md §3.2 → cta-library.md §12

---

## Persona & Audience Queries

**"Who is our first-time buyer?"**
→ buyer-personas.md §1 → messaging-framework.md §2

**"What does a luxury buyer care about?"**
→ buyer-personas.md §2 → luxury-framework.md → market-psychology.md §8-9

**"What objections does an investor have?"**
→ investor-personas.md → market-psychology.md §2

**"How do we talk to a broker?"**
→ broker-personas.md → copywriting.md §5.2 → cta-library.md §9

**"What does a distressed seller need?"**
→ seller-personas.md §4

---

## Visual & Design Queries

**"What colors do we use?"**
→ [context-packs/design.md](../context-packs/design.md) → visual-system.md §1

**"What layout should a luxury asset use?"**
→ visual-decision-tree.md §1 → luxury-framework.md §5

**"What icon style do we use?"**
→ iconography.md §1 → visual-metaphors.md

**"What photography style is on-brand?"**
→ visual-system.md §6

**"Design a trust badge"**
→ design-components.md §2.1 → real-estate-terminology.md §1 → trust-framework.md

**"Build a stat card / data visualization"**
→ design-components.md §3 → visual-metaphors.md §5

---

## Copy Craft Queries

**"Write a headline"**
→ headline-library.md → copywriting.md §3 → emotional-keywords.md

**"Write a CTA"**
→ cta-library.md → copywriting.md §4

**"What words should I avoid?"**
→ copywriting.md §8.3 → prompt-patterns.md §9

**"How do I write luxury copy?"**
→ luxury-framework.md §3 → copywriting.md §5.3

**"How do I write investor copy?"**
→ copywriting.md §5.7 → investor-personas.md

**"How should Arabic copy sound?"**
→ saudi-real-estate-language.md → copywriting.md §7.1

---

## Social & Channel Queries

**"What should we post on Snapchat?"**
→ [context-packs/social-media.md](../context-packs/social-media.md) → social-media-playbook.md §4

**"How do we use LinkedIn?"**
→ social-media-playbook.md §5 → market-language.md

**"Should we be on YouTube?"**
→ social-media-playbook.md §8 (confirmed white-space opportunity)

---

## Review & Quality Queries

**"Review this ad before publishing"**
→ [evaluation/review-prompts.md](../evaluation/review-prompts.md) → advertising-checklists.md → design-review-checklist.md + content-review-checklist.md

**"Score this campaign"**
→ [evaluation/campaign-scorecard.md](../evaluation/campaign-scorecard.md)

**"Is this copy on-brand?"**
→ [evaluation/copy-scorecard.md](../evaluation/copy-scorecard.md) → CLAUDE_SYSTEM_PROMPT.md §11

**"Is this design on-brand?"**
→ [evaluation/design-scorecard.md](../evaluation/design-scorecard.md)

**"Evaluate this AI prompt"**
→ [evaluation/prompt-scorecard.md](../evaluation/prompt-scorecard.md)

---

## Competitive & Strategic Queries

**"How do we compare to Bayut/Aqar?"**
→ [context-packs/branding.md](../context-packs/branding.md) → competitor-differentiation.md → competitor-analysis.md

**"What's our positioning?"**
→ brand-positioning-framework.md → advertising-dna.md §2

**"Has a competitor done something like this?"**
→ swipe-file.md → competitor-watch.md

---

## Performance & B2B Queries

**"Write a performance/paid ad"**
→ [context-packs/performance-marketing.md](../context-packs/performance-marketing.md) → visual-system.md §9.6 → copywriting.md §6

**"Write a Google/Meta ad"**
→ ai-prompt-library.md §5-6 → copywriting.md §6

**"Pitch a developer partnership"**
→ [context-packs/sales.md](../context-packs/sales.md) → developer-personas.md → campaign-playbook.md §2.3

---

## Production & Video Queries

**"Produce a video"**
→ [context-packs/video-production.md](../context-packs/video-production.md) → visual-system.md §9.4, §8 (motion) → content-hooks.md §5-7

**"Write a YouTube script"**
→ content-hooks.md §5 → social-media-playbook.md §8

---

## SEO & Support Queries

**"Optimize this for SEO"**
→ [context-packs/seo.md](../context-packs/seo.md) → content-review-checklist.md §12 → real-estate-terminology.md

**"Answer a customer support question"**
→ [context-packs/customer-support.md](../context-packs/customer-support.md) → real-estate-terminology.md → trust-framework.md §6 → customer-feedback.md

---

## Memory & Learning Queries

**"What have we tried before?"**
→ campaign-history.md → winning-campaigns.md / failed-campaigns.md

**"What headline formulas perform best?"**
→ headline-performance.md → headline-library.md

**"Log this campaign result"**
→ brand-memory/README.md → campaign-history.md template

**"What's a durable lesson we've learned?"**
→ lessons-learned.md

**"What decision was made about X?"**
→ knowledge-log.md

---

## Meta Queries (about the system itself)

**"What documents exist?"**
→ [INDEX.md](INDEX.md)

**"How is everything connected?"**
→ [RELATIONSHIPS.md](RELATIONSHIPS.md)

**"What's the fastest way to get context for a task?"**
→ [AI_INDEX.md](AI_INDEX.md) → [../routing/TASK_ROUTER.md](../routing/TASK_ROUTER.md)

**"What's the overall architecture?"**
→ [../AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)

---

## Best Practices
- Always try the linked Context Pack first — it's built specifically to answer 80% of a domain's routine queries in under 300 lines
- When a query spans two domains (e.g., "write a luxury Instagram carousel" = Copywriting + Design + Campaigns), combine the relevant reading orders rather than picking just one

## Common Mistakes
- Reading an entire folder when the query only requires one section of one document — check the linked §-anchors first
- Skipping the Context Pack and going straight to full source documents by default — this wastes context budget on routine tasks

## Cross-references
- The systematic, exhaustive version of this guide: [../routing/TASK_ROUTER.md](../routing/TASK_ROUTER.md)
- The reasoning model behind retrieval choices: [ONTOLOGY.md §8](ONTOLOGY.md)
