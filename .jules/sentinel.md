## 2026-05-16 - Timing Attack in x-admin-key Comparison
**Vulnerability:** The admin key check used simple equality (provided !== expected) which leaked timing information, enabling side-channel attacks.
**Learning:** In Cloudflare Workers/Hono, always use hono's timingSafeEqual from hono/utils/buffer for comparing strings or buffers that represent secrets.
**Prevention:** Replace direct equality operators with timingSafeEqual for authentication headers or tokens.## 2024-05-19 - Timing Safe Equal for Webhooks
**Vulnerability:** A custom `constantTimeEqual` function was implemented in `apps/quill/src/lib/polar.ts` for webhook verification. Custom implementations are prone to timing attacks due to JIT optimizations.
**Learning:** JS engines (like V8) use JIT compilation and can optimize loops or short-circuit operations in ways that defeat the constant-time execution of custom code, leaving the application vulnerable to timing attacks.
**Prevention:** In Cloudflare Workers/Hono, always use the asynchronous `timingSafeEqual` from `hono/utils/buffer` (ensure it is awaited) for comparing strings or buffers that represent secrets to prevent timing side-channel attacks.
