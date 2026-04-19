"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: [0, 0, 0.58, 1] as [number, number, number, number] },
  }),
};

const FEATURES = [
  {
    title: "Cognitive Matching",
    description:
      "Our adaptive test maps your thinking across five dimensions — logic, pattern recognition, verbal reasoning, math, and spatial thinking. The questions adjust to your level in real time.",
  },
  {
    title: "Values Alignment",
    description:
      "Sixteen scenario-based questions reveal what actually matters to you — from dealbreakers to life priorities. No generic personality labels. Real situations, real answers.",
  },
  {
    title: "Your Spectrum",
    description:
      "You only see people in your cognitive range. Not exclusion — precision. Everyone matches with someone who gets how they think.",
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
    <main className="min-h-screen">
      {/* Nav — Linear-style: near-invisible, ultra-minimal */}
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

      {/* Hero — Linear-style: massive type, compressed tracking, generous dark space */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-accent text-[13px] font-[510] tracking-[-0.13px] mb-5"
          >
            Date smarter.
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-[clamp(36px,6vw,64px)] font-[510] leading-[1.0] tracking-[-1.4px] mb-6 max-w-2xl"
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
            className="text-text-tertiary text-[18px] font-normal leading-[1.6] tracking-[-0.165px] max-w-lg mb-12"
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
              className="inline-flex items-center justify-center h-10 px-5 bg-accent hover:bg-accent-hover text-white text-[13px] font-[510] rounded-[6px] transition-colors"
            >
              Take the IQ test — free
            </Link>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center h-10 px-5 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-border text-text-secondary hover:text-foreground text-[13px] font-[510] rounded-[6px] transition-all"
            >
              Join the waitlist
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats — numbers in a minimal row */}
      <section className="border-y border-border-subtle py-14 px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10">
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
              className="text-center"
            >
              <div className="text-[32px] font-[510] tracking-[-0.7px] text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-text-quaternary text-[13px] font-[510] tracking-[-0.13px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features — asymmetric, no cards, just content */}
      <section className="py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-[32px] font-[510] tracking-[-0.7px] leading-[1.13] mb-4"
          >
            How it works
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-text-tertiary text-[15px] font-normal tracking-[-0.165px] leading-[1.6] mb-20 max-w-md"
          >
            Three layers of compatibility. One smarter match.
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-16 sm:gap-10">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="text-text-quaternary text-[12px] font-[510] mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-[20px] font-[590] tracking-[-0.24px] leading-[1.33] mb-3">
                  {f.title}
                </h3>
                <p className="text-text-tertiary text-[15px] font-normal leading-[1.6] tracking-[-0.165px]">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA block — elevated surface */}
      <section className="py-28 px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-[32px] font-[510] tracking-[-0.7px] leading-[1.13] mb-4"
          >
            Curious where you land?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-text-tertiary text-[15px] leading-[1.6] tracking-[-0.165px] mb-10"
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
              className="inline-flex items-center justify-center h-11 px-7 bg-accent hover:bg-accent-hover text-white text-[14px] font-[510] rounded-[6px] transition-colors"
            >
              Start the test
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-28 px-6 border-t border-border-subtle">
        <div className="max-w-[400px] mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-[24px] font-[510] tracking-[-0.29px] leading-[1.33] mb-3"
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
              className="p-5 rounded-[8px] border border-success/20 bg-success/[0.04]"
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
                className="w-full h-10 px-3.5 bg-[rgba(255,255,255,0.02)] border border-border rounded-[6px] text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/50 transition-colors"
              />
              <input
                type="text"
                placeholder="City (optional)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full h-10 px-3.5 bg-[rgba(255,255,255,0.02)] border border-border rounded-[6px] text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full h-10 bg-accent hover:bg-accent-hover disabled:opacity-40 text-white text-[13px] font-[510] rounded-[6px] transition-colors"
              >
                {loading ? "Joining..." : "Join waitlist"}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* Footer — ultra-minimal */}
      <footer className="border-t border-border-subtle py-8 px-6">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between text-text-quaternary text-[13px] font-[510]">
          <span>wavelength</span>
          <span className="text-text-quaternary/60">Date smarter.</span>
        </div>
      </footer>
    </main>
  );
}
