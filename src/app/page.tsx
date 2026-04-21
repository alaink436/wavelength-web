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

function WavelengthLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="url(#lg)" />
      <path d="M6 16c2.5-5 5-5 7.5 0s5 5 7.5 0 5-5 7.5 0" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9" />
      <path d="M6 16c2.5-5 5-5 7.5 0s5 5 7.5 0 5-5 7.5 0" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.3" strokeDasharray="3 4" transform="translate(0, -3)" />
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
      <div style={{ width: "100%", height: "100%", background: "#0a0a10", display: "flex", flexDirection: "column", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "54px 16px 8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 18, height: 18, borderRadius: 5, background: "linear-gradient(135deg, #6366f1, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 16 16" width="10" height="10" fill="none" stroke="white" strokeWidth="2"><path d="M1 8c2-4 4-4 6 0s4 4 6 0" /></svg>
            </div>
            <span style={{ fontSize: 10, fontWeight: 590, color: "#ededf0", letterSpacing: -0.3 }}>wavelength</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 9, fontWeight: 510, color: "#6366f1" }}>Cluster A</span>
            <img src="/mascots/pose-wave.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />
          </div>
        </div>

        <div style={{ padding: "0 12px", flex: 1, overflow: "hidden" }}>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: 12, marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 590, color: "white" }}>S</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 510, color: "#ededf0" }}>Sarah, 26</div>
                <div style={{ fontSize: 8, color: "#6366f1", fontWeight: 510 }}>92% match · same cluster</div>
              </div>
              <img src="/mascots/pose-sad.png" alt="" style={{ width: 28, height: 28, objectFit: "contain", opacity: 0.7 }} />
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
              <svg viewBox="0 0 80 70" width="80" height="70">
                <polygon points="40,5 72,25 62,60 18,60 8,25" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <polygon points="40,15 60,28 54,52 26,52 20,28" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                <polygon points="40,10 67,23 58,57 22,57 14,23" fill="rgba(99,102,241,0.12)" stroke="#6366f1" strokeWidth="1" opacity="0.8" />
                <text x="40" y="3" textAnchor="middle" fill="#55555f" fontSize="5" fontWeight="510">Logic</text>
                <text x="76" y="26" textAnchor="start" fill="#55555f" fontSize="5" fontWeight="510">Pattern</text>
                <text x="65" y="65" textAnchor="start" fill="#55555f" fontSize="5" fontWeight="510">Verbal</text>
                <text x="14" y="65" textAnchor="end" fill="#55555f" fontSize="5" fontWeight="510">Math</text>
                <text x="4" y="26" textAnchor="end" fill="#55555f" fontSize="5" fontWeight="510">Spatial</text>
              </svg>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {["Deep thinker", "No kids", "Night owl", "Ambitious"].map((t) => (
                <span key={t} style={{ fontSize: 7, fontWeight: 510, padding: "2px 5px", borderRadius: 100, background: "rgba(99,102,241,0.08)", color: "rgba(99,102,241,0.7)", border: "1px solid rgba(99,102,241,0.1)" }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: 10, marginBottom: 8 }}>
            <div style={{ fontSize: 7, fontWeight: 510, color: "#55555f", marginBottom: 6 }}>Chat</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ alignSelf: "flex-start", background: "rgba(255,255,255,0.04)", borderRadius: "10px 10px 10px 3px", padding: "4px 8px", maxWidth: "80%" }}>
                <span style={{ fontSize: 8, color: "#b4b4c0" }}>Finally someone who actually gets sarcasm 😅</span>
              </div>
              <div style={{ alignSelf: "flex-end", background: "rgba(99,102,241,0.15)", borderRadius: "10px 10px 3px 10px", padding: "4px 8px", maxWidth: "80%" }}>
                <span style={{ fontSize: 8, color: "#c4c4ff" }}>Haha same wavelength I guess 😏</span>
              </div>
              <div style={{ alignSelf: "flex-start", background: "rgba(255,255,255,0.04)", borderRadius: "10px 10px 10px 3px", padding: "4px 8px", maxWidth: "80%" }}>
                <span style={{ fontSize: 8, color: "#b4b4c0" }}>Coffee this weekend? ☕</span>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: 10, background: "linear-gradient(90deg, #6366f1, #3b82f6)", padding: 1 }}>
            <div style={{ borderRadius: 9, background: "#0c0c10", padding: "7px 12px", textAlign: "center" }}>
              <span style={{ fontSize: 9, fontWeight: 510, background: "linear-gradient(90deg, #6366f1, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Send a message</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px 16px 14px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          {[
            { label: "Discover", active: true, icon: <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="10" r="2" /></svg> },
            { label: "Matches", active: false, icon: <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 4C8 2 4 2 4 6c0 5 6 8 6 8s6-3 6-8c0-4-4-4-6-2Z" /></svg> },
            { label: "Chat", active: false, icon: <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 14l-1 3 3-1 8-8-2-2-8 8Z" /><rect x="5" y="3" width="12" height="10" rx="3" /></svg> },
            { label: "Profile", active: false, icon: <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="7" r="3" /><path d="M4 16c0-3 2.7-5 6-5s6 2 6 5" /></svg> },
          ].map((tab) => (
            <div key={tab.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, color: tab.active ? "#6366f1" : "#55555f" }}>
              {tab.icon}
              <span style={{ fontSize: 7, fontWeight: 510 }}>{tab.label}</span>
            </div>
          ))}
        </div>
      </div>
    </iphone-16-max>
  );
}

