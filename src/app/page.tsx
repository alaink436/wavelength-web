"use client";

// Basalt - Follow Through, marketing page.
//
// Replaced the On Wavelength page on 2026-07-21. That one sold a group calendar
// with heatmap voting, sport lineups and a phone mockup, i.e. a product that no
// longer exists. This one is deliberately short: the app is not in the store
// yet, so an elaborate page would mostly be claims nobody can check.
//
// No mascots, no photography. The subject is self-discipline and the product
// brief rules decoration out.

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

// Apple resolves by id, so the name slug cannot go stale on a rename.
const APP_STORE_URL = "https://apps.apple.com/de/app/id6762440839";

const WAYS = [
  {
    label: "Etwas lassen",
    title: "Die App sperrt, was dich abhält",
    body: "Du wählst selbst, welche Apps und Website-Kategorien blockiert werden. Das läuft über Apples Bildschirmzeit, ist also eine echte Sperre und kein Hinweis, den man wegtippt. Welche Apps du wählst, sehen wir nie.",
  },
  {
    label: "Etwas aufbauen",
    title: "Die App plant, was zählt",
    body: "Aus deinem Ziel wird ein konkreter Plan mit festen Terminen, über die Woche verteilt statt drei Tage am Stück. Auf Wunsch legst du ihn mit einem Tap in deinen Apple Kalender.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* ── Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(12, 12, 14, 0.85)",
          backdropFilter: "blur(20px) saturate(140%)",
        }}
      >
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <span className="text-[15px] font-semibold tracking-tight text-[var(--foreground)]">
            Basalt
          </span>
          <a
            href={APP_STORE_URL}
            className="h-9 px-5 inline-flex items-center justify-center rounded-lg bg-[var(--accent)] text-[var(--background)] text-[13px] font-semibold transition-opacity hover:opacity-90"
          >
            App laden
          </a>
        </div>
      </nav>

      {/* ── Hero */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-6 sm:px-8 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(168, 213, 186, 0.06) 0%, rgba(12, 12, 14, 0) 70%)",
          }}
        />
        <div className="relative max-w-[1180px] mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="text-[clamp(40px,8vw,76px)] font-extrabold leading-[0.95] tracking-[-0.035em] max-w-[16ch]"
          >
            Ein Ziel.
            <br />
            <span className="text-[var(--accent)]">Wirklich durchgezogen.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="mt-7 text-[17px] sm:text-[19px] leading-[1.6] text-[var(--text-secondary)] max-w-[54ch]"
          >
            Die meisten Vorsätze scheitern nicht am Willen, sondern daran, dass man
            sich zehn davon gleichzeitig vornimmt. Basalt lässt genau eines zu und
            sorgt dafür, dass du drankommst.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={APP_STORE_URL}
              className="h-12 px-7 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--background)] text-[15px] font-semibold transition-opacity hover:opacity-90"
            >
              App laden
            </a>
            <span className="text-[14px] text-[var(--text-tertiary)]">
              iOS · Android folgt
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Two ways a goal gets enforced */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-8 border-t border-[var(--border-subtle)]">
        <div className="max-w-[1180px] mx-auto">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
            Zwei Arten von Zielen
          </p>
          <div className="mt-10 grid gap-10 sm:gap-14 sm:grid-cols-2">
            {WAYS.map((w, i) => (
              <motion.div
                key={w.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i}
                variants={fadeUp}
              >
                <p className="text-[13px] font-semibold text-[var(--accent)]">
                  {w.label}
                </p>
                <h2 className="mt-3 text-[24px] sm:text-[28px] font-bold tracking-[-0.02em] leading-[1.2]">
                  {w.title}
                </h2>
                <p className="mt-4 text-[16px] leading-[1.65] text-[var(--text-secondary)] max-w-[46ch]">
                  {w.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The actual differentiator */}
      <section className="relative py-20 sm:py-28 px-6 sm:px-8 border-t border-[var(--border-subtle)]">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
            className="max-w-[62ch]"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-tertiary)]">
              Der Unterschied
            </p>
            <h2 className="mt-5 text-[30px] sm:text-[40px] font-extrabold tracking-[-0.03em] leading-[1.1]">
              Dein Ziel wird fertig.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-[var(--text-secondary)]">
              Du legst am Anfang fest, wie lange du durchziehst. Läuft die Zeit ab,
              gilt das Ziel als erledigt, weil die Gewohnheit dann steht. Andere
              Blocker sind darauf ausgelegt, dich dauerhaft zahlen zu lassen. Hier
              ist das Ende eingebaut.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 border-t border-[var(--border-subtle)]">
        <div className="max-w-[1180px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-[28px] sm:text-[36px] font-extrabold tracking-[-0.03em] leading-[1.15] max-w-[20ch]">
              Was nimmst du dir vor?
            </h2>
            <a
              href={APP_STORE_URL}
              className="mt-8 h-12 px-7 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--background)] text-[15px] font-semibold transition-opacity hover:opacity-90"
            >
              App laden
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Footer */}
      <footer className="border-t border-[var(--border-subtle)] py-10 px-6 sm:px-8">
        <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-semibold text-[var(--foreground)]">
              Basalt
            </span>
            <span className="text-[12px] text-[var(--text-tertiary)]">2026</span>
          </div>
          <nav className="flex gap-7 text-[13px] text-[var(--text-tertiary)] font-medium">
            {/* TODO: real legal pages before the store release. */}
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">
              Impressum
            </a>
            <a
              href="mailto:support@onwavelength.space"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              Support
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
