## 2024-05-24 - DOMPurify Sanitization Required for Editor
**Vulnerability:** User input loaded into `tempContainer.innerHTML` and `newContainer.innerHTML` using `renderToString` creates a DOM-based XSS vulnerability.
**Learning:** React's `renderToString` escapes initial content, but when assigning explicitly to `.innerHTML`, raw HTML representations must be parsed securely before feeding it to `prosemirror-model`'s `DOMParser`.
**Prevention:** Always use `DOMPurify.sanitize()` when setting `.innerHTML`, especially when converting stringified JSX elements to Prosemirror nodes.
