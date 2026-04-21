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

const VALUES_EXAMPLES = [
  {
    q: "Your partner gets their dream job in another country.",
    options: ["Move together", "Long distance", "Depends on my career", "Dealbreaker"],
  },
  {
    q: "How important are kids in your future?",
    options: ["Definitely want", "Open to it", "Probably not", "Never"],
  },
  {
    q: "Your partner wants an open relationship.",
    options: ["I'm open", "Only if we discuss", "I'd struggle", "Absolute no"],
  },
];

function WavelengthLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="url(#lg)" />
      <path
        d="M6 16c2.5-5 5-5 7.5 0s5 5 7.5 0 5-5 7.5 0"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M6 16c2.5-5 5-5 7.5 0s5 5 7.5 0 5-5 7.5 0"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
        strokeDasharray="3 4"
        transform="translate(0, -3)"
      />
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PhoneMockup() {
  return (
    // @ts-expect-error -- telephone web component
    <iphone-16-max mode="dark" style={{ "--width": "240px" }}>
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
                <div style={{ fontSize: 13, fontWeight: 510, color: "#ededf0" }}>
                  Sarah, 26
                </div>
                <div style={{ fontSize: 10, color: "#55555f" }}>92% match</div>
              </div>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <div style={{ fontSize: 18, fontWeight: 510, color: "#6366f1" }}>
                  132
                </div>
                <div style={{ fontSize: 9, color: "#55555f" }}>IQ</div>
              </div>
            </div>

            {[
              { label: "Logic", value: 87, color: "#6366f1" },
              { label: "Pattern", value: 74, color: "#818cf8" },
              { label: "Verbal", value: 92, color: "#3b82f6" },
            ].map((d) => (
              <div
                key={d.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 9, fontWeight: 510, color: "#55555f", width: 40 }}>
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

          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <div style={{ fontSize: 9, fontWeight: 510, color: "#55555f", marginBottom: 8 }}>
              Shared values
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {["Deep thinker", "Night owl", "No kids", "Ambitious"].map((t) => (
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
              ))}
            </div>
          </div>

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
              style={{ fontSize: 9, fontWeight: 510, color: i === 0 ? "#6366f1" : "#55555f" }}
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
      await supabase.from("waitlist").insert({ email, city, source: "landing" });
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
          <div className="flex items-center gap-2.5">
            <WavelengthLogo size={24} />
            <span className="text-[15px] font-[590] tracking-[-0.3px]">
              wavelength
            </span>
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
      <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-20 px-5 sm:px-6">
        <div className="water-bg">
          <img src="/bg-water-1.png" alt="" style={{ objectPosition: "center top" }} />
        </div>
        <div className="max-w-[900px] mx-auto relative">
          {/* Mobile: stacked, text first. Desktop: side by side */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-accent text-[13px] font-[510] tracking-[0.08em] uppercase mb-4"
              >
                IQ + Values = Better dates
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease }}
                className="text-[clamp(36px,8vw,64px)] font-[590] leading-[0.95] tracking-[-2px] mb-5"
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
                className="text-text-tertiary text-[15px] sm:text-[16px] leading-[1.7] max-w-[42ch] mb-7 mx-auto lg:mx-0"
              >
                Wavelength matches you by cognitive profile <em>and</em>{" "}
                dealbreaker values. Take a 15-minute test — 40 IQ questions
                plus 16 real-life scenarios — and only see people who truly fit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6"
              >
                <Link
                  href="/test"
                  className="inline-flex items-center justify-center h-12 px-7 bg-gradient-to-r from-accent to-accent2 text-white text-[14px] font-[510] rounded-xl transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.3)] active:scale-[0.98]"
                >
                  Take the free test
                </Link>
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center h-12 px-7 border border-border rounded-xl text-text-secondary text-[14px] font-[510] hover:text-foreground hover:border-text-quaternary transition-all"
                >
                  Join waitlist
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center gap-4 justify-center lg:justify-start text-text-quaternary text-[12px] font-[510]"
              >
                <span>Free forever</span>
                <span className="w-px h-3 bg-border" />
                <span>~15 minutes</span>
                <span className="w-px h-3 bg-border" />
                <span>Results transfer to app</span>
              </motion.div>
            </div>

            {/* Phone mockup — visible on ALL screens */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease }}
              className="relative shrink-0"
            >
              <img
                src="/mascots/curious.png"
                alt=""
                className="absolute -left-10 sm:-left-14 bottom-16 w-16 sm:w-20 h-16 sm:h-20 object-contain z-10"
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

      {/* ═══ Two pillars: IQ + Values ═══ */}
      <section className="relative py-14 sm:py-20 px-5 sm:px-6">
        <div className="water-bg">
          <img src="/bg-water-2.png" alt="" style={{ objectPosition: "center center", transform: "rotate(180deg)" }} />
        </div>
        <div className="max-w-[900px] mx-auto relative">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-text-quaternary text-[13px] font-[510] tracking-[0.12em] uppercase mb-3"
          >
            Two pillars
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-[clamp(26px,5vw,36px)] font-[590] tracking-[-1px] leading-[1.1] mb-10"
          >
            Smart mind. Shared values.
            <br />
            <span className="text-text-tertiary">Both matter.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* IQ Pillar */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="glass-card p-6 sm:p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <img src="/mascots/thinking.png" alt="" className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-[17px] font-[590] tracking-[-0.3px]">Cognitive Profile</h3>
                  <p className="text-text-quaternary text-[12px] font-[510]">40 adaptive questions</p>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                {DIMENSIONS.map((dim, i) => (
                  <motion.div
                    key={dim.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[12px] font-[510] text-text-secondary w-14">
                      {dim.label}
                    </span>
                    <div className="flex-1 h-1.5 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: dim.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${dim.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + 0.1 * i, duration: 0.7, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-[11px] font-[510] text-text-quaternary w-7 text-right tabular-nums">
                      {dim.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-text-tertiary text-[13px] leading-[1.6]">
                The test adapts in real time — harder questions if you&apos;re
                doing well, easier ones to confirm your baseline. Five
                dimensions, one precise score.
              </p>
            </motion.div>

            {/* Values Pillar */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="glass-card p-6 sm:p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <img src="/mascots/pointing.png" alt="" className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-[17px] font-[590] tracking-[-0.3px]">Dealbreaker Values</h3>
                  <p className="text-text-quaternary text-[12px] font-[510]">16 real-life scenarios</p>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                {VALUES_EXAMPLES.map((v, i) => (
                  <div key={i} className="rounded-xl bg-[rgba(255,255,255,0.02)] border border-border-subtle p-3">
                    <p className="text-[12px] font-[510] text-text-secondary mb-2">
                      &ldquo;{v.q}&rdquo;
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {v.options.map((o, j) => (
                        <span
                          key={o}
                          className="text-[10px] font-[510] px-2 py-0.5 rounded-full border"
                          style={{
                            borderColor: j === 0 ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.06)",
                            color: j === 0 ? "#818cf8" : "#55555f",
                            background: j === 0 ? "rgba(99,102,241,0.08)" : "transparent",
                          }}
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-text-tertiary text-[13px] leading-[1.6]">
                No vague personality labels. Real situations you&apos;d
                actually face — kids, monogamy, career moves, religion. Your
                answers filter out incompatible matches before you even chat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[900px] mx-auto px-5 sm:px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ═══ How it works ═══ */}
      <section className="py-14 sm:py-20 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-text-quaternary text-[13px] font-[510] tracking-[0.12em] uppercase mb-3"
          >
            How it works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-[clamp(26px,5vw,36px)] font-[590] tracking-[-1px] leading-[1.1] mb-10"
          >
            Three steps. One match.
          </motion.h2>

          <div className="space-y-0">
            {[
              {
                n: "01",
                title: "Take the IQ test",
                desc: "40 adaptive questions across logic, pattern recognition, verbal reasoning, math, and spatial thinking. Gets harder as you improve. Takes about 10 minutes.",
                mascot: "/mascots/happy.png",
              },
              {
                n: "02",
                title: "Answer dealbreaker scenarios",
                desc: "16 values questions about the things that actually matter in a relationship — kids, lifestyle, communication style, religion, career priorities. No abstract labels.",
                mascot: "/mascots/shy.png",
              },
              {
                n: "03",
                title: "See who fits",
                desc: "You only see people in your cognitive range who share your core values. Not exclusion — precision. Better first conversations from day one.",
                mascot: "/mascots/welcome.png",
              },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex gap-4 sm:gap-6 py-6 border-b border-border last:border-0"
              >
                <span className="text-accent text-[13px] font-[590] tabular-nums shrink-0 mt-1">
                  {step.n}
                </span>
                <div className="flex-1">
                  <h3 className="text-[16px] sm:text-[17px] font-[590] tracking-[-0.3px] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-text-tertiary text-[14px] leading-[1.65]">
                    {step.desc}
                  </p>
                </div>
                <img
                  src={step.mascot}
                  alt=""
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0 self-center"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[900px] mx-auto px-5 sm:px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ═══ Why not just swipe? ═══ */}
      <section className="py-14 sm:py-20 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-text-quaternary text-[13px] font-[510] tracking-[0.12em] uppercase mb-3"
          >
            Why wavelength
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-[clamp(26px,5vw,36px)] font-[590] tracking-[-1px] leading-[1.1] mb-10"
          >
            Swipe apps match by looks.
            <br />
            <span className="text-text-tertiary">We match by how you think.</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Adaptive precision",
                desc: "The test adjusts difficulty in real time. Your score is precise, not an average of easy and hard questions.",
              },
              {
                title: "Five dimensions, not one number",
                desc: "Logic, pattern, verbal, math, spatial. You might be strong in three and average in two — that shape is what makes matches work.",
              },
              {
                title: "Real dealbreakers upfront",
                desc: "Kids, monogamy, religion, career ambition. You filter on the things that actually end relationships — before you even match.",
              },
              {
                title: "No photo-first swiping",
                desc: "You see cognitive profiles and shared values first. Photos come after you decide the mind fits.",
              },
              {
                title: "Research-backed",
                desc: "Couples with similar cognitive profiles report deeper conversations and higher relationship satisfaction.",
              },
              {
                title: "Web test transfers to app",
                desc: "Take the test here on the web. When you download the app, claim your results with the same email. No retesting.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="py-5 px-5 rounded-xl bg-[rgba(255,255,255,0.02)] border border-border-subtle"
              >
                <h3 className="text-[15px] font-[590] tracking-[-0.2px] mb-2">
                  {item.title}
                </h3>
                <p className="text-text-tertiary text-[13px] leading-[1.6]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-14 sm:py-20 px-5 sm:px-6">
        <div className="water-bg">
          <img src="/bg-water-3.png" alt="" style={{ objectPosition: "right center" }} />
        </div>
        <div className="max-w-[900px] mx-auto relative">
          <div className="h-px bg-border mb-14 sm:mb-20" />

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-5"
            >
              <img
                src="/mascots/flying.png"
                alt=""
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto object-contain"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-[clamp(28px,6vw,44px)] font-[590] tracking-[-1.5px] leading-[1.05] mb-4"
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
              className="text-text-tertiary text-[15px] leading-[1.65] mb-8 max-w-md mx-auto"
            >
              40 IQ questions. 16 values scenarios. About fifteen minutes.
              Your results transfer to the app when you download.
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
                className="inline-flex items-center justify-center h-12 px-8 bg-gradient-to-r from-accent to-accent2 text-white text-[15px] font-[510] rounded-xl transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] active:scale-[0.98]"
              >
                Start the test
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Waitlist ═══ */}
      <section id="waitlist" className="py-14 sm:py-20 px-5 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="h-px bg-border mb-14 sm:mb-20" />

          <div className="grid lg:grid-cols-[1fr,360px] gap-10 lg:gap-16">
            {/* Left */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <p className="text-text-quaternary text-[13px] font-[510] tracking-[0.12em] uppercase mb-3">
                Waitlist
              </p>
              <h2 className="text-[clamp(26px,5vw,36px)] font-[590] tracking-[-1px] leading-[1.1] mb-4">
                Get early access.
              </h2>
              <p className="text-text-tertiary text-[15px] leading-[1.7] max-w-[44ch] mb-6">
                We launch city by city. Drop your email and we&apos;ll let you
                know when your area opens. Early users get priority matching and
                first access to new features.
              </p>
              <div className="flex items-center gap-3">
                <img src="/mascots/group-1.png" alt="" className="w-20 h-14 object-contain" />
                <p className="text-text-quaternary text-[13px] leading-[1.5]">
                  We only email you when your city goes live. No spam.
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
                    <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-[15px] font-[590] mb-1">You&apos;re on the list</p>
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
                    className="w-full h-12 px-4 bg-[rgba(255,255,255,0.03)] border border-border rounded-xl text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/40 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="City (optional)"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full h-12 px-4 bg-[rgba(255,255,255,0.03)] border border-border rounded-xl text-[14px] text-foreground placeholder:text-text-quaternary focus:outline-none focus:border-accent/40 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-gradient-to-r from-accent to-accent2 text-white text-[14px] font-[510] rounded-xl transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] disabled:opacity-40 active:scale-[0.98]"
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
            <WavelengthLogo size={20} />
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
