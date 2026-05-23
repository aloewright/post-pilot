## 2024-11-20 - [Stream output rendering]
**Learning:** React state updates using a simple loop in a `useEffect` setting a very fast interval (24ms) can block the main thread and slow down UI responsiveness.
**Action:** When streaming fast fake updates, use `useDeferredValue` to defer rendering of the rapidly changing string before pushing it to expensive components, or render standard HTML nodes without complex React bindings if possible.
