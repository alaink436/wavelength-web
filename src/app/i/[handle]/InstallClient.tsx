"use client";

// Influencer landing + clipboard deferred-deeplink for Wavelength.
//
// Visual identity = a printed concert/swim-club poster: bg-water-1.png as a
// full-bleed photograph, the glass mascot crashing through the top of the
// card, a dense dark paper card (not a glass-card), a surfing companion
// mascot anchoring the bottom corner.
//
// iOS clipboard writes only work inside a user gesture; the tap writes
// `wlref:<handle>:v1`, then redirects to the App Store.

import { useEffect, useRef, useState } from "react";

const IOS_URL = "https://apps.apple.com/de/app/on-wavelength/id6739700000";
const ANDROID_ID = "com.wavelenght.app";
const FORCE_REDIRECT_MS = 2000;

const T = {
  bgInk: "#06070D",
  card: "#0E1118",
  cardHi: "#161A23",
  text: "#F3F1EA",
  textSecondary: "#A4A3AD",
  textTertiary: "#6E6D78",
  accent: "#7DD3FC",
  accentInk: "#0C4A6E",
  accentSoft: "rgba(125, 211, 252, 0.12)",
  rule: "rgba(255, 255, 255, 0.10)",
};

function storeUrl(handle: string): string {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  if (/Android/.test(ua)) {
    return `https://play.google.com/store/apps/details?id=${ANDROID_ID}&referrer=${encodeURIComponent(handle)}`;
  }
  return `${IOS_URL}?ref=${encodeURIComponent(handle)}`;
}

