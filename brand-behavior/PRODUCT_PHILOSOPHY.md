# Product Philosophy

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **Scope:** every software decision — what gets built, what gets deferred, what a screen defaults to, what a flow assumes. Where [`SERVICE_PHILOSOPHY.md`](SERVICE_PHILOSOPHY.md) governs people, this document governs the product they work alongside. A product decision that contradicts this document is a bug, even if it ships without a single crash.

---

## The Governing Idea

Most real estate platforms are built to answer *"what listings match these filters?"* Tuba is built to answer a different, harder question: *"what is this specific person actually trying to solve for, and how do I get out of their way once I have?"* Every feature decision is checked against that question before it's checked against a roadmap or a competitor's feature parity list — direct product-layer inheritance of `advertising-dna.md` Principle 1: *"the customer is the hero, Tuba is the guide."*

## Product Is Guidance, Not Inventory

A listings database is a commodity — every competitor has one (`advertising-system/advertising-dna.md §1`). What isn't commoditized is the layer of judgment on top of it: which three listings actually fit this person, what question they haven't thought to ask yet, what they should know before they fall in love with a photo. Tuba's product default is to guide toward a smaller, better-considered set of options, not to maximize the number of listings a person scrolls through. Volume is Aqar's territory (`advertising-dna.md §3.6`); relevance is Tuba's.

## Request-First, Not Browse-Only

The product's own existing strength — a request-first matching flow that removes the burden of endless browsing (`advertising-dna.md §2`) — is the default posture for every new feature, not a legacy mode kept alongside a browsing-first redesign. When in doubt about whether a new feature should ask the user a question or show them a wall of results, it asks the question.

## Friction Is Removed, Never Just Justified

`EXPERIENCE_PRINCIPLES.md` §1 states the design instinct; this is the product-management version of the rule: a step, a field, or a document requirement stays in the product only if it is either legally required or genuinely improves the outcome for the person completing it. "It's always been part of the flow" and "it helps us internally" are not sufficient justifications for a step that costs the user time.

## Technology Reduces Friction, It Doesn't Perform Innovation

The founding brief's references to virtual tours, data, and AI are always in service of a specific friction point, never shown off for their own sake (`advertising-dna.md §10`: *"practical innovation, quietly delivered"*). A feature that impresses in a product demo but doesn't measurably shorten, clarify, or de-risk a real customer's decision does not ship on the strength of the demo alone.

## Compliance Is a Product Feature, Not a Legal Footnote

FAL/REGA licensing, verified ownership, and transaction-fee transparency are treated as first-class product surfaces — visibly designed, not buried in a terms-of-service link — because they are load-bearing for the Trust Pillars (`advertising-dna.md §8`). A product review that ships a redesigned listing card without checking where the license badge lives is incomplete, not merely cosmetic.

## Every Feature Serves at Least One Real Persona, by Name

Before a feature ships, product asks which of the named journeys — first-home buyer, investor, broker, developer, tenant, seller — it actually serves, using the specifics in `BROKER_EXPERIENCE.md`, `DEVELOPER_EXPERIENCE.md`, `INVESTOR_EXPERIENCE.md`, and `FIRST_HOME_EXPERIENCE.md`. A feature that serves "users" in the abstract, with no specific persona benefiting more than any other, is usually a sign the feature is solving an internal problem, not a customer one.

## Data Is Used to Serve the Person Being Observed, Never to Be Told Back to Them as Surveillance

The product may use behavioral data extensively to personalize (`PERSONALIZATION_SYSTEM.md`) — but it never narrates that use back in a way that feels like being watched. `advertising-dna.md §4.2` bans "we noticed you were looking at..." language in copy; the product-layer version of the same rule shapes how recommendation UI is framed: personalization should feel like being understood, never like being tracked.

## Build for the Wait, Not Just the Destination

Per `EXPERIENCE_PRINCIPLES.md` §3, any product flow with a processing time longer than a few seconds — valuation, loan pre-approval, document verification — is designed with an explicit waiting-state experience, not a spinner standing in for a real answer to "what's happening and when will I know."

## Cross-references
- The people-side equivalent of this document: [`SERVICE_PHILOSOPHY.md`](SERVICE_PHILOSOPHY.md)
- The design instincts this philosophy is built from: [`EXPERIENCE_PRINCIPLES.md`](EXPERIENCE_PRINCIPLES.md)
- Where this philosophy becomes AI-specific behavior: [`AI_BEHAVIOR.md`](AI_BEHAVIOR.md), [`SEARCH_BEHAVIOR.md`](SEARCH_BEHAVIOR.md)
- The persona-specific product commitments referenced above: [`BROKER_EXPERIENCE.md`](BROKER_EXPERIENCE.md), [`DEVELOPER_EXPERIENCE.md`](DEVELOPER_EXPERIENCE.md), [`INVESTOR_EXPERIENCE.md`](INVESTOR_EXPERIENCE.md), [`FIRST_HOME_EXPERIENCE.md`](FIRST_HOME_EXPERIENCE.md)
