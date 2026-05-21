"use client";

// Welcome step: hero + what-the-app + audience fit + ideas + math + comp.
// Wavelength-specific brand story. Dark palette, Bricolage display.

import { type Lang, t, fill } from "./translations";

const T = {
  bg: "#06080E",
  surface: "#15171E",
  surfaceElevated: "#23252C",
  text: "#F2F4F8",
  textSecondary: "#9B9DA6",
  textTertiary: "#5E6068",
  accent: "#60A5FA",
  accentDark: "#3B82F6",
  border: "#1F2128",
};

interface Body {
  what: string;
  audience: string[];
  ideas: string[];
  math: string;
  compensation: string[];
}

const BODY_DE: Body = {
  what: "Wavelength ist ein iOS+Android-Kalender mit Heatmap-Voting für Gruppen-Termine. Jeder tippt seine Available-Zeiten an, die App rechnet den besten gemeinsamen Slot. Plus: ein dediziertes Coach-Modul für 8 Amateur-Sportarten mit Live-Attendance, Stats und Drill-Library.",
  audience: [
    "Hobby-Sport-Coaches (Soccer, Volleyball, Basketball, Handball, Hockey, Badminton, Tennis, Running) — sticky weil 1 Coach bringt 8 bis 16 User mit",
    "Productivity- und Calendar-Creator mit echtem Gruppen-Koordinations-Problem",
    "WG-, Familien- und Friend-Group-Travel-Lifestyle, DACH stark (#wgleben, #grouptrip)",
    "Schwach: Solo-Productivity (Notion-Audience), US-Highschool-Football (TeamSnap dominiert)",
  ],
  ideas: [
    "Coach-Day-in-the-Life: ein Training planen, App zeigt Heatmap-Voting in 30 Sek",
    "Group-Chat-Hell-vs-Wavelength: 47 Whatsapp-Messages versus ein Link mit Termin",
    "Sport-Setup-Tour: deine Drill-Library plus wie du Lineups aufstellst",
  ],
  math: "Coach-Audience konvertiert überdurchschnittlich (3 bis 5% von Reel-Views zu Install) weil sie täglich ein konkretes Pain-Problem haben. Bei 20.000 Coach-Followern, 5% Engagement, 4% Click-Rate, 50% Install und 12% Premium: rund 24 Subs pro starkem Post. Bei 4,99 USD/Monat, 14 Monaten Premium-Schnitt, 50% Share: rund 35 USD pro Sub, etwa 800 USD pro Post wenn alles klappt. Productivity-Audience konvertiert schwächer (~0,5-1%) dafür höhere Reach.",
  compensation: [
    "50% Revenue-Share auf jede Premium-Sub über deinen Link, 24 Monate ab erstem Sub",
    "Monatliche Auszahlung via Wise, PayPal oder SEPA, Mindestauszahlung 50 EUR/USD",
    "30 Tage Refund-Holdback, danach fix berechnet",
    "Kein Posting-Zwang, keine Mindest-Reach-Vorgaben",
  ],
};

const BODY_EN: Body = {
  what: "Wavelength is an iOS+Android calendar with heatmap voting for group dates. Everyone taps their available times, the app computes the best shared slot. Plus a dedicated coach module for 8 amateur sports with live attendance, stats, and a drill library.",
  audience: [
    "Amateur sports coaches (soccer, volleyball, basketball, handball, hockey, badminton, tennis, running) — sticky because 1 coach brings 8 to 16 users",
    "Productivity and calendar creators with a real group-coordination problem",
    "WG / family / friend-group travel lifestyle, strong in DACH (#wgleben, #grouptrip)",
    "Weak: solo productivity (Notion audience), US high-school football (TeamSnap dominates)",
  ],
  ideas: [
    "Coach-day-in-the-life: plan a training, app shows heatmap voting in 30s",
    "Group-chat-hell vs Wavelength: 47 whatsapp messages vs a single link with a date",
    "Sport-setup tour: your drill library and how you put together lineups",
  ],
  math: "Coach audience converts above average (3 to 5% from reel views to install) because they have a daily concrete pain. At 20,000 coach followers, 5% engagement, 4% click rate, 50% install, 12% premium: ~24 subs per strong post. At $4.99/month, 14-month premium average, 50% share: ~$35 per sub, roughly $800 per post if it all hits. Productivity audience converts weaker (~0.5-1%) but reach is higher.",
  compensation: [
    "50% revenue share on every premium sub through your link, 24 months from the first sub",
    "Monthly payout via Wise, PayPal or SEPA, minimum payout 50 EUR/USD",
    "30-day refund holdback, then locked",
    "No posting requirement, no minimum reach quotas",
  ],
};

function bodyFor(lang: Lang): Body {
  return lang === "de" ? BODY_DE : BODY_EN;
}

export function WelcomeStep({
  handle,
  lang,
  sharePct,
  shareMonths,
  onNext,
}: {
  handle: string;
  lang: Lang;
  sharePct: number;
  shareMonths: number;
  onNext: () => void;
}) {
  const tt = t(lang);
  const body = bodyFor(lang);

  return (
    <div>
      <Tag>{tt.tag}</Tag>
      <h1 style={h1()}>{fill(tt.welcome_title, { handle })}</h1>
      <p style={{ fontSize: 15, color: T.textSecondary, lineHeight: 1.55, margin: "8px 0 28px" }}>
        {fill(tt.welcome_body, { sharePct, shareMonths })}
      </p>

      <Section title={tt.welcome_what_title} body={body.what} />
      <Section title={tt.welcome_audience_title} list={body.audience} />
      <Section title={tt.welcome_ideas_title} list={body.ideas} />
      <Section title={tt.welcome_math_title} body={body.math} />
      <Section title={tt.welcome_compensation_title} list={body.compensation} />

      <button
        type="button"
        onClick={onNext}
        style={{
          marginTop: 8,
          width: "100%",
          padding: "16px 24px",
          background: `linear-gradient(135deg, ${T.accentDark}, ${T.accent})`,
          color: "white",
          border: "none",
          borderRadius: 14,
          fontSize: 16,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "var(--font-dm-sans), system-ui",
        }}
      >
        {tt.nav_next}
      </button>
    </div>
  );
}

function Section({ title, body, list }: { title: string; body?: string; list?: string[] }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2
        style={{
          fontFamily: "var(--font-bricolage), system-ui",
          fontSize: 15,
          fontWeight: 700,
          color: T.accent,
          margin: "0 0 10px",
          letterSpacing: 0.2,
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
      {body && <p style={{ fontSize: 14.5, color: T.textSecondary, lineHeight: 1.65, margin: 0 }}>{body}</p>}
      {list && (
        <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
          {list.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: 14.5,
                color: T.textSecondary,
                lineHeight: 1.65,
                paddingLeft: 18,
                position: "relative",
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 7,
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: T.accent,
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "4px 10px",
        background: T.surfaceElevated,
        border: `1px solid ${T.border}`,
        borderRadius: 999,
        fontSize: 11,
        color: T.textTertiary,
        letterSpacing: 0.5,
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      On Wavelength · {children}
    </div>
  );
}

function h1(): React.CSSProperties {
  return {
    fontFamily: "var(--font-bricolage), system-ui",
    fontSize: 28,
    fontWeight: 700,
    margin: 0,
    letterSpacing: -0.6,
    color: T.text,
  };
}
