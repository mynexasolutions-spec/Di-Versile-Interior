'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

function ServiceCard({ service, index }) {
  const [imgSrc, setImgSrc] = useState(service.image);

  // Dynamically resolve the Lucide icon from its name string
  const IconComponent = Icons[service.icon] || Icons.Home;

  // Dynamic category label
  const categoryLabel = service.category === 'exterior' ? 'Exterior Design' : 'Interior Design';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_25px_60px_rgba(212,175,55,0.18)] border border-luxury-beigeDark/60 hover:border-luxury-gold/40 transition-all duration-500 flex flex-col h-full"
    >
      {/* Sliding gold line at the top edge */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      <Link href={`/services/${service.id}`} className="flex flex-col flex-grow">
        {/* Card Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <Image
            src={imgSrc}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImgSrc(`https://placehold.co/800x600/1c1c1e/d4af37?text=${encodeURIComponent(service.name)}&font=montserrat`)}
          />
          {/* Elegant overlay card gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          {/* Floating Category Tag */}
          <div className="absolute top-4 left-4 bg-black/45 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[9px] font-extrabold tracking-widest text-white uppercase shadow-md transition-all duration-500">
            {categoryLabel}
          </div>
        </div>

        {/* Card Details */}
        <div className="p-6 flex flex-col flex-grow relative bg-white">
          {/* Icon Floating Badge */}
          <div className="absolute -top-7 right-6 w-14 h-14 rounded-full gold-gradient text-luxury-charcoalDark flex items-center justify-center shadow-lg border-4 border-white z-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:shadow-luxury-gold/25">
            <IconComponent size={22} />
          </div>

          <h3 className="font-serif text-xl font-extrabold text-luxury-charcoal mb-3 pr-10">
            {service.name}
          </h3>

          <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>

          <div className="mt-auto border-t border-luxury-beigeDark/50 pt-5 flex items-center justify-between">
            <span className="text-xs font-bold text-luxury-charcoal group-hover:text-luxury-gold uppercase tracking-widest flex items-center gap-1.5 transition-colors duration-300">
              Explore Solutions
              <Icons.ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesPreview() {
  // Display only the first 6 services as a preview on the homepage
  const previewServices = services.slice(0, 6);

  return (
    <section className="py-24 bg-gradient-to-b from-luxury-beige to-white border-b border-luxury-beigeDark/30 relative overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-luxury-charcoal"
          >
            Everything Your <span className="text-gold-gradient">Space</span> Needs
          </motion.h2>
          <div className="w-20 h-[2.5px] bg-luxury-gold mx-auto my-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed"
          >
            We create cohesive interiors that balance aesthetics, functionality and individuality — and design exteriors that make a strong first impression. Complete interior &amp; exterior work, under one roof, across Kolkata.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-luxury-gold text-luxury-charcoal font-bold rounded-full text-xs uppercase tracking-wider hover:bg-luxury-gold hover:text-white transition-all duration-300 shadow-sm"
            >
              View All {services.length} Services
              <Icons.ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
