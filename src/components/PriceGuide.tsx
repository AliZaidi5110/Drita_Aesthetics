'use client';

import React, { useState } from 'react';
import { TREATMENTS, CATEGORIES } from '../data/treatments';
import { Sparkles, Search, Calendar, ChevronRight, Filter, GraduationCap, HeartPulse, Shield, Check } from 'lucide-react';
import { DiscountType, DISCOUNT_OPTIONS, calculateDiscount } from './BookingModal';

interface PriceGuideProps {
  onOpenBooking: (serviceName?: string, discount?: DiscountType) => void;
}

export const PriceGuide: React.FC<PriceGuideProps> = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [activeDiscount, setActiveDiscount] = useState<DiscountType>('none');

  const selectedDiscountObj =
    DISCOUNT_OPTIONS.find((d) => d.id === activeDiscount) || DISCOUNT_OPTIONS[0];

  const filtered = TREATMENTS.filter((t) => {
    const matchesCat = selectedCat === 'all' || t.category === selectedCat;
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="price-guide" className="py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-gold-600">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-semibold">Transparent Pricing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Investment in Excellence & Beauty
          </h2>
          <p className="text-charcoal-700 text-sm font-light">
            No hidden costs. Every treatment includes full consultation, face mapping, and premium aftercare advice.
          </p>
        </div>

        {/* ── EXCLUSIVE CONCESSIONS & DISCOUNTS BANNER ─────────────────── */}
        <div className="mt-10 bg-gradient-to-br from-charcoal-950 via-[#1a0f16] to-charcoal-950 text-white rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-gold-500/20 px-3 py-1 rounded-full border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Community Discounts</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Exclusive Concessions for Students, NHS & Forces
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/90 font-light leading-relaxed">
                We are proud to give back to those who serve and learn. Select your status below to view all prices with your discount applied.
              </p>
            </div>

            {/* Concession Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              {/* Student Card */}
              <button
                type="button"
                onClick={() => setActiveDiscount(activeDiscount === 'student' ? 'none' : 'student')}
                className={`p-4 rounded-2xl border text-left transition-all relative ${
                  activeDiscount === 'student'
                    ? 'bg-gold-500/20 border-gold-400 shadow-lg ring-2 ring-gold-400'
                    : 'bg-white/5 border-white/10 hover:border-gold-400/50 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="bg-gold-400 text-charcoal-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    10% OFF
                  </span>
                </div>
                <h4 className="font-serif font-bold text-white text-sm mt-2">Student Discount</h4>
                <p className="text-[11px] text-cream-300 font-light mt-0.5">Valid Student ID required</p>
                {activeDiscount === 'student' && (
                  <span className="mt-2 text-[10px] text-gold-300 flex items-center space-x-1 font-semibold">
                    <Check className="w-3 h-3" /> <span>Previewing 10% Off</span>
                  </span>
                )}
              </button>

              {/* NHS Card */}
              <button
                type="button"
                onClick={() => setActiveDiscount(activeDiscount === 'nhs' ? 'none' : 'nhs')}
                className={`p-4 rounded-2xl border text-left transition-all relative ${
                  activeDiscount === 'nhs'
                    ? 'bg-blue-500/20 border-blue-400 shadow-lg ring-2 ring-blue-400'
                    : 'bg-white/5 border-white/10 hover:border-blue-400/50 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <span className="bg-blue-400 text-charcoal-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    20% OFF
                  </span>
                </div>
                <h4 className="font-serif font-bold text-white text-sm mt-2">NHS & Healthcare</h4>
                <p className="text-[11px] text-cream-300 font-light mt-0.5">NHS / Blue Light ID required</p>
                {activeDiscount === 'nhs' && (
                  <span className="mt-2 text-[10px] text-blue-300 flex items-center space-x-1 font-semibold">
                    <Check className="w-3 h-3" /> <span>Previewing 20% Off</span>
                  </span>
                )}
              </button>

              {/* Military Card */}
              <button
                type="button"
                onClick={() => setActiveDiscount(activeDiscount === 'military' ? 'none' : 'military')}
                className={`p-4 rounded-2xl border text-left transition-all relative ${
                  activeDiscount === 'military'
                    ? 'bg-emerald-500/20 border-emerald-400 shadow-lg ring-2 ring-emerald-400'
                    : 'bg-white/5 border-white/10 hover:border-emerald-400/50 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="bg-emerald-400 text-charcoal-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    20% OFF
                  </span>
                </div>
                <h4 className="font-serif font-bold text-white text-sm mt-2">Armed Forces / Army</h4>
                <p className="text-[11px] text-cream-300 font-light mt-0.5">MOD Defence / Military ID</p>
                {activeDiscount === 'military' && (
                  <span className="mt-2 text-[10px] text-emerald-300 flex items-center space-x-1 font-semibold">
                    <Check className="w-3 h-3" /> <span>Previewing 20% Off</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-8 bg-white p-4 sm:p-6 rounded-3xl border border-gold-500/20 shadow-md flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-charcoal-600 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments (e.g. Brows, Filler, Tint)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-bronze-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500 bg-cream-50/50"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <Filter className="w-4 h-4 text-gold-600 flex-shrink-0" />
            {CATEGORIES.slice(0, 5).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`text-xs px-3.5 py-2 rounded-full whitespace-nowrap transition-colors font-medium ${
                  selectedCat === cat.id
                    ? 'bg-charcoal-900 text-gold-400'
                    : 'bg-cream-100 text-charcoal-700 hover:bg-gold-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active discount active banner */}
        {selectedDiscountObj.percent > 0 && (
          <div className="mt-4 bg-emerald-50 border border-emerald-300 p-3.5 rounded-2xl flex items-center justify-between text-xs text-emerald-900 shadow-sm animate-in fade-in">
            <div className="flex items-center space-x-2">
              <span className="text-lg">{selectedDiscountObj.icon}</span>
              <span>
                Showing <strong>{selectedDiscountObj.label} ({selectedDiscountObj.badge})</strong> rates across all treatments.
              </span>
            </div>
            <button
              onClick={() => setActiveDiscount('none')}
              className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 underline ml-2"
            >
              Reset to Standard Pricing
            </button>
          </div>
        )}

        {/* Price Table Container */}
        <div className="mt-6 bg-white rounded-3xl border border-gold-500/20 shadow-lg overflow-hidden">
          <div className="divide-y divide-cream-200">
            {filtered.length > 0 ? (
              filtered.map((item) => {
                const itemPricing = calculateDiscount(item.price, selectedDiscountObj.percent);
                return (
                  <div
                    key={item.id}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-cream-50/70 transition-colors group gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                          {item.categoryLabel}
                        </span>
                        <span className="text-xs text-charcoal-600 font-light">• {item.duration}</span>
                      </div>

                      <h4 className="font-serif text-lg font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-charcoal-600 max-w-2xl font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end space-x-6 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-cream-100">
                      <div className="text-right">
                        {itemPricing.isDiscounted ? (
                          <div>
                            <div className="font-serif text-xl sm:text-2xl font-bold text-emerald-700">
                              {itemPricing.final}
                            </div>
                            <div className="flex items-center justify-end space-x-1.5">
                              <span className="text-xs text-charcoal-600 line-through">
                                {itemPricing.original}
                              </span>
                              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
                                Save {itemPricing.savings}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
                              {item.price}
                            </div>
                            {item.originalPrice && (
                              <span className="text-xs text-charcoal-600 line-through">
                                {item.originalPrice}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => onOpenBooking(item.name, activeDiscount)}
                        className="bg-gold-500 hover:bg-gold-600 text-white font-medium text-xs px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center space-x-1.5 transform group-hover:translate-x-0.5"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-12 text-center text-charcoal-600">
                No treatments found matching "{searchTerm}". Try another keyword!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
