'use client';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { TREATMENTS } from '../data/treatments';
import { X, CheckCircle2, ChevronRight, Sparkles, ExternalLink, Loader2 } from 'lucide-react';

export type DiscountType = 'none' | 'student' | 'nhs' | 'military';

export interface DiscountOption {
  id: DiscountType;
  label: string;
  percent: number;
  badge: string;
  icon: string;
  note: string;
}

export const DISCOUNT_OPTIONS: DiscountOption[] = [
  {
    id: 'none',
    label: 'Standard Rate',
    percent: 0,
    badge: 'Standard',
    icon: '✨',
    note: 'Standard clinic investment',
  },
  {
    id: 'student',
    label: 'Student Discount',
    percent: 10,
    badge: '10% OFF',
    icon: '🎓',
    note: 'Valid Student ID card required at appointment',
  },
  {
    id: 'nhs',
    label: 'NHS & Healthcare',
    percent: 20,
    badge: '20% OFF',
    icon: '💙',
    note: 'Valid NHS Staff ID or Blue Light Card required at appointment',
  },
  {
    id: 'military',
    label: 'Armed Forces / Army',
    percent: 20,
    badge: '20% OFF',
    icon: '🎖️',
    note: 'Valid MOD Defence or Military Service ID required at appointment',
  },
];

