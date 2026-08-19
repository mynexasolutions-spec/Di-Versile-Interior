'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Modern Living Room Design',
    category: 'Interior Solution',
    image: '/images/gallery/gallery1.png',
  },
  {
    id: 2,
    title: 'Luxury Bedroom Setup',
    category: 'Home Furnishing',
    image: '/images/gallery/gallery2.png',
  },
  {
    id: 3,
    title: 'Custom Fabric Curtains',
    category: 'Curtains & Blinds',
    image: '/images/gallery/gallery3.png',
  },
  {
    id: 4,
    title: 'Textured Wallpaper Wall',
    category: 'Wall Solutions',
    image: '/images/gallery/gallery4.png',
  },
  {
    id: 5,
    title: 'Natural Oak Flooring',
    category: 'Flooring Solution',
    image: '/images/gallery/gallery5.png',
  },
  {
    id: 6,
    title: 'POP False Ceiling & Lights',
    category: 'False Ceiling',
    image: '/images/gallery/gallery6.png',
  },
];

/* ── Lightbox Modal ───────────────────────────────── */
function Lightbox({ items, activeIndex, onClose, onPrev, onNext, onSelectIndex }) {
  const item = items[activeIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-2xl p-4"
    >
      {/* Modal card — stop propagation so clicking inside doesn't close */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden bg-luxury-charcoalDark border border-white/10 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        <div className="relative flex-1 min-h-[55vh] sm:min-h-[65vh] bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark hover:border-luxury-gold transition-all duration-300 flex items-center justify-center"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark hover:border-luxury-gold transition-all duration-300 flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark hover:border-luxury-gold transition-all duration-300 flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/8">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-luxury-gold block mb-0.5">
              {item.category}
            </span>
            <h3 className="font-serif text-base sm:text-lg font-extrabold text-white tracking-tight">
              {item.title}
            </h3>
          </div>
          <span className="text-xs font-semibold text-white/40 tabular-nums">
            {activeIndex + 1} / {items.length}
          </span>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 px-6 pb-5 overflow-x-auto no-scrollbar">
          {items.map((img, i) => (
            <button
              key={img.id}
              onClick={() => onSelectIndex(i)}
              className={`relative w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-300 ${
                i === activeIndex
                  ? 'border-luxury-gold scale-105'
                  : 'border-white/10 opacity-50 hover:opacity-80'
              }`}
            >
              <Image src={img.image} alt={img.title} fill className="object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Gallery Card ─────────────────────────────────── */
function GalleryItem({ item, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onOpen(index)}
      className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] border border-luxury-beigeDark/60 hover:border-luxury-gold/40 transition-all duration-500 bg-stone-100 h-80 md:h-[360px] w-full cursor-pointer scale-100 hover:scale-[1.03] active:scale-[0.99]"
    >
      {/* Sliding gold line at the top edge */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
      />

      {/* Always-on dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />
      {/* Hover deepens */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Text — always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end z-10">
        <span className="text-[10px] font-bold tracking-widest uppercase text-luxury-gold mb-1">
          {item.category}
        </span>
        <h3 className="font-serif text-base sm:text-lg font-extrabold tracking-tight leading-tight">
          {item.title}
        </h3>
        <div className="w-8 h-[2px] bg-luxury-gold mt-2.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 rounded-full" />
      </div>

      {/* Zoom icon on hover */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:border-luxury-gold flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 z-10">
        <ZoomIn size={16} />
      </div>
    </motion.div>
  );
}

/* ── Main Gallery Section ─────────────────────────── */
export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox  = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage     = useCallback(() => setLightboxIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length), []);
  const nextImage     = useCallback(() => setLightboxIndex((i) => (i + 1) % galleryItems.length), []);

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-luxury-beige border-b border-luxury-beigeDark/30 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
                Our Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-luxury-charcoal leading-tight">
                Ideas That Inspire <span className="text-gold-gradient">Better Spaces</span>
              </h2>
              <div className="w-20 h-[2.5px] bg-luxury-gold mt-4 rounded-full" />
            </div>
            <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base md:max-w-md leading-relaxed">
              Click any photo to view it fullscreen. Swipe through our work across interior design, flooring, ceilings, curtains, and more.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={index}
                onOpen={openLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={galleryItems}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
            onSelectIndex={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}
