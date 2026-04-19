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
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
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
          <p className="text-text-secondary mb-4">No test results found.</p>
          <Link href="/test" className="text-accent hover:text-accent-light transition-colors">
            Take the IQ Test first
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-lg mx-auto">
        {/* IQ Score */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-wide uppercase mb-3">
            Your Cognitive Profile
          </p>

          <div className="relative inline-flex items-center justify-center mb-4">
            <div
              className="text-7xl sm:text-8xl font-bold font-mono"
              style={{ color: CLUSTER_COLORS[iqResults.cluster] }}
            >
              {iqResults.iq}
            </div>
          </div>

          <div className="mb-2">
            <span
              className="inline-block text-sm font-medium px-3 py-1 rounded-full"
              style={{
                background: `${CLUSTER_COLORS[iqResults.cluster]}15`,
                color: CLUSTER_COLORS[iqResults.cluster],
              }}
            >
              {iqResults.clusterLabel} — {iqResults.percentile}
            </span>
          </div>
          <p className="text-text-secondary text-sm max-w-sm mx-auto">
            {iqResults.clusterDescription}
          </p>
        </motion.div>

        {/* Category breakdown */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-10"
        >
          <h3 className="text-sm font-medium text-text-tertiary uppercase tracking-wide mb-4">
            Cognitive Dimensions
          </h3>
          <div className="space-y-3">
            {Object.entries(iqResults.categoryAccuracy).map(([cat, acc]) => (
              <div key={cat} className="flex items-center gap-3">
                <span className="text-sm text-text-secondary w-16">
                  {CATEGORY_LABELS[cat]}
                </span>
                <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${acc.accuracy * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
                <span className="text-sm font-mono text-text-tertiary w-10 text-right">
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
          className="mb-10"
        >
          <h3 className="text-sm font-medium text-text-tertiary uppercase tracking-wide mb-4">
            By Difficulty
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {([1, 2, 3] as const).map((d) => {
              const acc = iqResults.difficultyAccuracy[d];
              const labels = ["Easy", "Medium", "Hard"];
              return (
                <div key={d} className="p-4 rounded-lg border border-border text-center">
                  <div className="text-2xl font-bold font-mono text-accent mb-1">
                    {Math.round(acc.accuracy * 100)}%
                  </div>
                  <div className="text-xs text-text-tertiary">{labels[d - 1]}</div>
                  <div className="text-xs text-text-tertiary mt-1">
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
            className="mb-10"
          >
            <h3 className="text-sm font-medium text-text-tertiary uppercase tracking-wide mb-4">
              Values Profile
            </h3>
            <div className="flex flex-wrap gap-2">
              {profileTags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1.5 rounded-full border border-border text-text-secondary"
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
          className="pt-8 border-t border-border"
        >
          {claimed ? (
            <div className="p-6 rounded-lg border border-success/30 bg-success/5 text-center">
              <p className="text-success font-medium mb-2">Results saved!</p>
              <p className="text-text-secondary text-sm">
                When you download Wavelength, sign up with{" "}
                <span className="text-foreground">{email}</span> and your test
                results will be imported automatically.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-semibold mb-2">Transfer your results to the app</h3>
              <p className="text-text-secondary text-sm mb-4">
                Enter your email to save your results. When you sign up for
                Wavelength with the same email, your IQ profile and values will
                be pre-loaded.
              </p>
              <form onSubmit={handleClaim} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 bg-surface border border-border rounded-lg text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  disabled={claiming}
                  className="w-full h-12 bg-accent hover:bg-accent/90 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
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
          className="mt-8 flex gap-3"
        >
          <Link
            href="/test"
            className="flex-1 h-12 flex items-center justify-center border border-border hover:border-text-tertiary rounded-lg text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
          >
            Retake test
          </Link>
          <Link
            href="/"
            className="flex-1 h-12 flex items-center justify-center border border-border hover:border-text-tertiary rounded-lg text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
          >
            Back to home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
