import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  ExternalLink,
  Shield,
  PenTool,
  Smartphone,
  X,
} from "lucide-react";

const BLUE = "#003580";
const BG = "#f5f5f4";
const TEXT = "#111827";
const MUTED = "#6b7280";
const LINE = "#e5e7eb";
const CARD = "#ffffff";

function Logo() {
  return (
    <div className="flex items-center">
      <img
        src="/ihere-logo.svg"
        alt="iHere logo"
        className="h-[34px] w-auto max-w-[150px] object-contain"
        style={{ filter: "drop-shadow(0 8px 24px rgba(0,53,128,0.10))" }}
      />
    </div>
  );
}

function NavLink({ to, children, onNavigate }) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(to)}
      className="hover:opacity-70"
      style={{ color: MUTED }}
    >
      {children}
    </button>
  );
}

function AppButton({ children, variant = "primary", onClick }) {
  const primary = variant === "primary";
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-[18px] px-5 py-3 text-sm font-medium transition active:scale-[0.99]"
      style={{
        background: primary ? BLUE : "#ffffff",
        color: primary ? "#ffffff" : TEXT,
        border: `1px solid ${primary ? BLUE : LINE}`,
        boxShadow: primary
          ? "0 10px 30px rgba(0,53,128,0.16)"
          : "0 1px 0 rgba(17,24,39,0.02)",
      }}
    >
      {children}
    </button>
  );
}

function DownloadButton({ label }) {
  return (
    <a
      href={`mailto:hello@ihere.no?subject=${encodeURIComponent(label)}`}
      className="inline-flex items-center justify-center gap-2 rounded-[18px] px-5 py-3 text-sm font-medium transition active:scale-[0.99]"
      style={{
        background: "#ffffff",
        color: TEXT,
        border: `1px solid ${LINE}`,
        boxShadow: "0 1px 0 rgba(17,24,39,0.02)",
      }}
    >
      {label} <Download className="h-4 w-4" />
    </a>
  );
}

