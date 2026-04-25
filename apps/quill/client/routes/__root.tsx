import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Footer } from "../components/footer";
import { Nav } from "../components/nav";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootLayout,
    head: () => ({
      meta: [
        { title: "Post Pilot — Style guides for AI agents" },
        {
          name: "description",
          content:
            "A curated library of author style guides, packaged as drop-in specs for your LLM.",
        },
      ],
    }),
  },
);

function RootLayout() {
  return (
    <div className="min-h-screen bg-[color:var(--strand-color-surface-canvas)] text-[color:var(--strand-color-ink-primary)]">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
