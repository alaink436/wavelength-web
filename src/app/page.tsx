"use client";

// Basalt - Follow Through, marketing page for the dedicated domain.
//
// English since 2026-08-16, matching the app's own interface, the App Store listing and
// getklar.org/basalt. It ran in German until then for no reason anyone could name.
//
// Cut to the minimum on the same day. It carried six feature blocks lifted wholesale from the
// store description, which is the right length for a listing someone taps "more" on and the
// wrong length for a page whose entire job is to get a phone into the App Store. What is left
// is the three things that are actually unusual about the app, plus the one paragraph that has
// to be there because it names the paid part. Everything cut is still in ASC-LISTING.md.
//
// Every claim comes from the approved English store copy in
// AI-Brain/Projects/Basalt/ASC-LISTING.md. Nothing here is promised that the shipped build
// does not do.
//
// Look: design v3 (2026-08-04), the app's own — Figtree, ink #111111 on white, no accent
// colour, emphasis by weight and size rather than hue. The backdrop is the app's auth-screen
// word field, ported in wordmark-field.tsx.

import Image from "next/image";
import { motion } from "framer-motion";

import { WordmarkField } from "./wordmark-field";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6, ease },
  }),
};

// Apple resolves by id, so a rename cannot make this link go stale.
const APP_STORE_URL = "https://apps.apple.com/app/id6762440839";
const PRIVACY_URL = "https://getklar.org/basalt/privacy";
const TERMS_URL = "https://getklar.org/basalt/terms";
const CONTACT = "support@getklar.org";

const FEATURES = [
  {
    title: "more than one routine",
    body: "run several at once, each with its own weekly frequency. they sit side by side, no ranking, no main one.",
  },
  {
    title: "a routine can end",
    body: "give it a target span and it is done when the span is over. finished, not abandoned. leave the span empty and it simply keeps going.",
  },
  {
    title: "the widget is the product",
    body: "check in from the home screen, without opening anything. most days you never get as far as the app.",
  },
];

function StoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      // 52px on phones: clears Apple's 44pt minimum with room, and the thumb reaches for this
      // one control on a page that has nothing else to tap.
      className={`inline-flex h-13 items-center justify-center rounded-full bg-[var(--ink)] px-8 text-[16px] font-bold text-[var(--paper)] transition-opacity hover:opacity-85 sm:h-12 sm:px-7 sm:text-[15px] ${className}`}
    >
      download on the App&nbsp;Store
    </a>
  );
}

export default function Home() {
  return (
    <>
      <WordmarkField />
      <main className="relative z-10 min-h-screen text-[var(--ink)]">
        <div className="mx-auto max-w-[860px] px-5 py-12 sm:px-8 sm:py-24">
          {/* ── Masthead */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="mb-12 flex items-center gap-4 sm:mb-16"
          >
            <Image
              src="/basalt/icon.png"
              alt="Basalt app icon"
              width={56}
              height={56}
              priority
              className="rounded-[14px] border border-[var(--line)]"
            />
            <div>
              <div className="text-[22px] font-extrabold leading-[1.1] tracking-[-0.02em]">
                basalt
              </div>
              <div className="text-[13px] font-medium text-[var(--mute)]">
                habit tracker in a widget · iPhone
              </div>
            </div>
          </motion.div>

          {/* ── Hero. The listing's own opening line. */}
          <section>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="max-w-[15ch] text-balance text-[clamp(32px,8vw,60px)] font-extrabold leading-[1.04] tracking-[-0.03em]"
            >
              most days,{" "}
              <span className="text-[var(--mute)]">
                you won&apos;t open this app.
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="mt-5 max-w-[52ch] text-[17px] font-medium leading-[1.6] text-[var(--mute)] sm:mt-6"
            >
              you write down what you want to follow through on, and how many
              times a week. then you tick it off on the home screen. that is the
              whole interaction.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-9"
            >
              <StoreButton />
              <span className="text-[14px] font-medium text-[var(--mute)]">
                iPhone, iOS&nbsp;16.4 or later
              </span>
            </motion.div>
          </section>

          {/* ── The three things that are actually unusual. */}
          <section className="mt-16 rounded-[20px] border border-[var(--line)] bg-[var(--surface)]/85 p-6 backdrop-blur-[2px] sm:mt-28 sm:p-9">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                variants={fadeUp}
                className="mb-7 last:mb-0"
              >
                <h2 className="text-[18px] font-bold tracking-[-0.01em]">
                  {f.title}
                </h2>
                <p className="mt-1.5 max-w-[62ch] text-[15px] font-medium leading-[1.6] text-[var(--mute)]">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </section>

          {/* ── Blocking. One section, near the end, described as focus: the positioning rule
               from ASC-LISTING.md, kept here too. It stays on a trimmed page because it is the
               only paragraph that says what costs money. */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="mt-16 border-t border-[var(--line)] pt-12 sm:mt-28 sm:pt-14"
          >
            <h2 className="max-w-[18ch] text-balance text-[26px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[36px]">
              when the phone is the thing in the way
            </h2>
            <p className="mt-5 max-w-[62ch] text-[17px] font-medium leading-[1.6] text-[var(--mute)]">
              basalt can shut the apps and websites that pull at you, on demand
              or on a schedule at night. you pick what gets shut in apple&apos;s
              own screen time picker, and the app never learns what you picked.
            </p>
            <p className="mt-5 max-w-[62ch] text-[15px] font-medium leading-[1.6] text-[var(--mute)]">
              routines, check-ins, the widget, the plan and sharing are free and
              stay free. the shutting part is the paid upgrade.
            </p>
          </motion.section>

          {/* ── Close */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="mt-16 border-t border-[var(--line)] pt-12 sm:mt-28 sm:pt-14"
          >
            <h2 className="max-w-[22ch] text-balance text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[36px]">
              basalt does not promise you will follow through.
            </h2>
            <p className="mt-5 max-w-[56ch] text-[17px] font-medium leading-[1.6] text-[var(--mute)]">
              it keeps the record where you already look, and gets out of the
              way.
            </p>
            <StoreButton className="mt-8 sm:mt-9" />
          </motion.section>

          {/* ── Footer. The legal links are their own rows on a phone, each a full 44px target;
               as a run-on line separated by "·" they were 17px inline boxes, which is half a
               thumb and puts the privacy policy one slip away from the terms. */}
          <footer className="mt-16 border-t border-[var(--line)] pt-5 sm:mt-28 sm:pt-7">
            <nav className="flex flex-col text-[15px] font-medium sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:text-[13px]">
              {[
                { href: PRIVACY_URL, label: "Privacy Policy" },
                { href: TERMS_URL, label: "Terms of Use" },
                { href: `mailto:${CONTACT}`, label: CONTACT },
              ].map((l, i) => (
                <span key={l.href} className="contents">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="hidden text-[var(--mute)] sm:inline"
                    >
                      ·
                    </span>
                  )}
                  <a
                    href={l.href}
                    className="inline-flex min-h-11 items-center text-[var(--ink)] underline sm:min-h-0"
                  >
                    {l.label}
                  </a>
                </span>
              ))}
            </nav>
            <p className="mt-3 text-[13px] font-medium leading-[1.7] tracking-[0.02em] text-[var(--mute)]">
              Made by Alain Kessler (Switzerland), operating as{" "}
              <a
                href="https://getklar.org"
                className="text-[var(--ink)] underline"
              >
                Klar
              </a>
              . Data stored in the European Union.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
