## 2024-05-19 - useDeferredValue for rapidly updating UI
**Learning:** During text streaming with very short intervals (e.g. 24ms), synchronous operations on the changing state (like expensive calculations or text analysis) will block the main thread and cause the UI to become unresponsive.
**Action:** Use React's `useDeferredValue` for the rapidly changing state and perform the expensive synchronous computations on the deferred value to ensure the main thread isn't blocked.
