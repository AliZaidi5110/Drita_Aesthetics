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
    <header className="w-full font-sans sticky top-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-charcoal-900 text-cream-100 text-xs py-2 px-4 border-b border-gold-500/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-cream-200 hover:text-gold-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>15 Endless Street, Salisbury, SP1 1DL</span>
            </div>
            <div className="flex items-center space-x-1.5 text-cream-200">
              <Clock className="w-3.5 h-3.5 text-gold-500" />
              <span>Mon – Sat: 10:00 AM – 5:30 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 text-gold-400 font-medium">
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              <span>4.8 / 5.0 Rating</span>
            </div>
            <a
              href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gold-300 hover:text-white transition-colors underline underline-offset-2"
            >
              <span>Booksy Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gold-300 hover:text-white transition-colors underline underline-offset-2"
            >
              <span>Treatwell Verified</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-md py-3 border-b border-gold-500/20'
            : 'bg-cream-50 py-5 border-b border-bronze-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="/" className="flex flex-col group">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-charcoal-900 group-hover:text-gold-600 transition-colors">
              DRITA'S
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] text-gold-600 uppercase font-semibold">
              Aesthetics & SPMU Brows
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-charcoal-800">
            <a href="/#about" className="hover:text-gold-600 transition-colors">
              About Drita
            </a>
            <a href="/services" className="hover:text-gold-600 transition-colors">
              Services
            </a>
            <a href="/price-guide" className="hover:text-gold-600 transition-colors">
              Price Guide
            </a>
            <a href="/#transformations" className="hover:text-gold-600 transition-colors">
              Before & After
            </a>
            <a href="/#reviews" className="hover:text-gold-600 transition-colors">
              Reviews
            </a>
            <a href="/#faq" className="hover:text-gold-600 transition-colors">
              Aftercare & FAQ
            </a>
            <a href="/#contact" className="hover:text-gold-600 transition-colors">
              Contact & Map
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={() => onOpenBooking()}
              className="bg-gradient-to-r from-gold-500 via-bronze-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-lg shadow-gold-500/20 hover:shadow-gold-500/35 transition-all duration-300 flex items-center space-x-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden bg-gold-500 text-white text-xs px-3 py-1.5 rounded-full font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-800 hover:text-gold-600 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50/98 backdrop-blur-xl border-b border-gold-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-medium text-charcoal-800">
            <a
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-200 hover:text-gold-600"
            >
              About Drita
            </a>
            <a
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-200 hover:text-gold-600"
            >
              Services & Treatments
            </a>
            <a
              href="/price-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-200 hover:text-gold-600"
            >
              Price Guide
            </a>
            <a
              href="/#transformations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-200 hover:text-gold-600"
            >
              Before & After Showcase
            </a>
            <a
              href="/#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-200 hover:text-gold-600"
            >
              Client Reviews (4.8★)
            </a>
            <a
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-200 hover:text-gold-600"
            >
              Aftercare & FAQ
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-cream-200 hover:text-gold-600"
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
              className="w-full bg-gradient-to-r from-gold-500 to-bronze-500 text-white font-medium py-3 rounded-xl shadow-md flex justify-center items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
