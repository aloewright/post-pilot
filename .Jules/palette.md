## 2025-03-05 - Form controls missing focus indicators and ARIA labels
**Learning:** Found that custom search inputs and select dropdowns were using `focus:outline-none` but missing visual focus states, impairing keyboard accessibility. Additionally, they were missing explicit ARIA labels.
**Action:** Always ensure any interactive control using `focus:outline-none` has a corresponding `focus-visible:` ring state added (using standard `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]`), and verify inputs have `aria-label` or related `aria-labelledby`.
## 2024-06-01 - Focus state verification via Playwright
**Learning:** Found that when verifying focus states via headless Playwright scripts, using `page.eval_on_selector('selector', 'el => el.focus()')` may be more reliable for capturing visual focus indicators in screenshots than using standard `locator.focus()` or keyboard navigation.
**Action:** Use `page.eval_on_selector` to focus elements when capturing screenshots to verify `focus-visible` styling changes.
