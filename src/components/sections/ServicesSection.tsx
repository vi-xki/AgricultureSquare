"use client";

import PhotoBlock from "@/components/ui/PhotoBlock";
import EdgeAccent from "@/components/ui/EdgeAccent";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import { getIcon } from "@/lib/icon-map";
import type { SectionProps, ServicesPage } from "@/types/content";

export default function ServicesSection({
  data,
  index,
  total,
  site,
}: SectionProps<ServicesPage>) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-paper-50">
      <EdgeAccent side="left" />

      <div className="relative h-[36%] w-full shrink-0 overflow-hidden sm:h-[42%]">
        <Parallax strength={25}>
          <PhotoBlock
            variant="harvest"
            src={data.image}
            rounded="rounded-none"
            className="h-full w-full"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/15 to-transparent" />
        <div className="absolute inset-x-6 bottom-6 sm:inset-x-12 sm:bottom-8">
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

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-7 py-6 sm:px-12 sm:py-8">
        <Reveal delay={0.1}>
          <p className="max-w-xl text-sm text-ink-700 sm:text-base">
            {data.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {data.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={0.15 + i * 0.06}>
                <div className="group flex items-start gap-3 rounded-2xl border border-ink-900/10 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-900/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-paper-50 transition group-hover:bg-brand-600">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-auto flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.25em] text-ink-500/70">
          <span>{site.mark}</span>
          <span>
            {String(index + 1).padStart(2, "0")} — {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
