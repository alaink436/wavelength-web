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
  title: "Wavelength — Date smarter.",
  description:
    "The dating app that matches you by how you think. Take the IQ test, discover your cognitive profile, and meet people on your wavelength.",
  openGraph: {
    title: "Wavelength — Date smarter.",
    description: "The dating app that matches you by how you think.",
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
