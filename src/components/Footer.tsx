'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, ExternalLink, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full font-sans relative">
      {/* 1. TOP NEWSLETTER HERO BANNER */}
      <div className="relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center overflow-hidden">
        {/* Background Portrait Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/footer-newsletter-bg.webp"
            alt="Drita Aesthetics Skincare Newsletter"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Dark Translucent Gradient Overlay matching Rejuvita template */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e070b]/75 via-[#140A0F]/80 to-[#140A0F]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-5 py-16">
          {/* Top Small Gold Emblem Icon */}
          <div className="w-8 h-8 mx-auto flex items-center justify-center border border-gold-400/50 rounded-sm">
            <div className="w-3 h-3 border border-gold-400 rotate-45" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-widest text-white uppercase leading-tight">
            SIGN UP FOR OUR NEWSLETTER
            <span className="block mt-1 font-serif font-normal">AND SPECIAL EVENTS</span>
          </h2>

          {/* Subtitle */}
          <p className="font-serif italic text-cream-200 text-sm sm:text-base tracking-wide font-light max-w-xl mx-auto">
            Subscribe to our newsletter and receive a 10% off for any further treatment.
          </p>

          {/* Form */}
          <div className="pt-4 max-w-xl mx-auto">
            {subscribed ? (
              <div className="bg-[#140A0F]/90 border border-gold-500/40 p-4 rounded-xl flex items-center justify-center space-x-3 text-gold-400">
                <Check className="w-5 h-5 text-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Thank you! Your 10% off voucher code has been sent.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <input
                  type="email"
                  required
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-80 px-5 py-3.5 bg-black/40 border border-white/20 text-white placeholder-cream-300/60 text-xs focus:outline-none focus:border-gold-400 rounded-lg backdrop-blur-sm transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#D92C44] hover:bg-[#B82236] text-white font-semibold text-xs uppercase tracking-widest px-8 py-3.5 rounded-lg shadow-lg transition-all duration-300 flex-shrink-0"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 2. MAIN DARK FOOTER SECTION */}
      <div className="bg-[#140A0F] text-cream-100 border-t border-white/10 pt-10 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Top Navigation Bar */}
          <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 border-b border-white/10 pb-8 text-xs font-bold tracking-[0.2em] text-cream-200 uppercase">
            <a href="#about" className="hover:text-gold-400 transition-colors">
              ABOUT US
            </a>
            <a href="#services" className="hover:text-gold-400 transition-colors">
              SERVICES
            </a>
            <a href="#price-guide" className="hover:text-gold-400 transition-colors">
              PRICE GUIDE
            </a>
            <a href="#transformations" className="hover:text-gold-400 transition-colors">
              BEFORE & AFTER
            </a>
            <a href="#reviews" className="hover:text-gold-400 transition-colors">
              REVIEWS
            </a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">
              CONTACTS
            </a>
          </nav>

          {/* Three Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 items-center text-center">
            {/* Left Column: ADDRESS */}
            <div className="space-y-3 md:text-left">
              <h4 className="font-serif text-sm font-bold tracking-widest text-white uppercase">
                ADDRESS
              </h4>
              <div className="text-xs text-cream-300 font-light space-y-1.5 leading-relaxed">
                <p>15 Endless Street, Salisbury, SP1 1DL, UK</p>
                <p className="pt-2 text-cream-400">Mon–Sat: 10:00am – 5:30pm</p>
                <p className="text-gold-400">Sat/Sun: By Appointment Only</p>
              </div>
            </div>

            {/* Center Column: BRAND LOGO EMBLEM */}
            <div className="flex flex-col items-center justify-center space-y-3">
              {/* Gold Flower/Star Geometry Emblem */}
              <div className="w-14 h-14 flex items-center justify-center">
                <svg className="w-12 h-12 text-gold-400" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 C60 25 75 40 100 50 C75 60 60 75 50 100 C40 75 25 60 0 50 C25 40 40 25 50 0 Z" opacity="0.85" />
                  <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>

              <div className="text-center">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white block">
                  DRITA'S
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gold-400 uppercase font-semibold block mt-0.5">
                  AESTHETICS & BEAUTY
                </span>
              </div>
            </div>

            {/* Right Column: CONTACTS */}
            <div className="space-y-3 md:text-right">
              <h4 className="font-serif text-sm font-bold tracking-widest text-white uppercase">
                CONTACTS
              </h4>
              <div className="text-xs text-cream-300 font-light space-y-1.5">
                <p className="flex items-center justify-center md:justify-end space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>+44 7480 233841</span>
                </p>
                <p className="flex items-center justify-center md:justify-end space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                  <span className="uppercase tracking-wider">DRITASAESTHETICS.COM</span>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center md:justify-end space-x-3 pt-2">
                <a
                  href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 text-white flex items-center justify-center transition-colors"
                  title="Booksy Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 text-white flex items-center justify-center transition-colors"
                  title="Treatwell Page"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Line */}
          <div className="border-t border-white/10 pt-6 text-center text-[11px] text-cream-400 space-y-2">
            <p>© 2026 Drita's Aesthetics & SPMU Brows. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
