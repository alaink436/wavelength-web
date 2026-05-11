// Influencer tracking + redirect page.
// Theme: matches On Wavelength native app (constants/colors.ts dark theme)
//   bg #06080E · surface #15171E · accent #60A5FA · text #F2F4F8
//   font DM Sans body · Bricolage Grotesque display

import { use } from "react";

// App theme constants (mirror of Thinq/constants/colors.ts dark mode)
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
          {/* Logo — gradient circle with wave */}
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
              fontSize: 30,
              fontWeight: 700,
              margin: "0 0 12px",
              letterSpacing: -0.8,
              color: T.text,
            }}
          >
            On Wavelength
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
            Empfohlen von{" "}
            <strong style={{ color: T.text, fontWeight: 600 }}>@{handle}</strong>
            <br />
            Du wirst gleich zum App Store weitergeleitet…
          </p>

          {/* Loading bar — subtle accent */}
          <div
            style={{
              height: 3,
              background: T.border,
              borderRadius: 2,
              overflow: "hidden",
              maxWidth: 180,
              margin: "0 auto 20px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "40%",
                background: `linear-gradient(90deg, ${T.accentDark}, ${T.accent})`,
                animation: "wlSlide 1.2s ease-in-out infinite",
              }}
            />
          </div>

          <noscript>
            <a
              href="https://apps.apple.com/de/app/on-wavelength/id6739700000"
              style={{
                display: "inline-block",
                color: T.accent,
                textDecoration: "underline",
                fontWeight: 500,
                fontSize: 14,
              }}
            >
              Zum App Store →
            </a>
          </noscript>

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

        <style>{`
          @keyframes wlSlide {
            0% { transform: translateX(-150%); }
            100% { transform: translateX(450%); }
          }
        `}</style>
      </main>
    </>
  );
}

function ClientScript({ handle }: { handle: string }) {
  const script = `
    (async function() {
      try {
        document.cookie = "wl_ref=${handle}; max-age=" + (60*60*24*7) + "; path=/; SameSite=Lax";
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
      const ua = navigator.userAgent;
      const isIOS = /iPad|iPhone|iPod/.test(ua);
      const isAndroid = /Android/.test(ua);
      setTimeout(function() {
        if (isIOS) {
          window.location.href = "https://apps.apple.com/de/app/on-wavelength/id6739700000?ref=${handle}";
        } else if (isAndroid) {
          window.location.href = "https://play.google.com/store/apps/details?id=com.wavelenght.app&referrer=${handle}";
        }
      }, 1000);
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
