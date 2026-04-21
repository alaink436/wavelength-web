import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@sneas/telephone@1/iphone-16-max.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
