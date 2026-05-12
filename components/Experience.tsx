type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "PioneerIP",
    title: "Software Engineer",
    period: "May 2025 – Sep 2025",
    location: "Concord, ON",
    bullets: [
      "Extended a USPTO patent data platform on FastAPI + MongoDB, adding features to a pipeline that ingests bulk XML patent archives.",
      "Built S3 sync utilities with MongoDB-tracked deduplication to reliably manage large archives across local and AWS S3 storage.",
      "Deployed on AWS ECS Fargate behind an Application Load Balancer with auto-scaling, health checks, and CloudWatch logging.",
    ],
  },
  {
    company: "DataAnnotation",
    title: "Prompt Engineer",
    period: "Jul 2025 – Present",
    location: "Remote",
    bullets: [
      "Crafted targeted prompts and evaluated AI model responses for accuracy and quality, providing detailed ratings to improve model performance.",
      "Evaluated multiple Gemini models for personalization quality across diverse use-cases.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display text-4xl tracking-tight">Experience</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
            {roles.length} roles
          </span>
        </div>

        <ul className="divide-y divide-ink/10">
          {roles.map((r) => (
            <li key={r.company} className="grid grid-cols-12 gap-4 py-10">
              <div className="col-span-12 md:col-span-3 space-y-1">
                <p className="font-mono text-xs text-ink/50">{r.period}</p>
                <p className="font-mono text-xs text-ink/40">{r.location}</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                  {r.company}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-ink/50">
                  {r.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {r.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-ink/70 leading-relaxed pl-4 border-l border-ink/15"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
