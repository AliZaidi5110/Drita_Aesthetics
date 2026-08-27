'use client';

import React from 'react';
import { Sparkles, Star, Heart, Award } from 'lucide-react';

interface MeetTheOwnerProps {
  onOpenBooking: () => void;
}

const highlights = [
  { label: 'Level 4 Certified', detail: 'Fully qualified micropigmentation & aesthetics practitioner' },
  { label: '4.8 Star on Treatwell', detail: 'Consistently 5-star reviews from verified clients' },
  { label: 'Client-First Philosophy', detail: 'Every treatment begins with a thorough personal consultation' },
];

export const MeetTheOwner: React.FC<MeetTheOwnerProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="meet-the-owner"
      className="relative py-24 bg-charcoal-950 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,_#c9a84c_0%,_transparent_60%)]" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_80%_20%,_#c9a84c_0%,_transparent_55%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center space-x-2 text-gold-400 mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-semibold">The Face Behind the Clinic</span>
          <Sparkles className="w-4 h-4" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-16 leading-tight">
          Meet Drita &mdash; Owner &amp; Lead Practitioner
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-gold-500/30 to-bronze-400/10 blur-2xl" />
            <div className="relative w-full max-w-md">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-gold-500/30 shadow-2xl relative">
                <img
                  src="/images/owner.png"
                  alt="Drita - Owner and Lead Aesthetic Practitioner at Drita Aesthetics Salisbury"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-gold-400 text-xs uppercase tracking-widest font-semibold mb-1">
                    Drita Aesthetics &middot; Salisbury
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-white">Drita</h3>
                  <p className="text-cream-300 text-xs font-light mt-1">
                    Owner &middot; Aesthetic Practitioner &middot; SPMU Artist
                  </p>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-gradient-to-br from-gold-500 to-bronze-500 text-white rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-[10px] uppercase tracking-widest font-semibold opacity-80">Trusted by</p>
                <p className="font-serif text-2xl font-bold leading-tight">500+</p>
                <p className="text-[10px] uppercase tracking-widest font-semibold opacity-80">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-cream-200 leading-relaxed text-base font-light">
                Hi, I&apos;m <strong className="text-gold-400 font-semibold">Drita</strong> &mdash; the founder and lead practitioner behind Drita&apos;s Aesthetics &amp; SPMU Brows in the heart of Salisbury. My passion for aesthetics was born from a simple belief: every person deserves to feel effortlessly confident, every single day.
              </p>
              <p className="text-cream-300 leading-relaxed text-sm font-light">
                From pioneering precise eyebrow mapping using the Golden Ratio to delivering transformative skin treatments like Profhilo bio-remodelling and RF Microneedling &mdash; every technique I practice is rooted in clinical safety, artistic care, and a deep respect for your unique features.
              </p>
              <p className="text-cream-300 leading-relaxed text-sm font-light">
                My clinic at <strong className="text-cream-200">15 Endless Street</strong> is designed to be a calm, hygienic, and luxurious retreat &mdash; where you are listened to, cared for, and leave feeling genuinely seen.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 bg-white/5 border border-gold-500/20 rounded-2xl px-5 py-4 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{h.label}</p>
                    <p className="text-cream-400 text-xs font-light mt-0.5 leading-relaxed">{h.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                id="meet-owner-book-btn"
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-gold-600 text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book with Drita
              </button>
              <a
                href="#about"
                className="border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-300"
              >
                Learn More About the Clinic
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
