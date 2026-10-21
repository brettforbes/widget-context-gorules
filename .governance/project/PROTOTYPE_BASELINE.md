# Superseded prototype baseline

Recorded by W0 on 2026-10-21. These are baseline facts, not independent bugs to fix before W1.

| Observation | W0 disposition |
|-------------|----------------|
| `package.json` identified the repo as `template-iframe-widget`. | Identity updated by W0. |
| UI is a vanilla webpack/D3 prototype with index, promo, and scratch regions. | Superseded by the W1 React shell. |
| Startup references sample data and DOM mounts that are absent or inconsistent. | Do not patch independently; W1 replaces the entry path. |
| No GoRules, JDM editor, tests, or embed protocol exists. | Delivered by W1–W7. |
| Dev server uses port 4001, which collides with `spiderfeet-widget`. | W1 selects a non-colliding port. |
| `.idea` metadata refers to an earlier graph-viz name. | Local IDE metadata is not product scope. |

Do not treat this file as permission to repair the prototype in place.
