# Knowledge Graph — Entities

> **Part of:** [AI_KNOWLEDGE_PLATFORM.md](../AI_KNOWLEDGE_PLATFORM.md)
> **Purpose:** every major entity (noun/object) that recurs across the Tuba knowledge platform, formally defined once so every document can reference it consistently instead of redefining it.
> **Owner:** Knowledge Platform maintainer
> **Review frequency:** whenever a new entity type is introduced

Each entity below is defined by: **Description**, **Attributes** (its typical fields), **Relationships** (what it connects to — full graph in [RELATIONSHIPS.md](RELATIONSHIPS.md)), **Related files** (where it's defined/used), **Examples**.

---

## Brand
**Description:** the top-level entity — Tuba itself, as a set of promises, rules, and assets.
**Attributes:** name, promise, archetype, colors, voice adjectives, positioning statement
**Relationships:** governs every other entity below; has one Positioning, one Voice, many Campaigns, many Assets
**Related files:** [advertising-dna.md](../advertising-system/advertising-dna.md), [brand-positioning-framework.md](../brand-intelligence/brand-positioning-framework.md)
**Examples:** "Tuba" (the only instance)

## Campaign
**Description:** a planned, time-bound marketing effort with a specific objective, audience, and creative.
**Attributes:** name, objective, audience, type (seasonal/product/marketing-function), channels, budget, KPIs, status
**Relationships:** targets one or more Personas; produces Content and Assets; uses CTAs and Headlines; is logged in campaign-history
**Related files:** [campaign-playbook.md](../advertising-system/campaign-playbook.md), [creative-brief-template.md](../advertising-system/creative-brief-template.md), [campaign-history.md](../brand-memory/campaign-history.md)
**Examples:** a Ramadan financing campaign, a National Day brand film, a broker-acquisition LinkedIn push

## Persona
**Description:** an archetypal representation of a Tuba audience segment, used to ground creative decisions in real motivations.
**Attributes:** name, goals, fears, pain points, questions, objections, emotional triggers, journey, content/visual preferences, best CTA
**Relationships:** belongs to an Audience category (Buyer/Seller/Broker/Developer/Investor); informs Messaging and Content; moves through a Customer Journey
**Related files:** [buyer-personas.md](../brand-intelligence/buyer-personas.md), [seller-personas.md](../brand-intelligence/seller-personas.md), [broker-personas.md](../brand-intelligence/broker-personas.md), [developer-personas.md](../brand-intelligence/developer-personas.md), [investor-personas.md](../brand-intelligence/investor-personas.md)
**Examples:** First-Time Buyer, Luxury Buyer, Independent Agent, Institutional Investor

## Audience
**Description:** the five top-level segment categories that personas are grouped under.
**Attributes:** category name, sub-persona count
**Relationships:** contains many Personas; is the top row of Messaging Framework
**Related files:** [messaging-framework.md](../advertising-system/messaging-framework.md)
**Examples:** Buyer, Seller, Broker, Developer, Investor

## Property
**Description:** a real estate listing — the core transactable object on the Tuba platform.
**Attributes:** type (villa/apartment/land/commercial), status (ready/off-plan), price, location, FAL license number
**Relationships:** is shown via Property Showcase Content; carries a Trust Badge (Asset); is described using the Property Description copy formula
**Related files:** [copywriting.md §5.8](../advertising-system/copywriting.md), [design-components.md](../advertising-system/design-components.md), [real-estate-terminology.md](../brand-intelligence/real-estate-terminology.md)
**Examples:** a 3BR villa in Al Nakheel, an off-plan tower unit

## Broker
**Description:** a licensed agent/agency using Tuba to list properties and reach buyers.
**Attributes:** license status (FAL), volume tier (solo/agency/high-volume), specialty (luxury/standard)
**Relationships:** is a type of Persona under Broker Audience; is targeted by Broker Acquisition Campaigns; features in Community content
**Related files:** [broker-personas.md](../brand-intelligence/broker-personas.md), [messaging-framework.md §9](../advertising-system/messaging-framework.md)
**Examples:** Independent Agent, Boutique Luxury Broker, High-Volume Agent

## Developer
**Description:** a project developer partnering with Tuba to market off-plan or completed developments.
**Attributes:** scale (large master-plan/boutique), project type, partnership stage
**Relationships:** is a type of Persona under Developer Audience; is targeted by Developer Partnership Campaigns
**Related files:** [developer-personas.md](../brand-intelligence/developer-personas.md), [campaign-playbook.md §2.3](../advertising-system/campaign-playbook.md)
**Examples:** Large Master-Plan Developer, Off-Plan Specialist Developer

## Investor
**Description:** an individual or institutional entity evaluating Tuba properties as an investment vehicle.
**Attributes:** origin (local/GCC/international/institutional), sophistication level
**Relationships:** is a type of Persona under Investor Audience; consumes Market Insight Content; responds to data-first Copy Register
**Related files:** [investor-personas.md](../brand-intelligence/investor-personas.md), [copywriting.md §5.7](../advertising-system/copywriting.md)
**Examples:** Local Individual Investor, Institutional/Fund Investor

## Buyer
**Description:** a consumer seeking to purchase property through Tuba.
**Attributes:** experience level (first-time/repeat), segment (standard/luxury/commercial)
**Relationships:** is a type of Persona under Buyer Audience; moves through the Customer Journey; is the primary Hero of Copy
**Related files:** [buyer-personas.md](../brand-intelligence/buyer-personas.md)
**Examples:** First-Time Buyer, Luxury Buyer, International Buyer

## Seller
**Description:** a consumer or entity listing a property for sale through Tuba.
**Attributes:** urgency level, motivation (relocation/investment/distress/inheritance)
**Relationships:** is a type of Persona under Seller Audience
**Related files:** [seller-personas.md](../brand-intelligence/seller-personas.md)
**Examples:** Individual Homeowner Seller, Distressed Seller

## Content
**Description:** any piece of published material — a post, article, video, email — belonging to a Content Pillar and serving a Funnel Role.
**Attributes:** pillar, format, funnel role, platform, language
**Relationships:** uses Headlines and CTAs; is built from Copy and Visual Assets; is scheduled per the Social Media Playbook; is logged in Campaign History
**Related files:** [content-system.md](../advertising-system/content-system.md), [social-media-playbook.md](../advertising-system/social-media-playbook.md)
**Examples:** an Instagram carousel, a market-insight LinkedIn post, a TikTok property tour

## Headline
**Description:** the primary attention-earning line of a piece of Content, built from a named Formula.
**Attributes:** formula category, language, length
**Relationships:** belongs to a Headline Formula (from headline-library.md); is scored in Headline Performance; appears within Content
**Related files:** [headline-library.md](../brand-intelligence/headline-library.md), [headline-performance.md](../brand-memory/headline-performance.md)
**Examples:** "Ever imagined the street your kids grow up on?"

## CTA
**Description:** the single call to action on any given asset.
**Attributes:** category (Awareness/Lead-Gen/Consultation/etc.), language
**Relationships:** belongs to a CTA category (from cta-library.md); is scored in CTA Performance; is mandatory-singular per Asset (advertising-dna.md §10)
**Related files:** [cta-library.md](../brand-intelligence/cta-library.md), [cta-performance.md](../brand-memory/cta-performance.md)
**Examples:** "Request your property," "Talk to a guide"

## Visual
**Description:** any image, icon, layout, or motion element used in Content.
**Attributes:** type (photography/icon/illustration/pattern), treatment (filled/outline), color usage
**Relationships:** follows Visual System rules; is built from or contributes to the Asset Library; is scored in Design Review
**Related files:** [visual-system.md](../advertising-system/visual-system.md), [iconography.md](../advertising-system/iconography.md)
**Examples:** a property exterior photo, the mark-only logo, a purple→coral gradient background

## Asset
**Description:** a reusable, production-ready file — logo, icon, template, photograph — cataloged for reuse.
**Attributes:** category, status (exists/gap), format spec
**Relationships:** is governed by the Asset Library; is archived (once shipped) in the Visual/Copy Library (Brand Memory)
**Related files:** [asset-library.md](../advertising-system/asset-library.md), [visual-library.md](../brand-memory/visual-library.md)
**Examples:** the primary English logo SVG, the FAL trust badge component

## Prompt
**Description:** a structured instruction template for generating Tuba creative with an AI system.
**Attributes:** format target (Instagram/email/etc.), brand-block inclusion, output type
**Relationships:** is built using Prompt Patterns; draws on the Copywriting and Visual Decision Tree systems; is scored in the Prompt Scorecard
**Related files:** [ai-prompt-library.md](../advertising-system/ai-prompt-library.md), [prompt-patterns.md](../advertising-system/prompt-patterns.md), [prompt-scorecard.md](../evaluation/prompt-scorecard.md)
**Examples:** the Instagram Post prompt, the Ramadan Campaign prompt

## Workflow
**Description:** a defined, repeatable sequence of stages for producing or reviewing work.
**Attributes:** stages, owners per stage, quality gates
**Relationships:** is documented via Mermaid flowcharts; governs how a Campaign or Content item moves from idea to publication
**Related files:** [campaign-workflows.md](../advertising-system/campaign-workflows.md), [advertising-playbook.md](../advertising-system/advertising-playbook.md)
**Examples:** the ten-stage Idea→Knowledge Capture pipeline

## Rule
**Description:** a specific, checkable constraint — a "must" or "never" — enforced across the system.
**Attributes:** category (color/copy/trust/compliance), severity (hard boundary vs. best practice)
**Relationships:** is enumerated in Checklists; is summarized in CLAUDE_SYSTEM_PROMPT.md §7; is checked at Quality Gates
**Related files:** [CLAUDE_SYSTEM_PROMPT.md](../CLAUDE_SYSTEM_PROMPT.md), [advertising-checklists.md](../advertising-system/advertising-checklists.md)
**Examples:** "exactly one CTA per asset," "icons are Purple only"

## Framework
**Description:** a named, reusable structural model for thinking or producing creative.
**Attributes:** stages/components, source document
**Relationships:** frameworks compose into other frameworks (e.g., the Guidance Framework underlies Storytelling Framework)
**Related files:** [copywriting.md §1](../advertising-system/copywriting.md), [storytelling-framework.md](../brand-intelligence/storytelling-framework.md), [trust-framework.md](../brand-intelligence/trust-framework.md), [luxury-framework.md](../brand-intelligence/luxury-framework.md)
**Examples:** the Guidance Framework (Hook→Recognize→Guide→Solve→Reassure→Decide)

## Memory
**Description:** a logged, real-world record of what actually happened — distinct from static strategic knowledge.
**Attributes:** date, type (campaign/experiment/observation/decision), status
**Relationships:** is produced by completed Campaigns and Workflows; feeds back into Intelligence via promotion (see [brand-memory/README.md §1](../brand-memory/README.md))
**Related files:** all files in [brand-memory/](../brand-memory/)
**Examples:** a logged campaign result, a customer feedback entry, a knowledge-log decision

## Knowledge
**Description:** a stable, evergreen strategic fact or model — the settled conclusion Memory evidence eventually confirms.
**Attributes:** domain, confidence, last-reviewed date
**Relationships:** is organized into brand-intelligence/ documents; is validated/challenged by Memory entries
**Related files:** all files in [brand-intelligence/](../brand-intelligence/)
**Examples:** a persona profile, a psychological principle, a headline formula

## Relationship
**Description:** a directional or bidirectional connection between two entities — the edges of this knowledge graph.
**Attributes:** source entity, target entity, relationship type (informs/produces/belongs-to/governs)
**Relationships:** meta — this entity describes the connections between all others
**Related files:** [RELATIONSHIPS.md](RELATIONSHIPS.md)
**Examples:** "Persona → informs → Messaging Framework," "Campaign → produces → Content"

---

## Cross-references
- Full graph of how these entities connect: [RELATIONSHIPS.md](RELATIONSHIPS.md)
- Classification of documents by these entities' domains: [TAXONOMY.md](TAXONOMY.md)
- The conceptual model (inheritance, dependency logic): [ONTOLOGY.md](ONTOLOGY.md)
