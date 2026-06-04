## 2024-05-13 - Streaming Re-analysis Bottleneck
**Learning:** The frontend streams AI text and calls `analyzeText` on the *entire accumulated text* every 24ms to provide a live rubric snapshot. This creates an O(N²) performance bottleneck where expensive regexes in `countSyllables` are re-evaluated repeatedly for the exact same words on every stream tick.
**Action:** When a function is called in a tight loop on cumulative data (like streaming), memoize expensive operations (like regex matches on words) to avoid redundant computation.
