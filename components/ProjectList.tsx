import { projects } from "@/lib/projects";

export function ProjectList() {
  return (
    <section id="work" className="border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display text-4xl tracking-tight">
            Selected projects
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
            {projects.length} projects
          </span>
        </div>

        <ul className="divide-y divide-ink/10">
          {projects.map((p) => (
            <li key={p.slug} className="group">
              <a
                href={p.href ?? "#"}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noopener noreferrer" : undefined}
                className="grid grid-cols-12 gap-4 py-8 items-baseline hover:bg-ink/[0.02] transition-colors px-2 -mx-2 rounded-sm"
              >
                <span className="col-span-1 font-mono text-xs text-ink/50">
                  {p.year}
                </span>
                <div className="col-span-7">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-ink/70 leading-relaxed max-w-xl">
                    {p.blurb}
                  </p>
                </div>
                <span className="hidden md:block col-span-2 text-sm text-ink/60">
                  {p.role}
                </span>
                <div className="col-span-12 md:col-span-2 flex flex-wrap gap-2 mt-3 md:mt-0">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-ink/15 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
