'use client';

import React from 'react';
import { Sparkles, Star, ShieldCheck, Award, Heart, Leaf } from 'lucide-react';

const TICKER_ITEMS = [
  { text: 'TAILORED SPMU BROW MAPPING', icon: Sparkles },
  { text: 'ANTI-WRINKLE INJECTIONS', icon: ShieldCheck },
  { text: 'PROFHILO SKIN BOOSTERS', icon: Award },
  { text: '4.8★ VERIFIED TREATWELL SALON', icon: Star },
  { text: '15 ENDLESS STREET, SALISBURY', icon: Sparkles },
  { text: 'MICROBLADING & OMBRÉ BROWS', icon: Heart },
  { text: 'DERMAL LIP FILLERS', icon: Leaf },
  { text: 'RF MICRONEEDLING', icon: ShieldCheck },
  { text: 'EYEBROW THREADING & TINTING', icon: Award },
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="w-full bg-charcoal-950 border-y border-gold-500/30 py-4 overflow-hidden relative z-20">
      {/*
        True CSS infinite loop:
        – One inner div holds two identical copies of items side by side.
        – The animation slides left by 50% (== one full copy width) then resets.
        – This creates a seamless, non-duplicated visual loop.
      */}
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Copy A */}
        {TICKER_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <span
              key={`a-${idx}`}
              className="inline-flex items-center space-x-3 text-cream-100 text-xs font-semibold uppercase tracking-[0.2em] mx-6"
            >
              <Icon className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span>{item.text}</span>
              <span className="text-gold-500/40 mx-4">•</span>
            </span>
          );
        })}
        {/* Copy B – identical, placed immediately after A so the seam is invisible */}
        {TICKER_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <span
              key={`b-${idx}`}
              className="inline-flex items-center space-x-3 text-cream-100 text-xs font-semibold uppercase tracking-[0.2em] mx-6"
            >
              <Icon className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span>{item.text}</span>
              <span className="text-gold-500/40 mx-4">•</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};
