import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Kicker, Standfirst } from "./editorial";

const CTA =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]";

const LEDE_WORDS = ["Voice,", "engineered."];

const lineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const word = {
  hidden: { y: "110%", opacity: 0, rotate: 1.2 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const swash = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.7 },
      opacity: { duration: 0.3, delay: 0.7 },
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <motion.div
        animate="visible"
        className="flex flex-col gap-8"
        initial="hidden"
      >
        <motion.div custom={0} variants={fadeUp}>
          <Kicker>Style guides for AI agents</Kicker>
        </motion.div>

        <motion.h1
          className="pp-lede text-5xl md:text-7xl lg:text-[5.5rem]"
          variants={lineContainer}
        >
          <span className="relative inline-block">
            <span className="flex flex-wrap gap-x-[0.25em]">
              {LEDE_WORDS.map((w) => (
                <span
                  className="overflow-hidden inline-block leading-[1.05]"
                  key={w}
                >
                  <motion.span
                    className="inline-block"
                    style={{ willChange: "transform" }}
                    variants={word}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>

            {/* Hand-drawn ink swash beneath the lede */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 left-0 w-[min(420px,80%)]"
              fill="none"
              height="22"
              preserveAspectRatio="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.4"
              style={{ color: "var(--strand-color-accent-lede)" }}
              viewBox="0 0 420 22"
            >
              <motion.path
                d="M4 14 Q 60 4 130 12 T 260 10 T 416 8"
                variants={swash}
              />
            </svg>
          </span>
        </motion.h1>

        <motion.div custom={0.35} variants={fadeUp}>
          <Standfirst className="max-w-[56ch] text-xl md:text-2xl">
            A curated library of author style guides, packaged as drop-in specs
            for your LLM. Hemingway&rsquo;s brevity. Didion&rsquo;s cool.
            Baldwin&rsquo;s moral clarity. Copy-paste or fetch by API.
          </Standfirst>
        </motion.div>

        <motion.div
          className="mt-2 flex flex-wrap items-center gap-3"
          custom={0.5}
          variants={fadeUp}
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}
