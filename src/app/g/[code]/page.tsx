// Group-Invite landing page — target of QR codes.
// Flow:
//   1. Coach generates a QR for their group inside the app → encodes
//      https://onwavelength.space/g/abc123
//   2. Someone scans the QR with iPhone Camera
//   3. If app installed → Universal Link opens app → joins group
//   4. If app NOT installed → lands here → sets cookie → App Store redirect
//      → after install, app reads cookie via fetch() and auto-joins

import { use } from "react";

export default function GroupInvitePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = use(params);
  return <ClientLanding code={code} />;
}

function ClientLanding({ code }: { code: string }) {
  return (
    <>
      <ClientScript code={code} />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a10",
          color: "#ededf0",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 420, textAlign: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              margin: "0 auto 20px",
              borderRadius: 16,
              background: "linear-gradient(135deg, #6366f1, #3b82f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
              <path
                d="M6 16c2.5-5 5-5 7.5 0s5 5 7.5 0 5-5 7.5 0"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 590, margin: "0 0 8px", letterSpacing: -0.5 }}>
            Du wurdest eingeladen
          </h1>
          <p style={{ fontSize: 15, color: "#9c9caa", margin: "0 0 24px", lineHeight: 1.5 }}>
            Lade <strong style={{ color: "#ededf0" }}>On Wavelength</strong> — die App fügt
            dich automatisch zur Gruppe hinzu wenn du sie öffnest.
          </p>
          <a
            href="https://apps.apple.com/de/app/on-wavelength/id6739700000"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "linear-gradient(135deg, #6366f1, #3b82f6)",
              color: "white",
              textDecoration: "none",
              borderRadius: 12,
              fontWeight: 510,
              fontSize: 15,
            }}
          >
            App Store öffnen
          </a>
        </div>
      </main>
    </>
  );
}

function ClientScript({ code }: { code: string }) {
  const script = `
    (function() {
      // Save invite code for deferred deep-link after install
      document.cookie = "wl_group=${code}; max-age=" + (60*60*24*7) + "; path=/; SameSite=Lax";
      // No auto-redirect for group invite — user clicks button.
      // (Universal Link would have opened the app already if installed.)
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
