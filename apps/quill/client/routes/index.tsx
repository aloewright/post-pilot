import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { ApiSnippet } from "../components/api-snippet";
import { AuthorStrip } from "../components/author-strip";
import { Hero } from "../components/hero";
import { UseCaseStrip } from "../components/use-case-strip";
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

  return (
    <>
      <Hero />
      <AuthorStrip guides={featured} />
      <UseCaseStrip />
      <ApiSnippet />
    </>
  );
}
