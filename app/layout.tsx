import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Applied Technologies - Precision Engineering & Manufacturing Solutions",
  description: "Applied Technologies provides Engineering Manufacturing & Design services for Defense, Automotive, Construction Equipment manufacturers. ISO certified precision machining, CNC services, LIFTTEK screw jacks, trailer jacks, lighting tower jacks in Pune.",
  keywords: "screw jacks, trailer jacks, lighting tower screw jacks, towing jacks, parking jacks, telescopic jacks, mechanical jacks, LIFTTEK jacks, lift systems, heavy duty jacks, hydraulic jacks, leveling jacks, stabilizer jacks, trailer landing gear, jack stands, lifting equipment, construction jacks, agricultural trailer jacks, compressor trolley jacks, transit mixer support, NABL certified jacks, ARAI approved jacks, precision engineering, CNC machining, manufacturing solutions, construction equipment, aerospace parts, Pune, India, ISO certified",
  authors: [{ name: "Applied Technologies" }],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Applied Technologies - Precision Engineering & Manufacturing",
    description: "Supporting manufacturing companies in engineering to help create Innovative Products, Reduce Costs, and Shorten Development Cycles. Manufacturer of LIFTTEK screw jacks, trailer jacks, lighting tower jacks, and lifting equipment.",
    url: "https://www.appliedtek.co.in",
    siteName: "Applied Technologies",
    images: [
      {
        url: 'https://www.appliedtek.co.in/logo-square.png',
        width: 512,
        height: 512,
        alt: 'Applied Technologies Logo',
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <JsonLd />
      </head>
      <body className="antialiased">
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
