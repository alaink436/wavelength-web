// Event link landing /e/<id> (Basalt towers and events, ticket 08, 2026-10-15).
//
// An event is an official Basalt challenge: 30 days, one routine, everybody
// starts on the same day. The id is the event's Kennung in the database
// (`events.id`, e.g. winter-arc-2026), and it is also the deep link of Apple's
// in-app event card.
//
// With the app installed, iOS opens /e/* in the app through the AASA entry and
// never loads this page; the app opens the event in its towers tab. So every
// visitor here needs the App Store, and the event has to get through the
// installation with them: on an iPhone "Get Basalt" goes through Detour, which
// hands the app the route /e/<id> on its first launch, and the app keeps it
// through sign-up and setup. Everything else goes straight to the App Store,
// because a Detour link without a web fallback ends on an error page on a
// desktop. The same way as /p/<code>, in the same look.

import type { Metadata } from "next";
import { headers } from "next/headers";

const IOS_URL = "https://apps.apple.com/de/app/id6762440839";

/** The Detour link the install goes through; the event rides on its path. */
const DETOUR_LINK = "https://klar.godetour.link/Zjm1D8IAwV";

/** Exactly what the events table takes as an id. */
const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export const metadata: Metadata = {
  title: "Join the event in Basalt",
  description: "30 days, one routine, and everyone starts on the same day.",
};

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: raw } = await params;
  const id = String(raw ?? "").toLowerCase();
  const looksReal = id.length >= 3 && id.length <= 40 && ID_RE.test(id);

  const userAgent = (await headers()).get("user-agent") ?? "";
  const onIPhone = /iPhone|iPad|iPod/i.test(userAgent);
  const getUrl = looksReal && onIPhone ? `${DETOUR_LINK}/e/${id}` : IOS_URL;

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
          {looksReal ? id.replace(/-/g, " ") : "a basalt event"}
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.5, color: "#6B6B70", margin: 0 }}>
          {looksReal
            ? "30 days, one routine, every day, and everyone starts on the same day. Get the app, make an account, and join before the start."
            : "This event link does not look complete. Ask for it again."}
        </p>
      </div>

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
        Already have the app? Open this link on your iPhone and it jumps straight to the event.
      </p>
    </main>
  );
}
