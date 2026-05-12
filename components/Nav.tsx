import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-paper/70 border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight">
          <span className="italic">C.</span>Sun
        </Link>
        <div className="flex items-center gap-8 text-sm">
          <Link href="#work" className="hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-accent transition-colors">
            Experience
          </Link>
          <Link href="#about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link
            href="mailto:andrewsun33701@gmail.com"
            className="hover:text-accent transition-colors"
          >
            Contact
          </Link>
          <Link
            href="mailto:andrewsun33701@gmail.com"
            className="hidden md:block font-mono text-xs text-ink/50 hover:text-accent transition-colors"
          >
            andrewsun33701@gmail.com
          </Link>
        </div>
      </div>
    </nav>
  );
}
