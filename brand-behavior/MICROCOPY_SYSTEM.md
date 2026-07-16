# Microcopy System

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **The smallest unit of brand behavior.** A button label, a field hint, a tooltip, a toast, a loading state, a form validation message — these are the words a customer reads more often than any headline the advertising system ever produces. [`VOICE_GUIDELINES.md`](VOICE_GUIDELINES.md) sets the voice; this document is the applied pattern library that keeps thousands of tiny strings, written by dozens of people over years, from drifting into inconsistency.

---

## Buttons Describe the Action, Not the Object

A button says what happens when pressed, in the user's own frame — "See matches," "Request a viewing," "Talk to someone" — never a bare noun ("Submit," "Continue," "OK") that requires the user to infer the outcome. Two exceptions: destructive actions always name what will be lost ("Delete this search"), and reversible low-stakes actions can stay short ("Save," "Skip").

## Field Hints Explain Why, Not Just What

A form field's helper text answers "why do you need this" before "what format do you want it in" — "We ask for your budget range so we don't show you homes outside it" behaves correctly; "Enter budget (SAR)" alone does not, even though both are technically sufficient instructions.

## Placeholder Text Is Never the Only Label

A field's purpose is never conveyed by placeholder text alone (which disappears the moment the user starts typing) — every field has a persistent, visible label, with placeholder text reserved for an example format, never the field's sole identification.

## Loading States Say What's Happening, Not Just That Something Is

"Finding your matches" behaves correctly; a bare spinner with no text does not, unless the wait is under roughly one second. Per `EXPERIENCE_PRINCIPLES.md` §3, any wait long enough for a user to wonder if something broke gets a specific, honest status line.

## Toasts and Confirmations Are Brief and Then Gone

A confirmation toast states the one thing that happened ("Search saved") and disappears without lingering or demanding dismissal — it is acknowledgment, not a moment requiring the user's attention.

## Validation Messages Are Fixable, Not Just Diagnostic

Per `ERROR_BEHAVIOR.md`, a validation message never simply states what's wrong — it states what to do about it. "Phone numbers need 10 digits, starting with 05" behaves correctly; "Invalid phone number" does not.

## Empty and Zero States Use the Full Empty-States Standard

Every microcopy instance inside an empty state (the heading, the body line, the CTA label) inherits `EMPTY_STATES.md` in full — a well-written button label sitting inside a poorly designed empty state doesn't rescue the moment.

## Tooltips Are a Last Resort, Not a First Instinct

Per `EXPERIENCE_PRINCIPLES.md` §1, a tooltip explaining a confusing element is acceptable only after asking whether the element itself could simply be made less confusing. A product with heavy tooltip reliance across many screens is a signal to review the underlying design, not a signal to write better tooltips.

## The Microcopy Checklist

Before any new string ships: does it name the actual thing (not a generic placeholder)? Does it say what happens next? Would a first-time user and a fifth-time user both understand it without added context? Could this exact string be swapped into a different product with no changes? If the last answer is yes, it hasn't been written for Tuba yet.

## Cross-references
- The voice these strings are held to: [`VOICE_GUIDELINES.md`](VOICE_GUIDELINES.md)
- The full standard for error and validation messages: [`ERROR_BEHAVIOR.md`](ERROR_BEHAVIOR.md)
- The full standard for empty-state copy: [`EMPTY_STATES.md`](EMPTY_STATES.md)
- The waiting-state design principle behind loading copy: [`EXPERIENCE_PRINCIPLES.md`](EXPERIENCE_PRINCIPLES.md) §3
