"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5m-4.75-11.396c.251.023.501.05.75.082M5 14.5l-1.43 1.43a2.25 2.25 0 0 0 1.591 3.841h13.678a2.25 2.25 0 0 0 1.591-3.841L19 14.5m-14 0 4.09-4.09M19 14.5l-4.09-4.09m0 0L14 9.5m.91.91-1.82 1.82" />
      </svg>
    ),
    title: "Cognitive Matching",
    description:
      "Our adaptive test maps your thinking across five dimensions — logic, pattern recognition, verbal reasoning, math, and spatial thinking.",
    gradient: "from-blue-500/10 to-indigo-500/5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Values Alignment",
    description:
      "Sixteen scenario-based questions reveal what actually matters to you — from dealbreakers to life priorities. Real situations, real answers.",
    gradient: "from-violet-500/10 to-purple-500/5",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: "Your Spectrum",
    description:
      "You only see people in your cognitive range. Not exclusion — precision. Everyone matches with someone who gets how they think.",
    gradient: "from-cyan-500/10 to-blue-500/5",
  },
];

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const { supabase } = await import("@/lib/supabase");
      await supabase.from("waitlist").insert({ email, city, source: "landing" });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-background/70 backdrop-blur-xl">
        <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-[15px] font-[510] tracking-[-0.3px]">wavelength</span>
          <Link
            href="/test"
            className="text-[13px] font-[510] text-text-secondary hover:text-foreground transition-colors"
          >
            Take the test
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 sm:pt-44 pb-28 px-6">
        {/* Background glow */}
        <div className="hero-glow" />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        <div className="max-w-[1100px] mx-auto relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[12px] font-[510] tracking-[-0.13px]">
              Now in early access
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="gradient-text text-[clamp(40px,7vw,72px)] font-[510] leading-[1.0] tracking-[-2px] mb-6 max-w-3xl"
          >
            Find someone who
            <br />
            thinks like you.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-text-tertiary text-[17px] sm:text-[19px] font-normal leading-[1.6] tracking-[-0.2px] max-w-lg mb-12"
          >
            Wavelength matches you by cognitive profile and values — not just
            photos. Take the adaptive IQ test, answer real scenarios, meet
            people on your wavelength.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/test"
              className="glow-button relative z-10 inline-flex items-center justify-center h-11 px-6 bg-gradient-to-r from-accent to-indigo-500 hover:from-accent-hover hover:to-indigo-400 text-white text-[13px] font-[510] rounded-[8px] transition-all"
            >
              Take the IQ test — free
              <svg className="w-3.5 h-3.5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center h-11 px-6 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.14)] text-text-secondary hover:text-foreground text-[13px] font-[510] rounded-[8px] transition-all"
            >
              Join the waitlist
            </a>
          </motion.div>

          {/* Floating visual element — abstract wavelength */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hidden lg:block absolute right-0 top-8"
          >
            <div className="relative w-[320px] h-[320px]">
              {/* Orbit rings */}
              <div className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.04)] float-slow" />
              <div className="absolute inset-6 rounded-full border border-accent/[0.08] float-slower" />
              <div className="absolute inset-12 rounded-full border border-indigo-500/[0.06] float-slow" />

              {/* Core glow */}
              <div className="absolute inset-[100px] rounded-full bg-gradient-to-br from-accent/20 to-indigo-500/10 blur-xl" />
              <div className="absolute inset-[120px] rounded-full bg-gradient-to-br from-accent/30 to-indigo-500/20 blur-sm" />

              {/* Floating dots */}
              <div className="absolute top-[60px] left-[40px] w-2 h-2 rounded-full bg-accent/40 float-slow" />
              <div className="absolute top-[180px] right-[30px] w-1.5 h-1.5 rounded-full bg-indigo-400/50 float-slower" />
              <div className="absolute bottom-[50px] left-[80px] w-1 h-1 rounded-full bg-cyan-400/40 float-slow" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats — with gradient border */}
      <section className="relative px-6 py-16">
        <div className="shimmer-line absolute top-0 left-0 right-0 h-px bg-border-subtle" />
        <div className="max-w-[900px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "40", label: "Adaptive questions" },
            { value: "5", label: "Cognitive dimensions" },
            { value: "16", label: "Values scenarios" },
            { value: "∞", label: "Better conversations" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center p-5 rounded-[10px] bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.08)] transition-colors"
            >
              <div className="text-[36px] font-[510] tracking-[-1px] text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-text-quaternary text-[12px] font-[510] tracking-[-0.13px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="shimmer-line absolute bottom-0 left-0 right-0 h-px bg-border-subtle" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* Features — bento cards with gradient borders */}
      <section className="py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-accent text-[13px] font-[510] tracking-[-0.13px] mb-4">
              How it works
            </p>
            <h2 className="text-[36px] sm:text-[44px] font-[510] tracking-[-1.2px] leading-[1.05] mb-4">
              Three layers of
              <br />
              <span className="gradient-text">compatibility.</span>
            </h2>
            <p className="text-text-tertiary text-[16px] font-normal tracking-[-0.165px] leading-[1.6] max-w-md mx-auto">
              Not swipe luck. Not an algorithm guessing from your photos.
              Real cognitive and values alignment.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="gradient-border p-6 sm:p-7 group hover:bg-[rgba(255,255,255,0.03)] transition-colors"
              >
                <div className={`w-10 h-10 rounded-[10px] bg-gradient-to-br ${f.gradient} border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-text-tertiary group-hover:text-accent transition-colors mb-5`}>
                  {f.icon}
                </div>
                <div className="text-text-quaternary text-[11px] font-[510] tracking-[0.5px] uppercase mb-3">
                  Step 0{i + 1}
                </div>
                <h3 className="text-[18px] font-[590] tracking-[-0.2px] leading-[1.33] mb-3">
                  {f.title}
                </h3>
                <p className="text-text-tertiary text-[14px] font-normal leading-[1.65] tracking-[-0.14px]">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual break — brain dimension graphic */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="gradient-border p-8 sm:p-10"
          >
            <div className="grid sm:grid-cols-5 gap-3">
              {[
                { label: "Logic", pct: 85, color: "#3b82f6" },
                { label: "Pattern", pct: 72, color: "#6366f1" },
                { label: "Verbal", pct: 91, color: "#8b5cf6" },
                { label: "Math", pct: 68, color: "#a78bfa" },
                { label: "Spatial", pct: 77, color: "#c4b5fd" },
              ].map((dim, i) => (
                <motion.div
                  key={dim.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="relative mx-auto w-14 h-14 mb-3">
                    <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                      <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
                      <motion.circle
                        cx="28" cy="28" r="24"
                        fill="none"
                        stroke={dim.color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 24}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 24 * (1 - dim.pct / 100) }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + 0.15 * i, duration: 1, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[12px] font-[510] tabular-nums" style={{ color: dim.color }}>
                      {dim.pct}
                    </span>
                  </div>
                  <span className="text-[12px] font-[510] text-text-quaternary">{dim.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-text-quaternary text-[12px] font-[510] mt-6">
              Example cognitive profile — yours will be unique
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6">
        {/* Background glow for CTA */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-accent/[0.04] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[640px] mx-auto text-center relative">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-[36px] sm:text-[44px] font-[510] tracking-[-1.2px] leading-[1.05] mb-4"
          >
            Curious where
            <br />
            <span className="gradient-text">you land?</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-text-tertiary text-[16px] leading-[1.6] tracking-[-0.165px] mb-10"
          >
            Forty questions. Five cognitive dimensions. Your results transfer to
            the app when you download.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Link
              href="/test"
              className="glow-button relative z-10 inline-flex items-center justify-center h-12 px-8 bg-gradient-to-r from-accent to-indigo-500 hover:from-accent-hover hover:to-indigo-400 text-white text-[14px] font-[510] rounded-[8px] transition-all"
            >
              Start the test
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="relative py-28 px-6">
        <div className="shimmer-line absolute top-0 left-0 right-0 h-px bg-border-subtle" />
        <div className="max-w-[420px] mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-[28px] font-[510] tracking-[-0.5px] leading-[1.2] mb-3"
          >
            Get early access
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-text-tertiary text-[15px] leading-[1.6] tracking-[-0.165px] mb-8"
          >
            We launch city by city. Drop your email and city so we know when to
            open your area.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="gradient-border p-5"
            >
              <p className="text-success text-[14px] font-[510]">
                You&apos;re on the list. We&apos;ll reach out when we launch in your area.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              onSubmit={handleWaitlist}
              className="space-y-2.5"
            >
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-3.5 bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.08)] rounded-[8px] text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/50 focus:bg-[rgba(255,255,255,0.04)] transition-all"
              />
              <input
                type="text"
                placeholder="City (optional)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full h-11 px-3.5 bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.08)] rounded-[8px] text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/50 focus:bg-[rgba(255,255,255,0.04)] transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="glow-button relative z-10 w-full h-11 bg-gradient-to-r from-accent to-indigo-500 hover:from-accent-hover hover:to-indigo-400 disabled:opacity-40 text-white text-[13px] font-[510] rounded-[8px] transition-all"
              >
                {loading ? "Joining..." : "Join waitlist"}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-8 px-6">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between text-text-quaternary text-[13px] font-[510]">
          <span>wavelength</span>
          <span className="text-text-quaternary/50">Date smarter.</span>
        </div>
      </footer>
    </main>
  );
}
