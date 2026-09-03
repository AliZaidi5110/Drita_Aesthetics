'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight, ExternalLink, ShieldCheck, Phone } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

/* ─── Typing animation hook ─── */
function useTypingEffect(phrases: string[], typingSpeed = 65, pause = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];

    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
      return () => clearTimeout(t);
    }

    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((c) => c - 1), typingSpeed / 2);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }
  }, [charIdx, deleting, phraseIdx, phrases, typingSpeed, pause]);

  useEffect(() => {
    setDisplayed(phrases[phraseIdx].slice(0, charIdx));
  }, [charIdx, phraseIdx, phrases]);

  return displayed;
}

const SLOGANS = [
  'Refined Beauty. Thoughtfully Designed.',
  'Your Brows. Your Identity. Perfected.',
  'Science-Backed. Artistry-Led. Always Natural.',
  'Confidence Starts With Feeling Like You.',
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const typedText = useTypingEffect(SLOGANS, 60, 2200);

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden text-charcoal-900 pt-20 sm:pt-28">
      {/* ── Full-bleed bright peony background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-peony-bright.jpg"
          alt="Drita's Aesthetics — natural beauty with pink peonies, Salisbury"
          className="w-full h-full object-cover object-center"
        />
        {/*
          Light, airy gradient overlays:
          – Left side: soft white fade so text is legible without darkening the image
          – Bottom: gentle white fade to blend into the next section
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/20" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center py-8">

        {/* Centre headline block */}
        <div className="flex-1 flex flex-col justify-center py-10 max-w-2xl">
          {/* Static part of the heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] text-charcoal-950">
            Beauty That Feels
            <span className="block text-rose-500 font-serif italic font-normal">
              Genuinely Yours.
            </span>
          </h1>

          {/* Typing slogan */}
          <p className="mt-6 text-base sm:text-xl lg:text-2xl font-serif italic text-charcoal-700 leading-snug min-h-[2.5rem]">
            {typedText}
            {/* Blinking cursor */}
            <span className="inline-block w-[2px] h-[1.1em] bg-rose-500 ml-0.5 align-middle animate-blink" />
          </p>

          {/* Sub-copy */}
          <p className="mt-5 text-sm sm:text-base text-charcoal-600 font-light leading-relaxed max-w-lg">
            Independent aesthetics clinic in Salisbury. We listen first, then treat — using proven injectables, SPMU brows, and skin science to get you results you'll actually love.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#D92C44] hover:bg-[#B82236] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-[#D92C44]/30 hover:shadow-[#D92C44]/50 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A CONSULTATION</span>
            </button>

            <a
              href="#about"
              className="bg-white/90 hover:bg-white text-charcoal-900 border border-charcoal-200 font-semibold text-xs uppercase tracking-widest px-7 py-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm transform hover:-translate-y-0.5"
            >
              <span>OUR TREATMENTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="pt-6 border-t border-charcoal-200/40 flex flex-wrap items-center justify-between gap-4 text-xs text-charcoal-600">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center space-x-1.5 font-medium text-charcoal-800">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              <span>4.8★ Verified · 31+ Treatwell Reviews</span>
            </div>
            <a
              href="tel:+447480233841"
              className="flex items-center space-x-1.5 font-semibold text-charcoal-900 hover:text-rose-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>+44 7480 233841</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-700 transition-colors underline flex items-center space-x-1 font-medium"
            >
              <span>Booksy</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-700 transition-colors underline flex items-center space-x-1 font-medium"
            >
              <span>Treatwell</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
