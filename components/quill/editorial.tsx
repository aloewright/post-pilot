import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: ReactNode;
};

export function Kicker({
  as: Tag = "span",
  className,
  children,
}: BaseProps<ElementType>) {
  return <Tag className={cn("quill-kicker", className)}>{children}</Tag>;
}

export function Lede({
  as: Tag = "h1",
  className,
  children,
  size = "xl",
}: BaseProps<ElementType> & {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
}) {
  const sizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
    hero: "text-5xl md:text-7xl lg:text-[5.5rem]",
  } as const;
  return (
    <Tag className={cn("quill-lede", sizes[size], className)}>{children}</Tag>
  );
}

export function Standfirst({
  as: Tag = "p",
  className,
  children,
}: BaseProps<ElementType>) {
  return (
    <Tag className={cn("quill-standfirst max-w-[48ch]", className)}>
      {children}
    </Tag>
  );
}

export function Byline({
  as: Tag = "p",
  className,
  children,
}: BaseProps<ElementType>) {
  return <Tag className={cn("quill-byline", className)}>{children}</Tag>;
}

export function Column({
  as: Tag = "div",
  className,
  children,
}: BaseProps<ElementType>) {
  return <Tag className={cn("quill-column", className)}>{children}</Tag>;
}

export function Pull({
  className,
  children,
  attribution,
}: BaseProps<ElementType> & { attribution?: string }) {
  return (
    <figure className={cn("my-8 flex flex-col gap-2", className)}>
      <blockquote className="quill-pull">{children}</blockquote>
      {attribution ? (
        <figcaption className="quill-byline pl-5">— {attribution}</figcaption>
      ) : null}
    </figure>
  );
}

export function Rule({ className }: { className?: string }) {
  return <hr className={cn("quill-rule my-8", className)} />;
}

export function Chip({ children, className }: BaseProps<ElementType>) {
  return <span className={cn("quill-chip", className)}>{children}</span>;
}
