import { sql } from "drizzle-orm";
import {
  index,
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";
import { users } from "./auth-schema";

// Post Pilot domain schema. The auth tables (users, sessions, accounts,
// verifications) are owned by ./auth-schema.ts to match better-auth's
// expected shape; we re-export `users` from there so domain tables can
// reference it without duplicating the table definition.
//
// Seed data lives in src/lib/guides/* + scripts/seed.ts; runtime queries
// against this schema land with M3+ features.

export { users } from "./auth-schema";

// Per-user preference layer that domain code reads. Kept as a separate
// table so the auth-managed users row stays untouched.
export const userPreferences = sqliteTable("user_preferences", {
  userId: text("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  plan: text("plan", { enum: ["free", "paid"] })
    .notNull()
    .default("free"),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
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
    voiceAxes: text("voice_axes", { mode: "json" }).$type<string[]>().notNull(),
    useCases: text("use_cases", { mode: "json" }).$type<string[]>().notNull(),
    copyrightPosture: text("copyright_posture", {
      enum: ["public-domain", "voice-inspired", "licensed"],
    })
      .notNull()
      .default("voice-inspired"),
    baseSpec: text("base_spec_json", { mode: "json" }).notNull(),
    systemPrompt: text("system_prompt").notNull(),
    evalRubric: text("eval_rubric", { mode: "json" }).notNull(),
    isPublic: integer("is_public", { mode: "boolean" }).notNull().default(true),
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
  })
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
  isPublic: integer("is_public", { mode: "boolean" }).notNull().default(false),
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
  })
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

// Humanize feature: paid pro tier turns AI-stylized prose through Copyleaks
// and returns a humanized variant. Jobs are async (Copyleaks scan ID) and
// the frontend polls /v1/humanize/:id; the row holds the full lifecycle.
export const humanizeJobs = sqliteTable(
  "humanize_jobs",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    status: text("status", {
      enum: ["queued", "processing", "done", "failed"],
    })
      .notNull()
      .default("queued"),
    scanId: text("scan_id"),
    input: text("input").notNull(),
    inputChars: integer("input_chars").notNull(),
    output: text("output"),
    error: text("error"),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
    completedAt: integer("completed_at", { mode: "timestamp" }),
  },
  (t) => ({
    userCreatedIdx: index("humanize_jobs_user_created_idx").on(
      t.userId,
      t.createdAt
    ),
    scanIdx: index("humanize_jobs_scan_idx").on(t.scanId),
  })
);

// Per-user usage counters. One row per user per UTC calendar month.
// `monthKey` format is `YYYY-MM` so the next month rollover is just a
// new row, no cron needed. Hourly rate-limit window is computed from the
// humanize_jobs.createdAt index, no separate counter.
export const humanizeUsage = sqliteTable(
  "humanize_usage",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    monthKey: text("month_key").notNull(),
    chars: integer("chars").notNull().default(0),
    jobs: integer("jobs").notNull().default(0),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.monthKey] }),
  })
);

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
