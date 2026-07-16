# Empty States

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **The founding idea:** the greatest brands design beautiful failures. An empty state — no results, no favorites, no messages, no projects, no history — is not a gap in the design system to be filled with a generic "nothing here yet" illustration. It is one of the most honest moments a product has, because there's nothing to hide behind. Behavior here, per `BEHAVIOR_PRINCIPLES.md` §10, is a first-class specification, not an edge case.

---

## The Governing Rule

Never disappoint. Always guide. Always create hope. An empty state is treated as a *starting point Tuba is standing inside of with the user*, not a dead end the user reached alone.

## No Properties Found

**Never:** a bare "0 results" with only a "clear filters" button, implying the user's request was the problem.

**Always:** name what specifically produced zero results (a rare combination, a genuinely thin market in that area), offer the smallest useful adjustment rather than "start over," and — where honest — set an expectation for when this might change ("new listings match this every week — want us to notify you the moment one does?"). This is `SEARCH_BEHAVIOR.md`'s no-results commitment in full: the empty result is information, not a user error.

## No Favorites

**Never:** an empty heart icon with no further guidance, implying the feature simply hasn't been used yet and that's the whole story.

**Always:** a specific, low-effort next action — surfacing two or three genuinely relevant listings based on whatever signal already exists (a recent search, a stated preference), so the empty state becomes the beginning of a first favorite rather than a wall.

## No Messages

**Never:** silence with no explanation of what would populate this screen.

**Always:** plain description of what will appear here and how to make that happen (contacting a broker, requesting a viewing) — an empty inbox should read as "not yet," never as "nothing to see here."

## No Projects (Investor / Developer Context)

**Never:** a blank dashboard that assumes the user already knows what a "project" means on the platform.

**Always:** a concrete example of what a first project looks like, paced to the persona's evident sophistication (`INVESTOR_EXPERIENCE.md`, `DEVELOPER_EXPERIENCE.md`) — never a generic "add your first item" pattern lifted from an unrelated product category.

## No History

**Never:** treat a returning user with no saved history as suspicious or start them exactly like a first-time visitor with no acknowledgment of the gap.

**Always:** acknowledge plainly that it's been a while if applicable ("welcome back — looks like your last search was a while ago, want to pick up where you left off or start fresh?"), giving the user control rather than assuming either path for them.

## The Design Standard Behind All of These

Every empty state answers three questions in order: **what does this emptiness actually mean, what's the smallest next step, and what would make it not-empty.** An empty state that only answers the first question (or none of them) has failed regardless of how polished its illustration is — per `EXPERIENCE_PRINCIPLES.md` §7, an empty state that could be shown in any product, for any reason, hasn't been designed for Tuba yet.

## Tone

Calm, specific, and quietly optimistic — never falsely upbeat ("Oops! Nothing here — but don't worry, be happy!") and never clinical ("No records found"). The closest register is `narrative-system/CONVERSATION_SYSTEM.md`'s "How Tuba Comforts": name the situation plainly, then offer the next concrete step.

## Cross-references
- The no-results-specific behavior this document shares ownership of: [`SEARCH_BEHAVIOR.md`](SEARCH_BEHAVIOR.md)
- The adjacent, but distinct, discipline for when something has actually gone wrong: [`ERROR_BEHAVIOR.md`](ERROR_BEHAVIOR.md)
- The principle requiring every behavior to fail gracefully: [`BEHAVIOR_PRINCIPLES.md`](BEHAVIOR_PRINCIPLES.md) §10
- The comfort-conversation mode this document's tone is drawn from: [`../narrative-system/CONVERSATION_SYSTEM.md`](../narrative-system/CONVERSATION_SYSTEM.md)
