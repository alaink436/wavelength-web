import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Sans, Bricolage_Grotesque, Space_Grotesk, Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// App-Theme fonts (matches Thinq/Wavelength native app — DM Sans body, Bricolage Grotesque display)
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

// Klar-unified affiliate onboarding fonts — only loaded for /affiliate/* via
// CSS-var fallthrough, doesn't impact the main landing typography.
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["500", "600", "700"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["italic"], weight: ["400"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600"] });
const jetBrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "On Wavelength — Plan smarter, together.",
  description:
    "Der Kalender für Freundeskreise und Sport-Teams. Termine per Heatmap-Voting finden, Trainings mit Lineup planen, Live-Attendance tracken. iOS + Android.",
  openGraph: {
    title: "On Wavelength — Plan smarter, together.",
    description: "Der Kalender für Freundeskreise und Sport-Teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${bricolage.variable} ${spaceGrotesk.variable} ${fraunces.variable} ${manrope.variable} ${jetBrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@sneas/telephone@1/iphone-16-max.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
