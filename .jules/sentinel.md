## 2026-05-16 - Timing Attack in x-admin-key Comparison
**Vulnerability:** The admin key check used simple equality (provided !== expected) which leaked timing information, enabling side-channel attacks.
**Learning:** In Cloudflare Workers/Hono, always use hono's timingSafeEqual from hono/utils/buffer for comparing strings or buffers that represent secrets.
**Prevention:** Replace direct equality operators with timingSafeEqual for authentication headers or tokens.

## 2026-05-17 - Timing Attack in Polar Webhook Signature Verification
**Vulnerability:** The webhook verification check used a custom `constantTimeEqual` function using bitwise XORs on JS strings. Due to JS engine optimization (JIT/V8) string representation is not guaranteed to be constant time which leaks timing information, enabling side-channel attacks.
**Learning:** Avoid custom cryptography/timing safe string implementations in javascript and utilize standard utility buffer implementation (Hono's `timingSafeEqual`).
**Prevention:** Replaced custom `constantTimeEqual` function with Hono's `timingSafeEqual` in `apps/quill/src/lib/polar.ts`.