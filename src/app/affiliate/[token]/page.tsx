// Affiliate setup form for influencers who said "yes" to the partnership.

import { use } from "react";
import { createClient } from "@supabase/supabase-js";
import { SetupFormClient } from "./SetupFormClient";
import { t, fill, isLang } from "./translations";

const T = {
  bg: "#06080E",
  surface: "#15171E",
  text: "#F2F4F8",
  textSecondary: "#9B9DA6",
  border: "#1F2128",
  accent: "#60A5FA",
};
const CONTACT_EMAIL = "alain@onwavelength.space";

async function loadInfluencer(token: string) {
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
  return data;
}

export default function AffiliateSetupPage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { token } = use(params);
  const sp = use(searchParams);
  const data = use(loadInfluencer(token));
  const lang = isLang(sp.lang) ? sp.lang : isLang(data?.language) ? data!.language : "de";
  const tt = t(lang);

  if (!data) return <Status title={tt.expired_title} body={fill(tt.expired_body, { email: CONTACT_EMAIL })} />;
  if (data.status === "active") {
    return <Status title={tt.expired_title /* reuse style */} body={fill(tt.contact_help, { email: CONTACT_EMAIL })} alreadyDoneHandle={data.handle} />;
  }

  return (
    <SetupFormClient
      token={token}
      handle={data.handle}
      displayName={data.display_name ?? ""}
      sharePct={data.share_pct}
      shareMonths={data.share_months}
      lang={lang}
    />
  );
}

function Status({ title, body, alreadyDoneHandle }: { title: string; body: string; alreadyDoneHandle?: string }) {
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
          {alreadyDoneHandle ? `@${alreadyDoneHandle} ✓` : title}
        </h1>
        <p style={{ fontSize: 15, color: T.textSecondary, margin: 0, lineHeight: 1.55 }}>{body}</p>
      </div>
    </main>
  );
}
