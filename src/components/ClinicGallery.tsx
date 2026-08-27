'use client';

import React, { useState } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

const PHOTOS = [
  {
    src: '/images/clinic-storefront.jpg',
    alt: "Drita's Aesthetics & Beauty shopfront on Endless Street, Salisbury",
    label: 'Our Home on Endless Street',
    caption: 'Find us at 15 Endless Street, Salisbury SP1 1DL — right in the heart of the city.',
  },
  {
    src: '/images/clinic-room-1.png',
    alt: 'Clean clinical treatment room with marble worktop and ring light at Drita Aesthetics',
    label: 'Clinical Treatment Suite',
    caption: 'Hospital-grade hygiene standards. Every session uses single-use, sterile equipment.',
  },
  {
    src: '/images/clinic-room-2.png',
    alt: 'Drita Aesthetics treatment room with flower wall and professional equipment',
    label: 'The Studio Space',
    caption: 'A calm, luxurious environment designed to make you feel relaxed from the moment you arrive.',
  },
];

export const ClinicGallery: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % PHOTOS.length));

  return (
    <>
      <section id="clinic-gallery" className="py-24 bg-cream-50 relative overflow-hidden">
        {/* Soft background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 text-gold-600 mb-3">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">Inside the Studio</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
              Our Clinic, Your Sanctuary
            </h2>
            <p className="mt-4 text-charcoal-600 text-sm font-light max-w-xl mx-auto leading-relaxed">
              A peek inside Drita&apos;s Aesthetics &amp; Beauty — a hygienic, calm, and carefully designed space where every detail is built around your comfort.
            </p>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Large left photo */}
            <div
              className="md:col-span-7 relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl"
              onClick={() => setLightbox(0)}
            >
              <img
                src={PHOTOS[0].src}
                alt={PHOTOS[0].alt}
                className="w-full h-[340px] md:h-[520px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-gold-400 text-[10px] uppercase tracking-widest font-semibold">{PHOTOS[0].label}</p>
                <p className="text-white text-sm font-light mt-1">{PHOTOS[0].caption}</p>
              </div>
              {/* Corner badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold text-charcoal-900 shadow-sm">
                15 Endless Street
              </div>
            </div>

            {/* Right column: 2 stacked photos */}
            <div className="md:col-span-5 flex flex-col gap-5">
              {PHOTOS.slice(1).map((photo, idx) => (
                <div
                  key={idx}
                  className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl flex-1"
                  onClick={() => setLightbox(idx + 1)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-[200px] md:h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{ minHeight: '200px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-gold-400 text-[10px] uppercase tracking-widest font-semibold">{photo.label}</p>
                    <p className="text-white text-xs font-light mt-0.5 leading-relaxed">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom caption */}
          <p className="text-center text-xs text-charcoal-500 font-light mt-8">
            Click any photo to view full screen &nbsp;·&nbsp; 15 Endless Street, Salisbury SP1 1DL
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-charcoal-950/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors p-2"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PHOTOS[lightbox].src}
              alt={PHOTOS[lightbox].alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-gold-400 text-xs uppercase tracking-widest font-semibold">{PHOTOS[lightbox].label}</p>
              <p className="text-cream-300 text-sm font-light mt-1">{PHOTOS[lightbox].caption}</p>
            </div>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
};
