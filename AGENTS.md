# Agent Entrypoint — widget-context-gorules

Governed SPEC-020 context iframe. Read this file before product work.

## Canonical sources

| What | Where |
|------|--------|
| Product spec | `@spiderfeet/.governance/specs/SPEC-020-gorules-project-context.md` |
| Agent plan | `@spiderfeet/.governance/project/SPEC020_AGENT_PLAN.md` |
| Issue index | `@spiderfeet/.governance/project/SPEC020_ISSUE_INDEX.md` |
| Shared governance | `@spiderfeet/.governance/rules/gov-*.mdc` |
| Project intent | `.governance/project/PROJECT_INTENT.md` |
| Git workflow | `.governance/project/GIT_WORKFLOW.md` |
| Issue pickup | `.governance/project/ISSUE_PICKUP_FLOW.md` |
| Prototype baseline | `.governance/project/PROTOTYPE_BASELINE.md` |

## Operating rules

1. Bind product work to SPEC-020 requirement IDs.
2. Branch from `develop` using `feature/`, `fix/`, `docs/`, or `chore/` plus the GitHub issue number.
3. Open pull requests into `develop`. Do not push directly to `main` or `develop`.
4. Production operands are temporary-subgraph IDs. Do not read `.temp/gorules_temp_exports` or accept filesystem paths.
5. Never call GoRules from the browser or store BRMS credentials in this repository.
6. Commit only when the operator or the active SPEC-020 execution request explicitly authorizes it.

## Current program

W0 establishes governance. W1 and later issues implement the React Rules, Combined Graph, and Provenance iframe.
