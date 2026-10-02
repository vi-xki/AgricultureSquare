"use client";

import { useEffect, useRef } from "react";
import rawContent from "@/data/content.json";
import type { ContentData } from "@/types/content";
import { useActiveSection } from "@/store/useActiveSection";
import { sectionRegistry } from "@/lib/section-registry";
import TopBar from "@/components/nav/TopBar";
import SideDots from "@/components/nav/SideDots";
import ScrollHint from "@/components/nav/ScrollHint";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SiteFooter from "@/components/nav/SiteFooter";

const content = rawContent as unknown as ContentData;

export default function SiteSections() {
  const { pages, site } = content;
  const total = pages.length;

  const { activeIndex, hasScrolled, setActiveIndex, setHasScrolled } =
    useActiveSection();
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index ?? 0
            );
            setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [setActiveIndex]);

  useEffect(() => {
    const onScroll = () => setHasScrolled(true);
    window.addEventListener("scroll", onScroll, { once: true, passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [setHasScrolled]);

  const goTo = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative w-full bg-paper-50">
      <ScrollProgress />
      <TopBar pages={pages} activeIndex={activeIndex} site={site} onNavigate={goTo} />

      {pages.map((page, i) => {
        const Section = sectionRegistry[page.type];
        return (
          <section
            key={page.id}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            data-index={i}
            className="relative h-[100dvh] w-full"
          >
            <Section
              data={page}
              index={i}
              total={total}
              pages={pages}
              site={site}
              onNavigate={goTo}
            />
          </section>
        );
      })}

      <SiteFooter pages={pages} site={site} onNavigate={goTo} />

      <SideDots pages={pages} activeIndex={activeIndex} onNavigate={goTo} />
      <ScrollHint visible={!hasScrolled} />
    </div>
  );
}
