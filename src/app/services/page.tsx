'use client';

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { ServicesSection } from '../../components/ServicesSection';
import { Footer } from '../../components/Footer';
import { BookingModal } from '../../components/BookingModal';

export default function ServicesPage() {
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
      <Header onOpenBooking={handleOpenBooking} />

      {/* Page Title Hero Banner */}
      <div className="bg-[#140A0F] text-white py-16 text-center border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            DRITA'S CLINIC CATALOG
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-2">
            Aesthetic Treatments & Services
          </h1>
          <p className="text-cream-200 text-sm font-light mt-3 max-w-xl mx-auto">
            Explore our comprehensive medical-grade aesthetics menu, microblading brow mapping, anti-wrinkle solutions, and revitalizing skin boosters.
          </p>
        </div>
      </div>

      <ServicesSection onOpenBooking={handleOpenBooking} />

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        preselectedService={bookingService}
      />
    </main>
  );
}
