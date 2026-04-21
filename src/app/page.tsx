"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

/* Animated counter hook */
function useCounter(end: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, start: () => setStarted(true) };
}

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
    <iphone-16-max mode="dark" style={{ "--width": "220px" }}>
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
        <div style={{ display: "flex", justifyContent: "space-between", padding: "56px 24px 12px" }}>
          <span style={{ fontSize: 10, fontWeight: 510, color: "#55555f" }}>wavelength</span>
          <span style={{ fontSize: 10, fontWeight: 510, color: "#6366f1" }}>IQ 128</span>
        </div>
        <div style={{ padding: "0 16px", flex: 1 }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 16, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 590, color: "white" }}>S</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 510, color: "#ededf0" }}>Sarah, 26</div>
                <div style={{ fontSize: 9, color: "#55555f" }}>92% match</div>
              </div>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <div style={{ fontSize: 16, fontWeight: 510, color: "#6366f1" }}>132</div>
                <div style={{ fontSize: 8, color: "#55555f" }}>IQ</div>
              </div>
            </div>
            {[
              { label: "Logic", value: 87, color: "#6366f1" },
              { label: "Verbal", value: 92, color: "#3b82f6" },
              { label: "Spatial", value: 81, color: "#a78bfa" },
            ].map((d) => (
              <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                <span style={{ fontSize: 8, fontWeight: 510, color: "#55555f", width: 36 }}>{d.label}</span>
                <div style={{ flex: 1, height: 2.5, background: "rgba(255,255,255,0.04)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ width: `${d.value}%`, height: "100%", background: d.color, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 10, marginBottom: 10 }}>
            <div style={{ fontSize: 8, fontWeight: 510, color: "#55555f", marginBottom: 6 }}>Shared values</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {["Deep thinker", "Night owl", "No kids", "Ambitious"].map((t) => (
                <span key={t} style={{ fontSize: 8, fontWeight: 510, padding: "2px 6px", borderRadius: 100, background: "rgba(99,102,241,0.08)", color: "rgba(99,102,241,0.8)", border: "1px solid rgba(99,102,241,0.1)" }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 10, background: "linear-gradient(90deg, #6366f1, #3b82f6)", padding: 1 }}>
            <div style={{ borderRadius: 9, background: "#0c0c10", padding: "8px 14px", textAlign: "center" }}>
              <span style={{ fontSize: 10, fontWeight: 510, background: "linear-gradient(90deg, #6366f1, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connect</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", padding: "14px 24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          {["Discover", "Matches", "Profile"].map((tab, i) => (
            <span key={tab} style={{ fontSize: 8, fontWeight: 510, color: i === 0 ? "#6366f1" : "#55555f" }}>{tab}</span>
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
  const [activeValue, setActiveValue] = useState(0);

  const iqCounter = useCounter(128, 1200);

  // Rotate through values examples
  useEffect(() => {
    const t = setInterval(() => setActiveValue((v) => (v + 1) % 4), 3500);
    return () => clearInterval(t);
  }, []);

  const valuesExamples = [
    { q: "Partner gets dream job abroad?", tags: ["Move together", "Long distance", "Depends", "Dealbreaker"] },
    { q: "How important are kids?", tags: ["Definitely", "Open to it", "Probably not", "Never"] },
    { q: "Open relationship?", tags: ["I'm open", "If we discuss", "I'd struggle", "Absolute no"] },
    { q: "Religion in daily life?", tags: ["Very important", "Spiritual", "Not really", "Atheist"] },
  ];

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
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(5,5,7,0.85)", backdropFilter: "blur(16px) saturate(140%)" }}>
        <div className="max-w-[960px] mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <WavelengthLogo size={24} />
            <span className="text-[15px] font-[590] tracking-[-0.3px]">wavelength</span>
          </div>
          <Link href="/test" className="h-9 px-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent2 text-white text-[12px] font-[510] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all active:scale-[0.97]">
            Take the test
          </Link>
        </div>
      </nav>

      {/* ═══ Hero ═══ */}
      <section className="relative pt-24 sm:pt-36 pb-8 sm:pb-16 px-5 sm:px-6 overflow-hidden">
        <div className="water-bg"><img src="/bg-water-1.png" alt="" /></div>

        <div className="max-w-[960px] mx-auto relative">
          <div className="flex flex-col items-center text-center">
            {/* Mascot group above headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-6"
            >
              <img src="/mascots/group-1.png" alt="" className="w-40 sm:w-52 h-auto object-contain mx-auto" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
              className="text-[clamp(34px,9vw,60px)] font-[590] leading-[0.95] tracking-[-2px] mb-4"
            >
              Date someone
              <br />
              <span className="gradient-heading">who gets you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease }}
              className="text-text-tertiary text-[15px] sm:text-[16px] leading-[1.65] max-w-[38ch] mb-7"
            >
              IQ test + dealbreaker values. Skip the awkward dates.
              Match with people who think like you <em>and</em> want the same things.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-5"
            >
              <Link href="/test" className="pulse-cta inline-flex items-center justify-center h-13 px-8 bg-gradient-to-r from-accent to-accent2 text-white text-[15px] font-[510] rounded-xl transition-all active:scale-[0.98]">
                Find out your IQ — free
              </Link>
              <a href="#waitlist" className="inline-flex items-center justify-center h-13 px-8 border border-border rounded-xl text-text-secondary text-[14px] font-[510] hover:text-foreground hover:border-text-quaternary transition-all">
                Join the waitlist
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-text-quaternary text-[12px] font-[510] mb-10"
            >
              Free · 15 min · Results transfer to app
            </motion.p>

            {/* Phone centered below */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease }}
              className="relative"
            >
              <img src="/mascots/curious.png" alt="" className="absolute -left-8 sm:-left-16 bottom-20 w-14 sm:w-20 object-contain z-10" />
              <img src="/mascots/pointing.png" alt="" className="absolute -right-6 sm:-right-14 top-16 w-12 sm:w-18 object-contain z-10" style={{ transform: "scaleX(-1)" }} />
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ IQ Score Preview — gamification ═══ */}
      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-[960px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            onViewportEnter={() => iqCounter.start()}
            className="glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
          >
            {/* Score */}
            <div className="text-center shrink-0">
              <p className="text-text-quaternary text-[11px] font-[510] tracking-[0.5px] uppercase mb-1">Example result</p>
              <p className="text-[56px] sm:text-[72px] font-[590] tracking-[-3px] leading-none">
                <span className="gradient-heading">{iqCounter.count}</span>
              </p>
              <p className="text-accent text-[13px] font-[510] mt-1">Top 4%</p>
            </div>

            {/* Dimensions */}
            <div className="flex-1 w-full space-y-3">
              {[
                { label: "Logic", value: 87, color: "#6366f1" },
                { label: "Pattern", value: 74, color: "#818cf8" },
                { label: "Verbal", value: 92, color: "#3b82f6" },
                { label: "Math", value: 69, color: "#60a5fa" },
                { label: "Spatial", value: 81, color: "#a78bfa" },
              ].map((dim, i) => (
                <div key={dim.label} className="flex items-center gap-3">
                  <span className="text-[12px] font-[510] text-text-secondary w-14">{dim.label}</span>
                  <div className="flex-1 h-2 bg-[rgba(255,255,255,0.04)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: dim.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${dim.value}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + 0.1 * i, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[11px] font-[510] text-text-quaternary w-7 text-right tabular-nums">{dim.value}</span>
                </div>
              ))}
            </div>

            {/* Mascot */}
            <img src="/mascots/thinking.png" alt="" className="w-20 sm:w-24 object-contain shrink-0 hidden sm:block" />
          </motion.div>
        </div>
      </section>

      {/* ═══ Values carousel ═══ */}
      <section className="relative py-12 sm:py-16 px-5 sm:px-6">
        <div className="water-bg"><img src="/bg-water-2.png" alt="" style={{ transform: "rotate(180deg)" }} /></div>

        <div className="max-w-[960px] mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left text */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="flex-1">
              <p className="text-accent text-[13px] font-[510] tracking-[0.08em] uppercase mb-3">Dealbreaker values</p>
              <h2 className="text-[clamp(26px,5vw,36px)] font-[590] tracking-[-1px] leading-[1.1] mb-4">
                Skip the awkward
                <br />
                &ldquo;so what do you want?&rdquo;
              </h2>
              <p className="text-text-tertiary text-[14px] sm:text-[15px] leading-[1.65] max-w-[40ch] mb-5">
                16 real scenarios about kids, religion, monogamy, career, lifestyle.
                Your answers filter out incompatible matches <em>before</em> you chat.
              </p>
              <div className="flex items-center gap-3">
                <img src="/mascots/shy.png" alt="" className="w-12 h-12 object-contain" />
                <p className="text-text-quaternary text-[12px]">No vague personality types. Real dealbreakers.</p>
              </div>
            </motion.div>

            {/* Right — rotating value card */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="w-full max-w-[340px]">
              <div className="glass-card p-5 sm:p-6 min-h-[180px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeValue}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-text-quaternary text-[11px] font-[510] tracking-[0.5px] uppercase mb-3">
                      Question {activeValue + 1} of 16
                    </p>
                    <p className="text-[15px] font-[510] leading-[1.5] mb-4">
                      {valuesExamples[activeValue].q}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {valuesExamples[activeValue].tags.map((tag, j) => (
                        <span
                          key={tag}
                          className="text-[11px] font-[510] px-3 py-1.5 rounded-lg border transition-all cursor-default"
                          style={{
                            borderColor: j === 0 ? "rgba(99,102,241,0.4)" : "rgba(255,255,255,0.07)",
                            color: j === 0 ? "#818cf8" : "#7c7c8a",
                            background: j === 0 ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.02)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress dots */}
                <div className="flex gap-1.5 mt-4">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-1 rounded-full transition-all duration-300"
                      style={{
                        width: i === activeValue ? 20 : 6,
                        background: i === activeValue ? "#6366f1" : "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ How it works — compact ═══ */}
      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-[960px] mx-auto">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-[clamp(24px,4vw,32px)] font-[590] tracking-[-0.8px] mb-8 text-center">
            How it works
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: "1", title: "IQ test", desc: "40 adaptive questions. Logic, pattern, verbal, math, spatial. Gets harder as you go.", mascot: "/mascots/happy.png", time: "~10 min" },
              { n: "2", title: "Values check", desc: "16 dealbreaker scenarios. Kids, lifestyle, religion, communication style.", mascot: "/mascots/welcome.png", time: "~5 min" },
              { n: "3", title: "Match", desc: "See people in your cognitive range who share your core values. No surprises.", mascot: "/mascots/flying.png", time: "Instant" },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card p-5 text-center"
              >
                <img src={step.mascot} alt="" className="w-14 h-14 object-contain mx-auto mb-3" />
                <div className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-[11px] font-[510] px-2.5 py-1 rounded-full mb-3">
                  <span>{step.time}</span>
                </div>
                <h3 className="text-[16px] font-[590] tracking-[-0.3px] mb-1.5">{step.title}</h3>
                <p className="text-text-tertiary text-[13px] leading-[1.55]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Why not just swipe ═══ */}
      <section className="py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-[960px] mx-auto">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-[clamp(24px,4vw,32px)] font-[590] tracking-[-0.8px] mb-2 text-center">
            Why wavelength
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="text-text-tertiary text-[14px] text-center mb-8 max-w-md mx-auto">
            Swipe apps match by looks. We match by how you think.
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: "Adaptive test", desc: "Gets harder when you're doing well. Precise, not average." },
              { title: "5D profile", desc: "Not one IQ number — a shape across five dimensions." },
              { title: "Real dealbreakers", desc: "Kids, religion, monogamy. Filtered before you match." },
              { title: "Mind before photos", desc: "Cognitive profile first. Photos after you decide." },
              { title: "Research-backed", desc: "Similar minds → deeper conversations → lasting relationships." },
              { title: "Web → App", desc: "Take the test here. Results transfer when you download." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-border-subtle"
              >
                <h3 className="text-[14px] font-[590] tracking-[-0.2px] mb-1">{item.title}</h3>
                <p className="text-text-tertiary text-[12px] leading-[1.5]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-14 sm:py-20 px-5 sm:px-6 overflow-hidden">
        <div className="water-bg"><img src="/bg-water-3.png" alt="" /></div>

        <div className="max-w-[960px] mx-auto relative text-center">
          <motion.img
            src="/mascots/group-2.png"
            alt=""
            className="w-48 sm:w-64 h-auto mx-auto object-contain mb-6"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          />

          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-[clamp(28px,6vw,44px)] font-[590] tracking-[-1.5px] leading-[1.05] mb-4">
            Ready to find out?
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="text-text-tertiary text-[15px] mb-7 max-w-sm mx-auto">
            40 IQ questions. 16 values. ~15 min. Free forever.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <Link href="/test" className="pulse-cta inline-flex items-center justify-center h-13 px-10 bg-gradient-to-r from-accent to-accent2 text-white text-[16px] font-[510] rounded-xl transition-all active:scale-[0.98]">
              Start the test
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ Waitlist ═══ */}
      <section id="waitlist" className="py-14 sm:py-20 px-5 sm:px-6">
        <div className="max-w-[540px] mx-auto text-center">
          <img src="/mascots/shy.png" alt="" className="w-16 h-16 object-contain mx-auto mb-4" />
          <h2 className="text-[24px] sm:text-[28px] font-[590] tracking-[-0.7px] mb-2">
            Get early access
          </h2>
          <p className="text-text-tertiary text-[14px] leading-[1.6] mb-6">
            We launch city by city. Drop your email — we only message you when your area opens.
          </p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-5 text-center">
              <p className="text-success text-[15px] font-[590] mb-1">You&apos;re on the list!</p>
              <p className="text-text-quaternary text-[13px]">We&apos;ll reach out when your area opens.</p>
            </motion.div>
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
              <button type="submit" disabled={loading} className="w-full h-12 bg-gradient-to-r from-accent to-accent2 text-white text-[14px] font-[510] rounded-xl transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] disabled:opacity-40 active:scale-[0.98]">
                {loading ? "Joining..." : "Join waitlist"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-5 sm:px-6">
        <div className="max-w-[960px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-text-quaternary">
            <WavelengthLogo size={20} />
            <span className="text-[13px] font-[510]">wavelength</span>
          </div>
          <span className="text-text-quaternary/40 text-[12px] font-[510]">Date smarter.</span>
        </div>
      </footer>
    </main>
  );
}
