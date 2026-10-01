import { ReactNode } from "react";
import clsx from "clsx";
import EdgeAccent from "./EdgeAccent";

interface PageFrameProps {
  children: ReactNode;
  index: number;
  total: number;
  mark: string;
  tone?: "light" | "dark";
  accent?: "left" | "right" | "none";
  className?: string;
}

export default function PageFrame({
  children,
  index,
  total,
  mark,
  tone = "light",
  accent = "left",
  className,
}: PageFrameProps) {
  const footerTone =
    tone === "dark" ? "text-paper-100/60" : "text-ink-500/70";

  return (
    <div
      className={clsx(
        "relative flex h-full w-full flex-col px-7 pt-20 pb-16 sm:px-12 sm:pt-24 sm:pb-14 lg:px-20",
        className
      )}
    >
      {accent !== "none" && <EdgeAccent side={accent} />}
      <div className="min-h-0 flex-1">{children}</div>
      <div
        className={clsx(
          "mt-6 flex shrink-0 items-center justify-between text-[11px] font-medium uppercase tracking-[0.25em]",
          footerTone
        )}
      >
        <span>{mark}</span>
        <span>
          {String(index + 1).padStart(2, "0")} — {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
