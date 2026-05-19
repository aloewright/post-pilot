## 2026-05-16 - Timing Attack in x-admin-key Comparison
**Vulnerability:** The admin key check used simple equality (provided !== expected) which leaked timing information, enabling side-channel attacks.
**Learning:** In Cloudflare Workers/Hono, always use hono's timingSafeEqual from hono/utils/buffer for comparing strings or buffers that represent secrets.
**Prevention:** Replace direct equality operators with timingSafeEqual for authentication headers or tokens.
## 2026-05-19 - Timing Attack in Webhook Signature Verification
**Vulnerability:** The webhook signature verification in Polar API client (`apps/quill/src/lib/polar.ts`) used a custom `constantTimeEqual` function built using bitwise operations. This custom implementation in JavaScript/TypeScript might not truly run in constant time due to JIT optimizations, making the webhook endpoint vulnerable to timing side-channel attacks.
**Learning:** Custom implementations of constant-time string comparisons in JavaScript are unreliable against sophisticated timing attacks. Built-in, natively implemented functions should be used.
**Prevention:** In Cloudflare Workers/Hono applications, always rely on the built-in, natively implemented `timingSafeEqual` from `hono/utils/buffer` for cryptographic comparisons rather than attempting to implement it manually.
