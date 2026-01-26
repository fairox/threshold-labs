---
name: antigravity-skill-creator
description: Generates high-quality, predictable, and efficient .agent/skills/ directories based on user requirements. Use when the user wants to create a new skill or update an existing one.
---

# Antigravity Skill Creator

## When to use this skill
- When the user asks to "create a skill" or "make a skill for X".
- When handling requests to "update the X skill".
- When generating `.agent/skills/` directory structures.

## Workflow
1.  **Analyze Request**: Identify the specific capability the user wants to encapsulate.
2.  **Determine Structure**: logical folder hierarchy (SKILL.md, scripts/, resources/).
3.  **Draft Content**: Create the content for `SKILL.md` and auxiliary files.
4.  **Validate**: Ensure YAML frontmatter is correct and "Claude Way" writing principles are followed.
5.  **Output**: Write the files to the `.agent/skills/[skill-name]/` directory.

## Instructions

### 1. Naming & Location
-   **Folder Name**: Use kebab-case (e.g., `data-processing`).
-   **Location**: `.agent/skills/[skill-name]/`.
-   **Skill Name (YAML)**: Gerund form (e.g., `processing-data`), max 64 chars, lowercase, no "claude"/"anthropic".

### 2. File Structure
Every skill must follow this hierarchy:
```
.agent/skills/[skill-name]/
├── SKILL.md                  # (Required) Main logic and instructions
├── scripts/                  # (Optional) Helper scripts
├── examples/                 # (Optional) Reference implementations
└── resources/                # (Optional) Templates, schemas, or assets
```

### 3. SKILL.md Template
Use this template for the `SKILL.md` file:
```markdown
---
name: [gerund-name]
description: [3rd-person description. Max 1024 chars.]
---

# [Skill Title]

## When to use this skill
- [Trigger 1]
- [Trigger 2]

## Workflow
[Checklist or step-by-step guide]

## Instructions
[Specific logic, code snippets, or rules]

## Resources
- [Link to scripts/ or resources/]
```

### 4. Writing Principles (The "Claude Way")
-   **Conciseness**: Focus on unique logic. No definitions of common terms.
-   **Progressive Disclosure**: Keep `SKILL.md` under 500 lines. Use secondary files for details.
-   **Paths**: Always use forward slashes `/`.
-   **Degrees of Freedom**:
    -   High (heuristics) -> Bullet points.
    -   Medium (templates) -> Code blocks.
    -   Low (fragile ops) -> Specific commands.

## Resources
-   None required for the creator itself, but it generates resources for others.
