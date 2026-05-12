import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProjectList />
        <Experience />
        <About />
      </main>
      <Footer />
    </>
  );
}
