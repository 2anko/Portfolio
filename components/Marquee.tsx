"use client";

import { motion } from "framer-motion";

type Props = {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
};

export function Marquee({
  items,
  direction = "left",
  speed = 40,
  className,
}: Props) {
  const loop = [...items, ...items, ...items];

  return (
    <div className={`overflow-x-clip ${className ?? ""}`} aria-hidden>
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap leading-[1.2]"
        animate={{ x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display text-5xl md:text-7xl tracking-tight inline-flex items-center gap-12"
          >
            <span>{item}</span>
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
