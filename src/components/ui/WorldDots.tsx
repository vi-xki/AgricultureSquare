"use client";

import { motion } from "framer-motion";

const CLUSTERS: Array<Array<[number, number]>> = [
  // North America
  [
    [8, 10],
    [12, 8],
    [16, 10],
    [10, 14],
    [14, 16],
    [18, 14],
    [14, 20],
  ],
  // South America
  [
    [20, 28],
    [22, 32],
    [24, 36],
    [21, 40],
    [19, 34],
  ],
  // Europe
  [
    [46, 8],
    [50, 7],
    [48, 11],
    [52, 10],
  ],
  // Africa
  [
    [46, 20],
    [50, 22],
    [48, 26],
    [52, 28],
    [46, 32],
    [50, 34],
  ],
  // Asia
  [
    [58, 8],
    [62, 10],
    [66, 8],
    [70, 12],
    [64, 14],
    [68, 16],
    [60, 16],
    [66, 20],
  ],
  // Australia
  [
    [78, 38],
    [82, 40],
    [80, 42],
  ],
];

const ROUTES: Array<[[number, number], [number, number]]> = [
  [
    [14, 12],
    [48, 9],
  ],
  [
    [48, 9],
    [64, 12],
  ],
  [
    [64, 12],
    [80, 40],
  ],
];

export default function WorldDots() {
  return (
    <svg viewBox="0 0 92 48" className="h-full w-full" aria-hidden="true">
      {ROUTES.map(([from, to], i) => (
        <motion.path
          key={i}
          d={`M ${from[0]} ${from[1]} Q ${(from[0] + to[0]) / 2} ${
            Math.min(from[1], to[1]) - 6
          }, ${to[0]} ${to[1]}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={0.25}
          className="text-brand-300"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, delay: 0.2 + i * 0.25, ease: "easeInOut" }}
        />
      ))}
      {CLUSTERS.map((cluster, ci) =>
        cluster.map(([x, y], pi) => (
          <circle
            key={`${ci}-${pi}`}
            cx={x}
            cy={y}
            r={pi === 0 ? 1.1 : 0.7}
            className={pi === 0 ? "text-brand-500" : "text-brand-300"}
            fill="currentColor"
          />
        ))
      )}
    </svg>
  );
}
