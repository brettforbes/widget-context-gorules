# Issue Pickup Flow

1. Select the next `Ready` SPEC-020 issue whose dependencies are on `develop`.
2. Read the GitHub issue, SPEC-020 requirement IDs, and `@spiderfeet/.governance/project/SPEC020_AGENT_PLAN.md`.
3. Update `develop`, then create `feature/<issue>-<slug>`, `fix/<issue>-<slug>`, `docs/<issue>-<slug>`, or `chore/<issue>-<slug>`.
4. Comment on the issue at start and move it to `In progress`.
5. Implement only that issue.
6. Verify the issue's named checks and classify evidence as direct, partial, or surrogate-only.
7. Open a pull request into `develop`, move the issue to `In review`, and link the evidence.
8. Merge only when checks and acceptance criteria pass, then move the issue to `Done`.
9. Return the repository to `develop` before starting another issue.

W0 is the bootstrap exception: `develop` was created from `main`, and this chore branch was then created from `develop`.
