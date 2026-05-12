"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealText, RevealLine } from "./RevealText";
import { MagneticLink } from "./MagneticLink";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Decorative gradient blobs */}
      <motion.div
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -right-24 h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-[28rem] w-[28rem] rounded-full bg-ink/10 blur-3xl" />
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto px-6 pt-32 pb-24 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
            Cheng-Yi Sun — Available for 2026 internships
          </p>
        </motion.div>

        <h1 className="font-display text-balance text-6xl md:text-[8.5rem] leading-[0.92] tracking-tight">
          <RevealLine delay={0.1}>I build</RevealLine>{" "}
          <RevealLine delay={0.2}>
            <span className="italic font-light">production</span>
          </RevealLine>
          <br />
          <RevealLine delay={0.35}>software,</RevealLine>{" "}
          <RevealLine delay={0.5}>
            <span className="relative inline-block">
              end&#8209;to&#8209;end
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-accent"
              />
            </span>
            <span className="text-accent">.</span>
          </RevealLine>
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="md:col-span-7 text-lg text-ink/70 leading-relaxed max-w-xl"
          >
            3rd-year Computer Science &amp; Statistics double major at the
            University of Toronto Mississauga. I&apos;ve shipped production
            software at an IP firm, competed with a fraud-detection ML
            pipeline, and built a GPU-accelerated video editor from scratch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="md:col-span-5 flex flex-col items-start md:items-end gap-4 text-sm"
          >
            <MagneticLink
              href="#work"
              className="inline-flex items-center gap-3 px-7 py-4 bg-ink text-paper rounded-full font-medium hover:bg-accent transition-colors"
            >
              <span>See selected work</span>
              <span className="text-base">→</span>
            </MagneticLink>
            <p className="font-mono text-xs text-ink/50">
              Scroll &nbsp;↓&nbsp; or drag the work
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-ink/40"
        />
      </motion.div>
    </section>
  );
}

export { RevealText };
