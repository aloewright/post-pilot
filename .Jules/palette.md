## 2025-03-05 - Form controls missing focus indicators and ARIA labels
**Learning:** Found that custom search inputs and select dropdowns were using `focus:outline-none` but missing visual focus states, impairing keyboard accessibility. Additionally, they were missing explicit ARIA labels.
**Action:** Always ensure any interactive control using `focus:outline-none` has a corresponding `focus-visible:` ring state added (using standard `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]`), and verify inputs have `aria-label` or related `aria-labelledby`.

## 2026-05-21 - Nested Form Controls accessibility issue
**Learning:** In the UI components (e.g., within `apps/quill/client/components`), custom form control wrappers like `<Control>` rely on passing inputs via the `children` prop rather than explicitly linking labels with `htmlFor` and `id`. This means interactive elements nested within these wrappers lack implicitly associated accessible names.
**Action:** When adding or working with form controls nested within these wrapper components, always explicitly add `aria-label` attributes to the interactive elements (inputs, selects, textareas) to ensure proper screen reader accessibility.
