## 2025-05-15 - Improve Navigation Accessibility

**Learning:** When multiple `<nav>` elements exist on a page (like a main navigation and a footer navigation), screen readers can have trouble distinguishing them if they are not explicitly labelled. Additionally, generic containers like `<div>` around list of links in a footer could easily be improved by wrapping them in a `<nav>` with an appropriate `aria-label`.

**Action:** Always wrap significant groups of links in a `<nav>` tag and add unique `aria-label`s to them (e.g. `aria-label="Main"`, `aria-label="Footer"`) so that screen reader users can quickly jump to the correct navigation landmark.