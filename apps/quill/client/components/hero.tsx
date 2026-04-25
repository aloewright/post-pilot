import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Kicker, Lede, Standfirst } from "./editorial";

const CTA =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-8"
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Kicker>Style guides for AI agents</Kicker>
        <Lede as="h1" size="hero">
          Voice, engineered.
        </Lede>
        <Standfirst className="max-w-[56ch] text-xl md:text-2xl">
          A curated library of author style guides, packaged as drop-in specs
          for your LLM. Hemingway&rsquo;s brevity. Didion&rsquo;s cool.
          Baldwin&rsquo;s moral clarity. Copy-paste or fetch by API.
        </Standfirst>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Link
            className={CTA}
            style={{
              background: "var(--strand-color-ink-primary)",
              color: "var(--strand-color-surface-canvas)",
            }}
            to="/playground"
          >
            Try the playground
          </Link>
          <Link
            className={CTA}
            style={{
              border: "1px solid var(--strand-color-ink-primary)",
              color: "var(--strand-color-ink-primary)",
            }}
            to="/library"
          >
            Browse library
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
