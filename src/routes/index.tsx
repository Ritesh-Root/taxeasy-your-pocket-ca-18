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
      className={`inline-flex items-center gap-2 rounded-full font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:translate-y-[-1px] hover:shadow-xl ${pad} ${className}`}
      style={{ background: "var(--whatsapp)" }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .14 5.34.14 11.91c0 2.1.55 4.14 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 005.75 1.47h.01c6.57 0 11.93-5.34 11.93-11.91 0-3.18-1.24-6.17-3.49-8.42zM12.08 21.3h-.01a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.75.98 1-3.66-.22-.37a9.34 9.34 0 01-1.43-4.83c0-5.17 4.22-9.38 9.41-9.38 2.51 0 4.87.98 6.64 2.75a9.32 9.32 0 012.75 6.64c0 5.17-4.22 9.38-9.41 9.38zm5.16-7.03c-.28-.14-1.67-.82-1.93-.92-.26-.09-.45-.14-.64.14-.19.28-.74.92-.9 1.11-.17.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.35s-1 .98-1 2.39 1.02 2.77 1.16 2.96c.14.19 2 3.06 4.85 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.67-.68 1.91-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33z"/>
      </svg>
      {children}
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:var(--ink)]/85 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--ink)]/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 text-white">
          <span
            className="grid h-8 w-8 place-items-center rounded-lg font-bold text-white"
            style={{ background: "linear-gradient(135deg, var(--teal), var(--whatsapp))" }}
          >
            ₹
          </span>
          <span className="text-lg font-bold tracking-tight">TaxEasy</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#personas" className="hover:text-white">For you</a>
        </nav>
        <WhatsAppBtn size="md">Start on WhatsApp</WhatsAppBtn>
      </div>
    </header>
  );
}

/* ---------- Hero with floating chat-query bubbles ---------- */

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
  { text: "GST kab bharna hai?", top: "8%", left: "6%", rot: -6, delay: 0, accent: "wa" },
  { text: "नमस्ते TaxEasy 👋", hi: true, top: "4%", left: "62%", rot: 5, delay: 0.6, accent: "saffron" },
  { text: "₹48,500 का bill — sahi hai?", hi: true, top: "22%", left: "78%", rot: -4, delay: 1.2, accent: "teal" },
  { text: "Advance tax due date?", top: "62%", left: "4%", rot: 6, delay: 0.3, accent: "ink" },
  { text: "Old vs new regime — kaunsa?", top: "70%", left: "70%", rot: -7, delay: 0.9, accent: "wa" },
  { text: "ITR file karna hai", hi: true, top: "82%", left: "30%", rot: 4, delay: 1.5, accent: "saffron" },
  { text: "Duplicate bill मिला 🚨", hi: true, top: "32%", left: "1%", rot: -3, delay: 1.8, accent: "teal" },
  { text: "GSTR-3B reminder", top: "50%", left: "82%", rot: 5, delay: 2.1, accent: "ink" },
];

function bubbleStyle(a: Bubble["accent"]) {
  switch (a) {
    case "wa":
      return { bg: "rgba(37,211,102,0.14)", border: "rgba(37,211,102,0.45)", text: "#a7f3d0" };
    case "saffron":
      return { bg: "rgba(245,158,11,0.14)", border: "rgba(245,158,11,0.45)", text: "#fcd34d" };
    case "teal":
      return { bg: "rgba(20,184,166,0.14)", border: "rgba(20,184,166,0.45)", text: "#99f6e4" };
    default:
      return { bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.18)", text: "#e5e7eb" };
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

function HeroChatPhone() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      <div className="rounded-[2.5rem] border border-white/10 bg-[#0b0f17] p-2 shadow-2xl shadow-emerald-900/30">
        <div className="overflow-hidden rounded-[2rem] bg-[#0a141a]">
          {/* WhatsApp header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#075E54" }}>
            <div
              className="grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg,var(--teal),var(--whatsapp))" }}
            >
              ₹
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">TaxEasy</div>
              <div className="text-[11px] text-emerald-100/80">online · AI assistant</div>
            </div>
          </div>

          {/* chat */}
          <div
            className="space-y-2 px-3 py-4"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              backgroundColor: "#0d1418",
              minHeight: 380,
            }}
          >
            <ChatBubble side="me" text="नमस्ते" hi />
            <ChatBubble
              side="bot"
              hi
              text="👋 TaxEasy में आपका स्वागत है! मैं आपका AI tax assistant हूँ — Hindi, Hinglish या English, जैसा आप चाहें।"
            />
            <ChatBubble side="me" text="Mera turnover ₹35L hai. GST lena padega?" />
            <ChatBubble
              side="bot"
              text={
                <>
                  Aap goods bechte ho — GST threshold <b>₹40,00,000</b> hai. Abhi optional hai, par
                  ₹40L cross karte hi <b>registration zaruri</b> ho jayega. Main aapko 2L pehle
                  alert kar dunga. ✅
                </>
              }
            />
            <ChatBubble side="me" text="Aur advance tax?" />
            <ChatBubble
              side="bot"
              text={
                <>
                  Estimated FY25-26 tax: <b>₹62,400</b>. Next instalment:{" "}
                  <b>15 Sept · ₹28,080</b>. Reminder set 🔔
                </>
              }
            />
          </div>
        </div>
      </div>

      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[3rem] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(37,211,102,0.35), transparent 70%)",
        }}
      />
    </div>
  );
}

