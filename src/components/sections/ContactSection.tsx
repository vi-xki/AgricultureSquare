"use client";

import { Mail, Phone, MapPin, RotateCcw } from "lucide-react";
import PageFrame from "@/components/ui/PageFrame";
import Kicker from "@/components/ui/Kicker";
import Reveal from "@/components/ui/Reveal";
import WorldDots from "@/components/ui/WorldDots";
import type { SectionProps, ContactPage } from "@/types/content";

export default function ContactSection({
  data,
  index,
  total,
  site,
  onNavigate,
}: SectionProps<ContactPage>) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-brand-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(138,171,104,0.3), transparent 45%), radial-gradient(circle at 85% 80%, rgba(112,145,77,0.25), transparent 50%)",
        }}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 text-brand-400 opacity-20 lg:block">
        <WorldDots />
      </div>

      <PageFrame index={index} total={total} mark={site.mark} tone="dark">
        <div className="flex h-full flex-col justify-center">
          <Reveal>
            <Kicker tone="dark">{data.kicker}</Kicker>
            <h2 className="mt-1 max-w-xl font-display text-4xl font-extrabold uppercase leading-tight text-paper-50 sm:text-6xl">
              {data.heading}
            </h2>
            <p className="mt-5 max-w-md text-sm text-paper-200/80 sm:text-base">
              {data.description}
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-10 flex flex-col gap-4 text-paper-100">
            <a
              href={`mailto:${site.contact.email}`}
              className="group flex items-center gap-3 text-sm transition hover:text-brand-300 sm:text-base"
            >
              <Mail size={16} className="text-brand-400" />
              <span className="transition group-hover:translate-x-0.5">
                {site.contact.email}
              </span>
            </a>
            <a
              href={`tel:${site.contact.phone}`}
              className="group flex items-center gap-3 text-sm transition hover:text-brand-300 sm:text-base"
            >
              <Phone size={16} className="text-brand-400" />
              <span className="transition group-hover:translate-x-0.5">
                {site.contact.phone}
              </span>
            </a>
            <span className="flex items-center gap-3 text-sm sm:text-base">
              <MapPin size={16} className="text-brand-400" />
              {site.contact.address}
            </span>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-6">
            {site.social.map((item) => (
              <a
                key={item.label}
                href={item.url}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-paper-200/70 transition hover:text-brand-300"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => onNavigate(0)}
              className="flex items-center gap-2 rounded-full border border-brand-400/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-paper-100 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-500/10 hover:shadow-lg hover:shadow-black/20"
            >
              <RotateCcw size={12} />
              Back to Cover
            </button>
          </Reveal>
        </div>
      </PageFrame>
    </div>
  );
}
