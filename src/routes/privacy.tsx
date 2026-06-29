import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — TaxEasy" }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="29 June 2026">
      <p>
        TaxEasy ("we", "us") provides an AI assistant that helps small-business owners with tax, GST, and bills
        over WhatsApp and the web. This policy explains what we collect, why, and your rights. We follow India's
        Digital Personal Data Protection Act, 2023 (DPDP) and apply equivalent care for users in other regions.
      </p>

      <H>1. What we collect</H>
      <ul>
        <li><b>You provide:</b> your region/country, the nature of your work, turnover/income, expenses and bills you share, and your messages to the assistant.</li>
        <li><b>Automatically:</b> your WhatsApp number (as your account id), message timestamps, and basic usage logs.</li>
        <li>We do <b>not</b> sell your data, and we do not run ads.</li>
      </ul>

      <H>2. Your consent controls (you decide what the AI sees)</H>
      <p>
        During onboarding you choose which data categories you share — income, GST, bank, bills, notices. A
        category you turn off is <b>stripped before any AI request</b>, server-side — not merely hidden. You can
        change or withdraw consent at any time, which stops future use and triggers deletion of that category's
        history (subject to legal tax-record retention).
      </p>

      <H>3. How the AI is used</H>
      <p>
        Your tax/GST figures are computed by a deterministic, hard-coded engine — <b>the AI never produces a tax
        number</b>. The AI (Google Gemini) is used only to understand language, explain, and converse, and it only
        receives the data categories you've consented to.
      </p>

      <H>4. Storage, security & residency</H>
      <p>
        Data is encrypted in transit and at rest. For India users, data is stored in India. We apply
        least-privilege access, request-signature verification, rate limiting, and audit logging.
      </p>

      <H>5. Retention</H>
      <p>
        We keep tax-relevant records as long as the law requires (in India, typically up to 7 years), and delete
        other data on request or when no longer needed.
      </p>

      <H>6. Your rights</H>
      <p>
        You may access, correct, or erase your data, withdraw consent, and raise a grievance. Email us and we'll
        act within the timelines the law requires.
      </p>

      <H>7. Grievance Officer</H>
      <p>
        Grievance Officer (DPDP): <a href="mailto:grievance@taxeasy.dev">grievance@taxeasy.dev</a>. General support:{" "}
        <a href="mailto:support@taxeasy.dev">support@taxeasy.dev</a>.
      </p>

      <p className="mt-8 text-sm text-slate-500">
        TaxEasy is a calculation tool, not a CA firm. Always verify before filing.
      </p>
    </LegalLayout>
  );
}

export function LegalLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[color:var(--ink)]">
      <header className="border-b border-emerald-900/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg font-bold text-white"
              style={{ background: "linear-gradient(135deg, var(--teal), var(--whatsapp))" }}
            >
              ₹
            </span>
            <span className="text-lg font-bold tracking-tight">TaxEasy</span>
          </a>
          <a
            href="https://wa.me/918235479138?text=Hi%20TaxEasy%21%20I%27d%20like%20to%20get%20started."
            className="rounded-full px-4 py-2 text-sm font-semibold text-white"
            style={{ background: "var(--whatsapp)" }}
          >
            Start on WhatsApp
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">Last updated: {updated}</p>
        <div className="legal mt-8 space-y-4 leading-relaxed text-slate-700 [&_a]:font-medium [&_a]:text-[color:var(--teal)] [&_a]:underline [&_b]:text-[color:var(--ink)] [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[color:var(--ink)] [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          {children}
        </div>
      </div>

      <footer className="border-t border-emerald-900/10 px-4 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} TaxEasy · <a href="/privacy" className="hover:text-[color:var(--ink)]">Privacy</a> ·{" "}
        <a href="/terms" className="hover:text-[color:var(--ink)]">Terms</a> ·{" "}
        <a href="mailto:support@taxeasy.dev" className="hover:text-[color:var(--ink)]">support@taxeasy.dev</a>
      </footer>
    </div>
  );
}

function H({ children }: { children: ReactNode }) {
  return <h2>{children}</h2>;
}
