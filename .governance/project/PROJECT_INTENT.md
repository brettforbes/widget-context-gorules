# Project Intent

**Status:** Active — SPEC-020 GoRules Project Context
**Spec:** `@spiderfeet/.governance/specs/SPEC-020-gorules-project-context.md`

## Summary

`widget-context-gorules` is the embeddable context iframe for SpiderFeet project context. It presents BRMS Rules, the combined context graph, and provenance. FastAPI is the only runtime authority for rules, merges, and stored graphs.

## Goals

1. Provide a standalone and Composer-embedded React application.
2. Show one active pane and two icon summaries, with Combined Graph active initially.
3. Edit and release rules only through backend APIs.
4. Inspect revisions, decisions, holds, and bidirectional provenance.

## Non-goals

- Direct browser access to GoRules or TypeDB.
- Filesystem golden-corpus loading.
- Traversing or merging graphs in the browser.
- Validating httpx or Katana behavior in the first release.

## Stack

- Current baseline: webpack template and D3 prototype, documented as superseded by W1.
- Target: React, official `@gorules/jdm-editor`, and a graph renderer selected by W4.
- Dev server must not collide with `spiderfeet-widget` port 4001; W1 chooses the replacement port.

## Success signals

- SPEC-020 R20-12 acceptance criteria pass.
- Embed protocol version and origin checks are enforced.
- Backend simulation remains authoritative when editor WASM features are unavailable.
