'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, Briefcase, UtensilsCrossed, GraduationCap, Check } from 'lucide-react';

// Each card's image renders at a 4:3 aspect ratio (same ratio used by the
// service cards elsewhere on the site, for visual consistency).
// Recommended source size: 1200×900px minimum, ideally 1600×1200px for a
// crisp look on retina screens. JPG or WebP, compressed to roughly
// 150–400KB. `image` is a placeholder for now — once you have a real
// photo, drop it in public/images/spaces/<name>.jpg and point `image`
// at '/images/spaces/<name>.jpg' (keep `tempImage` as the placehold.co
// fallback in case the file is ever missing — same pattern as
// data/services.js).
const spaces = [
  {
    icon: Home,
    category: 'Residential',
    tagline: 'Homes Designed Around You',
    image: '/images/Hero/hero3.png',
    tempImage: 'https://placehold.co/1200x900/1c1c1e/d4af37?text=Residential&font=montserrat',
    description: 'Your home should reflect the people who live in it. We design residential spaces that are personal, comfortable and timeless — from individual rooms to complete homes.',
    listLabel: 'We undertake:',
    items: [
      'Apartments & flats',
      'Villas',
      'Independent houses',
      'Bedrooms',
      'Living & dining spaces',
      'Kitchens',
      'Bathrooms',
      'Balconies',
      'Home offices',
      'Complete home interiors',
    ],
  },
  {
    icon: Briefcase,
    category: 'Commercial',
    tagline: 'Spaces Designed to Work',
    image: '/images/services/glass-filming.webp',
    tempImage: 'https://placehold.co/1200x900/1c1c1e/d4af37?text=Commercial&font=montserrat',
    description: 'Commercial interiors need to look good, function efficiently and represent the identity of the business. We create practical and visually engaging spaces that consider customer experience, workflow, branding and everyday usability.',
    listLabel: 'Our commercial projects include:',
    items: [
      'Offices',
      'Retail stores',
      'Showrooms',
      'Salons',
      'Studios',
      'Clinics',
      'Boutiques',
      'Cafes',
      'Restaurants',
      'Small businesses & workspaces',
    ],
  },
  {
    icon: UtensilsCrossed,
    category: 'Hospitality',
    tagline: 'Designed for Experience',
    image: '/images/services/box.webp',
    tempImage: 'https://placehold.co/1200x900/1c1c1e/d4af37?text=Hospitality&font=montserrat',
    description: 'Hospitality spaces are about creating an experience that people remember. We design welcoming, character-driven environments where interiors, lighting, furniture, materials and branding work together.',
    listLabel: 'We design:',
    items: [
      'Cafes',
      'Restaurants',
      'Lounges',
      'Boutique hospitality spaces',
      'Guest areas',
      'Reception spaces',
      'Dining areas',
      'Outdoor seating',
      'Hospitality facades',
    ],
  },
  {
    icon: GraduationCap,
    category: 'Education',
    tagline: 'Inspiring Spaces for Learning',
    image: '/images/services/outside.webp',
    tempImage: 'https://placehold.co/1200x900/1c1c1e/d4af37?text=Education&font=montserrat',
    description: 'Educational environments need to be functional, comfortable and engaging. We design spaces that support learning while creating an environment that feels welcoming and thoughtfully planned.',
    listLabel: 'Our education projects can include:',
    items: [
      'Schools',
      'Coaching centres',
      'Training institutes',
      'Classrooms',
      'Reception areas',
      'Libraries',
      'Activity rooms',
      'Administrative spaces',
      'Faculty areas',
      'Common areas',
    ],
  },
];

function SpaceCard({ space, index }) {
  const Icon = space.icon;
  const [imgSrc, setImgSrc] = useState(space.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-[0_25px_60px_rgba(212,175,55,0.18)] border border-luxury-beigeDark/60 hover:border-luxury-gold/40 transition-all duration-500 flex flex-col h-full overflow-hidden"
    >
      {/* Sliding gold line at the top edge (sits above the image) */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      {/* Image — recommended source size: 1200×900px (4:3), retina-ready at 1600×1200px */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={imgSrc}
          alt={`${space.category} interior design`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setImgSrc(space.tempImage)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {/* Icon badge — top left, fully on the image */}
        <div className="absolute top-4 left-4 w-11 h-11 rounded-xl gold-gradient text-luxury-charcoalDark flex items-center justify-center shadow-lg z-10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
          <Icon size={20} />
        </div>

        {/* Floating category tag — top right */}
        <div className="absolute top-4 right-4 bg-black/45 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[9px] font-extrabold tracking-widest text-white uppercase shadow-md">
          {space.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 sm:p-8 flex flex-col flex-grow">
        {/* Fixed-height header block (tagline + description) so the list
            below starts at the same point on every card, regardless of
            how long each card's text happens to be. */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-extrabold tracking-tight text-luxury-charcoal leading-tight mb-4 min-h-[2.75rem] sm:min-h-[3.25rem]">
            {space.tagline}
          </h3>

          <p className="text-luxury-charcoalLight font-semibold text-sm leading-relaxed mb-6 line-clamp-3 min-h-[3.75rem]">
            {space.description}
          </p>
        </div>

        {/* Undertake / includes list — always starts right after the
            fixed-height block above, same position on every card. */}
        <div className="border-t border-luxury-beigeDark/50 pt-6">
          <span className="text-xs font-bold text-luxury-gold uppercase tracking-wider block mb-4">
            {space.listLabel}
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
            {space.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0 mt-0.5 border border-luxury-gold/20">
                  <Check size={9} strokeWidth={3} />
                </span>
                <span className="text-luxury-charcoalLight font-semibold text-xs sm:text-sm leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Spaces() {
  return (
    <section className="py-24 bg-white border-b border-luxury-beigeDark/30 relative overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3"
          >
            Every Kind of Space
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-luxury-charcoal"
          >
            Design For Every <span className="text-gold-gradient">Kind of Space</span>
          </motion.h2>
          <div className="w-20 h-[2.5px] bg-luxury-gold mx-auto my-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed"
          >
            From homes to businesses, cafes to classrooms — we design and execute spaces suited to how they're actually lived in and used.
          </motion.p>
        </div>

        {/* 4 Space Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {spaces.map((space, index) => (
            <SpaceCard key={space.category} space={space} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
