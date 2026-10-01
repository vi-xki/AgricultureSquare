import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface IconRowProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: "light" | "dark";
}

export default function IconRow({
  icon: Icon,
  title,
  description,
  tone = "light",
}: IconRowProps) {
  return (
    <div className="flex items-start gap-4">
      <span
        className={clsx(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2",
          tone === "dark"
            ? "border-paper-50/40 text-paper-50"
            : "border-brand-600 text-brand-700"
        )}
      >
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <h3
          className={clsx(
            "font-display text-sm font-semibold uppercase tracking-wide",
            tone === "dark" ? "text-paper-50" : "text-ink-900"
          )}
        >
          {title}
        </h3>
        <p
          className={clsx(
            "mt-1 text-sm leading-snug",
            tone === "dark" ? "text-paper-200/70" : "text-ink-700"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
