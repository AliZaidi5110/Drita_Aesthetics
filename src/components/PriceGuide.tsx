'use client';

import React, { useState } from 'react';
import { TREATMENTS, CATEGORIES } from '../data/treatments';
import { Sparkles, Search, Calendar, ChevronRight, Filter } from 'lucide-react';

interface PriceGuideProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PriceGuide: React.FC<PriceGuideProps> = ({ onOpenBooking }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

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

        {/* Search & Filter Controls */}
        <div className="mt-10 bg-white p-4 sm:p-6 rounded-3xl border border-gold-500/20 shadow-md flex flex-col md:flex-row gap-4 items-center justify-between">
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

        {/* Price Table Container */}
        <div className="mt-8 bg-white rounded-3xl border border-gold-500/20 shadow-lg overflow-hidden">
          <div className="divide-y divide-cream-200">
            {filtered.length > 0 ? (
              filtered.map((item) => (
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
                      <div className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
                        {item.price}
                      </div>
                      {item.originalPrice && (
                        <span className="text-xs text-charcoal-600 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onOpenBooking(item.name)}
                      className="bg-gold-500 hover:bg-gold-600 text-white font-medium text-xs px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center space-x-1.5 transform group-hover:translate-x-0.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Select</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
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
