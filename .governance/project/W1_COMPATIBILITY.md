# W1 editor compatibility

Decision: the official JDM editor mounts in the Rules pane. SharedArrayBuffer and COOP/COEP isolation stay off.

## Why isolation stays off

Composer and this iframe are different origins. `spiderfeet-widget` already uses port 4001. This app uses port 4011. Setting `Cross-Origin-Embedder-Policy: require-corp` or `Cross-Origin-Opener-Policy: same-origin` on either app would require the same headers on the parent, or the iframe would fail to load. W1 does not change Composer headers.

The dev server sends only `Cross-Origin-Resource-Policy: cross-origin`.

## What remains authoritative

Local editor changes are a draft. Rule results used by a merge come from backend simulation and an explicit release. WASM features can be reconsidered when the host embed in H1 is available to test.
