"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="text-sm px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--foreground)] transition-colors print:hidden"
    >
      Download PDF
    </button>
  );
}
