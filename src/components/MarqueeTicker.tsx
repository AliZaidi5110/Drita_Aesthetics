'use client';

import React from 'react';
import { Sparkles, Star, ShieldCheck, Award } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { text: 'TAILORED SPMU BROW MAPPING', icon: Sparkles },
    { text: 'ANTI-WRINKLE INJECTIONS', icon: ShieldCheck },
    { text: 'PROFHILO SKIN BOOSTERS', icon: Award },
    { text: '4.8★ VERIFIED TREATWELL SALON', icon: Star },
    { text: '15 ENDLESS STREET, SALISBURY', icon: Sparkles },
    { text: 'MICROBLADING & OMBRÉ BROWS', icon: ShieldCheck },
    { text: 'DERMAL LIP FILLERS', icon: Award },
  ];

  return (
    <div className="w-full bg-charcoal-950 border-y border-gold-500/30 py-4 overflow-hidden relative z-20">
      <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="inline-flex items-center space-x-3 text-cream-100 text-xs font-semibold uppercase tracking-[0.2em]">
              <Icon className="w-3.5 h-3.5 text-gold-400" />
              <span>{item.text}</span>
              <span className="text-gold-500/40 ml-6">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
