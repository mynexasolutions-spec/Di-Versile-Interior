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

// Split into two rows and triplicate each for a seamless infinite loop
const half = Math.ceil(clients.length / 2);
const rowA = [...clients.slice(0, half), ...clients.slice(0, half), ...clients.slice(0, half)];
const rowB = [...clients.slice(half), ...clients.slice(half), ...clients.slice(half)];

function LogoCard({ client }) {
  return (
    <div className="flex items-center justify-center px-6 py-5 mx-3 rounded-xl bg-white border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)] hover:-translate-y-0.5 transition-all duration-500 shrink-0 group cursor-default select-none">
      <div className="relative w-32 h-14 sm:w-40 sm:h-16 shrink-0 flex items-center justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="relative py-20 bg-luxury-charcoal overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clientcover.jpeg"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay so logos & text stay readable */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>

      {/* Ambient gold glows */}
      <div className="absolute top-1/3 left-1/5 -translate-y-1/2 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/5 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            Our Respected <span className="text-gold-gradient">Clients</span>
          </h2>
          <div className="w-20 h-[2.5px] gold-gradient mx-auto mt-4 rounded-full" />
        </motion.div>
      </div>

      {/* ── Two-row infinite marquee, opposite directions ── */}
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

      {/* Bottom accent divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div className="h-[1px] w-12 bg-luxury-gold/40" />
          <div className="h-[1px] w-12 bg-luxury-gold/40" />
        </motion.div>
      </div>
    </section>
  );
}