function ChatBubble({
  side,
  text,
  hi,
}: {
  side: "me" | "bot";
  text: React.ReactNode;
  hi?: boolean;
}) {
  const me = side === "me";
  return (
    <div className={`flex ${me ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug shadow ${
          me ? "rounded-br-sm text-white" : "rounded-bl-sm text-slate-100"
        } ${hi ? "font-hi" : ""}`}
        style={{
          background: me ? "#056162" : "#1f2c33",
        }}
      >
        {text}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--ink)" }}>
      {/* dotted grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgba(37,211,102,0.18), transparent 70%), radial-gradient(40% 40% at 80% 80%, rgba(245,158,11,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pt-14 md:pb-24">
        {/* Big background word à la Cloudflare hero */}
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-2 hidden md:block">
            <div
              className="hero-word select-none text-center text-[clamp(120px,18vw,260px)]"
              style={{ color: "rgba(37,211,102,0.07)" }}
            >
              TaxEasy
            </div>
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[28%] hidden md:block">
            <div
              className="hero-word select-none text-center text-[clamp(120px,18vw,260px)]"
              style={{ color: "var(--whatsapp)" }}
            >
              TaxEasy
            </div>
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[56%] hidden md:block">
            <div
              className="hero-word select-none text-center text-[clamp(120px,18vw,260px)]"
              style={{ color: "rgba(37,211,102,0.07)" }}
            >
              TaxEasy
            </div>
          </div>

          {/* floating chat bubbles */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {BUBBLES.map((b, i) => (
              <FloatingBubble key={i} b={b} />
            ))}
            {/* dotted path accents */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden>
              <path
                d="M 50 80 Q 400 20 760 140"
                stroke="rgba(37,211,102,0.35)"
                strokeDasharray="2 6"
                fill="none"
              />
              <path
                d="M 80 480 Q 460 360 820 520"
                stroke="rgba(245,158,11,0.35)"
                strokeDasharray="2 6"
                fill="none"
              />
            </svg>
          </div>

          {/* Foreground content */}
          <div className="relative mx-auto grid items-center gap-10 md:grid-cols-2">
            <div className="text-center md:pt-28 md:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                AI explains · the engine calculates · you verify
              </div>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Your CA, now on{" "}
                <span style={{ color: "var(--whatsapp)" }}>WhatsApp.</span>
              </h1>
              <p
                className="font-hi mt-3 text-lg text-white/85 sm:text-xl"
                style={{ color: "rgba(245,158,11,0.95)" }}
              >
                हर बिज़नेस का अपना CA — आपकी जेब में।
              </p>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 md:mx-0">
                Tax, GST और bills की हर मुश्किल — एक message दूर। Hindi, Hinglish या English,
                जिस भी language में आप comfortable हो।
              </p>

              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <WhatsAppBtn size="lg">Start on WhatsApp · ₹0</WhatsAppBtn>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  See how it works <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-white/60 md:justify-start">
                <Chip>FY 2025–26 compliant</Chip>
                <Chip>DPDP-ready</Chip>
                <Chip>Data stays in India 🇮🇳</Chip>
              </div>
            </div>

            <div className="md:pt-24">
              <HeroChatPhone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1">
      {children}
    </span>
  );
}

/* ---------- Trust strip ---------- */

function TrustStrip() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4" style={{ color: "var(--teal)" }} />
          <span>
            <b className="text-foreground">AI explains</b> · the{" "}
            <b className="text-foreground">engine calculates</b> · you verify
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <LightChip>FY 2025–26 compliant</LightChip>
          <LightChip>DPDP-ready</LightChip>
          <LightChip>Data stays in India</LightChip>
          <LightChip>End-to-end encrypted</LightChip>
        </div>
      </div>
    </section>
  );
}

function LightChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-secondary-foreground">
      {children}
    </span>
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
    <section id="how" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="How it works" title="Three steps. No accountant-speak." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-xl text-white"
                style={{ background: "var(--teal)" }}
              >
                {s.icon}
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Step {i + 1}
              </div>
              <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div
          className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: "rgba(15,118,110,0.1)", color: "var(--teal-deep)" }}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-base text-muted-foreground">{sub}</p>}
    </div>
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
    <section id="features" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Features"
          title="Everything a CA does — without the back-and-forth."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className="grid h-10 w-10 place-items-center rounded-lg text-white"
                style={{ background: "var(--teal)" }}
              >
                {it.icon}
              </div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.body}</p>
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
    <section id="personas" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          eyebrow="Built for you"
          title="Made for India's small businesses."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <div
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                style={{ background: "rgba(245,158,11,0.15)", color: "var(--saffron)" }}
              >
                {p.icon}
              </div>
              <div className="min-w-0">
                <div className="font-semibold">{p.label}</div>
                <div className="text-sm text-muted-foreground">{p.line}</div>
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
      features: [
        "Bills tracking",
        "Deadline reminders",
        "1 tax estimate / year",
        "WhatsApp chat",
      ],
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
      features: [
        "Multi-GSTIN support",
        "Invoicing",
        "CA-ready export",
        "Priority support",
      ],
      cta: "Go Business",
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="bg-secondary/50 py-20">
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
              className={`relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm ${
                t.highlight
                  ? "border-transparent ring-2 ring-[color:var(--teal)] md:-translate-y-2 md:shadow-xl"
                  : "border-border"
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
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {t.name}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight">{t.price}</span>
                {t.per && <span className="text-sm text-muted-foreground">{t.per}</span>}
              </div>
              {t.altPrice && (
                <div className="text-xs text-muted-foreground">{t.altPrice}</div>
              )}
              <div className="mt-1 text-sm text-muted-foreground">{t.sub}</div>

              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: "var(--teal)" }}
                    />
                    <span>{f}</span>
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
                    className="inline-flex w-full items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold hover:bg-secondary"
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
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Security & trust" title="Built for India. Built for trust." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((x, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div
                className="grid h-10 w-10 place-items-center rounded-lg"
                style={{ background: "rgba(15,118,110,0.12)", color: "var(--teal)" }}
              >
                {x.icon}
              </div>
              <div className="mt-4 font-semibold">{x.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-border bg-secondary/40 p-5 text-center text-sm text-muted-foreground">
          <b className="text-foreground">Honest disclaimer:</b> TaxEasy is a calculation tool,
          not a CA firm. Please verify numbers before filing returns.
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */

function Founder() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle eyebrow="Meet the founder" title="Built by one, for the millions." />
        <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
          <div className="grid items-center gap-8 sm:grid-cols-[160px_1fr]">
            <div
              className="mx-auto grid h-32 w-32 place-items-center rounded-2xl text-4xl font-bold text-white sm:h-40 sm:w-40"
              style={{
                background:
                  "linear-gradient(135deg, var(--teal), var(--saffron))",
              }}
            >
              R
            </div>
            <div>
              <div className="text-xl font-bold">Ritesh</div>
              <div className="text-sm text-muted-foreground">Founder · TaxEasy</div>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
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

/* ---------- Final CTA + Footer ---------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: "var(--ink)" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(37,211,102,0.25), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-balance text-3xl font-extrabold text-white sm:text-5xl">
          Start free on WhatsApp <span style={{ color: "var(--whatsapp)" }}>today</span>.
        </h2>
        <p className="font-hi mt-3 text-lg text-amber-300/90">
          आज ही शुरू करें — ₹0 में।
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppBtn size="lg">Start on WhatsApp · ₹0</WhatsAppBtn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
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
              <span className="text-lg font-bold">TaxEasy</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              हर बिज़नेस का अपना CA. AI-powered tax, GST & bills assistant on WhatsApp.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:support@taxeasy.in" className="hover:text-foreground">support@taxeasy.in</a></li>
              <li>
                <a href="mailto:grievance@taxeasy.in" className="hover:text-foreground">
                  Grievance Officer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} TaxEasy. TaxEasy is a calculation tool, not a CA firm.
          Verify before filing.
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
        <TrustStrip />
        <HowItWorks />
        <Features />
        <Personas />
        <Pricing />
        <Security />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
