CREATE TABLE `eval_harness_runs` (
	`id` text PRIMARY KEY NOT NULL,
	`run_at` integer DEFAULT (unixepoch()) NOT NULL,
	`guide_slug` text NOT NULL,
	`preset_slug` text,
	`model` text NOT NULL,
	`input_hash` text NOT NULL,
	`det_score` real,
	`judge_fidelity` real,
	`judge_status` text,
	`output_snapshot_json` text,
	`notes_json` text
);
--> statement-breakpoint
CREATE INDEX `eval_harness_runs_guide_run_at_idx` ON `eval_harness_runs` (`guide_slug`,`run_at`);--> statement-breakpoint
CREATE INDEX `eval_harness_runs_run_at_idx` ON `eval_harness_runs` (`run_at`);