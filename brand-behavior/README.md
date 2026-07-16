# Brand Behavior — README

> **This folder is Tuba's nervous system.** [`narrative-system/`](../narrative-system/) tells you how Tuba thinks, feels, and remembers. [`advertising-system/`](../advertising-system/) tells you how Tuba speaks in paid and owned communication. Neither tells you what Tuba **does** when a real person taps a button, waits for a loan answer, gets no search results, or calls at 9pm with a complaint. This folder does. It is the layer where brand strategy either becomes real, lived behavior — or quietly stays a slide deck no customer ever meets.

---

## What This Is, and Isn't

This is **not** a rebrand, a new tagline, or a new visual system. The platform is settled: **[Everyone's Tuba Is Different](../BRAND_PLATFORM_TRIBUNAL.md)**, built on the promise in [`advertising-dna.md §2`](../advertising-system/advertising-dna.md): *"You will never have to figure this out alone."* This folder never re-litigates either. It asks a narrower, harder question: **if the logo, the colors, the name, and the slogan all disappeared tomorrow, would the way Tuba behaves still be recognizably Tuba?**

This **is** the specification for behavior — product, service, AI, and human — everywhere a person actually meets Tuba: search results, empty states, errors, notifications, an AI assistant's replies, a broker's onboarding, a call center script, an investor's dashboard, a first-time buyer's first anxious visit. Where the Narrative System supplies the *feeling* and the Advertising System supplies the *words*, this folder supplies the *behavior* — the thing a person actually experiences, in the order they experience it.

## How to Read This Folder

Start at the root synthesis document, **[`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)** — the document every Product Manager, Designer, Developer, AI Engineer, and Support lead must read before designing anything customer-facing. Every file below is one layer of depth beneath it.

| Layer | Documents | Answers |
|---|---|---|
| **Foundation** | `BRAND_BEHAVIOR.md`, `BEHAVIOR_PRINCIPLES.md`, `EXPERIENCE_PRINCIPLES.md`, `DECISION_PRINCIPLES.md` | What is behavior, as distinct from communication? What are the non-negotiable rules? How does Tuba resolve a conflict between two good ideas? |
| **Philosophy** | `SERVICE_PHILOSOPHY.md`, `PRODUCT_PHILOSOPHY.md`, `TRUST_BEHAVIOR.md` | How does the business behave? How does the product behave? How does trust get earned moment to moment? |
| **Intelligence** | `AI_BEHAVIOR.md`, `SEARCH_BEHAVIOR.md`, `RECOMMENDATION_BEHAVIOR.md`, `PERSONALIZATION_SYSTEM.md` | How does Tuba's AI think, ask, wait, and recommend? How is "everyone's Tuba is different" proven, not claimed? |
| **Moments** | `ONBOARDING_BEHAVIOR.md`, `EMPTY_STATES.md`, `ERROR_BEHAVIOR.md`, `SUCCESS_MOMENTS.md`, `DELIGHT_MOMENTS.md` | How does Tuba behave at the specific moments that make or break trust? |
| **Voice in Systems** | `NOTIFICATION_BEHAVIOR.md`, `EMAIL_BEHAVIOR.md`, `CHAT_BEHAVIOR.md`, `VOICE_GUIDELINES.md`, `MICROCOPY_SYSTEM.md` | How does the brand voice survive being broken into a push notification, a subject line, a button label? |
| **People** | `HUMAN_ASSISTANCE.md`, `COMMUNITY_BEHAVIOR.md`, `BROKER_EXPERIENCE.md`, `DEVELOPER_EXPERIENCE.md`, `INVESTOR_EXPERIENCE.md`, `FIRST_HOME_EXPERIENCE.md` | How does behavior flex per audience without fragmenting the brand? |
| **Accountability** | `BRAND_BEHAVIOR_SCORECARD.md` | How is any of this actually measured, and what happens when it fails? |

## Governing Rules

1. **Never contradict `advertising-dna.md`.** Every behavior specified here is downstream of the Brand Promise and the Communication/Trust Pillars defined there. If a behavior contradicts them, the behavior is wrong, not the DNA.
2. **Never re-argue the platform.** `BRAND_PLATFORM_TRIBUNAL.md` already settled *what Tuba says*. This folder assumes it and asks only *what Tuba does*.
3. **Behavior outranks communication.** If a beautifully written email describes a process that the product doesn't actually deliver, the product is wrong — never soften the copy to hide the gap (`advertising-dna.md §1`: *"warmth without verifiability is just marketing"*, extended here from claims to actions).
4. **Every behavior must be observable and testable.** A principle that can't be checked against a real screen, message, or transcript isn't a behavior yet — it's a hope. `BRAND_BEHAVIOR_SCORECARD.md` exists precisely to enforce this.
5. **Optimize for the moment a person is actually in, not the message the brand wants to send.** Behavior is measured from the customer's side of the screen, not the brand's side of the brief.

## Owner & Review

**Owner:** Product, Experience, and Brand functions jointly — this is the one document in the platform no single department owns alone, because behavior is produced by all of them at once.
**Review frequency:** quarterly, and after any incident that revealed a gap between stated behavior and lived behavior (`BRAND_BEHAVIOR_SCORECARD.md` §5 defines the incident-review trigger).

## Cross-references
- The master synthesis every reader should start with: [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
- The platform this folder makes real: [`../BRAND_PLATFORM_TRIBUNAL.md`](../BRAND_PLATFORM_TRIBUNAL.md)
- The feeling this folder is accountable to: [`../narrative-system/`](../narrative-system/), especially [`HUMAN_TRUTHS.md`](../narrative-system/HUMAN_TRUTHS.md) and [`CULTURAL_TRUTHS.md`](../narrative-system/CULTURAL_TRUTHS.md)
- The words this folder's behaviors get expressed through at execution scale: [`../advertising-system/`](../advertising-system/), especially [`advertising-dna.md`](../advertising-system/advertising-dna.md) and [`copywriting.md`](../advertising-system/copywriting.md)
- The coded, visual surface of the brand's philosophy (a different artifact from this folder — a presentation, not a specification): [`../brand-experience/`](../brand-experience/)
