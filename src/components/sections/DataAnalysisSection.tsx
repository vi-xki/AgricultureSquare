"use client";

import { motion } from "framer-motion";
import PageFrame from "@/components/ui/PageFrame";
import Kicker from "@/components/ui/Kicker";
import PhotoBlock from "@/components/ui/PhotoBlock";
import Reveal from "@/components/ui/Reveal";
import type { SectionProps, DataAnalysisPage } from "@/types/content";

const RING_RADIUS = 24;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export default function DataAnalysisSection({
  data,
  index,
  total,
  site,
}: SectionProps<DataAnalysisPage>) {
  const maxChart = Math.max(...data.chart.map((c) => c.value));
  const primaryStat = data.stats[0];
  const progress = primaryStat.value / 100;

  return (
    <div className="h-full w-full bg-paper-50">
      <PageFrame index={index} total={total} mark={site.mark}>
        <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="flex flex-col gap-4 overflow-y-auto">
            <PhotoBlock
              variant="grain"
              src={data.image}
              className="h-36 w-full sm:h-44"
            />

            <div className="flex items-center gap-4 rounded-2xl border border-ink-900/10 p-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                <svg viewBox="0 0 56 56" className="h-full w-full -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-brand-100"
                  />
                  <motion.circle
                    cx="28"
                    cy="28"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="text-brand-600"
                    style={{ strokeDasharray: RING_CIRCUMFERENCE }}
                    initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
                    whileInView={{
                      strokeDashoffset: RING_CIRCUMFERENCE * (1 - progress),
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  />
                </svg>
                <span className="absolute font-display text-xs font-bold text-ink-900">
                  {primaryStat.value}
                  {primaryStat.suffix}
                </span>
              </div>
              <div className="flex h-24 flex-1 items-stretch gap-2">
                {data.chart.map((point, i) => (
                  <div
                    key={point.label}
                    className="flex flex-1 flex-col items-center gap-1"
                  >
                    <div className="flex w-full flex-1 items-end overflow-hidden rounded-t-md bg-brand-100">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(point.value / maxChart) * 100}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{
                          duration: 0.7,
                          delay: i * 0.08,
                          ease: "easeOut",
                        }}
                        className="w-full rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400"
                      />
                    </div>
                    <span className="text-[10px] font-medium text-ink-500">
                      {point.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink-500">
              Average yield index, 5-year trend
            </p>
          </Reveal>

          <div className="flex flex-col justify-start overflow-y-auto lg:justify-center">
            <Reveal delay={0.15}>
              <Kicker>{data.kicker}</Kicker>
              <h2 className="mt-1 font-display text-3xl font-extrabold uppercase leading-tight text-ink-900 sm:text-4xl">
                {data.heading}
              </h2>
              <p className="mt-4 max-w-md text-sm text-ink-700 sm:text-base">
                {data.description}
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {data.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.3 + i * 0.08}>
                  <p className="font-display text-3xl font-extrabold text-brand-700">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-ink-500">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </PageFrame>
    </div>
  );
}
