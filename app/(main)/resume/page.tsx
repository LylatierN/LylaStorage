import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PrintButton from "./PrintButton";

const dataDir = path.join(process.cwd(), "resumeData");

function readEntries(folder: string) {
  const dir = path.join(dataDir, folder);
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf-8"));
      const bullets = content
        .split("\n")
        .map((l) => l.replace(/^-\s*/, "").trim())
        .filter(Boolean);
      return { ...data, bullets } as Record<string, string | string[]> & { bullets: string[] };
    });
}

export default function Resume() {
  const meta = JSON.parse(fs.readFileSync(path.join(dataDir, "meta.json"), "utf-8"));
  const experiences = readEntries("experience");
  const projects = readEntries("projects");
  const education = readEntries("education");

  return (
    <main className="min-h-screen px-6 py-14 max-w-3xl mx-auto">
      <p className="text-xs text-[var(--muted)] mb-6">Last update: {meta.lastUpdate}</p>

      <header className="mb-10 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight mb-1">{meta.name}</h1>
          <p className="text-sm text-[var(--muted)]">{meta.subtitle}</p>
        </div>
        <PrintButton />
      </header>

      <div className="text-sm text-[var(--muted)] flex flex-wrap gap-x-4 gap-y-1 mb-10 print:text-black">
        <span>📍 {meta.contact.location}</span>
        <span>📞 {meta.contact.phone}</span>
        <span>✉️ {meta.contact.email}</span>
      </div>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.title as string}>
              <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                <div>
                  <p className="font-medium">{exp.title as string}</p>
                  {exp.subtitle && <p className="text-xs text-[var(--muted)]">{exp.subtitle as string}</p>}
                </div>
                <div className="flex items-center gap-3">
                  {exp.link && (
                    <a
                      href={exp.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] underline underline-offset-2 transition-colors print:hidden"
                    >
                      {exp.linkLabel as string}
                    </a>
                  )}
                  {exp.label && <span className="text-xs text-[var(--muted)]">{exp.label as string}</span>}
                </div>
              </div>
              <ul className="text-sm text-[var(--muted)] space-y-1 list-disc list-inside">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((proj) => (
            <div key={proj.title as string}>
              <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                <div>
                  <p className="font-medium">{proj.title as string}</p>
                  {proj.subtitle && <p className="text-xs text-[var(--muted)]">{proj.subtitle as string}</p>}
                </div>
                {proj.link && (
                  <a
                    href={proj.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] underline underline-offset-2 transition-colors print:hidden"
                  >
                    {proj.linkLabel as string}
                  </a>
                )}
              </div>
              <ul className="text-sm text-[var(--muted)] space-y-1 list-disc list-inside">
                {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
          Education
        </h2>
        {education.map((edu) => (
          <div key={edu.title as string} className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <p className="font-medium">{edu.title as string}</p>
              <p className="text-sm text-[var(--muted)]">{edu.degree as string}</p>
              <p className="text-sm text-[var(--muted)]">{edu.detail as string}</p>
            </div>
            <span className="text-xs text-[var(--muted)]">{edu.period as string}</span>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {meta.skills.map(({ label, value }: { label: string; value: string }) => (
            <div key={label} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
              <p className="text-xs text-[var(--muted)] mb-1">{label}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
          Languages
        </h2>
        <div className="flex gap-6 text-sm">
          {meta.languages.map(({ name, level }: { name: string; level: string }) => (
            <div key={name}>
              <p className="font-medium">{name}</p>
              <p className="text-[var(--muted)]">{level}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
