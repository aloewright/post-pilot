## 2024-06-01 - Prevent main thread blocking during fake text streaming
**Learning:** During rapid state updates like fake text streaming (e.g. interval ~24ms), passing the rapidly changing state directly to expensive synchronous evaluation functions (like deterministic scoring/analyzing) causes severe main thread blocking and unresponsiveness.
**Action:** Use React's `useDeferredValue` to wrap the rapidly updating stream state before passing it to expensive synchronous functions. This allows React to prioritize UI updates and interrupt the expensive rendering.
