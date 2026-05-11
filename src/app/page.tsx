"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease },
  }),
};

// ── On Wavelength Logo
function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="9" fill="url(#wl-lg)" />
      <path
        d="M6 16c2.5-5 5-5 7.5 0s5 5 7.5 0 5-5 7.5 0"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <linearGradient id="wl-lg" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ── App Store Buttons
function StoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="https://apps.apple.com/de/app/on-wavelength/id6739700000"
        className="pulse-cta inline-flex items-center justify-center gap-3 px-6 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-dark)] to-[var(--accent)] text-white font-semibold transition-transform active:scale-[0.98]"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] font-medium opacity-90 leading-none">Download im</div>
          <div className="text-[15px] font-semibold leading-tight">App Store</div>
        </div>
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center gap-3 px-6 h-14 rounded-2xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)] font-semibold transition-colors hover:text-[var(--foreground)] hover:border-[var(--text-tertiary)]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333L14.5 12.707zm3.79-3.789l2.706 1.568a1 1 0 0 1 0 1.732l-2.708 1.568-2.554-2.434 2.556-2.434zM5.864 2.658L16.802 8.99l-2.302 2.302L5.864 2.658z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] font-medium opacity-90 leading-none">In Kürze auf</div>
          <div className="text-[15px] font-semibold leading-tight">Google Play</div>
        </div>
      </a>
    </div>
  );
}

