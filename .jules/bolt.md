## 2024-05-18 - Deferring Expensive Operations During Fake Text Streaming
**Learning:** During fake text streaming (like character-by-character rendering at ~24ms intervals), performing expensive synchronous computations on every state update can block the main UI thread and cause jank.
**Action:** Use React's `useDeferredValue` on the rapidly changing state before passing it to expensive synchronous computations (like `analyzeText` and `scoreDeterministic`). This allows React to prioritize the UI update (streaming text) and run the expensive computation in the background when it has time.
