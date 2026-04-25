import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { GuideListItem } from "../lib/api";
import { AuthorIllustration } from "./author-illustration";
import { Kicker } from "./editorial";

export function AuthorStrip({ guides }: { guides: GuideListItem[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-6 flex items-center justify-between">
        <Kicker>Featured guides</Kicker>
        <Link
          className="text-sm hover:underline"
          style={{ color: "var(--strand-color-ink-muted)" }}
          to="/library"
        >
          See all
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {guides.map((g, i) => (
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
              className="group/tile block aspect-[4/5] overflow-hidden rounded-lg border p-4 transition-transform hover:-translate-y-0.5"
              params={{ slug: g.slug }}
              style={{
                background: "var(--strand-color-surface-raised)",
                borderColor: "var(--strand-color-rule)",
              }}
              to="/guides/$slug"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span
                    className="text-[0.62rem] font-semibold tracking-widest uppercase"
                    style={{ color: "var(--strand-color-accent-kicker)" }}
                  >
                    {g.era}
                  </span>
                  <AuthorIllustration
                    className="-mt-1 -mr-1 transition-transform duration-500 ease-out group-hover/tile:rotate-2"
                    size={56}
                    slug={g.slug}
                    style={{ color: "var(--strand-color-ink-primary)" }}
                  />
                </div>
                <span
                  className="pp-lede text-2xl"
                  style={{ lineHeight: 1 }}
                >
                  {g.author.split(" ").map((part, idx) => (
                    <span className="block" key={idx}>
                      {part}
                    </span>
                  ))}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
