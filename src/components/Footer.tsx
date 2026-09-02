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
            alt="Drita's Aesthetics — Newsletter & Exclusive Offers"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e070b]/75 via-[#140A0F]/80 to-[#140A0F]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-5 py-16">
          {/* Gold Emblem */}
          <div className="w-8 h-8 mx-auto flex items-center justify-center border border-gold-400/50 rounded-sm">
            <div className="w-3 h-3 border border-gold-400 rotate-45" />
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-widest text-white uppercase leading-tight">
            SIGN UP FOR OUR NEWSLETTER
            <span className="block mt-1 font-serif font-normal">AND EXCLUSIVE OFFERS</span>
          </h2>

          <p className="font-serif italic text-cream-200 text-sm sm:text-base tracking-wide font-light max-w-xl mx-auto">
            Be the first to hear about new treatments, seasonal promotions, and receive a 10% discount on your next visit.
          </p>

          {/* Subscription Form */}
          <div className="pt-4 max-w-xl mx-auto">
            {subscribed ? (
              <div className="bg-[#140A0F]/90 border border-gold-500/40 p-4 rounded-xl flex items-center justify-center space-x-3 text-gold-400">
                <Check className="w-5 h-5 text-gold-400" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  You're subscribed — your 10% discount code is on its way.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
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

      {/* 2. MAIN DARK FOOTER */}
      <div className="bg-[#140A0F] text-cream-100 border-t border-white/10 pt-10 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Navigation */}
          <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 border-b border-white/10 pb-8 text-xs font-bold tracking-[0.2em] text-cream-200 uppercase">
            <a href="/#about" className="hover:text-gold-400 transition-colors">About Us</a>
            <a href="/services" className="hover:text-gold-400 transition-colors">Services</a>
            <a href="/price-guide" className="hover:text-gold-400 transition-colors">Price Guide</a>
            <a href="/#transformations" className="hover:text-gold-400 transition-colors">Before & After</a>
            <a href="/#reviews" className="hover:text-gold-400 transition-colors">Reviews</a>
            <a href="/#contact" className="hover:text-gold-400 transition-colors">Contact</a>
          </nav>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 items-center text-center">
            {/* Left: Opening Hours */}
            <div className="space-y-3 md:text-left">
              <h4 className="font-serif text-sm font-bold tracking-widest text-white uppercase">
                Opening Hours
              </h4>
              <div className="text-xs text-cream-300 font-light space-y-1.5 leading-relaxed">
                <p>15 Endless Street, Salisbury, SP1 1DL</p>
                <p className="pt-2">Monday – Saturday</p>
                <p className="font-semibold text-white">10:00 AM – 5:30 PM</p>
                <p className="text-gold-400 pt-1">Sunday: By Appointment Only</p>
              </div>
            </div>

            {/* Centre: Brand Emblem */}
            <div className="flex flex-col items-center justify-center space-y-3">
              <a href="/" className="inline-block transition-transform hover:scale-105 duration-300">
                <img
                  src="/images/logo-drita.png"
                  alt="Drita's Aesthetics & SPMU Brows"
                  className="h-28 sm:h-36 lg:h-44 w-auto object-contain mx-auto filter drop-shadow-xl"
                />
              </a>
            </div>

            {/* Right: Contact */}
            <div className="space-y-3 md:text-right">
              <h4 className="font-serif text-sm font-bold tracking-widest text-white uppercase">
                Get in Touch
              </h4>
              <div className="text-xs text-cream-300 font-light space-y-1.5">
                <p className="flex items-center justify-center md:justify-end space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <a href="tel:+447480233841" className="hover:text-gold-300 transition-colors">+44 7480 233841</a>
                </p>
                {/* Removed unverified DRITASAESTHETICS.COM domain — replaced with direct booking links */}
                <p className="flex items-center justify-center md:justify-end space-x-1.5 pt-1">
                  <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                  <a
                    href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-300 transition-colors underline"
                  >
                    Book on Booksy
                  </a>
                </p>
                <p className="flex items-center justify-center md:justify-end space-x-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                  <a
                    href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-300 transition-colors underline"
                  >
                    Book on Treatwell
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-white/10 pt-6 text-center text-[11px] text-cream-400 space-y-1">
            <p>© {new Date().getFullYear()} Drita's Aesthetics & SPMU Brows. All Rights Reserved.</p>
            <p className="text-cream-500">15 Endless Street, Salisbury, SP1 1DL &nbsp;|&nbsp; +44 7480 233841</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
