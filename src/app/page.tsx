"use client";

// Basalt - Follow Through, marketing page for the dedicated domain.
//
// One screen since 2026-08-16. Everything that matters is in view when the page loads, and
// there is nothing below the fold to go looking for. The only thing this page has to
// accomplish is getting a phone into the App Store — the store listing is where someone who
// wants the full account goes, and it is one tap away.
//
// ⚠️ Fits rather than clips. The height is 100dvh and the content is sized to sit inside it, so
// on any ordinary phone or laptop there is simply nothing to scroll. What it deliberately does
// NOT do is set overflow:hidden on the page — on a landscape phone or a 500px-tall window that
// would cut the legal links off the bottom with no way to reach them. Below the point where the
// content physically cannot fit, it scrolls. "No scrollbar" is the goal; "unreachable content"
// is not an acceptable way to get there. The one element that IS clipped on purpose is the
// device, and it carries its own fade so the crop reads as a decision.
//
// Type is sized off min(vw, vh), not vw alone: a 1280x720 laptop has plenty of width and very
// little height, and headline sizes chosen on width alone are exactly what pushes the button
// off the bottom of a screen like that.
//
// ⚠️ Jeder Satz hier ist aus der freigegebenen englischen Store-Beschreibung belegbar,
// AI-Brain/Projects/Basalt/ASC-LISTING.md. Nichts wird versprochen, was der ausgelieferte
// Build nicht tut. Die Belege, Satz fuer Satz:
//   · "consistency is programmable." ist die These der Seite, keine Funktionszusage: was der
//     Nutzer programmiert, sind die Anzahl pro Woche, der Ort an dem sie zaehlt, das Ende der
//     Routine und die Apps, die dafuer zugehen. Alle vier stehen in der Beschreibung.
//   · "how many times a week" → "run several at once, each with its own weekly frequency"
//   · "where it counts" ist woertlich der Titel des Orts-Screens in der App
//     (routine-places.tsx, Stack.Screen-Option), und der Screen liegt seit Build 14 im Binary.
//   · "tick it off from the home screen" → "check in from the home screen, without opening
//     anything"
//   · "free. the app shutting is the paid upgrade." → "routines, check-ins, the widget, the
//     plan and sharing are free and stay free. the shutting part is the paid upgrade."
//   · die Vertrauenszeile steht wortgleich unter "quiet on purpose".
//
// ⚠️ Die Positionierungsregel aus ASC-LISTING.md gilt hier mit: Digital Wellbeing und
// Gewohnheiten, das Zumachen von Apps bleibt EIN Nebensatz und wird nie zum Kern. Deshalb
// steht es in der Zeile unter dem Knopf und nicht in der Ueberschrift.
//
// Look: design v3 (2026-08-04), the app's own — Figtree, ink #111111 on white, no accent
// colour.
//
// ── Der Umbau vom 2026-08-26 ─────────────────────────────────────────────────────────────
// Bis dahin stand hier eine Seite ohne ein einziges Bild der App, unter einer Wortwand, mit
// den ersten zwei Absaetzen der Store-Beschreibung als Text und drei rohen <ul>-Punkten
// darunter. Das las sich als eingefuegtes Listing, nicht als Seite. Vier Aenderungen:
//
//   · Das Geraet, und zwar gross. Der Routinen-Schirm in der @sneas/telephone-Huelle — genau
//     der Huelle, aus der `Projects/Basalt/Content/asc/render-asc.js` die Store-Screenshots
//     rendert, der Besucher sieht hier also dasselbe Bild wie zwei Taps spaeter im Store.
//     Erzeugt mit `phone-asset.js` aus demselben Ordner, Quelle
//     `iphone-6.9--en-US--01-routines.html`. Es ist absichtlich groesser als der Platz, den es
//     hat, und laeuft unten aus dem Bild: ein Geraet, das vollstaendig in eine Spalte passt,
//     sieht aus wie ein Icon, eines das anschneidet wie ein Produkt. Der dunkle Schirm gegen
//     den hellen Grund ist ausserdem der einzige starke Kontrast, den eine Palette ohne
//     Akzentfarbe hergibt.
//   · Der Grund. Die Wortwand ist raus, siehe shader-ground.tsx.
//   · Die Copy neu geschrieben statt aus dem Listing kopiert, und kuerzer, damit das Geraet
//     den Platz bekommt.
//   · Zwei Spalten ab lg. Vorher stand eine 720px-Spalte links in einem 1440px-Fenster und die
//     rechte Haelfte war leer; das las sich als Layout, das nie fertig wurde.

import Image from "next/image";
import { motion } from "framer-motion";

import { ShaderGround } from "./shader-ground";

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

/** Aus "quiet on purpose" in der Store-Beschreibung: "no feed, no profile, no points, no
 *  leaderboard, nothing to scroll". Drei davon, nicht fuenf — bei 393px passen vier Absagen
 *  nicht auf eine Zeile, und umgebrochen kostet die Zeile 44px, die dem Geraet fehlen.
 *  "no leaderboard" faellt zuerst, weil "no points" dasselbe schon sagt. */
const QUIET = ["no feed", "no points", "nothing to scroll"];

