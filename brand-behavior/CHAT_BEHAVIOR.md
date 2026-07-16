# Chat Behavior

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **Scope:** real-time, back-and-forth conversation surfaces — in-app AI chat, WhatsApp, live human chat support. Where [`AI_BEHAVIOR.md`](AI_BEHAVIOR.md) governs the AI's decision logic, this document governs the conversational surface itself: pacing, turn-taking, and how a chat interaction (AI or human) actually reads, message by message.

---

## Chat Is a Conversation, Not a Form in Disguise

The single most common failure mode in category chat products is a conversational UI that's secretly a rigid intake form — one question per bubble, no room for a person to answer three things at once or go off-script. Tuba's chat accepts messy, real input the way a person would: if someone answers a question that wasn't asked yet, the conversation adapts rather than re-asking in order.

## Message Length and Pacing

Short. A chat message that reads like an email pasted into a bubble has misunderstood the channel — `advertising-system/copywriting.md`'s sentence-length discipline is tightest here of anywhere in the system. Multi-part answers are broken into sequential, readable messages rather than a single dense block, mirroring how a thoughtful person actually types in a real chat.

## Typing Indicators Reflect Real Processing, Never Manufactured Delay

If the AI has an answer ready instantly, it doesn't fake a "typing..." pause to seem more human — that's a manipulation, not warmth. Genuine processing time is shown honestly; a deliberately inserted delay to simulate effort is not.

## Handoff Between AI and Human Is Seamless and Disclosed

The moment a conversation moves from AI to a human agent (or back), it's stated plainly — "I'm going to bring in Sara from our team for this one" — never a silent swap that leaves the person unsure who or what they're talking to. Full context carries over automatically; the person is never asked to repeat what they already told the AI, per `EXPERIENCE_PRINCIPLES.md` §8.

## Chat Never Pretends Certainty It Doesn't Have

Every uncertainty-admission rule in `AI_BEHAVIOR.md` applies with the most visibility in chat, since it's the most exposed, real-time surface. "I want to give you a straight answer here rather than guess — let me check" is a complete, acceptable chat response.

## Chat Respects a Person Going Quiet

If a person stops responding mid-conversation, chat does not send a follow-up message minutes later chasing a reply. The conversation simply stays open, exactly where it was left, for whenever the person returns — per `BEHAVIOR_PRINCIPLES.md` §4, silence is not a problem to be solved.

## WhatsApp-Specific Behavior

WhatsApp is the most informal, most human-expected register Tuba uses (`SERVICE_PHILOSOPHY.md`). Messages here are shorter than in-app chat, sent from a named person wherever human-staffed, and never formatted like a corporate broadcast — no heavy formatting, no multi-paragraph policy explanations that belong in email instead.

## What Chat Must Never Do

- Never simulate a human identity for an AI — the AI is always identifiable as AI, immediately, without needing to be asked (a direct trust requirement, not a style preference).
- Never leave a conversation in a state where the person doesn't know if they're expected to respond or wait.
- Never use chat to push an unrelated upsell mid-conversation about something else entirely.

## Cross-references
- The decision logic behind what chat says: [`AI_BEHAVIOR.md`](AI_BEHAVIOR.md)
- The voice these messages are written in: [`VOICE_GUIDELINES.md`](VOICE_GUIDELINES.md)
- Where chat hands off to a person entirely: [`HUMAN_ASSISTANCE.md`](HUMAN_ASSISTANCE.md)
- Sentence-level and word-choice rules: [`MICROCOPY_SYSTEM.md`](MICROCOPY_SYSTEM.md), [`../advertising-system/copywriting.md`](../advertising-system/copywriting.md)
