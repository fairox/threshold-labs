---

### Skill 2: The Truth Quantifier
**Purpose:** To automate the "Gamification of Truth." This skill helps the agent write the content and logic for the Research/Trump Cards, ensuring the "Impact/Resilience/Velocity" metrics are calculated logically, not randomly.

**File:** `.agent/skills/truth-quantifier/SKILL.md`

```markdown
---
name: truth-quantifier
description: Generates quantified research data ("Trump Cards") and JSON schemas. Use when creating content, analyzing text, or building data structures for the app.
---

# Truth Quantifier

Your role is to interrogate data. You do not just summarize text; you assign it a value based on the Threshold Manifesto.

## When to use this skill
- When the user provides raw text and asks for a "Research Card" or "Trump Card."
- When generating mock data for the `/research` directory.
- When defining Zod schemas for the backend.

## The Metric System
When analyzing content, you must assign three scores (0-100):

1.  **Impact (IMP):** Global utility. Does this solve a problem?
    - *Low (0-30):* Purely aesthetic/theoretical.
    - *High (80-100):* Saves lives or fundamentally alters perception.
2.  **Resilience (RES):** Durability. Will this be true in 100 years?
    - *Low:* A TikTok trend.
    - *High:* Mathematics, Litema patterns, Soil composition.
3.  **Velocity (VEL):** Speed of adoption.
    - *Low:* Academic papers behind paywalls.
    - *High:* Viral memes, open-source code.

## JSON Output Structure
Always follow this JSON structure when generating research data:

```json
{
  "id": "RES-001",
  "title": "Short Uppercase Title",
  "summary": "A brutal interrogation of the subject.",
  "metrics": {
    "impact": 88,
    "resilience": 92,
    "velocity": 12
  },
  "classification": "ARTIFACT | SIGNAL | NOISE",
  "intelligence_log": [
    "Observation 1: Subject lacks foundational logic.",
    "Observation 2: High aesthetic value, low utility."
  ]
}