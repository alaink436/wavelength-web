"use client";

// Wavelength affiliate onboarding shell. 4 steps: welcome, tracking, payout
// form, success. WelcomeStep + TrackingStep are extracted; the form and
// success states stay inline because they share state and palette.

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { t, fill, type Lang } from "./translations";
import { WelcomeStep } from "./WelcomeStep";
import { TrackingStep } from "./TrackingStep";

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
  error: "#FF6B6B",
};

const COUNTRIES: { code: string; label: string }[] = [
  { code: "DE", label: "Deutschland / Germany" },
  { code: "AT", label: "Österreich / Austria" },
  { code: "CH", label: "Schweiz / Switzerland" },
  { code: "NL", label: "Nederland / Netherlands" },
  { code: "FR", label: "France" },
  { code: "IT", label: "Italia / Italy" },
  { code: "ES", label: "España / Spain" },
  { code: "UK", label: "United Kingdom" },
  { code: "US", label: "USA" },
  { code: "CA", label: "Canada" },
  { code: "AU", label: "Australia" },
  { code: "OTHER", label: "Other / Anderes Land" },
];

type PayoutMethod = "wise" | "paypal" | "sepa";
type TaxStatus = "kleinunternehmer" | "regelbesteuert" | "foreign";

const TOTAL_STEPS = 4;

export function SetupFormClient({
  token,
  handle,
  displayName,
  sharePct,
  shareMonths,
  lang,
}: {
  token: string;
  handle: string;
  displayName: string;
  sharePct: number;
  shareMonths: number;
  lang: Lang;
}) {
  const tt = t(lang);
  const [step, setStep] = useState(0);
  const [name, setName] = useState(displayName);
  const [country, setCountry] = useState("DE");
  const [method, setMethod] = useState<PayoutMethod>("paypal");
  const [email, setEmail] = useState("");
  const [iban, setIban] = useState("");
  const [taxStatus, setTaxStatus] = useState<TaxStatus>("kleinunternehmer");
  const [invoiceCapable, setInvoiceCapable] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<{ promoCode: string } | null>(null);

  const isForeign = ["US", "CA", "AU", "UK"].includes(country);
  const stepIndex = done ? 3 : step;

  async function submit() {
    setError(null);
    if (!name.trim()) return setError(tt.err_name_required);
    if (method === "sepa" && !iban.trim()) return setError(tt.err_iban_required);
    if ((method === "paypal" || method === "wise") && !email.trim()) return setError(tt.err_email_required);

    setBusy(true);
    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
      const supabase = createClient(url, key);

      const promoCode = (handle.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12) || "WAVE") + "20";

      const { data: updated, error } = await supabase.rpc("complete_influencer_setup", {
        p_token: token,
        p_display_name: name.trim(),
        p_country: country,
        p_payout_method: method,
        p_payout_email: method === "sepa" ? null : email.trim() || null,
        p_payout_iban: method === "sepa" ? iban.trim() : null,
        p_tax_status: isForeign ? "foreign" : taxStatus,
        p_invoice_capable: invoiceCapable,
        p_promo_code: promoCode,
      });

      if (error) throw error;
      const finalCode = ((updated as { promo_code?: string } | null)?.promo_code) || promoCode;
      setDone({ promoCode: finalCode });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : tt.err_generic;
      setError(msg);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main style={pageStyle()}>
      <div style={cardStyle()}>
        <StepIndicator
          step={stepIndex}
          total={TOTAL_STEPS}
          labels={[tt.step_welcome, tt.step_tracking, tt.step_payout, tt.step_done]}
        />

        {step === 0 && !done && (
          <WelcomeStep
            handle={handle}
            lang={lang}
            sharePct={sharePct}
            shareMonths={shareMonths}
            onNext={() => setStep(1)}
          />
        )}

        {step === 1 && !done && (
          <TrackingStep lang={lang} onBack={() => setStep(0)} onNext={() => setStep(2)} />
        )}

        {step === 2 && !done && (
          <PayoutForm
            tt={tt}
            name={name}
            setName={setName}
            country={country}
            setCountry={setCountry}
            method={method}
            setMethod={setMethod}
            email={email}
            setEmail={setEmail}
            iban={iban}
            setIban={setIban}
            taxStatus={taxStatus}
            setTaxStatus={setTaxStatus}
            invoiceCapable={invoiceCapable}
            setInvoiceCapable={setInvoiceCapable}
            isForeign={isForeign}
            busy={busy}
            error={error}
            sharePct={sharePct}
            shareMonths={shareMonths}
            onBack={() => setStep(1)}
            onSubmit={submit}
          />
        )}

        {done && <SuccessView tt={tt} handle={handle} promoCode={done.promoCode} sharePct={sharePct} shareMonths={shareMonths} />}
      </div>
    </main>
  );
}

