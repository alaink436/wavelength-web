-- Referral & Influencer-Tracking Schema for On Wavelength
-- Run via Supabase CLI or paste into Supabase SQL Editor.
-- Date: 2026-05-11

-- =============================================================
-- 1. referral_clicks  —  every click on /i/<handle>
-- =============================================================
CREATE TABLE IF NOT EXISTS public.referral_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  influencer_handle text NOT NULL,
  user_agent text,
  referrer text,
  app text NOT NULL DEFAULT 'wavelength',
  ip_hash text,  -- sha256(ip + salt), set server-side; nullable while client-side logs
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS referral_clicks_handle_idx
  ON public.referral_clicks (influencer_handle, created_at DESC);
CREATE INDEX IF NOT EXISTS referral_clicks_ip_hash_idx
  ON public.referral_clicks (ip_hash, created_at DESC)
  WHERE ip_hash IS NOT NULL;

-- RLS: anyone can INSERT (anon clicks), nobody can SELECT except service_role
ALTER TABLE public.referral_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log a click"
  ON public.referral_clicks FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- =============================================================
-- 2. referrals  —  user_id ↔ influencer (set after sign-up)
-- =============================================================
CREATE TABLE IF NOT EXISTS public.referrals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  influencer_handle text NOT NULL,
  source text NOT NULL CHECK (source IN ('universal_link', 'promo_code', 'manual')),
  promo_code text,
  app text NOT NULL DEFAULT 'wavelength',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS referrals_user_app_idx
  ON public.referrals (user_id, app);
CREATE INDEX IF NOT EXISTS referrals_handle_idx
  ON public.referrals (influencer_handle, created_at DESC);

ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see their own referral"
  ON public.referrals FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert their own referral"
  ON public.referrals FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- =============================================================
-- 3. referral_conversions  —  one row per active Premium sub
-- =============================================================
CREATE TABLE IF NOT EXISTS public.referral_conversions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  influencer_handle text NOT NULL,
  app text NOT NULL DEFAULT 'wavelength',
  rc_subscriber_id text,  -- RevenueCat App-User-ID
  product_id text,        -- e.g. wavelength_pro_monthly
  first_subscribe_at timestamptz NOT NULL DEFAULT now(),
  last_renewal_at timestamptz,
  expires_at timestamptz,
  revenue_total_cents int NOT NULL DEFAULT 0,
  influencer_share_cents int NOT NULL DEFAULT 0,
  share_pct int NOT NULL DEFAULT 50,
  share_duration_months int NOT NULL DEFAULT 24,
  active boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS referral_conversions_user_idx
  ON public.referral_conversions (user_id, app);
CREATE INDEX IF NOT EXISTS referral_conversions_handle_idx
  ON public.referral_conversions (influencer_handle, first_subscribe_at DESC);

ALTER TABLE public.referral_conversions ENABLE ROW LEVEL SECURITY;
-- Only service_role can SELECT/INSERT/UPDATE (via RevenueCat webhook Edge Function)
-- → no RLS policies for anon/authenticated; default deny.

-- =============================================================
-- 4. Aggregate view  —  per influencer dashboard
-- =============================================================
CREATE OR REPLACE VIEW public.influencer_dashboard AS
SELECT
  c.influencer_handle,
  c.app,
  COUNT(DISTINCT c.id) AS click_count,
  COUNT(DISTINCT r.user_id) AS install_count,
  COUNT(DISTINCT conv.user_id) AS premium_count,
  COALESCE(SUM(conv.revenue_total_cents), 0) / 100.0 AS revenue_total,
  COALESCE(SUM(conv.influencer_share_cents), 0) / 100.0 AS influencer_share_total
FROM public.referral_clicks c
LEFT JOIN public.referrals r
  ON r.influencer_handle = c.influencer_handle AND r.app = c.app
LEFT JOIN public.referral_conversions conv
  ON conv.influencer_handle = c.influencer_handle AND conv.app = c.app
GROUP BY c.influencer_handle, c.app;

GRANT SELECT ON public.influencer_dashboard TO service_role;
