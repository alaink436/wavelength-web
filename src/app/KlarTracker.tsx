"use client";

// Aufruf-Zaehler fuer Klar Control.
//
// Meldet jeden Seitenaufruf an https://getklar.org/api/track, damit die Seite
// im Landing-Tab von Klar Control auftaucht. Ohne diesen Ping weiss das
// Dashboard nichts von dieser Domain und zeigt eine Null, die wie "niemand
// kommt" aussieht, obwohl sie "wir messen nicht" heisst.
//
// Privacy-friendly wie auf getklar.org selbst: keine Cookies, keine IDs, keine
// Query-Parameter, kein document.title. Nur pathname + document.referrer. Die
// Session wird serverseitig als sha256(Tages-Salt + IP + UA) gebildet und
// rotiert taeglich.
//
// ZWEI Dinge, die hier nicht beliebig sind:
//   1. Blob-Typ text/plain, NICHT application/json. Der Aufruf geht
//      cross-origin (diese Domain -> getklar.org), und application/json ist
//      nicht CORS-safelisted: der Browser wollte dann einen Preflight
//      schicken, den sendBeacon nicht kann, und der Ping faellt still aus.
//      Die Route liest den Body ueber req.json(), der Content-Type ist ihr egal.
//   2. Der Host wird NICHT mitgeschickt. Die Route leitet ihn aus dem
//      Origin-Header ab, den der Browser setzt und den der Client nicht
//      faelschen kann.

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ENDPOINT = "https://getklar.org/api/track";

export default function KlarTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const payload = JSON.stringify({
      path: pathname,
      referrer:
        typeof document !== "undefined" && document.referrer ? document.referrer : undefined,
    });

    try {
      if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
        navigator.sendBeacon(ENDPOINT, new Blob([payload], { type: "text/plain" }));
      } else {
        void fetch(ENDPOINT, {
          method: "POST",
          body: payload,
          headers: { "Content-Type": "text/plain" },
          keepalive: true,
          mode: "cors",
        });
      }
    } catch {
      // Tracking ist best-effort und darf nie einen Seitenaufruf stoeren.
    }
  }, [pathname]);

  return null;
}
