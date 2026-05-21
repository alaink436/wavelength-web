// Brand presets — Wavelength-only mirror of klar/_shared/brands.ts. Kept as
// a multi-brand record so the shared OnboardingShell from klar can be reused
// 1:1 without slimming its type signature. domain reflects the real public
// host (onwavelength.space), not the alias listed in klar's brands.ts.

export interface SecondStream {
  kind: "yarn-shop" | "album-buy";
  label: string;
  sublabel: string;
  rateLabel: string;
  basketLabel: string;
  basketUnit: string;
  defaultRate: number;
  defaultBasket: number;
  rateMin: number;
  rateMax: number;
  rateStep: number;
  basketMin: number;
  basketMax: number;
  basketStep: number;
  commissionRate: number;
  hint: string;
  recurring: boolean;
}

export interface Brand {
  key: BrandKey;
  name: string;
  short: string;
  accent: string;
  vibe: string;
  productLine: string;
  audience: string;
  productPrice: string;
  productPriceShort: string;
  commissionPct: number;
  attributionMonths: number;
  streamLabel: string;
  iconUrl: string;
  assetsDriveUrl?: string | null;
  mascot: string | null;
  mascotHappy?: string | null;
  mascotSurprised?: string | null;
  glyph: { letter: string; italic: boolean };
  pdfTitle: string;
  pdfHint: string;
  promoCode: string;
  domain: string;
  handTagline: string;
  secondStream?: SecondStream;
}

export type BrandKey = "wavelength";

export const BRANDS: Record<BrandKey, Brand> = {
  wavelength: {
    key: "wavelength",
    name: "Wavelength",
    short: "Wavelength",
    accent: "Blue",
    vibe: "Calm productivity, modern dark SaaS",
    productLine: "Focus + deep-work tracker",
    audience: "Indie hackers, makers, focused professionals",
    productPrice: "8 €/mo",
    productPriceShort: "8 €",
    commissionPct: 30,
    attributionMonths: 12,
    streamLabel: "Premium-Abos",
    iconUrl: "/icons/wavelength.webp",
    assetsDriveUrl: "https://drive.google.com/drive/folders/1TZREwEopAZkJE_XkbCpTAKfScUpevWg1?usp=sharing",
    mascot: null,
    glyph: { letter: "W", italic: false },
    pdfTitle: "Creator Brief",
    pdfHint: "Productivity hooks, before/after carousels, weekly retro template",
    promoCode: "NINA30",
    domain: "onwavelength.space",
    handTagline: "stay in flow",
  },
};

export const STEPS = [
  { key: "welcome",  label: "Willkommen" },
  { key: "tracking", label: "Tracking" },
  { key: "payout",   label: "Auszahlung" },
  { key: "live",     label: "Live" },
] as const;

export type StepKey = (typeof STEPS)[number]["key"];
