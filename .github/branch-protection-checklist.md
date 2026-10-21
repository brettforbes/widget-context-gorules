# Branch protection expectations

W0 documents the expected settings. It does not change GitHub branch protection.

## `main`

- Pull request required.
- Direct pushes restricted.
- Accepts promotion from `develop` and hotfixes originating from `main`.

## `develop`

- Pull request required.
- Direct pushes restricted.
- Normal issue branches use `feature/`, `fix/`, `docs/`, or `chore/` plus the issue number.

If required reviews are enabled, an agent must not self-merge.