export default function Home() {
  return (
    <>
      <ShaderGround />
      <main className="relative z-10 flex min-h-[100dvh] flex-col px-5 py-6 text-[var(--ink)] sm:px-8 sm:py-8">
        <div className="mx-auto flex w-full max-w-[720px] flex-1 flex-col lg:max-w-[1180px]">
          {/* ── Masthead */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="flex items-center justify-center gap-3.5 lg:justify-start"
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

          {/* ── Der Schirm. Auf dem Telefon eine Spalte, ab lg Text links und Geraet rechts. */}
          <div className="flex flex-1 flex-col lg:flex-row lg:items-stretch lg:gap-10 xl:gap-14">
            {/* ── Text. flex-none auf dem Telefon: die Spalte bekommt ihre natuerliche Hoehe,
                 und was uebrig bleibt, geht an das Geraet darunter. Waeren beide flex-1,
                 teilten sie sich den Platz haelftig und der Knopf rutschte nach oben weg. */}
            <div className="flex flex-none flex-col items-center justify-center py-4 text-center sm:py-7 lg:flex-1 lg:items-start lg:py-0 lg:text-left">
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeUp}
                className="max-w-[12ch] text-balance text-[clamp(34px,min(10.4vw,7.4vh),62px)] font-extrabold leading-[1.02] tracking-[-0.038em]"
              >
                consistency is programmable.
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeUp}
                className="mt-4 max-w-[40ch] text-balance text-[clamp(15px,min(4.2vw,2.1vh),18px)] font-medium leading-[1.55] text-[var(--mute)] sm:mt-5"
              >
                set what you want to hold, how many times a week, and where it
                counts. then tick it off from the home screen.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeUp}
                className="mt-5 flex flex-col items-center gap-2.5 sm:mt-8 lg:items-start"
              >
                <a
                  href={APP_STORE_URL}
                  // 52px on phones: clears Apple's 44pt minimum with room, and the thumb reaches
                  // for this one control on a page that has nothing else to tap.
                  className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-[var(--ink)] px-8 text-[16px] font-bold text-[var(--paper)] shadow-[0_12px_32px_-14px_rgba(17,17,17,0.6)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:h-12 sm:px-7 sm:text-[15px]"
                >
                  download on the App&nbsp;Store
                  <svg
                    aria-hidden
                    viewBox="0 0 16 16"
                    className="size-[15px] fill-none stroke-current transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {/* Eine Zeile, nicht zwei: auf 393px kostet die zweite 20px, die das
                    Geraet besser gebrauchen kann. Die Systemvoraussetzung steht dafuer
                    unten in der Fusszeile. */}
                <span className="text-[13px] font-medium leading-[1.5] text-[var(--mute)] sm:text-[13.5px]">
                  free. the app shutting is the paid upgrade.
                </span>
              </motion.div>

              {/* ── Die Vertrauenszeile. Sie ersetzt die drei Aufzaehlungspunkte: was die App
                   NICHT tut, ist bei diesem Produkt das Verkaufsargument, und vier kurze
                   Absagen tragen das besser als drei Saetze mit Punkten davor — und kosten ein
                   Viertel der Hoehe, die jetzt das Geraet bekommt. */}
              <motion.ul
                initial="hidden"
                animate="visible"
                custom={4}
                variants={fadeUp}
                className="mt-5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--faint)] sm:mt-8 sm:text-[12px] sm:tracking-[0.14em] lg:justify-start"
              >
                {QUIET.map((q, i) => (
                  <li key={q} className="flex items-center gap-2.5">
                    {i > 0 && (
                      <span aria-hidden className="text-[var(--line)]">
                        ·
                      </span>
                    )}
                    {q}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* ── Das Geraet.
                 Absichtlich groesser als seine Spalte: ab lg ist das Bild 124 % der
                 Spaltenbreite und damit hoeher als die Zeile, also laeuft es unten aus dem
                 Bild. Auf dem Telefon nimmt es den Platz, der nach der Textspalte uebrig
                 bleibt. In beiden Faellen loest es sich unten auf, statt hart abgeschnitten zu
                 werden — eine harte Kante mitten durch ein Telefon liest sich als Fehler, ein
                 Verlauf als Absicht.
                 ⚠️ min-h auf dem Telefon, damit es bei wenig Platz klein wird statt zu
                 verschwinden; bleibt gar nichts uebrig (Landschaft, 500px hohes Fenster),
                 scrollt die Seite die letzten Pixel, wie oben beschrieben. */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2.5}
              variants={fadeUp}
              className="relative min-h-[140px] flex-1 overflow-hidden [mask-image:linear-gradient(to_bottom,#000_82%,transparent_100%)] lg:min-h-0 lg:w-[46%] lg:max-w-[580px] lg:flex-none lg:[mask-image:linear-gradient(to_bottom,#000_80%,transparent_100%)]"
            >
              <Image
                src="/basalt/phone-routines.png"
                alt="Basalt on an iPhone: five routines, each with its week and a tick"
                width={980}
                height={1764}
                priority
                sizes="(min-width: 1024px) 720px, 96vw"
                className="absolute left-1/2 top-0 w-[96%] max-w-[440px] -translate-x-1/2 lg:w-[124%] lg:max-w-none"
              />
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
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 pt-3 text-[11.5px] font-medium text-[var(--mute)] sm:text-[13px] lg:justify-start"
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
            <span aria-hidden>·</span>
            <span>iPhone, iOS&nbsp;16.4 or later</span>
            {/* Der Punkt faellt auf dem Telefon weg, weil die Zeile genau hier umbricht und
                ein fuehrender Trenner am Zeilenanfang wie ein Tippfehler aussieht. */}
            <span aria-hidden className="hidden sm:inline">
              ·
            </span>
            <span>Made by Alain Kessler, Switzerland</span>
          </motion.footer>
        </div>
      </main>
    </>
  );
}
