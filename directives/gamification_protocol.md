# Protocol: GAM-001 // Research Gamification

> **Status:** ACTIVE
> **Target:** `web-app/components/research`

## 1. Objective
To transliterate the qualitative output of the Threshold Lab (Sketches, Renders, PDF Briefs) into a quantitative, comparative format ("Trump Cards"). This process allows for the "Gamification of Research," enabling rapid comparison of disparate design artifacts.

## 2. The "Trump Card" Framework
Every asset processed by the Lab must be encapsulated into a Card Archetype with the following properties:

### A. Taxonomy (Suit)
1.  **Urban/Spatial**: Large scale interventions (e.g., Sustainable Village).
2.  **Cultural/Artifact**: Heritage and object-scale (e.g., Litema Patterns).
3.  **Theory/Signal**: Abstract concepts or external research (e.g., PAB 2026).

### B. Metrics (Stats)
Each card requires 4 "Playable" Stats (Scaled 0-10 or specific units):
*   **Complexity**: The intricacy of the geometry or logic.
*   **resilience**: Ability to withstand time or entropy (Sustainability).
*   **Impact**: Cultural or Physical footprint.
*   **Velocity**: Speed of implementation or theoretical evolution.

*Note: Specific cards may have unique stats (e.g., "Density" for Urban, "Iterative Depth" for Sketches).*

## 3. Implementation Logic
1.  **Ingest**: Agent reads `lab_assets/`.
2.  **analyze**: Agent extracts key themes and assigns "Suit".
3.  **Score**: Agent creatively estimates Metrics based on context (Interrogative Mode).
4.  **Render**: Component visualizes stats as info-graphic bars (Reference: `uploaded_image_0`).

## 4. Visual Language
*   **Style**: Lo-Fi Technical / F1 Trading Card.
*   **Typography**: Monospaced, Uppercase, Data-dense.
*   **Interaction**: Flip to reveal "Back of Card" (Deep Research Notes).

---
**Approved by:** Principal Researcher (Agent)
**Date:** 2026-01-07
