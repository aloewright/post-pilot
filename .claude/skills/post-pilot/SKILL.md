```markdown
# post-pilot Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill provides guidance on contributing to the `post-pilot` repository, a TypeScript codebase built with Next.js. It covers established coding conventions, dependency management workflows, and testing patterns to ensure consistency and maintainability across the project.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userProfile.ts`, `orderSummary.test.ts`

### Imports
- Use **relative imports** within the codebase.
  ```typescript
  import { fetchUser } from './api/userApi';
  ```

### Exports
- Prefer **named exports** over default exports.
  ```typescript
  // Good
  export const getOrder = () => { /* ... */ };

  // Avoid
  // export default getOrder;
  ```

### Commit Messages
- Mixed types, often prefixed with `chore`
- Average commit message length: 54 characters
  - Example: `chore: update dependencies to resolve security alerts`

## Workflows

### Dependency Update and Security Audit
**Trigger:** When dependencies need updating to resolve security alerts or keep the project up to date  
**Command:** `/update-deps-security`

1. Identify dependencies with security alerts (including direct and transitive).
2. Update versions in `package.json` and/or add overrides (e.g., `pnpm.overrides`).
3. Update `pnpm-lock.yaml` to reflect the new dependency tree.
4. Verify the build and run type checks to ensure stability.
5. Commit changes with a summary of addressed vulnerabilities.

**Files involved:**
- `package.json`
- `pnpm-lock.yaml`

**Example commit message:**
```
chore: update dependencies to resolve audit alerts (lodash, axios)
```

## Testing Patterns

- Test files follow the `*.test.*` pattern.
  - Example: `userApi.test.ts`
- Testing framework is not explicitly detected; check existing test files for framework usage.
- Place test files alongside the modules they test or in a dedicated `__tests__` directory.

**Example test file:**
```typescript
// userApi.test.ts
import { fetchUser } from './userApi';

describe('fetchUser', () => {
  it('returns user data', async () => {
    const user = await fetchUser('123');
    expect(user.id).toBe('123');
  });
});
```

## Commands

| Command               | Purpose                                                         |
|-----------------------|-----------------------------------------------------------------|
| /update-deps-security | Update dependencies and resolve security audit alerts           |

```