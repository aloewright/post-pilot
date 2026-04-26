import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import type { UseCase } from "../../src/lib/types";
import { USE_CASES } from "../../src/lib/utils";
import { PlaygroundView } from "../components/playground-view";

const searchSchema = z.object({
  guide: z.string().optional(),
  preset: z
    .string()
    .optional()
    .refine(
      (v) => !v || (USE_CASES as readonly string[]).includes(v),
      "unknown preset"
    ),
});

export const Route = createFileRoute("/playground")({
  component: PlaygroundPage,
  validateSearch: searchSchema,
  head: () => ({ meta: [{ title: "Playground — Post Pilot" }] }),
});

function PlaygroundPage() {
  const { guide, preset } = Route.useSearch();
  return (
    <PlaygroundView
      initialGuide={guide}
      initialPreset={preset as UseCase | undefined}
    />
  );
}
