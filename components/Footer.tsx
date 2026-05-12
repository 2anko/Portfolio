export function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-ink/60">
        <p>© {new Date().getFullYear()} Cheng-Yi Sun. Made with care.</p>
        <p className="font-mono text-xs">
          Built with Next.js · Hosted on Vercel
        </p>
      </div>
    </footer>
  );
}