function RadarChart() {
  const dims = [
    { label: "Logic", value: 87 },
    { label: "Pattern", value: 74 },
    { label: "Verbal", value: 92 },
    { label: "Math", value: 69 },
    { label: "Spatial", value: 81 },
  ];
  const cx = 100, cy = 100, maxR = 75;
  const angles = dims.map((_, i) => (i * 2 * Math.PI) / dims.length - Math.PI / 2);
  const gridLevels = [0.33, 0.66, 1];

  function polyPoints(values: number[]) {
    return values.map((v, i) => {
      const r = (v / 100) * maxR;
      return `${cx + r * Math.cos(angles[i])},${cy + r * Math.sin(angles[i])}`;
    }).join(" ");
  }

  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-[220px]">
      {gridLevels.map((level) => (
        <polygon
          key={level}
          points={dims.map((_, i) => {
            const r = level * maxR;
            return `${cx + r * Math.cos(angles[i])},${cy + r * Math.sin(angles[i])}`;
          }).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.5"
        />
      ))}
      {angles.map((a, i) => (
        <line key={i} x1={cx} y1={cy} x2={cx + maxR * Math.cos(a)} y2={cy + maxR * Math.sin(a)} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
      ))}
      <polygon
        points={polyPoints(dims.map((d) => d.value))}
        fill="rgba(99,102,241,0.15)"
        stroke="url(#radarGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {dims.map((d, i) => {
        const r = (d.value / 100) * maxR;
        return <circle key={i} cx={cx + r * Math.cos(angles[i])} cy={cy + r * Math.sin(angles[i])} r="3" fill="#6366f1" stroke="#0a0a10" strokeWidth="1.5" />;
      })}
      {dims.map((d, i) => {
        const lr = maxR + 16;
        const x = cx + lr * Math.cos(angles[i]);
        const y = cy + lr * Math.sin(angles[i]);
        return (
          <text key={d.label} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="#7c7c8a" fontSize="9" fontWeight="510">
            {d.label}
          </text>
        );
      })}
      <defs>
        <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => setActiveValue((v) => (v + 1) % 4), 3500);
    return () => clearInterval(t);
  }, []);

  // Fetch waitlist count
  useEffect(() => {
    (async () => {
      try {
        const { supabase } = await import("@/lib/supabase");
        const { count } = await supabase.from("waitlist").select("*", { count: "exact", head: true });
        if (count !== null) setWaitlistCount(count);
      } catch { /* ignore */ }
    })();
  }, [submitted]);

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
      <section className="relative pt-24 sm:pt-32 pb-10 sm:pb-16 px-5 sm:px-6 overflow-hidden">
        <div className="water-bg"><img src="/bg-water-1.png" alt="" /></div>

        <div className="max-w-[960px] mx-auto relative">
          <div className="flex flex-col items-center text-center">
            <motion.img
              src="/mascots/pose-wave.png"
              alt=""
              className="w-24 sm:w-28 object-contain mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            />

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
              className="text-[clamp(34px,9vw,56px)] font-[590] leading-[0.95] tracking-[-2px] mb-4"
            >
              Date someone
              <br />
              <span className="gradient-heading">who gets you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease }}
              className="text-text-tertiary text-[15px] sm:text-[16px] leading-[1.65] max-w-[40ch] mb-6"
            >
              A short cognitive test finds your thinking cluster.
              Dealbreaker values filter out the wrong ones.
              You only see people who actually fit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-4"
            >
              <Link href="/test" className="pulse-cta inline-flex items-center justify-center h-13 px-8 bg-gradient-to-r from-accent to-accent2 text-white text-[15px] font-[510] rounded-xl transition-all active:scale-[0.98]">
                Take the test — free
              </Link>
              <a href="#waitlist" className="inline-flex items-center justify-center h-13 px-8 border border-border rounded-xl text-text-secondary text-[14px] font-[510] hover:text-foreground hover:border-text-quaternary transition-all">
                Join the waitlist
              </a>
            </motion.div>

            {/* Waitlist counter + meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 text-text-quaternary text-[12px] font-[510] mb-10"
            >
              <span>Free · 15 min</span>
              {waitlistCount !== null && waitlistCount > 0 && (
                <>
                  <span className="w-px h-3 bg-border" />
                  <span className="text-accent/70">{waitlistCount.toLocaleString()} on the waitlist</span>
                </>
              )}
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease }}
              className="relative"
            >
              <img src="/mascots/curious.png" alt="" className="absolute -left-10 sm:-left-20 bottom-20 w-20 sm:w-28 object-contain z-10" />
              <img src="/mascots/pointing.png" alt="" className="absolute -right-8 sm:-right-18 top-16 w-18 sm:w-24 object-contain z-10" style={{ transform: "scaleX(-1)" }} />
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Two Pillars — equal weight ═══ */}
      <section className="relative py-12 sm:py-16 px-5 sm:px-6">
        <div className="water-bg"><img src="/bg-water-2.png" alt="" /></div>

        <div className="max-w-[960px] mx-auto relative">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-[clamp(24px,4vw,32px)] font-[590] tracking-[-0.8px] text-center mb-8">
            Two things that actually matter
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pillar 1 — Cognitive cluster */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="glass-card p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#6366f1" strokeWidth="1.5"><circle cx="10" cy="10" r="8" /><circle cx="10" cy="10" r="3" /><line x1="10" y1="2" x2="10" y2="5" /><line x1="10" y1="15" x2="10" y2="18" /><line x1="2" y1="10" x2="5" y2="10" /><line x1="15" y1="10" x2="18" y2="10" /></svg>
                </div>
                <h3 className="text-[16px] font-[590] tracking-[-0.3px]">Cognitive cluster</h3>
              </div>
              <p className="text-text-tertiary text-[13px] leading-[1.6] mb-4">
                40 questions across logic, pattern, verbal, math & spatial thinking.
                You get placed in a cluster — you only see people who think like you. No scores, no ranking.
              </p>
              <div className="flex justify-center">
                <RadarChart />
              </div>
              <p className="text-text-quaternary text-[11px] text-center mt-2">Example cognitive shape — yours will be unique</p>
            </motion.div>

            {/* Pillar 2 — Values */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="glass-card p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#6366f1" strokeWidth="1.5"><path d="M10 4C8 2 4 2 4 6c0 5 6 8 6 8s6-3 6-8c0-4-4-4-6-2Z" /></svg>
                </div>
                <h3 className="text-[16px] font-[590] tracking-[-0.3px]">Dealbreaker values</h3>
              </div>
              <p className="text-text-tertiary text-[13px] leading-[1.6] mb-4">
                16 real scenarios — kids, religion, monogamy, lifestyle.
                Incompatible answers filter people out <em>before</em> you ever match.
              </p>

              {/* Values carousel */}
              <div className="bg-[rgba(255,255,255,0.02)] border border-border-subtle rounded-xl p-4 min-h-[170px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeValue}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-text-quaternary text-[11px] font-[510] tracking-[0.5px] uppercase mb-2.5">
                      Question {activeValue + 1} of 16
                    </p>
                    <p className="text-[14px] font-[510] leading-[1.5] mb-3">
                      {valuesExamples[activeValue].q}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {valuesExamples[activeValue].tags.map((tag, j) => (
                        <span
                          key={tag}
                          className="text-[11px] font-[510] px-3 py-1.5 rounded-lg border"
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

                <div className="flex gap-1.5 mt-3">
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

      {/* ═══ Waitlist + CTA ═══ */}
      <section id="waitlist" className="relative py-14 sm:py-20 px-5 sm:px-6 overflow-hidden">
        <div className="water-bg"><img src="/bg-water-3.png" alt="" /></div>

        <div className="max-w-[480px] mx-auto relative text-center">
          <motion.img
            src="/mascots/pose-splash.png"
            alt=""
            className="w-24 sm:w-28 h-auto mx-auto object-contain mb-5"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          />

          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-[clamp(24px,5vw,36px)] font-[590] tracking-[-1px] leading-[1.05] mb-3">
            Get early access
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="text-text-tertiary text-[14px] leading-[1.6] mb-6">
            We launch city by city. Drop your email — we message you when your area opens.
          </motion.p>

          {waitlistCount !== null && waitlistCount > 0 && (
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="text-accent/60 text-[13px] font-[510] mb-5">
              {waitlistCount.toLocaleString()} people already waiting
            </motion.p>
          )}

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-5 text-center">
              <p className="text-success text-[15px] font-[590] mb-1">You&apos;re on the list!</p>
              <p className="text-text-quaternary text-[13px]">We&apos;ll reach out when your area opens.</p>
            </motion.div>
          ) : (
            <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} onSubmit={handleWaitlist} className="space-y-3">
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
            </motion.form>
          )}

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} className="mt-5">
            <Link href="/test" className="text-accent text-[13px] font-[510] hover:underline">
              Or take the test now — free, 15 min →
            </Link>
          </motion.div>
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
