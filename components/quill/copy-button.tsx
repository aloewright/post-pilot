"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CopyButton({
  value,
  label = "Copy",
  className,
  variant = "outline",
  size = "sm",
}: {
  value: string;
  label?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "xs" | "lg";
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore: some browsers block clipboard without permission
    }
  };

  return (
    <Button
      className={cn(className)}
      onClick={onCopy}
      size={size}
      type="button"
      variant={variant}
    >
      {copied ? (
        <>
          <Check />
          Copied
        </>
      ) : (
        <>
          <Copy />
          {label}
        </>
      )}
    </Button>
  );
}
