## 2025-03-01 - Avoid Redundant Expensive Text Splitting in AI Detector
**Learning:** The `detectAI` heuristic engine was repeatedly calling the expensive string parsing function `splitIntoSentences` on the same text input from different helper functions (`calculatePassiveVoiceRatio` and `calculateAIPhraseDensity`), causing O(N) redundant work.
**Action:** When a top-level orchestrator computes an expensive derived state (like parsed sentences), pass the computed state (or required metadata like array length) down to pure helper functions instead of re-evaluating it inside each helper.
