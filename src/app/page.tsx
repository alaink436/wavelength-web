"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.7, ease },
  }),
};

// ── Wave mark, no rounded-rect-with-gradient
function WaveMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 32 22" fill="none" aria-label="On Wavelength">
      <path
        d="M2 11c3-7 6-7 9 0s6 7 9 0 6-7 9 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ── App Store / Google Play buttons (no gradient/glow, just solid)
function StoreButtons({ small = false }: { small?: boolean }) {
  const h = small ? "h-11" : "h-14";
  const px = small ? "px-5" : "px-6";
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="https://apps.apple.com/de/app/on-wavelength/id6739700000"
        className={`inline-flex items-center justify-center gap-3 ${px} ${h} rounded-xl bg-[var(--foreground)] text-[var(--background)] font-semibold transition-transform active:scale-[0.98] hover:opacity-90`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <span className="text-[15px]">App Store</span>
      </a>
      <a
        href="#"
        className={`inline-flex items-center justify-center gap-3 ${px} ${h} rounded-xl border border-[var(--border)] bg-transparent text-[var(--text-secondary)] font-medium hover:text-[var(--foreground)] hover:border-[var(--text-tertiary)] transition-colors`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333L14.5 12.707zm3.79-3.789l2.706 1.568a1 1 0 0 1 0 1.732l-2.708 1.568-2.554-2.434 2.556-2.434zM5.864 2.658L16.802 8.99l-2.302 2.302L5.864 2.658z" />
        </svg>
        <span className="text-[14px]">Bald auf Google Play</span>
      </a>
    </div>
  );
}

// ── Phone mockup, less chrome, more editorial
function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 268 }}>
      <div
        style={{
          aspectRatio: "9 / 19",
          background: "oklch(0.10 0.012 250)",
          border: "1px solid oklch(0.22 0.012 250)",
          borderRadius: 38,
          padding: "14px 10px 18px",
          position: "relative",
        }}
      >
        {/* Notch */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 86,
            height: 20,
            background: "oklch(0.07 0.012 250)",
            borderRadius: 14,
          }}
        />

        <div style={{ padding: "32px 10px 8px", height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 4px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, color: "var(--accent)" }}>
              <WaveMark size={18} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)", letterSpacing: -0.3 }}>
                VB Mittwoch
              </span>
            </div>
            <span style={{ fontSize: 10, color: "var(--text-tertiary)", fontWeight: 500 }}>14 Members</span>
          </div>

          {/* AutoFind result */}
          <div
            style={{
              background: "oklch(0.16 0.012 250)",
              border: "1px solid oklch(0.22 0.012 250)",
              borderRadius: 14,
              padding: "14px 14px 16px",
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 10 }}>
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--success)",
                }}
              />
              <span style={{ fontSize: 9, fontWeight: 600, color: "var(--success)", letterSpacing: 0.4, textTransform: "uppercase" }}>
                AutoFind
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: 19,
                fontWeight: 700,
                color: "var(--foreground)",
                marginBottom: 2,
                letterSpacing: -0.4,
              }}
            >
              Mi · 19:00
            </div>
            <div style={{ fontSize: 10.5, color: "var(--text-secondary)", marginBottom: 14 }}>
              11 von 14 verfügbar
            </div>

            {/* Avatar row */}
            <div style={{ display: "flex" }}>
              {["JM", "AS", "LK", "TN", "BR", "MO", "EH"].map((init, i) => (
                <div
                  key={i}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: `oklch(${0.55 + (i % 3) * 0.05} 0.12 ${230 + i * 8})`,
                    border: "2px solid oklch(0.16 0.012 250)",
                    marginLeft: i === 0 ? 0 : -7,
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
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "oklch(0.25 0.012 250)",
                  border: "2px solid oklch(0.16 0.012 250)",
                  marginLeft: -7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 8,
                  fontWeight: 600,
                  color: "var(--text-tertiary)",
                }}
              >
                +4
              </div>
            </div>
          </div>

          {/* Heatmap bars */}
          <div style={{ display: "flex", gap: 3, marginBottom: 6 }}>
            {[2, 3, 4, 5, 4, 3, 2].map((level, i) => {
              const heights = [22, 28, 34, 40, 34, 28, 22];
              const opacities = [0.25, 0.4, 0.6, 1, 0.6, 0.4, 0.25];
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: heights[i],
                    borderRadius: 4,
                    background: "var(--accent)",
                    opacity: opacities[i],
                    alignSelf: "flex-end",
                  }}
                />
              );
            })}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", padding: "0 2px" }}>
            {["M", "D", "M", "D", "F", "S", "S"].map((day, i) => (
              <span key={i} style={{ fontSize: 8, color: "var(--text-quaternary)", fontWeight: 500, flex: 1, textAlign: "center" }}>
                {day}
              </span>
            ))}
          </div>

          <div style={{ flex: 1 }} />

          {/* Tab indicator */}
          <div style={{ display: "flex", gap: 4, justifyContent: "center", padding: "10px 0 4px" }}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: i === 1 ? 16 : 4,
                  height: 4,
                  borderRadius: 2,
                  background: i === 1 ? "var(--accent)" : "oklch(0.25 0.012 250)",
                }}
              />
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
      {/* ── Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "oklch(0.13 0.012 250 / 0.85)", backdropFilter: "blur(20px) saturate(140%)" }}
      >
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[var(--accent)]">
            <WaveMark size={22} />
            <span className="text-[15px] font-semibold tracking-tight text-[var(--foreground)]">On Wavelength</span>
          </div>
          <a
            href="https://apps.apple.com/de/app/on-wavelength/id6739700000"
            className="h-9 px-5 inline-flex items-center justify-center rounded-lg bg-[var(--foreground)] text-[var(--background)] text-[13px] font-semibold transition-opacity hover:opacity-90"
          >
            App laden
          </a>
        </div>
      </nav>

      {/* ── Hero — asymmetric, copy-led */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 sm:px-8 overflow-hidden">
        <div className="water-bg">
          <img src="/bg-water-1.png" alt="" />
        </div>
        <div className="ambient-bg" />

        <div className="max-w-[1180px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-14 items-end">
            {/* Copy column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2.5 mb-6 text-[12px] text-[var(--text-tertiary)] font-medium tracking-tight"
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--success)",
                  }}
                />
                <span>iPhone · iOS 17+ · Im App Store</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(40px, 7.5vw, 78px)",
                  fontWeight: 700,
                  lineHeight: 0.98,
                  letterSpacing: "-0.035em",
                }}
                className="mb-7 text-[var(--foreground)]"
              >
                Termine finden ohne
                <br />
                Whatsapp-Drama.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease }}
                className="text-[var(--text-secondary)] text-[17px] sm:text-[19px] leading-[1.55] max-w-[52ch] mb-9"
              >
                Der Kalender für Sport-Teams und Freundeskreise. Heatmap-Voting, Lineup-Grid für
                acht Sportarten, Live-Attendance. AutoFind schlägt in vier Sekunden den Termin
                vor, an dem die meisten können.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease }}
              >
                <StoreButtons />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-[13px] text-[var(--text-tertiary)] mt-6"
              >
                Free für bis zu 2 Gruppen · Pro €4.99/Monat
              </motion.p>
            </div>

            {/* Phone column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9, ease }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Editorial split: AutoFind sequence */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-8 overflow-hidden">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-16"
          >
            <div className="lg:col-span-4">
              <div className="section-num text-[15px] mb-3">01 / AutoFind</div>
            </div>
            <div className="lg:col-span-8">
              <h2
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(28px, 4.5vw, 44px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
                className="text-[var(--foreground)]"
              >
                Vier Sekunden vom Tap bis zum Termin.
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6">
            <div className="lg:col-span-4 lg:col-start-5">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="text-[var(--text-secondary)] text-[16px] leading-[1.6]"
              >
                Du tappst auf <span className="text-[var(--foreground)] font-medium">Termin finden</span>.
                Die App fragt deine Gruppe nach freien Slots. Eine Funnel-Animation läuft durch
                die Gesichter deiner Member und stoppt beim besten Match. Doodle, aber ohne 6
                Tage warten.
              </motion.p>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="border-t border-[var(--border)] pt-4"
              >
                <div
                  style={{
                    fontFamily: "var(--font-bricolage)",
                    fontSize: 56,
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    color: "var(--accent)",
                  }}
                >
                  4s
                </div>
                <div className="text-[12px] text-[var(--text-tertiary)] mt-2 font-medium tracking-tight uppercase">
                  Median auf 14 Member
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coach-Tools, list-style — no card grid */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-8 overflow-hidden">
        <div className="water-bg">
          <img src="/bg-water-2.png" alt="" />
        </div>
        <div className="max-w-[1180px] mx-auto relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 mb-14"
          >
            <div className="lg:col-span-4">
              <div className="section-num text-[15px] mb-3">02 / Coach-Tools</div>
            </div>
            <div className="lg:col-span-8">
              <h2
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(28px, 4.5vw, 44px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
                className="text-[var(--foreground)] mb-5"
              >
                TeamSnap kostet 100€ und ist für US-Football gebaut.
              </h2>
              <p className="text-[var(--text-secondary)] text-[17px] leading-[1.6] max-w-[58ch]">
                On Wavelength macht das, was du als Amateur-Coach wirklich brauchst — und ist
                für Teams unter 8 Member kostenlos.
              </p>
            </div>
          </motion.div>

          {/* Sport list — text-driven, type contrast, no icons */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 mb-16 max-w-[760px]"
          >
            {[
              ["Football", "11"],
              ["Volleyball", "7"],
              ["Basketball", "5"],
              ["Handball", "7"],
              ["Hockey", "7"],
              ["Tennis", "2"],
              ["Badminton", "2"],
              ["Running", "1"],
            ].map(([sport, n]) => (
              <li key={sport} className="flex items-baseline gap-2 border-b border-[var(--border-subtle)] pb-3">
                <span
                  style={{
                    fontFamily: "var(--font-bricolage)",
                    fontSize: 22,
                    fontWeight: 500,
                    color: "var(--accent)",
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {n}
                </span>
                <span className="text-[15px] text-[var(--foreground)] font-medium">{sport}</span>
              </li>
            ))}
          </motion.ul>

          {/* Coach features — prose, not cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[
              {
                head: "Lineup-Grid",
                body: "Sport-spezifisches Aufstellungs-Layout. Bench daneben. Live für alle sichtbar.",
              },
              {
                head: "Live-Attendance",
                body: "Wer kommt, wer nicht, wer hat sich noch nicht gemeldet. Push-Reminder vor Training.",
              },
              {
                head: "Match-Statistik",
                body: "Schalt es an wenn du willst. Aus wenn du keine Lust hast. Standard ist aus.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.head}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
              >
                <h3 className="text-[18px] font-semibold tracking-tight mb-2 text-[var(--foreground)]">{f.head}</h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-[1.6]">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For friend groups */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-8 overflow-hidden">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8"
          >
            <div className="lg:col-span-4">
              <div className="section-num text-[15px] mb-3">03 / Freundeskreise</div>
            </div>
            <div className="lg:col-span-8">
              <h2
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(28px, 4.5vw, 44px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
                className="text-[var(--foreground)] mb-5"
              >
                400 Whatsapp-Nachrichten und immer noch kein Datum.
              </h2>
              <p className="text-[var(--text-secondary)] text-[17px] leading-[1.6] max-w-[58ch] mb-8">
                Heatmap-Voting löst das. Alle markieren ihre freien Slots, der beste Termin fällt
                farblich auf. Quorum setzen: &quot;wir brauchen mindestens 5&quot;.
              </p>

              {/* Heatmap visualization */}
              <div className="flex items-stretch gap-1 max-w-[480px]">
                {[
                  [0.1, 0.2, 0.3, 0.5, 0.7, 0.4, 0.2],
                  [0.2, 0.3, 0.4, 0.7, 0.9, 0.6, 0.3],
                  [0.3, 0.4, 0.6, 0.85, 1.0, 0.7, 0.4],
                  [0.2, 0.3, 0.5, 0.7, 0.8, 0.5, 0.3],
                ].map((row, ri) => (
                  <div key={ri} className="flex flex-col gap-1 flex-1">
                    {row.map((v, ci) => (
                      <div
                        key={ci}
                        style={{
                          aspectRatio: "1",
                          background: `oklch(${0.18 + v * 0.5} ${v * 0.18} 245)`,
                          borderRadius: 3,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-4 text-[11px] text-[var(--text-quaternary)] font-medium tracking-tight uppercase">
                <span>Wenig verfügbar</span>
                <div className="flex-1 h-px bg-[var(--border-subtle)]" />
                <span>Alle können</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── App mode chooser teaser */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-8 overflow-hidden border-t border-[var(--border-subtle)]">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="max-w-[700px]"
          >
            <div className="section-num text-[15px] mb-3">04 / Setup</div>
            <h2
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
              }}
              className="text-[var(--foreground)] mb-5"
            >
              Sport-Only oder Beides — du wählst beim Start.
            </h2>
            <p className="text-[var(--text-secondary)] text-[16px] leading-[1.65] max-w-[55ch]">
              Wenn du nur dein Volleyball-Team koordinierst, blendest du den Freundeskreis-Bereich
              komplett aus. Kein UI-Lärm den du nicht brauchst. Kannst du jederzeit umstellen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA */}
      <section className="relative py-28 sm:py-36 px-6 sm:px-8 overflow-hidden">
        <div className="water-bg">
          <img src="/bg-water-3.png" alt="" />
        </div>
        <div className="max-w-[760px] mx-auto relative">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(36px, 6vw, 60px)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.035em",
            }}
            className="text-[var(--foreground)] mb-6"
          >
            Erster Termin steht in vier Minuten.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-[var(--text-secondary)] text-[17px] leading-[1.6] mb-10 max-w-[50ch]"
          >
            Lade On Wavelength, gründe deine erste Gruppe, schick den QR-Code rum. Drei Member
            stimmen ab, die App schlägt den ersten Termin vor. Fertig.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <StoreButtons />
          </motion.div>
        </div>
      </section>

      {/* ── Footer */}
      <footer className="border-t border-[var(--border-subtle)] py-10 px-6 sm:px-8">
        <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-3 text-[var(--accent)]">
            <WaveMark size={18} />
            <span className="text-[13px] font-semibold text-[var(--foreground)]">On Wavelength</span>
            <span className="text-[12px] text-[var(--text-tertiary)] ml-2">v1.4 · 2026</span>
          </div>
          <nav className="flex gap-7 text-[13px] text-[var(--text-tertiary)] font-medium">
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Impressum</a>
            <a href="mailto:support@onwavelength.space" className="hover:text-[var(--foreground)] transition-colors">Support</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
