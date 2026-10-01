import clsx from "clsx";

export default function Kicker({
  children,
  tone = "light",
}: {
  children: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={clsx(
        "block font-display text-xl font-medium sm:text-2xl",
        tone === "dark" ? "text-paper-50/40" : "text-ink-900/25"
      )}
    >
      {children}
    </span>
  );
}
