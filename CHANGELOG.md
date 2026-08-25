# @mkowalew-dev/careconnect-design-system

## 0.3.1

### Patch Changes

- 4ccb63e: Update `--cc-text-sm` typography token (0.875rem → 1.375rem), affecting small text sizing across components that consume it.

## 0.3.0

### Minor Changes

- 3705c81: Add `appVersion` and `designSystemVersion` props to `LoginScreen`, rendered as a small footer line when provided. Also export a `DESIGN_SYSTEM_VERSION` constant from the package root so consumers don't need to hardcode the design system's own version.

## 0.2.2

### Patch Changes

- 3e6c304: Add `tslib` as an explicit dependency. `echarts-for-react` (used internally by the chart components) imports it via a compiled helper but never declared it as a dependency itself, so consumers whose own dependency tree didn't happen to hoist a `tslib` from elsewhere would fail to resolve it at build time.

## 0.2.1

### Patch Changes

- 7edf6c2: Fix missing design tokens/reset in published CSS; externalize runtime dependencies from the build to reduce bundle size and avoid duplicate copies in consumers.

## 0.2.0

### Minor Changes

- 3733419: Initial extraction of the CareConnect design system as a standalone, independently-versioned package.
