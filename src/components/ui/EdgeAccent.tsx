import clsx from "clsx";

export default function EdgeAccent({
  side = "left",
}: {
  side?: "left" | "right";
}) {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute inset-y-0 z-10 w-[6px] bg-gradient-to-b from-brand-300 via-brand-500 to-brand-700",
        side === "left" ? "left-0" : "right-0"
      )}
    />
  );
}
