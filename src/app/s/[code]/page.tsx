// Routine invite landing /s/<code>.
//
// This page is what someone WITHOUT the app sees. With the app installed, iOS
// intercepts the URL through the AASA entry for /s/* and never loads this — so
// every visitor here is, by definition, a person who needs the App Store and
// their code kept somewhere they can read it.
//
// Deliberately not the /i/ landing's palette: that one is the old dark identity
// with the orange accent and a comment claiming it mirrors the app's theme,
// which stopped being true when the app moved to design v3 (white ground, #111
// ink, emphasis by weight rather than hue). This page follows the app.
//
// No clipboard token and no tracking: an invite is a private handoff between two
// people, not an acquisition channel, and the code is already in the URL.

import type { Metadata } from "next";
import { use } from "react";

const IOS_URL = "https://apps.apple.com/de/app/id6762440839";

/** The alphabet invite codes are minted from — mirrors newCode() in the app. */
const CODE_RE = /^[0-9A-HJ-NP-TV-Z]{8}$/;

export const metadata: Metadata = {
  title: "Eine Routine wurde mit dir geteilt — Basalt",
  description: "Mit Basalt kannst du zusehen, wie jemand seine Routine durchzieht.",
};

export default function InvitePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code: raw } = use(params);
  const code = String(raw ?? "")
    .toUpperCase()
    .replace(/[^0-9A-Z]/g, "")
    .slice(0, 8);
  const looksReal = CODE_RE.test(code);

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        padding: "48px 24px",
        background: "#FFFFFF",
        color: "#111111",
        fontFamily:
          "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 420, display: "grid", gap: 14 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, fontWeight: 700, margin: 0 }}>
          jemand zieht etwas durch.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.5, color: "#6B6B70", margin: 0 }}>
          {looksReal
            ? "Du wurdest eingeladen, bei einer Routine zuzusehen. Lesend — du kannst nichts abhaken und nichts ändern."
            : "Dieser Einladungscode sieht nicht vollständig aus. Frag nach dem Link oder gib den Code in der App von Hand ein."}
        </p>
      </div>

      {looksReal ? (
        <div style={{ display: "grid", gap: 8 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#8A8A90",
            }}
          >
            dein code
          </span>
          <code
            style={{
              fontSize: 30,
              letterSpacing: "0.22em",
              fontWeight: 600,
              padding: "14px 22px",
              borderRadius: 16,
              background: "#F2F2F3",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            {code}
          </code>
        </div>
      ) : null}

      <a
        href={IOS_URL}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 56,
          padding: "0 32px",
          borderRadius: 999,
          background: "#111111",
          color: "#FFFFFF",
          fontSize: 17,
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Basalt laden
      </a>

      <p style={{ fontSize: 14, lineHeight: 1.5, color: "#8A8A90", margin: 0, maxWidth: 380 }}>
        {looksReal
          ? "Hast du die App schon, öffne diesen Link auf deinem iPhone — er springt direkt hinein. Sonst: laden, Konto anlegen, den Code oben eingeben."
          : "Hast du die App schon, öffne diesen Link auf deinem iPhone."}
      </p>
    </main>
  );
}
