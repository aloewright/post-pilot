"use client";

import { useSearchParams } from "next/navigation";
import { Playground } from "@/components/quill/playground";
import type { Guide, UseCase } from "@/lib/quill/types";
import { USE_CASES } from "@/lib/quill/utils";

export function PlaygroundClient({ guides }: { guides: Guide[] }) {
  const params = useSearchParams();
  const guideParam = params.get("guide") ?? undefined;
  const presetParam = params.get("preset") ?? undefined;
  const initialPreset =
    presetParam && (USE_CASES as readonly string[]).includes(presetParam)
      ? (presetParam as UseCase)
      : undefined;

  return (
    <Playground
      guides={guides}
      initialGuide={guideParam}
      initialPreset={initialPreset}
    />
  );
}
