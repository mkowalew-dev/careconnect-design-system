---
"@mkowalew-dev/careconnect-design-system": patch
---

Add `tslib` as an explicit dependency. `echarts-for-react` (used internally by the chart components) imports it via a compiled helper but never declared it as a dependency itself, so consumers whose own dependency tree didn't happen to hoist a `tslib` from elsewhere would fail to resolve it at build time.
