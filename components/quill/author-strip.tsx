"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Guide } from "@/lib/quill/types";
import { Kicker } from "./editorial";

export function AuthorStrip({ guides }: { guides: Guide[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-6 flex items-center justify-between">
        <Kicker>Featured guides</Kicker>
        <Link
          className="text-sm hover:underline"
          href="/quill/library"
          style={{ color: "var(--strand-color-ink-muted)" }}
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
              className="block aspect-[4/5] overflow-hidden rounded-lg border p-4 transition-transform hover:-translate-y-0.5"
              href={`/quill/guides/${g.slug}`}
              style={{
                background: "var(--strand-color-surface-raised)",
                borderColor: "var(--strand-color-rule)",
              }}
            >
              <div className="flex h-full flex-col justify-between">
                <span
                  className="text-[0.62rem] font-semibold tracking-widest uppercase"
                  style={{ color: "var(--strand-color-accent-kicker)" }}
                >
                  {g.era}
                </span>
                <span className="quill-lede text-2xl" style={{ lineHeight: 1 }}>
                  {g.author.split(" ").map((part) => (
                    <span className="block" key={`${g.slug}-${part}`}>
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
