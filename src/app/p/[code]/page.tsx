// Fixed invite link landing /p/<code> (Werben, 2026-10-15).
//
// Every Basalt user has ONE link for any number of people. With the app
// installed, iOS opens /p/* in the app through the AASA entry and never loads
// this page. So every visitor here needs the App Store, and the code has to get
// through the installation with them.
//
// That is the one difference to /s/<code>: on an iPhone "Get Basalt" goes
// through Detour. Detour remembers the tap and hands the app the route
// /p/<code> on its first launch (the SDK cuts the link id off the path); the
// app then keeps the code through sign-up and setup and connects the two of
// them. Everything else goes straight to the App Store, because a Detour link
// without a web fallback ends on an error page on a desktop.
//
// Same look as /s/<code>, which follows the app (white ground, #111 ink).

import type { Metadata } from "next";
import { headers } from "next/headers";

const IOS_URL = "https://apps.apple.com/de/app/id6762440839";

/** The Detour link the install goes through; the code rides on its path. */
const DETOUR_LINK = "https://klar.godetour.link/Zjm1D8IAwV";

/** Exactly the alphabet the database mints from: no I, L, O, U. */
const CODE_RE = /^[0-9A-HJKMNP-TV-Z]{8}$/;

export const metadata: Metadata = {
  title: "You are invited to Basalt",
  description: "Someone wants you on their list in Basalt.",
};

export default async function PersonalInvitePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code: raw } = await params;
  const code = String(raw ?? "")
    .toUpperCase()
    .replace(/[^0-9A-Z]/g, "")
    .slice(0, 8);
  const looksReal = CODE_RE.test(code);

  const userAgent = (await headers()).get("user-agent") ?? "";
  const onIPhone = /iPhone|iPad|iPod/i.test(userAgent);
  const getUrl = looksReal && onIPhone ? `${DETOUR_LINK}/p/${code}` : IOS_URL;

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
          someone wants you on their list.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.5, color: "#6B6B70", margin: 0 }}>
          {looksReal
            ? "Basalt is where they keep their routines, and where the two of you can hold each other to one. Get the app, make an account, and you are connected."
            : "This invite link does not look complete. Ask for it again."}
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
            their code
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
        href={getUrl}
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
          ? "Already have the app? Open this link on your iPhone and it jumps straight in. If they are not on your list after signing up, open People in Basalt and enter the code above."
          : "Already have the app? Open this link on your iPhone."}
      </p>
    </main>
  );
}
