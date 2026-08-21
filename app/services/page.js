'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  const [filter, setFilter] = useState('all');

  const interiorCount = services.filter(s => s.category === 'interior').length;
  const exteriorCount = services.filter(s => s.category === 'exterior').length;
  const allCount = services.length;

  const filteredServices = services.filter(s => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  return (
    <section className="bg-gradient-to-b from-luxury-beige to-white pt-40 sm:pt-44 pb-24 border-b border-luxury-beigeDark/30 relative min-h-screen">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3 animate-fade-in">
            Our Services
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-luxury-charcoal mb-4">
            Everything Your <span className="text-gold-gradient">Space</span> Needs
          </h1>
          <div className="w-20 h-[2.5px] bg-luxury-gold mx-auto my-6 rounded-full" />
          <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed">
            We create cohesive interiors that balance aesthetics, functionality and individuality, and exteriors that make a strong first impression. Complete design and execution, under one roof, across Kolkata.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
              filter === 'all'
                ? 'gold-gradient text-luxury-charcoalDark shadow-md scale-105'
                : 'bg-white text-luxury-charcoal border border-luxury-beigeDark hover:border-luxury-gold/50 hover:text-luxury-gold scale-100 hover:scale-105'
            }`}
          >
            All Services ({allCount})
          </button>
          <button
            onClick={() => setFilter('interior')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
              filter === 'interior'
                ? 'gold-gradient text-luxury-charcoalDark shadow-md scale-105'
                : 'bg-white text-luxury-charcoal border border-luxury-beigeDark hover:border-luxury-gold/50 hover:text-luxury-gold scale-100 hover:scale-105'
            }`}
          >
            Interior ({interiorCount})
          </button>
          <button
            onClick={() => setFilter('exterior')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
              filter === 'exterior'
                ? 'gold-gradient text-luxury-charcoalDark shadow-md scale-105'
                : 'bg-white text-luxury-charcoal border border-luxury-beigeDark hover:border-luxury-gold/50 hover:text-luxury-gold scale-100 hover:scale-105'
            }`}
          >
            Exterior ({exteriorCount})
          </button>
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
