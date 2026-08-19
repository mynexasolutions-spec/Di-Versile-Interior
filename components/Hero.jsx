'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Award, MapPin, Star } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/Hero/hero1.png',
    headline1: 'Creating Spaces That',
    headline2: 'Feel Like You.',
    sub: 'Interior & exterior design with turnkey execution, from concept to completion. A father-daughter led studio bringing thoughtful design and detailed execution to every space.',
  },
  {
    id: 2,
    image: '/images/Hero/hero2.png',
    headline1: 'Thoughtful Design,',
    headline2: 'Detailed Execution.',
    sub: 'From space planning and 3D visualisation to false ceilings, custom furniture, wall treatments and flooring — we design and execute every layer of your space under one roof.',
  },
  {
    id: 3,
    image: '/images/Hero/hero3.png',
    headline1: 'From an Empty Shell to',
    headline2: 'a Complete Space.',
    sub: 'Ceilings, walls, floors, furniture, lighting, façades and cladding — we bring every layer together into one seamless transformation, indoors and out.',
  },
];

const SLIDE_DURATION = 5000;

const stats = [
  { value: '500+', label: 'Projects' },
  { value: '10+', label: 'Years' },
  { value: '50+', label: 'Brands' },
  { value: '100%', label: 'Satisfaction' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i) => setCurrent(i), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(t);
  }, [current, paused, next]);

  const slide = slides[current];

  return (
    <>
      {/* ── MOBILE HERO (below sm) ── */}
      <div className="sm:hidden relative mt-14 bg-luxury-charcoal overflow-hidden">
        {/* Background */}
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={slide.image}
              alt={slide.headline1}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-5 pt-24 pb-18 min-h-[410px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 self-start mb-4">
            <MapPin size={11} className="text-luxury-gold shrink-0" />
            <span className="text-[10px] font-extrabold tracking-wider text-white uppercase">
              Delhi <span className="text-luxury-gold font-black">•</span> Interior &amp; Exterior Design
            </span>
          </div>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`m-text-${slide.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-[26px] font-extrabold text-white leading-[1.15] tracking-tight mb-4 drop-shadow-md"
            >
              {slide.headline1}
              <br />
              <span className="text-gold-gradient">{slide.headline2}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Buttons — side by side */}
          <div className="flex items-center gap-3 mb-5">
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-1.5 px-5 h-10 gold-gradient text-luxury-charcoalDark font-extrabold rounded-xl text-[10px] uppercase tracking-widest shadow-md flex-1"
            >
              Our Work
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center px-5 h-10 bg-white/10 text-white font-bold rounded-xl text-[10px] uppercase tracking-widest border border-white/25 flex-1"
            >
              Start a Project
            </Link>
          </div>

        </div>
 
        {/* Slide dots — horizontal on mobile */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-400 cursor-pointer ${
                i === current ? 'w-6 h-1.5 bg-luxury-gold' : 'w-1.5 h-1.5 bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
 
        {/* Progress bar */}
        {!paused && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-20">
            <motion.div
              key={`m-prog-${current}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
              style={{ originX: 0 }}
              className="h-full gold-gradient"
            />
          </div>
        )}
      </div>

      {/* Mobile Stats strip below hero */}
      <div className="sm:hidden bg-gradient-to-r from-luxury-charcoal to-luxury-charcoalDark py-5 border-b border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-4 gap-2">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center">
                <span className="font-sans text-lg font-extrabold text-luxury-gold leading-none">{s.value}</span>
                <span className="text-[8px] font-extrabold text-white/70 uppercase tracking-widest mt-1.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO (sm and above) ── */}
      <section
        className="hidden sm:flex relative h-screen min-h-[680px] items-end pb-20 overflow-hidden bg-luxury-charcoal"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`d-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={slide.image}
              alt={slide.headline1}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
            <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-luxury-gold/8 rounded-full blur-[130px] pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 mb-8"
            >
              <MapPin size={14} className="text-luxury-gold shrink-0" />
              <span className="text-xs font-extrabold tracking-widest text-white uppercase flex items-center gap-1.5">
                Delhi
                <span className="text-luxury-gold/60">•</span>
                <span className="text-white/80 font-semibold">Interior &amp; Exterior Design Studio</span>
              </span>
            </motion.div>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`d-text-${slide.id}`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-5 drop-shadow-md">
                  {slide.headline1}
                  <br />
                  <span className="text-gold-gradient">{slide.headline2}</span>
                </h1>
                <p className="text-white/75 text-lg font-medium leading-relaxed mb-10 max-w-2xl drop-shadow-sm">
                  {slide.sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-4 mb-12"
            >
              <Link
                href="/projects"
                className="group flex items-center justify-center gap-2.5 px-8 h-14 gold-gradient text-luxury-charcoalDark font-extrabold rounded-2xl text-sm uppercase tracking-widest shadow-lg shadow-luxury-gold/20 hover:shadow-luxury-gold/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                Explore Our Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center px-8 h-14 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl text-sm uppercase tracking-widest border border-white/25 backdrop-blur-md hover:border-white/50 transition-all duration-300"
              >
                Start Your Project
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="grid grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10"
            >
              {[
                { value: '500+', label: 'Projects Done' },
                { value: '10+', label: 'Years Experience' },
                { value: '50+', label: 'Premium Brands' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-5 px-4 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-colors duration-300">
                  <span className="font-sans text-3xl font-extrabold text-luxury-gold leading-none">{stat.value}</span>
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-24 right-10 z-20 flex flex-col gap-2.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`block rounded-full transition-all duration-500 ${i === current ? 'w-1.5 h-8 bg-luxury-gold' : 'w-1.5 h-3 bg-white/30 hover:bg-white/60'
                }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        {!paused && (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-20">
            <motion.div
              key={`d-prog-${current}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
              style={{ originX: 0 }}
              className="h-full gold-gradient"
            />
          </div>
        )}

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/40 backdrop-blur-md px-4 py-3 flex items-center justify-center gap-10"
        >
          {[
            { icon: ShieldCheck, text: 'Design & Execution, One Roof' },
            { icon: Award, text: 'Family Led Studio' },
            { icon: Star, text: 'Bespoke, Not Catalogue' },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70 text-xs font-semibold">
              <Icon size={14} className="text-luxury-gold shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
