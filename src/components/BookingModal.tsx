'use client';

import React, { useState, useEffect } from 'react';
import { TREATMENTS } from '../data/treatments';
import { X, Calendar, Clock, CheckCircle2, ChevronRight, User, Phone, Mail, Sparkles, ExternalLink } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<string>(
    preselectedService || TREATMENTS[0].name
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-28');
  const [selectedTime, setSelectedTime] = useState<string>('11:30 AM');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const currentTreatmentObj =
    TREATMENTS.find((t) => t.name === selectedService) || TREATMENTS[0];

  const availableTimeSlots = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/75 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-gold-500/30 shadow-2xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-charcoal-600 hover:text-charcoal-900 bg-cream-100 p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-2 text-gold-600 mb-1">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-semibold">
            Drita's Online Booking
          </span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-charcoal-900">
          Book Your Aesthetic Consultation
        </h3>

        {/* Step Indicator Bar */}
        <div className="flex items-center justify-between my-6 border-b border-cream-200 pb-4">
          <div className={`flex items-center space-x-2 text-xs font-semibold ${step >= 1 ? 'text-gold-600' : 'text-charcoal-600'}`}>
            <span className="w-6 h-6 rounded-full bg-gold-500/15 flex items-center justify-center border border-gold-500">1</span>
            <span>Treatment</span>
          </div>
          <ChevronRight className="w-4 h-4 text-charcoal-600" />

          <div className={`flex items-center space-x-2 text-xs font-semibold ${step >= 2 ? 'text-gold-600' : 'text-charcoal-600'}`}>
            <span className="w-6 h-6 rounded-full bg-gold-500/15 flex items-center justify-center border border-gold-500">2</span>
            <span>Date & Time</span>
          </div>
          <ChevronRight className="w-4 h-4 text-charcoal-600" />

          <div className={`flex items-center space-x-2 text-xs font-semibold ${step >= 3 ? 'text-gold-600' : 'text-charcoal-600'}`}>
            <span className="w-6 h-6 rounded-full bg-gold-500/15 flex items-center justify-center border border-gold-500">3</span>
            <span>Details</span>
          </div>
        </div>

        {/* STEP 1: Select Treatment */}
        {step === 1 && (
          <div className="space-y-4">
            <label className="block text-xs font-semibold text-charcoal-800">
              Select Your Preferred Service:
            </label>
            <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
              {TREATMENTS.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setSelectedService(t.name)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedService === t.name
                      ? 'border-gold-500 bg-gold-50/60 shadow-sm'
                      : 'border-cream-200 hover:border-gold-300'
                  }`}
                >
                  <div>
                    <h4 className="font-serif font-bold text-charcoal-900 text-sm">{t.name}</h4>
                    <p className="text-[11px] text-charcoal-600 font-light">{t.duration} • {t.categoryLabel}</p>
                  </div>
                  <span className="font-serif font-bold text-gold-600 text-sm">{t.price}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-4 bg-gradient-to-r from-gold-500 to-bronze-500 text-white font-semibold py-3 rounded-xl shadow-md text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              <span>Continue to Schedule</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Choose Date & Time */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                Select Consultation Date:
              </label>
              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-bronze-200 text-xs focus:outline-none focus:border-gold-500 bg-cream-50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-800 mb-2">
                Select Available Time Slot:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {availableTimeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedTime === slot
                        ? 'bg-charcoal-900 text-gold-400 border-2 border-gold-500 shadow-md'
                        : 'bg-cream-100 text-charcoal-800 hover:bg-gold-50 border border-bronze-200'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-cream-50 p-4 rounded-2xl border border-gold-500/20 text-xs space-y-1">
              <span className="font-semibold text-charcoal-900 block">Selected Summary:</span>
              <p className="text-charcoal-700">{currentTreatmentObj.name} ({currentTreatmentObj.price})</p>
              <p className="text-gold-700 font-medium">{selectedDate} at {selectedTime}</p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 border border-bronze-200 text-charcoal-700 text-xs py-3 rounded-xl font-medium"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-2/3 bg-gradient-to-r from-gold-500 to-bronze-500 text-white text-xs font-semibold py-3 rounded-xl shadow-md uppercase tracking-wider flex justify-center items-center space-x-1"
              >
                <span>Enter Your Info</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Client Details */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Eleanor Vance"
                value={clientInfo.name}
                onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-bronze-200 text-xs focus:outline-none focus:border-gold-500 bg-cream-50"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="07123 456789"
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-bronze-200 text-xs focus:outline-none focus:border-gold-500 bg-cream-50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@example.com"
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-bronze-200 text-xs focus:outline-none focus:border-gold-500 bg-cream-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                Special Medical / Skin Notes
              </label>
              <textarea
                rows={2}
                placeholder="Any skin sensitivities or previous SPMU history..."
                value={clientInfo.notes}
                onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-bronze-200 text-xs focus:outline-none focus:border-gold-500 bg-cream-50"
              />
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 border border-bronze-200 text-charcoal-700 text-xs py-3 rounded-xl font-medium"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!clientInfo.name || !clientInfo.phone}
                className="w-2/3 bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-gold-700 text-white text-xs font-semibold py-3 rounded-xl shadow-md uppercase tracking-wider disabled:opacity-50"
              >
                Confirm Appointment
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Booking Success Confirmation */}
        {step === 4 && (
          <div className="text-center space-y-4 py-4">
            <CheckCircle2 className="w-14 h-14 text-gold-600 mx-auto animate-bounce" />
            <h4 className="font-serif text-2xl font-bold text-charcoal-900">
              Appointment Request Reserved!
            </h4>
            <p className="text-xs text-charcoal-700 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{clientInfo.name || 'Valued Client'}</strong>! Your appointment request for <strong>{currentTreatmentObj.name}</strong> on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> has been logged.
            </p>

            <div className="bg-cream-50 p-4 rounded-2xl border border-gold-500/20 text-xs text-left max-w-md mx-auto space-y-1 text-charcoal-700">
              <p>📍 <strong>Location:</strong> 15 Endless Street, Salisbury, SP1 1DL</p>
              <p>⏱️ <strong>Duration:</strong> {currentTreatmentObj.duration}</p>
              <p>💷 <strong>Investment:</strong> {currentTreatmentObj.price}</p>
            </div>

            <div className="pt-2 flex flex-col space-y-2">
              <a
                href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gold-500 to-bronze-500 text-white py-3 rounded-xl text-xs font-semibold shadow-md flex items-center justify-center space-x-2"
              >
                <span>Book Directly on Booksy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-900 text-gold-400 py-3 rounded-xl text-xs font-semibold shadow-md flex items-center justify-center space-x-2"
              >
                <span>Instant Confirmation on Treatwell</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="text-xs font-semibold text-charcoal-600 hover:text-charcoal-900 py-2"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
