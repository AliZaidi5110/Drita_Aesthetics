'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Calendar, Menu, X, Star, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full font-sans fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar - light on bright hero, hidden on mobile */}
      <div className={`text-xs py-2 px-4 border-b hidden md:block transition-all duration-300 ${
        isScrolled
          ? 'bg-[#140A0F]/90 border-white/10 text-cream-100'
          : 'bg-rose-50/80 border-rose-100/60 text-charcoal-700'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 hover:text-rose-600 transition-colors">
              <MapPin className={`w-3.5 h-3.5 ${isScrolled ? 'text-gold-400' : 'text-rose-500'}`} />
              <span>15 Endless Street, Salisbury, SP1 1DL</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className={`w-3.5 h-3.5 ${isScrolled ? 'text-gold-400' : 'text-rose-500'}`} />
              <span>Mon – Sat: 10:00 AM – 5:30 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-gold-300' : 'text-rose-600'}`}>
              <Star className={`w-3.5 h-3.5 ${isScrolled ? 'fill-gold-400 text-gold-400' : 'fill-rose-400 text-rose-400'}`} />
              <span>4.8 / 5.0 Rating</span>
            </div>
            <a
              href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1 transition-colors underline underline-offset-2 ${
                isScrolled ? 'text-gold-300 hover:text-white' : 'text-rose-600 hover:text-rose-800'
              }`}
            >
              <span>Booksy Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1 transition-colors underline underline-offset-2 ${
                isScrolled ? 'text-gold-300 hover:text-white' : 'text-rose-600 hover:text-rose-800'
              }`}
            >
              <span>Treatwell Verified</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#140A0F]/90 backdrop-blur-md shadow-xl py-3 border-b border-gold-500/20'
            : 'bg-white/60 backdrop-blur-sm py-5 border-b border-rose-100/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="/" className="flex flex-col group">
            <span className={`font-serif text-xl sm:text-2xl font-bold tracking-wider transition-colors drop-shadow-sm group-hover:text-rose-500 ${
              isScrolled ? 'text-white' : 'text-charcoal-950'
            }`}>
              DRITA'S
            </span>
            <span className={`text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold ${
              isScrolled ? 'text-gold-400' : 'text-rose-500'
            }`}>
              Aesthetics &amp; SPMU Brows
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className={`hidden lg:flex items-center space-x-8 text-xs sm:text-sm font-semibold tracking-wider uppercase ${
            isScrolled ? 'text-white drop-shadow-md' : 'text-charcoal-800'
          }`}>
            <a href="/#about" className={`transition-colors ${isScrolled ? 'hover:text-gold-300' : 'hover:text-rose-500'}`}>ABOUT US</a>
            <a href="/services" className={`transition-colors ${isScrolled ? 'hover:text-gold-300' : 'hover:text-rose-500'}`}>SERVICES</a>
            <a href="/price-guide" className={`transition-colors ${isScrolled ? 'hover:text-gold-300' : 'hover:text-rose-500'}`}>PRICE GUIDE</a>
            <a href="/#transformations" className={`transition-colors ${isScrolled ? 'hover:text-gold-300' : 'hover:text-rose-500'}`}>BEFORE &amp; AFTER</a>
            <a href="/#reviews" className={`transition-colors ${isScrolled ? 'hover:text-gold-300' : 'hover:text-rose-500'}`}>REVIEWS</a>
            <a href="/#faq" className={`transition-colors ${isScrolled ? 'hover:text-gold-300' : 'hover:text-rose-500'}`}>FAQ</a>
            <a href="/#contact" className={`transition-colors ${isScrolled ? 'hover:text-gold-300' : 'hover:text-rose-500'}`}>CONTACT</a>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#D92C44] hover:bg-[#B82236] text-white font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg shadow-[#D92C44]/30 hover:shadow-[#D92C44]/50 transition-all duration-300 flex items-center space-x-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A CONSULTATION</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden bg-[#D92C44] text-white text-xs px-3.5 py-1.5 rounded-lg font-semibold uppercase tracking-wider"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-gold-300 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#140A0F]/95 backdrop-blur-2xl border-b border-gold-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-semibold text-xs uppercase tracking-widest text-white">
            <a
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-gold-300"
            >
              About Drita
            </a>
            <a
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-gold-300"
            >
              Services & Treatments
            </a>
            <a
              href="/price-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-gold-300"
            >
              Price Guide
            </a>
            <a
              href="/#transformations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-gold-300"
            >
              Before & After Showcase
            </a>
            <a
              href="/#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-gold-300"
            >
              Client Reviews (4.8★)
            </a>
            <a
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-gold-300"
            >
              Aftercare & FAQ
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-gold-300"
            >
              Contact & Location
            </a>
          </nav>
          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#D92C44] hover:bg-[#B82236] text-white font-semibold py-3 rounded-xl shadow-md text-xs uppercase tracking-widest flex justify-center items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
