// Hono response helpers for the humanizer routes — wraps c.json with the
// project's standard { success, data } / { success, error } envelope.
import type { Context } from "hono";

export function successResponse(c: Context, data: unknown, status = 200) {
  return c.json({ success: true, data }, status as 200);
}

export function errorResponse(
  c: Context,
  error: string,
  status = 500,
  extra?: Record<string, unknown>
) {
  return c.json({ success: false, error, ...extra }, status as 500);
}
