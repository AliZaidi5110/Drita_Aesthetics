'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface DestinationSectionProps {
  onOpenBooking: () => void;
}

export const DestinationSection: React.FC<DestinationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-[#140A0F] text-cream-100 py-24 lg:py-32 overflow-hidden border-t border-gold-500/20">
      {/* Background Radial Glow Matching Swatch #140A0F */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 75% 50%, rgba(70, 22, 38, 0.45) 0%, rgba(20, 10, 15, 0.95) 60%, rgba(20, 10, 15, 1) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Images */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="relative max-w-md w-full">
              {/* Main Portrait Image */}
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 relative z-10">
                <img
                  src="/images/destination-portrait.jpg"
                  alt="Drita's Aesthetics clinic — refined aesthetic treatments in Salisbury"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top"
                />
              </div>

              {/* Overlapping Interior Image (Bottom Right) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 h-44 sm:h-56 rounded-2xl overflow-hidden border-4 border-[#140A0F] shadow-2xl z-20 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/destination-interior.png"
                  alt="Drita Clinic Luxury Interior Lounge"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <div className="flex items-center space-x-2 text-gold-400">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-400">
                ADVANCED AESTHETIC MEDICINE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2]">
              BESPOKE RESULTS.{' '}
              <span className="gold-gradient-text block sm:inline">
                BEAUTIFULLY NATURAL.
              </span>
            </h2>

            <p className="text-cream-200 text-sm sm:text-base leading-relaxed font-light max-w-xl">
              Drita's Aesthetics & SPMU Brows specialises in facial refinement, semi-permanent brow artistry, and skin rejuvenation. Treatments are designed around your anatomy — proportion first, confidence always.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#D92C44] hover:bg-[#B82236] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl shadow-[#D92C44]/25 hover:shadow-[#D92C44]/40 transition-all duration-300 inline-flex items-center space-x-3 transform hover:-translate-y-1"
              >
                <span>MEET OUR SPECIALISTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
