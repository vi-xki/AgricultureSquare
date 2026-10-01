"use client";

import PhotoBlock from "@/components/ui/PhotoBlock";
import EdgeAccent from "@/components/ui/EdgeAccent";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import type { SectionProps, ContentsPage } from "@/types/content";

export default function ContentsSection({
  data,
  index,
  total,
  pages,
  site,
  onNavigate,
}: SectionProps<ContentsPage>) {
  const navigable = pages.filter((p) => p.id !== data.id);

  return (
    <div className="relative h-full w-full bg-paper-50">
      <EdgeAccent side="left" />
      <div className="grid h-full grid-rows-[42%_1fr] sm:grid-cols-2 sm:grid-rows-1">
        <div className="relative overflow-hidden">
          <Parallax strength={30}>
            <PhotoBlock
              variant="canopy"
              src={data.image}
              rounded="rounded-none"
              className="h-full w-full"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10">
            <Reveal>
              <span className="block font-display text-sm font-medium text-brand-200 sm:text-base">
                {data.kicker}
              </span>
              <h2 className="mt-1 font-display text-2xl font-extrabold uppercase leading-tight text-paper-50 sm:text-4xl">
                {data.heading}
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="relative flex flex-col justify-start overflow-y-auto px-7 py-8 sm:px-12 sm:py-10 lg:justify-center">
          <Reveal delay={0.15}>
            <p className="mb-6 max-w-md text-sm text-ink-700 sm:text-base">
              {data.intro}
            </p>
          </Reveal>
          <div className="flex flex-col">
            {navigable.map((page, i) => (
              <Reveal key={page.id} delay={0.2 + i * 0.04}>
                <button
                  onClick={() => onNavigate(pages.indexOf(page))}
                  className="group -mx-3 flex w-[calc(100%+1.5rem)] items-center gap-4 rounded-lg border-b border-ink-900/10 px-3 py-3 text-left transition hover:border-transparent hover:bg-brand-50"
                >
                  <span className="font-display text-sm text-brand-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-base font-semibold uppercase tracking-wide text-ink-900 transition group-hover:text-brand-700 sm:text-lg">
                    {page.label}
                  </span>
                  <span className="text-ink-300 transition group-hover:translate-x-1 group-hover:text-brand-600">
                    →
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.25em] text-ink-500/70">
            <span>{site.mark}</span>
            <span>
              {String(index + 1).padStart(2, "0")} — {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
