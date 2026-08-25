'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { DestinationSection } from '../components/DestinationSection';
import { AboutSection } from '../components/AboutSection';
import { TransformationGallery } from '../components/TransformationGallery';
import { ReviewsSection } from '../components/ReviewsSection';
import { AftercareFAQ } from '../components/AftercareFAQ';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { Sparkles, ArrowRight, Tag, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setBookingService(serviceName);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setBookingService(undefined);
  };

  return (
    <main className="min-h-screen bg-cream-50 flex flex-col">
      {/* Header & Top Bar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Infinite Ticker Banner */}
      <MarqueeTicker />

      {/* Rejuvita Destination Section (Beneath Hero) */}
      <DestinationSection onOpenBooking={() => handleOpenBooking()} />

      {/* About Drita & Clinical Philosophy */}
      <AboutSection onOpenBooking={() => handleOpenBooking()} />

      {/* Elegant Quick Links Banner for Services & Prices */}
      <section className="py-20 bg-gradient-to-b from-cream-50 to-cream-100 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 text-gold-600">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                Explore Clinical Treatments
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              Discover Our Full Suite of Treatments & Pricing
            </h2>
            <p className="text-charcoal-700 text-sm font-light leading-relaxed">
              Explore 148 bespoke treatments covering semi-permanent eyebrows, dermal injectables, skin boosters, fat dissolving, and holistic aesthetics on dedicated pages.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Services Page Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gold-500/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-600 flex items-center justify-center font-serif font-bold text-xl border border-gold-500/20">
                  <ShieldCheck className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                  Explore Services & Treatments
                </h3>
                <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                  Browse our categorized treatment menu including Microblading, Ombré Brows, Lip Fillers, Profhilo, RF Microneedling, and Regim A Facials with interactive procedure details.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href="/services"
                  className="bg-charcoal-900 hover:bg-charcoal-800 text-gold-400 font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full inline-flex items-center space-x-2 shadow-md transition-all group-hover:translate-x-1"
                >
                  <span>View Services Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Price Guide Page Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gold-500/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-600 flex items-center justify-center font-serif font-bold text-xl border border-gold-500/20">
                  <Tag className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                  Complete Treatments Price Guide
                </h3>
                <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                  View full transparent pricing and treatment durations for all 148 aesthetic procedures, packages, and courses with search filtering.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href="/price-guide"
                  className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-gold-700 text-white font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full inline-flex items-center space-x-2 shadow-md transition-all group-hover:translate-x-1"
                >
                  <span>View Full Price List</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Transformation Showcase */}
      <TransformationGallery />

      {/* Verified Treatwell & Booksy Reviews Section */}
      <ReviewsSection />

      {/* Aftercare Advice & FAQ */}
      <AftercareFAQ />

      {/* Location, Opening Hours & Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Online Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        preselectedService={bookingService}
      />
    </main>
  );
}
