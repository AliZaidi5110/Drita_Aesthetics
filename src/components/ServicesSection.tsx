'use client';

import React, { useState } from 'react';
import { CATEGORIES, TREATMENTS, ServiceItem } from '../data/treatments';
import { Sparkles, Clock, Check, Info, Calendar } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);

  const filteredTreatments =
    activeCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-gold-600">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-semibold">Treatment Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Curated Aesthetic Treatments & Permanent Makeup
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base font-light">
            Every procedure is carried out with meticulous precision, using medical-grade products and personalized face mapping.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-gold-500 to-bronze-500 text-white shadow-md shadow-gold-500/20 scale-105'
                  : 'bg-white text-charcoal-800 hover:bg-gold-50 border border-bronze-200/60'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-3xl p-6 border border-gold-500/20 shadow-sm hover:shadow-xl hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Popular Badge */}
              {treatment.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-gold-500 to-bronze-500 text-white text-[10px] uppercase tracking-wider font-semibold px-4 py-1 rounded-bl-xl shadow-sm">
                  Client Favorite
                </div>
              )}

              <div>
                <span className="text-[11px] font-semibold text-gold-600 uppercase tracking-widest">
                  {treatment.categoryLabel}
                </span>

                <h3 className="font-serif text-xl font-bold text-charcoal-900 mt-1.5 group-hover:text-gold-600 transition-colors">
                  {treatment.name}
                </h3>

                <div className="flex items-center space-x-3 mt-3 text-xs text-charcoal-600">
                  <div className="flex items-center space-x-1 bg-cream-100 px-2.5 py-1 rounded-full border border-bronze-200/50">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    <span>{treatment.duration}</span>
                  </div>
                </div>

                <p className="text-xs text-charcoal-600 mt-4 leading-relaxed line-clamp-3">
                  {treatment.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-charcoal-500 block font-medium uppercase tracking-wider">
                    Investment
                  </span>
                  <div className="flex items-baseline space-x-2">
                    <span className="font-serif text-2xl font-bold text-charcoal-900">
                      {treatment.price}
                    </span>
                    {treatment.originalPrice && (
                      <span className="text-xs text-charcoal-600 line-through">
                        {treatment.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedDetailService(treatment)}
                    className="p-2 text-charcoal-600 hover:text-gold-600 hover:bg-gold-50 rounded-full transition-colors"
                    title="View Full Treatment Details"
                  >
                    <Info className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(treatment.name)}
                    className="bg-charcoal-900 hover:bg-gold-600 text-white font-medium text-xs px-4 py-2.5 rounded-full shadow-sm transition-all duration-300 flex items-center space-x-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Details Modal */}
      {selectedDetailService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-gold-500/30 shadow-2xl relative">
            <button
              onClick={() => setSelectedDetailService(null)}
              className="absolute top-5 right-5 text-charcoal-600 hover:text-charcoal-900 bg-cream-100 p-2 rounded-full"
            >
              ✕
            </button>

            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
              {selectedDetailService.categoryLabel}
            </span>
            <h3 className="font-serif text-2xl font-bold text-charcoal-900 mt-1">
              {selectedDetailService.name}
            </h3>

            <div className="flex items-center space-x-4 mt-4 text-xs">
              <span className="bg-cream-100 px-3 py-1 rounded-full text-charcoal-700 font-medium">
                Duration: {selectedDetailService.duration}
              </span>
              <span className="font-serif text-lg font-bold text-gold-600">
                {selectedDetailService.price}
              </span>
            </div>

            <div className="mt-6 space-y-4 text-sm text-charcoal-700 leading-relaxed font-light">
              <p>{selectedDetailService.description}</p>
              <div className="bg-cream-50 p-4 rounded-2xl border border-gold-500/20 space-y-2">
                <h4 className="font-serif text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                  What to Expect
                </h4>
                <ul className="text-xs space-y-1 text-charcoal-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-gold-600" />
                    <span>Thorough personal consultation & skin analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-gold-600" />
                    <span>Topical numbing & sterile hygienic application</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-gold-600" />
                    <span>Detailed aftercare advice & follow-up care guide</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-3">
              <button
                onClick={() => setSelectedDetailService(null)}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-charcoal-700 hover:bg-cream-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedDetailService.name;
                  setSelectedDetailService(null);
                  onOpenBooking(serviceName);
                }}
                className="bg-gradient-to-r from-gold-500 to-bronze-500 text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Book Appointment For {selectedDetailService.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
