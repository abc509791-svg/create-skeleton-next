# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0](https://github.com/jorggerojas/create-skeleton-next/compare/v0.1.0...v1.0.0) (2026-02-02)


### Bug Fixes

* **husky,pnpm:** remove pnpm-workspace.yaml and update husky hooks ([4b99fce](https://github.com/jorggerojas/create-skeleton-next/commit/4b99fce1e7a1db73589ca2e6c30b53e8c46e09f2))
* **workflows:** add build step before test ([b43e6a3](https://github.com/jorggerojas/create-skeleton-next/commit/b43e6a31ded4aeca953002e54a3bfd77c098c5f0))

## [0.1.0] - 2024-02-01

### Features

- **cli**: Initial CLI implementation with interactive prompts
- **templates**: Support for App Router and Pages Router templates
- **github**: GitHub repository creation with gh CLI
- **shadcn**: Automatic shadcn/ui components installation
- **git**: Local git repository initialization
- **prompts**: Interactive mode for missing options
- **non-interactive**: Support for --yes flag to skip prompts

### Documentation

- Complete README with usage examples
- Installation and development instructions
- Template repository information

### CI/CD

- GitHub Actions workflow for testing
- GitHub Actions workflow for automated releases
- Multi-OS testing (Ubuntu, macOS, Windows)
- Multi-Node version testing (18, 20)

### Testing

- Unit tests for core utilities
- Integration tests for features
- E2E tests for CLI commands
- Coverage reporting with Codecov
