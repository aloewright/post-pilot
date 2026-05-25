## 2024-05-24 - [Defer Expensive Synchronous Work During Fake Streaming]
**Learning:** Fake text streaming with `setInterval` at rapid intervals (e.g. 24ms) can severely block the main thread if expensive synchronous computations (like text analysis/scoring) depend directly on the streaming state.
**Action:** Always wrap rapidly changing state in `useDeferredValue` before feeding it into expensive `useMemo` hooks to keep the UI thread unblocked.
