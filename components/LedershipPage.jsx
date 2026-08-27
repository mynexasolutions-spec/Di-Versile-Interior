'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        image: '/images/clientcover.jpeg',
        headline1: 'Leadership',
        headline2: 'Perspectives.',
        sub: '"Transform your space with our exceptional interior design services. We create stylish and functional enviroments tailored to your unique taste and life styles."',
        person: {
            image: '/images/clientimage.jpeg', // put the person's photo here
            name: 'Mobin Khan',
            title: 'Managing Director',
        },
    },

];

const SLIDE_DURATION = 5000;

// Reusable circular avatar + name block (matches the reference design)
function PersonBadge({ person, align = 'end' }) {
    if (!person) return null;
    return (
        <div
            className={`flex items-center gap-4 ${align === 'end' ? 'justify-end' : 'justify-start'
                }`}
        >
            <div className="text-right">
                <p className="text-white font-serif text-lg md:text-xl tracking-wide">
                    <span className="text-luxury-gold mr-1">~</span>
                    {person.name.toUpperCase()}
                </p>
                {person.title && (
                    <p className="text-white/70 text-sm md:text-base">
                        ( {person.title} )
                    </p>
                )}
            </div>

            <div className="relative w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-full ring-2 ring-luxury-gold ring-offset-2 ring-offset-black/40 overflow-hidden shadow-lg">
                <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                />
            </div>
        </div>
    );
}

export default function leader() {
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
            <div className="sm:hidden relative bg-luxury-charcoal overflow-hidden min-h-[92vh] flex flex-col">
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
                        {/* layered gradients so text stays readable top & bottom */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-luxury-gold/10 rounded-full blur-[90px] pointer-events-none" />
                    </motion.div>
                </AnimatePresence>

                

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 justify-end px-5 pt-16 pb-10">

                    {/* Headline */}
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`m-text-${slide.id}`}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.5 }}
                            className="font-serif text-[32px] xs:text-[36px] font-extrabold text-white leading-[1.1] tracking-tight mb-4 drop-shadow-md"
                        >
                            {slide.headline1}
                            <br />
                            <span className="text-gold-gradient">{slide.headline2}</span>
                        </motion.h1>
                    </AnimatePresence>

                    {/* Sub text */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`m-sub-${slide.id}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className="text-white/75 text-[15px] leading-relaxed mb-8 italic max-w-[32ch]"
                        >
                            {slide.sub}
                        </motion.p>
                    </AnimatePresence>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-luxury-gold/60 via-white/15 to-transparent mb-6" />

                    {/* Person badge */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`m-person-${slide.id}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <PersonBadge person={slide.person} />
                        </motion.div>
                    </AnimatePresence>

                </div>

            </div>

            {/* ── DESKTOP HERO (sm and above) ── */}
            <section
                className="hidden sm:flex relative h-screen min-h-[680px] items-center pt-32 pb-16 overflow-hidden bg-luxury-charcoal"
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
                            sizes="(max-width: 768px) 100vw, 100vw"
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

                    </div>
                </div>

                {/* Person badge — bottom-right, matches reference layout */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`d-person-${slide.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="absolute bottom-10 right-6 lg:right-12 z-10"
                    >
                        <PersonBadge person={slide.person} />
                    </motion.div>
                </AnimatePresence>

            </section>

        </>
    );
}