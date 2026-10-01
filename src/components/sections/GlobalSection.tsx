"use client";

import { motion } from "framer-motion";
import PageFrame from "@/components/ui/PageFrame";
import Kicker from "@/components/ui/Kicker";
import WorldDots from "@/components/ui/WorldDots";
import Reveal from "@/components/ui/Reveal";
import type { SectionProps, GlobalPage } from "@/types/content";

export default function GlobalSection({
  data,
  index,
  total,
  site,
}: SectionProps<GlobalPage>) {
  return (
    <div className="h-full w-full bg-paper-50">
      <PageFrame index={index} total={total} mark={site.mark}>
        <div className="flex h-full flex-col overflow-y-auto">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Kicker>{data.kicker}</Kicker>
              <h2 className="mt-1 font-display text-3xl font-extrabold uppercase leading-tight text-ink-900 sm:text-4xl">
                {data.heading}
              </h2>
            </div>
            <p className="max-w-xs text-sm text-ink-700 sm:mt-1 sm:text-base">
              {data.description}
            </p>
          </Reveal>

          <Reveal
            delay={0.12}
            className="relative my-6 min-h-[180px] flex-1 overflow-hidden rounded-3xl border border-ink-900/10 bg-gradient-to-br from-paper-100 to-paper-50 p-6 sm:p-8"
          >
            <div className="mx-auto h-full max-w-xl text-ink-900">
              <WorldDots />
            </div>
          </Reveal>

          <div className="mt-auto grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
            {data.regions.map((region, i) => (
              <Reveal key={region.name} delay={0.3 + i * 0.06}>
                <div className="mb-1 flex items-center justify-between text-xs text-ink-500">
                  <span className="font-medium text-ink-900">
                    {region.name}
                  </span>
                  <span>{region.value}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-brand-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${region.value}%` }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </PageFrame>
    </div>
  );
}
