'use client';

import React from 'react';
import { Calendar, Sparkles, ShieldCheck, Star, ArrowRight, Award, ExternalLink } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100 to-cream-50 pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Gold Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-300/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-bronze-300/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-gold-500/30 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-700">
                Salisbury Premier Aesthetic & SPMU Clinic
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 leading-[1.15]">
              Artistry in Aesthetics &{' '}
              <span className="italic font-normal gold-gradient-text block sm:inline">
                Permanent Brow Perfection
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-charcoal-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Elevate your natural facial architecture with bespoke microblading, semi-permanent eyebrow mapping, anti-wrinkle injectables, and medical-grade skin boosters in Salisbury.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-gradient-to-r from-gold-500 via-bronze-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-all duration-300 flex items-center justify-center space-x-3 transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
              </button>

              <a
                href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-charcoal-900 hover:bg-charcoal-800 text-gold-400 font-medium px-7 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
              >
                <span>Book on Booksy</span>
                <ExternalLink className="w-4 h-4 text-gold-400" />
              </a>
            </div>

            {/* Key Trust Pillars Metrics */}
            <div className="pt-6 border-t border-bronze-200/60 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-gold-600">
                  <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                  <span className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">4.8★</span>
                </div>
                <p className="text-xs text-charcoal-700 mt-0.5">Treatwell & Booksy</p>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-gold-600">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">100%</span>
                </div>
                <p className="text-xs text-charcoal-700 mt-0.5">Custom Mapping</p>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-gold-600">
                  <Award className="w-4 h-4 text-gold-600" />
                  <span className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">Certified</span>
                </div>
                <p className="text-xs text-charcoal-700 mt-0.5">Aesthetic Practitioner</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image & Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-gold-400/40 via-bronze-300/30 to-gold-600/40 blur-lg transform -rotate-1" />

              {/* Card Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/80 bg-white">
                <img
                  src="/images/84-profile-1.webp"
                  alt="Drita Aesthetic Practitioner Eyebrow SPMU Treatment"
                  className="w-full h-[480px] object-cover object-top transform hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Soft Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-gold-400/30 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600 flex-shrink-0 font-serif font-bold text-lg border border-gold-500/40">
                      DA
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-charcoal-900">
                        Drita's Aesthetics & Beauty
                      </h4>
                      <p className="text-xs text-charcoal-600">
                        15 Endless Street, Salisbury SP1 1DL
                      </p>
                      <div className="flex items-center space-x-1 mt-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-medium text-emerald-700">Open Today • Booksy & Treatwell Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-charcoal-900 text-gold-400 p-4 rounded-2xl shadow-xl border border-gold-500/30 flex items-center space-x-3 backdrop-blur-md">
                <Sparkles className="w-6 h-6 text-gold-400" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-cream-300">Signature Service</p>
                  <p className="font-serif text-sm font-semibold text-white">Ombré & Microblading Brows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
