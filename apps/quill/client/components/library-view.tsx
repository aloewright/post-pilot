import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ActiveUseCase, Era, VoiceAxis } from "../../src/lib/types";
import { ERAS, USE_CASE_LABELS, USE_CASES } from "../../src/lib/utils";
import {
  CANONICAL_VIBES,
  VIBE_DISPLAY_ORDER,
  VIBE_TAGS,
  type VibeSlug,
} from "../../src/lib/vibes";
import { api, type GuideSort, queryKeys } from "../lib/api";
import { GuideCard } from "./guide-card";

const PAGE_SIZE = 30;

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export function LibraryView({ initialVibe }: { initialVibe?: VibeSlug }) {
  const [eras, setEras] = useState<Era[]>([]);
  const [useCases, setUseCases] = useState<ActiveUseCase[]>([]);
  const [vibes, setVibes] = useState<VibeSlug[]>(
    initialVibe ? [initialVibe] : []
  );
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [sort, setSort] = useState<GuideSort>("author");

  // ⚡ Bolt: Debounce the search query to prevent unnecessary API requests on every keystroke
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(handler);
  }, [query]);

  // Vibes split into two groups (see src/lib/vibes.ts):
  //   - Canonical (terse/lyrical/ornate/wry): filter via guide.voice_axes
  //     server-side.
  //   - Curated (hard-boiled, plainspoken, …): filter client-side via the
  //     hand-curated matches[] list on each tag.
  // When any curated vibe is active we fetch unfiltered (queryVoiceAxes=[])
  // so we can union canonical + curated client-side; otherwise we let the
  // server narrow by voice_axes for efficiency.
  const canonicalVibes = vibes.filter((v) =>
    CANONICAL_VIBES.has(v)
  ) as VoiceAxis[];
  const curatedVibes = vibes.filter((v) => !CANONICAL_VIBES.has(v));
  const hasCurated = curatedVibes.length > 0;
  const queryVoiceAxes = hasCurated ? [] : canonicalVibes;

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: queryKeys.guides({
      eras,
      useCases,
      voice: queryVoiceAxes,
      query: debouncedQuery,
      sort,
    }),
    queryFn: ({ pageParam }) =>
      api.listGuides({
        eras,
        useCases,
        voiceAxes: queryVoiceAxes,
        query: debouncedQuery || undefined,
        sort,
        limit: PAGE_SIZE,
        offset: pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (last) => last.nextOffset,
  });

  const items = useMemo(() => {
    const all = data?.pages.flatMap((p) => p.items) ?? [];
    if (vibes.length === 0) {
      return all;
    }
    const curatedSlugs = new Set(
      curatedVibes.flatMap((v) => VIBE_TAGS[v].matches ?? [])
    );
    const canonicalSet = new Set<VoiceAxis>(canonicalVibes);
    return all.filter((g) => {
      if (curatedSlugs.has(g.slug)) {
        return true;
      }
      if (canonicalSet.size === 0) {
        return false;
      }
      return g.voice_axes.some((va) => canonicalSet.has(va));
    });
  }, [data, vibes, canonicalVibes, curatedVibes]);
  const matched = data?.pages[0]?.matched ?? 0;
  const total = data?.pages[0]?.total ?? 0;

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className="grid gap-10 md:grid-cols-[220px_1fr]">
      <aside className="flex flex-col gap-6">
        <FilterGroup
          label="Era"
          onToggle={(v) => setEras((prev) => toggle(prev, v))}
          options={ERAS}
          render={(e) => e}
          selected={eras}
        />
        <FilterGroup
          label="Use case"
          onToggle={(v) => setUseCases((prev) => toggle(prev, v))}
          options={USE_CASES}
          render={(u) => USE_CASE_LABELS[u]}
          selected={useCases}
        />
        <FilterGroup
          label="Voice"
          onToggle={(v) => setVibes((prev) => toggle(prev, v))}
          options={VIBE_DISPLAY_ORDER}
          render={(v) => VIBE_TAGS[v].label}
          selected={vibes}
        />
        {eras.length + useCases.length + vibes.length > 0 ? (
          <button
            className="self-start text-xs underline"
            onClick={() => {
              setEras([]);
              setUseCases([]);
              setVibes([]);
            }}
            style={{ color: "var(--strand-color-ink-muted)" }}
            type="button"
          >
            Clear filters
          </button>
        ) : null}
      </aside>

      <div className="flex flex-col gap-5">
        <div
          className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          style={{ color: "var(--strand-color-ink-muted)" }}
        >
          <div className="flex items-center gap-3">
            <input
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none md:w-64"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search authors or voices"
              style={{
                background: "var(--strand-color-surface-raised)",
                borderColor: "var(--strand-color-rule)",
                color: "var(--strand-color-ink-primary)",
              }}
              value={query}
            />
            {data ? (
              <span className="pp-byline whitespace-nowrap">
                {items.length} of {matched}
                {matched < total ? ` (${total} total)` : ""}
              </span>
            ) : null}
          </div>
          <label className="flex items-center gap-2 text-sm">
            <span className="pp-byline">Sort</span>
            <select
              className="rounded-md border bg-transparent px-2 py-1.5 text-sm"
              onChange={(e) => setSort(e.target.value as GuideSort)}
              style={{
                borderColor: "var(--strand-color-rule)",
                color: "var(--strand-color-ink-primary)",
              }}
              value={sort}
            >
              <option value="author">Author A–Z</option>
              <option value="era">Era</option>
              <option value="recent">Recently updated</option>
              <option value="fidelity">Fidelity</option>
            </select>
          </label>
        </div>

        {error ? (
          <p
            className="rounded-lg border border-dashed p-8 text-center text-sm"
            style={{
              borderColor: "var(--strand-color-rule)",
              color: "var(--strand-color-ink-muted)",
            }}
          >
            Failed to load guides: {(error as Error).message}
          </p>
        ) : isLoading ? (
          <p
            className="rounded-lg border border-dashed p-8 text-center text-sm"
            style={{
              borderColor: "var(--strand-color-rule)",
              color: "var(--strand-color-ink-muted)",
            }}
          >
            Loading guides…
          </p>
        ) : items.length === 0 ? (
          <p
            className="rounded-lg border border-dashed p-8 text-center text-sm"
            style={{
              borderColor: "var(--strand-color-rule)",
              color: "var(--strand-color-ink-muted)",
            }}
          >
            No guides match those filters. Try loosening one.
          </p>
        ) : (
          <>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {items.map((g, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  key={g.slug}
                  transition={{
                    duration: 0.35,
                    delay: Math.min((i % PAGE_SIZE) * 0.04, 0.32),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <GuideCard guide={g} />
                </motion.div>
              ))}
            </div>
            <div aria-hidden className="h-1 w-full" ref={sentinelRef} />
            {isFetchingNextPage ? (
              <p
                className="text-center text-sm"
                style={{ color: "var(--strand-color-ink-muted)" }}
              >
                Loading more…
              </p>
            ) : !hasNextPage && items.length > 0 ? (
              <p
                className="text-center text-xs"
                style={{ color: "var(--strand-color-ink-muted)" }}
              >
                End of library.
              </p>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  selected,
  onToggle,
  render,
}: {
  label: string;
  options: readonly T[];
  selected: T[];
  onToggle: (v: T) => void;
  render: (v: T) => string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="text-[0.68rem] font-semibold tracking-widest uppercase"
        style={{ color: "var(--strand-color-accent-kicker)" }}
      >
        {label}
      </span>
      <ul className="flex flex-col gap-1.5">
        {options.map((opt) => {
          const checked = selected.includes(opt);
          return (
            <li key={opt}>
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  checked={checked}
                  className="h-3.5 w-3.5 cursor-pointer rounded border"
                  onChange={() => onToggle(opt)}
                  style={{ accentColor: "var(--strand-color-accent-lede)" }}
                  type="checkbox"
                />
                <span
                  style={{
                    color: checked
                      ? "var(--strand-color-ink-primary)"
                      : "var(--strand-color-ink-muted)",
                  }}
                >
                  {render(opt)}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
