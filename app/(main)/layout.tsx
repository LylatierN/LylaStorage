import Link from "next/link";

const YEAR = new Date().getFullYear();
const LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-[var(--background)] border-b border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight hover:opacity-70 transition-opacity">
            LylaStorage
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              Home
            </Link>
            <Link href="/resume" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              Resume
            </Link>
            <Link href="/contact" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              Contact me
            </Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="border-t border-[var(--border)] py-6 mt-8">
        <div className="max-w-3xl mx-auto px-6 text-center text-xs text-[var(--muted)]">
          <p>© {YEAR} Lylatier · Thanks for visiting</p>
          <p className="mt-1 opacity-60">Last updated: {LAST_UPDATED}</p>
        </div>
      </footer>
    </>
  );
}
