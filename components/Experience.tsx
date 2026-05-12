"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { RevealLine } from "./RevealText";

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "DataAnnotation",
    title: "Prompt Engineer",
    period: "Jul 2025 — Present",
    location: "Remote",
    bullets: [
      "Crafted targeted prompts and evaluated AI model responses for accuracy and quality, providing detailed ratings to improve model performance.",
      "Evaluated multiple Gemini models for personalization quality across diverse use cases.",
    ],
  },
  {
    company: "PioneerIP",
    title: "Software Engineer",
    period: "May 2025 — Sep 2025",
    location: "Concord, ON",
    bullets: [
      "Extended a USPTO patent data platform on FastAPI + MongoDB, adding features to a pipeline that ingests bulk XML patent archives.",
      "Built S3 sync utilities with MongoDB-tracked deduplication for reliable management of large archives across local and AWS S3 storage.",
      "Deployed services on AWS ECS Fargate behind an Application Load Balancer with auto-scaling, health checks, and CloudWatch logging.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-ink/10 bg-paper overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/50">
              Experience
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight">
              <RevealLine>Two roles.</RevealLine>{" "}
              <RevealLine delay={0.1}>
                <span className="italic font-light">Both</span> shipped real
              </RevealLine>{" "}
              <RevealLine delay={0.2}>infrastructure.</RevealLine>
            </h2>
          </div>
        </div>

        <ol className="relative">
          {/* timeline rail */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-ink/15 md:left-[calc(33.333%-1px)]"
            aria-hidden
          />

          {roles.map((r, i) => (
            <li
              key={r.company}
              className="relative grid md:grid-cols-12 gap-6 md:gap-8 pb-16 last:pb-0"
            >
              <Reveal
                delay={i * 0.1}
                className="md:col-span-4 pl-8 md:pl-0 md:pr-10 relative"
              >
                {/* Timeline dot */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-paper md:left-auto md:right-[-7px]"
                  aria-hidden
                />
                <p className="font-mono text-xs uppercase tracking-wider text-ink/60">
                  {r.period}
                </p>
                <p className="font-mono text-xs text-ink/40 mt-1">
                  {r.location}
                </p>
              </Reveal>

              <Reveal delay={i * 0.1 + 0.1} className="md:col-span-8 pl-8 md:pl-8">
                <h3 className="font-display text-3xl md:text-4xl tracking-tight">
                  {r.company}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {r.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {r.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1 + j * 0.08 + 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-ink/70 leading-relaxed pl-5 border-l border-ink/15"
                    >
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
