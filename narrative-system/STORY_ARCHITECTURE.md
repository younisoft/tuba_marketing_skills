# Story Architecture

> **Part of:** [`../NARRATIVE_SYSTEM.md`](../NARRATIVE_SYSTEM.md)
> **Not marketing structure. Human storytelling structure.** [`../advertising-system/copywriting.md`](../advertising-system/copywriting.md) §1's six-stage Guidance Framework (Hook → Recognize → Guide → Solve → Reassure → Decide) is a *copywriting* tool — built to structure a single piece of sellable copy efficiently. [`../brand-intelligence/storytelling-framework.md`](../brand-intelligence/storytelling-framework.md) supplies nine *tactical* models for specific story types (property storytelling, family storytelling, etc.). This document sits above both: the underlying human story shape — the one nearly every satisfying story, in any medium, moves through — that the Guidance Framework is one practical compression of, and that any future film, book, exhibit, or campaign this brand ever makes can be checked against.

---

## The Eight Beats

```mermaid
flowchart LR
    A[Beginning] --> B[Conflict]
    B --> C[Search]
    C --> D[Choice]
    D --> E[Transformation]
    E --> F[Arrival]
    F --> G[Reflection]
    G --> H[Hope]
```

Not every Tuba story needs all eight — a 15-second Reel might touch only three. But every story, long or short, moves in this direction, never backward, and never skips a beat it needs to earn the next one.

### 1. Beginning
**What happens:** a specific, ordinary life, disturbed by nothing dramatic — just a quiet recognition that something no longer fits.
**Emotional register:** neutral, tipping toward Hope (`EMOTIONAL_SYSTEM.md`).
**Craft note:** the Beginning must establish a *real, specific* person before anything else happens — see `WORLD_BUILDING.md`'s rule against generic types. This beat fails the moment it reaches for a type instead of a person.

### 2. Conflict
**What happens:** the gap between where someone is and where they need to be becomes impossible to keep ignoring — never manufactured drama, always a real, ordinary tension (`HUMAN_TRUTHS.md` §IV, §VI).
**Emotional register:** the story's only permitted moment of real unease — brief, honest, never dwelt on.
**Craft note:** this world's Conflict is almost always internal or circumstantial (a family outgrowing a space, a person's fear of an unfamiliar process) — never an external villain, never manufactured urgency (`WORLD_BUILDING.md`'s hard boundary).

### 3. Search
**What happens:** the active, sometimes uncertain process of looking — for a place, for clarity, for the courage to start.
**Emotional register:** a blend of Hope and low-grade Fear, gradually resolving.
**Craft note:** this is where a Guide (`CHARACTER_ARCHETYPES.md` §8) typically enters — quietly, functionally, never as a rescue.

### 4. Choice
**What happens:** the specific, internal moment someone decides — not the paperwork moment, the *real* one (`HUMAN_TRUTHS.md` §6, §9).
**Emotional register:** Confidence, arriving quietly rather than triumphantly.
**Craft note:** the Choice beat is often the smallest, quietest moment in the entire story — resist the temptation to inflate it. A person nodding to themselves, alone, is often more true than a dramatic declaration.

### 5. Transformation
**What happens:** the shift from *searching* to *becoming* — the person is measurably different than they were at the Beginning, even if the change is subtle.
**Emotional register:** Growth.
**Craft note:** Transformation in this world is rarely about the place changing a person — it's about a person finally having room to become who they already were becoming (`NARRATIVE_MANIFESTO.md`'s "updating their address to match who they already are").

### 6. Arrival
**What happens:** the threshold is crossed (`SYMBOL_LIBRARY.md`'s Threshold symbol) — literally or figuratively.
**Emotional register:** Relief, tipping into Peace.
**Craft note:** the story's most important beat, and the one most often over-produced. Arrival should be the quietest moment in the entire architecture, not the loudest — see `CINEMATIC_LANGUAGE.md`'s pacing guidance.

### 7. Reflection
**What happens:** a brief pause where the story (and the person inside it) recognizes what just happened, without narrating it directly.
**Emotional register:** Gratitude, Nostalgia, or Pride — quietly, per each emotion's "never performed" rule (`EMOTIONAL_SYSTEM.md`).
**Craft note:** this beat is easy to cut for time and should almost never be cut — it's what separates a story from an advertisement. A story that moves straight from Arrival to Hope without Reflection feels rushed and unearned.

### 8. Hope
**What happens:** the story ends facing forward, not closed — this world's stories never end with "and they lived happily ever after." They end with a life still, visibly, continuing (`NARRATIVE_PILLARS.md`'s "Still Becoming").
**Emotional register:** Hope, returning — the architecture is a loop, not a line.
**Craft note:** the final beat should always leave room for the *next* chapter, because in this world, no home is ever a finished, static achievement (`WORLD_BUILDING.md`).

---

## Emotional Progression, Mapped

```
Beginning →  Conflict  →  Search   →   Choice    →  Transformation →   Arrival   →  Reflection →    Hope
(neutral)    (unease,     (hope +     (quiet        (growth)          (relief →    (gratitude/   (hope,
              brief)       fear)       confidence)                     peace)       pride/         renewed)
                                                                                     nostalgia)
```

The shape is intentionally asymmetric — six of the eight beats are calm-to-positive, and the single moment of real unease (Conflict) is deliberately brief. This is a structural choice, not an accident: `../CLAUDE_SYSTEM_PROMPT.md` §7 forbids fear-based tactics in copy, and this architecture is the narrative-level expression of the same value — tension exists here to be *resolved with care*, never to be sustained for effect.

## Compression Rules (for shorter formats)

| Format length | Beats used |
|---|---|
| Full film / long-form | All eight, in full |
| 60–90 second video | Beginning → Search → Arrival → Hope (Conflict and Choice implied, not shown) |
| 15–30 second Reel/Story | Search → Arrival only, or Arrival → Reflection only |
| Single image / photograph | One beat, held — most often Arrival or Reflection |
| A caption or short-form copy | Maps directly onto `copywriting.md` §1's Hook (≈Beginning/Conflict) and Decide (≈Choice/Arrival) — the Guidance Framework *is* this architecture, compressed for a single asset |

## How This Relates to Existing System Documents

- `copywriting.md` §1 (Hook→Recognize→Guide→Solve→Reassure→Decide) is this architecture's **compression for sellable copy** — Hook covers Beginning/Conflict, Recognize/Guide covers Search, Solve/Reassure covers Choice, Decide covers Arrival. Reflection and the return to Hope are usually implicit in short copy, explicit in long-form storytelling.
- `storytelling-framework.md`'s nine tactical models (Property, Family, Investment, Success, Transformation, Customer Journey, Neighborhood, Developer, Educational storytelling) are **specific applications** of this architecture to specific subjects — each one moves through some or all of these eight beats, tuned to its subject.

## Cross-references
- The emotions this architecture moves through: [`EMOTIONAL_SYSTEM.md`](EMOTIONAL_SYSTEM.md)
- The compressed copywriting version: [`../advertising-system/copywriting.md`](../advertising-system/copywriting.md) §1
- The tactical story models this sits above: [`../brand-intelligence/storytelling-framework.md`](../brand-intelligence/storytelling-framework.md)
- Where this architecture produces raw material: [`STORY_LIBRARY.md`](STORY_LIBRARY.md)
