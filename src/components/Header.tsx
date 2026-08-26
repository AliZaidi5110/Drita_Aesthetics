'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Calendar, Menu, X, Star, ExternalLink, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    // Run once on mount so SSR state matches client
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinkClass = `transition-colors duration-200 font-semibold text-xs tracking-widest uppercase py-0.5 border-b-2 border-transparent ${
    isScrolled
      ? 'text-cream-100 hover:text-gold-300 hover:border-gold-400'
      : 'text-charcoal-900 hover:text-rose-600 hover:border-rose-400'
  }`;

  return (
    <header className="w-full font-sans fixed top-0 left-0 right-0 z-50">

      {/* ══════════════════════════════════════════════
          TOP UTILITY STRIP
          – Transparent state: thin rose-tinted band (intentional branding)
          – Scrolled state: hidden — collapses so only main nav stays sticky
         ══════════════════════════════════════════════ */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-10 opacity-100'
        }`}
      >
        <div className="bg-rose-900/70 backdrop-blur-md text-rose-100 text-[11px] px-4 py-1.5 border-b border-rose-800/40">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Left: location + hours */}
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-rose-300 flex-shrink-0" />
                <span>15 Endless Street, Salisbury SP1 1DL</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Clock className="w-3 h-3 text-rose-300 flex-shrink-0" />
                <span>Mon – Sat: 10:00 AM – 5:30 PM</span>
              </span>
            </div>
            {/* Right: rating + links */}
            <div className="flex items-center space-x-5">
              <span className="flex items-center space-x-1 font-medium text-yellow-300">
                <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                <span>4.8★ · 31+ Treatwell Reviews</span>
              </span>
              <a
                href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
                target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors underline underline-offset-2"
              >Booksy</a>
              <a
                href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
                target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors underline underline-offset-2"
              >Treatwell</a>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MAIN NAVIGATION BAR
          – Transparent state (at top):
              • Zero background — hero image fully visible behind it
              • backdrop-blur-sm so text stays legible over busy parts of the hero
              • Dark charcoal nav links (readable on the bright/light hero overlay)
              • No shadow, no bottom border
          – Scrolled state:
              • Solid dark background (charcoal 950 @ 95% + blur) for high contrast
              • White nav links + gold hover
              • Visible bottom border + drop-shadow to separate from content
         ══════════════════════════════════════════════ */}
      <div
        className={`w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-charcoal-950/95 backdrop-blur-lg py-3 border-b border-white/10 shadow-xl shadow-black/30'
            : 'bg-transparent backdrop-blur-sm py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* ── Brand Logo ── */}
          <a href="/" className="flex flex-col group shrink-0">
            <span
              className={`font-serif text-xl sm:text-2xl font-bold tracking-wider transition-colors duration-200 group-hover:opacity-80 drop-shadow ${
                isScrolled ? 'text-white' : 'text-charcoal-950'
              }`}
            >
              DRITA'S
            </span>
            <span
              className={`text-[10px] sm:text-xs tracking-[0.28em] uppercase font-bold transition-colors duration-200 ${
                isScrolled ? 'text-gold-400' : 'text-rose-600'
              }`}
            >
              Aesthetics &amp; SPMU Brows
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden lg:flex items-center space-x-7">
            {[
              { label: 'About', href: '/#about' },
              { label: 'Services', href: '/services' },
              { label: 'Price Guide', href: '/price-guide' },
              { label: 'Before & After', href: '/#transformations' },
              { label: 'Reviews', href: '/#reviews' },
              { label: 'FAQ', href: '/#faq' },
              { label: 'Contact', href: '/#contact' },
            ].map(({ label, href }) => (
              <a key={href} href={href} className={navLinkClass}>
                {label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA Button ── */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => onOpenBooking()}
              className={`
                flex items-center space-x-2 font-semibold text-xs uppercase tracking-widest
                px-5 py-2.5 rounded-full
                transition-all duration-250 transform hover:-translate-y-0.5
                ${isScrolled
                  ? 'bg-[#D92C44] text-white shadow-lg shadow-[#D92C44]/40 hover:bg-[#B82236] hover:shadow-[#D92C44]/60'
                  : 'bg-[#D92C44] text-white shadow-md shadow-[#D92C44]/30 hover:bg-[#B82236] hover:shadow-[#D92C44]/50'
                }
              `}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* ── Mobile: mini CTA + Hamburger ── */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Small pill CTA — visible on sm, hidden on xs to avoid crowding */}
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:flex items-center space-x-1.5 bg-[#D92C44] hover:bg-[#B82236] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md transition-all"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className={`p-2 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                isScrolled
                  ? 'text-white hover:bg-white/10'
                  : 'text-charcoal-900 hover:bg-black/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MOBILE DRAWER
          Always solid background — dark velvet so links are always readable
          regardless of what's behind the header.
         ══════════════════════════════════════════════ */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-charcoal-950 border-b border-gold-500/20 px-6 py-6 space-y-1">
          {/* Utility strip info — shown inside mobile menu */}
          <div className="flex flex-col space-y-1 pb-4 mb-4 border-b border-white/10 text-[11px] text-cream-400">
            <span className="flex items-center space-x-2">
              <MapPin className="w-3 h-3 text-rose-400" />
              <span>15 Endless Street, Salisbury SP1 1DL</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-rose-400" />
              <span>Mon – Sat: 10:00 AM – 5:30 PM &nbsp;·&nbsp; Sun: By Appointment</span>
            </span>
            <a href="tel:+447480233841" className="flex items-center space-x-2 text-rose-300 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              <span>+44 7480 233841</span>
            </a>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col space-y-0.5">
            {[
              { label: 'About Drita', href: '/#about' },
              { label: 'Services & Treatments', href: '/services' },
              { label: 'Price Guide', href: '/price-guide' },
              { label: 'Before & After', href: '/#transformations' },
              { label: 'Client Reviews (4.8★)', href: '/#reviews' },
              { label: 'Aftercare & FAQ', href: '/#faq' },
              { label: 'Contact & Location', href: '/#contact' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-2 border-b border-white/8 text-cream-100 hover:text-gold-300 hover:bg-white/5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Full-width CTA */}
          <div className="pt-5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full bg-[#D92C44] hover:bg-[#B82236] text-white font-bold py-3.5 rounded-full shadow-lg shadow-[#D92C44]/40 text-xs uppercase tracking-widest flex justify-center items-center space-x-2 transition-all duration-250"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>
            {/* Secondary booking links */}
            <div className="flex justify-center space-x-6 mt-4 text-[11px] text-cream-400">
              <a href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-gold-300 transition-colors underline">
                <ExternalLink className="w-3 h-3" />
                <span>Booksy</span>
              </a>
              <a href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-gold-300 transition-colors underline">
                <ExternalLink className="w-3 h-3" />
                <span>Treatwell</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};
