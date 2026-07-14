# Trust Framework — Tuba

> **Layer:** Brand Intelligence (static)
> **Purpose:** the full operational trust model — deeper than [advertising-dna.md §8](../advertising-system/advertising-dna.md)'s four Trust Pillars (which state *what* Tuba commits to) or [design-components.md §2.1](../advertising-system/design-components.md) (which specs the badge itself). This document explains the trust *psychology*, the full trust-signal catalog, trust by audience, and how to handle trust repair when something goes wrong.
> **Owner:** Marketing Strategy lead, with Compliance input
> **Review frequency:** annually, or immediately after any real trust incident
> **Related documents:** [advertising-dna.md §8](../advertising-system/advertising-dna.md), [market-psychology.md §3](market-psychology.md), [real-estate-terminology.md §1](real-estate-terminology.md), [design-components.md §2.1](../advertising-system/design-components.md)

---

## 1. The Trust Layer Model

Trust in this category is built in sequential layers (market-psychology.md §3) — each layer depends on the one beneath it:

```
Regulatory trust (is this legal?) 
  → Platform trust (is this specific app/site credible?) 
    → Listing trust (is this specific property real?) 
      → Person trust (is this specific agent trustworthy?)
```

**Implication:** you cannot skip layers. A beautifully designed listing (Layer 3) cannot compensate for a platform that hasn't established regulatory credibility (Layer 1) — this is why the FAL badge (design-components.md §2.1) appears on every commerce-adjacent asset regardless of how much other trust-building content surrounds it.

## 2. Full Trust Signal Catalog

| Signal | Layer | Where it appears |
|---|---|---|
| FAL/Ad-license number + QR verification | Regulatory | Every commerce-adjacent asset (design-components.md §2.1) |
| REGA compliance reference | Regulatory | Trust/compliance content (content-system.md pillar 7) |
| Consistent brand visual system, applied without drift | Platform | Every touchpoint (visual-system.md) |
| Transparent process communication (fees, steps, timelines stated plainly) | Platform | Educational content (content-system.md pillar 1) |
| Fast, human response time | Platform/Person | Support channels (social-media-playbook.md §11) |
| Real, attributed customer stories | Listing/Person | Community content (content-system.md pillar 4, storytelling-framework.md §4) |
| Agent verification/credibility signals | Person | Broker profiles (design-components.md §2.2) |
| Accurate, non-inflated property descriptions | Listing | Property showcase content (copywriting.md §5.8) |
| Sourced, real market data (never fabricated) | Platform (authority) | Market-insight content (content-system.md pillar 2) |

## 3. Trust Psychology — Why Each Layer Matters

- **Regulatory trust** is a binary gate, not a spectrum — a platform is either credibly licensed or it isn't; this is why it's treated as non-negotiable (advertising-dna.md §8) rather than one input among many
- **Platform trust** compounds over repeated, consistent exposure — this is the layer most directly built by this entire documentation system's consistency discipline (design-review-checklist.md, content-review-checklist.md)
- **Listing trust** is the most fragile layer — a single inaccurate or fraudulent listing can undo significant platform-trust investment (competitor-analysis.md §4's Bayut review-sentiment finding is the clearest evidence of this fragility)
- **Person trust** is the layer users actually feel most viscerally at the decision point — this is why "Talk to a guide" (cta-library.md §3) exists as a dedicated CTA category

## 4. Trust by Audience

| Audience | Which layer matters most first |
|---|---|
| First-Time Buyer | Regulatory → Person (needs both the legal assurance and a human they can ask questions) |
| Investor | Platform (authority/data credibility) |
| Luxury Buyer | Person (relationship-first — buyer-personas.md §2) |
| International Buyer | Regulatory (foreign-ownership clarity is the first real barrier — buyer-personas.md §7) |
| Broker (evaluating the platform) | Platform (lead-quality credibility — broker-personas.md §1) |
| Distressed Seller | Person (dignity and direct human contact — seller-personas.md §4) |

## 5. Trust-Building Content Types

Mapped to content-system.md's Trust & Compliance pillar:
- FAL/REGA plain-language explainers (copywriting.md §5.4)
- "How we verify agents" process content
- Real customer success stories (storytelling-framework.md §4, with the non-negotiable authenticity rule)
- Market-data transparency (always cited — copywriting.md §5.7)

## 6. Trust Repair — When Something Goes Wrong

Even a well-built trust system will face real incidents (a fraudulent listing slips through, a bad agent experience, a technical failure). The response protocol:

1. **Acknowledge directly, without corporate deflection language** ("Please be advised" is forbidden — copywriting.md §8.3; "We got this wrong, here's what we're doing" is the correct register)
2. **State the specific fix, not a vague reassurance** — "we've removed the listing and are reviewing our verification step" beats "we take this seriously"
3. **Never let a single incident go unaddressed publicly if it was publicly visible** — silence reads as either indifference or an attempt to hide the issue, both of which damage Platform-layer trust more than the original incident
4. **Log every real incident and its resolution** to [brand-memory/lessons-learned.md](../brand-memory/lessons-learned.md) and [brand-memory/knowledge-log.md](../brand-memory/knowledge-log.md) — trust repair is also a learning input, not just a PR task

## 7. The Enforcement Rule (repeated deliberately — this is the single highest-risk trust failure mode)

**Every trust badge or claim must be operationally true at the moment it's shown.** This is stated in advertising-dna.md §8 and repeated here because competitor-analysis.md §4's Bayut finding is the clearest evidence in this entire system of what happens when it's violated: a well-designed trust badge system with real enforcement gaps produced a *worse* outcome than a more modest but fully-honest claim would have. Marketing cannot outrun product reality in this category — trust claims should always trail slightly behind operational reality, never lead it.

---

## Best Practices
- Treat trust as a layered system (§1) when diagnosing why a campaign or piece of content underperforms — a Reassure-stage failure is often a missing or misplaced trust signal from the wrong layer, not a copywriting problem
- Match the trust-signal type to the audience's actual first-layer concern (§4) rather than defaulting to the same trust content for everyone

## Common Mistakes
- Leading with Person-layer trust content (agent personality, warmth) before Regulatory-layer trust is established for an audience that needs it first (e.g., International Buyer)
- Treating a trust badge as "set and forget" rather than an ongoing operational commitment (§7)

## Future Expansion Notes
- Log every real trust-related customer question, complaint, or incident to [brand-memory/customer-feedback.md](../brand-memory/customer-feedback.md); any pattern that recurs three or more times should trigger a review of this document
