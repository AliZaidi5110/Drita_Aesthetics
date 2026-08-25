import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Drita's Aesthetics & SPMU Brows | Beauty & Aesthetic Clinic Salisbury",
  description:
    "Salisbury's premier clinic for bespoke SPMU microblading brows, lip fillers, anti-wrinkle injectables, skin boosters, and eyebrow threading. Located at 15 Endless Street, Salisbury. Book online or on Treatwell.",
  keywords: [
    "Drita Aesthetics",
    "SPMU Brows Salisbury",
    "Microblading Salisbury",
    "Lip Fillers Salisbury",
    "Anti wrinkle injections Salisbury",
    "Profhilo Wiltshire",
    "Treatwell Salisbury beauty",
    "15 Endless Street beauty salon"
  ],
  authors: [{ name: "Drita's Aesthetics & SPMU Brows" }],
  openGraph: {
    title: "Drita's Aesthetics & SPMU Brows | Salisbury Aesthetic Clinic",
    description:
      "Bespoke eyebrow mapping, lip augmentation, skin boosters, and facial threading at 15 Endless Street, Salisbury. 4.8★ rated with 31+ Treatwell reviews.",
    url: "https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/",
    siteName: "Drita's Aesthetics & SPMU Brows",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cream-50 text-charcoal-900 font-sans antialiased selection:bg-gold-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
