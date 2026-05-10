## 2025-05-10 - DOMPurify usage for raw HTML
**Vulnerability:** Raw HTML was being dynamically injected into the DOM via `.innerHTML` directly using content from a markdown processor or external HTML string inputs, without proper sanitization (e.g. `components/chat/diffview.tsx` and `lib/editor/functions.tsx`).
**Learning:** React provides `dangerouslySetInnerHTML` which is inherently dangerous, but using `.innerHTML` on raw DOM elements is just as vulnerable to XSS. This project converts Markdown to HTML strings (using `renderToString`) before inserting it into the DOM.
**Prevention:** Always use a HTML sanitizer such as DOMPurify (which was added here) before inserting any dynamically generated or user-controlled HTML string via `.innerHTML`.
