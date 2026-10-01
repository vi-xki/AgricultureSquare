"use client";

import clsx from "clsx";
import type { AnyPage } from "@/types/content";

interface SideDotsProps {
  pages: AnyPage[];
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export default function SideDots({
  pages,
  activeIndex,
  onNavigate,
}: SideDotsProps) {
  return (
    <div className="pointer-events-none fixed inset-y-0 right-4 z-30 hidden flex-col items-center justify-center gap-3 sm:flex lg:right-8">
      {pages.map((page, i) => (
        <button
          key={page.id}
          onClick={() => onNavigate(i)}
          aria-label={`Go to ${page.label}`}
          className="group pointer-events-auto relative flex h-4 w-4 items-center justify-center"
        >
          <span
            className={clsx(
              "rounded-full shadow-[0_0_0_1px_rgba(29,35,23,0.25)] transition-all",
              i === activeIndex
                ? "h-2.5 w-2.5 bg-brand-500 shadow-[0_0_0_1px_rgba(255,255,255,0.8)]"
                : "h-1.5 w-1.5 bg-white group-hover:bg-brand-200"
            )}
          />
          <span className="pointer-events-none absolute right-5 whitespace-nowrap rounded-md bg-ink-900 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-paper-50 opacity-0 transition group-hover:opacity-100">
            {page.label}
          </span>
        </button>
      ))}
    </div>
  );
}