export function calculateDiscount(priceStr: string, percent: number) {
  const match = priceStr.match(/(\d+(\.\d+)?)/);
  if (!match || percent <= 0) {
    return { original: priceStr, final: priceStr, savings: '£0', isDiscounted: false };
  }
  const numeric = parseFloat(match[1]);
  const savingsNum = (numeric * percent) / 100;
  const finalNum = numeric - savingsNum;
  const finalFormatted = Number.isInteger(finalNum) ? `£${finalNum}` : `£${finalNum.toFixed(2)}`;
  const savingsFormatted = Number.isInteger(savingsNum) ? `£${savingsNum}` : `£${savingsNum.toFixed(2)}`;
  return {
    original: priceStr,
    final: finalFormatted,
    savings: savingsFormatted,
    isDiscounted: true,
  };
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedDiscount?: DiscountType;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedDiscount = 'none',
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<string>(
    preselectedService || TREATMENTS[0].name
  );
  const [discountType, setDiscountType] = useState<DiscountType>(preselectedDiscount);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('11:30 AM');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedDiscount) {
      setDiscountType(preselectedDiscount);
    }
  }, [preselectedDiscount]);

  if (!isOpen) return null;

  const currentTreatmentObj =
    TREATMENTS.find((t) => t.name === selectedService) || TREATMENTS[0];

  const currentDiscountObj =
    DISCOUNT_OPTIONS.find((d) => d.id === discountType) || DISCOUNT_OPTIONS[0];

  const pricing = calculateDiscount(currentTreatmentObj.price, currentDiscountObj.percent);

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

        {/* STEP 1: Select Treatment & Concession */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-charcoal-800 mb-2">
                Select Your Preferred Service:
              </label>
              <div className="max-h-52 overflow-y-auto space-y-2 pr-1">
                {TREATMENTS.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => setSelectedService(t.name)}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
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
            </div>

            {/* Concession / Discount Selector */}
            <div className="pt-1">
              <label className="block text-xs font-semibold text-charcoal-800 mb-1.5 flex items-center justify-between">
                <span>Special Concession / Discount:</span>
                <span className="text-[10px] text-gold-600 font-bold uppercase tracking-wider">ID Required at Clinic</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {DISCOUNT_OPTIONS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDiscountType(d.id)}
                    className={`p-2 rounded-xl text-left border transition-all flex flex-col justify-between ${
                      discountType === d.id
                        ? 'border-gold-500 bg-charcoal-900 text-gold-400 shadow-md ring-1 ring-gold-400'
                        : 'border-bronze-200/80 bg-cream-50/60 hover:bg-gold-50/50 text-charcoal-800'
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      <span className="text-xs">{d.icon}</span>
                      <span className="text-[11px] font-bold tracking-tight truncate">{d.badge}</span>
                    </div>
                    <span className={`text-[10px] block mt-1 truncate ${discountType === d.id ? 'text-cream-200' : 'text-charcoal-600'}`}>
                      {d.id === 'none' ? 'Regular' : d.id === 'student' ? 'Student' : d.id === 'nhs' ? 'NHS / Blue Light' : 'Army / Military'}
                    </span>
                  </button>
                ))}
              </div>

              {pricing.isDiscounted && (
                <div className="mt-2.5 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[11px] text-emerald-900 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-sm">{currentDiscountObj.icon}</span>
                    <span><strong>{currentDiscountObj.label} ({currentDiscountObj.badge})</strong> applied!</span>
                  </div>
                  <div className="text-right font-serif">
                    <span className="line-through text-charcoal-600 mr-1.5 text-[10px]">{pricing.original}</span>
                    <strong className="text-emerald-700 font-bold text-xs">{pricing.final}</strong>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-2 bg-gradient-to-r from-gold-500 to-bronze-500 text-white font-semibold py-3 rounded-xl shadow-md text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:from-gold-600 hover:to-gold-700 transition-all"
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

            <div className="bg-cream-50 p-4 rounded-2xl border border-gold-500/20 text-xs space-y-1.5">
              <span className="font-semibold text-charcoal-900 block">Selected Summary:</span>
              <div className="flex justify-between items-center text-charcoal-700">
                <span>{currentTreatmentObj.name}</span>
                <span className="font-serif font-bold text-gold-600">
                  {pricing.isDiscounted ? `${pricing.final} (${currentDiscountObj.badge})` : currentTreatmentObj.price}
                </span>
              </div>
              <p className="text-gold-700 font-medium">{selectedDate || 'Select Date'} at {selectedTime}</p>
              {pricing.isDiscounted && (
                <p className="text-[11px] text-emerald-800 font-medium pt-0.5">
                  ✓ {currentDiscountObj.label} ({currentDiscountObj.percent}% OFF) · Save {pricing.savings}
                </p>
              )}
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

            {/* Summary Price Badge */}
            <div className="p-3 bg-cream-50 rounded-xl border border-gold-500/20 flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-charcoal-900 block">{currentTreatmentObj.name}</span>
                <span className="text-[11px] text-charcoal-600">
                  {selectedDate || 'Date TBD'} · {selectedTime}
                  {pricing.isDiscounted && ` · ${currentDiscountObj.label} (${currentDiscountObj.badge})`}
                </span>
              </div>
              <div className="text-right">
                <span className="font-serif font-bold text-sm text-gold-600 block">{pricing.final}</span>
                {pricing.isDiscounted && (
                  <span className="text-[10px] text-emerald-700 font-semibold">Save {pricing.savings}</span>
                )}
              </div>
            </div>

            {pricing.isDiscounted && (
              <p className="text-[11px] text-amber-800 bg-amber-50/80 border border-amber-200 rounded-lg p-2 leading-tight">
                ⚠️ <strong>Note:</strong> Please bring your valid <strong>{currentDiscountObj.label} ID</strong> card with you to the clinic to receive this {currentDiscountObj.percent}% discount.
              </p>
            )}

            <div className="flex space-x-3 pt-2">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 border border-bronze-200 text-charcoal-700 text-xs py-3 rounded-xl font-medium"
              >
                Back
              </button>
              <button
                onClick={async () => {
                  setSending(true);
                  setEmailError(null);
                  try {
                    const templateParams = {
                      client_name: clientInfo.name,
                      client_email: clientInfo.email,
                      client_phone: clientInfo.phone,
                      service: currentTreatmentObj.name,
                      price: pricing.isDiscounted
                        ? `${pricing.final} (${currentTreatmentObj.price} with ${currentDiscountObj.label} - ${currentDiscountObj.percent}% OFF)`
                        : currentTreatmentObj.price,
                      duration: currentTreatmentObj.duration,
                      date: selectedDate,
                      time: selectedTime,
                      discount_type: currentDiscountObj.label,
                      discount_percent: `${currentDiscountObj.percent}%`,
                      discount_savings: pricing.savings,
                      final_price: pricing.final,
                      notes: `${clientInfo.notes || 'None'}${
                        pricing.isDiscounted
                          ? ` [Discount: ${currentDiscountObj.label} (${currentDiscountObj.percent}% OFF) - ${currentDiscountObj.note}]`
                          : ''
                      }`,
                      to_email: 'dritasbeauty@yahoo.co.uk',
                    };
                    // Send notification to clinic owner
                    await emailjs.send(
                      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_OWNER!,
                      templateParams,
                      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                    );
                    // Send confirmation to customer (if email provided)
                    if (clientInfo.email) {
                      await emailjs.send(
                        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CLIENT!,
                        { ...templateParams, to_email: clientInfo.email },
                        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
                      );
                    }
                    setStep(4);
                  } catch (err) {
                    console.error('EmailJS error:', err);
                    setEmailError('Could not send confirmation email. Your booking is still noted — we will contact you shortly.');
                    setStep(4);
                  } finally {
                    setSending(false);
                  }
                }}
                disabled={!clientInfo.name || !clientInfo.phone || sending}
                className="w-2/3 bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-gold-700 text-white text-xs font-semibold py-3 rounded-xl shadow-md uppercase tracking-wider disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {sending ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></> : <span>Confirm Appointment</span>}
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
              Thank you, <strong>{clientInfo.name || 'Valued Client'}</strong>! Your appointment request for <strong>{currentTreatmentObj.name}</strong> on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> has been received.
              {clientInfo.email && <><br /><br />A confirmation email has been sent to <strong>{clientInfo.email}</strong>.</>}
            </p>
            {emailError && (
              <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 max-w-md mx-auto">
                ⚠️ {emailError}
              </p>
            )}

            <div className="bg-cream-50 p-4 rounded-2xl border border-gold-500/20 text-xs text-left max-w-md mx-auto space-y-1.5 text-charcoal-700">
              <p>📍 <strong>Location:</strong> 15 Endless Street, Salisbury, SP1 1DL</p>
              <p>⏱️ <strong>Duration:</strong> {currentTreatmentObj.duration}</p>
              <div className="flex justify-between items-center">
                <span>💷 <strong>Investment:</strong> {pricing.final}</span>
                {pricing.isDiscounted && (
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                    {currentDiscountObj.badge} ({currentDiscountObj.label})
                  </span>
                )}
              </div>
              {pricing.isDiscounted && (
                <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200 mt-1">
                  🎓/💙/🎖️ <strong>Reminder:</strong> Please present your valid {currentDiscountObj.label} ID when you arrive for your appointment.
                </p>
              )}
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
