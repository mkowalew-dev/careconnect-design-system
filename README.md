# CareConnect Design System

The shared UI component library for CareConnect — a demo healthcare EMR/portal application. Built with React + TypeScript, documented with Storybook.

## Install

This package is published to GitHub Packages, not the public npm registry. Add to your project's `.npmrc`:

```
@mkowalew-dev:registry=https://npm.pkg.github.com
```

Then:

```bash
npm install @mkowalew-dev/careconnect-design-system
```

Installing from GitHub Packages requires authentication even for public packages — see [GitHub's package installation docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages) for setting up a personal access token with `read:packages` scope.

## Usage

```tsx
import { Button, ToastProvider } from '@mkowalew-dev/careconnect-design-system';
import '@mkowalew-dev/careconnect-design-system/styles';
```

## Development

```bash
npm install
npm run storybook   # component playground on :6006
npm run build        # produces dist/
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the versioning and release process.
