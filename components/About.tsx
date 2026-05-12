export function About() {
  return (
    <section id="about" className="border-t border-ink/10 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50 mb-4">
            About
          </p>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="font-display text-3xl md:text-4xl leading-tight text-balance">
            CS &amp; Statistics student at UofT Mississauga. I care about
            systems that are correct, well-designed, and actually deployed.
          </p>
          <p className="text-paper/70 leading-relaxed max-w-xl">
            Based in Mississauga, ON. IBM-certified in RAG &amp; Agentic AI.
            My coursework spans Bayesian statistics and regression analysis on
            one side, and algorithm design and machine learning on the other —
            which is why I end up building things like fraud-detection pipelines
            and GPU video editors in the same semester. Open to software
            engineering and data science internship roles for 2026.
          </p>
          <div className="pt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a
              href="https://github.com/2anko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/80 hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/cheng-yi-sun-aa8808337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/80 hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:andrewsun33701@gmail.com"
              className="text-paper/80 hover:text-accent transition-colors"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
