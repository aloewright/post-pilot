CREATE TABLE `ai_phrases` (
	`phrase_hash` text PRIMARY KEY NOT NULL,
	`phrase` text NOT NULL,
	`seen_count` integer DEFAULT 1 NOT NULL,
	`first_seen` integer DEFAULT (unixepoch()) NOT NULL,
	`last_seen` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `ai_phrases_seen_count_idx` ON `ai_phrases` (`seen_count`);--> statement-breakpoint
ALTER TABLE `humanize_jobs` ADD `local_score` integer;--> statement-breakpoint
ALTER TABLE `humanize_jobs` ADD `copyleaks_score_bp` integer;--> statement-breakpoint
ALTER TABLE `humanize_jobs` ADD `copyleaks_report_json` text;