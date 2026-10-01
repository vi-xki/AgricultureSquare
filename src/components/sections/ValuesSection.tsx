"use client";

import PageFrame from "@/components/ui/PageFrame";
import Kicker from "@/components/ui/Kicker";
import IconRow from "@/components/ui/IconRow";
import PhotoBlock from "@/components/ui/PhotoBlock";
import Reveal from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icon-map";
import type { SectionProps, ValuesPage } from "@/types/content";

export default function ValuesSection({
  data,
  index,
  total,
  site,
}: SectionProps<ValuesPage>) {
  return (
    <div className="h-full w-full bg-paper-50">
      <PageFrame index={index} total={total} mark={site.mark}>
        <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-start overflow-y-auto lg:justify-center">
            <Reveal>
              <Kicker>{data.kicker}</Kicker>
              <h2 className="mt-1 font-display text-3xl font-extrabold uppercase leading-tight text-ink-900 sm:text-4xl">
                {data.heading}
              </h2>
            </Reveal>

            <div className="mt-7 flex flex-col gap-6">
              {data.items.map((item, i) => (
                <Reveal key={item.title} delay={0.12 + i * 0.07}>
                  <IconRow
                    icon={getIcon(item.icon)}
                    title={item.title}
                    description={item.description}
                  />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="hidden h-full w-full lg:block">
            <PhotoBlock variant="soil" src={data.image} className="h-full w-full" />
          </Reveal>
        </div>
      </PageFrame>
    </div>
  );
}
