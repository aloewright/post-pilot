import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Kicker, Standfirst } from "./editorial";

const CTA =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]";

const LEDE_LINE_1 = ["Prose,"];
const LEDE_LINE_2 = ["not", "prompts"];

const ease = [0.16, 1, 0.3, 1] as const;

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const word = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

// Period — appears LAST with a slight overshoot pop.
const period = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 1.55,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const swash = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.2, ease, delay: 1.95 },
      opacity: { duration: 0.3, delay: 1.95 },
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay },
  }),
};

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-32">
      <motion.div animate="visible" initial="hidden">
        {/* Kicker has its own block + custom margin so the kicker→lede gap
            (88px) is independent of the rest of the stack rhythm. */}
        <motion.div className="mb-22" custom={0} variants={fadeUp}>
          <Kicker>Style guides for AI agents</Kicker>
        </motion.div>

        {/* Lede + standfirst + CTA share a tighter rhythm. */}
        <div className="flex flex-col gap-8">
          <motion.h1
            className="pp-lede text-5xl md:text-7xl lg:text-[5.5rem]"
            variants={wordContainer}
          >
            <span className="relative inline-block">
              {/* Line 1: "Prose," */}
              <span className="flex flex-wrap gap-x-[0.25em]">
                {LEDE_LINE_1.map((w) => (
                  <span
                    className="inline-block overflow-hidden leading-[1.05]"
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

              {/* Line 2: "not prompts" + period */}
              <span className="flex flex-wrap items-baseline gap-x-[0.25em]">
                {LEDE_LINE_2.map((w, i) => (
                  <span
                    className="inline-block overflow-hidden leading-[1.05]"
                    key={w}
                  >
                    <motion.span
                      className="inline-block"
                      style={{
                        willChange: "transform",
                        fontStyle: i === 1 ? "italic" : undefined,
                        color:
                          i === 1
                            ? "var(--strand-color-accent-lede)"
                            : undefined,
                      }}
                      variants={word}
                    >
                      {w}
                    </motion.span>
                  </span>
                ))}
                <motion.span
                  className="inline-block leading-[1.05]"
                  style={{ transformOrigin: "bottom center" }}
                  variants={period}
                >
                  .
                </motion.span>
              </span>

              {/* Ink swash — draws AFTER the period lands. */}
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

          <motion.div custom={1.4} variants={fadeUp}>
            <Standfirst className="max-w-[40ch] text-xl md:text-2xl">
              A curated library of literary voices, packaged as drop-in prompts
              for any LLM. Style guides that read like style.
            </Standfirst>
          </motion.div>

          <motion.div
            className="mt-2 flex flex-wrap items-center gap-3"
            custom={1.7}
            variants={fadeUp}
          >
            <Link
              className={CTA}
              style={{
                background: "var(--strand-color-ink-primary)",
                color: "var(--strand-color-surface-canvas)",
              }}
              to="/library"
            >
              Browse the library →
            </Link>
            <Link
              className={CTA}
              style={{
                border: "1px solid var(--strand-color-ink-primary)",
                color: "var(--strand-color-ink-primary)",
              }}
              to="/playground"
            >
              Try the playground
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
