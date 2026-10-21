# Git Workflow

## Branches

| Branch | Role |
|--------|------|
| `main` | Promotion and release only. |
| `develop` | Integration branch for normal SPEC-020 work. Created from `main` at W0. |
| `feature/*`, `fix/*`, `docs/*`, `chore/*` | One GitHub issue per branch, created from `develop`. |

## Rules

1. Create normal work branches from `develop` only.
2. Do not commit or push directly to `main` or `develop`.
3. Open every pull request into `develop` with the issue, SPEC-020 requirement IDs, and verification evidence.
4. Promote `develop` to `main` only through an explicit release pull request.
5. Create hotfix branches from `main`, merge them to `main`, and reconcile them into `develop`.
6. Return the repository to `develop` after each landed work unit.
7. Commit only when the operator or active SPEC-020 execution request explicitly asks for it.

## Branch protection expectations

Documented in `.github/branch-protection-checklist.md`. Protection is an operator repository setting; W0 does not claim it is already enforced.

## References

- `.github/pull_request_template.md`
- `.governance/project/ISSUE_PICKUP_FLOW.md`
