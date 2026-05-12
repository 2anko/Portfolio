"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { RevealLine } from "./RevealText";
import { MagneticLink } from "./MagneticLink";

const LINKS = [
  { label: "GitHub", href: "https://github.com/2anko", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cheng-yi-sun-aa8808337",
    external: true,
  },
  { label: "Email", href: "mailto:andrewsun33701@gmail.com" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-ink/10 bg-ink text-paper overflow-hidden"
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:80px_80px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="absolute top-0 right-0 h-[36rem] w-[36rem] rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-paper/50 mb-4">
            About
          </p>
          <div className="hidden md:block mt-12 space-y-2 font-mono text-xs text-paper/40">
            <p>Mississauga, ON</p>
            <p>UofT Mississauga</p>
            <p>CS &amp; Statistics</p>
          </div>
        </div>

        <div className="md:col-span-8 space-y-10">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
            <RevealLine>I care about systems that are</RevealLine>{" "}
            <RevealLine delay={0.1}>
              <span className="italic font-light">correct,</span>
            </RevealLine>{" "}
            <RevealLine delay={0.2}>well-designed,</RevealLine>{" "}
            <RevealLine delay={0.3}>and actually</RevealLine>{" "}
            <RevealLine delay={0.4}>
              <span className="relative inline-block">
                deployed
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                  className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-accent"
                />
              </span>
              <span className="text-accent">.</span>
            </RevealLine>
          </h2>

          <Reveal delay={0.4}>
            <p className="text-paper/70 leading-relaxed max-w-xl text-lg">
              Based in Mississauga, ON. IBM-certified in RAG &amp; Agentic AI.
              My coursework spans Bayesian statistics and regression analysis on
              one side, algorithm design and machine learning on the other —
              which is why I end up building fraud-detection pipelines and GPU
              video editors in the same semester. Open to software engineering
              and data science internships for 2026.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="pt-6 border-t border-paper/15 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm">
              {LINKS.map((l, i) => (
                <span key={l.label} className="flex items-center gap-2">
                  <MagneticLink
                    href={l.href}
                    external={l.external}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-paper/20 text-paper/85 hover:text-accent hover:border-accent transition-colors"
                  >
                    <span>{l.label}</span>
                    <span className="text-xs">↗</span>
                  </MagneticLink>
                  {i < LINKS.length - 1 && (
                    <span className="text-paper/20">·</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
