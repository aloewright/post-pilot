
## 2024-05-24 - Deferring State for Streaming Text Calculations
**Learning:** When dealing with rapidly updating text streams (e.g., streaming LLM output character-by-character at intervals of ~24ms), running expensive synchronous computations (like text analysis/scoring) on the active stream value blocks the main UI thread and causes lag/stuttering.
**Action:** Always use React's `useDeferredValue` to decouple the rapidly updating UI state from the state passed into expensive `useMemo` or synchronous operations. This allows React to prioritize rendering the stream while running the heavy calculations in the background.
