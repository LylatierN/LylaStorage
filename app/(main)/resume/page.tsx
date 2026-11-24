"use client";

export default function Resume() {
  return (
    <main className="min-h-screen px-6 py-14 max-w-3xl mx-auto">
      <p className="text-xs text-[var(--muted)] mb-6">Last update: November 2026</p>

      <header className="mb-10 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight mb-1">Nattanan Pimjaipong</h1>
          <p className="text-sm text-[var(--muted)]">Software & Knowledge Engineering · Kasetsart University</p>
        </div>
        <button
          onClick={() => window.print()}
          className="text-sm px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--foreground)] transition-colors print:hidden"
        >
          Download PDF
        </button>
      </header>

      <div className="text-sm text-[var(--muted)] flex flex-wrap gap-x-4 gap-y-1 mb-10 print:text-black">
        <span>📍 Bangkok, Thailand</span>
        <span>📞 +66 83 440 7116</span>
        <span>✉️ nattanan.pimj@gmail.com</span>
      </div>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
          Experience
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <p className="font-medium">Discrete and Linear Algebra TA</p>
              <span className="text-xs text-[var(--muted)]">Class of 2026</span>
            </div>
            <ul className="text-sm text-[var(--muted)] space-y-1 list-disc list-inside">
              <li>Explained discrete math and linear algebra concepts to new freshmen.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <p className="font-medium">Open House Core Team</p>
              <span className="text-xs text-[var(--muted)]">KU OpenHouse 2025–2026</span>
            </div>
            <ul className="text-sm text-[var(--muted)] space-y-1 list-disc list-inside">
              <li>Managed equipment procurement, resource allocation, and spatial layouts across 3 zones with zero operational downtime.</li>
              <li>Collaborated with faculty advisors, university administration, and 10+ student sub-teams to align timelines, safety compliance, and budget.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <div>
                <p className="font-medium">Head of Art Team — Let me try 6</p>
                <p className="text-xs text-[var(--muted)]">Visual Direction & Team Leadership · 2026</p>
              </div>
              <a
                href="https://www.instagram.com/lmt_camp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] underline underline-offset-2 transition-colors print:hidden"
              >
                Instagram ↗
              </a>
            </div>
            <ul className="text-sm text-[var(--muted)] space-y-1 list-disc list-inside">
              <li>Led creative direction and visual identity, designing promotional graphics, social media campaigns, and event materials across Instagram/Facebook.</li>
              <li>Managed a team of 6 student designers, establishing design templates in Canva/Figma to maintain brand consistency under tight deadlines.</li>
              <li>Produced PR posts and promotional assets that boosted event awareness and student participation across high schools.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <p className="font-medium">Computer Programming TA</p>
              <span className="text-xs text-[var(--muted)]">Class of 2025</span>
            </div>
            <ul className="text-sm text-[var(--muted)] space-y-1 list-disc list-inside">
              <li>Explained programming concepts to freshmen with no prior programming experience.</li>
              <li>Acted as first-line problem solver before escalating to professors.</li>
              <li>Provided macOS-specific technical support as the only MacOS TA.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
          Projects
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <div>
                <p className="font-medium">WHAT WE EAT — Real Time Group Decision Platform</p>
                <p className="text-xs text-[var(--muted)]">UX/UI Designer & Frontend Developer · 2025</p>
              </div>
              <a
                href="https://github.com/MTPeraya/What-we-eat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] underline underline-offset-2 transition-colors print:hidden"
              >
                GitHub ↗
              </a>
            </div>
            <ul className="text-sm text-[var(--muted)] space-y-1 list-disc list-inside">
              <li>Designed UI/UX and built the frontend for a real-time group food decision web app.</li>
              <li>Part of the Individual Software Development course; group of 4.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <div>
                <p className="font-medium">KU Idle Logistic — 2D Idle Transport Simulator</p>
                <p className="text-xs text-[var(--muted)]">Art Director & Game Developer · 2025 · 2nd place at CPSK Hackathon 2025</p>
              </div>
              <a
                href="https://gamejolt.com/games/whatmyname-KUIL/999701"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] underline underline-offset-2 transition-colors print:hidden"
              >
                GameJolt ↗
              </a>
            </div>
            <ul className="text-sm text-[var(--muted)] space-y-1 list-disc list-inside">
              <li>Designed and drew all game art; helped teammates with debugging and logic fixes.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <div>
                <p className="font-medium">Cauldron and Coins — 2D Alchemist Simulator</p>
                <p className="text-xs text-[var(--muted)]">Game Developer · 2024</p>
              </div>
              <a
                href="https://github.com/LylatierN/Cauldron_n_Coins"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] underline underline-offset-2 transition-colors print:hidden"
              >
                GitHub ↗
              </a>
            </div>
            <ul className="text-sm text-[var(--muted)] space-y-1 list-disc list-inside">
              <li>Built interactable environment and gameplay logic solo using OOP with mathematical formulas.</li>
              <li>Created a data visualizer integrating Tkinter, Matplotlib, and Pandas.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <div>
                <p className="font-medium">Lyla Storage — Portfolio & Mini Projects Website</p>
                <p className="text-xs text-[var(--muted)]">Deployed · 2026</p>
              </div>
              <a
                href="https://lyla-storage.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] underline underline-offset-2 transition-colors print:hidden"
              >
                lyla-storage.vercel.app ↗
              </a>
            </div>
            <ul className="text-sm text-[var(--muted)] space-y-1 list-disc list-inside">
              <li>QR Code Maker: free custom QR code generator.</li>
              <li>KU Open House Slide: real-time presentation slides controlled remotely via Pusher with intro/outro video transitions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
          Education
        </h2>
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <p className="font-medium">Kasetsart University, Bangkok</p>
            <p className="text-sm text-[var(--muted)]">B.Eng. in Software and Knowledge Engineering (International Program)</p>
            <p className="text-sm text-[var(--muted)]">GPAX: 3.10 / 4.00 · Expected Graduation: 2028</p>
          </div>
          <span className="text-xs text-[var(--muted)]">Aug 2024 – Present</span>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4 border-b border-[var(--border)] pb-2">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {[
            { label: "Languages", value: "Python · C · C++ · JavaScript" },
            { label: "Web", value: "HTML · CSS · React · ExpressJS · Django" },
            { label: "Databases", value: "MySQL · MongoDB" },
            { label: "Tools", value: "Google Workspace · Microsoft Office · Canva · Figma" },
          ].map(({ label, value }) => (
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
          <div>
            <p className="font-medium">Thai</p>
            <p className="text-[var(--muted)]">Native</p>
          </div>
          <div>
            <p className="font-medium">English</p>
            <p className="text-[var(--muted)]">Advanced · IELTS 6.5</p>
          </div>
        </div>
      </section>
    </main>
  );
}
