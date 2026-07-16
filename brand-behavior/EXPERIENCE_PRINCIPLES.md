# Experience Principles

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **Different from `BEHAVIOR_PRINCIPLES.md`:** that document is the floor — what behavior must never do. This document is closer to a ceiling — what a genuinely excellent Tuba experience reaches for, once the floor is already secure. Where the ten principles are pass/fail, these are a design compass: the direction every good decision should lean, even when several options all clear the floor.

---

## 1. Reduce, Don't Just Explain

The instinct in a complex, regulated category is to explain more — more tooltips, more disclaimers, more FAQ links. Tuba's instinct should be the opposite first: **can the confusion be removed instead of explained?** A well-written explanation of a confusing fee structure is a worse outcome than a simpler fee structure that needs no explanation. Explaining is the fallback, not the goal (`advertising-dna.md §7.1`: *"Clarity — explain, don't just list"* — this principle pushes one level further upstream, before the explaining even starts).

## 2. Pace to the Person, Not the Roadmap

A first-time buyer and a repeat investor should never be forced through the same number of steps, the same depth of education, or the same tone of caution. `narrative-system/CONVERSATION_SYSTEM.md`'s "How Tuba Guides" mode — *"paced to the listener, not to the guide's convenience"* — is a conversational rule here promoted to a product architecture rule: onboarding depth, AI question sequencing, and content density all read the person's evident experience level and adjust, specified fully in `ONBOARDING_BEHAVIOR.md` and `PERSONALIZATION_SYSTEM.md`.

## 3. Design the Waiting, Not Just the Result

Loan decisions, document verification, and broker matching all take real time. Most products treat the waiting period as dead space between a request and a result. Tuba treats it as an active part of the experience: what does the person see, feel, and know *during* the wait? Silence during a wait is where trust erodes fastest (`narrative-system/HUMAN_TRUTHS.md` §76: *"financial anxiety rarely shows up as a number. It shows up as sleeplessness at 2am with no obvious cause"*) — so every meaningful wait in the product has a visible status, an honest timeline, and a way to ask a human what's happening.

## 4. Make the Right Choice the Easy Choice

Where the product can default someone toward a better outcome — a realistic budget range, a verified listing, a licensed broker — it should, without removing their ability to choose otherwise. This is not dark-pattern steering toward what benefits Tuba; it's the opposite discipline: defaults are chosen for what benefits the person, even when a less-defaulted path might convert faster in the short term.

## 5. Let Competence Replace Reassurance

The weakest version of trust-building is a product that keeps *telling* the user it's trustworthy — badges, taglines, "we care" copy. The strongest version is a product that simply behaves competently enough that reassurance becomes unnecessary. `TRUST_BEHAVIOR.md` specifies this fully; the principle here is the design instinct behind it: earn quiet confidence through what the product does, and treat every extra reassurance message as a signal something upstream still needs fixing.

## 6. Treat Every Ending as Seriously as Every Beginning

Most products lavish attention on onboarding and abandon the experience the moment the core transaction completes. Tuba treats a closed deal, a completed handover, or a cancelled search with the same design care as day one — because `narrative-system/CONVERSATION_SYSTEM.md`'s "How Tuba Celebrates Milestones" mode only works if the product remembers there was an ending worth marking (`SUCCESS_MOMENTS.md`, `DELIGHT_MOMENTS.md`).

## 7. Specificity Is the Whole Game

A generic "Congratulations on your new home!" and a message that names the actual neighborhood, the actual number of months searched, or the actual thing the person said they wanted are not different in tone — they are different in kind. `narrative-system/WORLD_BUILDING.md`'s One-Sentence World Rule governs storytelling; the experience-layer version of the same discipline is: **if a screen or message could be shown to anyone, redesign it until it can't.**

## 8. Never Make Someone Repeat Themselves

If a person has already told Tuba their budget, their family size, or their timeline — in a form, a chat, or a call — no later touchpoint should ask again as if the platform forgot. This is the most concrete, testable form of "everyone's Tuba is different": a platform that remembers behaves like a person who was listening; one that doesn't behaves like a form.

## 9. Restraint Is Also a Design Decision

Not every milestone needs an animation. Not every success needs a modal. `narrative-system/EMOTIONAL_SYSTEM.md`'s discipline that pride is "never performed for an audience inside the story itself" applies directly here — the measure of good delight design is knowing which nine out of ten moments should pass quietly, so the tenth actually lands (`DELIGHT_MOMENTS.md`, `SUCCESS_MOMENTS.md`).

## 10. Design for the Whole Household, Not Just the Account Holder

Given `narrative-system/CULTURAL_TRUTHS.md`'s Family entry — homes bought for people who aren't in the room yet, decisions made across generations — flows involving a major purchase should accommodate a second decision-maker (a parent, a spouse, a sibling) being consulted mid-process, rather than assuming one linear individual user completing one linear individual journey.

## Cross-references
- The floor these principles build above: [`BEHAVIOR_PRINCIPLES.md`](BEHAVIOR_PRINCIPLES.md)
- Where these principles get applied to specific journey moments: [`ONBOARDING_BEHAVIOR.md`](ONBOARDING_BEHAVIOR.md), [`SUCCESS_MOMENTS.md`](SUCCESS_MOMENTS.md), [`DELIGHT_MOMENTS.md`](DELIGHT_MOMENTS.md)
- The proof standard for personalization referenced in Principles 2 and 8: [`PERSONALIZATION_SYSTEM.md`](PERSONALIZATION_SYSTEM.md)
- The product-level philosophy these principles inform: [`PRODUCT_PHILOSOPHY.md`](PRODUCT_PHILOSOPHY.md)
