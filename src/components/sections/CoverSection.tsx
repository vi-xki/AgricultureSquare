"use client";

import { ArrowDown } from "lucide-react";
import PhotoBlock from "@/components/ui/PhotoBlock";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import type { SectionProps, CoverPage } from "@/types/content";

export default function CoverSection({
  data,
  total,
  site,
  onNavigate,
}: SectionProps<CoverPage>) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-paper-50">
      <div className="grid h-full grid-rows-[46%_1fr] lg:grid-cols-5 lg:grid-rows-1">
        <div className="relative lg:col-span-3">
          <div className="absolute inset-0 [clip-path:polygon(0_0,100%_0,100%_65%,55%_100%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_78%,58%_100%,0_100%)]">
            <Parallax strength={40}>
              <PhotoBlock
                variant="rows"
                src={data.image}
                rounded="rounded-none"
                className="h-full w-full"
              />
            </Parallax>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent [clip-path:polygon(0_0,100%_0,100%_65%,55%_100%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_78%,58%_100%,0_100%)]" />
          <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10 lg:inset-x-16 lg:bottom-14">
            <Reveal>
              <span className="block font-display text-base font-medium text-brand-200 sm:text-lg">
                {data.kicker}
              </span>
              <h1 className="mt-2 whitespace-pre-line font-display text-3xl font-extrabold uppercase leading-[1.08] text-paper-50 sm:text-5xl lg:text-6xl">
                {data.title}
              </h1>
            </Reveal>
          </div>
        </div>

        <div className="relative flex flex-col justify-between gap-6 px-6 pb-14 pt-8 sm:px-12 sm:py-10 lg:col-span-2 lg:justify-center lg:gap-10 lg:px-14 lg:pb-10">
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm text-ink-700 sm:text-base">
              {data.subtitle}
            </p>
            <button
              onClick={() => onNavigate(1)}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-paper-50 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg hover:shadow-brand-900/20"
            >
              {data.cta}
              <ArrowDown
                size={16}
                className="transition group-hover:translate-y-0.5"
              />
            </button>
          </Reveal>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center rounded-full border border-ink-900/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-900">
              {site.year}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-ink-500">
              01 — {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 text-[11px] font-semibold uppercase tracking-[0.5em] text-ink-900/25 sm:block"
        style={{ writingMode: "vertical-rl" }}
      >
        {site.name} · Company Profile
      </div>
    </div>
  );
}