function StepIndicator({ step, total, labels }: { step: number; total: number; labels: string[] }) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
      {Array.from({ length: total }, (_, i) => {
        const active = i === step;
        const done = i < step;
        return (
          <div key={i} style={{ flex: 1, textAlign: "center" }}>
            <div
              style={{
                height: 4,
                borderRadius: 2,
                background: done || active ? T.accent : T.border,
                marginBottom: 8,
                transition: "background 200ms",
              }}
            />
            <div
              style={{
                fontSize: 10.5,
                color: active ? T.accent : done ? T.textSecondary : T.textTertiary,
                fontWeight: active ? 700 : 500,
                fontFamily: "var(--font-bricolage), system-ui",
                letterSpacing: 0.4,
                textTransform: "uppercase",
              }}
            >
              {labels[i]}
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface PayoutFormProps {
  tt: ReturnType<typeof t>;
  name: string;
  setName: (s: string) => void;
  country: string;
  setCountry: (s: string) => void;
  method: PayoutMethod;
  setMethod: (m: PayoutMethod) => void;
  email: string;
  setEmail: (s: string) => void;
  iban: string;
  setIban: (s: string) => void;
  taxStatus: TaxStatus;
  setTaxStatus: (t: TaxStatus) => void;
  invoiceCapable: boolean;
  setInvoiceCapable: (b: boolean) => void;
  isForeign: boolean;
  busy: boolean;
  error: string | null;
  sharePct: number;
  shareMonths: number;
  onBack: () => void;
  onSubmit: () => void;
}

function PayoutForm({
  tt, name, setName, country, setCountry, method, setMethod, email, setEmail,
  iban, setIban, taxStatus, setTaxStatus, invoiceCapable, setInvoiceCapable,
  isForeign, busy, error, sharePct, shareMonths, onBack, onSubmit,
}: PayoutFormProps) {
  return (
    <div>
      <h1 style={h1Style()}>{tt.step_payout}</h1>
      <p style={{ fontSize: 15, color: T.textSecondary, lineHeight: 1.55, margin: "8px 0 24px" }}>{tt.welcome_body}</p>

      <Field label={tt.field_name_label}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder={tt.field_name_placeholder} style={inputStyle()} />
      </Field>

      <Field label={tt.field_country_label}>
        <select value={country} onChange={(e) => setCountry(e.target.value)} style={inputStyle()}>
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>{c.label}</option>
          ))}
        </select>
      </Field>

      <Field label={tt.field_payout_method_label}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {(["paypal", "wise", "sepa"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMethod(m)}
              style={{
                padding: "10px 14px",
                borderRadius: 12,
                border: `1px solid ${method === m ? T.accent : T.border}`,
                background: method === m ? T.accent + "22" : T.surfaceElevated,
                color: method === m ? T.text : T.textSecondary,
                fontFamily: "var(--font-dm-sans), system-ui",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {m === "sepa" ? "SEPA" : m}
            </button>
          ))}
        </div>
      </Field>

      {method === "sepa" ? (
        <Field label={tt.field_iban_label}>
          <input value={iban} onChange={(e) => setIban(e.target.value.toUpperCase())} placeholder="DE89 3704 0044 0532 0130 00" style={inputStyle()} />
        </Field>
      ) : (
        <Field label={method === "paypal" ? tt.field_email_label_paypal : tt.field_email_label_wise}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={tt.field_email_placeholder} style={inputStyle()} />
        </Field>
      )}

      {!isForeign && (
        <Field label={tt.field_tax_label}>
          <select value={taxStatus} onChange={(e) => setTaxStatus(e.target.value as TaxStatus)} style={inputStyle()}>
            <option value="kleinunternehmer">{tt.tax_kleinunternehmer}</option>
            <option value="regelbesteuert">{tt.tax_regelbesteuert}</option>
          </select>
        </Field>
      )}

      <label style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6, marginBottom: 24, cursor: "pointer", color: T.textSecondary, fontSize: 14 }}>
        <input type="checkbox" checked={invoiceCapable} onChange={(e) => setInvoiceCapable(e.target.checked)} style={{ width: 18, height: 18, accentColor: T.accent }} />
        {tt.checkbox_invoice_capable}
      </label>

      {error && (
        <div style={{ padding: "10px 14px", background: T.error + "22", border: `1px solid ${T.error}55`, borderRadius: 10, color: T.error, fontSize: 14, marginBottom: 16 }}>
          {error}
        </div>
      )}

      <div style={{ display: "flex", gap: 12 }}>
        <button
          type="button"
          onClick={onBack}
          disabled={busy}
          style={{
            flex: "0 0 auto",
            padding: "16px 22px",
            background: T.surfaceElevated,
            color: T.textSecondary,
            border: `1px solid ${T.border}`,
            borderRadius: 14,
            fontSize: 15,
            fontWeight: 500,
            cursor: busy ? "not-allowed" : "pointer",
            opacity: busy ? 0.6 : 1,
            fontFamily: "var(--font-dm-sans), system-ui",
          }}
        >
          {tt.nav_back}
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={busy}
          style={{
            flex: 1,
            padding: "16px 24px",
            background: `linear-gradient(135deg, ${T.accentDark}, ${T.accent})`,
            color: "white",
            border: "none",
            borderRadius: 14,
            fontFamily: "var(--font-dm-sans), system-ui",
            fontSize: 16,
            fontWeight: 600,
            cursor: busy ? "wait" : "pointer",
            opacity: busy ? 0.7 : 1,
          }}
        >
          {busy ? tt.submit_busy : tt.submit_idle}
        </button>
      </div>

      <p style={{ fontSize: 11, color: T.textTertiary, textAlign: "center", marginTop: 14, lineHeight: 1.5 }}>
        {fill(tt.consent, { sharePct, shareMonths })}
      </p>
    </div>
  );
}

