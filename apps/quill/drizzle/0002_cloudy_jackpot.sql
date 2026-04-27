CREATE TABLE `credit_balance` (
	`user_id` text PRIMARY KEY NOT NULL,
	`balance` integer DEFAULT 0 NOT NULL,
	`lifetime_purchased` integer DEFAULT 0 NOT NULL,
	`lifetime_used` integer DEFAULT 0 NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `credit_ledger` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`delta` integer NOT NULL,
	`reason` text NOT NULL,
	`ref_id` text,
	`metadata` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `credit_ledger_user_created_idx` ON `credit_ledger` (`user_id`,`created_at`);--> statement-breakpoint
CREATE INDEX `credit_ledger_ref_idx` ON `credit_ledger` (`ref_id`);--> statement-breakpoint
ALTER TABLE `api_keys` ADD `prefix` text DEFAULT '' NOT NULL;--> statement-breakpoint
CREATE INDEX `api_keys_user_idx` ON `api_keys` (`user_id`);--> statement-breakpoint
ALTER TABLE `user_preferences` ADD `polar_customer_id` text;