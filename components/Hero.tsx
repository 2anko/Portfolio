export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-32">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60 mb-8">
        Cheng-Yi Sun — CS & Statistics @ UofT Mississauga
      </p>
      <h1 className="font-display text-balance text-6xl md:text-8xl leading-[0.95] tracking-tight">
        I build{" "}
        <span className="italic font-light">production</span>
        <br />
        software,{" "}
        <span className="relative inline-block">
          end&#8209;to&#8209;end
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent" />
        </span>
        .
      </h1>
      <p className="mt-10 max-w-xl text-lg text-ink/70 leading-relaxed">
        3rd-year Computer Science &amp; Statistics double major at the University
        of Toronto Mississauga. I&apos;ve shipped production software at an IP
        firm, competed with a fraud-detection ML pipeline, and built a
        GPU-accelerated video editor from scratch. Seeking software engineering
        and data science internships for 2026.
      </p>
      <div className="mt-12 flex items-center gap-6 text-sm">
        <a
          href="#work"
          className="px-5 py-3 bg-ink text-paper rounded-full hover:bg-accent transition-colors"
        >
          See selected projects →
        </a>
      </div>
    </section>
  );
}
