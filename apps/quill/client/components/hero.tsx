import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Kicker, Standfirst } from "./editorial";

const CTA =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]";

type Segment = {
  text: string;
  italic?: boolean;
  accent?: boolean;
};

// Two visual lines. Each segment is a contiguous run of same-styled chars.
const LEDE_LINES: Segment[][] = [
  [{ text: "Prose," }],
  [
    { text: "not " },
    { text: "prompts", italic: true, accent: true },
    { text: "." },
  ],
];

const TOTAL_CHARS = LEDE_LINES.flat().reduce((n, s) => n + s.text.length, 0);
const CHAR_STAGGER = 0.06; // 60ms per character — typewriter cadence
const TYPING_END_S = 0.25 + TOTAL_CHARS * CHAR_STAGGER; // ~1.4s for 19 chars

const ease = [0.16, 1, 0.3, 1] as const;

const charContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: CHAR_STAGGER, delayChildren: 0.25 },
  },
};

const charVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.04 },
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
            style={{ whiteSpace: "pre-wrap" }}
            variants={charContainer}
          >
            {LEDE_LINES.map((line, lineIdx) => (
              <span className="block" key={`line-${lineIdx}`}>
                {line.map((seg, segIdx) =>
                  Array.from(seg.text).map((ch, chIdx) => (
                    <motion.span
                      key={`${lineIdx}-${segIdx}-${chIdx}`}
                      style={{
                        fontStyle: seg.italic ? "italic" : undefined,
                        color: seg.accent
                          ? "var(--strand-color-accent-lede)"
                          : undefined,
                      }}
                      variants={charVariant}
                    >
                      {ch}
                    </motion.span>
                  ))
                )}
                {/* Cursor lives at the end of the second line so it sits
                    after the period when typing completes. */}
                {lineIdx === LEDE_LINES.length - 1 ? (
                  <span aria-hidden className="pp-cursor" />
                ) : null}
              </span>
            ))}
          </motion.h1>

          <motion.div custom={TYPING_END_S + 0.15} variants={fadeUp}>
            <Standfirst className="max-w-[40ch] text-xl md:text-2xl">
              A curated library of literary voices, packaged as drop-in prompts
              for any LLM. Prompts for styling your prose.
            </Standfirst>
          </motion.div>

          <motion.div
            className="mt-2 flex flex-wrap items-center gap-3"
            custom={TYPING_END_S + 0.4}
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