function SuccessView({
  tt, handle, promoCode, sharePct, shareMonths,
}: {
  tt: ReturnType<typeof t>;
  handle: string;
  promoCode: string;
  sharePct: number;
  shareMonths: number;
}) {
  return (
    <div>
      <h1 style={h1Style()}>{tt.done_title}</h1>
      <p style={{ fontSize: 15, color: T.textSecondary, lineHeight: 1.55, marginTop: 8 }}>{tt.done_body}</p>
      <div
        style={{
          marginTop: 14,
          padding: "16px 20px",
          background: `linear-gradient(135deg, ${T.accentDark}, ${T.accent})`,
          borderRadius: 14,
          textAlign: "center",
          fontFamily: "var(--font-bricolage), system-ui",
          fontSize: 32,
          fontWeight: 700,
          color: "white",
          letterSpacing: 1.5,
        }}
      >
        {promoCode}
      </div>
      <p style={{ fontSize: 13, color: T.textTertiary, marginTop: 14, lineHeight: 1.6 }}>
        {fill(tt.done_share_explainer, { sharePct, shareMonths })}
      </p>
      <p style={{ fontSize: 13, color: T.textTertiary, marginTop: 18 }}>
        {tt.done_tracking_label}:
        <br />
        <code
          style={{
            display: "inline-block",
            marginTop: 6,
            padding: "8px 12px",
            background: T.surfaceElevated,
            border: `1px solid ${T.border}`,
            borderRadius: 8,
            color: T.accent,
            fontFamily: "ui-monospace, SF Mono, monospace",
            fontSize: 13,
          }}
        >
          onwavelength.space/i/{handle}
        </code>
      </p>
      <a
        href="https://getklar.org/dashboard"
        style={{
          marginTop: 24,
          display: "block",
          width: "100%",
          padding: "16px 24px",
          background: `linear-gradient(135deg, ${T.accentDark}, ${T.accent})`,
          color: "white",
          border: "none",
          borderRadius: 14,
          fontFamily: "var(--font-dm-sans), system-ui",
          fontSize: 16,
          fontWeight: 600,
          textAlign: "center",
          textDecoration: "none",
        }}
      >
        {tt.done_dashboard_cta}
      </a>
    </div>
  );
}

function pageStyle(): React.CSSProperties {
  return {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: T.bg,
    color: T.text,
    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
    padding: 24,
  };
}
function cardStyle(): React.CSSProperties {
  return {
    maxWidth: 520,
    width: "100%",
    background: T.surface,
    border: `1px solid ${T.border}`,
    borderRadius: 24,
    padding: "32px 28px",
  };
}
function h1Style(): React.CSSProperties {
  return {
    fontFamily: "var(--font-bricolage), system-ui",
    fontSize: 28,
    fontWeight: 700,
    margin: 0,
    letterSpacing: -0.6,
    color: T.text,
  };
}
function inputStyle(): React.CSSProperties {
  return {
    width: "100%",
    padding: "11px 14px",
    background: T.surfaceElevated,
    border: `1px solid ${T.border}`,
    borderRadius: 12,
    color: T.text,
    fontFamily: "var(--font-dm-sans), system-ui",
    fontSize: 15,
    outline: "none",
  };
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: T.textSecondary, marginBottom: 6 }}>{label}</label>
      {children}
    </div>
  );
}
