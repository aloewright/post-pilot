import { sql } from "drizzle-orm";
import {
  index,
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

// Post Pilot data model — mirrors PRD §7.6.
// M1 ships read-only with seed guides in code; once D1 is provisioned,
// run `pnpm db:generate` then `pnpm db:migrate:remote` and seed via
// scripts/seed.ts. Until then this schema is the contract, not the
// runtime store.

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  image: text("image"),
  plan: text("plan", { enum: ["free", "paid"] }).notNull().default("free"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

// better-auth-cloudflare manages its own session table. We declare it here
// for type completeness, but the source of truth is better-auth's schema.
export const authSessions = sqliteTable("auth_sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
});

export const guides = sqliteTable(
  "guides",
  {
    id: text("id").primaryKey(),
    slug: text("slug").notNull().unique(),
    authorName: text("author_name").notNull(),
    era: text("era").notNull(),
    kicker: text("kicker").notNull(),
    standfirst: text("standfirst").notNull(),
    description: text("description").notNull(),
    voiceAxes: text("voice_axes", { mode: "json" })
      .$type<string[]>()
      .notNull(),
    useCases: text("use_cases", { mode: "json" }).$type<string[]>().notNull(),
    copyrightPosture: text("copyright_posture", {
      enum: ["public-domain", "voice-inspired", "licensed"],
    })
      .notNull()
      .default("voice-inspired"),
    baseSpec: text("base_spec_json", { mode: "json" }).notNull(),
    systemPrompt: text("system_prompt").notNull(),
    evalRubric: text("eval_rubric", { mode: "json" }).notNull(),
    isPublic: integer("is_public", { mode: "boolean" })
      .notNull()
      .default(true),
    isOfficial: integer("is_official", { mode: "boolean" })
      .notNull()
      .default(false),
    createdBy: text("created_by").references(() => users.id, {
      onDelete: "set null",
    }),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (t) => ({
    slugIdx: index("guides_slug_idx").on(t.slug),
    publicIdx: index("guides_public_idx").on(t.isPublic),
    eraIdx: index("guides_era_idx").on(t.era),
  }),
);

export const useCasePresets = sqliteTable("use_case_presets", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  modifier: text("modifier_json", { mode: "json" }).notNull(),
  targetLength: text("target_length").notNull(),
});

export const exemplars = sqliteTable("exemplars", {
  id: text("id").primaryKey(),
  guideId: text("guide_id")
    .notNull()
    .references(() => guides.id, { onDelete: "cascade" }),
  label: text("label").notNull(),
  content: text("content").notNull(),
  source: text("source").notNull(),
  isGenerated: integer("is_generated", { mode: "boolean" })
    .notNull()
    .default(false),
});

export const forks = sqliteTable("forks", {
  id: text("id").primaryKey(),
  parentGuideId: text("parent_guide_id")
    .notNull()
    .references(() => guides.id, { onDelete: "cascade" }),
  childGuideId: text("child_guide_id")
    .notNull()
    .references(() => guides.id, { onDelete: "cascade" }),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const collections = sqliteTable("collections", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  isPublic: integer("is_public", { mode: "boolean" })
    .notNull()
    .default(false),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const collectionItems = sqliteTable(
  "collection_items",
  {
    collectionId: text("collection_id")
      .notNull()
      .references(() => collections.id, { onDelete: "cascade" }),
    guideId: text("guide_id")
      .notNull()
      .references(() => guides.id, { onDelete: "cascade" }),
    position: integer("position").notNull().default(0),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.collectionId, t.guideId] }),
  }),
);

export const apiKeys = sqliteTable("api_keys", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  keyHash: text("key_hash").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  lastUsedAt: integer("last_used_at", { mode: "timestamp" }),
});

export const playgroundRuns = sqliteTable("playground_runs", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id, {
    onDelete: "set null",
  }),
  guideId: text("guide_id")
    .notNull()
    .references(() => guides.id, { onDelete: "cascade" }),
  presetId: text("preset_id").references(() => useCasePresets.id, {
    onDelete: "set null",
  }),
  model: text("model").notNull(),
  input: text("input").notNull(),
  output: text("output").notNull(),
  tokensIn: integer("tokens_in"),
  tokensOut: integer("tokens_out"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const evalRuns = sqliteTable("eval_runs", {
  id: text("id").primaryKey(),
  guideId: text("guide_id")
    .notNull()
    .references(() => guides.id, { onDelete: "cascade" }),
  model: text("model").notNull(),
  rubricVersion: text("rubric_version").notNull(),
  scoreJson: text("score_json", { mode: "json" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});
