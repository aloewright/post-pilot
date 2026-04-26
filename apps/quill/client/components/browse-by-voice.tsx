import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { VIBE_DISPLAY_ORDER, VIBE_TAGS } from "../../src/lib/vibes";
import { Kicker } from "./editorial";

export function BrowseByVoice() {
  return (
    <section
      aria-label="Browse by voice"
      className="border-y"
      style={{
        borderColor: "var(--strand-color-rule)",
        background: "var(--strand-color-surface-sunken)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-start md:justify-between">
        <Kicker className="md:pt-1.5">Browse by voice</Kicker>
        <motion.div
          className="flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {VIBE_DISPLAY_ORDER.map((slug) => (
            <Link
              className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs transition-colors hover:bg-[var(--strand-color-ink-primary)] hover:text-[var(--strand-color-surface-canvas)]"
              key={slug}
              search={{ voice: slug }}
              style={{
                borderColor: "var(--strand-color-rule)",
                background: "var(--strand-color-surface-canvas)",
                color: "var(--strand-color-ink-primary)",
              }}
              to="/library"
            >
              {VIBE_TAGS[slug].label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
