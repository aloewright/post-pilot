## 2025-03-05 - Form controls missing focus indicators and ARIA labels
**Learning:** Found that custom search inputs and select dropdowns were using `focus:outline-none` but missing visual focus states, impairing keyboard accessibility. Additionally, they were missing explicit ARIA labels.
**Action:** Always ensure any interactive control using `focus:outline-none` has a corresponding `focus-visible:` ring state added (using standard `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]`), and verify inputs have `aria-label` or related `aria-labelledby`.

## 2025-03-05 - Custom Layout Wrappers Obscuring Implicit Labels
**Learning:** The custom UI component `<Control>` relies on wrapping inputs via `children` rather than using standard explicit `htmlFor` and `id` linking. This pattern breaks implicit label-control relationships for screen readers, making the nested form inputs inaccessible without explicit `aria-label`s.
**Action:** Always ensure that interactive elements nested inside custom layout wrappers (like `<Control>` or `<Panel>`) have explicit `aria-label` attributes to maintain accessibility, and remember to restore visual focus indicators if `focus:outline-none` is applied.
