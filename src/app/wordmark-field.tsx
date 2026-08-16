// The typographic field from the app's auth screens, ported to the web.
//
// Source: src/components/wordmark-field.tsx in the Basalt repo (03f2c6b, 2026-08-16). Read
// that file before changing anything here — the reasoning lives there and this is meant to be
// the same object, not a lookalike.
//
// The discipline that makes it work, carried over intact:
//   · ONE family. The reference reads as a dozen typefaces and is none of them. Figtree's four
//     cuts are the entire palette; size, weight and opacity carry all the variety, never the
//     face. Mixing families here would read as a jumble sale.
//   · Words of DIFFERENT lengths fighting for the same line. Equal-width copies of one word in
//     a grid is a wallpaper, and that is exactly what the old PNG backdrop was.
//   · Seeded, never random. Math.random would reshuffle the field on every re-render, which
//     reads as a glitch rather than as a background.
//   · One animation for the whole field, transforms only, never a clock per word.
//
// Three deliberate deviations from the native version, all forced by the medium:
//   · Fixed extent instead of the measured viewport. Reading window size during render would
//     make the server and the client disagree and React would throw away the markup. 2300px
//     clears the diagonal of a 1920x1080 window; anything wider scales the field up in CSS
//     rather than generating more of it.
//   · Lighter ink. On the phone this sits behind a login form with four controls. Here it sits
//     behind running body copy, and the app's 0.06-0.12 band turns #9C9CA1 paragraphs muddy.
//   · position: fixed, so the field stays put while the page scrolls past it.

const WORDS = [
  "BASALT",
  "FOLLOW THROUGH",
  "AGAIN",
  "TODAY",
  "STREAK",
  "DAY ONE",
  "SHOW UP",
  "KEEP GOING",
  "ONE MORE",
  "MORNING",
  "DISCIPLINE",
  "STEADY",
  "NOT TODAY",
  "STILL HERE",
  "EVERY DAY",
  "BEGIN",
  "HOLD",
  "STONE",
  "QUIET",
  "TOMORROW",
  "ON TRACK",
  "THE WORK",
  "SEVEN DAYS",
  "PROMISE",
] as const;

/** The app's own row sizes. The spread is what makes a field; one size makes a wallpaper. */
const SIZES = [22, 28, 34, 26, 44, 30, 24, 38, 32];

/** All four Figtree cuts, so weight carries the variety and nothing switches face. */
const WEIGHTS = [800, 700, 600, 500];

/** Depth, one notch quieter than the app's 0.06-0.12 — see the note about body copy above. */
const INKS = [0.045, 0.07, 0.055, 0.09, 0.06, 0.075, 0.045, 0.085];

const LEADING = 1.03;
const CAP_RATIO = 0.66;
const EXTENT = 2300;

function rand(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function pick<T>(list: readonly T[], seed: number): T {
  return list[Math.floor(rand(seed) * list.length) % list.length];
}

type Word = { text: string; size: number; weight: number; opacity: number };

function buildRows() {
  const rows: { top: number; size: number; words: Word[] }[] = [];
  let top = 0;
  let r = 0;

  while (top < EXTENT) {
    const size = pick(SIZES, r * 3.7 + 1);
    const words: Word[] = [];

    let x = 0;
    let c = 0;
    while (x < EXTENT) {
      const seed = r * 31 + c * 7 + 3;
      const text = pick(WORDS, seed);
      words.push({
        text,
        size,
        weight: pick(WEIGHTS, seed * 1.7),
        opacity: pick(INKS, seed * 2.3),
      });
      // Overshooting costs nothing because the field is clipped; undershooting
      // would leave a bald patch at the edge.
      x += text.length * size * CAP_RATIO + size * 0.16;
      c += 1;
    }

    rows.push({ top, size, words });
    top += Math.round(size * LEADING);
    r += 1;
  }

  return rows;
}

// Module scope: the field is the same on every render by construction, so there is nothing to
// recompute and nothing to memoise.
const ROWS = buildRows();

export function WordmarkField() {
  return (
    <div className="wordmark-field" aria-hidden>
      <div className="wordmark-field__plane">
        {ROWS.map((row) => (
          <div
            key={row.top}
            className="wordmark-field__row"
            style={{ top: row.top, gap: row.size * 0.16 }}
          >
            {row.words.map((w, i) => (
              <span
                key={i}
                style={{
                  fontSize: w.size,
                  lineHeight: 1,
                  fontWeight: w.weight,
                  // Caps at this size need the tracking pulled in, the same way the
                  // display styles in the app's type scale do.
                  letterSpacing: -w.size * 0.02,
                  opacity: w.opacity,
                }}
              >
                {w.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
