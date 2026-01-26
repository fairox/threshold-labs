---
name: using-git-worktrees
description: Use when you need to switch contexts or work on parallel tasks without disrupting your current workspace state - creates isolated directories for different branches
---

# Using Git Worktrees

## Overview
Switching branches in a single directory disrupts your state (open files, running servers, uncommitted changes). Git worktrees allow you to check out multiple branches in separate directories simultaneously.

**Core principle:** One directory per active task. Never context switch in place.

## Directory Selection Process
You must identify a safe location for worktrees.

**1. Check Existing Directories**
Look for these common patterns:
- `.worktrees/` (inside project)
- `../<project-name>-worktrees/` (sibling directory)
- `worktrees/` (inside project)

**2. Check CLAUDE.md**
Does the project specify a worktree location preference?

**3. Ask User**
If no clear pattern exists: "I'd like to use git worktrees to keep this workspace clean. Where should I create them? (Default: `.worktrees/` inside project)"

## Safety Verification

**For Project-Local Directories (.worktrees or worktrees):**
- **MUST** be in `.gitignore`.
- Run: `grep ".worktrees" .gitignore`
- If missing: Stop. Ask user to add it or choose another location.
- **Why:** You don't want to commit your worktrees directory.

**For Global Directory (~/.config/superpowers/worktrees):**
- Safe from git verification, but ensure you have permissions.

## Creation Steps

**1. Detect Project Name**
```bash
basename $(git rev-parse --show-toplevel)
# Example: "my-app"
```

**2. Create Worktree**
```bash
# Syntax: git worktree add <path> <branch>
git worktree add .worktrees/feat-login feat-login
```

**3. Run Project Setup**
New worktrees are empty (except for git files). You usually need to install dependencies.
```bash
cd .worktrees/feat-login
npm install / cargo build / go mod download
```

**4. Verify Clean Baseline**
Run tests immediately to ensure the new environment is valid.
```bash
npm test
```

**5. Report Location**
"Created worktree at `.worktrees/feat-login`. I will run all commands from that directory."

## Quick Reference
```bash
# List worktrees
git worktree list

# Add new
git worktree add .worktrees/<name> -b <branch>

# Remove
git worktree remove .worktrees/<name>
```

## Common Mistakes
- **Skipping ignore verification:** Committing `.worktrees` to the repo.
- **Assuming directory location:** Creating mess in project root.
- **Proceeding with failing tests:** Improving on broken baseline.
- **Hardcoding setup commands:** Assuming `npm install` works for everything.

## Example Workflow
```
User: "Refactor the login page"
You: [Brainstorming] -> Plan: "Refactor Login"

You: "Ready to implement. I'll create a worktree."
[Check .gitignore for .worktrees -> Found]
[Run: git worktree add -b refactor-login .worktrees/refactor-login]
[Run: cd .worktrees/refactor-login && npm install]
[Run: npm test -> Pass]

You: "Worktree ready at .worktrees/refactor-login. Starting implementation."
```

## Red Flags
- "I'll just checkout branch here" (Disruptive)
- "Ignoring .gitignore warning" (Messy)
- "Skipping setup" (Broken environment)

## Integration
- **brainstorming** - Often leads to creating a worktree
- **writing-plans** - Should be executed inside the worktree
- **finishing-a-development-branch** - Handles cleanup of worktrees
