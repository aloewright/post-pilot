import type { SVGProps } from "react";

type IllustrationProps = SVGProps<SVGSVGElement> & {
  slug: string;
  size?: number;
};

/**
 * Per-author symbolic spot illustrations in the New Yorker tradition:
 * monochromatic, stroke-only, hand-drawn-feeling line drawings that
 * use negative space. They render in `currentColor`, so place them
 * inside an element with the right ink color.
 */
export function AuthorIllustration({
  slug,
  size,
  className,
  ...rest
}: IllustrationProps) {
  const Spot = SPOTS[slug] ?? SPOTS.__fallback;
  return (
    <Spot
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      viewBox="0 0 100 100"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    />
  );
}

type SpotComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const SPOTS: Record<string, SpotComponent> = {
  /** Hemingway — Marlin on a line. The Old Man and the Sea. */
  hemingway: (p) => (
    <svg {...p}>
      <path d="M22 22 Q44 50 70 80" />
      <circle cx="22" cy="22" r="1.4" fill="currentColor" stroke="none" />
      <path d="M70 80 Q78 78 80 72 Q82 67 78 64" />
      <path d="M30 60 Q40 52 56 54 Q70 56 78 64 Q70 72 56 74 Q40 76 30 60 Z" />
      <path d="M30 60 L20 56 L20 64 Z" />
      <circle cx="68" cy="62" r="1.2" fill="currentColor" stroke="none" />
      <path d="M50 60 Q54 64 50 68" opacity="0.7" />
    </svg>
  ),

  /** Austen — Regency teacup with steam. */
  austen: (p) => (
    <svg {...p}>
      <path d="M30 56 L70 56 Q72 70 60 78 L40 78 Q28 70 30 56 Z" />
      <path d="M70 60 Q82 60 82 68 Q82 74 72 74" />
      <path d="M28 84 L72 84" />
      <path d="M44 44 Q40 38 44 32 Q48 28 44 22" />
      <path d="M52 44 Q48 38 52 32 Q56 28 52 22" />
      <path d="M60 44 Q56 38 60 32" />
    </svg>
  ),

  /** Orwell — A simple typewriter, plain prose machinery. */
  orwell: (p) => (
    <svg {...p}>
      <path d="M22 70 L78 70 L82 84 L18 84 Z" />
      <path d="M30 70 L30 56 L70 56 L70 70" />
      <path d="M34 56 L34 48 L66 48 L66 56" />
      <path d="M40 48 L40 38 L60 38 L60 48" />
      <path d="M28 78 L72 78" />
      <circle cx="50" cy="64" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="42" cy="64" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="58" cy="64" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),

  /** Didion — Sunglasses. Cool, observational, LA. */
  didion: (p) => (
    <svg {...p}>
      <path d="M20 52 Q20 68 36 68 Q48 68 50 56" />
      <path d="M50 56 Q52 68 64 68 Q80 68 80 52" />
      <path d="M20 52 Q22 44 36 44 Q48 44 50 50" />
      <path d="M50 50 Q52 44 64 44 Q78 44 80 52" />
      <path d="M50 50 Q50 56 50 56" />
      <path d="M16 50 L8 46" />
      <path d="M84 50 L92 46" />
      <path d="M28 56 L34 50" opacity="0.5" />
      <path d="M58 56 L64 50" opacity="0.5" />
    </svg>
  ),

  /** Baldwin — Open book on a small lectern. Sermonic. */
  baldwin: (p) => (
    <svg {...p}>
      <path d="M18 38 Q34 30 50 36 Q66 30 82 38 L82 64 Q66 56 50 62 Q34 56 18 64 Z" />
      <path d="M50 36 L50 62" />
      <path d="M26 42 L42 40" opacity="0.6" />
      <path d="M26 48 L42 46" opacity="0.6" />
      <path d="M58 40 L74 42" opacity="0.6" />
      <path d="M58 46 L74 48" opacity="0.6" />
      <path d="M42 70 L58 70 L62 84 L38 84 Z" />
      <path d="M50 62 L50 70" />
    </svg>
  ),

  /** Le Guin — Crescent moon with three small stars. Speculative. */
  "le-guin": (p) => (
    <svg {...p}>
      <path d="M62 18 A28 28 0 1 0 62 78 A22 22 0 1 1 62 18 Z" />
      <path d="M22 30 L22 38 M18 34 L26 34" />
      <path d="M28 70 L28 76 M25 73 L31 73" />
      <path d="M82 56 L82 62 M79 59 L85 59" />
    </svg>
  ),

  /** Borges — Spiral staircase. Library of Babel. */
  borges: (p) => (
    <svg {...p}>
      <path d="M30 22 L30 78" />
      <path d="M70 22 L70 78" />
      <path d="M30 28 L70 32" />
      <path d="M30 36 L70 40" />
      <path d="M30 44 L70 48" />
      <path d="M30 52 L70 56" />
      <path d="M30 60 L70 64" />
      <path d="M30 68 L70 72" />
      <path d="M30 22 Q50 18 70 22" />
      <path d="M30 78 Q50 82 70 78" />
    </svg>
  ),

  /** Woolf — Lighthouse over waves. To the Lighthouse. */
  woolf: (p) => (
    <svg {...p}>
      <path d="M44 22 L56 22 L60 32 L40 32 Z" />
      <path d="M40 32 L60 32 L62 38 L38 38 Z" />
      <path d="M42 38 L42 64 L58 64 L58 38" />
      <path d="M42 50 L58 50" />
      <path d="M38 64 L62 64 L66 72 L34 72 Z" />
      <path d="M48 26 L52 26" opacity="0.6" />
      <path d="M14 80 Q22 74 30 80 Q38 86 46 80 Q54 74 62 80 Q70 86 78 80 Q84 76 90 80" />
    </svg>
  ),

  /** Vonnegut — Asterisk (his self-portrait), plus a small planet. */
  vonnegut: (p) => (
    <svg {...p}>
      <path d="M50 22 L50 60" />
      <path d="M30 32 L70 50" />
      <path d="M70 32 L30 50" />
      <path d="M34 60 L66 60" />
      <circle cx="68" cy="74" r="8" />
      <ellipse cx="68" cy="74" rx="11" ry="3" transform="rotate(-20 68 74)" />
    </svg>
  ),

  /** Wilde — Top hat with a single carnation in the band. */
  wilde: (p) => (
    <svg {...p}>
      <path d="M30 30 L30 66 L70 66 L70 30 Z" />
      <path d="M22 66 L78 66" />
      <path d="M14 76 L86 76" />
      <path d="M22 66 L26 76" />
      <path d="M78 66 L74 76" />
      <path d="M30 58 L70 58" />
      <circle cx="40" cy="62" r="2.4" />
      <path d="M40 58 L40 50" opacity="0.6" />
      <path d="M40 50 L36 46 M40 50 L44 46 M40 50 L38 44 M40 50 L42 44" opacity="0.6" />
    </svg>
  ),

  /** Poe — Raven perched on a bare branch. Nevermore. */
  poe: (p) => (
    <svg {...p}>
      <path d="M14 70 Q34 64 56 66 Q72 68 86 72" />
      <path d="M40 66 L34 56 Q34 46 44 42 Q56 38 64 44 Q70 50 68 58 Q66 64 60 66" />
      <path d="M44 42 Q42 36 38 36 L36 40" />
      <path d="M68 50 L78 48 L74 52" />
      <circle cx="56" cy="46" r="1" fill="currentColor" stroke="none" />
      <path d="M48 66 L46 72 M52 66 L52 72 M56 66 L58 72" />
      <path d="M22 58 L24 64 M30 50 L32 56 M76 56 L78 62" opacity="0.5" />
    </svg>
  ),

  /** Carver — Coffee mug with steam. Domestic minimalism. */
  carver: (p) => (
    <svg {...p}>
      <path d="M32 42 L68 42 L66 78 Q50 82 34 78 Z" />
      <path d="M68 48 Q82 48 82 60 Q82 70 70 70" />
      <path d="M44 24 Q40 20 44 14" opacity="0.7" />
      <path d="M52 26 Q48 20 52 14" opacity="0.7" />
      <path d="M60 24 Q56 20 60 14" opacity="0.7" />
    </svg>
  ),

  /** Asimov — Atom with three orbits. Science explainer. */
  asimov: (p) => (
    <svg {...p}>
      <ellipse cx="50" cy="50" rx="32" ry="12" />
      <ellipse cx="50" cy="50" rx="32" ry="12" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="32" ry="12" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" />
    </svg>
  ),

  /** Fallback — a quill nib for any unknown slug. */
  __fallback: (p) => (
    <svg {...p}>
      <path d="M22 78 L78 22" />
      <path d="M70 22 L78 22 L78 30" />
      <path d="M40 60 L60 40" />
      <path d="M44 64 L52 56" />
    </svg>
  ),
};
