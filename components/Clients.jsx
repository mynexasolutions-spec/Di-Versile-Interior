'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const clientList = [
  { id: 'wefit', name: 'Wefit', logo: '/images/clients/c3.jpeg' },
  { id: 'mojopizza', name: 'Mojo Pizza', logo: '/images/clients/c4.jpeg' },
  { id: 'zaza', name: 'Zaza Mughal Biryani', logo: '/images/clients/c5.jpeg' },
  { id: 'humtoum', name: 'HumToum', logo: '/images/clients/c6.jpeg' },
  { id: 'larsen', name: 'Larsen & Toubro', logo: '/images/clients/c7.jpeg' },
  { id: 'humtoumsweets', name: 'HumToum Sweets', logo: '/images/clients/c8.jpeg' },
  { id: 'signatech', name: 'Signatech', logo: '/images/clients/c9.jpeg' },
  { id: 'leancrust', name: 'LeanCrust Pizza', logo: '/images/clients/c10.jpeg' },
  { id: 'nescafe', name: 'Nescafe', logo: '/images/clients/c11.jpeg' },
  { id: 'bihani', name: 'Bihani Group', logo: '/images/clients/c12.jpeg' },
  { id: 'eatclub', name: 'Eat Club', logo: '/images/clients/c13.jpeg' },
  { id: 'box8', name: 'Box8', logo: '/images/clients/c14.jpeg' },
  { id: 'totsandmoms', name: 'Tots & Moms', logo: '/images/clients/c15.jpeg' },
  { id: 'kgc', name: 'KGC', logo: '/images/clients/c16.jpeg' },
];

// Split into two rows and triplicate each for a seamless infinite loop
const half = Math.ceil(clientList.length / 2);
const rowA = [...clientList.slice(0, half), ...clientList.slice(0, half), ...clientList.slice(0, half)];
const rowB = [...clientList.slice(half), ...clientList.slice(half), ...clientList.slice(half)];

function LogoCard({ client }) {
  return (
    <div className="flex items-center justify-center px-6 py-4 mx-3 rounded-xl bg-transparent border border-luxury-beigeDark/70 hover:border-luxury-gold/40 shadow-sm hover:shadow-[0_8px_20px_rgba(212,175,55,0.12)] hover:-translate-y-0.5 transition-all duration-500 shrink-0 group cursor-default select-none w-36 h-18 sm:w-44 sm:h-22">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className="max-w-full max-h-full object-contain rounded-md group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-luxury-beige to-white border-b border-luxury-beigeDark/40 overflow-hidden">
      {/* Subtle background ambient gold glowing lights */}
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
          <span className="text-luxury-gold uppercase text-[11px] sm:text-xs font-bold tracking-[0.25em] block mb-2">
            — TRUSTED BY —
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-luxury-charcoal">
            Our Respected <span className="text-gold-gradient">Clients</span>
          </h2>

          {/* Custom Ornament: line-circle-line */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-[1px] bg-luxury-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full border border-luxury-gold bg-transparent" />
            <div className="w-12 h-[1px] bg-luxury-gold/40" />
          </div>
        </motion.div>
      </div>

      {/* ── Two-row infinite marquee scrolling ticker, opposite directions ── */}
      <div className="relative w-full overflow-hidden py-2 space-y-5 z-10">
        <div className="flex animate-marquee-left hover:pause-marquee">
          {rowA.map((client, i) => (
            <LogoCard key={`row-a-${i}`} client={client} />
          ))}
        </div>
        <div className="flex animate-marquee-right hover:pause-marquee">
          {rowB.map((client, i) => (
            <LogoCard key={`row-b-${i}`} client={client} />
          ))}
        </div>
      </div>

      {/* View Our Work Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-luxury-gold border border-luxury-gold text-luxury-charcoalDark font-bold text-sm hover:bg-transparent hover:text-luxury-gold transition-all duration-300"
          >
            View Our Work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}