function SectionCard({ icon, title, text, children, imageSrc, imageAlt = "" }) {
  const main = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[#f8fafc]">
        {icon}
      </div>
      <h3
        className="mt-5 text-2xl font-semibold tracking-[-0.04em]"
        style={{ color: TEXT }}
      >
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed" style={{ color: MUTED }}>
        {text}
      </p>
      {children ? <div className="mt-5">{children}</div> : null}
    </>
  );

  return (
    <div
      className={`rounded-[28px] border bg-white p-6 sm:p-7 ${
        imageSrc ? "lg:flex lg:flex-row lg:items-center lg:gap-10" : ""
      }`}
      style={{ borderColor: LINE, background: CARD }}
    >
      <div className={imageSrc ? "min-w-0 flex-1" : undefined}>{main}</div>
      {imageSrc ? (
        <div className="mt-8 flex shrink-0 justify-center lg:mt-0 lg:w-[min(100%,440px)]">
          <div
            className="flex w-full max-w-[440px] items-center justify-center overflow-hidden rounded-[22px] border border-dashed p-4 sm:p-5"
            style={{ borderColor: LINE, background: "#f8fafc" }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-auto max-h-[220px] w-full object-contain sm:max-h-[260px]"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ScreenMini({ title, text }) {
  return (
    <div className="rounded-[22px] border bg-[#fafafa] p-4" style={{ borderColor: LINE }}>
      <div className="mb-3 flex items-center justify-between">
        <div
          className="text-[12px] font-semibold uppercase tracking-[0.16em]"
          style={{ color: BLUE }}
        >
          Screen
        </div>
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: BLUE }} />
      </div>
      <div className="text-lg font-semibold tracking-[-0.03em]" style={{ color: TEXT }}>
        {title}
      </div>
      <div className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
        {text}
      </div>
    </div>
  );
}

function RequestFormModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const subject = encodeURIComponent("iHere Card Request");
  const body = encodeURIComponent(
    `Email: ${email}\nQuantity: ${quantity}\nNotes: ${notes}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 px-4 sm:items-center">
      <div className="absolute inset-0" onClick={onClose} />
      <div
        className="relative w-full max-w-xl rounded-[28px] border bg-white p-6 shadow-2xl sm:p-8"
        style={{ borderColor: LINE }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>
              Limited first batch
            </div>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]" style={{ color: TEXT }}>
              Request iHere Card
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-black/5"
            aria-label="Close"
            style={{ color: MUTED }}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
          Leave your details and we will get back to you about the first batch.
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full rounded-[18px] border px-4 py-3 text-sm outline-none"
            style={{ borderColor: LINE, background: "#fbfbfb", color: TEXT }}
          />
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity needed"
            className="w-full rounded-[18px] border px-4 py-3 text-sm outline-none"
            style={{ borderColor: LINE, background: "#fbfbfb", color: TEXT }}
          />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="How would you use iHere?"
            rows={4}
            className="w-full rounded-[18px] border px-4 py-3 text-sm outline-none"
            style={{
              borderColor: LINE,
              background: "#fbfbfb",
              color: TEXT,
              resize: "vertical",
            }}
          />
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:hello@ihere.no?subject=${subject}&body=${body}`}
              className="inline-flex items-center justify-center gap-2 rounded-[18px] px-5 py-3 text-sm font-medium transition active:scale-[0.99]"
              style={{
                background: BLUE,
                color: "#ffffff",
                border: `1px solid ${BLUE}`,
                boxShadow: "0 10px 30px rgba(0,53,128,0.16)",
              }}
            >
              Submit Request
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-[18px] px-5 py-3 text-sm font-medium transition active:scale-[0.99]"
              style={{ background: "#ffffff", color: TEXT, border: `1px solid ${LINE}` }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage({ onNavigate }) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: BG }}>
      <header
        className="sticky top-0 z-30 border-b border-black/5 backdrop-blur"
        style={{ background: "rgba(245,245,244,0.82)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm sm:flex">
            <a href="#screens" className="hover:opacity-70" style={{ color: MUTED }}>
              Screens
            </a>
            <a href="#privacy" className="hover:opacity-70" style={{ color: MUTED }}>
              Privacy
            </a>
            <a href="#tool" className="hover:opacity-70" style={{ color: MUTED }}>
              Writing Tool
            </a>
            <a href="#card" className="hover:opacity-70" style={{ color: MUTED }}>
              iHere Card
            </a>
            <NavLink to="/privacypolicy" onNavigate={onNavigate}>
              Privacy Policy
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
          <div className="flex flex-col items-center text-center">
            <h1
              className="max-w-[18ch] text-[38px] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-[48px]"
              style={{ color: TEXT }}
            >
              Here, no data.
            </h1>
            <p
              className="mt-4 max-w-xl text-[17px] leading-relaxed sm:text-[18px]"
              style={{ color: MUTED }}
            >
              In a world where everything is recorded, we choose not to record.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <AppButton onClick={() => setOpenForm(true)}>
                Get Card <ExternalLink className="h-4 w-4" aria-hidden />
              </AppButton>
              <DownloadButton label="Download Tool" />
            </div>

            <div className="mt-14 w-full sm:mt-16">
              <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 sm:flex-row sm:gap-4 md:gap-6 lg:gap-8">
                <img
                  src="/step1.png"
                  alt="Onboarding: iHere card nearby"
                  className="h-auto w-full max-w-[min(100%,280px)] object-contain"
                  loading="eager"
                  decoding="async"
                />
                <img
                  src="/step2.png"
                  alt="Onboarding: enter your 6-digit Tag"
                  className="h-auto w-full max-w-[min(100%,280px)] object-contain"
                  loading="eager"
                  decoding="async"
                />
                <img
                  src="/step3.png"
                  alt="Onboarding: same Tag, same people"
                  className="h-auto w-full max-w-[min(100%,280px)] object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="screens" className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>
              Screens
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl" style={{ color: TEXT }}>
              A simple app layer.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <ScreenMini
              title="Bring card close"
              text="The phone acts as a quiet helper for card writing and local interaction."
            />
            <ScreenMini
              title="Write or delete TAG"
              text="Manage card content with a minimal utility flow. No social layer, no feed."
            />
            <ScreenMini
              title="Local feedback"
              text="When a match happens, the phone can provide auxiliary notification without reading personal data."
            />
          </div>
        </section>

        <section id="privacy" className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
          <SectionCard
            icon={<Shield className="h-5 w-5" style={{ color: BLUE }} />}
            title="Privacy"
            text="iHere is designed around absence. No identity, no account, no history, no logs. Presence can be sensed, but not reconstructed."
          >
            <div className="grid gap-3 sm:grid-cols-3">
              {["No identity", "No storage", "No logs"].map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border px-4 py-4 text-sm"
                  style={{ borderColor: LINE, background: "#fafafa", color: TEXT }}
                >
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        <section id="tool" className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
          <SectionCard
            icon={<PenTool className="h-5 w-5" style={{ color: BLUE }} />}
            title="Writing Tool"
            text="A dedicated utility for writing TAGs to the card, deleting TAGs, and assisting with local notification. Fully offline. No reading of user data."
            imageSrc="/phone.png"
            imageAlt="iHere writing tool on two phones"
          >
            <div className="flex flex-wrap gap-3">
              <DownloadButton label="Download Tool" />
            </div>
          </SectionCard>
        </section>

        <section id="card" className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
          <SectionCard
            icon={<Smartphone className="h-5 w-5" style={{ color: BLUE }} />}
            title="iHere Card"
            text="Apply for an iHere card."
            imageSrc="/card.png"
            imageAlt="iHere physical cards"
          >
            <div className="flex flex-wrap gap-3">
              <AppButton onClick={() => setOpenForm(true)}>
                Get iHere Card <ArrowRight className="h-4 w-4" />
              </AppButton>
            </div>
          </SectionCard>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl border-t border-black/5 px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo />
            <div className="mt-4 text-sm" style={{ color: MUTED }}>
              <a href="mailto:hello@ihere.no" className="hover:opacity-80">
                hello@ihere.no
              </a>
            </div>
            <div className="mt-1 text-sm" style={{ color: MUTED }}>
              SisuRace Oy · Helsinki, Finland
            </div>
            <div className="mt-3 text-sm">
              <NavLink to="/privacypolicy" onNavigate={onNavigate}>
                Privacy Policy
              </NavLink>
            </div>
          </div>
          <div className="text-2xl" style={{ color: TEXT }}>
            𝕏
          </div>
        </div>
      </footer>

      <RequestFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </div>
  );
}

function PrivacyPolicyPage({ onNavigate }) {
  return (
    <div className="min-h-screen" style={{ background: BG }}>
      <header
        className="sticky top-0 z-30 border-b border-black/5 backdrop-blur"
        style={{ background: "rgba(245,245,244,0.82)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <Logo />
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="inline-flex items-center gap-2 text-sm hover:opacity-70"
            style={{ color: MUTED }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 sm:px-8 sm:py-14">
        <div
          className="rounded-[28px] border bg-white p-6 sm:p-8"
          style={{ borderColor: LINE, background: CARD }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>
            Privacy Policy
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl" style={{ color: TEXT }}>
            Privacy Policy
          </h1>

          <div className="mt-4 space-y-1 text-sm" style={{ color: MUTED }}>
            <div>Effective Date: March 2026</div>
            <div>Last Updated: March 2026</div>
          </div>

          <div className="mt-8 space-y-8 text-[15px] leading-7" style={{ color: TEXT }}>
            <div>
              <p>Welcome to Here.no (the “App”).</p>
              <p className="mt-3" style={{ color: MUTED }}>
                We are committed to protecting your privacy. The App is designed under a strict
                Privacy by Design principle. It does not collect, store, transmit, or process any
                personal data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-[-0.03em]">1. No Personal Data Collection</h2>
              <p className="mt-3" style={{ color: MUTED }}>The App does not collect or process any of the following:</p>
              <div className="mt-3 space-y-2" style={{ color: MUTED }}>
                <div>No name, email address, or phone number</div>
                <div>No account registration</div>
                <div>No location data</div>
                <div>No device identifiers</div>
                <div>No usage analytics</div>
                <div>No tracking technologies</div>
                <div>No advertising identifiers</div>
                <div>No cloud storage of user data</div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-[-0.03em]">2. How the App Works</h2>
              <p className="mt-3" style={{ color: MUTED }}>The App operates entirely locally on your device.</p>
              <p className="mt-3" style={{ color: MUTED }}>
                Its sole function is to configure and communicate with a compatible TAG Device.
              </p>
              <div className="mt-3 space-y-2" style={{ color: MUTED }}>
                <div>You enter a TAG locally</div>
                <div>The TAG is written to the device</div>
                <div>Devices respond only when the TAG matches</div>
                <div>No identity, user profile, or tracking information is stored</div>
                <div>No information is transmitted to any server</div>
              </div>
              <p className="mt-3" style={{ color: MUTED }}>
                All processing occurs locally between your phone and the device via Bluetooth.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-[-0.03em]">3. Bluetooth Permission</h2>
              <p className="mt-3" style={{ color: MUTED }}>
                The App requires Bluetooth access solely for device discovery and configuration.
              </p>
              <div className="mt-3 space-y-2" style={{ color: MUTED }}>
                <div>No personal data is collected through Bluetooth</div>
                <div>No background tracking is performed</div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-[-0.03em]">4. No Third-Party Tracking</h2>
              <p className="mt-3" style={{ color: MUTED }}>The App:</p>
              <div className="mt-3 space-y-2" style={{ color: MUTED }}>
                <div>Does not include advertising SDKs</div>
                <div>Does not include analytics SDKs</div>
                <div>Does not use tracking technologies</div>
                <div>Does not share data with third parties</div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-[-0.03em]">5. Contact</h2>
              <p className="mt-3" style={{ color: MUTED }}>
                If you have any questions about this Privacy Policy, please contact:
              </p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:hello@ihere.no" style={{ color: BLUE }} className="hover:opacity-80">
                  hello@ihere.no
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function IHereSingleFilePreviewable() {
  const [path, setPath] = useState("/");

  useEffect(() => {
    const initial = window.location.pathname === "/privacypolicy" ? "/privacypolicy" : "/";
    setPath(initial);

    const onPopState = () => {
      setPath(window.location.pathname === "/privacypolicy" ? "/privacypolicy" : "/");
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (to) => {
    if (window.location.pathname !== to) {
      window.history.pushState({}, "", to);
    }
    setPath(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = useMemo(() => {
    return path === "/privacypolicy" ? (
      <PrivacyPolicyPage onNavigate={navigate} />
    ) : (
      <HomePage onNavigate={navigate} />
    );
  }, [path]);

  return page;
}