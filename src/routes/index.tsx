import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  ShieldCheck,
  Bell,
  Languages,
  Receipt,
  Calculator,
  FileCheck2,
  Lock,
  Check,
  ArrowRight,
  Sparkles,
  Store,
  Briefcase,
  Stethoscope,
  Bike,
  Camera,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TaxEasy — Your CA, now on WhatsApp" },
      {
        name: "description",
        content:
          "AI-powered tax, GST & bills assistant for Indian small businesses — right inside WhatsApp. Hindi, Hinglish & English.",
      },
      { property: "og:title", content: "TaxEasy — Your CA, now on WhatsApp" },
      {
        property: "og:description",
        content: "हर बिज़नेस का अपना CA. Tax, GST & bills help on WhatsApp.",
      },
    ],
  }),
  component: Landing,
});

const WA = "#"; // placeholder WhatsApp link

/* ---------- Buttons ---------- */

function WhatsAppBtn({
  children = "Start on WhatsApp",
  size = "md",
  className = "",
}: {
  children?: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  const pad = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  return (
    <a
      href={WA}
      className={`inline-flex items-center gap-2 rounded-full font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:translate-y-[-1px] hover:shadow-xl ${pad} ${className}`}
      style={{ background: "var(--whatsapp)" }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .14 5.34.14 11.91c0 2.1.55 4.14 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 005.75 1.47h.01c6.57 0 11.93-5.34 11.93-11.91 0-3.18-1.24-6.17-3.49-8.42zM12.08 21.3h-.01a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.75.98 1-3.66-.22-.37a9.34 9.34 0 01-1.43-4.83c0-5.17 4.22-9.38 9.41-9.38 2.51 0 4.87.98 6.64 2.75a9.32 9.32 0 012.75 6.64c0 5.17-4.22 9.38-9.41 9.38zm5.16-7.03c-.28-.14-1.67-.82-1.93-.92-.26-.09-.45-.14-.64.14-.19.28-.74.92-.9 1.11-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.35s-1 .98-1 2.39 1.02 2.77 1.16 2.96c.14.19 2 3.06 4.85 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.67-.68 1.91-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33z" />
      </svg>
      {children}
    </a>
  );
}

/* ---------- Nav (light) ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 text-[color:var(--ink)]">
          <span
            className="grid h-8 w-8 place-items-center rounded-lg font-bold text-white"
            style={{ background: "linear-gradient(135deg, var(--teal), var(--whatsapp))" }}
          >
            ₹
          </span>
          <span className="text-lg font-bold tracking-tight">TaxEasy</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          <a href="#how" className="hover:text-[color:var(--ink)]">How it works</a>
          <a href="#features" className="hover:text-[color:var(--ink)]">Features</a>
          <a href="#pricing" className="hover:text-[color:var(--ink)]">Pricing</a>
          <a href="#personas" className="hover:text-[color:var(--ink)]">For you</a>
        </nav>
        <WhatsAppBtn size="md">Start on WhatsApp</WhatsAppBtn>
      </div>
    </header>
  );
}

/* ---------- Hero / Global Reach (single source of truth) ---------- */

function Hero() {
  const countries = [
    { flag: "🇮🇳", name: "India", live: true },
    { flag: "🇺🇸", name: "USA" },
    { flag: "🇬🇧", name: "UK" },
    { flag: "🇦🇪", name: "UAE" },
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇸🇬", name: "Singapore" },
    { flag: "🇦🇺", name: "Australia" },
  ];
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(115deg, #FBF8F1 0%, #F2F8EC 45%, #DDF1D6 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 50% at 90% 60%, rgba(37,211,102,0.18), transparent 70%), radial-gradient(35% 40% at 8% 20%, rgba(245,158,11,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-emerald-900 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--saffron)" }} />
            AI explains · the engine calculates · you verify
          </div>

          <h1 className="text-balance text-5xl font-extrabold tracking-tight text-[color:var(--ink)] sm:text-6xl md:text-[68px] md:leading-[1.02]">
            Your CA,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">now on WhatsApp.</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm md:bottom-2 md:h-4"
                style={{ background: "rgba(245,158,11,0.45)" }}
              />
            </span>
          </h1>

          <p
            className="font-hi mt-5 text-2xl font-semibold sm:text-3xl"
            style={{ color: "var(--teal-deep)" }}
          >
            हर बिज़नेस का अपना CA।
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
            <span className="font-hi">
              Tax, GST और bills की हर उलझन का जवाब — आपकी भाषा में, सीधे WhatsApp पर।
            </span>{" "}
            No app, no jargon. Just message and ask.{" "}
            <b className="text-[color:var(--ink)]">Live in India 🇮🇳</b>, expanding worldwide 🌏.
          </p>

          <div className="mt-8">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-900/70">
              🌐 Choose your country
            </div>
            <div className="flex flex-wrap gap-2">
              {countries.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    c.live
                      ? "border-transparent text-white shadow-md shadow-emerald-900/20"
                      : "border-emerald-900/10 bg-white/80 text-slate-700 hover:bg-white"
                  }`}
                  style={c.live ? { background: "var(--whatsapp-dark)" } : undefined}
                >
                  <span className="text-base leading-none">{c.flag}</span>
                  {c.name}
                  {c.live && (
                    <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-bold tracking-wider">
                      LIVE
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-amber-100/60 px-3 py-1.5 text-sm text-amber-900">
              ✅{" "}
              <span>
                <b>Live in India</b> — start free on WhatsApp below 👇
              </span>
            </div>
          </div>

          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <WhatsAppBtn size="lg">Start on WhatsApp</WhatsAppBtn>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-emerald-50"
            >
              See how it works <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: "var(--whatsapp-dark)" }} /> Free to start
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: "var(--whatsapp-dark)" }} /> No app to download
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: "var(--whatsapp-dark)" }} /> Hindi · Hinglish · English
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <GstChatPhone />
        </div>
      </div>

      {/* trust strip */}
      <div className="relative border-t border-emerald-900/10 bg-white/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm md:flex-row">
          <div className="text-slate-700">
            <b className="text-[color:var(--ink)]">AI explains</b> ·{" "}
            <b className="text-[color:var(--ink)]">the engine calculates</b> ·{" "}
            <b className="text-[color:var(--ink)]">you verify</b>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <TrustPill>FY 2025–26 compliant</TrustPill>
            <TrustPill>DPDP-ready</TrustPill>
            <TrustPill>Data stays in India</TrustPill>
            <TrustPill>Bank-grade encryption</TrustPill>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-900/10 bg-white px-2.5 py-1 text-slate-700">
      <ShieldCheck className="h-3.5 w-3.5" style={{ color: "var(--teal)" }} />
      {children}
    </span>
  );
}

function GstChatPhone() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(37,211,102,0.35), transparent 70%)",
        }}
      />
      <div className="rounded-[2.5rem] border border-emerald-900/10 bg-white p-2 shadow-2xl shadow-emerald-900/20">
        <div className="overflow-hidden rounded-[2rem]" style={{ background: "#EDE8DE" }}>
          <div
            className="relative flex items-center gap-3 px-4 py-4"
            style={{ background: "var(--teal-deep)" }}
          >
            <span className="absolute left-1/2 top-2 h-1.5 w-20 -translate-x-1/2 rounded-full bg-black/40" />
            <div
              className="grid h-10 w-10 place-items-center rounded-full text-base font-bold text-white"
              style={{ background: "linear-gradient(135deg,var(--teal),var(--whatsapp))" }}
            >
              ₹
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-white">TaxEasy</div>
              <div className="font-hi text-[11px] text-emerald-100/85">
                online · आपकी मदद के लिए
              </div>
            </div>
          </div>

          <div className="space-y-2.5 px-3 py-4" style={{ minHeight: 420 }}>
            <div className="flex justify-end">
              <div className="font-hi rounded-2xl rounded-br-sm bg-[#DCF8C6] px-3 py-2 text-[12.5px] text-slate-900 shadow-sm">
                नमस्ते 👋
              </div>
            </div>
            <div className="flex justify-start">
              <div className="font-hi max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12.5px] leading-snug text-slate-900 shadow-sm">
                👋 TaxEasy में आपका स्वागत है! मैं आपकी tax, GST और bills की मदद करूँगा।
              </div>
            </div>
            <div className="flex justify-end">
              <div className="font-hi max-w-[85%] rounded-2xl rounded-br-sm bg-[#DCF8C6] px-3 py-2 text-[12.5px] leading-snug text-slate-900 shadow-sm">
                मेरी इस महीने की sale ₹4.2 लाख है, GST कितना देना है?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-white px-3 py-2.5 text-[12.5px] leading-snug text-slate-900 shadow-sm">
                <div className="font-hi text-slate-700">आपकी GST liability (18% slab):</div>
                <div className="mt-1 text-xl font-extrabold tracking-tight text-[color:var(--teal-deep)]">
                  ₹ 75,600
                </div>
                <div className="font-hi mt-1 text-[11px] text-slate-500">
                  Due: 20th · Input credit के बाद कम हो सकता है
                </div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[88%] rounded-2xl rounded-bl-sm border border-amber-200 bg-amber-50 px-3 py-2 text-[12.5px] text-slate-900 shadow-sm">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-700">
                  <Bell className="h-3 w-3" /> Reminder
                </div>
                <div className="mt-0.5">GSTR-3B due in 6 days. Want me to prep it?</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 border-t border-black/5 bg-white px-3 py-2.5">
            <div className="flex-1 rounded-full bg-slate-100 px-3 py-2 text-[12px] text-slate-400">
              Type a message…
            </div>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full text-white"
              style={{ background: "var(--whatsapp)" }}
              aria-label="Send"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section title ---------- */

function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div
          className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style={{ background: "rgba(15,118,110,0.1)", color: "var(--teal-deep)" }}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[color:var(--ink)] sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-base text-slate-600">{sub}</p>}
    </div>
  );
}

/* ---------- How it works ---------- */

function HowItWorks() {
  const steps = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Message us on WhatsApp",
      body: "Tap the green button. Save the number. Bas, ho gaya — no app, no signup form.",
    },
    {
      icon: <FileCheck2 className="h-6 w-6" />,
      title: "Answer 4 quick questions",
      body: "Aap kya karte ho, kitna kamate ho, GST hai ya nahi. 60 seconds, no jargon.",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Ask anything · get reminders",
      body: "GSTR, advance tax, ITR — sab deadlines pehle se yaad dilayenge.",
    },
  ];
  return (
    <section id="how" className="bg-[#FBF8F1] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="How it works" title="Three steps. No accountant-speak." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-xl text-white"
                style={{ background: "var(--teal)" }}
              >
                {s.icon}
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-900/70">
                Step {i + 1}
              </div>
              <h3 className="mt-1 text-lg font-bold text-[color:var(--ink)]">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */

function Features() {
  const items = [
    {
      icon: <Receipt className="h-5 w-5" />,
      title: "Bills · overcharge alerts",
      body: "Forward any bill. हम duplicate, wrong GST, ya extra charges turant catch karenge.",
    },
    {
      icon: <Calculator className="h-5 w-5" />,
      title: "Tax savings · regime compare",
      body: "Old vs new regime — actual ₹ figures के साथ, side by side.",
    },
    {
      icon: <FileCheck2 className="h-5 w-5" />,
      title: "GST help",
      body: "Registration, returns, input credit — हर step pe simple Hindi/English mein.",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Deadline reminders",
      body: "Advance tax, GSTR-1, GSTR-3B, ITR — koi due date miss nahi hoga.",
    },
    {
      icon: <Languages className="h-5 w-5" />,
      title: "Speaks your language",
      body: "Hindi · Hinglish · English. Jo भी आप type karein, hum samajh लेंगे.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "You control your data",
      body: "Per-category consent. Sirf wahi share karo जो आप comfortable हो.",
    },
  ];
  return (
    <section
      id="features"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #F2F8EC 0%, #FBF8F1 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Features"
          title="Everything a CA does — without the back-and-forth."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className="grid h-10 w-10 place-items-center rounded-lg text-white"
                style={{ background: "var(--teal)" }}
              >
                {it.icon}
              </div>
              <h3 className="mt-4 font-semibold text-[color:var(--ink)]">{it.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Personas ---------- */

function Personas() {
  const list = [
    { icon: <Store className="h-5 w-5" />, label: "Kirana store", line: "Roz ke bills track karo, GST limit pe alert paao." },
    { icon: <Briefcase className="h-5 w-5" />, label: "Freelancer", line: "44ADA vs regular — jo aapke liye sasta ho, suggest kar denge." },
    { icon: <Stethoscope className="h-5 w-5" />, label: "Doctor", line: "Clinic income + 44ADA + tax planning, sab ek jagah." },
    { icon: <Bike className="h-5 w-5" />, label: "Gig worker", line: "Rapido/Uber/Zomato earnings ko tax-ready banao." },
    { icon: <Camera className="h-5 w-5" />, label: "Creator", line: "Brand deals, AdSense, GST — sab ka hisab simple Hindi mein." },
    { icon: <Truck className="h-5 w-5" />, label: "Trader / Wholesaler", line: "Input credit maximize karo, GSTR sahi time pe file karo." },
  ];
  return (
    <section id="personas" className="bg-[#FBF8F1] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Built for you" title="Made for India's small businesses." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm"
            >
              <div
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                style={{ background: "rgba(245,158,11,0.15)", color: "var(--saffron)" }}
              >
                {p.icon}
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-[color:var(--ink)]">{p.label}</div>
                <div className="text-sm text-slate-600">{p.line}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */

function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "₹0",
      sub: "for getting started",
      features: ["Bills tracking", "Deadline reminders", "1 tax estimate / year", "WhatsApp chat"],
      cta: "Start free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹1,999",
      per: "/ year",
      altPrice: "or ₹249 / month",
      sub: "most popular",
      features: [
        "Full tax engine (old vs new)",
        "Month-end tax bill",
        "GST help (returns + ITC)",
        "WhatsApp + web app",
        "Unlimited bill scans",
      ],
      cta: "Get Pro",
      highlight: true,
    },
    {
      name: "Business",
      price: "₹4,999",
      per: "/ year",
      sub: "growing SMBs",
      features: ["Multi-GSTIN support", "Invoicing", "CA-ready export", "Priority support"],
      cta: "Go Business",
      highlight: false,
    },
  ];
  return (
    <section
      id="pricing"
      className="py-20"
      style={{ background: "linear-gradient(180deg, #FBF8F1 0%, #F2F8EC 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Pricing"
          title="Less than one CA visit."
          sub="Cancel anytime. No hidden fees."
        />
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                t.highlight
                  ? "border-transparent ring-2 ring-[color:var(--teal)] md:-translate-y-2 md:shadow-xl"
                  : "border-emerald-900/10"
              }`}
            >
              {t.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ background: "var(--saffron)" }}
                >
                  Most popular
                </div>
              )}
              <div className="text-sm font-semibold uppercase tracking-wider text-emerald-900/70">
                {t.name}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-[color:var(--ink)]">
                  {t.price}
                </span>
                {t.per && <span className="text-sm text-slate-500">{t.per}</span>}
              </div>
              {t.altPrice && <div className="text-xs text-slate-500">{t.altPrice}</div>}
              <div className="mt-1 text-sm text-slate-600">{t.sub}</div>

              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--teal)" }} />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                {t.highlight ? (
                  <WhatsAppBtn size="lg" className="w-full justify-center">
                    {t.cta} on WhatsApp
                  </WhatsAppBtn>
                ) : (
                  <a
                    href={WA}
                    className="inline-flex w-full items-center justify-center rounded-full border border-emerald-900/15 bg-white px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-emerald-50"
                  >
                    {t.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Security ---------- */

function Security() {
  const items = [
    { icon: <ShieldCheck />, t: "DPDP consent", d: "Per-category data permissions you control." },
    { icon: <Lock />, t: "India data residency", d: "Your data stays on Indian servers." },
    { icon: <FileCheck2 />, t: "Encrypted end-to-end", d: "Bank-grade encryption in transit & at rest." },
  ];
  return (
    <section className="bg-[#FBF8F1] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Security & trust" title="Built for India. Built for trust." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((x, i) => (
            <div
              key={i}
              className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm"
            >
              <div
                className="grid h-10 w-10 place-items-center rounded-lg"
                style={{ background: "rgba(15,118,110,0.12)", color: "var(--teal)" }}
              >
                {x.icon}
              </div>
              <div className="mt-4 font-semibold text-[color:var(--ink)]">{x.t}</div>
              <div className="mt-1 text-sm text-slate-600">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */

function Founder() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(180deg, #F2F8EC 0%, #FBF8F1 100%)" }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle eyebrow="Meet the founder" title="Built by one, for the millions." />
        <div className="mt-10 rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-10">
          <div className="grid items-center gap-8 sm:grid-cols-[160px_1fr]">
            <div
              className="mx-auto grid h-32 w-32 place-items-center rounded-2xl text-4xl font-bold text-white sm:h-40 sm:w-40"
              style={{ background: "linear-gradient(135deg, var(--teal), var(--saffron))" }}
            >
              R
            </div>
            <div>
              <div className="text-xl font-bold text-[color:var(--ink)]">Ritesh</div>
              <div className="text-sm text-slate-600">Founder · TaxEasy</div>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
                I'm building TaxEasy because हर छोटे business को afford-able, honest tax help
                मिलनी चाहिए. एक AI-native CA जो आपकी language बोले, deadlines से पहले yaad
                dilaaye, और कभी गलत number ना दे. That's the promise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Outro: big TaxEasy wordmark + floating query bubbles ---------- */

type Bubble = {
  text: string;
  hi?: boolean;
  top: string;
  left: string;
  rot: number;
  delay: number;
  accent?: "teal" | "saffron" | "wa" | "ink";
};

const BUBBLES: Bubble[] = [
  { text: "GST kab bharna hai?", top: "4%", left: "1%", rot: -6, delay: 0, accent: "wa" },
  { text: "नमस्ते TaxEasy 👋", hi: true, top: "8%", left: "82%", rot: 5, delay: 0.6, accent: "saffron" },
  { text: "₹48,500 का bill — sahi hai?", hi: true, top: "28%", left: "86%", rot: -4, delay: 1.2, accent: "teal" },
  { text: "Advance tax due date?", top: "66%", left: "0%", rot: 6, delay: 0.3, accent: "ink" },
  { text: "Old vs new regime — kaunsa?", top: "72%", left: "84%", rot: -7, delay: 0.9, accent: "wa" },
  { text: "ITR file karna hai", hi: true, top: "92%", left: "6%", rot: 4, delay: 1.5, accent: "saffron" },
  { text: "Duplicate bill मिला 🚨", hi: true, top: "38%", left: "-2%", rot: -3, delay: 1.8, accent: "teal" },
  { text: "GSTR-3B reminder", top: "54%", left: "88%", rot: 5, delay: 2.1, accent: "ink" },
];

function bubbleStyle(a: Bubble["accent"]) {
  switch (a) {
    case "wa":
      return { bg: "rgba(37,211,102,0.16)", border: "rgba(37,211,102,0.55)", text: "#bbf7d0" };
    case "saffron":
      return { bg: "rgba(245,158,11,0.16)", border: "rgba(245,158,11,0.55)", text: "#fde68a" };
    case "teal":
      return { bg: "rgba(20,184,166,0.16)", border: "rgba(20,184,166,0.55)", text: "#a7f3d0" };
    default:
      return { bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.22)", text: "#e5e7eb" };
  }
}

function FloatingBubble({ b }: { b: Bubble }) {
  const s = bubbleStyle(b.accent);
  return (
    <div
      className="float-bubble absolute hidden select-none rounded-2xl px-3 py-2 text-xs font-medium backdrop-blur sm:px-4 sm:py-2.5 sm:text-sm md:block"
      style={
        {
          top: b.top,
          left: b.left,
          background: s.bg,
          borderColor: s.border,
          color: s.text,
          borderWidth: 1,
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
          ["--rot" as any]: `${b.rot}deg`,
          animationDelay: `${b.delay}s`,
        } as React.CSSProperties
      }
    >
      <span className={b.hi ? "font-hi" : ""}>{b.text}</span>
    </div>
  );
}

function Outro() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(37,211,102,0.22), transparent 70%), radial-gradient(40% 40% at 80% 20%, rgba(245,158,11,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-36">
        {/* big stacked wordmark */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 hidden md:block">
          <div
            className="hero-word select-none text-center text-[clamp(140px,20vw,300px)]"
            style={{ color: "rgba(37,211,102,0.07)" }}
          >
            TaxEasy
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 md:block">
          <div
            className="hero-word select-none text-center text-[clamp(140px,20vw,300px)]"
            style={{ color: "var(--whatsapp)" }}
          >
            TaxEasy
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-10 hidden md:block">
          <div
            className="hero-word select-none text-center text-[clamp(140px,20vw,300px)]"
            style={{ color: "rgba(37,211,102,0.07)" }}
          >
            TaxEasy
          </div>
        </div>

        {/* mobile wordmark */}
        <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center md:hidden">
          <div
            className="hero-word select-none text-center text-[clamp(80px,28vw,160px)]"
            style={{ color: "var(--whatsapp)" }}
          >
            TaxEasy
          </div>
        </div>

        {/* floating queries */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {BUBBLES.map((b, i) => (
            <FloatingBubble key={i} b={b} />
          ))}
          <svg className="absolute inset-0 h-full w-full" aria-hidden>
            <path
              d="M 50 100 Q 400 40 760 160"
              stroke="rgba(37,211,102,0.35)"
              strokeDasharray="2 6"
              fill="none"
            />
            <path
              d="M 80 520 Q 460 400 820 560"
              stroke="rgba(245,158,11,0.35)"
              strokeDasharray="2 6"
              fill="none"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 bg-[#FBF8F1]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span
                className="grid h-8 w-8 place-items-center rounded-lg font-bold text-white"
                style={{ background: "linear-gradient(135deg, var(--teal), var(--whatsapp))" }}
              >
                ₹
              </span>
              <span className="text-lg font-bold text-[color:var(--ink)]">TaxEasy</span>
            </div>
            <p className="font-hi mt-3 max-w-sm text-sm text-slate-600">
              हर बिज़नेस का अपना CA. AI-powered tax, GST & bills assistant on WhatsApp.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-[color:var(--ink)]">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[color:var(--ink)]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[color:var(--ink)]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[color:var(--ink)]">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-[color:var(--ink)]">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a href="mailto:support@taxeasy.in" className="hover:text-[color:var(--ink)]">
                  support@taxeasy.in
                </a>
              </li>
              <li>
                <a href="mailto:grievance@taxeasy.in" className="hover:text-[color:var(--ink)]">
                  Grievance Officer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-emerald-900/10 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} TaxEasy. TaxEasy is a calculation tool, not a CA firm.
          Please verify numbers before filing returns.
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Personas />
        <Pricing />
        <Security />
        <Founder />
        <Outro />
      </main>
      <Footer />
    </div>
  );
}
