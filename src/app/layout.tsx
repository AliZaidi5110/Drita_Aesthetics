import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Drita's Aesthetics & SPMU Brows | Aesthetic Clinic Salisbury",
  description:
    "Salisbury's premier clinic for bespoke SPMU microblading brows, lip fillers, anti-wrinkle injectables, Profhilo skin boosters, and eyebrow threading. 4.8★ verified on Treatwell. Located at 15 Endless Street, SP1 1DL.",
  keywords: [
    "Drita's Aesthetics",
    "Drita's Aesthetics & SPMU Brows",
    "SPMU Brows Salisbury",
    "Microblading Salisbury",
    "Ombré Brows Salisbury",
    "Lip Fillers Salisbury",
    "Anti-wrinkle injections Salisbury",
    "Profhilo Salisbury",
    "Skin boosters Wiltshire",
    "Treatwell Salisbury beauty",
    "15 Endless Street beauty salon",
    "Aesthetic clinic Salisbury",
  ],
  authors: [{ name: "Drita's Aesthetics & SPMU Brows" }],
  // Point canonical to our own Vercel domain (not Treatwell).
  // When a custom domain is confirmed, replace this URL.
  metadataBase: new URL('https://www.dritasaesthetics.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Drita's Aesthetics & SPMU Brows | Aesthetic Clinic Salisbury",
    description:
      "Bespoke eyebrow mapping, lip augmentation, skin boosters, and anti-wrinkle injections at 15 Endless Street, Salisbury. 4.8★ rated · 31+ verified Treatwell reviews.",
    url: 'https://www.dritasaesthetics.co.uk',
    siteName: "Drita's Aesthetics & SPMU Brows",
    locale: 'en_GB',
    type: 'website',
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
