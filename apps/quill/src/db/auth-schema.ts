import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Drizzle schema for the better-auth tables. Mirrors drizzle/0001_better_auth.sql.
// `usePlural: true` in the auth config means table names are pluralised; column
// names match better-auth's defaults (camelCase, no override).

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("emailVerified", { mode: "boolean" })
    .notNull()
    .default(false),
  image: text("image"),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull(),
});

export const sessions = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  expiresAt: integer("expiresAt", { mode: "timestamp_ms" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const accounts = sqliteTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: integer("accessTokenExpiresAt", {
    mode: "timestamp_ms",
  }),
  refreshTokenExpiresAt: integer("refreshTokenExpiresAt", {
    mode: "timestamp_ms",
  }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull(),
});

export const verifications = sqliteTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expiresAt", { mode: "timestamp_ms" }).notNull(),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }),
});

// better-auth apiKey plugin table. Model name is `apikey`; with `usePlural`
// in the drizzle adapter the table is `apikeys`. Columns mirror the plugin's
// schema (see @better-auth/api-key/dist/types.d.mts) — all rate-limit,
// permissions, expiration and metadata columns are included so the optional
// features can be enabled per-call without further migrations.
export const apikeys = sqliteTable("apikeys", {
  id: text("id").primaryKey(),
  configId: text("configId").notNull(),
  name: text("name"),
  start: text("start"),
  prefix: text("prefix"),
  key: text("key").notNull(),
  referenceId: text("referenceId").notNull(),
  refillInterval: integer("refillInterval"),
  refillAmount: integer("refillAmount"),
  lastRefillAt: integer("lastRefillAt", { mode: "timestamp_ms" }),
  enabled: integer("enabled", { mode: "boolean" }).notNull().default(true),
  rateLimitEnabled: integer("rateLimitEnabled", { mode: "boolean" })
    .notNull()
    .default(true),
  rateLimitTimeWindow: integer("rateLimitTimeWindow"),
  rateLimitMax: integer("rateLimitMax"),
  requestCount: integer("requestCount").notNull().default(0),
  remaining: integer("remaining"),
  lastRequest: integer("lastRequest", { mode: "timestamp_ms" }),
  expiresAt: integer("expiresAt", { mode: "timestamp_ms" }),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull(),
  permissions: text("permissions"),
  metadata: text("metadata"),
});
