import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { isVibeSlug, VIBE_TAGS } from "../../src/lib/vibes";
import { Kicker, Lede, Standfirst } from "../components/editorial";
import { LibraryView } from "../components/library-view";

const librarySearchSchema = z.object({
  voice: z
    .string()
    .optional()
    .refine((v) => v === undefined || isVibeSlug(v), {
      message: "Unknown voice slug",
    }),
});

export const Route = createFileRoute("/library")({
  component: LibraryPage,
  head: () => ({ meta: [{ title: "Library — Post Pilot" }] }),
  validateSearch: librarySearchSchema,
});

function LibraryPage() {
  const search = Route.useSearch();
  const vibe =
    search.voice && isVibeSlug(search.voice) ? search.voice : undefined;
  const tag = vibe ? VIBE_TAGS[vibe] : undefined;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Kicker>{tag ? `Voice · ${tag.label}` : "Library"}</Kicker>
        <Lede as="h1" size="lg">
          {tag ? tag.label : "The Library"}
        </Lede>
        <Standfirst className="max-w-[52ch]">
          {tag
            ? tag.description
            : "Filter by era, use case, or voice. Every official guide ships with a system prompt, a structured spec, and an eval rubric."}
        </Standfirst>
      </div>
      <LibraryView initialVibe={vibe} />
    </section>
  );
}
