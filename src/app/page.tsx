'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { DestinationSection } from '../components/DestinationSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { PriceGuide } from '../components/PriceGuide';
import { TransformationGallery } from '../components/TransformationGallery';
import { ReviewsSection } from '../components/ReviewsSection';
import { AftercareFAQ } from '../components/AftercareFAQ';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';

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

      {/* Interactive Tabbed Services Showcase */}
      <ServicesSection onOpenBooking={handleOpenBooking} />

      {/* Full Transparent Price Guide */}
      <PriceGuide onOpenBooking={handleOpenBooking} />

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
