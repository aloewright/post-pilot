import { createFileRoute } from "@tanstack/react-router";
import { Kicker, Lede, Standfirst } from "../components/editorial";
import { LibraryView } from "../components/library-view";

export const Route = createFileRoute("/library")({
  component: LibraryPage,
  head: () => ({ meta: [{ title: "Library — Post Pilot" }] }),
});

function LibraryPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Kicker>Library</Kicker>
        <Lede as="h1" size="lg">
          The Library
        </Lede>
        <Standfirst className="max-w-[52ch]">
          Filter by era, use case, or voice. Every official guide ships with
          a system prompt, a structured spec, and an eval rubric.
        </Standfirst>
      </div>
      <LibraryView />
    </section>
  );
}
