'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { DestinationSection } from '../components/DestinationSection';
import { AboutSection } from '../components/AboutSection';
import { MeetTheOwner } from '../components/MeetTheOwner';
import { TransformationGallery } from '../components/TransformationGallery';
import { ReviewsSection } from '../components/ReviewsSection';
import { AftercareFAQ } from '../components/AftercareFAQ';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { Sparkles, ArrowRight, Tag, ShieldCheck } from 'lucide-react';

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
      {/* Hero – full-screen pink peony image with floating transparent navbar */}
      <Header onOpenBooking={handleOpenBooking} hasHeroBackground={true} />

      {/* Hero – full-screen pink peony image */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Scrolling services marquee */}
      <MarqueeTicker />

      {/* About the clinic – overlapping images, dark velvet background */}
      <DestinationSection onOpenBooking={() => handleOpenBooking()} />

      {/* Practitioner story & clinical pillars */}
      <AboutSection onOpenBooking={() => handleOpenBooking()} />

      {/* Meet the Owner – owner portrait, story, and credentials */}
      <MeetTheOwner onOpenBooking={() => handleOpenBooking()} />

      {/* Services & price guide quick-links */}
      <section className="py-20 bg-gradient-to-b from-cream-50 to-cream-100 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 text-gold-600">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                What We Offer
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              Explore Our Treatments & Transparent Pricing
            </h2>
            <p className="text-charcoal-700 text-sm font-light leading-relaxed">
              From wake-up-ready SPMU brows to Profhilo skin boosters and anti-wrinkle injections — browse 148 bespoke treatments with honest, upfront prices. No hidden costs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Services Page Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gold-500/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                  <ShieldCheck className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                  Services & Treatments
                </h3>
                <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                  Microblading, Ombré Brows, Lip Fillers, Profhilo, RF Microneedling, Regim A Facials — each described in full so you know exactly what to expect.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href="/services"
                  className="bg-charcoal-900 hover:bg-charcoal-800 text-gold-400 font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full inline-flex items-center space-x-2 shadow-md transition-all group-hover:translate-x-1"
                >
                  <span>Browse Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Price Guide Page Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gold-500/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                  <Tag className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                  Full Price Guide
                </h3>
                <p className="text-xs text-charcoal-700 font-light leading-relaxed">
                  Clear, itemised pricing for all 148 treatments — including course packages and complimentary touch-up appointments where applicable.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href="/price-guide"
                  className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-gold-700 text-white font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full inline-flex items-center space-x-2 shadow-md transition-all group-hover:translate-x-1"
                >
                  <span>View Prices</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After – real client transformations */}
      <TransformationGallery />

      {/* Verified Treatwell & Booksy reviews */}
      <ReviewsSection />

      {/* Aftercare advice & FAQ accordion */}
      <AftercareFAQ />

      {/* Location map, opening hours, contact form */}
      <ContactSection />

      {/* Footer with newsletter signup */}
      <Footer />

      {/* Booking modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        preselectedService={bookingService}
      />
    </main>
  );
}
