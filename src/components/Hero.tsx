'use client';

import React from 'react';
import { Sparkles, Calendar, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-charcoal-950 text-white select-none">
      {/* Background Peony Model Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-peony-bg.png"
          alt="Drita Aesthetics Refined Beauty Pink Peonies"
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000"
        />
        {/* Soft Dark Vignette & Gradient Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-black/50" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between py-16 lg:py-24">
        {/* Top Tagline */}
        <div className="pt-6 sm:pt-10">
          <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-gold-300">
              ADVANCED AESTHETIC MEDICINE
            </span>
          </div>
        </div>

        {/* Middle & Bottom Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-10">
          {/* Left Column: Big Headline */}
          <div className="lg:col-span-7 space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.08]">
              REFINED{' '}
              <span className="font-serif italic font-normal text-gold-300 gold-gradient-text">
                BEAUTY.
              </span>
              <br />
              THOUGHTFULLY
              <br />
              <span className="gold-gradient-text font-serif italic font-normal">
                DESIGNED.
              </span>
            </h1>
          </div>

          {/* Right Column: Subtitle & Dual CTA Buttons */}
          <div className="lg:col-span-5 space-y-6 lg:text-left lg:pl-4">
            <p className="font-serif italic text-cream-100 text-sm sm:text-base lg:text-lg leading-relaxed font-light drop-shadow-md">
              At Drita's Aesthetics, we combine medical precision with aesthetic artistry to enhance your natural structure — never overpower it.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#D92C44] hover:bg-[#B82236] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl shadow-[#D92C44]/30 hover:shadow-[#D92C44]/50 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A CONSULTATION</span>
              </button>

              <a
                href="#about"
                className="bg-[#EAE3DB]/90 hover:bg-[#EAE3DB] text-charcoal-900 font-semibold text-xs uppercase tracking-widest px-7 py-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm transform hover:-translate-y-0.5"
              >
                <span>DISCOVER OUR APPROACH</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badges Bar */}
        <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-cream-200">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-white">15 Endless Street, Salisbury SP1 1DL</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1 text-gold-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>4.8★ Verified on Treatwell & Booksy</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 hover:text-white transition-colors underline flex items-center space-x-1"
            >
              <span>Book on Booksy</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
