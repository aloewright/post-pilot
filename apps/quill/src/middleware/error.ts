import type { ErrorHandler } from "hono";
import { HTTPException } from "hono/http-exception";
import { ZodError } from "zod";
import type { AppEnv } from "../index";

export const errorHandler: ErrorHandler<AppEnv> = (err, c) => {
  const requestId = c.get("requestId");

  if (err instanceof HTTPException) {
    console.error(
      JSON.stringify({
        requestId,
        level: "warn",
        status: err.status,
        path: c.req.path,
        msg: err.message,
      })
    );
    return c.json(
      { error: err.message, status: err.status, requestId },
      err.status
    );
  }

  if (err instanceof ZodError) {
    return c.json(
      {
        error: "Validation failed",
        status: 400,
        requestId,
        issues: err.issues,
      },
      400
    );
  }

  console.error(
    JSON.stringify({
      requestId,
      level: "error",
      path: c.req.path,
      msg: err.message,
      stack: err.stack,
    })
  );

  return c.json(
    { error: "Internal server error", status: 500, requestId },
    500
  );
};
