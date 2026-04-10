import {
  ArrowLeft,
  Building2,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  UsersRound,
  X,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

const BG = "#efeff1";
const TEXT = "#3a3a3a";
const MUTED = "#6b7280";
const LINE = "#e5e7eb";
const CARD = "#ffffff";

const IOS_URL = "https://apps.apple.com/app/6760659545";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.hereno.mobile";

function Logo() {
  return (
    <img src="/ihere-logo.svg" alt="iHere logo" className="h-[46px] w-auto object-contain sm:h-[66px]" />
  );
}

function RequestFormModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const subject = encodeURIComponent("iHere Card Request");
  const body = encodeURIComponent(`Email: ${email}\nQuantity: ${quantity}\nNotes: ${notes}`);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 px-4 sm:items-center">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-xl rounded-[24px] border bg-white p-6 shadow-2xl sm:p-8" style={{ borderColor: LINE }}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-[-0.03em]" style={{ color: TEXT }}>
            Request iHere Card
          </h3>
          <button type="button" onClick={onClose} className="rounded-full p-2 hover:bg-black/5" aria-label="Close" style={{ color: MUTED }}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-full rounded-[14px] border px-4 py-3 text-sm outline-none" style={{ borderColor: LINE }} />
          <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity needed" className="w-full rounded-[14px] border px-4 py-3 text-sm outline-none" style={{ borderColor: LINE }} />
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="How would you use iHere?" rows={4} className="w-full rounded-[14px] border px-4 py-3 text-sm outline-none" style={{ borderColor: LINE, resize: "vertical" }} />
          <div className="flex flex-wrap gap-2">
            <a href={`mailto:hello@ihere.no?subject=${subject}&body=${body}`} className="rounded-[12px] bg-black px-4 py-2.5 text-sm font-medium text-white">
              Submit Request
            </a>
            <button type="button" onClick={onClose} className="rounded-[12px] border px-4 py-2.5 text-sm" style={{ borderColor: LINE, color: TEXT }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Matches reference: iOS filled light blue, Android outline blue. */
function DownloadStoreButtons({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <a
        href={IOS_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-w-[80px] items-center justify-center rounded-[4px] px-3 py-1.5 text-[12px] font-medium text-white transition hover:opacity-90 sm:min-w-[88px] sm:px-4 sm:py-2 sm:text-[13px]"
        style={{ background: "#8fa8c9" }}
      >
        iOS
      </a>
      <a
        href={ANDROID_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-w-[80px] items-center justify-center rounded-[4px] border-2 bg-white px-3 py-1.5 text-[12px] font-medium transition hover:bg-gray-50 sm:min-w-[88px] sm:px-4 sm:py-2 sm:text-[13px]"
        style={{ borderColor: "#1d4f9a", color: "#1d4f9a" }}
      >
        Android
      </a>
    </div>
  );
}

function CTAGroup({ onGetCard }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5">
      <button type="button" onClick={onGetCard} className="inline-flex items-center gap-1 rounded-[4px] px-3 py-1.5 text-[12px] font-medium text-white sm:px-3.5" style={{ background: "#1d4f9a" }}>
        Get iHere Card
        <ExternalLink className="h-3.5 w-3.5" />
      </button>
      <a
        href="#download-writing-tool"
        className="inline-flex items-center rounded-[4px] border px-3 py-1.5 text-[12px] font-medium"
        style={{ borderColor: "#9ca3af", color: "#374151", background: "#fff" }}
      >
        Download Writing Tool
      </a>
    </div>
  );
}

function Panel({ children, className = "", id }) {
  return (
    <section
      id={id}
      className={`mx-auto mt-6 w-full max-w-[980px] rounded-[8px] border border-black/5 bg-white p-5 sm:mt-8 sm:p-9 shadow-[0_1px_2px_rgba(0,0,0,0.05)] ${className}`}
    >
      <div className="mx-auto w-full max-w-[760px]">{children}</div>
    </section>
  );
}

function HomePage({ onNavigate }) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: BG }}>
      <main className="mx-auto w-full max-w-[1120px] px-3 py-6 sm:px-6 sm:py-10">
        <Panel className="mt-2">
          <Logo />
          <h1 className="mt-2 text-[34px] font-semibold leading-none tracking-[-0.04em] sm:text-[44px]" style={{ color: "#6b7280" }}>
            no data
          </h1>
          <CTAGroup onGetCard={() => setOpenForm(true)} />
        </Panel>

        <Panel>
          <p className="text-left text-[34px] font-semibold leading-none tracking-[-0.03em] sm:text-[44px]" style={{ color: TEXT }}>
            Today,
          </p>
          <p className="mt-4 text-left text-[15px] leading-relaxed sm:mt-5 sm:text-[17px]" style={{ color: TEXT }}>
            Connection means data. Accounts. Identity. Tracking.
          </p>
        </Panel>

        <Panel>
          <p className="text-left text-[36px] font-semibold leading-none tracking-[-0.04em] sm:text-[48px]" style={{ color: TEXT }}>
            iHere. no
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[17px] font-semibold tracking-[-0.03em] sm:mt-8 sm:gap-8 sm:text-[20px]" style={{ color: TEXT }}>
            <span>No identity</span>
            <span>No storage</span>
            <span>No history</span>
          </div>
        </Panel>

        <Panel className="text-left">
          <h2 className="text-[34px] font-semibold leading-none tracking-[-0.04em] sm:text-[46px]" style={{ color: TEXT }}>
            iHere Card
          </h2>
          <div className="mt-5 grid gap-2 sm:mt-6 sm:grid-cols-2">
            <div className="rounded-[4px] bg-[#e8ebfa] px-3 py-2 text-[16px] font-semibold sm:text-[20px]">No screen</div>
            <div className="rounded-[4px] bg-[#e8ebfa] px-3 py-2 text-[16px] font-semibold sm:text-[20px]">No account</div>
            <div className="rounded-[4px] bg-[#e8ebfa] px-3 py-2 text-[16px] font-semibold sm:col-span-2 sm:text-[20px]">No interface</div>
          </div>
          <p className="mt-5 text-[18px] font-semibold tracking-[-0.03em] sm:mt-6 sm:text-[22px]" style={{ color: TEXT }}>
            Fully offline
          </p>
        </Panel>

        <Panel className="text-left">
          <h2 className="text-[32px] font-semibold leading-none tracking-[-0.04em] sm:text-[42px]" style={{ color: TEXT }}>
            How it work
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed sm:mt-5 sm:text-[17px]" style={{ color: TEXT }}>
            That&apos;s it. A real-world interaction.
          </p>
          <div className="mt-5 grid gap-2 sm:mt-7 sm:grid-cols-2">
            <div className="rounded-[4px] bg-[#eef1fb] px-3 py-2 text-[15px] font-semibold sm:text-[18px]">Write a TAG</div>
            <div className="rounded-[4px] bg-[#eef1fb] px-3 py-2 text-[15px] font-semibold sm:text-[18px]">Carry it with you</div>
            <div className="rounded-[4px] bg-[#eef1fb] px-3 py-2 text-[15px] font-semibold sm:text-[18px]">Same TAG</div>
            <div className="rounded-[4px] bg-[#eef1fb] px-3 py-2 text-[15px] font-semibold sm:text-[18px]">Get close</div>
            <div className="rounded-[4px] bg-[#eef1fb] px-3 py-2 text-[15px] font-semibold sm:col-span-2 sm:text-[18px]">It lights up</div>
          </div>
        </Panel>

        <Panel className="text-left">
          <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.04em] sm:text-[36px]" style={{ color: TEXT }}>
            Built on secure seed architecture
          </h2>
          <div className="mt-5 grid gap-2 sm:mt-6 sm:grid-cols-3">
            <div className="rounded-[4px] bg-[#eef1fb] px-3 py-2 text-[15px] font-semibold sm:text-[17px]">No device ID</div>
            <div className="rounded-[4px] bg-[#eef1fb] px-3 py-2 text-[15px] font-semibold sm:text-[17px]">No user ID</div>
            <div className="rounded-[4px] bg-[#eef1fb] px-3 py-2 text-[15px] font-semibold sm:text-[17px]">No logs</div>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed sm:mt-6 sm:text-[17px]" style={{ color: TEXT }}>
            Presence can be sensed, but never reconstructed.
          </p>
        </Panel>

        <Panel className="text-left">
          <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.04em] sm:text-[36px]" style={{ color: TEXT }}>
            Designed for the real world
          </h2>
          <div className="mt-5 grid gap-x-8 gap-y-4 sm:mt-6 sm:gap-x-12 sm:gap-y-5 sm:grid-cols-2">
            <div className="flex items-center gap-2.5 text-[18px] font-semibold tracking-[-0.02em] sm:gap-3 sm:text-[22px]" style={{ color: TEXT }}>
              <Building2 className="h-5 w-5 text-[#46628f] sm:h-6 sm:w-6" />
              <span>Cities</span>
            </div>
            <div className="flex items-center gap-2.5 text-[18px] font-semibold tracking-[-0.02em] sm:gap-3 sm:text-[22px]" style={{ color: TEXT }}>
              <GraduationCap className="h-5 w-5 text-[#46628f] sm:h-6 sm:w-6" />
              <span>Campuses</span>
            </div>
            <div className="flex items-center gap-2.5 text-[18px] font-semibold tracking-[-0.02em] sm:gap-3 sm:text-[22px]" style={{ color: TEXT }}>
              <CalendarDays className="h-5 w-5 text-[#46628f] sm:h-6 sm:w-6" />
              <span>Events</span>
            </div>
            <div className="flex items-center gap-2.5 text-[18px] font-semibold tracking-[-0.02em] sm:gap-3 sm:text-[22px]" style={{ color: TEXT }}>
              <UsersRound className="h-5 w-5 text-[#46628f] sm:h-6 sm:w-6" />
              <span>Public spaces</span>
            </div>
          </div>
          <p className="mt-4 text-[15px] sm:text-[17px]" style={{ color: TEXT }}>
            Where people meet.
          </p>
        </Panel>

        <Panel className="text-left">
          <h2 className="text-[20px] font-semibold tracking-[-0.02em] sm:text-[22px]" style={{ color: TEXT }}>
            Get iHere Card
          </h2>
          <div className="mt-5 flex flex-col gap-5 sm:mt-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="shrink-0 sm:w-[min(100%,280px)]">
              <img src="/card.png" alt="" className="h-auto w-full max-h-[140px] rounded-[4px] object-contain" />
            </div>
            <button
              type="button"
              onClick={() => setOpenForm(true)}
              className="w-fit rounded-[4px] border-2 px-4 py-2 text-[12px] font-medium sm:self-center sm:text-[13px]"
              style={{ borderColor: "#1d4f9a", color: "#1d4f9a", background: "#fff" }}
            >
              Get iHere Card
            </button>
          </div>
        </Panel>

        <Panel id="download-writing-tool" className="scroll-mt-8 text-left">
          <h2 className="text-[20px] font-semibold tracking-[-0.02em] sm:text-[22px]" style={{ color: TEXT }}>
            Download Writing Tool
          </h2>
          <div className="mt-5">
            <DownloadStoreButtons />
          </div>
        </Panel>

        <Panel className="text-left">
          <p className="text-[26px] font-medium leading-tight tracking-[-0.04em] sm:text-[34px]" style={{ color: TEXT }}>
            In a world where everything is recorded
          </p>
          <p className="mt-1.5 text-[26px] font-medium leading-tight tracking-[-0.04em] sm:mt-2 sm:text-[34px]" style={{ color: TEXT }}>
            we choose not to record
          </p>
        </Panel>

        <Panel className="text-left">
          <Logo />
          <div className="mt-4 space-y-1 text-sm" style={{ color: MUTED }}>
            <a href="mailto:hello@ihere.no" className="hover:opacity-80">
              hello@ihere.no
            </a>
            <div>Helsinki, Finland</div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("/privacypolicy")}
            className="mt-4 text-sm underline underline-offset-4 hover:opacity-80"
            style={{ color: TEXT }}
          >
            Privacy Policy
          </button>
        </Panel>
      </main>

      <RequestFormModal open={openForm} onClose={() => setOpenForm(false)} />
    </div>
  );
}

function PrivacyPolicyPage({ onNavigate }) {
  return (
    <div className="min-h-screen" style={{ background: BG }}>
      <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-6">
        <Logo />
        <button type="button" onClick={() => onNavigate("/")} className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm hover:bg-gray-50" style={{ borderColor: LINE, color: TEXT }}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-14">
        <div className="rounded-[20px] border p-6 sm:p-8" style={{ borderColor: LINE, background: CARD }}>
          <h1 className="text-4xl font-semibold tracking-[-0.05em]" style={{ color: TEXT }}>
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
                We are committed to protecting your privacy. The App is designed under a strict Privacy by Design principle. It does not collect, store, transmit, or process any personal data.
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
                <a href="mailto:hello@ihere.no" className="hover:opacity-80" style={{ color: TEXT }}>
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