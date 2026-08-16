import type { Metadata } from "next";
import { Figtree, DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// The app's own face since design v3 (2026-08-04): one geometric sans for the whole scale,
// levels separated by weight and size alone. See src/theme/fonts.ts in the app repo.
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Design v1/v2 faces. Only /i/<handle> still paints them, and that page is the affiliate
// install flow with its own dark identity; it was left alone deliberately.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const TITLE = "Basalt - Follow Through: gewohnheiten im widget";
const DESCRIPTION =
  "Du schreibst auf, was du durchziehen willst, und wie oft pro Woche. Abgehakt wird auf dem Homescreen. Eine Routine darf enden, dann ist sie fertig. Kein Feed, keine Punkte, nichts zum Scrollen.";

export const metadata: Metadata = {
  metadataBase: new URL("https://onwavelength.space"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "de_DE",
    url: "https://onwavelength.space",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ⚠️ Was lang="en" while every string on the page was German.
    <html
      lang="de"
      className={`${figtree.variable} ${dmSans.variable} ${bricolage.variable}`}
    >
      {/* The @sneas/telephone script used to load here on every route. Nothing has rendered
          an <iphone-16-max> since the site was rebuilt for Basalt, so it was one third-party
          CDN request per pageview for a mockup that no page draws. */}
      <body className="min-h-screen bg-paper text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
