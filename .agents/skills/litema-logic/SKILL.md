---

### Skill 3: Litema Logic
**Purpose:** To bridge the gap between "Ancestral Logic" and "Computational Futures." It instructs the agent on how to generate SVG code or Canvas logic that mimics the mathematical rules of Sesotho mural art.

**File:** `.agent/skills/litema-logic/SKILL.md`

```markdown
---
name: litema-logic
description: Generates algorithmic patterns based on Sesotho Litema rules. Use when creating SVGs, Canvas animations, or geometric assets.
---

# Litema Logic

You are translating the "Language of Earth" into code. Litema is not random; it is a system of symmetry and repetition.

## When to use this skill
- When creating SVGs for the `/litema` section.
- When writing `Canvas` or `WebGL` code.
- When generating visual assets for the app.

## The Rules of Generation

1.  **The Seed (The Tile):**
    Start with a square grid (1x1). Divide it diagonally or orthogonally. This is the base unit.

2.  **Symmetry Operations:**
    Litema relies on the four basic symmetries of the plane:
    - *Translation:* Repeating the tile.
    - *Rotation:* Turning 90 degrees around a center.
    - *Reflection:* Mirroring across an axis.
    - *Glide Reflection:* Mirroring and moving.

3.  **The Grid:**
    Patterns must strictly adhere to a grid. No floating elements.

## Code Pattern (SVG Example)
Do not draw complex illustrations. Draw geometric primitives.

```tsx
// A Basic Litema Seed Component
const LitemaSeed = ({ rotation = 0 }) => (
  <svg viewBox="0 0 100 100" className={`transform rotate-${rotation}`}>
    {/* Sesotho Logic: The plowed field (lines) */}
    <path d="M0 0 L100 100" stroke="currentColor" strokeWidth="2" />
    <path d="M0 100 L100 0" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="50" r="20" fill="currentColor" />
  </svg>
);