'use client';

import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Sparkles, Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-gold-600">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-semibold">Client Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Loved by Clients Across Salisbury & Wiltshire
          </h2>
          <p className="text-charcoal-700 text-sm font-light">
            Real feedback from verified Treatwell & Booksy appointments.
          </p>
        </div>

        {/* Overall Rating Banner */}
        <div className="mt-8 max-w-lg mx-auto bg-white p-5 rounded-2xl border border-gold-500/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gold-500 text-white font-serif font-bold text-xl px-3.5 py-1.5 rounded-xl shadow-sm">
              4.8
            </div>
            <div>
              <div className="flex text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-xs text-charcoal-700 font-medium">Verified Customer Ratings</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-xs font-semibold text-gold-700 hover:text-gold-800 underline"
            >
              <span>Booksy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-xs font-semibold text-gold-700 hover:text-gold-800 underline"
            >
              <span>Treatwell</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-7 rounded-3xl border border-gold-500/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-gold-300/40 absolute top-6 right-6" />

              <div>
                {/* Rating Stars */}
                <div className="flex text-gold-400 space-x-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-charcoal-800 mt-4 leading-relaxed font-light italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-charcoal-900 text-base">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-gold-700">{rev.service}</p>
                </div>

                <div className="flex items-center space-x-1 text-[10px] text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
