// Influencer landing /i/<handle>. Thin server shell; logic in InstallClient.

import { use } from "react";
import { InstallClient } from "./InstallClient";

export default function InfluencerLandingPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle: raw } = use(params);
  // Sanitize to the same charset the app accepts (HANDLE_RE in lib/referrals.ts).
  const handle = String(raw ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9_.-]/g, "")
    .slice(0, 64);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

  return (
    <InstallClient
      handle={handle}
      supabaseUrl={supabaseUrl}
      supabaseAnonKey={supabaseAnonKey}
    />
  );
}
