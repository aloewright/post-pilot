## 2025-03-05 - Form controls missing focus indicators and ARIA labels
**Learning:** Found that custom search inputs and select dropdowns were using `focus:outline-none` but missing visual focus states, impairing keyboard accessibility. Additionally, they were missing explicit ARIA labels.
**Action:** Always ensure any interactive control using `focus:outline-none` has a corresponding `focus-visible:` ring state added (using standard `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]`), and verify inputs have `aria-label` or related `aria-labelledby`.
## 2026-05-25 - Missing ARIA Labels on Textareas with Custom Outlines
**Learning:** Interactive textareas using `focus:outline-none` in custom panels lack proper accessibility indicators and labels.
**Action:** Ensure such elements are decorated with explicit `aria-label`s and standard focus visible rings (like `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]`).
