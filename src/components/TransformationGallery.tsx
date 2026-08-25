'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

export const TransformationGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brows' | 'lips' | 'skin'>('brows');

  const transformations = {
    brows: {
      title: 'Bespoke Ombré & Microblading Brows',
      before: '/images/84-before.webp',
      after: '/images/84-after.webp',
      tag: 'Semi-Permanent Eyebrows',
      description: 'Golden ratio face mapping applied to rebuild natural hair strokes and soft gradient tail density.',
      healingTime: '7-10 Days Healing',
      longevity: '12-18 Months Duration',
    },
    lips: {
      title: 'Lip Blush & Volume Augmentation',
      before: '/images/84-megamenu-services-2-2.webp',
      after: '/images/84-profile-3.webp',
      tag: 'Signature Lip Fillers',
      description: 'Restored lip border symmetry, soft pink blush pigment infusion, and subtle hyaluronic acid plushness.',
      healingTime: '3-5 Days Softening',
      longevity: '12+ Months Duration',
    },
    skin: {
      title: 'Profhilo Bio-Remodeling & Skin Peel',
      before: '/images/84-megamenu-services-3-2.webp',
      after: '/images/84-home-1-7.webp',
      tag: 'Cellular Skin Rejuvenation',
      description: 'Elimination of hyperpigmentation and fine lines with deep hyaluronic hydration glow.',
      healingTime: 'Minimal Downtime',
      longevity: '6-9 Months Hydration',
    },
  };

  const current = transformations[activeTab];

  return (
    <section id="transformations" className="py-20 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-gold-600">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-semibold">Real Results</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Before & After Transformation Showcase
          </h2>
          <p className="text-charcoal-700 text-sm font-light">
            Real client transformations demonstrating Drita's commitment to subtle, hyper-realistic, natural elegance.
          </p>
        </div>

        {/* Treatment Type Switcher */}
        <div className="mt-8 flex justify-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setActiveTab('brows')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'brows'
                ? 'bg-charcoal-900 text-gold-400 shadow-md scale-105'
                : 'bg-white text-charcoal-700 hover:bg-gold-50 border border-bronze-200'
            }`}
          >
            SPMU Brows
          </button>
          <button
            onClick={() => setActiveTab('lips')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'lips'
                ? 'bg-charcoal-900 text-gold-400 shadow-md scale-105'
                : 'bg-white text-charcoal-700 hover:bg-gold-50 border border-bronze-200'
            }`}
          >
            Lip Enhancement
          </button>
          <button
            onClick={() => setActiveTab('skin')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'skin'
                ? 'bg-charcoal-900 text-gold-400 shadow-md scale-105'
                : 'bg-white text-charcoal-700 hover:bg-gold-50 border border-bronze-200'
            }`}
          >
            Skin Glow & Peels
          </button>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-gold-500/20 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Before Box */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group border border-cream-200 bg-cream-50">
              <img
                src={current.before}
                alt={`${current.title} Before`}
                className="w-full h-80 object-cover filter grayscale contrast-125"
              />
              <div className="absolute top-4 left-4 bg-charcoal-950/85 text-cream-100 text-xs font-semibold px-3.5 py-1 rounded-full backdrop-blur-md border border-white/20">
                Before Treatment
              </div>
            </div>

            {/* After Box */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gold-500/50 group bg-cream-50">
              <img
                src={current.after}
                alt={`${current.title} After`}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-gold-500 to-bronze-500 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md">
                After Transformation
              </div>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-600">
              {current.tag}
            </span>
            <h3 className="font-serif text-2xl font-bold text-charcoal-900">
              {current.title}
            </h3>
            <p className="text-sm text-charcoal-700 leading-relaxed font-light">
              {current.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 bg-cream-50 p-3.5 rounded-xl border border-gold-500/20">
                <CheckCircle className="w-5 h-5 text-gold-600" />
                <span className="text-xs font-medium text-charcoal-800">
                  {current.healingTime}
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-cream-50 p-3.5 rounded-xl border border-gold-500/20">
                <CheckCircle className="w-5 h-5 text-gold-600" />
                <span className="text-xs font-medium text-charcoal-800">
                  {current.longevity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
