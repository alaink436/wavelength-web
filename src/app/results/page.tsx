"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { IQBreakdown } from "@/lib/iqQuestions";
import { getProfileTags } from "@/lib/valuesQuestions";

const CATEGORY_LABELS: Record<string, string> = {
  logic: "Logic",
  pattern: "Pattern",
  verbal: "Verbal",
  math: "Math",
  spatial: "Spatial",
};

const CLUSTER_COLORS: Record<string, string> = {
  A: "#60a5fa",
  B: "#34d399",
  C: "#fbbf24",
  D: "#f97316",
  E: "#f472b6",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: [0, 0, 0.58, 1] as [number, number, number, number] },
  }),
};

export default function ResultsPage() {
  const [iqResults, setIqResults] = useState<IQBreakdown | null>(null);
  const [valuesProfile, setValuesProfile] = useState<Record<string, string> | null>(null);
  const [email, setEmail] = useState("");
  const [claimed, setClaimed] = useState(false);
  const [claiming, setClaiming] = useState(false);

  useEffect(() => {
    const iq = sessionStorage.getItem("iq_results");
    const values = sessionStorage.getItem("values_answers");
    if (iq) setIqResults(JSON.parse(iq));
    if (values) setValuesProfile(JSON.parse(values));
  }, []);

  const profileTags = useMemo(() => {
    if (!valuesProfile) return [];
    return getProfileTags(valuesProfile);
  }, [valuesProfile]);

  async function handleClaim(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !iqResults) return;
    setClaiming(true);

    try {
      const claimToken = crypto.randomUUID();
      const { supabase } = await import("@/lib/supabase");
      await supabase.from("web_test_results").insert({
        email,
        claim_token: claimToken,
        iq_score: iqResults.iq,
        iq_cluster: iqResults.cluster,
        iq_breakdown: iqResults,
        values_profile: valuesProfile,
      });
      setClaimed(true);
      sessionStorage.setItem("claim_token", claimToken);
    } catch {
      setClaimed(true);
    } finally {
      setClaiming(false);
    }
  }

  if (!iqResults) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-text-tertiary text-[15px] mb-4">No test results found.</p>
          <Link href="/test" className="text-accent hover:text-accent-hover text-[13px] font-[510] transition-colors">
            Take the IQ Test first
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-lg mx-auto">
        {/* IQ Score */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center mb-14"
        >
          <p className="text-accent text-[13px] font-[510] tracking-[-0.13px] mb-4">
            Your Cognitive Profile
          </p>

          <div className="relative inline-flex items-center justify-center mb-4">
            <div
              className="text-[72px] sm:text-[88px] font-[510] tracking-[-2px]"
              style={{ color: CLUSTER_COLORS[iqResults.cluster] }}
            >
              {iqResults.iq}
            </div>
          </div>

          <div className="mb-3">
            <span
              className="inline-block text-[13px] font-[510] px-3 py-1 rounded-[6px]"
              style={{
                background: `${CLUSTER_COLORS[iqResults.cluster]}12`,
                color: CLUSTER_COLORS[iqResults.cluster],
              }}
            >
              {iqResults.clusterLabel} — {iqResults.percentile}
            </span>
          </div>
          <p className="text-text-tertiary text-[15px] leading-[1.6] tracking-[-0.165px] max-w-sm mx-auto">
            {iqResults.clusterDescription}
          </p>
        </motion.div>

        {/* Category breakdown */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-12"
        >
          <h3 className="text-[12px] font-[510] text-text-quaternary tracking-[-0.13px] mb-4">
            Cognitive Dimensions
          </h3>
          <div className="space-y-3">
            {Object.entries(iqResults.categoryAccuracy).map(([cat, acc]) => (
              <div key={cat} className="flex items-center gap-3">
                <span className="text-[13px] font-[510] text-text-secondary w-16">
                  {CATEGORY_LABELS[cat]}
                </span>
                <div className="flex-1 h-[6px] bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${acc.accuracy * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
                <span className="text-[13px] font-[510] text-text-quaternary w-10 text-right tabular-nums">
                  {Math.round(acc.accuracy * 100)}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Difficulty breakdown */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mb-12"
        >
          <h3 className="text-[12px] font-[510] text-text-quaternary tracking-[-0.13px] mb-4">
            By Difficulty
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {([1, 2, 3] as const).map((d) => {
              const acc = iqResults.difficultyAccuracy[d];
              const labels = ["Easy", "Medium", "Hard"];
              return (
                <div key={d} className="p-4 rounded-[6px] border border-border bg-[rgba(255,255,255,0.02)] text-center">
                  <div className="text-[24px] font-[510] tracking-[-0.29px] text-foreground mb-1 tabular-nums">
                    {Math.round(acc.accuracy * 100)}%
                  </div>
                  <div className="text-[12px] font-[510] text-text-quaternary">{labels[d - 1]}</div>
                  <div className="text-[12px] text-text-quaternary/60 mt-1 tabular-nums">
                    {acc.correct}/{acc.total}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Values tags */}
        {profileTags.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mb-12"
          >
            <h3 className="text-[12px] font-[510] text-text-quaternary tracking-[-0.13px] mb-4">
              Values Profile
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {profileTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[13px] font-[510] px-3 py-1.5 rounded-[6px] border border-border bg-[rgba(255,255,255,0.02)] text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Claim / transfer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="pt-10 border-t border-border-subtle"
        >
          {claimed ? (
            <div className="p-5 rounded-[8px] border border-success/20 bg-success/[0.04]">
              <p className="text-success text-[14px] font-[510] mb-2">Results saved!</p>
              <p className="text-text-tertiary text-[14px] leading-[1.6]">
                When you download Wavelength, sign up with{" "}
                <span className="text-foreground">{email}</span> and your test
                results will be imported automatically.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-[18px] font-[510] tracking-[-0.2px] mb-2">Transfer your results to the app</h3>
              <p className="text-text-tertiary text-[15px] leading-[1.6] tracking-[-0.165px] mb-5">
                Enter your email to save your results. When you sign up for
                Wavelength with the same email, your IQ profile and values will
                be pre-loaded.
              </p>
              <form onSubmit={handleClaim} className="space-y-2.5">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 px-3.5 bg-[rgba(255,255,255,0.02)] border border-border rounded-[6px] text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={claiming}
                  className="w-full h-10 bg-accent hover:bg-accent-hover disabled:opacity-40 text-white text-[13px] font-[510] rounded-[6px] transition-colors"
                >
                  {claiming ? "Saving..." : "Save & join waitlist"}
                </button>
              </form>
            </>
          )}
        </motion.div>

        {/* Share / retake */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="mt-6 flex gap-2"
        >
          <Link
            href="/test"
            className="flex-1 h-10 flex items-center justify-center border border-border bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] rounded-[6px] text-[13px] font-[510] text-text-secondary hover:text-foreground transition-all"
          >
            Retake test
          </Link>
          <Link
            href="/"
            className="flex-1 h-10 flex items-center justify-center border border-border bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] rounded-[6px] text-[13px] font-[510] text-text-secondary hover:text-foreground transition-all"
          >
            Back to home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
