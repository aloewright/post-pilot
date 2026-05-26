
## 2024-05-17 - Pre-compiling Stateful Global RegExes
**Learning:** When pre-compiling regular expressions with the global flag (`g` or `gi`) to optimize performance in loops, `RegExp` objects maintain state via the `lastIndex` property. Calling `.test()` or `.exec()` will advance this `lastIndex`.
**Action:** When iterating through a cached array of global regexes to test matches, always explicitly reset `lastIndex = 0` before checking `regex.test(text)` or `text.match(regex)` to prevent erratic behavior and random match failures.
