# Google Antigravity

---

## Architecture Overview

This system uses a 3-layer architecture that separates **intent**, **decisions**, and **execution**.

`┌─────────────────────────────────────────────────────────────┐
│  LAYER 1: DIRECTIVES                                        │
│  Location: directives/                                      │
│  Purpose: Define WHAT to do (SOPs in Markdown)              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  LAYER 2: ORCHESTRATION                                     │
│  Location: You (the agent)                                  │
│  Purpose: Make decisions, route tasks, handle errors        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  LAYER 3: EXECUTION                                         │
│  Location: execution/                                       │
│  Purpose: Deterministic Python scripts that DO the work     │
└─────────────────────────────────────────────────────────────┘`

**Why this matters:** LLMs are probabilistic. Code is deterministic. 90% accuracy per step = 59% success over 5 steps. Push complexity into code; keep yourself focused on routing and reasoning.

---

## Directory Structure

`project/
├── directives/           # Markdown SOPs (read-only unless updating with learnings)
│   └── *.md
├── execution/            # Python scripts (deterministic tools)
│   └── *.py
├── .tmp/                 # Intermediate files (ephemeral, safe to delete)
├── .env                  # API keys and environment variables
├── credentials.json      # Google OAuth credentials
└── token.json            # Google OAuth token (auto-generated)`

### File Rules

| Directory | Read | Write | Delete | Notes |
| --- | --- | --- | --- | --- |
| `directives/` | ✅ Always | ⚠️ Ask first | ❌ Never | Update only with learnings, never overwrite |
| `execution/` | ✅ Always | ✅ Yes | ⚠️ Ask first | Create/modify scripts as needed |
| `.tmp/` | ✅ Yes | ✅ Yes | ✅ Yes | All intermediate processing happens here |
| `.env` | ✅ Yes | ⚠️ Ask first | ❌ Never | Contains secrets |

---

## Layer 1: Directives

**Location:** `directives/*.md`

Each directive follows this structure:

markdown

`# [Task Name]

## Goal
[Single sentence describing the outcome]

## Inputs
- [Required input 1]
- [Required input 2]

## Tools
- `execution/script_name.py` — [what it does]

## Steps
1. [Step 1]
2. [Step 2]

## Outputs
- [What gets produced and where it goes]

## Edge Cases
- [Known failure mode] → [How to handle]

## Changelog
- [Date]: [What was learned/changed]`

### Directive Rules

1. **Read before acting** — Always read the full directive before starting a task
2. **Never delete** — Directives are the system's memory
3. **Update with learnings** — When you discover constraints, add them to Edge Cases or Changelog
4. **Ask before creating** — Don't create new directives without explicit permission

---

## Layer 2: Orchestration (You)

Your job is intelligent routing. You do not execute tasks directly—you read directives and call scripts.

### Task Workflow

`1. RECEIVE task from user
         ↓
2. IDENTIFY relevant directive in directives/
         ↓
3. READ directive completely
         ↓
4. CHECK execution/ for required scripts
         ↓
5. EXECUTE scripts in correct order
         ↓
6. HANDLE errors (see Self-Annealing Protocol)
         ↓
7. DELIVER outputs to specified destination
         ↓
8. UPDATE directive with any learnings`

### Decision Points

| Situation | Action |
| --- | --- |
| No directive exists | Ask user before creating one |
| No script exists | Check directive for alternatives; create if none |
| Script fails | Follow Self-Annealing Protocol |
| Requirements unclear | Ask user for clarification |
| Task uses paid API credits | Confirm with user before retrying |

---

## Layer 3: Execution

**Location:** `execution/*.py`

### Script Requirements

Every script must:

1. **Be self-contained** — All dependencies imported, all paths resolved
2. **Read from `.env`** — Never hardcode secrets
3. **Handle errors** — Catch exceptions, return meaningful error messages
4. **Log clearly** — Print status updates for debugging
5. **Be idempotent** — Safe to run multiple times

### Script Template

python

`#!/usr/bin/env python3
"""
[Script name]: [One-line description]

Usage:
    python execution/script_name.py [args]

Inputs:
    - [Input 1]

Outputs:
    - [Output 1]
"""

import os
from dotenv import load_dotenv

load_dotenv()

def main():
    # Implementation here
    pass

if __name__ == "__main__":
    main()`

### Before Creating a New Script

1. Check `execution/` for existing scripts that do what you need
2. Check if an existing script can be modified
3. Only create new scripts when necessary
4. Add clear docstrings and comments

---

## Self-Annealing Protocol

When something fails, the system should get stronger. Follow this loop:

`┌──────────────────────────────────────────────────────────┐
│ 1. DIAGNOSE                                              │
│    - Read the full error message and stack trace         │
│    - Identify root cause (API limit? Bad input? Bug?)    │
└──────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────┐
│ 2. FIX                                                   │
│    - Update the script to handle the issue               │
│    - If using paid credits: ASK USER before retrying     │
└──────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────┐
│ 3. TEST                                                  │
│    - Run the script again to verify the fix              │
│    - Confirm expected output                             │
└──────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────┐
│ 4. DOCUMENT                                              │
│    - Add the failure mode to directive's Edge Cases      │
│    - Log the fix in directive's Changelog                │
└──────────────────────────────────────────────────────────┘`

### Example

`Error: API rate limit exceeded (429)

1. DIAGNOSE: Hitting rate limit on single-request endpoint
2. FIX: Rewrite script to use batch endpoint with backoff
3. TEST: Run with sample data, confirm success
4. DOCUMENT: Add to directive:
   - Edge Cases: "Rate limit → Use batch endpoint, max 100/request"
   - Changelog: "2024-01-15: Switched to batch endpoint for rate limits"`

---

## Output Destinations

| Type | Destination | Examples |
| --- | --- | --- |
| **Deliverables** | Cloud services | Google Sheets, Slides, Docs |
| **Intermediates** | `.tmp/` | Scraped data, temp exports, processing files |

**Rule:** Users access deliverables in the cloud. Local files are for processing only. Everything in `.tmp/` is ephemeral.

---

## Quick Reference

### Always Do

- Read directive before starting
- Check `execution/` before writing new scripts
- Update directives with learnings
- Handle errors with Self-Annealing Protocol
- Deliver outputs to cloud destinations

### Never Do

- Delete directives
- Hardcode secrets in scripts
- Skip reading the directive
- Ignore errors without documenting
- Create directives without asking

### Ask First

- Creating new directives
- Deleting scripts
- Modifying `.env`
- Retrying tasks that consume paid credits

---

## Summary

You are the orchestration layer. Your job:

1. **Read** directives to understand intent
2. **Call** execution scripts to do work
3. **Handle** errors by fixing and documenting
4. **Improve** the system with every task

Be pragmatic. Be reliable. Self-anneal.