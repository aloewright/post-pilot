import { motion, type SVGMotionProps, type Transition } from "framer-motion";
import type { JSX, SVGProps } from "react";

type IllustrationProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  slug: string;
  size?: number;
  /**
   * "in-view" (default) — animates the first time it scrolls into view.
   * "mount" — animates as soon as it mounts.
   * "off" — no animation (for reduced-motion or static contexts).
   */
  trigger?: "in-view" | "mount" | "off";
  /** Per-shape stagger in seconds. */
  stagger?: number;
};

const drawTransition: Transition = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
};

const containerVariants = (stagger: number) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
  static: {},
});

const drawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: drawTransition,
  },
  static: { pathLength: 1, opacity: 1 },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  static: { scale: 1, opacity: 1 },
};

const fillVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  static: { opacity: 1 },
};

/**
 * Per-author symbolic spot illustrations: pen-and-ink line drawings,
 * one dominant subject per spot, drawn from each author's voice
 * metaphor (e.g. Hemingway's iceberg, Orwell's window pane).
 *
 * All strokes inherit `currentColor`. Renders with a stroke-by-stroke
 * draw-in animation when scrolled into view.
 */
export function AuthorIllustration({
  slug,
  size,
  className,
  trigger = "in-view",
  stagger = 0.07,
  ...rest
}: IllustrationProps) {
  const Spot = (SPOTS[slug] ?? SPOTS.__fallback) as SpotComponent;

  const motionProps =
    trigger === "off"
      ? { initial: "static" as const, animate: "static" as const }
      : trigger === "mount"
        ? { initial: "hidden" as const, animate: "visible" as const }
        : {
            initial: "hidden" as const,
            whileInView: "visible" as const,
            viewport: { once: true, margin: "-40px" },
          };

  return (
    <motion.svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
      variants={containerVariants(stagger)}
      viewBox="0 0 100 100"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...motionProps}
      {...(rest as SVGMotionProps<SVGSVGElement>)}
    >
      <Spot />
    </motion.svg>
  );
}

type SpotComponent = () => JSX.Element;

const Stroke = (
  props: Omit<
    SVGMotionProps<SVGPathElement>,
    "variants" | "initial" | "animate"
  >,
) => <motion.path variants={drawVariants} {...props} />;

const Fine = (
  props: Omit<
    SVGMotionProps<SVGPathElement>,
    "variants" | "initial" | "animate"
  >,
) => (
  <motion.path
    opacity="0.45"
    strokeWidth="0.7"
    variants={drawVariants}
    {...props}
  />
);

const StrokeCircle = (
  props: Omit<
    SVGMotionProps<SVGCircleElement>,
    "variants" | "initial" | "animate"
  > & { dot?: boolean },
) => {
  const { dot, ...rest } = props;
  return <motion.circle variants={dot ? dotVariants : drawVariants} {...rest} />;
};

const StrokeEllipse = (
  props: Omit<
    SVGMotionProps<SVGEllipseElement>,
    "variants" | "initial" | "animate"
  >,
) => <motion.ellipse variants={drawVariants} {...props} />;

const FilledShape = (
  props: Omit<
    SVGMotionProps<SVGPathElement>,
    "variants" | "initial" | "animate"
  >,
) => <motion.path stroke="none" variants={fillVariants} {...props} />;

/* -------------------------------------------------------------------------- */
/*  Spots — one symbolic subject per author, drawn from their voice metaphor  */
/* -------------------------------------------------------------------------- */

