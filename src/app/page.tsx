"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const FEATURES = [
  {
    title: "Cognitive Matching",
    description:
      "Our adaptive IQ test maps your thinking across 5 dimensions — logic, pattern recognition, verbal reasoning, math, and spatial thinking.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.3 24.3 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.3 48.3 0 0 1 12 21a48.3 48.3 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Values Alignment",
    description:
      "16 scenario-based questions reveal what actually matters to you — from dealbreakers to life priorities. No generic personality labels.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Your Spectrum",
    description:
      "You only see people in your cognitive range. Not exclusion — precision. Everyone matches with someone who gets how they think.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "40", label: "Adaptive questions" },
  { value: "5", label: "Cognitive dimensions" },
  { value: "16", label: "Values scenarios" },
  { value: "∞", label: "Better conversations" },
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
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold tracking-tight text-[15px]">wavelength</span>
          <Link
            href="/test"
            className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
          >
            Take the test
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-accent text-sm font-medium tracking-wide uppercase mb-4"
          >
            Dating, reimagined
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-6xl font-bold leading-[1.08] tracking-tight mb-6"
          >
            Find someone who
            <br />
            <span className="text-accent">thinks like you.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
          >
            Wavelength matches you by cognitive profile and values — not just
            photos. Take our adaptive IQ test, answer real scenarios, and meet
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
              className="inline-flex items-center justify-center h-12 px-8 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors text-[15px]"
            >
              Take the IQ Test — free
            </Link>
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center h-12 px-8 border border-border hover:border-text-tertiary text-foreground font-medium rounded-lg transition-colors text-[15px]"
            >
              Join the waitlist
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-text-tertiary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
          >
            How Wavelength works
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-text-secondary mb-16 max-w-lg"
          >
            Three layers of compatibility. One smarter match.
          </motion.p>

          <div className="grid gap-12 sm:gap-16">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-muted text-accent flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-text-secondary leading-relaxed max-w-lg">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-y border-border bg-surface/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
          >
            Curious where you land?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-text-secondary mb-8 max-w-md mx-auto"
          >
            Take our adaptive IQ test right now. 40 questions, 5 cognitive
            dimensions. Your results transfer directly to the app when you
            download.
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
              className="inline-flex items-center justify-center h-14 px-10 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors text-base"
            >
              Start the IQ Test
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24 px-6">
        <div className="max-w-md mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
          >
            Get early access
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-text-secondary mb-8"
          >
            We launch city by city. Enter your email and city so we know when to
            open your area.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-lg border border-success/30 bg-success/5"
            >
              <p className="text-success font-medium">
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
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 bg-surface border border-border rounded-lg text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="text"
                placeholder="Your city (optional)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full h-12 px-4 bg-surface border border-border rounded-lg text-foreground placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-accent hover:bg-accent/90 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
              >
                {loading ? "Joining..." : "Join waitlist"}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-text-tertiary text-sm">
          <span>wavelength</span>
          <span>Date smarter.</span>
        </div>
      </footer>
    </main>
  );
}
