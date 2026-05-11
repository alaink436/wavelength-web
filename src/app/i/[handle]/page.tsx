// Influencer tracking + redirect page.
// Flow:
//   1. User clicks https://onwavelength.space/i/marie
//   2. Log click to Supabase (referral_clicks) with IP hash + user-agent
//   3. Set cookie `wl_ref=marie` (7 days) for deferred deep-link matching
//   4. If iOS device: Universal Link will already have opened the app — this page
//      is the fallback when the app is NOT installed.
//   5. Show a short interstitial → redirect to App Store with extra params

import { use } from "react";

export default function InfluencerLandingPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = use(params);
  return <ClientLanding handle={handle} />;
}

function ClientLanding({ handle }: { handle: string }) {
  return (
    <>
      <ClientScript handle={handle} />
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
            On Wavelength
          </h1>
          <p style={{ fontSize: 15, color: "#9c9caa", margin: "0 0 24px", lineHeight: 1.5 }}>
            Empfohlen von <strong style={{ color: "#ededf0" }}>@{handle}</strong>
            <br />
            Du wirst gleich zum App Store weitergeleitet…
          </p>
          <noscript>
            <a
              href="https://apps.apple.com/de/app/on-wavelength/id6739700000"
              style={{ color: "#6366f1", textDecoration: "underline" }}
            >
              Zum App Store
            </a>
          </noscript>
        </div>
      </main>
    </>
  );
}

function ClientScript({ handle }: { handle: string }) {
  // Inline script tracks click via Supabase, sets cookie, then redirects.
  // We use a script tag (not a use-client component) so this stays a server-rendered
  // page with minimal client JS — faster on mobile.
  const script = `
    (async function() {
      try {
        // Cookie for deferred deep-link matching (7 days)
        document.cookie = "wl_ref=${handle}; max-age=" + (60*60*24*7) + "; path=/; SameSite=Lax";
        // Fire-and-forget log to Supabase
        const url = "${process.env.NEXT_PUBLIC_SUPABASE_URL || ""}";
        const key = "${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""}";
        if (url && key) {
          fetch(url + "/rest/v1/referral_clicks", {
            method: "POST",
            headers: {
              "apikey": key,
              "Authorization": "Bearer " + key,
              "Content-Type": "application/json",
              "Prefer": "return=minimal",
            },
            body: JSON.stringify({
              influencer_handle: ${JSON.stringify(handle)},
              user_agent: navigator.userAgent,
              app: "wavelength",
              referrer: document.referrer || null,
            }),
            keepalive: true,
          }).catch(() => {});
        }
      } catch (e) {}
      // Try universal link first (opens app if installed), then fall back to App Store
      const ua = navigator.userAgent;
      const isIOS = /iPad|iPhone|iPod/.test(ua);
      const isAndroid = /Android/.test(ua);
      setTimeout(function() {
        if (isIOS) {
          window.location.href = "https://apps.apple.com/de/app/on-wavelength/id6739700000?ref=${handle}";
        } else if (isAndroid) {
          window.location.href = "https://play.google.com/store/apps/details?id=com.wavelenght.app&referrer=${handle}";
        } else {
          // Desktop fallback — show App Store link, no auto-redirect
          // (page already showed App Store link in noscript fallback)
        }
      }, 800);
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
