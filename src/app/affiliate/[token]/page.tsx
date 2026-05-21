// Wavelength affiliate onboarding — unified Klar public-site look. Loads
// the influencer row from our own Supabase via anon-key, then hands off to
// the shared OnboardingShell (mirrored from klar/_shared). The completion
// POST goes to getklar.org/api/affiliate/complete which (a) calls our own
// complete_influencer_setup RPC with service-role from the klar admin
// registry, (b) logs the click-through agreement in anime-vault and (c)
// fires the confirmation email via Brevo.

import { use } from "react";
import { createClient } from "@supabase/supabase-js";
import { SetupClient } from "./SetupClient";
import "../_shared/affiliate-onboarding.css";

export const dynamic = "force-dynamic";

interface Influencer {
  id: string;
  handle: string;
  display_name: string | null;
  status: string;
  share_pct: number;
  share_months: number;
  language: string;
  setup_token_expires_at: string | null;
}

async function loadInfluencer(token: string): Promise<Influencer | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  const supabase = createClient(url, key);
  const { data, error } = await supabase
    .from("influencers")
    .select("id, handle, display_name, status, share_pct, share_months, language, setup_token_expires_at")
    .eq("setup_token", token)
    .maybeSingle();

  if (error || !data) return null;
  if (data.setup_token_expires_at && new Date(data.setup_token_expires_at) < new Date()) return null;
  return data as Influencer;
}

export default function AffiliateSetupPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const data = use(loadInfluencer(token));

  if (!data) return <Status expired />;
  if (data.status === "active") return <Status alreadyDoneHandle={data.handle} />;
  return <SetupClient token={token} handle={data.handle} displayName={data.display_name ?? ""} />;
}

function Status({ alreadyDoneHandle, expired }: { alreadyDoneHandle?: string; expired?: boolean }) {
  return (
    <main className="aff-stage">
      <div className="aff-shell" style={{ maxWidth: 440 }}>
        <div className="aff-card aff-pad" style={{ textAlign: "center" }}>
          <h1 className="aff-h1" style={{ marginBottom: 12 }}>
            {alreadyDoneHandle ? <>@{alreadyDoneHandle} <span className="italic">✓</span></> : expired ? <>Link <span className="italic">abgelaufen</span></> : <span className="italic">Lade …</span>}
          </h1>
          <p className="aff-lede" style={{ textAlign: "center" }}>
            {alreadyDoneHandle
              ? "Du bist bereits als Affiliate eingerichtet. Bei Fragen: alain@onwavelength.space"
              : expired
              ? "Dein Onboarding-Link ist abgelaufen oder ungültig. Schreib uns kurz an alain@onwavelength.space, wir erneuern ihn."
              : ""}
          </p>
        </div>
      </div>
    </main>
  );
}
