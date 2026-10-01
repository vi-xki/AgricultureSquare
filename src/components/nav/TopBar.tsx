"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sprout } from "lucide-react";
import clsx from "clsx";
import type { AnyPage, SiteInfo } from "@/types/content";

interface TopBarProps {
  pages: AnyPage[];
  activeIndex: number;
  site: SiteInfo;
  onNavigate: (index: number) => void;
}

export default function TopBar({
  pages,
  activeIndex,
  site,
  onNavigate,
}: TopBarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-12 lg:px-20">
        <div
          className={clsx(
            "pointer-events-auto flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-1.5 pr-4 backdrop-blur-sm transition-shadow duration-300",
            scrolled ? "shadow-md shadow-ink-900/10" : "shadow-sm"
          )}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink-900/15">
            <Sprout size={13} className="text-brand-600" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-900">
            {site.name}
          </span>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open contents menu"
          className={clsx(
            "pointer-events-auto flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-900 backdrop-blur-sm transition hover:bg-white",
            scrolled ? "shadow-md shadow-ink-900/10" : "shadow-sm"
          )}
        >
          <Menu size={14} />
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(pages.length).padStart(2, "0")}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-brand-950/95 px-6 py-10 text-paper-50 sm:px-16">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-300">
              Contents
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-50/20 hover:bg-paper-50/10"
            >
              <X size={16} />
            </button>
          </div>
          <div className="mt-10 flex flex-1 flex-col justify-center gap-1 overflow-y-auto">
            {pages.map((page, i) => (
              <button
                key={page.id}
                onClick={() => {
                  onNavigate(i);
                  setOpen(false);
                }}
                className={clsx(
                  "group flex items-center gap-4 border-b border-paper-50/10 py-3 text-left transition hover:text-brand-300",
                  i === activeIndex ? "text-brand-300" : undefined
                )}
              >
                <span className="font-display text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-xl font-semibold uppercase tracking-wide sm:text-2xl">
                  {page.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
