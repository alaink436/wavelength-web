"use client";

// Influencer landing + clipboard deferred-deeplink for Basalt - Follow Through.
//
// Visual identity mirrors the app: dark base, one restrained sage accent, no
// imagery. The old Wavelength identity (water photograph, two surf mascots,
// light-blue wave accent) was removed on 2026-07-21 — it belonged to the
// calendar app, and the product brief rules out mascots for this subject.
//
// The URL path stays /i/<handle> and the token stays `wlref:` because both are
// keyed into the affiliate schema; only the product changed.
//
// iOS clipboard writes only work inside a user gesture; the tap writes
// `wlref:<handle>:v1`, then redirects to the App Store.

import { useEffect, useRef, useState } from "react";

// ID-only form: Apple resolves by id, so the name slug in the URL is irrelevant
// and cannot go stale when the app is renamed.
const IOS_URL = "https://apps.apple.com/de/app/id6739700000";
const ANDROID_ID = "com.wavelenght.app";
const FORCE_REDIRECT_MS = 2000;

// Mirrors src/theme in the app repo.
const T = {
  bgInk: "#0C0C0E",
  card: "#17171A",
  cardHi: "#202024",
  text: "#F2F2F4",
  textSecondary: "#9A9AA2",
  textTertiary: "#82828B",
  accent: "#A8D5BA",
  accentInk: "#0C0C0E",
  accentSoft: "rgba(168, 213, 186, 0.12)",
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
    // Skip auto-redirect on desktop (no iOS/Android app to install there) and
    // on ?preview for dev screenshots. Mobile keeps the fast cold-install path.
    const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    const isPreview =
      typeof window !== "undefined" && window.location.search.includes("preview");
    if (!isMobile || isPreview) {
      void writeClipboard().catch(() => undefined);
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
        backgroundColor: T.bgInk,
        color: T.text,
        fontFamily: "var(--font-dm-sans), system-ui, -apple-system, sans-serif",
        padding: "24px 18px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* One very quiet accent glow behind the card. No photograph, no mascot:
          the subject is self-discipline, and decoration undercuts it. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(168, 213, 186, 0.07) 0%, rgba(12, 12, 14, 0) 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 460,
          width: "100%",
          zIndex: 1,
        }}
      >
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

          {/* Eyebrow line: mark + handle. Left-aligned, no centered pill */}
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
              {/* TODO: swap for the Basalt icon once the logo exists. */}
              <img
                src="/icons/wavelength.webp"
                alt="Basalt"
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
                Basalt
              </span>
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
            Ein Ziel.
            <br />
            <span style={{ color: T.accent }}>Wirklich durchgezogen.</span>
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
            Du wählst ein Ziel, die App setzt es durch. Sie sperrt, was dich
            abhält, oder legt dir den Plan in den Kalender. Nach deiner
            Zielspanne ist es geschafft.
          </p>

          {/* Three points — short, left-aligned, no card grid */}
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
              ["Sperre", "Apps und Seiten, die dir im Weg stehen"],
              ["Plan", "Feste Termine, direkt im Apple Kalender"],
              ["Ende", "Dein Ziel wird fertig, nicht zum Dauerabo"],
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
            {redirecting ? "App Store wird geöffnet…" : "Basalt laden"}
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
