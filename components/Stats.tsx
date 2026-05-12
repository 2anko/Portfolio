"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

const STATS: Stat[] = [
  { value: 4, label: "shipped projects" },
  { value: 94, label: "ML features engineered" },
  { value: 30, suffix: "+", label: "REST endpoints designed" },
  { value: 3.49, decimals: 2, label: "CGPA, CS + Stats" },
];

export function Stats() {
  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50 mb-10"
        >
          By the numbers
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((s, i) => (
            <Counter key={s.label} stat={s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => mv.set(stat.value), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [inView, mv, stat.value, delay]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = stat.decimals
          ? latest.toFixed(stat.decimals)
          : Math.floor(latest).toString();
      }
    });
  }, [spring, stat.decimals]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="border-l border-ink/15 pl-5"
    >
      <p className="font-display text-5xl md:text-7xl leading-none tracking-tight tabular-nums">
        {stat.prefix}
        <span ref={ref}>0</span>
        {stat.suffix}
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-wider text-ink/55 leading-relaxed">
        {stat.label}
      </p>
    </motion.div>
  );
}
