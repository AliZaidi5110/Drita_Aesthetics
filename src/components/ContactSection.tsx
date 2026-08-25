'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle2, ExternalLink, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SPMU Brows Consultation',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Business Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                Visit Drita's Clinic
              </span>
              <h2 className="font-serif text-3xl font-bold text-charcoal-900 mt-1">
                Location & Opening Hours
              </h2>
              <p className="text-sm text-charcoal-700 font-light mt-2">
                Conveniently located in central Salisbury on Endless Street with ample nearby parking.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gold-500/20 shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-charcoal-900 text-sm">Clinic Address</h4>
                  <p className="text-xs text-charcoal-700 mt-1">15 Endless Street, Salisbury, SP1 1DL, UK</p>
                  <a
                    href="https://maps.google.com/?q=15+Endless+Street,+Salisbury,+SP1+1DL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-gold-700 hover:text-gold-800 font-semibold mt-2 underline"
                  >
                    <span>Get Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gold-500/20 shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-serif font-bold text-charcoal-900 text-sm">Opening Hours</h4>
                  <div className="mt-2 text-xs space-y-1.5 text-charcoal-700">
                    <div className="flex justify-between border-b border-cream-200 pb-1">
                      <span>Monday – Saturday:</span>
                      <span className="font-semibold text-charcoal-900">10:00 AM – 5:30 PM</span>
                    </div>
                    <div className="flex justify-between pt-0.5">
                      <span>Sunday:</span>
                      <span className="text-gold-700 font-medium">By Appointment Only</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Booking Buttons Strip */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://booksy.com/en-gb/181781_dritas-aesthetics_aesthetic-medicine_1199961_salisbury"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-charcoal-900 hover:bg-charcoal-800 text-gold-400 font-medium py-3 px-4 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Booksy Booking</span>
                </a>
                <a
                  href="https://www.treatwell.co.uk/place/drita-s-aesthetics-beauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gold-50 text-charcoal-900 border border-gold-500/30 font-medium py-3 px-4 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-gold-600" />
                  <span>Treatwell Booking</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Preview */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gold-500/20 h-52 bg-cream-200">
              <iframe
                title="Drita Aesthetics Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.2868297071477!2d-1.797370123531102!3d51.07037224213197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873ea2fdf8c17b5%3A0xa6cf509dd17c5b6b!2s15%20Endless%20St%2C%20Salisbury%20SP1%201DL%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gold-500/20 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-charcoal-900">
              Send a Direct Inquiry
            </h3>
            <p className="text-xs text-charcoal-600 font-light mt-1 mb-6">
              Have questions regarding eyebrow mapping, anti-wrinkle units, or skin boosters? Send Drita a message below.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-cream-50 rounded-2xl border border-gold-500/30 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-gold-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-charcoal-900">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-charcoal-700 font-light max-w-md mx-auto">
                  Thank you for contacting Drita's Aesthetics. We will reach out to you within 24 hours to confirm your consultation details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-gold-700 hover:text-gold-800 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-bronze-200 text-xs focus:outline-none focus:border-gold-500 bg-cream-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07123 456789"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-bronze-200 text-xs focus:outline-none focus:border-gold-500 bg-cream-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-bronze-200 text-xs focus:outline-none focus:border-gold-500 bg-cream-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                      Treatment Interested In
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-bronze-200 text-xs focus:outline-none focus:border-gold-500 bg-cream-50/50"
                    >
                      <option>Microblading & Ombré SPMU Brows</option>
                      <option>Dermal Fillers & Lip Augmentation</option>
                      <option>Anti-Wrinkle Injections</option>
                      <option>Profhilo & Skin Boosters</option>
                      <option>Eyebrow Threading & Tinting</option>
                      <option>General Aesthetics Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-800 mb-1">
                    Your Message / Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your aesthetic goals or preferred dates..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-bronze-200 text-xs focus:outline-none focus:border-gold-500 bg-cream-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-gold-500/20 transition-all flex items-center justify-center space-x-2 text-xs uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
