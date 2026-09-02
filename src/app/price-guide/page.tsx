'use client';

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { PriceGuide } from '../../components/PriceGuide';
import { Footer } from '../../components/Footer';
import { BookingModal, DiscountType } from '../../components/BookingModal';

export default function PriceGuidePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);
  const [bookingDiscount, setBookingDiscount] = useState<DiscountType>('none');

  const handleOpenBooking = (serviceName?: string, discount: DiscountType = 'none') => {
    setBookingService(serviceName);
    setBookingDiscount(discount);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setBookingService(undefined);
    setBookingDiscount('none');
  };

  return (
    <main className="min-h-screen bg-cream-50 flex flex-col">
      <Header onOpenBooking={handleOpenBooking} />

      {/* Page Title Banner — pt-28 clears the fixed navbar height */}
      <div className="bg-[#140A0F] text-white pt-28 pb-16 text-center border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            TRANSPARENT CLINIC PRICING
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-2">
            Treatments Price Guide
          </h1>
          <p className="text-cream-200 text-sm font-light mt-3 max-w-xl mx-auto">
            View our complete 148 treatment price list with clear pricing, procedure durations, and exclusive 10% Student & 20% NHS/Forces discounts.
          </p>
        </div>
      </div>

      <PriceGuide onOpenBooking={handleOpenBooking} />

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        preselectedService={bookingService}
        preselectedDiscount={bookingDiscount}
      />
    </main>
  );
}
