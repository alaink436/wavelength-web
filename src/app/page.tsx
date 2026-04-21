"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease },
  }),
};

const DIMENSIONS = [
  { label: "Logic", value: 87, color: "#6366f1" },
  { label: "Pattern", value: 74, color: "#818cf8" },
  { label: "Verbal", value: 92, color: "#3b82f6" },
  { label: "Math", value: 69, color: "#60a5fa" },
  { label: "Spatial", value: 81, color: "#a78bfa" },
];

function PhoneMockup() {
  return (
    // @ts-expect-error -- telephone web component
    <iphone-16-max mode="dark" style={{ "--width": "260px" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a10",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        {/* App header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "56px 24px 12px",
          }}
        >
          <span style={{ fontSize: 10, fontWeight: 510, color: "#55555f" }}>
            wavelength
          </span>
          <span style={{ fontSize: 10, fontWeight: 510, color: "#6366f1" }}>
            IQ 128
          </span>
        </div>

        {/* Profile card */}
        <div style={{ padding: "0 16px", flex: 1 }}>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366f1, #3b82f6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 590,
                  color: "white",
                }}
              >
                S
              </div>
              <div>
                <div
                  style={{ fontSize: 13, fontWeight: 510, color: "#ededf0" }}
                >
                  Sarah, 26
                </div>
                <div style={{ fontSize: 10, color: "#55555f" }}>92% match</div>
              </div>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <div
                  style={{ fontSize: 18, fontWeight: 510, color: "#6366f1" }}
                >
                  132
                </div>
                <div style={{ fontSize: 9, color: "#55555f" }}>IQ</div>
              </div>
            </div>

            {[
              { label: "Logic", value: 87, color: "#6366f1" },
              { label: "Pattern", value: 74, color: "#818cf8" },
              { label: "Verbal", value: 92, color: "#3b82f6" },
              { label: "Math", value: 69, color: "#60a5fa" },
              { label: "Spatial", value: 81, color: "#a78bfa" },
            ].map((d) => (
              <div
                key={d.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 510,
                    color: "#55555f",
                    width: 40,
                  }}
                >
                  {d.label}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 3,
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${d.value}%`,
                      height: "100%",
                      background: d.color,
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                fontSize: 9,
                fontWeight: 510,
                color: "#55555f",
                marginBottom: 8,
              }}
            >
              Shared values
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {["Deep thinker", "Night owl", "No kids", "Ambitious"].map(
                (t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 9,
                      fontWeight: 510,
                      padding: "2px 8px",
                      borderRadius: 100,
                      background: "rgba(99,102,241,0.08)",
                      color: "rgba(99,102,241,0.8)",
                      border: "1px solid rgba(99,102,241,0.1)",
                    }}
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Connect button */}
          <div
            style={{
              borderRadius: 12,
              background: "linear-gradient(90deg, #6366f1, #3b82f6)",
              padding: 1,
            }}
          >
            <div
              style={{
                borderRadius: 11,
                background: "#0c0c10",
                padding: "10px 16px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 510,
                  background: "linear-gradient(90deg, #6366f1, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Connect
              </span>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "16px 24px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {["Discover", "Matches", "Profile"].map((tab, i) => (
            <span
              key={tab}
              style={{
                fontSize: 9,
                fontWeight: 510,
                color: i === 0 ? "#6366f1" : "#55555f",
              }}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
    </iphone-16-max>
  );
}

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
      await supabase
        .from("waitlist")
        .insert({ email, city, source: "landing" });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen grain">
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(5, 5, 7, 0.85)",
          backdropFilter: "blur(16px) saturate(140%)",
        }}
      >
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center">
              <svg
                viewBox="0 0 16 16"
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 8c2-4 4-4 6 0s4 4 6 0" />
              </svg>
            </div>
            <span className="text-[15px] font-[590] tracking-[-0.3px]">
              wavelength
            </span>
          </div>
          <Link
            href="/test"
            className="text-text-tertiary text-[13px] font-[510] hover:text-foreground transition-colors"
          >
            Take the test
          </Link>
        </div>
      </nav>

      {/* ═══ Hero ═══ */}
      <section className="relative pt-32 sm:pt-44 pb-16 sm:pb-24 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            {/* Text */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-text-quaternary text-[13px] font-[510] tracking-[0.12em] uppercase mb-5"
              >
                IQ-based dating — early access
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease }}
                className="text-[clamp(42px,8vw,68px)] font-[590] leading-[0.95] tracking-[-2px] mb-6"
              >
                Find someone
                <br />
                <span className="gradient-heading">who thinks</span>
                <br />
                like you.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease }}
                className="text-text-tertiary text-[16px] sm:text-[17px] leading-[1.7] max-w-[42ch] mb-8"
              >
                Not swipes. Not photo algorithms. Wavelength matches you by
                cognitive profile and shared values. Take a 15-minute IQ test,
                meet people in your range.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease }}
                className="flex gap-3 mb-8"
              >
                <Link
                  href="/test"
                  className="inline-flex items-center justify-center h-11 px-6 bg-gradient-to-r from-accent to-accent2 text-white text-[14px] font-[510] rounded-lg transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.3)] active:scale-[0.98]"
                >
                  Take the IQ test
                </Link>
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center h-11 px-6 border border-border rounded-lg text-text-secondary text-[14px] font-[510] hover:text-foreground hover:border-text-quaternary transition-all"
                >
                  Join waitlist
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center gap-5 text-text-quaternary text-[12px] font-[510]"
              >
                <span>Free forever</span>
                <span className="w-px h-3 bg-border" />
                <span>15 min test</span>
                <span className="w-px h-3 bg-border" />
                <span>Transfers to app</span>
              </motion.div>
            </div>

            {/* Phone + mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease }}
              className="hidden lg:block relative shrink-0"
            >
              {/* Mascot peeking from behind phone */}
              <img
                src="/mascots/curious.png"
                alt=""
                className="absolute -left-14 bottom-12 w-24 h-24 object-contain z-10"
              />
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[900px] mx-auto px-5 sm:px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ═══ How it works ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-text-quaternary text-[13px] font-[510] tracking-[0.12em] uppercase mb-8"
          >
            How it works
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Take the IQ test",
                desc: "40 adaptive questions across logic, pattern, verbal, math, and spatial thinking. Adjusts to your level in real time.",
                mascot: "/mascots/thinking.png",
              },
              {
                title: "Answer real scenarios",
                desc: "16 values questions about dealbreakers and priorities. No abstract personality labels — real situations you'd face.",
                mascot: "/mascots/pointing.png",
              },
              {
                title: "Meet your match",
                desc: "See people in your cognitive range who share your values. Better first conversations, guaranteed.",
                mascot: "/mascots/happy.png",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex flex-col"
              >
                <div className="mb-5">
                  <img
                    src={item.mascot}
                    alt=""
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-[17px] font-[590] tracking-[-0.3px] mb-2">
                  {item.title}
                </h3>
                <p className="text-text-tertiary text-[14px] leading-[1.7]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[900px] mx-auto px-5 sm:px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ═══ Cognitive Profile Preview ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="grid lg:grid-cols-[1fr,1fr] gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <p className="text-text-quaternary text-[13px] font-[510] tracking-[0.12em] uppercase mb-5">
                Your cognitive profile
              </p>
              <h2 className="text-[clamp(28px,5vw,40px)] font-[590] tracking-[-1.2px] leading-[1.1] mb-5">
                Five dimensions.
                <br />
                <span className="gradient-heading">One score.</span>
              </h2>
              <p className="text-text-tertiary text-[15px] leading-[1.7] max-w-[44ch] mb-6">
                Your IQ isn&apos;t a single number — it&apos;s a shape. Logic,
                pattern recognition, verbal reasoning, math, and spatial
                thinking. The test maps all five.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/mascots/shy.png"
                  alt=""
                  className="w-12 h-12 object-contain"
                />
                <p className="text-text-quaternary text-[13px] leading-[1.5]">
                  Your profile is unique — no two results look the same.
                </p>
              </div>
            </motion.div>

            {/* Right — profile card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="glass-card p-7 sm:p-8"
            >
              <div className="flex items-center justify-between mb-7">
                <div>
                  <p className="text-text-quaternary text-[11px] font-[510] tracking-[0.5px] uppercase mb-1">
                    Example Result
                  </p>
                  <p className="text-[28px] font-[590] tracking-[-0.7px]">
                    IQ <span className="gradient-heading">128</span>
                  </p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-[12px] font-[510]">
                  Top 4%
                </span>
              </div>

              <div className="space-y-4">
                {DIMENSIONS.map((dim, i) => (
                  <motion.div
                    key={dim.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-[13px] font-[510] text-text-secondary w-16">
                      {dim.label}
                    </span>
                    <div className="flex-1 h-2 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${dim.color}, ${dim.color}88)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${dim.value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + 0.1 * i,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                    <span className="text-[13px] font-[510] text-text-quaternary w-8 text-right tabular-nums">
                      {dim.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[900px] mx-auto px-5 sm:px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ═══ Why it works ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-text-quaternary text-[13px] font-[510] tracking-[0.12em] uppercase mb-8"
          >
            Why it works
          </motion.p>

          <div className="space-y-0">
            {[
              {
                q: "40 adaptive questions",
                a: "The test gets harder or easier based on your answers. Your final score is precise, not an average.",
              },
              {
                q: "5 cognitive dimensions",
                a: "Logic, pattern, verbal, math, spatial. You might be strong in three and average in two — that shape matters.",
              },
              {
                q: "16 values scenarios",
                a: "Real dealbreakers and priorities. Not \"do you like hiking\" — more like \"your partner got a job offer in another country.\"",
              },
              {
                q: "Cognitive range matching",
                a: "Research shows couples with similar cognitive profiles have deeper conversations and more lasting relationships.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="py-5 border-b border-border last:border-0"
              >
                <div className="flex gap-4">
                  <span className="text-accent text-[13px] font-[590] tabular-nums shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-[590] tracking-[-0.2px] mb-1">
                      {item.q}
                    </h3>
                    <p className="text-text-tertiary text-[14px] leading-[1.65]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA with mascot ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="h-px bg-border mb-16 sm:mb-24" />

          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="shrink-0"
            >
              <img
                src="/mascots/welcome.png"
                alt="Wavelength mascot"
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <h2 className="text-[clamp(28px,5vw,40px)] font-[590] tracking-[-1.2px] leading-[1.1] mb-4">
                Curious where
                <br />
                <span className="gradient-heading">you land?</span>
              </h2>
              <p className="text-text-tertiary text-[15px] leading-[1.7] max-w-[42ch] mb-6">
                Forty questions. Five dimensions. Takes about fifteen minutes.
                Your results transfer to the app when you download.
              </p>
              <Link
                href="/test"
                className="inline-flex items-center justify-center h-11 px-6 bg-gradient-to-r from-accent to-accent2 text-white text-[14px] font-[510] rounded-lg transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.3)] active:scale-[0.98]"
              >
                Start the test
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Waitlist ═══ */}
      <section id="waitlist" className="py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="h-px bg-border mb-16 sm:mb-24" />

          <div className="grid lg:grid-cols-[1fr,380px] gap-12 lg:gap-20">
            {/* Left */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <p className="text-text-quaternary text-[13px] font-[510] tracking-[0.12em] uppercase mb-5">
                Waitlist
              </p>
              <h2 className="text-[clamp(28px,5vw,40px)] font-[590] tracking-[-1.2px] leading-[1.1] mb-5">
                Get early access.
              </h2>
              <p className="text-text-tertiary text-[15px] leading-[1.7] max-w-[44ch] mb-8">
                We launch city by city. Drop your email and city so we know when
                to open your area. Early users get priority matching.
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="/mascots/flying.png"
                  alt=""
                  className="w-14 h-14 object-contain"
                />
                <p className="text-text-quaternary text-[13px] leading-[1.5]">
                  We&apos;ll only email you when your city goes live.
                </p>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              {submitted ? (
                <div className="glass-card p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-5 h-5 text-success"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-[15px] font-[590] mb-1">
                    You&apos;re on the list
                  </p>
                  <p className="text-text-quaternary text-[13px]">
                    We&apos;ll reach out when your area opens.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleWaitlist} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 px-4 bg-[rgba(255,255,255,0.03)] border border-border rounded-lg text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/40 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="City (optional)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full h-11 px-4 bg-[rgba(255,255,255,0.03)] border border-border rounded-lg text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/40 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 bg-gradient-to-r from-accent to-accent2 text-white text-[14px] font-[510] rounded-lg transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] disabled:opacity-40 active:scale-[0.98]"
                  >
                    {loading ? "Joining..." : "Join waitlist"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-text-quaternary">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent/60 to-accent2/40 flex items-center justify-center">
              <svg
                viewBox="0 0 16 16"
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 8c2-4 4-4 6 0s4 4 6 0" />
              </svg>
            </div>
            <span className="text-[13px] font-[510]">wavelength</span>
          </div>
          <span className="text-text-quaternary/40 text-[12px] font-[510]">
            Date smarter.
          </span>
        </div>
      </footer>
    </main>
  );
}
