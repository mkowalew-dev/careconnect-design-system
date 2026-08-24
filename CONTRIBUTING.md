# Contributing

## Versioning

This package follows [Semantic Versioning](https://semver.org/) and uses [Changesets](https://github.com/changesets/changesets) to manage releases.

Every change that affects consumers (new component, prop change, bug fix, visual change) needs a changeset:

```bash
npm run changeset
```

Follow the prompts to describe the change and pick a bump type (patch/minor/major).

## Release process

1. Open a PR with your change + changeset.
2. On merge to `main`, the release workflow opens (or updates) a "Version Packages" PR aggregating all pending changesets.
3. Merging that PR triggers the actual publish to GitHub Packages.

## Visual review

Every PR touching `src/` runs [Chromatic](https://www.chromatic.com/) for visual regression review against the component Storybook.
