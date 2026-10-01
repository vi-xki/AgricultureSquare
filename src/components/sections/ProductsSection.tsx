"use client";

import PageFrame from "@/components/ui/PageFrame";
import Kicker from "@/components/ui/Kicker";
import IconRow from "@/components/ui/IconRow";
import PhotoBlock, { type PhotoVariant } from "@/components/ui/PhotoBlock";
import Reveal from "@/components/ui/Reveal";
import { getIcon } from "@/lib/icon-map";
import type { SectionProps, ProductsPage } from "@/types/content";

const GALLERY: PhotoVariant[] = ["rows", "orchard", "harvest", "canopy"];

export default function ProductsSection({
  data,
  index,
  total,
  site,
}: SectionProps<ProductsPage>) {
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
              <p className="mt-4 max-w-md text-sm text-ink-700 sm:text-base">
                {data.description}
              </p>
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

          <div className="hidden grid-cols-2 grid-rows-2 gap-3 lg:grid">
            {GALLERY.map((variant, i) => (
              <Reveal key={variant} delay={0.1 + i * 0.08} className="h-full w-full">
                <PhotoBlock
                  variant={variant}
                  src={data.gallery?.[i]}
                  className="h-full w-full transition duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-900/10"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </PageFrame>
    </div>
  );
}
