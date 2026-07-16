# Personalization System

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **The document that proves the platform's own name.** "Everyone's Tuba Is Different" is a claim about personalization made in the brand's own vocabulary. Every other document in this folder references this one whenever it needs to point at *how* that claim becomes demonstrably true rather than aspirationally stated. If this document is weak, the entire platform's central idea is weak in practice, regardless of how well it performs in advertising.

---

## The Proof Standard

Personalization is only real if it's falsifiable — if someone could take two different user profiles, run them through the same product moment, and see a genuinely different, appropriately different result. The test stated in `BRAND_BEHAVIOR.md`: **if a screen, recommendation, or reply could have been shown to anyone, it hasn't behaved like Tuba yet.** This document specifies the dimensions the product personalizes across, and the discipline that keeps personalization from becoming either fake (a name token inserted into a generic template) or invasive (surveillance dressed as understanding).

## What Personalizes

| Dimension | Examples | Governs |
|---|---|---|
| **Life stage & family context** | First home vs. growing family vs. downsizing vs. investment | Recommendation weighting, content depth, urgency framing |
| **Sophistication / experience level** | First-time buyer vs. repeat investor vs. licensed broker | Onboarding pacing, jargon use, amount of explanation offered |
| **Intent** | Living in it vs. investing vs. exploring the market | Which metrics are surfaced first (school proximity vs. yield vs. nothing yet) |
| **Emotional goals, where stated** | Wanting family nearby, wanting quiet, wanting a specific community | Constraint weighting in recommendations, never silently dropped |
| **Timeline & urgency** | Searching this month vs. exploring a 2-year horizon | Notification frequency, how proactive outreach is |
| **Channel and language preference** | Arabic vs. English, WhatsApp vs. email vs. app | Delivery register per `VOICE_GUIDELINES.md`, never a translated afterthought |
| **History with Tuba** | Returning after 6 months, prior transactions, past conversations | Whether the platform picks up the thread or starts cold (`EXPERIENCE_PRINCIPLES.md` §8) |

## Across Personas, Without Fragmenting the Brand

A family, an investor, a young professional, a broker, a developer, a luxury buyer, a tenant, and a seller can all use Tuba and experience meaningfully different journeys — different pacing, different surfaced information, different tone of formality — while every one of them recognizes the same underlying values: clarity, warmth, proof, belonging (`advertising-dna.md §7`). Personalization changes *what* is shown and *how much* is explained; it never changes *whether* the platform is honest, patient, or respectful. This is `DECISION_PRINCIPLES.md` §6's rule in its fullest application: consistency of values, never consistency of execution.

## Personalization Must Be Visible, Not Just Effective

A recommendation, a homepage, or a reply that's personalized correctly but never signals *why* leaves the user unable to distinguish genuine understanding from coincidence. Wherever practical, the product shows its reasoning briefly (`RECOMMENDATION_BEHAVIOR.md`'s "must show their reasoning" rule) — this is what turns effective personalization into *felt* personalization, which is the only kind that builds the platform's stated brand promise.

## Personalization Must Be Correctable

Every inferred assumption about a person is one action away from being corrected, and that correction visibly changes behavior immediately. A user is never trapped inside a wrong inference the platform quietly keeps making.

## The Line Between Personalization and Surveillance

Personalization uses what a person has told or shown Tuba to serve *that person* better. It never narrates that data back in a way that makes the person feel watched (`PRODUCT_PHILOSOPHY.md`'s rule, `advertising-dna.md §4.2`'s explicit ban on "we noticed you were looking at..." framing) and it is never used to create artificial urgency ("only you can see this deal") that exploits the very intimacy the personalization was supposed to earn trust through.

## How This Gets Measured

`BRAND_BEHAVIOR_SCORECARD.md` includes a specific, adversarial test for this system: take two meaningfully different real user profiles through the same flow and check whether the outputs differ in ways that make sense. If they don't, personalization is failing regardless of how sophisticated the underlying model is.

## Cross-references
- The standard this entire system exists to satisfy: [`BRAND_BEHAVIOR.md`](BRAND_BEHAVIOR.md)
- How personalization shapes search results specifically: [`SEARCH_BEHAVIOR.md`](SEARCH_BEHAVIOR.md), [`RECOMMENDATION_BEHAVIOR.md`](RECOMMENDATION_BEHAVIOR.md)
- The AI disposition that gathers personalization signal conversationally: [`AI_BEHAVIOR.md`](AI_BEHAVIOR.md)
- Persona-specific expressions of this system: [`BROKER_EXPERIENCE.md`](BROKER_EXPERIENCE.md), [`DEVELOPER_EXPERIENCE.md`](DEVELOPER_EXPERIENCE.md), [`INVESTOR_EXPERIENCE.md`](INVESTOR_EXPERIENCE.md), [`FIRST_HOME_EXPERIENCE.md`](FIRST_HOME_EXPERIENCE.md)
- The measurement layer: [`BRAND_BEHAVIOR_SCORECARD.md`](BRAND_BEHAVIOR_SCORECARD.md)
