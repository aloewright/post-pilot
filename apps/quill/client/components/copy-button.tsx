import { Check, Copy } from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "./editorial";

export function CopyButton({
  value,
  label = "Copy",
  variant = "outline",
  size = "sm",
  className,
}: {
  value: string;
  label?: string;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Some browsers block clipboard without user gesture / permission.
    }
  };

  return (
    <Button
      className={className}
      onClick={onCopy}
      size={size}
      type="button"
      variant={variant}
    >
      {copied ? (
        <>
          <Check size={14} weight="bold" />
          Copied
        </>
      ) : (
        <>
          <Copy size={14} weight="regular" />
          {label}
        </>
      )}
    </Button>
  );
}
