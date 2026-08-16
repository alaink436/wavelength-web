"use client";

// Basalt - Follow Through, marketing page for the dedicated domain.
//
// Rewritten 2026-08-16. The version before this one was written on 2026-07-21,
// before the app existed in the form it ships in, and every load of it made a
// promise the store build does not keep:
//
//   · "Ein Ziel. Basalt lässt genau eines zu."  The app runs several routines
//     side by side, each with its own weekly frequency, no main one. That claim
//     sat in the h1, in the sub-copy, in <title> and in the OG description.
//   · "Zwei Arten von Zielen", quit vs. build.  That framework is gone. A
//     routine is a thing you tick off; blocking is one capability near the end,
//     and the positioning rule in ASC-LISTING.md keeps it there on purpose.
//   · "Du legst am Anfang fest, wie lange du durchziehst."  The target span is
//     optional and empty is the normal case.
//   · The widget, the plan, sharing, and what is free vs. paid: all missing,
//     although the store subtitle is literally "gewohnheiten im widget".
//   · Dead "#" links where the privacy policy and the terms belong.
//
// Every claim below is lifted from the approved German store copy in
// AI-Brain/Projects/Basalt/ASC-LISTING.md. Nothing here is promised that the
// shipped build does not do.
//
// Look: design v3 (2026-08-04), the app's own. Figtree on white, ink #111111,
// monochrome, emphasis by weight and size rather than by hue. The warm ember
// palette this page used to carry belongs to design v1/v2 and no longer exists
// anywhere in the app. Same treatment the /s/<code> invite page already got.

import Image from "next/image";
import { motion } from "framer-motion";

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
const APP_STORE_URL = "https://apps.apple.com/de/app/id6762440839";
const PRIVACY_URL = "https://getklar.org/basalt/privacy";
const TERMS_URL = "https://getklar.org/basalt/terms";
const CONTACT = "support@getklar.org";

const FEATURES = [
  {
    title: "mehr als eine routine",
    body: "mehrere laufen nebeneinander, jede mit ihrer eigenen anzahl pro woche. dreimal laufen, sonntags zu hause anrufen, unter der woche zwanzig minuten lesen. keine rangfolge, keine hauptroutine.",
  },
  {
    title: "eine routine darf enden",
    body: "wenn du willst, gibst du ihr einen zeitraum. ist der vorbei, ist die routine fertig. fertig, nicht abgebrochen. es gibt keine zahl, die ewig weiterläuft und verteidigt werden will: ein verpasster dienstag ist ein verpasster dienstag und kein grund, die app zu löschen. lässt du den zeitraum leer, läuft die routine einfach weiter.",
  },
  {
    title: "das widget ist die app",
    body: "abgehakt wird auf dem homescreen, ohne etwas zu öffnen. in der app legst du eine routine an, schaust dir den plan an und änderst, was sie von dir verlangt. an den meisten tagen kommst du gar nicht so weit.",
  },
  {
    title: "plan und kalender",
    body: "die planansicht zeigt, was die woche von dir will. wenn du es lieber im kalender hast, exportierst du sie dorthin.",
  },
  {
    title: "eine person, nur lesen",
    body: "du kannst eine routine mit einer person teilen, per code oder qr. sie sieht, wie es läuft. sie kann nichts ändern, dich nicht anstupsen, dir nichts wegnehmen. ein fenster, kein griff.",
  },
  {
    title: "leise mit absicht",
    body: "monochrom, keine akzentfarbe, folgt hell und dunkel. kein feed, kein profil, keine punkte, keine bestenliste, nichts zum scrollen. die app hat keinen grund, dich festzuhalten.",
  },
];

function StoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-flex h-12 items-center justify-center rounded-full bg-[var(--ink)] px-7 text-[15px] font-bold text-[var(--paper)] transition-opacity hover:opacity-85 ${className}`}
    >
      laden im App&nbsp;Store
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <div className="mx-auto max-w-[860px] px-6 py-16 sm:px-8 sm:py-24">
        {/* ── Masthead */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="mb-14 flex items-center gap-4"
        >
          <Image
            src="/basalt/icon.png"
            alt="App-Symbol von Basalt"
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
              gewohnheiten im widget · iPhone
            </div>
          </div>
        </motion.div>

        {/* ── Hero. The store listing's own opening line. */}
        <section className="grid items-center gap-10 sm:grid-cols-[1fr_auto]">
          <div>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-[clamp(34px,7vw,60px)] font-extrabold leading-[1.04] tracking-[-0.03em]"
            >
              die meisten tage{" "}
              <span className="text-[var(--mute)]">bleibt diese app zu.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="mt-6 max-w-[52ch] text-[17px] font-medium leading-[1.6] text-[var(--mute)]"
            >
              du schreibst auf, was du durchziehen willst, und wie oft pro woche.
              abgehakt wird auf dem homescreen. das ist der ganze ablauf.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <StoreButton />
              <span className="text-[14px] font-medium text-[var(--mute)]">
                iPhone, ab iOS&nbsp;16.4
              </span>
            </motion.div>
          </div>

          {/* The app's own hero object, unretouched. */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            aria-hidden
            className="order-first justify-self-center sm:order-none sm:justify-self-end"
          >
            <Image
              src="/basalt/tower.png"
              alt=""
              width={760}
              height={760}
              priority
              className="h-auto w-[180px] sm:w-[230px]"
            />
          </motion.div>
        </section>

        {/* ── What it does */}
        <section className="mt-20 rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-7 sm:mt-28 sm:p-9">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i % 3}
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

        {/* ── Blocking. One section, near the end, described as focus: the
             positioning rule from ASC-LISTING.md, kept here too. */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
          className="mt-20 border-t border-[var(--line)] pt-14 sm:mt-28"
        >
          <Image
            src="/basalt/shield.png"
            alt=""
            width={512}
            height={512}
            loading="lazy"
            aria-hidden
            className="mb-5 h-auto w-[68px]"
          />
          <h2 className="max-w-[18ch] text-[28px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[36px]">
            wenn das handy im weg steht
          </h2>
          <p className="mt-5 max-w-[62ch] text-[17px] font-medium leading-[1.6] text-[var(--mute)]">
            basalt kann die apps und webseiten schließen, die an dir ziehen: auf
            zuruf, wenn du dir eine stunde zurückholen willst, oder nachts nach
            plan. was geschlossen wird, wählst du in apples eigener
            bildschirmzeit-auswahl aus. die app erfährt nie, was du gewählt hast,
            die auswahl bleibt auf deinem gerät. das ist reibung, kein schloss,
            das sich nicht knacken lässt, und reibung ist meistens genau der
            teil, der gefehlt hat.
          </p>
          <p className="mt-6 max-w-[62ch] text-[15px] font-medium leading-[1.6] text-[var(--mute)]">
            routinen, abhaken, das widget, der plan und das teilen sind kostenlos
            und bleiben es. das schließen ist der bezahlte teil: premium, als
            abo monatlich oder jährlich.
          </p>
        </motion.section>

        {/* ── Close */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
          className="mt-20 border-t border-[var(--line)] pt-14 sm:mt-28"
        >
          <h2 className="max-w-[22ch] text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[36px]">
            basalt verspricht dir nicht, dass du durchhältst.
          </h2>
          <p className="mt-5 max-w-[56ch] text-[17px] font-medium leading-[1.6] text-[var(--mute)]">
            es hält den nachweis dort, wo du sowieso hinschaust, und geht dir
            sonst aus dem weg.
          </p>
          <StoreButton className="mt-9" />
        </motion.section>

        {/* ── Footer */}
        <footer className="mt-20 border-t border-[var(--line)] pt-7 sm:mt-28">
          <p className="text-[13px] font-medium leading-[2] tracking-[0.02em] text-[var(--mute)]">
            <a href={PRIVACY_URL} className="text-[var(--ink)] underline">
              Datenschutz
            </a>
            {" · "}
            <a href={TERMS_URL} className="text-[var(--ink)] underline">
              Nutzungsbedingungen
            </a>
            {" · "}
            <a href={`mailto:${CONTACT}`} className="text-[var(--ink)] underline">
              {CONTACT}
            </a>
            <br />
            Von Alain Kessler (Schweiz), als{" "}
            <a
              href="https://getklar.org"
              className="text-[var(--ink)] underline"
            >
              Klar
            </a>
            . Daten in der Europäischen Union.
          </p>
        </footer>
      </div>
    </main>
  );
}
