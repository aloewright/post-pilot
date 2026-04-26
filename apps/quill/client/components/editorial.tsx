import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type AsProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: ReactNode;
};

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

export function Kicker({
  as: Tag = "span",
  className,
  children,
}: AsProps<ElementType>) {
  return <Tag className={cx("pp-kicker", className)}>{children}</Tag>;
}

export type LedeSize = "sm" | "md" | "lg" | "xl" | "hero";

export function Lede({
  as: Tag = "h1",
  className,
  children,
  size = "xl",
}: AsProps<ElementType> & { size?: LedeSize }) {
  const sizes: Record<LedeSize, string> = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
    hero: "text-5xl md:text-7xl lg:text-[5.5rem]",
  };
  return (
    <Tag className={cx("pp-lede", sizes[size], className)}>{children}</Tag>
  );
}

export function Standfirst({
  as: Tag = "p",
  className,
  children,
}: AsProps<ElementType>) {
  return (
    <Tag className={cx("pp-standfirst max-w-[48ch]", className)}>
      {children}
    </Tag>
  );
}

export function Byline({
  as: Tag = "p",
  className,
  children,
}: AsProps<ElementType>) {
  return <Tag className={cx("pp-byline", className)}>{children}</Tag>;
}

export function Column({
  as: Tag = "div",
  className,
  children,
}: AsProps<ElementType>) {
  return <Tag className={cx("pp-column", className)}>{children}</Tag>;
}

export function Pull({
  className,
  children,
  attribution,
}: {
  className?: string;
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <figure className={cx("my-8 flex flex-col gap-2", className)}>
      <blockquote className="pp-pull">{children}</blockquote>
      {attribution ? (
        <figcaption className="pp-byline pl-5">— {attribution}</figcaption>
      ) : null}
    </figure>
  );
}

export function Rule({ className }: { className?: string }) {
  return <hr className={cx("pp-rule", className)} />;
}

export function Chip({ children, className }: AsProps<ElementType>) {
  return <span className={cx("pp-chip", className)}>{children}</span>;
}

// Plain HTML button styled with Strand tokens. When migrating to Kumo,
// swap this for `import { Button } from "@cloudflare/kumo"` and pass
// equivalent variant props. Kept here so M1 ships without forcing the
// Kumo migration to land first.
export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-9 px-4 text-sm",
    lg: "h-10 px-5 text-sm",
  } as const;
  const variants = {
    default:
      "bg-[var(--strand-color-ink-primary)] text-[var(--strand-color-surface-canvas)] hover:opacity-90",
    outline:
      "border border-[var(--strand-color-ink-primary)] text-[var(--strand-color-ink-primary)] hover:bg-[var(--strand-color-surface-sunken)]",
    ghost:
      "text-[var(--strand-color-ink-primary)] hover:bg-[var(--strand-color-surface-sunken)]",
  } as const;
  return (
    <button
      className={cx(
        "inline-flex items-center justify-center gap-1.5 rounded-md font-medium whitespace-nowrap transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)] disabled:opacity-50 disabled:pointer-events-none",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
