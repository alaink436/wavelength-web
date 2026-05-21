"use client";

// Wavelength thin wrapper around the shared OnboardingShell. Posts the
// completed payout form cross-origin to getklar.org/api/affiliate/complete
// which routes through klar's admin-app registry to call this app's own
// Supabase complete_influencer_setup RPC with service-role, then logs the
// click-through agreement + fires the confirmation email.

import { OnboardingShell } from "../_shared/onboarding";
import type { PayoutState } from "../_shared/onboarding";
import { BRANDS } from "../_shared/brands";

const BRAND = BRANDS.wavelength;
const KLAR_COMPLETE_URL = "https://getklar.org/api/affiliate/complete";

export function SetupClient({ token, handle, displayName }: { token: string; handle: string; displayName: string }) {
  void displayName;
  async function onSubmit(form: PayoutState) {
    const promoCode = (handle.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12) || "WAVE") + "20";
    const res = await fetch(KLAR_COMPLETE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        app: "wavelength",
        token,
        display_name: form.displayName.trim(),
        country: form.country,
        payout_method: form.method,
        payout_email: form.method === "sepa" ? null : form.handle.trim(),
        payout_iban: form.method === "sepa" ? form.handle.trim() : null,
        tax_status: form.taxStatus,
        invoice_capable: form.canInvoice,
        promo_code: promoCode,
        agreement_accepted: form.agreementAccepted,
        assets_drive_url: BRAND.assetsDriveUrl ?? null,
      }),
    });
    const j = (await res.json().catch(() => null)) as { ok?: boolean; promo_code?: string; error?: string } | null;
    if (!res.ok || !j?.ok) throw new Error(j?.error || `HTTP ${res.status}`);
    return { promoCode: j.promo_code || promoCode };
  }

  return <OnboardingShell brand="wavelength" handle={`@${handle}`} onSubmit={onSubmit} />;
}
