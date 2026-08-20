import type { Metadata, Viewport } from "next";
import { Figtree, DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import KlarTracker from "./KlarTracker";

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

const TITLE = "Basalt - Follow Through: habit tracker in a widget";
const DESCRIPTION =
  "You decide how many times a week. You tick it off on the home screen. A routine can have an end, and then it is done. No feed, no points, nothing to scroll.";

export const metadata: Metadata = {
  metadataBase: new URL("https://onwavelength.space"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: "https://onwavelength.space",
  },
  // Smart App Banner. On an iPhone in Safari this puts Apple's own strip at the top of every
  // route here: "Öffnen" when Basalt is installed, otherwise the App Store. Set on the layout
  // rather than the landing page on purpose, because the two routes where it matters most are
  // the other ones — /s/<code> is by definition only ever seen by someone without the app
  // (iOS intercepts it through the AASA otherwise), and /i/<handle> exists to install.
  //
  // No app-argument: that value is handed to the app when it opens, and only /i/* and /s/*
  // are claimed in the AASA. Passing the site root would give the app a URL it does not route.
  itunes: { appId: "6762440839" },
};

export const viewport: Viewport = {
  // Not maximumScale/userScalable — pinch-zoom stays available. A marketing page is not worth
  // taking that away from anyone who needs it.
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // English across the domain since 2026-08-16, matching the app's own interface and the
    // store listing. It briefly said "de" while the landing page was German.
    <html
      lang="en"
      className={`${figtree.variable} ${dmSans.variable} ${bricolage.variable}`}
    >
      {/* The @sneas/telephone script used to load here on every route. Nothing has rendered
          an <iphone-16-max> since the site was rebuilt for Basalt, so it was one third-party
          CDN request per pageview for a mockup that no page draws. */}
      <body className="min-h-screen bg-paper text-ink font-sans antialiased">
        {children}
        <KlarTracker />
      </body>
    </html>
  );
}
