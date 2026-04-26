import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function DocsTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <motion.div
        className="flex flex-col items-start justify-between gap-6 rounded-xl px-10 py-10 md:flex-row md:items-center md:gap-10 md:px-12 md:py-12"
        initial={{ opacity: 0, y: 12 }}
        style={{
          background: "var(--strand-color-ink-primary)",
          color: "var(--strand-color-surface-canvas)",
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-[38ch]">
          {/* DocsTeaser is the only place in the app where the kicker uses
              Geist Mono instead of Geist — deliberate "developer zone" cue. */}
          <p
            className="mb-3 text-xs"
            style={{
              fontFamily: "var(--strand-type-mono)",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--strand-color-accent-lede)",
            }}
          >
            For developers
          </p>
          <h2
            className="pp-lede"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
          >
            Fetch a voice.{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "var(--strand-color-accent-lede)",
              }}
            >
              Ship it.
            </span>
          </h2>
          <p
            className="mt-3 text-sm md:text-base"
            style={{
              color: "var(--strand-color-ink-muted)",
              lineHeight: 1.55,
            }}
          >
            Every guide ships as a system prompt, a JSON spec, and an eval
            rubric. Drop it into any LLM in five lines.
          </p>
        </div>
        <Link
          className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium whitespace-nowrap transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]"
          style={{
            background: "var(--strand-color-surface-canvas)",
            color: "var(--strand-color-ink-primary)",
          }}
          to="/docs"
        >
          Read the docs →
        </Link>
      </motion.div>
    </section>
  );
}
