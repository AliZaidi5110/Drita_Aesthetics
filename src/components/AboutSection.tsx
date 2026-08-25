'use client';

import React from 'react';
import { Sparkles, Compass, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Practitioner Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
                <img
                  src="/images/84-profile-2.webp"
                  alt="Drita Aesthetics Clinic Atmosphere & Eyebrow Styling"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                    Salisbury Aesthetic Specialist
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-1">Drita's Clinical Philosophy</h3>
                  <p className="text-xs text-cream-200 mt-1 font-light">
                    "True beauty lies in enhancing your natural contours with subtle precision and clinical care."
                  </p>
                </div>
              </div>

              {/* Decorative Accent Box */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-gold-500/20 to-bronze-400/20 rounded-3xl -z-0 blur-xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold-500/30 rounded-3xl -z-0" />
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center space-x-2 text-gold-600 mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-semibold">About Drita's Aesthetics</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900 leading-tight">
                A Destination for Modern Aesthetic Care & Permanent Eyebrow Artistry
              </h2>
              <p className="text-charcoal-700 mt-4 leading-relaxed font-light text-base">
                Located in the heart of Salisbury at <strong>15 Endless Street</strong>, Drita's Aesthetics & SPMU Brows provides a calm, hygienic, and luxurious sanctuary dedicated to facial harmony, eyebrow mapping, and skin rejuvenation.
              </p>
              <p className="text-charcoal-700 mt-3 leading-relaxed font-light text-base">
                Whether you seek effortless wake-up-ready brows through microblading and ombré shading, youthful skin smoothing with dermal fillers and anti-wrinkle injections, or cellular skin rejuvenation with Profhilo skin boosters, every treatment is tailored to your individual anatomy.
              </p>
            </div>

            {/* Medical Credentials Badges Row */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-charcoal-600 font-semibold block mb-3">
                Credentials & Hygiene Standards You Can Trust:
              </span>
              <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-2xl border border-gold-500/20 shadow-sm">
                <img src="/images/84-credentials-1.webp" alt="Credential 1" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/images/84-credentials-2.webp" alt="Credential 2" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/images/84-credentials-3.webp" alt="Credential 3" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/images/84-credentials-4.webp" alt="Credential 4" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src="/images/84-credentials-5.webp" alt="Credential 5" className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-gold-500/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-charcoal-900">Bespoke Face Mapping</h4>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  Calculated Golden Ratio eyebrow mapping customized precisely to your facial dimensions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gold-500/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-charcoal-900">Clinical Safety Standards</h4>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  Hospital-grade sterilization, single-use sterile needles, and EU/UK certified micropigments.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gold-500/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-charcoal-900">Gentle & Comforting Care</h4>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  High-potency topical numbing compounds ensuring a relaxed, stress-free, pain-free experience.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gold-500/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-charcoal-900">4.8★ Client Satisfaction</h4>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  Over 31 verified 5-star reviews on Treatwell praising thoroughness, friendly care, and lasting results.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-charcoal-900 hover:bg-charcoal-800 text-gold-400 font-medium px-7 py-3.5 rounded-full shadow-md transition-all duration-300 inline-flex items-center space-x-2 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Schedule a Personal Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
