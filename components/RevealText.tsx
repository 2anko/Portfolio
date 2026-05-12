"use client";

import { motion } from "framer-motion";
import { type CSSProperties, type ReactNode } from "react";

// Clip with a small bottom bleed so descenders (g, j, p, y, etc.) aren't truncated.
// Using clip-path instead of overflow-hidden keeps the element's layout box
// unchanged — line-height stays tight.
const CLIP_BLEED: CSSProperties = {
  clipPath:
    "polygon(0% 0%, 100% 0%, 100% calc(100% + 0.2em), 0% calc(100% + 0.2em))",
};

// initial y must clear the 0.2em bottom bleed plus the line box itself.
// 125% works for any leading from ~0.85 up.
const HIDDEN_Y = "125%";

type Props = {
  children: string;
  delay?: number;
  stagger?: number;
  className?: string;
};

export function RevealText({
  children,
  delay = 0,
  stagger = 0.05,
  className,
}: Props) {
  const words = children.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -5% 0px" }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block align-bottom pr-[0.18em] last:pr-0"
          style={CLIP_BLEED}
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: HIDDEN_Y },
              visible: { y: 0 },
            }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

type MixedProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// Use this when a heading mixes plain words with styled spans (italic, underlined, etc.)
export function RevealLine({ children, delay = 0, className }: MixedProps) {
  return (
    <motion.span
      className={`inline-block align-bottom ${className ?? ""}`}
      style={CLIP_BLEED}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -5% 0px" }}
    >
      <motion.span
        className="inline-block will-change-transform"
        variants={{
          hidden: { y: HIDDEN_Y },
          visible: { y: 0 },
        }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
