CREATE TABLE `humanize_jobs` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`status` text DEFAULT 'queued' NOT NULL,
	`scan_id` text,
	`input` text NOT NULL,
	`input_chars` integer NOT NULL,
	`output` text,
	`error` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`completed_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `humanize_jobs_user_created_idx` ON `humanize_jobs` (`user_id`,`created_at`);--> statement-breakpoint
CREATE INDEX `humanize_jobs_scan_idx` ON `humanize_jobs` (`scan_id`);--> statement-breakpoint
CREATE TABLE `humanize_usage` (
	`user_id` text NOT NULL,
	`month_key` text NOT NULL,
	`chars` integer DEFAULT 0 NOT NULL,
	`jobs` integer DEFAULT 0 NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	PRIMARY KEY(`user_id`, `month_key`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