// ── Phone Mockup with AutoFind animation
function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 280 }}>
      <div
        style={{
          aspectRatio: "9 / 19",
          background: "#0a0c14",
          border: "2px solid #1F2128",
          borderRadius: 44,
          padding: "12px 8px 16px",
          boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 0 6px #1a1c24",
        }}
      >
        {/* Notch */}
        <div
          style={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 90,
            height: 22,
            background: "#000",
            borderRadius: 14,
          }}
        />

        <div style={{ padding: "32px 12px 12px", height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 4px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Logo size={22} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#F2F4F8", letterSpacing: -0.3 }}>
                Volleyball Mittwoch
              </span>
            </div>
            <span style={{ fontSize: 10, color: "#60A5FA", fontWeight: 600 }}>14 Members</span>
          </div>

          {/* AutoFind result card */}
          <div
            style={{
              background: "#15171E",
              border: "1px solid #1F2128",
              borderRadius: 16,
              padding: 14,
              marginBottom: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#34D399",
                  boxShadow: "0 0 8px #34D399",
                }}
              />
              <span style={{ fontSize: 10, fontWeight: 600, color: "#34D399", letterSpacing: 0.3, textTransform: "uppercase" }}>
                AutoFind · Termin gefunden
              </span>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#F2F4F8", marginBottom: 2 }}>
              Mi, 13. Mai · 19:00
            </div>
            <div style={{ fontSize: 11, color: "#9B9DA6", marginBottom: 12 }}>11 von 14 verfügbar</div>

            {/* Avatar row */}
            <div style={{ display: "flex", marginLeft: 4 }}>
              {["JM", "AS", "LK", "TN", "BR", "MO", "EH"].map((init, i) => (
                <div
                  key={i}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, hsl(${210 + i * 12}, 70%, 55%), hsl(${230 + i * 12}, 80%, 65%))`,
                    border: "2px solid #15171E",
                    marginLeft: i === 0 ? 0 : -8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 8,
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  {init}
                </div>
              ))}
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#23252C",
                  border: "2px solid #15171E",
                  marginLeft: -8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 8,
                  fontWeight: 600,
                  color: "#9B9DA6",
                }}
              >
                +4
              </div>
            </div>
          </div>

          {/* Heatmap-ish slot grid */}
          <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
            {[2, 3, 4, 5, 4, 3, 2].map((level, i) => {
              const colors = ["#1F2128", "#1E3A5F", "#1E4D8C", "#2563EB", "#60A5FA", "#93C5FD"];
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 40,
                    borderRadius: 6,
                    background: colors[level],
                  }}
                />
              );
            })}
          </div>

          <div style={{ fontSize: 9, color: "#5E6068", fontWeight: 500, padding: "0 2px" }}>
            Verfügbarkeit · 7-Tage-Heatmap
          </div>

          <div style={{ flex: 1 }} />

          {/* Tab bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px 8px 4px",
              borderTop: "1px solid #1F2128",
            }}
          >
            {[
              { icon: "▦", active: false },
              { icon: "◐", active: true },
              { icon: "✦", active: false },
              { icon: "◇", active: false },
            ].map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: 14,
                  color: t.active ? "#60A5FA" : "#5E6068",
                }}
              >
                {t.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "rgba(6,8,14,0.85)", backdropFilter: "blur(16px) saturate(140%)" }}
      >
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Logo size={26} />
            <span className="text-[15px] font-semibold tracking-tight">On Wavelength</span>
          </div>
          <a
            href="https://apps.apple.com/de/app/on-wavelength/id6739700000"
            className="h-9 px-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-dark)] to-[var(--accent)] text-white text-[13px] font-semibold transition-transform active:scale-[0.97]"
          >
            App laden
          </a>
        </div>
      </nav>

      {/* ═══ Hero ═══ */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-20 px-5 sm:px-6 overflow-hidden">
        <div className="ambient-bg" />

        <div className="max-w-[1100px] mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[11px] font-medium text-[var(--text-secondary)]"
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#34D399",
                  boxShadow: "0 0 8px #34D399",
                }}
              />
              Live im App Store
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
              style={{ fontFamily: "var(--font-bricolage)" }}
              className="text-[clamp(36px,7vw,60px)] font-bold leading-[1] tracking-[-2px] mb-5"
            >
              Plan smarter,
              <br />
              <span className="gradient-heading">together.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease }}
              className="text-[var(--text-secondary)] text-[16px] sm:text-[17px] leading-[1.6] max-w-[44ch] mb-7"
            >
              Der Kalender für Freundeskreise und Sport-Teams. Heatmap-Voting für Termine,
              Lineup für 8 Sportarten, Live-Attendance, AutoFind in 4 Sekunden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
            >
              <StoreButtons />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[12px] text-[var(--text-tertiary)] font-medium mt-5"
            >
              Free für bis zu 2 Gruppen · Pro ab €4.99/Monat
            </motion.p>
          </div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease }}
            className="relative"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </section>

      {/* ═══ Features ═══ */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            style={{ fontFamily: "var(--font-bricolage)" }}
            className="text-[clamp(28px,5vw,40px)] font-bold tracking-[-1px] text-center mb-3"
          >
            Drei Werkzeuge, ein Kalender.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-[var(--text-secondary)] text-center max-w-[52ch] mx-auto mb-14"
          >
            Egal ob ihr ein Volleyball-Team koordiniert oder mit Freunden ein Wochenende sucht —
            On Wavelength macht beides.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Feature 1: AutoFind */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="glass-card p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12c-1.5-3-3.5-5-9-5s-7.5 2-9 5c1.5 3 3.5 5 9 5s7.5-2 9-5z" />
                  <circle cx="12" cy="12" r="2.5" fill="var(--accent)" stroke="none" />
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold tracking-[-0.3px] mb-2">
                AutoFind in 4 Sekunden
              </h3>
              <p className="text-[var(--text-secondary)] text-[14px] leading-[1.6]">
                Ein Tap, die App fragt deine Gruppe nach freien Slots, zeigt den besten Termin als
                Funnel-Animation. Doodle, aber sofort fertig.
              </p>
            </motion.div>

            {/* Feature 2: Sport-Coach-Tools */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="glass-card p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18M3 12h18" />
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold tracking-[-0.3px] mb-2">
                Coach-Tools für 8 Sportarten
              </h3>
              <p className="text-[var(--text-secondary)] text-[14px] leading-[1.6]">
                Lineup-Grid für Football, Volleyball, Basketball, Handball, Hockey, Tennis,
                Badminton, Running. Live-Attendance pro Training. Match-Statistik.
              </p>
            </motion.div>

            {/* Feature 3: AppMode */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="glass-card p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="8" height="8" rx="2" />
                  <rect x="13" y="3" width="8" height="8" rx="2" />
                  <rect x="3" y="13" width="8" height="8" rx="2" />
                  <rect x="13" y="13" width="8" height="8" rx="2" fill="var(--accent)" stroke="none" />
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold tracking-[-0.3px] mb-2">
                Sport-Only oder Beides
              </h3>
              <p className="text-[var(--text-secondary)] text-[14px] leading-[1.6]">
                Beim Start wählst du: nur Sport-Teams oder Sport + Freunde gemischt. Kein UI-Lärm
                den du nicht brauchst.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ Use Cases ═══ */}
      <section className="relative py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="glass-card p-7"
          >
            <div className="text-[11px] font-bold tracking-[1px] text-[var(--accent)] uppercase mb-3">
              Für Hobby-Sport-Coaches
            </div>
            <h3 style={{ fontFamily: "var(--font-bricolage)" }} className="text-[24px] font-bold tracking-[-0.5px] mb-3 leading-[1.15]">
              TeamSnap kostet 100€ und ist für US-Football.
            </h3>
            <p className="text-[var(--text-secondary)] text-[15px] leading-[1.6]">
              On Wavelength macht das, was du wirklich brauchst — Trainings planen, Lineup setzen,
              wer hat sich abgemeldet. Multi-Sport. Free für Teams unter 8 Member.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="glass-card p-7"
          >
            <div className="text-[11px] font-bold tracking-[1px] text-[var(--accent)] uppercase mb-3">
              Für Freundeskreise
            </div>
            <h3 style={{ fontFamily: "var(--font-bricolage)" }} className="text-[24px] font-bold tracking-[-0.5px] mb-3 leading-[1.15]">
              400 WhatsApp-Nachrichten, immer noch kein Datum.
            </h3>
            <p className="text-[var(--text-secondary)] text-[15px] leading-[1.6]">
              Heatmap-Voting löst das. Alle markieren ihre freien Slots, der beste Termin fällt
              farblich auf. Quorum kannst du setzen — &quot;wir brauchen mindestens 5&quot;.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="relative py-20 sm:py-28 px-5 sm:px-6 overflow-hidden">
        <div className="ambient-bg" />
        <div className="max-w-[600px] mx-auto relative text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            style={{ fontFamily: "var(--font-bricolage)" }}
            className="text-[clamp(28px,5vw,42px)] font-bold tracking-[-1px] mb-4 leading-[1.1]"
          >
            Hör auf, im WhatsApp-Chat
            <br />
            nach Terminen zu fragen.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-[var(--text-secondary)] text-[15px] leading-[1.6] mb-8 max-w-[44ch] mx-auto"
          >
            Lade On Wavelength, gründe deine erste Gruppe, schick den QR-Code rum. Erster Termin
            steht in 4 Minuten.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="flex justify-center"
          >
            <StoreButtons />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-10 px-5 sm:px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[var(--text-tertiary)]">
            <Logo size={20} />
            <span className="text-[13px] font-semibold">On Wavelength</span>
          </div>
          <div className="flex gap-6 text-[12px] text-[var(--text-tertiary)] font-medium">
            <a href="#" className="hover:text-[var(--text-secondary)]">Datenschutz</a>
            <a href="#" className="hover:text-[var(--text-secondary)]">Impressum</a>
            <a href="mailto:support@onwavelength.space" className="hover:text-[var(--text-secondary)]">Support</a>
          </div>
          <span className="text-[var(--text-quaternary)] text-[12px] font-medium">
            Plan smarter, together.
          </span>
        </div>
      </footer>
    </main>
  );
}
