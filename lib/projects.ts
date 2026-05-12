export type Project = {
  slug: string;
  title: string;
  blurb: string;
  year: string;
  role: string;
  tags: string[];
  href?: string;
  /** Optional one-line "highlight metric" — appears on the card */
  metric?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "aml-ml-model",
    title: "AML Fraud Detection",
    blurb:
      "End-to-end ML pipeline that ranks 1,000 bank customers by fraud risk — 70% recall by reviewing just the top 10 flagged accounts.",
    year: "2025",
    role: "Solo — IMI Competition",
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    href: "https://github.com/2anko/AML-ML-Model",
    metric: { value: "70%", label: "fraud recall in top 1% of accounts" },
  },
  {
    slug: "scm-sql",
    title: "Supply Chain Manager",
    blurb:
      "Full-stack desktop SCM app with JWT auth, four permission tiers, 30+ REST endpoints, and atomic PostgreSQL inventory transactions — built to be shipped as a licensed .exe.",
    year: "2025",
    role: "Solo",
    tags: ["Electron", "Node.js", "Fastify", "PostgreSQL", "Docker"],
    href: "https://github.com/2anko/SCM-SQL",
    metric: { value: "30+", label: "REST endpoints, 12 SQL migrations" },
  },
  {
    slug: "clipstudio",
    title: "ClipStudio",
    blurb:
      "Non-destructive video editor: cuts are metadata-only until export, with a VLCJ/FFmpeg hybrid preview and auto-detected NVENC GPU acceleration for the render pass.",
    year: "2024",
    role: "Solo",
    tags: ["Java", "JavaFX", "FFmpeg", "SQLite", "NVENC"],
    href: "https://github.com/2anko/clipstudio",
    metric: { value: "GPU", label: "auto-detected NVENC export pipeline" },
  },
  {
    slug: "mysh",
    title: "Unix Shell",
    blurb:
      "Custom shell in C built from POSIX primitives — piping, background jobs, signal handling, and a multi-client TCP chat server embedded directly into the shell.",
    year: "2024",
    role: "Solo — University",
    tags: ["C", "POSIX", "Linux", "Sockets", "Make"],
    href: "https://github.com/2anko/mysh",
    metric: { value: "0 leaks", label: "verified with ASan + LeakSanitizer" },
  },
];
