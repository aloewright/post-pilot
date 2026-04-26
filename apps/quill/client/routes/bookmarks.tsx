import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Kicker, Lede, Standfirst } from "../components/editorial";
import { GuideCard } from "../components/guide-card";
import { api, queryKeys } from "../lib/api";
import { useBookmarks } from "../lib/bookmarks";

export const Route = createFileRoute("/bookmarks")({
  component: BookmarksPage,
  head: () => ({ meta: [{ title: "Bookmarks — Post Pilot" }] }),
});

function BookmarksPage() {
  const { bookmarks } = useBookmarks();
  const guidesQuery = useQuery({
    queryKey: queryKeys.guides({ all: true }),
    queryFn: () => api.listGuides({}),
  });
  const all = guidesQuery.data?.items ?? [];
  const items = all
    .filter((g) => bookmarks.has(g.slug))
    .sort((a, b) => a.author.localeCompare(b.author));

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Kicker>Bookmarks</Kicker>
        <Lede as="h1" size="lg">
          Your shortlist
        </Lede>
        <Standfirst className="max-w-[58ch]">
          Authors you&rsquo;ve saved. Stored locally on this device — clearing
          your browser data clears them.
        </Standfirst>
      </div>

      {guidesQuery.isLoading ? (
        <p style={{ color: "var(--strand-color-ink-muted)" }}>Loading…</p>
      ) : items.length === 0 ? (
        <div
          className="flex flex-col items-start gap-4 rounded-lg border p-8"
          style={{
            borderColor: "var(--strand-color-rule)",
            background: "var(--strand-color-surface-raised)",
          }}
        >
          <p style={{ color: "var(--strand-color-ink-muted)" }}>
            No bookmarks yet. Open a guide and tap the heart to save it here.
          </p>
          <Link
            className="inline-flex rounded-md border px-3 py-1.5 text-sm"
            style={{
              borderColor: "var(--strand-color-ink-primary)",
              color: "var(--strand-color-ink-primary)",
            }}
            to="/library"
          >
            Browse the Library →
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g) => (
            <GuideCard guide={g} key={g.slug} />
          ))}
        </div>
      )}
    </section>
  );
}
