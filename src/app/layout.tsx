import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Sans, Bricolage_Grotesque } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Basalt — Ein Ziel. Wirklich durchgezogen.",
  description:
    "Du wählst ein Ziel, die App setzt es durch. Sie sperrt die Apps und Seiten, die dir im Weg stehen, oder legt dir den Plan in den Apple Kalender. Nach deiner Zielspanne ist es geschafft.",
  openGraph: {
    title: "Basalt — Ein Ziel. Wirklich durchgezogen.",
    description:
      "Ein Ziel, von der App durchgesetzt. Sperren oder planen, mit festem Ende.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${bricolage.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@sneas/telephone@1/iphone-16-max.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
