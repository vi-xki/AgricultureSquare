"use client";

import { Check, Leaf } from "lucide-react";
import PageFrame from "@/components/ui/PageFrame";
import Kicker from "@/components/ui/Kicker";
import PhotoBlock from "@/components/ui/PhotoBlock";
import Reveal from "@/components/ui/Reveal";
import type { SectionProps, AboutPage } from "@/types/content";

export default function AboutSection({
  data,
  index,
  total,
  site,
}: SectionProps<AboutPage>) {
  return (
    <div className="h-full w-full bg-paper-50">
      <PageFrame index={index} total={total} mark={site.mark}>
        <div className="grid h-full grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-10">
          <div className="flex flex-col justify-start overflow-y-auto lg:col-span-3 lg:justify-center">
            <Reveal>
              <Kicker>{data.kicker}</Kicker>
              <h2 className="mt-1 font-display text-3xl font-extrabold uppercase leading-tight text-ink-900 sm:text-4xl">
                {data.heading}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-700 sm:text-base">
                {data.description}
              </p>
            </Reveal>

            <ul className="mt-7 flex flex-col gap-3">
              {data.points.map((point, i) => (
                <Reveal key={point} delay={0.15 + i * 0.07}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-brand-600 text-brand-700">
                      <Check size={11} />
                    </span>
                    <span className="text-sm text-ink-700 sm:text-base">
                      {point}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.2} className="relative hidden lg:col-span-2 lg:block">
            <PhotoBlock
              variant="orchard"
              src={data.image}
              className="absolute inset-4"
            />

            <div className="absolute -left-2 bottom-16 flex h-24 w-24 -rotate-3 flex-col items-center justify-center rounded-2xl bg-brand-700 text-center shadow-xl transition duration-300 hover:rotate-0">
              <span className="px-2 text-xs font-semibold uppercase leading-snug tracking-wide text-paper-50">
                {data.badge}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 h-20 w-20 bg-brand-500 [clip-path:polygon(0_100%,100%_100%,0_0)]">
              <Leaf
                size={16}
                className="absolute bottom-3 left-3 text-paper-50"
                strokeWidth={1.75}
              />
            </div>
          </Reveal>
        </div>
      </PageFrame>
    </div>
  );
}
