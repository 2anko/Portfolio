import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectsHorizontal } from "@/components/ProjectsHorizontal";
import { Stats } from "@/components/Stats";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <ProjectsHorizontal />
        <Stats />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}
