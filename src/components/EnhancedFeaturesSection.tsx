'use client';

import React from 'react';
import { Sparkles, CheckCircle2, Type } from 'lucide-react';

export const EnhancedFeaturesSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center bg-cover bg-center overflow-hidden py-16 sm:py-24 border-y border-white/10"
      style={{
        backgroundImage: "url('/images/enhanced-features-bg.jpg')",
      }}
    >
      {/* Dark Gradient Overlay: Left side contrast for text, right side transparent for model image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent pointer-events-none" />

      {/* Max-Width Container (1200px) */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Left Side Content Container (occupying ~58% width on desktop) */}
        <div className="w-full lg:w-[58%]">
          {/* Header Typography */}
          <div className="mb-[40px] space-y-2">
            <span
              className="block text-[12px] uppercase font-bold text-[#b39a7d]"
              style={{ letterSpacing: '2px' }}
            >
              MORE FEATURES
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] leading-tight">
              Enhanced WP{' '}
              <span className="font-serif italic font-normal text-gold-300">
                Functionality
              </span>
            </h2>
          </div>

          {/* Three Feature Cards Row (Glassmorphism Effect) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
            {/* Card 1: AI Content Generator */}
            <div
              className="rounded-[16px] p-[24px] text-[#ffffff] border border-white/20 transition-all duration-300 hover:-translate-y-[5px] shadow-2xl flex flex-col justify-between"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div>
                <div className="mb-[16px] text-gold-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#ffffff] mb-[12px]">
                  AI Content Generator
                </h3>
                <p className="text-[14px] text-[#ffffff] opacity-90 leading-[1.5] font-light">
                  Automatically create tailored, high-quality text for websites with advanced AI support.
                </p>
              </div>
            </div>

            {/* Card 2: Mega Menu Support */}
            <div
              className="rounded-[16px] p-[24px] text-[#ffffff] border border-white/20 transition-all duration-300 hover:-translate-y-[5px] shadow-2xl flex flex-col justify-between"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div>
                <div className="mb-[16px] text-gold-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#ffffff] mb-[12px]">
                  Mega Menu Support
                </h3>
                <p className="text-[14px] text-[#ffffff] opacity-90 leading-[1.5] font-light">
                  Organize and display navigation with customizable multi-column dropdown menus.
                </p>
              </div>
            </div>

            {/* Card 3: Animated Headline */}
            <div
              className="rounded-[16px] p-[24px] text-[#ffffff] border border-white/20 transition-all duration-300 hover:-translate-y-[5px] shadow-2xl flex flex-col justify-between"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div>
                <div className="mb-[16px] text-gold-400">
                  <Type className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#ffffff] mb-[12px]">
                  Animated Headline
                </h3>
                <p className="text-[14px] text-[#ffffff] opacity-90 leading-[1.5] font-light">
                  Capture attention dynamic, eye catching headline animations for impactful messaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
