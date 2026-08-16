"use client";

// Basalt - Follow Through, marketing page for the dedicated domain.
//
// One screen since 2026-08-16. Everything that matters is in view when the page loads, and
// there is nothing below the fold to go looking for. The page went from six store-description
// feature blocks (3140px tall on a phone) to three lines, because the only thing this page has
// to accomplish is getting a phone into the App Store — the store listing is where someone who
// wants the full account goes, and it is one tap away.
//
// ⚠️ Fits rather than clips. The height is 100dvh and the content is sized to sit inside it, so
// on any ordinary phone or laptop there is simply nothing to scroll. What it deliberately does
// NOT do is set overflow:hidden — on a landscape phone or a 500px-tall window that would cut
// the legal links off the bottom with no way to reach them. Below the point where the content
// physically cannot fit, it scrolls. "No scrollbar" is the goal; "unreachable content" is not
// an acceptable way to get there.
//
// Type is sized off min(vw, vh), not vw alone: a 1280x720 laptop has plenty of width and very
// little height, and headline sizes chosen on width alone are exactly what pushes the button
// off the bottom of a screen like that.
//
// Every claim comes from the approved English store copy in
// AI-Brain/Projects/Basalt/ASC-LISTING.md. Nothing here is promised that the shipped build
// does not do.
//
// Look: design v3 (2026-08-04), the app's own — Figtree, ink #111111 on white, no accent
// colour. The backdrop is the app's auth-screen word field, ported in wordmark-field.tsx.

import Image from "next/image";
import { motion } from "framer-motion";

import { WordmarkField } from "./wordmark-field";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.6, ease },
  }),
};

// Apple resolves by id, so a rename cannot make this link go stale.
const APP_STORE_URL = "https://apps.apple.com/app/id6762440839";
const PRIVACY_URL = "https://getklar.org/basalt/privacy";
const TERMS_URL = "https://getklar.org/basalt/terms";
const CONTACT = "support@getklar.org";

// Three lines, in the order someone decides in: what it is, why it ends, what it costs.
const POINTS = [
  "several routines at once, each with its own weekly frequency",
  "a routine can have an end, and then it is done",
  "free to use; shutting the apps that pull at you is the paid upgrade",
];

export default function Home() {
  return (
    <>
      <WordmarkField />
      <main className="relative z-10 flex min-h-[100dvh] flex-col px-5 py-6 text-[var(--ink)] sm:px-8 sm:py-8">
        <div className="mx-auto flex w-full max-w-[720px] flex-1 flex-col">
          {/* ── Masthead */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="flex items-center gap-3.5"
          >
            <Image
              src="/basalt/icon.png"
              alt="Basalt app icon"
              width={48}
              height={48}
              priority
              className="size-11 rounded-[12px] border border-[var(--line)] sm:size-12"
            />
            <div>
              <div className="text-[19px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[21px]">
                basalt
              </div>
              <div className="text-[12.5px] font-medium text-[var(--mute)] sm:text-[13px]">
                habit tracker in a widget · iPhone
              </div>
            </div>
          </motion.div>

          {/* ── The whole page. Centred in whatever room is left between masthead and footer. */}
          <div className="flex flex-1 flex-col justify-center py-6 sm:py-8">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="max-w-[15ch] text-balance text-[clamp(30px,min(9vw,6.4vh),56px)] font-extrabold leading-[1.05] tracking-[-0.03em]"
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
              className="mt-4 max-w-[54ch] text-[clamp(15px,min(4.2vw,2.1vh),18px)] font-medium leading-[1.55] text-[var(--mute)] sm:mt-5"
            >
              you write down what you want to follow through on, and how many
              times a week. then you tick it off on the home screen. that is the
              whole interaction.
            </motion.p>

            <motion.ul
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="mt-5 flex flex-col gap-2 sm:mt-7"
            >
              {POINTS.map((p) => (
                <li
                  key={p}
                  className="flex items-baseline gap-2.5 text-[clamp(14px,min(3.9vw,1.95vh),16px)] font-medium leading-[1.45]"
                >
                  <span
                    aria-hidden
                    className="size-1.5 shrink-0 translate-y-[-2px] rounded-full bg-[var(--ink)]"
                  />
                  {p}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-9"
            >
              <a
                href={APP_STORE_URL}
                // 52px on phones: clears Apple's 44pt minimum with room, and the thumb reaches
                // for this one control on a page that has nothing else to tap.
                className="inline-flex h-13 items-center justify-center rounded-full bg-[var(--ink)] px-8 text-[16px] font-bold text-[var(--paper)] transition-opacity hover:opacity-85 sm:h-12 sm:px-7 sm:text-[15px]"
              >
                download on the App&nbsp;Store
              </a>
              <span className="text-[13.5px] font-medium text-[var(--mute)] sm:text-[14px]">
                iPhone, iOS&nbsp;16.4 or later
              </span>
            </motion.div>
          </div>

          {/* ── Footer. One line, because three 44px rows is a third of a phone screen and this
               layout does not have it to spend. These are secondary links on a page whose whole
               point is the one button above; the padded line box still gives each about 34px. */}
          <motion.footer
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[12.5px] font-medium text-[var(--mute)] sm:text-[13px]"
          >
            <a href={PRIVACY_URL} className="py-1.5 text-[var(--ink)] underline">
              Privacy
            </a>
            <span aria-hidden>·</span>
            <a href={TERMS_URL} className="py-1.5 text-[var(--ink)] underline">
              Terms
            </a>
            <span aria-hidden>·</span>
            <a
              href={`mailto:${CONTACT}`}
              className="py-1.5 text-[var(--ink)] underline"
            >
              {CONTACT}
            </a>
            <span aria-hidden className="hidden sm:inline">
              ·
            </span>
            <span className="w-full sm:w-auto">
              Made by Alain Kessler, Switzerland
            </span>
          </motion.footer>
        </div>
      </main>
    </>
  );
}
