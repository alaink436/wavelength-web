"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const DIMENSIONS = [
  { label: "Logic", value: 87, color: "#6366f1" },
  { label: "Pattern", value: 74, color: "#818cf8" },
  { label: "Verbal", value: 92, color: "#3b82f6" },
  { label: "Math", value: 69, color: "#60a5fa" },
  { label: "Spatial", value: 81, color: "#a78bfa" },
];

function WaveSVG() {
  const w = 1200;
  const h = 80;
  const points = 200;
  let d = `M 0 ${h / 2}`;
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * w * 2;
    const y = h / 2 + Math.sin((i / points) * Math.PI * 4) * 25;
    d += ` L ${x} ${y}`;
  }
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-[200%] h-20 wave-animate"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
          <stop offset="33%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="66%" stopColor="#a78bfa" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#waveGrad)" strokeWidth="2" />
    </svg>
  );
}

function PhoneMockup() {
  return (
    // @ts-expect-error -- telephone web component
    <iphone-16-max mode="dark" style={{ '--width': '280px' }}>
      <div style={{
        width: '100%',
        height: '100%',
        background: '#0a0a10',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
      }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '56px 24px 12px' }}>
          <span style={{ fontSize: 10, fontWeight: 510, color: '#55555f' }}>wavelength</span>
          <span style={{ fontSize: 10, fontWeight: 510, color: '#6366f1' }}>IQ 128</span>
        </div>

        {/* Profile card */}
        <div style={{ padding: '0 16px', flex: 1 }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 16,
            padding: 16,
            marginBottom: 12,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1, #3b82f6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 590, color: 'white',
              }}>S</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 510, color: '#ededf0' }}>Sarah, 26</div>
                <div style={{ fontSize: 10, color: '#55555f' }}>92% match</div>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <div style={{ fontSize: 18, fontWeight: 510, color: '#6366f1' }}>132</div>
                <div style={{ fontSize: 9, color: '#55555f' }}>IQ</div>
              </div>
            </div>

            {/* Dimension bars */}
            {[
              { label: "Logic", value: 87, color: "#6366f1" },
              { label: "Pattern", value: 74, color: "#818cf8" },
              { label: "Verbal", value: 92, color: "#3b82f6" },
              { label: "Math", value: 69, color: "#60a5fa" },
              { label: "Spatial", value: 81, color: "#a78bfa" },
            ].map((d) => (
              <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 9, fontWeight: 510, color: '#55555f', width: 40 }}>{d.label}</span>
                <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.04)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ width: `${d.value}%`, height: '100%', background: d.color, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 16,
            padding: 12,
            marginBottom: 12,
          }}>
            <div style={{ fontSize: 9, fontWeight: 510, color: '#55555f', marginBottom: 8 }}>Shared values</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {["Deep thinker", "Night owl", "No kids", "Ambitious"].map((t) => (
                <span key={t} style={{
                  fontSize: 9, fontWeight: 510, padding: '2px 8px',
                  borderRadius: 100, background: 'rgba(99,102,241,0.08)',
                  color: 'rgba(99,102,241,0.8)', border: '1px solid rgba(99,102,241,0.1)',
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Connect button */}
          <div style={{
            borderRadius: 12,
            background: 'linear-gradient(90deg, #6366f1, #3b82f6)',
            padding: 1,
          }}>
            <div style={{
              borderRadius: 11, background: '#0c0c10',
              padding: '10px 16px', textAlign: 'center',
            }}>
              <span style={{
                fontSize: 11, fontWeight: 510,
                background: 'linear-gradient(90deg, #6366f1, #3b82f6)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Connect</span>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div style={{
          display: 'flex', justifyContent: 'space-around',
          padding: '16px 24px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}>
          {["Discover", "Matches", "Profile"].map((tab, i) => (
            <span key={tab} style={{
              fontSize: 9, fontWeight: 510,
              color: i === 0 ? '#6366f1' : '#55555f',
            }}>{tab}</span>
          ))}
        </div>
      </div>
    // @ts-expect-error -- telephone web component
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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center">
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 8c2-4 4-4 6 0s4 4 6 0" />
              </svg>
            </div>
            <span className="text-[15px] font-[590] tracking-[-0.3px]">wavelength</span>
          </div>
          <Link
            href="/test"
            className="h-8 px-4 inline-flex items-center justify-center rounded-lg bg-accent/10 text-accent text-[12px] font-[510] hover:bg-accent/20 transition-colors"
          >
            Take the test
          </Link>
        </div>
      </nav>

      {/* ═══ Hero ═══ */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-6">
        <div className="hero-mesh" />

        <div className="max-w-[1200px] mx-auto relative">
          <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-center">
            {/* Left — text */}
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-accent text-[12px] font-[510]">
                  Early access — spots filling up
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-[clamp(38px,6.5vw,68px)] font-[590] leading-[1.02] tracking-[-2.5px] mb-6"
              >
                Find someone
                <br />
                <span className="gradient-heading">who thinks</span>
                <br />
                like you.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-text-tertiary text-[17px] sm:text-[18px] leading-[1.65] tracking-[-0.2px] max-w-[440px] mb-10"
              >
                Not swipes. Not algorithms guessing from your photos.
                Wavelength matches by how you think and what you value.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-col sm:flex-row gap-3 mb-6"
              >
                <Link
                  href="/test"
                  className="group relative inline-flex items-center justify-center h-12 px-7 bg-gradient-to-r from-accent via-[#7c6cf0] to-accent2 text-white text-[14px] font-[510] rounded-xl transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] active:scale-[0.98]"
                >
                  Take the IQ test — free
                  <svg className="w-4 h-4 ml-2.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-text-secondary text-[14px] font-[510] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.14)] hover:text-foreground transition-all"
                >
                  Join waitlist
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex items-center gap-5 text-text-quaternary text-[12px] font-[510]"
              >
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  Free forever
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  15 min test
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  Transfers to app
                </span>
              </motion.div>
            </div>

            {/* Right — phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: -8 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="hidden lg:block"
              style={{ perspective: "1200px" }}
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Wavelength animation divider ═══ */}
      <div className="relative h-20 overflow-hidden opacity-40">
        <WaveSVG />
      </div>

      {/* ═══ How it works ═══ */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-16 sm:mb-20"
          >
            <p className="text-accent text-[13px] font-[510] tracking-[-0.13px] mb-4">
              How it works
            </p>
            <h2 className="text-[32px] sm:text-[44px] font-[590] tracking-[-1.5px] leading-[1.05]">
              Smarter than a swipe.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Take the IQ Test",
                desc: "40 adaptive questions across logic, pattern, verbal, math, and spatial thinking. It adjusts to your level in real time.",
                gradient: "from-accent/20 to-accent2/5",
                iconColor: "#6366f1",
                icon: (
                  <path d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                ),
              },
              {
                step: "02",
                title: "Answer Real Scenarios",
                desc: "16 values questions about dealbreakers and priorities. No abstract personality labels — real situations you'd actually face.",
                gradient: "from-[#7c6cf0]/20 to-accent3/5",
                iconColor: "#818cf8",
                icon: (
                  <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                ),
              },
              {
                step: "03",
                title: "Meet Your Match",
                desc: "You only see people in your cognitive range who share your values. Not exclusion — precision. Better first conversations, guaranteed.",
                gradient: "from-accent2/20 to-accent/5",
                iconColor: "#3b82f6",
                icon: (
                  <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card p-7 sm:p-8 group relative"
              >
                {/* Gradient top edge */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${item.gradient}`} />

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center mb-6 group-hover:border-accent/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={item.iconColor} strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>

                <span className="text-text-quaternary text-[11px] font-[510] tracking-[0.5px] uppercase">
                  Step {item.step}
                </span>
                <h3 className="text-[20px] font-[590] tracking-[-0.3px] leading-[1.3] mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-text-tertiary text-[14px] leading-[1.7] tracking-[-0.14px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Cognitive Profile Preview ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-[700px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="glass-card p-8 sm:p-10 relative overflow-hidden"
          >
            {/* Subtle glow inside */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/[0.06] blur-[60px] pointer-events-none" />

            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[12px] font-[510] text-text-quaternary tracking-[0.5px] uppercase mb-1">
                    Example Result
                  </p>
                  <p className="text-[28px] font-[590] tracking-[-0.7px]">
                    IQ <span className="gradient-heading">128</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex px-3 py-1 rounded-lg bg-accent/10 text-accent text-[12px] font-[510]">
                    Top 4%
                  </span>
                </div>
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
                    <span className="text-[13px] font-[510] text-text-secondary w-16">{dim.label}</span>
                    <div className="flex-1 h-2 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${dim.color}, ${dim.color}88)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${dim.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + 0.1 * i, duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-[13px] font-[510] text-text-quaternary w-8 text-right tabular-nums">
                      {dim.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-text-quaternary text-[11px] font-[510] mt-6 text-center">
                Your profile will be unique — this is just an example
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ Stats ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "40", label: "Adaptive questions", icon: "🧠" },
            { value: "5", label: "Cognitive dimensions", icon: "📊" },
            { value: "16", label: "Values scenarios", icon: "💎" },
            { value: "∞", label: "Better conversations", icon: "💬" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="glass-card p-5 text-center"
            >
              <div className="text-[24px] mb-2">{stat.icon}</div>
              <div className="text-[32px] font-[590] tracking-[-1px] text-foreground mb-1 tabular-nums">
                {stat.value}
              </div>
              <div className="text-text-quaternary text-[11px] font-[510]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-28 sm:py-36 px-6">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[250px] bg-gradient-to-r from-accent/[0.08] via-[#7c6cf0]/[0.06] to-accent2/[0.08] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[640px] mx-auto text-center relative">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-[36px] sm:text-[48px] font-[590] tracking-[-1.8px] leading-[1.05] mb-5"
          >
            Curious where
            <br />
            <span className="gradient-heading">you land?</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-text-tertiary text-[16px] sm:text-[17px] leading-[1.65] tracking-[-0.17px] mb-10 max-w-md mx-auto"
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
              className="group relative inline-flex items-center justify-center h-13 px-9 bg-gradient-to-r from-accent via-[#7c6cf0] to-accent2 text-white text-[15px] font-[510] rounded-xl transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] active:scale-[0.98]"
            >
              Start the test
              <svg className="w-4 h-4 ml-2.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ Waitlist ═══ */}
      <section id="waitlist" className="relative py-24 px-6">
        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

        <div className="max-w-[440px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-8"
          >
            <h2 className="text-[28px] sm:text-[32px] font-[590] tracking-[-0.7px] leading-[1.15] mb-3">
              Get early access
            </h2>
            <p className="text-text-tertiary text-[15px] leading-[1.6] tracking-[-0.15px]">
              We launch city by city. Drop your email and city so we know when to
              open your area.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-success text-[15px] font-[510] mb-1">
                You&apos;re on the list!
              </p>
              <p className="text-text-quaternary text-[13px]">
                We&apos;ll reach out when we launch in your area.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              onSubmit={handleWaitlist}
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 bg-surface border border-[rgba(255,255,255,0.07)] rounded-xl text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
              />
              <input
                type="text"
                placeholder="City (optional)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full h-12 px-4 bg-surface border border-[rgba(255,255,255,0.07)] rounded-xl text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-gradient-to-r from-accent via-[#7c6cf0] to-accent2 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] disabled:opacity-40 text-white text-[14px] font-[510] rounded-xl transition-all active:scale-[0.98]"
              >
                {loading ? "Joining..." : "Join waitlist"}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="py-8 px-6">
        <div className="absolute left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.04)] to-transparent" />
        <div className="max-w-[1200px] mx-auto flex items-center justify-between pt-6">
          <div className="flex items-center gap-2 text-text-quaternary">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent/60 to-accent2/40 flex items-center justify-center">
              <svg viewBox="0 0 16 16" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 8c2-4 4-4 6 0s4 4 6 0" />
              </svg>
            </div>
            <span className="text-[13px] font-[510]">wavelength</span>
          </div>
          <span className="text-text-quaternary/40 text-[12px] font-[510]">Date smarter.</span>
        </div>
      </footer>
    </main>
  );
}
