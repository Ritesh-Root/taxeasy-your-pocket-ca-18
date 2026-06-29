import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { LegalLayout } from "./privacy";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — TaxEasy" }] }),
  component: Terms,
});

function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="29 June 2026">
      <p>
        By using TaxEasy you agree to these terms. Please read them — especially the disclaimers and the
        limitation of liability.
      </p>

      <H>1. What TaxEasy is (and isn't)</H>
      <p>
        TaxEasy is an <b>information and calculation tool</b> that helps you understand and prepare your taxes,
        GST, and bills. It is <b>not</b> a chartered-accountant firm, law firm, or financial advisor, and using it
        does <b>not</b> create a professional or fiduciary relationship. Nothing it says is tax, legal, or
        investment advice.
      </p>

      <H>2. No guarantee — you verify and file</H>
      <p>
        Tax rules change and inputs can be wrong, so we make <b>no guarantee</b> of any outcome (no promise of a
        refund, of avoiding a notice, or of a specific result). Calculations are estimates based on published
        rules; <b>you must verify before filing</b>. You — or your CA — review, authorize, and file. TaxEasy does
        not file on your behalf or represent you before any authority.
      </p>

      <H>3. Your responsibilities</H>
      <ul>
        <li>Provide accurate information.</li>
        <li>Use TaxEasy only for lawful purposes. You may not use it to evade tax, conceal income, fabricate invoices, or break any law — we will refuse such requests.</li>
        <li>Keep your account secure.</li>
      </ul>

      <H>4. Limitation of liability</H>
      <p>
        To the maximum extent permitted by law, TaxEasy is provided "as is", and our total liability for any claim
        arising from the service is limited to the greater of <b>the fees you paid us in the prior 3 months</b> or{" "}
        <b>₹600</b>. We are not liable for indirect or consequential losses, penalties, interest, or filing
        outcomes.
      </p>

      <H>5. Subscriptions & refunds</H>
      <p>
        Paid plans renew per the plan you choose. You can cancel anytime; cancellation stops future billing.
        Refund requests are handled case-by-case — email <a href="mailto:support@taxeasy.dev">support@taxeasy.dev</a>.
      </p>

      <H>6. Governing law</H>
      <p>
        These terms are governed by the laws of India, with courts at our registered location having jurisdiction;
        for users outside India, local mandatory consumer-protection laws also apply.
      </p>

      <H>7. Changes</H>
      <p>We may update these terms and will post the new effective date here. Continued use means acceptance.</p>

      <p className="mt-8 text-sm text-slate-500">
        Questions? <a href="mailto:support@taxeasy.dev">support@taxeasy.dev</a>. TaxEasy is a calculation tool, not a
        CA firm.
      </p>
    </LegalLayout>
  );
}

function H({ children }: { children: ReactNode }) {
  return <h2>{children}</h2>;
}
