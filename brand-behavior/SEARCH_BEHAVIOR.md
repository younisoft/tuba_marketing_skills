# Search Behavior

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **The question this document answers:** should search only return listings, or should it guide? Tuba's answer is unambiguous — search is the single highest-traffic moment in the entire product, and treating it as a pure retrieval function (query in, listings out) wastes the platform's biggest opportunity to prove "everyone's Tuba is different" before a person has even created an account.

---

## Search Guides, It Doesn't Just Retrieve

A results page is never the end of the interaction — it's a checkpoint. Alongside listings, search behavior surfaces what the platform is inferring ("showing family-friendly areas near good schools, based on what you searched"), so the user can confirm, correct, or refine that inference rather than silently wondering why these results appeared. Search that explains itself, briefly, builds more trust than search that simply performs well statistically.

## Search Educates Without Lecturing

Where a search reveals a likely knowledge gap — a first-time buyer searching for a property type that doesn't match their stated budget, a term used incorrectly — search surfaces one short, relevant piece of context inline, never a popup or a forced detour to an article. Education happens at the point of confusion, in the smallest useful dose, per `EXPERIENCE_PRINCIPLES.md` §1's instinct to reduce confusion rather than explain around it.

## Search Reduces Anxiety, Not Just Options

A category this high-stakes makes narrowing feel risky — "what if the perfect place is in the ones I filtered out?" Search behavior actively counters this: showing *why* a result was included or excluded, offering an easy way to broaden without losing the current search, and never presenting an empty or thin result set as a dead end (`EMPTY_STATES.md` governs the full empty-state behavior). The goal is a user who trusts the narrowing, not one who reflexively removes every filter out of fear of missing something.

## Search Recognizes Uncertainty as a Valid Starting Point

Not every user arrives with a clear brief. Search behavior accepts vague, exploratory input ("somewhere quiet, good for kids, not too far from the city") as a complete, legitimate query — never forcing a person to translate their own uncertain thinking into a rigid filter set before the platform will help them at all. This is where search and `AI_BEHAVIOR.md`'s question-asking discipline meet: an underspecified query is an invitation to ask one clarifying question, not an error state.

## How Search Embodies "Everyone's Tuba Is Different"

Two users entering the identical query — "3-bedroom villa, Riyadh" — should not see identical results in identical order if the platform already knows more about them (a family with young children versus an investor comparing yield). Ranking, the surfaced context, and the follow-up prompts all reflect what's already known, tested against the standard in `BRAND_BEHAVIOR.md`: *"if a screen... could have been shown to anyone, it hasn't behaved like Tuba yet."* A brand-new, unauthenticated user is the one legitimate case where genuinely identical results are correct — personalization is proven with signal, never faked in its absence.

## No-Results Behavior

Covered fully in `EMPTY_STATES.md`, but the search-specific commitment is stated here: a zero-result search is never treated as the user's mistake. It is treated as information — about what doesn't exist yet in a given area, about a filter combination that's too narrow, or about a genuine market gap worth surfacing honestly ("nothing matches all of this in Al Khobar right now — here's the closest thing, and here's what would need to flex").

## What Search Must Never Do

- Never pad a thin result set with barely-relevant listings just to avoid showing a small number — a search returning three excellent matches outperforms one returning thirty weak ones, and is presented as a strength, not padded to look more impressive.
- Never silently drop a filter the user set to produce more results without telling them.
- Never rank a listing higher for commercial reasons (paid placement, developer relationship) without a clear, honest "featured" label — burying a business incentive inside apparently-organic ranking directly violates the Trust Pillars (`advertising-dna.md §8`).

## Cross-references
- The AI disposition behind search's question-asking behavior: [`AI_BEHAVIOR.md`](AI_BEHAVIOR.md)
- Full specification for the zero-result and other empty states referenced above: [`EMPTY_STATES.md`](EMPTY_STATES.md)
- How results are actually personalized once search has signal: [`RECOMMENDATION_BEHAVIOR.md`](RECOMMENDATION_BEHAVIOR.md), [`PERSONALIZATION_SYSTEM.md`](PERSONALIZATION_SYSTEM.md)
- The trust standard governing sponsored or featured placement: [`TRUST_BEHAVIOR.md`](TRUST_BEHAVIOR.md)
