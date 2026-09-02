'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Calendar, Menu, X, Star, ExternalLink, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
  /**
   * Set to true ONLY on pages that have a full-bleed hero image directly
   * behind the header (e.g. the homepage). The header will then start
   * transparent with dark text and transition to a solid background on scroll.
   *
   * On all other pages (price-guide, services, etc.) leave this false (default)
   * and the header will be solid + fully legible immediately on page load.
   */
  hasHeroBackground?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  hasHeroBackground = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll(); // sync state on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /**
   * "Transparent" state applies ONLY when:
   *   - The page has a hero image behind the header (hasHeroBackground = true)
   *   - AND the user has NOT yet scrolled past the threshold
   *
   * On all inner pages (hasHeroBackground = false), isSolid is always true,
   * so the header renders solid immediately.
   */
  const isSolid = !hasHeroBackground || isScrolled;

  // ── Nav link class ──────────────────────────────────────────────────
  const navLinkClass = [
    'transition-colors duration-200 font-semibold text-xs tracking-widest uppercase',
    'py-0.5 border-b-2 border-transparent',
    isSolid
      ? 'text-cream-100 hover:text-gold-300 hover:border-gold-400'
      : 'text-charcoal-900 hover:text-rose-600 hover:border-rose-400',
  ].join(' ');

  // ── Hamburger icon color ────────────────────────────────────────────
  const hamburgerClass = [
    'p-2 rounded-lg transition-colors duration-200 focus:outline-none',
    'focus-visible:ring-2 focus-visible:ring-rose-500',
    isSolid
      ? 'text-white hover:bg-white/10'
      : 'text-charcoal-900 hover:bg-black/10',
  ].join(' ');

  return (
    <header className="w-full font-sans fixed top-0 left-0 right-0 z-50">

      {/* ── TOP UTILITY STRIP ──────────────────────────────────────────
          Collapses on scroll (or on inner pages where isSolid is immediately
          true), keeping the sticky header compact after the user scrolls.
         ────────────────────────────────────────────────────────────── */}
      <div
        className={[
          'hidden md:block overflow-hidden transition-all duration-300 ease-in-out',
          isSolid ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-10 opacity-100',
        ].join(' ')}
      >
        <div className="bg-rose-900/70 backdrop-blur-md text-rose-100 text-[11px] px-4 py-1.5 border-b border-rose-800/40">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
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

      {/* ── MAIN NAV BAR ───────────────────────────────────────────────
          isSolid = false → fully transparent + backdrop-blur (homepage at top)
          isSolid = true  → charcoal-950/95 + blur + shadow + border
                           (homepage after scroll, ALL inner pages immediately)
         ────────────────────────────────────────────────────────────── */}
      <div
        className={[
          'w-full transition-all duration-300 ease-in-out',
          isSolid
            ? 'bg-charcoal-950/95 backdrop-blur-lg py-3 border-b border-white/10 shadow-xl shadow-black/30'
            : 'bg-transparent backdrop-blur-sm py-5 border-b border-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* ── Brand Logo ─────────────────────────────────────────── */}
          <a
            href="/"
            className="shrink-0 group flex items-center justify-center transition-all duration-300 py-1"
            aria-label="Drita's Aesthetics & SPMU Brows – Home"
          >
            <img
              src="/images/logo-drita.png"
              alt="Drita's Aesthetics & SPMU Brows logo"
              className={[
                'w-auto object-contain transition-all duration-300 group-hover:opacity-95 group-hover:scale-105 filter drop-shadow-md',
                isSolid ? 'h-12 sm:h-14 lg:h-16' : 'h-16 sm:h-20 lg:h-24',
              ].join(' ')}
            />
          </a>

          {/* ── Desktop Nav Links ──────────────────────────────────── */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main navigation">
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

          {/* ── Desktop CTA ────────────────────────────────────────── */}
          <div className="hidden sm:flex items-center">
            <button
              id="header-book-cta"
              onClick={() => onOpenBooking()}
              className="flex items-center space-x-2 font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full bg-[#D92C44] text-white shadow-lg shadow-[#D92C44]/40 hover:bg-[#B82236] hover:shadow-[#D92C44]/60 transition-all duration-250 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* ── Mobile: pill CTA + Hamburger ───────────────────────── */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:flex items-center space-x-1.5 bg-[#D92C44] hover:bg-[#B82236] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md transition-all"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className={hamburgerClass}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* ── MOBILE DRAWER ──────────────────────────────────────────────
          Always solid charcoal — readable regardless of page or scroll state.
         ────────────────────────────────────────────────────────────── */}
      <div
        className={[
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <div className="bg-charcoal-950 border-b border-gold-500/20 px-6 py-6 space-y-1">
          {/* Contact info strip inside drawer */}
          <div className="flex flex-col space-y-1.5 pb-4 mb-4 border-b border-white/10 text-[11px] text-cream-400">
            <span className="flex items-center space-x-2">
              <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
              <span>15 Endless Street, Salisbury SP1 1DL</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-rose-400 shrink-0" />
              <span>Mon – Sat: 10:00 AM – 5:30 PM · Sun: By Appointment</span>
            </span>
            <a
              href="tel:+447480233841"
              className="flex items-center space-x-2 text-rose-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 shrink-0" />
              <span>+44 7480 233841</span>
            </a>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col space-y-0.5" aria-label="Mobile navigation">
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
                className="py-3 px-2 border-b border-white/[0.08] text-cream-100 hover:text-gold-300 hover:bg-white/5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Full-width CTA */}
          <div className="pt-5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full bg-[#D92C44] hover:bg-[#B82236] text-white font-bold py-3.5 rounded-full shadow-lg shadow-[#D92C44]/40 text-xs uppercase tracking-widest flex justify-center items-center space-x-2 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>
            <div className="flex justify-center space-x-6 mt-4 text-[11px] text-cream-400">
              <a
                href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-gold-300 transition-colors underline"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Booksy</span>
              </a>
              <a
                href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-gold-300 transition-colors underline"
              >
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
