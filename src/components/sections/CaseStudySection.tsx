"use client";

import PageFrame from "@/components/ui/PageFrame";
import Kicker from "@/components/ui/Kicker";
import PhotoBlock from "@/components/ui/PhotoBlock";
import Reveal from "@/components/ui/Reveal";
import type { SectionProps, CaseStudyPage } from "@/types/content";

export default function CaseStudySection({
  data,
  index,
  total,
  site,
}: SectionProps<CaseStudyPage>) {
  return (
    <div className="h-full w-full bg-paper-50">
      <PageFrame index={index} total={total} mark={site.mark}>
        <div className="flex h-full flex-col overflow-y-auto">
          <Reveal>
            <Kicker>{data.kicker}</Kicker>
            <h2 className="mt-1 font-display text-3xl font-extrabold uppercase leading-tight text-ink-900 sm:text-4xl">
              {data.heading}
            </h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
              {data.client}
            </p>
          </Reveal>

          <Reveal delay={0.12} className="relative mt-5 grid grid-cols-2 gap-3">
            <PhotoBlock
              variant="harvest"
              src={data.images?.[0]}
              className="h-32 transition duration-500 hover:scale-[1.02] sm:h-44"
            />
            <PhotoBlock
              variant="canopy"
              src={data.images?.[1]}
              className="h-32 transition duration-500 hover:scale-[1.02] sm:h-44"
            />
            <div className="absolute -bottom-5 right-4 flex flex-col items-center justify-center rounded-2xl bg-brand-700 px-5 py-2.5 text-center text-paper-50 shadow-xl sm:right-6">
              <span className="font-display text-xl font-extrabold leading-none sm:text-2xl">
                {data.result}
              </span>
              <span className="mt-0.5 text-[9px] uppercase tracking-wide text-paper-100/80 sm:text-[10px]">
                {data.resultLabel}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.24} className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                Challenge
              </p>
              <p className="mt-1 text-sm text-ink-700">{data.challenge}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                Solution
              </p>
              <p className="mt-1 text-sm text-ink-700">{data.solution}</p>
            </div>
          </Reveal>
          <Reveal delay={0.3} className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Outcome
            </p>
            <p className="mt-1 text-sm text-ink-700">{data.outcome}</p>
          </Reveal>
        </div>
      </PageFrame>
    </div>
  );
}
