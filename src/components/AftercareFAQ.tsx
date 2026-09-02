'use client';

import React, { useState } from 'react';
import { Sparkles, ChevronDown, HeartHandshake, ShieldAlert, Sparkle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'SPMU Brows',
    question: 'How long do Microblading & Ombré Brows take to heal?',
    answer: 'The initial surface healing takes roughly 7 to 10 days. During days 3-5, eyebrows may feel dry or undergo mild flaking as thin crusts form — this is completely normal. The true healed color will bloom fully by week 4, after which your included touch-up session refines any lighter areas.',
  },
  {
    id: 'faq-2',
    category: 'SPMU Brows',
    question: 'Does semi-permanent eyebrow mapping hurt?',
    answer: 'At Drita\'s Aesthetics, client comfort is paramount. We apply a medical-grade topical anesthetic cream 20 minutes prior to pigment insertion and maintain comforting numbing throughout. Most clients report only a light scratching sensation.',
  },
  {
    id: 'faq-3',
    category: 'Injectables',
    question: 'What is the recommended aftercare for Lip Fillers & Dermal Fillers?',
    answer: 'For 24-48 hours post-treatment: avoid strenuous exercise, saunas, hot tubs, alcohol, and touching/massaging the treated area. Minor swelling or bruising is normal and resolves quickly within 3 to 5 days.',
  },
  {
    id: 'faq-4',
    category: 'Injectables',
    question: 'How quickly do anti-wrinkle injections take effect?',
    answer: 'Initial smoothing effects begin to appear within 3 to 5 days, with full clinical results settling at 14 days post-injection. Results typically last 3 to 4 months.',
  },
  {
    id: 'faq-5',
    category: 'Skin Rejuvenation',
    question: 'What should I avoid after a Chemical Peel or Skin Booster?',
    answer: 'Always wear broad-spectrum SPF 50 sun protection daily. Avoid active skincare acids (AHAs, BHAs, Retinols) for 5-7 days and allow any micro-peeling to slough off naturally without picking.',
  },
  {
    id: 'faq-6',
    category: 'Concessions & Offers',
    question: 'Do you offer Student, NHS, or Armed Forces discounts?',
    answer: 'Yes! Drita\'s Aesthetics proudly offers exclusive concessions to support our community: 10% OFF for Students (with valid Student ID) and 20% OFF for NHS Staff and Armed Forces / Military personnel (with valid NHS or MOD Defence ID). Discounts can be selected during online booking and will be verified upon arrival at the clinic.',
  },
];

export const AftercareFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  return (
    <section id="faq" className="py-20 bg-cream-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-gold-600">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-semibold">Client Guidance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Aftercare Advice & Frequently Asked Questions
          </h2>
          <p className="text-charcoal-700 text-sm font-light">
            Everything you need to know before and after your aesthetic appointment with Drita.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gold-500/20 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider bg-gold-50 px-2.5 py-1 rounded-full border border-gold-500/20 flex-shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-serif font-bold text-charcoal-900 text-base sm:text-lg">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-gold-600 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-charcoal-700 font-light leading-relaxed border-t border-cream-100">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
