import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { GuideListItem } from "../lib/api";
import { COVERED } from "../lib/covers";
import { AuthorIllustration } from "./author-illustration";

export function AuthorStrip({
  guides,
  totalCount,
}: {
  guides: GuideListItem[];
  totalCount?: number;
}) {
  const seeAllLabel =
    totalCount && totalCount > 0
      ? `See all ${Math.floor(totalCount / 10) * 10}+ →`
      : "See all →";
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mt-4 mb-10 flex items-center justify-end pr-2">
        <Link
          className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-medium"
          style={{
            borderColor: "var(--strand-color-ink-primary)",
            color: "var(--strand-color-ink-primary)",
          }}
          to="/library"
        >
          {seeAllLabel}
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {guides.map((g, i) => {
          const hasCover = COVERED.has(g.slug);
          return (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              key={g.slug}
              transition={{
                duration: 0.5,
                delay: 0.08 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link
                className="group/tile flex h-full flex-col overflow-hidden rounded-lg border transition-transform hover:-translate-y-0.5"
                params={{ slug: g.slug }}
                style={{
                  background: "var(--strand-color-surface-raised)",
                  borderColor: "var(--strand-color-rule)",
                }}
                to="/guides/$slug"
              >
                {/* Image area: golden-ratio portrait. Same shape on every
                    card so the row lines up regardless of cover/no-cover. */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio: "1 / 1.618",
                    borderBottom: "1px solid var(--strand-color-rule)",
                  }}
                >
                  {hasCover ? (
                    <img
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/tile:scale-[1.04]"
                      src={`/covers/${g.slug}.svg`}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "var(--strand-color-surface-base)" }}
                    >
                      <AuthorIllustration
                        className="transition-transform duration-500 ease-out group-hover/tile:rotate-2"
                        size={88}
                        slug={g.slug}
                        style={{ color: "var(--strand-color-ink-primary)" }}
                      />
                    </div>
                  )}
                  <span
                    className="absolute top-3 left-3 text-[0.62rem] font-semibold tracking-widest uppercase"
                    style={{ color: "var(--strand-color-accent-kicker)" }}
                  >
                    {g.era}
                  </span>
                </div>

                {/* Caption: fixed height, two lines max. Constant across
                    cards so author names with different word counts don't
                    push the image area to different heights. */}
                <div className="flex h-[88px] items-end px-4 pt-3 pb-4">
                  <span
                    className="pp-lede text-xl"
                    style={{ lineHeight: 1.05 }}
                  >
                    {g.author}
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
