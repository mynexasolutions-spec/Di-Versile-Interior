'use client';

import Image from 'next/image';
import { Phone, Armchair, Pencil } from 'lucide-react';

export default function LeadershipPage() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-luxury-charcoal">
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clientcover.jpeg"
          alt="Leadership Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Light overlay so image is properly visible while keeping text readable */}
        <div className="absolute inset-0 bg-black/35" />
        
        {/* Ambient gold glow on the right side */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-gold/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Logo - Visible on Mobile Only (above the heading, aligned right) */}
        <div className="flex justify-end lg:hidden mb-8">
          <div className="relative w-48 h-12">
            <Image
              src="/brand-logo.png"
              alt="Di Versile Interior Logo"
              fill
              sizes="192px"
              quality={100}
              className="object-contain object-right"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Description & Features */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-2 drop-shadow-md">
              Leadership
              <br />
              <span className="text-gold-gradient">Perspectives.</span>
            </h1>
            
            {/* Gold accent line */}
            <div className="w-14 h-[2px] gold-gradient my-3 rounded-full" />
            
            {/* Description Paragraph */}
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 max-w-xl drop-shadow-sm font-medium font-sans">
              Transform your space with our exceptional interior design services. We create stylish and functional environments tailored to your unique taste and lifestyles.
            </p>

            {/* Features row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <div className="border border-luxury-gold/40 rounded-xl p-2.5 flex items-center justify-center text-luxury-gold bg-black/20">
                  <Armchair size={20} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">Premium Designs</h4>
                  <p className="text-white/60 text-xs mt-0.5">Tailored & Timeless</p>
                </div>
              </div>

              {/* Vertical Separator */}
              <div className="hidden sm:block w-px h-8 bg-white/20" />

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <div className="border border-luxury-gold/40 rounded-xl p-2.5 flex items-center justify-center text-luxury-gold bg-black/20">
                  <Pencil size={20} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-wide">Functional Spaces</h4>
                  <p className="text-white/60 text-xs mt-0.5">Built Around You</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Logo & MD badge card */}
          <div className="lg:col-span-5 flex flex-col lg:items-end justify-end lg:justify-between gap-10 lg:h-full lg:min-h-[280px]">
            
            {/* Top Brand Logo - Visible on Desktop Only */}
            <div className="relative w-48 h-12 md:w-56 md:h-14 lg:flex hidden lg:justify-end">
              <Image
                src="/brand-logo.png"
                alt="Di Versile Interior Logo"
                fill
                sizes="224px"
                quality={100}
                className="object-contain lg:object-right"
              />
            </div>

            {/* MD Badge Card */}
            <div className="border border-luxury-gold/30 rounded-[24px] bg-black/55 backdrop-blur-md px-6 py-5 flex items-center gap-5 shadow-2xl self-start lg:self-auto max-w-md sm:max-w-lg w-full justify-between">
              
              {/* Text Info */}
              <div className="flex flex-col">
                <p className="text-luxury-gold font-serif text-[17px] sm:text-lg md:text-xl font-bold tracking-wider">
                  ~ MOBIN KHAN
                </p>
                <p className="text-white/70 text-[12px] sm:text-sm mt-0.5 font-medium">
                  ( Managing Director )
                </p>
              </div>

              {/* Circular Avatar */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-full ring-2 ring-luxury-gold ring-offset-2 ring-offset-black/40 overflow-hidden shadow-lg">
                <Image
                  src="/images/clientimage.jpeg"
                  alt="Mobin Khan"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              {/* Action Phone Icon */}
              <a
                href="tel:+918240602352"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-luxury-gold/40 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoalDark transition-all duration-300 shrink-0 cursor-pointer"
                title="Call Us"
              >
                <Phone size={16} className="sm:size-5" />
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}