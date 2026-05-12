"use client";

import { Marquee } from "./Marquee";

const ROW_ONE = [
  "Python",
  "TypeScript",
  "Java",
  "C",
  "R",
  "SQL",
  "Node.js",
  "JavaScript",
];

const ROW_TWO = [
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "FastAPI",
  "React",
  "Electron",
  "FFmpeg",
  "XGBoost",
  "Scikit-learn",
];

export function Skills() {
  return (
    <section className="border-t border-ink/10 bg-paper overflow-hidden py-16 md:py-20 space-y-6">
      <Marquee items={ROW_ONE} direction="left" speed={45} />
      <Marquee items={ROW_TWO} direction="right" speed={55} />
    </section>
  );
}
