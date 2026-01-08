# Protocol: DES-001 // Swiss Grid System

> **Status:** ACTIVE
> **Target:** `web-app/app/litema`

## 1. Objective
To implement an **International Typographic Style** (Swiss Style) layout for the 'Litema' digital publication. The goal is objectivity, readability, and geometric tension.

## 2. The Grid (The Mathematical Foundation)
We do not use default Tailwind containers. We use a **Modular 12-Column Grid**.
*   **Columns**: 12 (Fraction units `1fr`).
*   **Gutters**: 20px (Desktop), 16px (Mobile).
*   **Margins**: 48px (Desktop), 24px (Mobile).

## 3. Typographic Scale (The Voice)
Using `Geist Sans` (as a Helvetica surrogate):
*   **Display XL**: 96px, Tracking -0.05em, Weight 800 (The "Shout").
*   **Display L**: 48px, Tracking -0.03em, Weight 600 (The "Statement").
*   **Body**: 16px, Line Height 1.4, Weight 400 (The "Facts").
*   **Label**: 12px, Uppercase, Tracking 0.2em (The "Meta").

## 4. Layout Rules (The Logic)
1.  **Flush Left, Ragged Right**: No justified text.
2.  **Asymmetry**: Do not center. Balance negative space against heavy elements.
3.  **Vertical Rhythm**: All elements must snap to a 4px baseline.
4.  **Photography**: Images are unadorned. No drop shadows. Sharp corners.

## 5. Component Logic
*   `SwissGrid`: The wrapper ensuring 12-col alignment.
*   `SwissType`: Utility for enforcing the scale.
*   `SwissHero`: Full height, typo-centric start.

---
**Approved by:** Principal Researcher (Agent)
**Date:** 2026-01-07