export function InstallClient({
  handle,
  supabaseUrl,
  supabaseAnonKey,
}: {
  handle: string;
  supabaseUrl: string;
  supabaseAnonKey: string;
}) {
  const [redirecting, setRedirecting] = useState(false);
  const redirected = useRef(false);

  const token = `wlref:${handle}:v1`;

  useEffect(() => {
    try {
      document.cookie = `wl_ref=${handle}; max-age=${60 * 60 * 24 * 7}; path=/; SameSite=Lax`;
    } catch {
      /* ignore */
    }
    if (supabaseUrl && supabaseAnonKey) {
      fetch(`${supabaseUrl}/rest/v1/referral_clicks`, {
        method: "POST",
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          influencer_handle: handle,
          user_agent: navigator.userAgent,
          app: "wavelength",
          referrer: document.referrer || null,
        }),
        keepalive: true,
      }).catch(() => {});
    }
    // ?preview disables auto-redirect so the page can be screenshot in dev.
    if (typeof window !== 'undefined' && window.location.search.includes('preview')) {
      return;
    }
    const clipboardP = writeClipboard().catch(() => undefined);
    void clipboardP.then(() => go());
    const t = setTimeout(() => go(), FORCE_REDIRECT_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function writeClipboard(): Promise<void> {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(token);
      }
    } catch {
      /* clipboard blocked without gesture -> covered by the button tap */
    }
  }

  function go(): void {
    if (redirected.current) return;
    redirected.current = true;
    setRedirecting(true);
    window.location.href = storeUrl(handle);
  }

  async function onInstall(): Promise<void> {
    await writeClipboard();
    go();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/bg-water-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: T.bgInk,
        color: T.text,
        fontFamily: "var(--font-dm-sans), system-ui, -apple-system, sans-serif",
        padding: "24px 18px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dark vignette so the body text sits on dense ink, not on the photo.
          No glass/blur — the water photo bleeds at the edges only. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(6, 7, 13, 0.55) 0%, rgba(6, 7, 13, 0.92) 70%, rgba(6, 7, 13, 1) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Surfing mascot — bottom-left, decorative companion that ties the
          water photo to the card. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "calc(50% - 280px)",
          bottom: "8%",
          width: 180,
          height: 180,
          pointerEvents: "none",
          zIndex: 2,
          transform: "rotate(-12deg)",
          filter:
            "drop-shadow(0 22px 30px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 22px rgba(125, 211, 252, 0.25))",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mascots/pose-surf.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 460,
          width: "100%",
          zIndex: 1,
        }}
      >
        {/* Reaching mascot — crashes through the top of the card. Lifted by
            negative margin so it overlaps the card edge. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mascots/pose-reach.png"
          alt=""
          aria-hidden
          width={200}
          height={200}
          style={{
            display: "block",
            margin: "0 auto -36px",
            position: "relative",
            zIndex: 3,
            filter:
              "drop-shadow(0 22px 36px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 30px rgba(125, 211, 252, 0.3))",
          }}
        />

        <article
          style={{
            position: "relative",
            background: T.card,
            border: `1px solid ${T.rule}`,
            borderRadius: 24,
            padding: "56px 30px 28px",
            boxShadow:
              "0 1px 0 rgba(255, 255, 255, 0.05) inset," +
              "0 36px 80px -28px rgba(0, 0, 0, 0.8)," +
              "0 12px 24px -12px rgba(0, 0, 0, 0.55)",
          }}
        >
          {/* Subtle stippled grain on the card so it reads as printed paper,
              not glossy app surface. */}
          <span
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
              borderRadius: 24,
              pointerEvents: "none",
            }}
          />

          {/* Eyebrow line: wave-mark + handle. Left-aligned, no centered pill */}
          <header
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginBottom: 20,
              paddingBottom: 14,
              borderBottom: `1px solid ${T.rule}`,
              position: "relative",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/wavelength.webp"
                alt="On Wavelength"
                width={30}
                height={30}
                style={{
                  borderRadius: 8,
                  boxShadow: `0 6px 14px -4px ${T.accent}55`,
                }}
              />
              <span
                style={{
                  fontFamily:
                    "var(--font-bricolage), system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: 0.4,
                  color: T.text,
                }}
              >
                On Wavelength
              </span>
              <svg
                width="28"
                height="20"
                viewBox="0 0 32 22"
                fill="none"
                aria-hidden
                style={{ color: T.accent }}
              >
                <path
                  d="M2 11c3-7 6-7 9 0s6 7 9 0 6-7 9 0"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1.8,
                textTransform: "uppercase",
                color: T.accent,
              }}
            >
              {handle ? `Invite @${handle}` : "Free invite"}
            </span>
          </header>

          <h1
            style={{
              fontFamily:
                "var(--font-bricolage), system-ui, sans-serif",
              fontSize: "clamp(34px, 8.5vw, 44px)",
              fontWeight: 800,
              margin: "0 0 12px",
              letterSpacing: -1.4,
              lineHeight: 0.96,
              color: T.text,
            }}
          >
            Der Plan,
            <br />
            <span style={{ color: T.accent }}>der nicht nervt.</span>
          </h1>

          <p
            style={{
              fontSize: 15,
              color: T.textSecondary,
              margin: "0 0 24px",
              lineHeight: 1.55,
              maxWidth: 360,
            }}
          >
            Gruppenkalender mit Heatmap-Voting und Sport-Lineups für acht
            Sportarten. Niemand muss mehr fragen wer noch kann.
          </p>

          {/* Three lineups — short, left-aligned, no card grid */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 26px",
              display: "grid",
              gap: 10,
            }}
          >
            {[
              ["Heatmap", "Sieh sofort wann alle Zeit haben"],
              ["Lineups", "8 Sportarten, ein Tap zur Aufstellung"],
              ["Reminder", "Nur Pings, die wirklich nötig sind"],
            ].map(([label, desc]) => (
              <li
                key={label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "92px 1fr",
                  alignItems: "baseline",
                  gap: 14,
                  paddingBottom: 8,
                  borderBottom: `1px solid ${T.rule}`,
                  fontSize: 13.5,
                  color: T.textSecondary,
                }}
              >
                <span
                  style={{
                    fontFamily:
                      "var(--font-bricolage), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 12.5,
                    letterSpacing: 1.4,
                    textTransform: "uppercase",
                    color: T.accent,
                  }}
                >
                  {label}
                </span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onInstall}
            disabled={redirecting}
            style={{
              width: "100%",
              padding: "16px 22px",
              background: redirecting ? T.textSecondary : T.text,
              color: T.bgInk,
              border: "none",
              borderRadius: 14,
              fontFamily:
                "var(--font-dm-sans), system-ui",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 0.2,
              cursor: redirecting ? "wait" : "pointer",
              opacity: redirecting ? 0.85 : 1,
              transition: "opacity 160ms ease, transform 80ms ease",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {!redirecting && (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
            )}
            {redirecting ? "Opening the App Store…" : "Get On Wavelength"}
          </button>

          <p
            style={{
              fontSize: 12.5,
              color: T.textTertiary,
              margin: "16px 0 0",
              lineHeight: 1.5,
            }}
          >
            {handle
              ? `Tippe Get — @${handle} wird automatisch deinem Install zugeordnet.`
              : "Tippe Get, dann startet der App Store direkt."}
          </p>
        </article>
      </div>
    </main>
  );
}
