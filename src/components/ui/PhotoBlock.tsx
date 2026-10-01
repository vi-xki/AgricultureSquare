import { cn } from "@/lib/cn";

export type PhotoVariant =
  | "rows"
  | "canopy"
  | "grain"
  | "harvest"
  | "soil"
  | "orchard";

const GRADIENTS: Record<PhotoVariant, string> = {
  rows: "linear-gradient(135deg, #2e3f23 0%, #70914d 55%, #8aab68 100%)",
  canopy: "linear-gradient(135deg, #1a2414 0%, #384d28 50%, #57753a 100%)",
  grain: "linear-gradient(135deg, #70914d 0%, #a9c08e 55%, #d9e3cc 100%)",
  harvest: "linear-gradient(135deg, #44602f 0%, #70914d 55%, #a9c08e 100%)",
  soil: "linear-gradient(135deg, #1a2414 0%, #2e3f23 55%, #384d28 100%)",
  orchard: "linear-gradient(135deg, #57753a 0%, #8aab68 55%, #c9d8b8 100%)",
};

const PATTERNS: Record<PhotoVariant, string> = {
  rows: "repeating-linear-gradient(115deg, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 2px, transparent 2px, transparent 16px)",
  canopy:
    "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.22) 0, rgba(255,255,255,0.22) 5px, transparent 6px), radial-gradient(circle at 60% 72%, rgba(255,255,255,0.16) 0, rgba(255,255,255,0.16) 4px, transparent 5px), radial-gradient(circle at 85% 18%, rgba(255,255,255,0.18) 0, rgba(255,255,255,0.18) 3px, transparent 4px), radial-gradient(circle at 40% 85%, rgba(255,255,255,0.14) 0, rgba(255,255,255,0.14) 4px, transparent 5px)",
  grain:
    "repeating-linear-gradient(8deg, rgba(0,0,0,0.08) 0px, transparent 3px, transparent 9px)",
  harvest:
    "repeating-linear-gradient(90deg, rgba(255,255,255,0.16) 0px, rgba(255,255,255,0.16) 3px, transparent 3px, transparent 13px)",
  soil: "repeating-linear-gradient(3deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 2px, transparent 2px, transparent 11px)",
  orchard:
    "radial-gradient(circle at 30% 35%, rgba(255,255,255,0.24) 0, transparent 38%), radial-gradient(circle at 72% 62%, rgba(255,255,255,0.18) 0, transparent 32%)",
};

const GRAIN_OVERLAY =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

interface PhotoBlockProps {
  variant?: PhotoVariant;
  src?: string;
  alt?: string;
  className?: string;
  rounded?: string;
}

export default function PhotoBlock({
  variant = "rows",
  src,
  alt = "",
  className,
  rounded = "rounded-2xl",
}: PhotoBlockProps) {
  if (src) {
    return (
      <div
        className={cn("relative overflow-hidden bg-brand-200", rounded, className)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden", rounded, className)}
      style={{
        backgroundImage: `${PATTERNS[variant]}, ${GRADIENTS[variant]}`,
      }}
    >
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{ backgroundImage: GRAIN_OVERLAY, opacity: 0.25 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10" />
      <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.18)]" />
    </div>
  );
}
