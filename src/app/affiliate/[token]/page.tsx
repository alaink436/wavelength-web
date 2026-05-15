// Affiliate setup form for influencers who said "yes" to the partnership.
//
// Flow:
//   1. Admin INSERTs a row into public.influencers with a setup_token + 7d expiry.
//   2. We email the influencer https://onwavelength.space/affiliate/<token>
//   3. They land here, see a pre-filled form with their handle.
//   4. They enter display name, country, payout method/email/IBAN, tax status.
//   5. UPDATE via Supabase anon-key (RLS allows update on valid token + pending).
//   6. Promo code is server-generated; they see it on the success screen.

import { use } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { SetupFormClient } from "./SetupFormClient";

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

async function loadInfluencer(token: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from("influencers")
    .select("id, handle, display_name, status, share_pct, share_months, setup_token_expires_at")
    .eq("setup_token", token)
    .maybeSingle();

  if (error || !data) return null;
  // RLS already filters to non-expired, but double-check the timestamp client-side.
  if (data.setup_token_expires_at && new Date(data.setup_token_expires_at) < new Date()) return null;
  return data;
}

export default function AffiliateSetupPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = use(params);
  const data = use(loadInfluencer(token));

  if (!data) return <Expired />;
  if (data.status === "active") return <AlreadyDone handle={data.handle} />;

  return (
    <SetupFormClient
      token={token}
      handle={data.handle}
      displayName={data.display_name ?? ""}
      sharePct={data.share_pct}
      shareMonths={data.share_months}
    />
  );
}

function Expired() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: T.bg,
        color: T.text,
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        padding: 24,
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
        <h1
          style={{
            fontFamily: "var(--font-bricolage), system-ui",
            fontSize: 28,
            fontWeight: 700,
            margin: "0 0 12px",
            letterSpacing: -0.8,
            color: T.text,
          }}
        >
          Link abgelaufen
        </h1>
        <p style={{ fontSize: 15, color: T.textSecondary, margin: 0, lineHeight: 1.55 }}>
          Dieser Setup-Link ist nicht mehr gültig oder existiert nicht. Schreib mir kurz an
          alain@onwavelength.space und ich schick dir einen neuen.
        </p>
      </div>
    </main>
  );
}

function AlreadyDone({ handle }: { handle: string }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: T.bg,
        color: T.text,
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        padding: 24,
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
        <h1
          style={{
            fontFamily: "var(--font-bricolage), system-ui",
            fontSize: 28,
            fontWeight: 700,
            margin: "0 0 12px",
            letterSpacing: -0.8,
            color: T.text,
          }}
        >
          Schon eingerichtet
        </h1>
        <p style={{ fontSize: 15, color: T.textSecondary, margin: 0, lineHeight: 1.55 }}>
          @{handle} ist schon aktiv. Wenn du Daten ändern willst (z. B. neue Auszahlungs-Mail),
          schreib mir an alain@onwavelength.space.
        </p>
      </div>
    </main>
  );
}
