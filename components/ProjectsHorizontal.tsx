"use client";

import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { projects, type Project } from "@/lib/projects";
import { getLenis } from "@/lib/lenis-singleton";

const DRAG_THRESHOLD = 4;
const DRAG_MULTIPLIER = 1.8;

const PALETTES = [
  { from: "from-orange-500/30", to: "to-rose-500/5", dot: "bg-accent" },
  { from: "from-emerald-500/25", to: "to-cyan-500/5", dot: "bg-emerald-300" },
  { from: "from-violet-500/30", to: "to-fuchsia-500/5", dot: "bg-violet-300" },
  { from: "from-amber-500/25", to: "to-yellow-500/5", dot: "bg-amber-300" },
];

export function ProjectsHorizontal() {
  return (
    <>
      <div className="md:hidden">
        <MobileList />
      </div>
      <div className="hidden md:block">
        <DesktopScroller />
      </div>
    </>
  );
}

function DesktopScroller() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const total = projects.length;
  // motion.div is explicitly sized at total * 100vw so translate % math is correct
  const endPercent = `-${((total - 1) / total) * 100}%`;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", endPercent]);

  // Drag-to-scroll: convert horizontal pointer drag → vertical page scroll
  const drag = useRef({
    startX: 0,
    startScroll: 0,
    pointerId: -1,
    active: false,
    moved: false,
  });

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    drag.current = {
      startX: e.clientX,
      startScroll: window.scrollY,
      pointerId: e.pointerId,
      active: true,
      moved: false,
    };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || e.pointerId !== drag.current.pointerId) return;
    const dx = drag.current.startX - e.clientX;
    if (!drag.current.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;
      drag.current.moved = true;
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {}
    }
    const target = drag.current.startScroll + dx * DRAG_MULTIPLIER;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target, { immediate: true });
    } else {
      window.scrollTo(0, target);
    }
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerId !== drag.current.pointerId) return;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}
    drag.current.active = false;
  };

  // Block click events on child links if the user actually dragged
  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section
      id="work"
      ref={ref}
      className="relative bg-ink text-paper"
      style={{ height: `${total * 100}vh` }}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden flex flex-col select-none touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        data-cursor="drag"
      >
        <header className="absolute top-0 left-0 right-0 z-10 px-10 py-6 flex items-center justify-between border-b border-paper/10 bg-ink/40 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-paper/50">
              Selected work
            </span>
            <span className="h-px w-12 bg-paper/20" />
            <span className="font-mono text-xs text-paper/40">
              {String(total).padStart(2, "0")} projects
            </span>
          </div>
          <ScrollIndicator progress={scrollYProgress} count={total} />
        </header>

        <motion.div
          style={{ x, width: `${total * 100}vw` }}
          className="flex h-full will-change-transform"
        >
          {projects.map((p, i) => (
            <Card
              key={p.slug}
              project={p}
              index={i}
              total={total}
              progress={scrollYProgress}
              palette={PALETTES[i % PALETTES.length]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({
  project,
  index,
  total,
  progress,
  palette,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  palette: (typeof PALETTES)[number];
}) {
  // Each card occupies a slice of scroll progress
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  // Content gently zooms/fades as card enters and exits center
  const opacity = useTransform(
    progress,
    [start - 0.05, mid, end + 0.05],
    [0.4, 1, 0.4]
  );
  const scale = useTransform(
    progress,
    [start - 0.05, mid, end + 0.05],
    [0.92, 1, 0.92]
  );

  return (
    <div className="relative shrink-0 w-screen h-full flex items-center justify-center px-16 lg:px-24">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${palette.from} ${palette.to} pointer-events-none`}
      />
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:32px_32px]" />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl w-full grid grid-cols-12 gap-8"
      >
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-paper/60">
            <span className={`inline-block h-2 w-2 rounded-full ${palette.dot}`} />
            <span>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-paper/20" />
            <span>{project.year}</span>
            <span className="h-px w-8 bg-paper/20" />
            <span>{project.role}</span>
          </div>

          <h3 className="font-display text-5xl md:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
            {project.title}
          </h3>

          <p className="text-lg text-paper/75 leading-relaxed max-w-xl">
            {project.blurb}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 border border-paper/20 rounded-full text-paper/70"
              >
                {t}
              </span>
            ))}
          </div>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-paper/30 pb-1 hover:border-accent hover:text-accent transition-colors"
            >
              <span>View source on GitHub</span>
              <span>↗</span>
            </a>
          )}
        </div>

        {project.metric && (
          <div className="col-span-12 lg:col-span-5 flex lg:justify-end lg:items-end">
            <div className="border-l border-paper/15 pl-6 max-w-xs">
              <p className="font-display text-6xl md:text-7xl tracking-tight leading-none">
                {project.metric.value}
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-paper/50">
                {project.metric.label}
              </p>
            </div>
          </div>
        )}
      </motion.div>

      <span className="absolute bottom-10 left-10 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/30">
        {project.slug}
      </span>
    </div>
  );
}

function ScrollIndicator({
  progress,
  count,
}: {
  progress: MotionValue<number>;
  count: number;
}) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-28 h-px bg-paper/15">
        <motion.div
          style={{ width }}
          className="absolute left-0 top-0 h-full bg-accent"
        />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/40">
        Drag &nbsp;/&nbsp; Scroll
      </span>
    </div>
  );
}

function MobileList() {
  return (
    <section id="work" className="bg-ink text-paper py-16 px-6">
      <div className="mb-10 space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
          Selected work
        </p>
        <h2 className="font-display text-4xl tracking-tight">{projects.length} projects</h2>
      </div>
      <ul className="space-y-12">
        {projects.map((p, i) => (
          <li key={p.slug} className="border-t border-paper/10 pt-8">
            <p className="font-mono text-xs text-paper/40 mb-3">
              {String(i + 1).padStart(2, "0")} · {p.year} · {p.role}
            </p>
            <h3 className="font-display text-3xl tracking-tight mb-3">{p.title}</h3>
            <p className="text-paper/70 leading-relaxed mb-4">{p.blurb}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-paper/20 rounded-full text-paper/60"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border-b border-paper/30 pb-0.5 hover:border-accent hover:text-accent transition-colors"
              >
                View source ↗
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
