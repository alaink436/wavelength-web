// Group-Invite landing — QR-Code target.
// Theme: matches On Wavelength native app (constants/colors.ts dark theme)

import { use } from "react";

const T = {
  bg: "#06080E",
  surface: "#15171E",
  surfaceElevated: "#23252C",
  text: "#F2F4F8",
  textSecondary: "#9B9DA6",
  textTertiary: "#5E6068",
  accent: "#60A5FA",
  accentDark: "#3B82F6",
  border: "#1F2128",
};

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
          background: T.bg,
          color: T.text,
          fontFamily: "var(--font-dm-sans), system-ui, -apple-system, sans-serif",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: 440,
            textAlign: "center",
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: 24,
            padding: "40px 28px",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              margin: "0 auto 24px",
              borderRadius: 20,
              background: `linear-gradient(135deg, ${T.accentDark}, ${T.accent})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 8px 32px ${T.accentDark}40`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
              <path
                d="M6 16c2.5-5 5-5 7.5 0s5 5 7.5 0 5-5 7.5 0"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-bricolage), var(--font-dm-sans), system-ui, sans-serif",
              fontSize: 28,
              fontWeight: 700,
              margin: "0 0 12px",
              letterSpacing: -0.8,
              color: T.text,
            }}
          >
            Du wurdest eingeladen
          </h1>
          <p
            style={{
              fontSize: 15,
              color: T.textSecondary,
              margin: "0 0 28px",
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            Lade <strong style={{ color: T.text, fontWeight: 600 }}>On Wavelength</strong> — die
            App fügt dich automatisch zur Gruppe hinzu, sobald du sie öffnest.
          </p>

          <a
            href="https://apps.apple.com/de/app/on-wavelength/id6739700000"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: `linear-gradient(135deg, ${T.accentDark}, ${T.accent})`,
              color: "white",
              textDecoration: "none",
              borderRadius: 14,
              fontWeight: 600,
              fontSize: 15,
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              boxShadow: `0 8px 24px ${T.accentDark}50`,
            }}
          >
            App Store öffnen
          </a>

          <div
            style={{
              marginTop: 28,
              padding: "12px 16px",
              background: T.surfaceElevated,
              border: `1px solid ${T.border}`,
              borderRadius: 12,
              fontSize: 12,
              color: T.textTertiary,
              fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
            }}
          >
            Code: <span style={{ color: T.accent, fontWeight: 600 }}>{code}</span>
          </div>

          <p
            style={{
              fontSize: 11,
              color: T.textTertiary,
              margin: "20px 0 0",
              fontWeight: 500,
              letterSpacing: 0.3,
              textTransform: "uppercase",
            }}
          >
            Plan smarter, together.
          </p>
        </div>
      </main>
    </>
  );
}

function ClientScript({ code }: { code: string }) {
  const script = `
    (function() {
      document.cookie = "wl_group=${code}; max-age=" + (60*60*24*7) + "; path=/; SameSite=Lax";
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
