'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Star, ArrowRight, Check, ExternalLink } from 'lucide-react';

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
    <footer className="bg-charcoal-950 text-cream-100 font-sans relative border-t border-gold-500/20">
      {/* Top Newsletter CTA Strip */}
      <div className="border-b border-charcoal-800 py-12 bg-charcoal-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Exclusive VIP Privilege
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Subscribe & Save 10% On Your First Treatment
            </h3>
            <p className="text-xs text-cream-300 font-light max-w-md">
              Receive luxury skincare guidance, seasonal SPMU promotions, and priority appointment booking updates.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="bg-gold-500/10 border border-gold-500/40 p-4 rounded-2xl flex items-center space-x-3 text-gold-400">
                <Check className="w-5 h-5 text-gold-400" />
                <span className="text-xs font-semibold">
                  Thank you for subscribing! Your 10% promo voucher code has been registered.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-full bg-charcoal-800 border border-gold-500/30 text-xs text-white placeholder-cream-400 focus:outline-none focus:border-gold-400"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-gold-700 text-white font-semibold text-xs px-8 py-3.5 rounded-full transition-all shadow-md flex items-center justify-center space-x-2 flex-shrink-0"
                >
                  <span>Claim 10% Off</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-4">
          <a href="#" className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wider text-white">
              DRITA'S
            </span>
            <span className="text-xs tracking-[0.25em] text-gold-400 uppercase font-semibold">
              Aesthetics & SPMU Brows
            </span>
          </a>

          <p className="text-xs text-cream-300 font-light leading-relaxed max-w-sm">
            Salisbury's leading clinic for microblading, semi-permanent brows, dermal fillers, anti-wrinkle solutions, and revitalizing skin boosters. Dedicated to natural elegance and medical-grade safety standards.
          </p>

          <div className="flex items-center space-x-2 text-xs text-gold-400 pt-2">
            <Star className="w-4 h-4 fill-gold-400" />
            <span className="font-semibold text-white">4.8 / 5.0 Rating</span>
            <span className="text-cream-400">• Verified on Treatwell & Booksy</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="text-xs space-y-2 text-cream-300 font-light">
            <li><a href="#about" className="hover:text-gold-400 transition-colors">About Drita</a></li>
            <li><a href="#services" className="hover:text-gold-400 transition-colors">All Services</a></li>
            <li><a href="#price-guide" className="hover:text-gold-400 transition-colors">Price Guide</a></li>
            <li><a href="#transformations" className="hover:text-gold-400 transition-colors">Before & After</a></li>
            <li><a href="#reviews" className="hover:text-gold-400 transition-colors">Client Reviews</a></li>
            <li><a href="#faq" className="hover:text-gold-400 transition-colors">Aftercare FAQ</a></li>
          </ul>
        </div>

        {/* Treatments List */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Popular Treatments
          </h4>
          <ul className="text-xs space-y-2 text-cream-300 font-light">
            <li>Microblading & Ombré SPMU Brows</li>
            <li>Dermal Fillers & Lip Enhancement</li>
            <li>Anti-Wrinkle Injections</li>
            <li>Profhilo & Skin Boosters</li>
            <li>Eyebrow Threading & Tinting</li>
            <li>Gel Manicures & Pedicures</li>
          </ul>
        </div>

        {/* Clinic Location & Hours */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            Clinic Details
          </h4>
          <div className="text-xs text-cream-300 font-light space-y-2.5">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <span>15 Endless Street, Salisbury, SP1 1DL, United Kingdom</span>
            </div>
            <div className="flex items-start space-x-2">
              <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <p>Mon – Sat: 10:00 AM – 5:30 PM</p>
                <p className="text-gold-400">Sun: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-charcoal-800 py-6 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-cream-400 space-y-3 sm:space-y-0">
          <p>© 2026 Drita's Aesthetics & SPMU Brows. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a
              href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:underline flex items-center space-x-1"
            >
              <span>Book on Booksy</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:underline flex items-center space-x-1"
            >
              <span>Book on Treatwell</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
