import { createAuthClient } from "better-auth/react";

// Same-origin: the Worker mounts better-auth at /api/auth/*, so the client
// needs no explicit baseURL — it picks up the current origin.
export const authClient = createAuthClient({
  basePath: "/api/auth",
});

export const { useSession, signIn, signUp, signOut } = authClient;
