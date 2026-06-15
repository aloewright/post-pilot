---
name: dependency-update-and-security-audit
description: Workflow command scaffold for dependency-update-and-security-audit in post-pilot.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /dependency-update-and-security-audit

Use this workflow when working on **dependency-update-and-security-audit** in `post-pilot`.

## Goal

Update dependencies to address security vulnerabilities and clear audit alerts, including direct and transitive upgrades, and update lockfiles.

## Common Files

- `package.json`
- `pnpm-lock.yaml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Identify dependencies with security alerts (direct and transitive).
- Update versions in package.json and/or add overrides (e.g., pnpm.overrides).
- Update pnpm-lock.yaml to reflect new dependency tree.
- Verify build and typecheck.
- Commit changes with a summary of addressed vulnerabilities.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.