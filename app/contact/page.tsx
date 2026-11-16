export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-14 max-w-3xl mx-auto">
      <header className="mb-12">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Contact me</h1>
        <p className="text-[var(--muted)]">Feel free to reach out.</p>
      </header>

      <section className="space-y-4">
        <a
          href="mailto:lylatiern@gmail.com"
          className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 hover:border-[var(--foreground)] transition-colors group"
        >
          <span className="text-lg">✉️</span>
          <div>
            <p className="font-medium group-hover:underline underline-offset-2">Email</p>
            <p className="text-sm text-[var(--muted)]">lylatiern@gmail.com</p>
          </div>
        </a>

        <a
          href="https://github.com/LylatierN"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 hover:border-[var(--foreground)] transition-colors group"
        >
          <span className="text-lg">🐙</span>
          <div>
            <p className="font-medium group-hover:underline underline-offset-2">GitHub</p>
            <p className="text-sm text-[var(--muted)]">github.com/LylatierN</p>
          </div>
        </a>
      </section>
    </main>
  );
}
