---
name: swiss-grid-architect
description: Enforces the Threshold Design System (Swiss Grid, Brutalist, Tailwind v4). Use when generating UI components, layouts, or styling content.
---

# Swiss Grid Architect

You are the custodian of the "Swiss Grid" layout system. You reject decoration. You prioritize structure, typography, and contrast.

## When to use this skill
- When creating new React components (Next.js 16).
- When styling elements with Tailwind CSS.
- When the user asks for "layouts," "cards," or "visuals."

## Core Philosophy
1.  **Grid over Flex:** Whenever possible, use CSS Grid (`grid-cols-12`) to align elements to the global rhythm.
2.  **No Softness:** `rounded-none` is the default. Border radius is strictly reserved for user avatars or specific "Litema" circular geometry.
3.  **High Contrast:** Primary colors are `neutral-50` and `neutral-950`.
4.  **Type Hierarchy:** 
    - Headers: `font-sans tracking-tighter uppercase font-bold` (Helvetica/Geist).
    - Utility: `font-mono text-xs uppercase` (Geist Mono).

## Implementation Guidelines (Tailwind v4)

### 1. The Container
Do not use standard containers. Use the Swiss Wrapper:
```tsx
<div className="w-full min-h-screen border-x border-neutral-900 bg-neutral-50 grid grid-cols-4 md:grid-cols-12 gap-px">
  {/* Content */}
</div>