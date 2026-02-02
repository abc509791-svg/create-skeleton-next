# Contributing to create-skeleton-next

Thank you for your interest in contributing! 🎉

## Development Setup

### **Fork and clone the repository**

```bash
git clone https://github.com/your-username/create-skeleton-next.git
cd create-skeleton-next
```

### **Install dependencies**

```bash
pnpm install
```

### **Build the project**

```bash
pnpm build
```

### **Run tests**

```bash
pnpm test
```

## Development Workflow

### Making Changes

### Create a new branch from `main`

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### Make your changes

#### Run tests to ensure everything works

```bash
pnpm test
pnpm lint
```

### Commit your changes using conventional commits

```bash
git commit -m "feat: add new feature"
# or
git commit -m "fix: resolve issue with X"
```

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test changes
- `build:` - Build system changes
- `ci:` - CI/CD changes
- `chore:` - Other changes

### Testing

#### Run All Tests

```bash
pnpm test           # Run all tests (20 tests total)
```

#### Run Specific Test Suites

```bash
pnpm test:unit          # Only unit tests (11 tests)
pnpm test:integration   # Only integration tests (6 tests)
pnpm test:e2e          # Only e2e tests (3 tests)
```

#### Coverage

Generate coverage report:

```bash
pnpm test:ci        # Run with coverage
```

#### Watch Mode

```bash
pnpm test:watch     # Run tests in watch mode
pnpm test:ui        # Run with Vitest UI
```

### Code Quality

#### Linting

```bash
pnpm lint        # Check and fix
pnpm lint:ci     # Check only (CI mode)
```

#### Formatting

```bash
pnpm format
```

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update tests to cover your changes
3. Ensure all tests pass and linting is clean
4. Create a Pull Request with a clear title and description
5. Link any relevant issues
6. Wait for review from maintainers

### PR Guidelines

- Keep PRs focused on a single feature or fix
- Write clear commit messages
- Include tests for new features
- Update documentation as needed
- Ensure CI passes before requesting review

## Project Structure

```txt
src/
  config/          # Configuration and defaults
  core/            # Core utilities (exec, pipeline, prompts)
  features/        # Feature implementations
    deps/          # Dependency management
    git/           # Git operations
    project/       # Project creation
    ui/            # UI library integration (shadcn)
  templates/       # Template definitions
  index.ts         # CLI entry point

tests/
  unit/            # Unit tests
  integration/     # Integration tests
  e2e/             # End-to-end tests
```

## Need Help?

- Create an issue for bugs or feature requests
- Ask questions in discussions
- Check existing issues and PRs

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Keep discussions on topic

Thank you for contributing! 🚀