const SPOTS: Record<string, SpotComponent> = {
  /** Hemingway — Iceberg theory: 1/8 above the waterline, 7/8 below. */
  hemingway: () => (
    <>
      {/* waterline */}
      <Stroke d="M6 52 L94 52" />
      {/* small visible peak */}
      <Stroke d="M40 52 L48 36 L58 52 Z" />
      {/* large submerged mass */}
      <Stroke d="M28 52 L36 78 Q50 86 64 80 L72 52" />
      {/* hatching for water below the line */}
      <Fine d="M14 60 L20 56" />
      <Fine d="M76 62 L82 58" />
      <Fine d="M22 70 L26 66" />
      <Fine d="M74 72 L78 68" />
      {/* sub-mass interior shading */}
      <Fine d="M40 62 L48 56" />
      <Fine d="M44 72 L56 62" />
      <Fine d="M50 80 L62 68" />
    </>
  ),

  /** Austen — Teacup with saucer and a single curl of steam. */
  austen: () => (
    <>
      {/* cup */}
      <Stroke d="M30 42 L70 42 Q72 60 60 70 L40 70 Q28 60 30 42 Z" />
      {/* handle */}
      <Stroke d="M70 48 Q82 48 82 56 Q82 64 72 64" />
      {/* saucer */}
      <StrokeEllipse cx="50" cy="76" rx="30" ry="2.6" />
      <Stroke d="M22 78 Q50 82 78 78" />
      {/* tea surface */}
      <Fine d="M34 46 L66 46" />
      {/* one elegant curl of steam */}
      <Stroke d="M50 32 Q44 26 50 20 Q56 14 50 8" />
    </>
  ),

  /**
   * Orwell — Windowpane. From his essay: "Good prose is like a
   * window pane." Four panes, sill below.
   */
  orwell: () => (
    <>
      <Stroke d="M28 22 L72 22 L72 76 L28 76 Z" />
      <Stroke d="M50 22 L50 76" />
      <Stroke d="M28 50 L72 50" />
      {/* sill */}
      <Stroke d="M22 78 L78 78" />
      <Stroke d="M22 78 L24 82 L76 82 L78 78" />
      {/* light rays through the panes */}
      <Fine d="M34 30 L46 46" />
      <Fine d="M40 28 L48 42" />
      <Fine d="M58 30 L66 46" />
    </>
  ),

  /** Didion — Single elegant pair of sunglasses. */
  didion: () => (
    <>
      {/* left lens */}
      <Stroke d="M18 50 Q18 64 30 64 Q44 64 46 52 Q47 44 36 42 Q22 42 18 50 Z" />
      {/* right lens */}
      <Stroke d="M82 50 Q82 64 70 64 Q56 64 54 52 Q53 44 64 42 Q78 42 82 50 Z" />
      {/* bridge */}
      <Stroke d="M46 52 Q50 50 54 52" />
      {/* arms hint */}
      <Stroke d="M18 50 L10 46" />
      <Stroke d="M82 50 L90 46" />
      {/* faint reflection on each lens */}
      <Fine d="M24 50 Q24 56 32 58" />
      <Fine d="M76 50 Q76 56 68 58" />
    </>
  ),

  /**
   * Baldwin — Single tall taper candle with flame. Sermonic,
   * illuminating; light against silence.
   */
  baldwin: () => (
    <>
      {/* flame */}
      <Stroke d="M50 24 Q42 32 47 42 Q50 46 53 42 Q58 32 50 24 Z" />
      {/* wick */}
      <Stroke d="M50 42 L50 46" />
      {/* candle */}
      <Stroke d="M46 46 L46 70 L54 70 L54 46 Z" />
      {/* drip */}
      <Fine d="M46 56 Q44 60 46 64" />
      {/* holder */}
      <Stroke d="M40 70 L60 70 L62 76 L38 76 Z" />
      {/* base shadow */}
      <Stroke d="M30 80 L70 80" />
      {/* halo of light */}
      <Fine d="M32 30 L40 36" />
      <Fine d="M68 30 L60 36" />
      <Fine d="M30 44 L38 42" />
      <Fine d="M70 44 L62 42" />
    </>
  ),

  /** Le Guin — A planet with a tilted ring. Other worlds, plainly told. */
  "le-guin": () => (
    <>
      {/* planet */}
      <StrokeCircle cx="48" cy="50" r="20" />
      {/* surface texture */}
      <Fine d="M34 46 Q48 40 60 48" />
      <Fine d="M36 56 Q48 62 62 56" />
      {/* ring back half (behind planet) */}
      <Stroke d="M14 56 Q22 38 50 36 Q66 35 76 38" opacity="0.55" />
      {/* ring front half */}
      <Stroke d="M14 56 Q26 64 52 64 Q72 64 84 56" />
      {/* tiny moon */}
      <StrokeCircle cx="80" cy="34" r="2.4" />
    </>
  ),

  /**
   * Borges — Open book with concentric arcs across the spread,
   * suggesting infinite recursion (Library of Babel).
   */
  borges: () => (
    <>
      {/* book spread */}
      <Stroke d="M16 30 Q34 26 50 30 Q66 26 84 30 L84 72 Q66 68 50 72 Q34 68 16 72 Z" />
      {/* spine */}
      <Stroke d="M50 30 L50 72" />
      {/* recursive arcs left page */}
      <Fine d="M22 38 Q36 36 46 38" />
      <Fine d="M24 46 Q36 44 46 46" />
      <Fine d="M26 54 Q36 52 46 54" />
      <Fine d="M28 62 Q37 60 46 62" />
      {/* recursive arcs right page */}
      <Fine d="M54 38 Q64 36 78 38" />
      <Fine d="M54 46 Q64 44 76 46" />
      <Fine d="M54 54 Q64 52 74 54" />
      <Fine d="M54 62 Q63 60 72 62" />
    </>
  ),

  /**
   * Woolf — A single curling wave (To the Lighthouse, The Waves).
   * Hokusai-by-way-of-Bloomsbury.
   */
  woolf: () => (
    <>
      {/* wave swell */}
      <Stroke d="M14 64 Q26 38 48 44 Q72 50 78 32" />
      {/* curl over */}
      <Stroke d="M78 32 Q88 42 80 56 Q70 70 56 64" />
      {/* trailing foam */}
      <Stroke d="M56 64 Q44 66 36 60" />
      <Fine d="M28 70 Q40 72 50 70" />
      <Fine d="M14 72 Q24 76 36 74" />
      <Fine d="M62 76 Q72 78 84 74" />
    </>
  ),

  /** Vonnegut — His asterisk self-portrait. Bold, six-armed. */
  vonnegut: () => (
    <>
      <Stroke d="M50 18 L50 82" />
      <Stroke d="M22 34 L78 66" />
      <Stroke d="M22 66 L78 34" />
      <Stroke d="M16 50 L84 50" />
    </>
  ),

  /** Wilde — Carnation in the buttonhole. Cluster of petals + stem. */
  wilde: () => (
    <>
      {/* bloom — cluster of overlapping circles */}
      <StrokeCircle cx="50" cy="30" r="6" />
      <StrokeCircle cx="44" cy="34" r="6" />
      <StrokeCircle cx="56" cy="34" r="6" />
      <StrokeCircle cx="46" cy="40" r="6" />
      <StrokeCircle cx="54" cy="40" r="6" />
      {/* center */}
      <StrokeCircle cx="50" cy="36" r="1.4" fill="currentColor" stroke="none" dot />
      {/* stem */}
      <Stroke d="M50 46 Q52 60 50 80" />
      {/* leaf */}
      <Stroke d="M50 60 Q40 56 36 64 Q44 64 50 64" />
      {/* small thorn */}
      <Fine d="M51 70 L55 68" />
    </>
  ),

  /** Poe — Raven perched on a bare branch. */
  poe: () => (
    <>
      {/* body */}
      <Stroke d="M30 56 Q30 40 46 38 Q60 38 64 48 L78 46 L72 52 L60 52 Q58 62 48 62 Q34 64 30 56 Z" />
      {/* eye */}
      <StrokeCircle cx="48" cy="44" r="0.9" fill="currentColor" stroke="none" dot />
      {/* legs */}
      <Stroke d="M44 62 L42 70" />
      <Stroke d="M50 62 L50 70" />
      {/* branch */}
      <Stroke d="M14 72 Q40 70 86 74" />
      {/* twig */}
      <Fine d="M32 72 L28 76" />
      <Fine d="M68 73 L72 78" />
      {/* feather hint */}
      <Fine d="M42 50 Q48 52 56 50" />
    </>
  ),

  /** Carver — Coffee mug, side view. Domestic, plain. */
  carver: () => (
    <>
      {/* body */}
      <Stroke d="M34 42 L66 42 L62 76 Q50 80 38 76 Z" />
      {/* rim */}
      <Stroke d="M34 42 Q50 46 66 42" />
      {/* handle */}
      <Stroke d="M66 50 Q80 50 80 60 Q80 68 70 68" />
      {/* base */}
      <Stroke d="M30 80 L70 80" />
      {/* steam */}
      <Stroke d="M44 30 Q40 24 44 18 Q48 12 44 6" />
      <Stroke d="M54 32 Q50 26 54 20 Q58 14 54 8" />
    </>
  ),

  /** Asimov — Atom: three orbital ellipses through a nucleus. */
  asimov: () => (
    <>
      <StrokeEllipse cx="50" cy="50" rx="32" ry="10" />
      <StrokeEllipse
        cx="50"
        cy="50"
        rx="32"
        ry="10"
        transform="rotate(60 50 50)"
      />
      <StrokeEllipse
        cx="50"
        cy="50"
        rx="32"
        ry="10"
        transform="rotate(120 50 50)"
      />
      <StrokeCircle cx="50" cy="50" r="2.4" fill="currentColor" stroke="none" dot />
      <StrokeCircle cx="82" cy="50" r="1.4" fill="currentColor" stroke="none" dot />
      <StrokeCircle cx="34" cy="22" r="1.4" fill="currentColor" stroke="none" dot />
      <StrokeCircle cx="34" cy="78" r="1.4" fill="currentColor" stroke="none" dot />
    </>
  ),

  /** Fallback — a quill nib for any unknown slug. */
  __fallback: () => (
    <>
      <Stroke d="M22 78 L78 22" />
      <Stroke d="M70 22 L78 22 L78 30" />
      <Stroke d="M40 60 L60 40" />
      <Fine d="M44 64 L52 56" />
    </>
  ),
};
