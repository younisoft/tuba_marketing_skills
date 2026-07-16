# Recommendation Behavior

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **The philosophy this document states plainly:** a recommendation engine built only on click and view history will eventually recommend what a person clicks, not what they actually want — the two are related but not identical, especially in a category where the "right" choice is often something the person hasn't seen yet. Tuba's recommendations are built on a wider, slower signal set on purpose.

---

## What Recommendations Are Based On

Not clicks alone. In order of how much weight each carries once available:

1. **Explicitly stated intent** — what the person has directly told Tuba, in a search, a conversation, or a saved-preference field. Always the strongest signal, and never overridden by inferred behavior that contradicts it.
2. **Life stage and family context** — inferred respectfully from stated facts (family size, a search pattern consistent with school proximity), never guessed from sensitive inference the person hasn't volunteered.
3. **Intent category** — buying to live in versus buying to invest versus browsing to understand the market. These produce meaningfully different recommendation logic, specified per-persona in `INVESTOR_EXPERIENCE.md` and `FIRST_HOME_EXPERIENCE.md`.
4. **Emotional goals**, where they've been expressed — someone who has said they want their parents nearby is shown that constraint honored, not silently dropped in favor of a higher-scoring listing on paper.
5. **Investment mindset** — risk tolerance, timeline, and yield priorities the person has stated or that a broker/advisor conversation has surfaced.
6. **Behavioral signal** (views, saves, time spent) — real, useful, and always the *last* input added, refining a picture already built on the stronger signals above, never the sole basis for a recommendation.
7. **Dreams and uncertainty** — the hardest signal to use well, and the one most competitors ignore entirely: when a person expresses an aspiration that doesn't yet match their stated budget or timeline, recommendations don't silently discard it — they show a credible path toward it (a phased plan, a comparable alternative, an honest timeline) rather than only showing what fits today.

## The Philosophy in One Line

**A recommendation should feel like it came from someone who was listening to the whole conversation, not just counting the clicks.** This is the direct product expression of `narrative-system/CONVERSATION_SYSTEM.md`'s listening standard — "a reply that couldn't have been sent to anyone else's message" — applied to a ranked list instead of a chat reply.

## Recommendations Must Show Their Reasoning

Every recommended listing carries a short, specific reason it was surfaced ("closer to the school you searched near" / "similar layout to the one you saved last week"), never a bare ranked list with no explanation. This does two things at once: it lets the user correct a wrong inference immediately, and it makes the personalization *provable*, per `BEHAVIOR_PRINCIPLES.md` §6 — a recommendation that can't explain itself in one sentence probably isn't personalized, it's just popular.

## Recommendations Must Be Correctable in One Action

If a recommendation is wrong — the family context misread, the budget misjudged — the user can correct it in a single, obvious action, and that correction visibly changes what's shown next. A recommendation system that requires a support ticket to fix a wrong inference has failed the personalization promise, not just the UX.

## Recommendations Never Optimize for Tuba's Convenience

A listing is never recommended more prominently because it's easier to close, more profitable per transaction, or from a developer with a stronger relationship with Tuba — unless explicitly and honestly labeled as sponsored, per `SEARCH_BEHAVIOR.md`'s ranking-transparency rule. The recommendation engine's only client is the person receiving the recommendation.

## Recommendations Adapt Across a Relationship, Not Just a Session

A returning user's recommendations reflect everything learned across their entire history with Tuba, not just the current session — someone who searched six months ago and is now back with a larger budget or a new life circumstance sees recommendations that have visibly moved with them, never a reset to a generic starting point.

## Cross-references
- The underlying proof standard every recommendation must meet: [`PERSONALIZATION_SYSTEM.md`](PERSONALIZATION_SYSTEM.md)
- How search surfaces the same philosophy at the query level: [`SEARCH_BEHAVIOR.md`](SEARCH_BEHAVIOR.md)
- The AI disposition that gathers the signal recommendations are built on: [`AI_BEHAVIOR.md`](AI_BEHAVIOR.md)
- Persona-specific recommendation logic: [`INVESTOR_EXPERIENCE.md`](INVESTOR_EXPERIENCE.md), [`FIRST_HOME_EXPERIENCE.md`](FIRST_HOME_EXPERIENCE.md)
