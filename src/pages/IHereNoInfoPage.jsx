export default function IHereNoPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,170,60,0.14),_transparent_20%),linear-gradient(115deg,_#02060b_0%,_#03101f_38%,_#03070d_68%,_#0a121d_100%)] text-white">
      <div className="mx-auto max-w-3xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
          <div className="bg-[radial-gradient(circle_at_85%_30%,_rgba(255,170,60,0.26),_transparent_16%),linear-gradient(120deg,_#02050a_5%,_#04101c_38%,_#010204_100%)] px-6 py-8 sm:px-8 sm:py-10">
            <div className="text-sm font-medium uppercase tracking-[0.28em] text-amber-400/80">iHere.no</div>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Privacy Policy</h1>
            <div className="mt-5 space-y-1 text-base text-white/70 sm:text-lg">
              <p>Effective Date: March 2026</p>
              <p>Last Updated: March 2026</p>
            </div>
          </div>
        </div>

        <div className="space-y-8 text-white/85">
          <section className="rounded-2xl border border-white/8 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-7">
            <p className="text-lg leading-8 sm:text-xl">
              Welcome to Here.no (the “App”).
            </p>
            <p className="mt-4 text-lg leading-8 sm:text-xl">
              We are committed to protecting your privacy. The App is designed under a strict Privacy by Design principle. It does not collect, store, transmit, or process any personal data.
            </p>
          </section>

          <section className="rounded-2xl border border-white/8 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-7">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">1. No Personal Data Collection</h2>
            <p className="mt-4 text-lg leading-8 text-white/78">The App does not collect or process any of the following:</p>
            <ul className="mt-4 space-y-3 pl-6 text-lg leading-8 text-white/82 list-disc">
              <li>No name, email address, or phone number</li>
              <li>No account registration</li>
              <li>No location data</li>
              <li>No device identifiers (IMEI, IDFA, Android ID, etc.)</li>
              <li>No usage analytics</li>
              <li>No tracking technologies</li>
              <li>No advertising identifiers</li>
              <li>No cloud storage of user data</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/8 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-7">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">2. How the App Works</h2>
            <div className="mt-4 space-y-4 text-lg leading-8 text-white/82">
              <p>The App operates entirely locally on your device.</p>
              <p>Its sole function is to configure and communicate with a compatible TAG Device.</p>
              <ul className="space-y-3 pl-6 list-disc">
                <li>You enter a TAG (1–12 characters) locally</li>
                <li>The TAG is written to the device</li>
                <li>Devices respond only when the TAG matches</li>
                <li>No identity, user profile, or tracking information is stored</li>
                <li>No information is transmitted to any server</li>
              </ul>
              <p>All processing occurs locally between your phone and the device via Bluetooth.</p>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-7">
              <h2 className="text-2xl font-extrabold tracking-tight">3. Bluetooth Permission</h2>
              <div className="mt-4 space-y-4 text-lg leading-8 text-white/82">
                <p>The App requires Bluetooth access solely for device discovery and configuration.</p>
                <ul className="space-y-3 pl-6 list-disc">
                  <li>No personal data is collected through Bluetooth</li>
                  <li>No background tracking is performed</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-7">
              <h2 className="text-2xl font-extrabold tracking-tight">4. Camera Permission (If Applicable)</h2>
              <div className="mt-4 space-y-4 text-lg leading-8 text-white/82">
                <p>If the App includes QR code scanning:</p>
                <ul className="space-y-3 pl-6 list-disc">
                  <li>Camera access is used only for scanning QR codes</li>
                  <li>No images or video are recorded, stored, or uploaded</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/8 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-7">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">5. No Third-Party Tracking</h2>
            <div className="mt-4 text-lg leading-8 text-white/82">
              <p>The App:</p>
              <ul className="mt-3 space-y-3 pl-6 list-disc">
                <li>Does not include advertising SDKs</li>
                <li>Does not include analytics SDKs</li>
                <li>Does not use tracking technologies</li>
                <li>Does not share data with third parties</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-white/8 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-7">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">6. Data Storage and Transfers</h2>
            <div className="mt-4 text-lg leading-8 text-white/82">
              <p>Because the App does not collect personal data:</p>
              <ul className="mt-3 space-y-3 pl-6 list-disc">
                <li>No data is stored on remote servers</li>
                <li>No international data transfers occur</li>
                <li>No cloud backup exists</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-white/8 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-7">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">7. Children’s Privacy</h2>
            <div className="mt-4 space-y-4 text-lg leading-8 text-white/82">
              <p>The App does not collect personal data from anyone, including children under 13 (or under 16 in certain jurisdictions).</p>
              <p>Because no personal data is collected, the App poses no privacy risk to minors.</p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/8 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-7">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">8. Changes to This Policy</h2>
            <p className="mt-4 text-lg leading-8 text-white/82">
              If future versions of the App introduce features involving data processing, this Privacy Policy will be updated accordingly and users will be notified.
            </p>
          </section>

          <section className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 shadow-xl backdrop-blur-sm sm:p-7">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">9. Contact</h2>
            <p className="mt-4 text-lg leading-8 text-white/82">If you have any questions about this Privacy Policy, please contact:</p>
            <div className="mt-5 space-y-2 text-lg leading-8">
              <p><span className="text-white/60">Company Name:</span> SisuRace Oy</p>
              <p>
                <span className="text-white/60">Email:</span>{" "}
                <a className="text-sky-400 underline underline-offset-4" href="mailto:Hello@ihere.no">
                  Hello@ihere.no
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
