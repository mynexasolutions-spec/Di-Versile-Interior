'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  { id: 'decor', name: "D'Decor", tagline: 'Fabrics & Drapes', logo: '/images/clients/c1.jpeg' },
  { id: 'fabio', name: 'Fabio Furnishings', tagline: 'Premium Sofas', logo: '/images/clients/c2.jpeg' },
  { id: 'somfy', name: 'Somfy', tagline: 'Smart Blinds', logo: '/images/clients/c3.jpeg' },
  { id: 'welspun', name: 'Welspun', tagline: 'Home Textiles', logo: '/images/clients/c4.jpeg' },
  { id: 'obsessions', name: 'Obsessions', tagline: 'Wall Décor', logo: '/images/clients/c5.jpeg' },
  { id: 'decor', name: "D'Decor", tagline: 'Fabrics & Drapes', logo: '/images/clients/c6.jpeg' },
  { id: 'fabio', name: 'Fabio Furnishings', tagline: 'Premium Sofas', logo: '/images/clients/c7.jpeg' },
  { id: 'somfy', name: 'Somfy', tagline: 'Smart Blinds', logo: '/images/clients/c8.jpeg' },
  { id: 'welspun', name: 'Welspun', tagline: 'Home Textiles', logo: '/images/clients/c9.jpeg' },
  { id: 'obsessions', name: 'Obsessions', tagline: 'Wall Décor', logo: '/images/clients/c10.jpeg' },
  { id: 'decor', name: "D'Decor", tagline: 'Fabrics & Drapes', logo: '/images/clients/c11.jpeg' },
  { id: 'fabio', name: 'Fabio Furnishings', tagline: 'Premium Sofas', logo: '/images/clients/c12.jpeg' },
  { id: 'somfy', name: 'Somfy', tagline: 'Smart Blinds', logo: '/images/clients/c13.jpeg' },
  { id: 'decor', name: "D'Decor", tagline: 'Fabrics & Drapes', logo: '/images/clients/c14.jpeg' },
  { id: 'fabio', name: 'Fabio Furnishings', tagline: 'Premium Sofas', logo: '/images/clients/c15.jpeg' },
  { id: 'somfy', name: 'Somfy', tagline: 'Smart Blinds', logo: '/images/clients/c16.jpeg' },
];

// Triplicate for seamless infinite loop
const ticker = [...clients, ...clients, ...clients];

function ClientPill({ client }) {
  return (
    <div className="flex items-center justify-center px-8 py-5 mx-4 rounded-2xl bg-white border border-luxury-beigeDark/60 hover:border-luxury-gold/40 shadow-sm hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)] transition-all duration-500 shrink-0 group cursor-default select-none">
      {/* Larger Logo image */}
      <div className="relative w-36 h-16 shrink-0">
        <Image
          src={client.logo}
          alt={client.name}
          fill
          sizes="144px"
          className="object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-luxury-beige to-white border-b border-luxury-beigeDark/40 relative overflow-hidden">
      {/* Background ambient gold glowing lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Our Associates
          </span> */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-luxury-charcoal">
            Our Respective <span className="text-gold-gradient">Clients</span>
          </h2>
          <div className="w-20 h-[2.5px] gold-gradient mx-auto my-4 rounded-full" />
          {/* <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We source materials and furnishings from the industry's premier lifestyle leaders.
          </p> */}
        </motion.div>
      </div>

      {/* ── Single Infinite Marquee ── */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="flex animate-marquee-left hover:pause-marquee">
          {ticker.map((client, i) => (
            <div
              key={`client-${i}`}
              className="flex items-center justify-center px-6 py-2.5 mx-3 rounded-2xl bg-white border border-luxury-beigeDark/70 hover:border-luxury-gold/40 shadow-sm hover:shadow-[0_8px_20px_rgba(212,175,55,0.12)] transition-all duration-500 shrink-0 group cursor-pointer select-none"
            >
              <div className="relative w-44 h-16 shrink-0 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Authorized Dealer Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div className="h-[1px] w-12 bg-luxury-gold/40" />
          {/* <span className="text-xs font-bold uppercase tracking-[0.2em] text-luxury-gold">
            Authorized Dealer &amp; Service Partner
          </span> */}
          <div className="h-[1px] w-12 bg-luxury-gold/40" />
        </motion.div>
      </div>
    </section>
  );
}
