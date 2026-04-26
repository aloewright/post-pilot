import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { AuthorStrip } from "../components/author-strip";
import { BrowseByVoice } from "../components/browse-by-voice";
import { DocsTeaser } from "../components/docs-teaser";
import { Hero } from "../components/hero";
import { api, queryKeys } from "../lib/api";

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: async ({ context }) => {
    await context.queryClient.prefetchQuery({
      queryKey: queryKeys.guides({}),
      queryFn: () => api.listGuides({}),
    });
  },
});

function HomePage() {
  const { data } = useQuery({
    queryKey: queryKeys.guides({}),
    queryFn: () => api.listGuides({}),
  });

  const featured = (data?.items ?? []).slice(0, 5);
  const totalCount = data?.total;

  return (
    <>
      <Hero />
      <BrowseByVoice />
      <AuthorStrip guides={featured} totalCount={totalCount} />
      <DocsTeaser />
    </>
  );
}
