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
  title: "A routine was shared with you — Basalt",
  description: "With Basalt you can watch someone follow through on a routine.",
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
          someone is following through.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.5, color: "#6B6B70", margin: 0 }}>
          {looksReal
            ? "You have been invited to watch a routine. Read only: you cannot tick anything off and cannot change anything."
            : "This invite code does not look complete. Ask for the link again, or type the code into the app by hand."}
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
            your code
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
        Get Basalt
      </a>

      <p style={{ fontSize: 14, lineHeight: 1.5, color: "#8A8A90", margin: 0, maxWidth: 380 }}>
        {looksReal
          ? "Already have the app? Open this link on your iPhone and it jumps straight in. Otherwise: install it, create an account, and enter the code above."
          : "Already have the app? Open this link on your iPhone."}
      </p>
    </main>
  );
}
