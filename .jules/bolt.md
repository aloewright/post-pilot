## 2024-05-29 - Defer Expensive Computations During High-Frequency Streaming
**Learning:** During fake text streaming (e.g., character-by-character updates at ~24ms intervals), performing expensive synchronous operations like text analysis or syntax parsing on every state update can severely block the main thread and cause UI stuttering.
**Action:** Always wrap rapidly changing streaming state with React's `useDeferredValue` before passing it to expensive synchronous computations, allowing React to prioritize smooth UI rendering and evaluate the computation in the background.
