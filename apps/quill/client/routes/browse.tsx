import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Kicker, Lede, Standfirst } from "../components/editorial";
import { StackCard } from "../components/stack-card";
import { api, type GuideListItem, queryKeys } from "../lib/api";
import { shuffle } from "../lib/shuffle";

export const Route = createFileRoute("/browse")({
  component: BrowsePage,
  head: () => ({ meta: [{ title: "Browse — Post Pilot" }] }),
});

function BrowsePage() {
  const guidesQuery = useQuery({
    queryKey: queryKeys.guides({ limit: 300 }),
    queryFn: () => api.listGuides({ limit: 300 }),
  });
  const all = guidesQuery.data?.items ?? [];

  // Shuffle once per page-mount: refreshing or starting a new session
  // reshuffles. We don't persist the order anywhere — that's the design.
  const [stack, setStack] = useState<GuideListItem[]>([]);
  useEffect(() => {
    if (all.length > 0 && stack.length === 0) {
      setStack(shuffle(all));
    }
  }, [all, stack.length]);

  const visibleCount = 3;
  const visible = useMemo(() => stack.slice(0, visibleCount), [stack]);

  function advance() {
    setStack((prev) => {
      const head = prev[0];
      if (!head) {
        return prev;
      }
      return [...prev.slice(1), head];
    });
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4 text-center">
        <Kicker>Browse</Kicker>
        <Lede as="h1" size="lg">
          The deck
        </Lede>
        <Standfirst className="mx-auto max-w-[52ch]">
          Tap to send the top card to the back. Reload to reshuffle. Every
          author shows up exactly once before the deck repeats.
        </Standfirst>
      </div>

      {guidesQuery.isLoading ? (
        <p
          className="text-center text-sm"
          style={{ color: "var(--strand-color-ink-muted)" }}
        >
          Loading…
        </p>
      ) : null}

      {stack.length > 0 ? (
        <div className="relative mx-auto h-[560px] w-full max-w-sm">
          <AnimatePresence>
            {visible.map((guide, i) => (
              <motion.div
                animate={{
                  scale: 1 - i * 0.05,
                  y: i * 14,
                  opacity: 1,
                }}
                className="absolute inset-0"
                exit={{
                  x: 240,
                  opacity: 0,
                  rotate: 6,
                  transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                }}
                initial={{
                  scale: 1 - visibleCount * 0.05,
                  y: visibleCount * 14,
                  opacity: 0,
                }}
                key={guide.slug}
                style={{ zIndex: 100 - i }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <StackCard
                  guide={guide}
                  isTop={i === 0}
                  onTap={i === 0 ? advance : undefined}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : null}

      {stack.length > 0 ? (
        <div className="mt-8 text-center">
          <button
            className="text-xs underline"
            onClick={() => setStack(shuffle(all))}
            style={{ color: "var(--strand-color-ink-muted)" }}
            type="button"
          >
            Reshuffle
          </button>
        </div>
      ) : null}
    </section>
  );
}
