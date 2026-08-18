'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Play,
  Image as ImageIcon,
  Video as VideoIcon,
} from 'lucide-react';
import CTA from './CTA';

const PAGE_SIZE = 9;

/* ── Lightbox Modal ───────────────────────────────── */
function Lightbox({ items, activeIndex, onClose, onPrev, onNext, onSelectIndex }) {
  const item = items[activeIndex];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onPrev, onNext, onClose]);

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-2xl p-4"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden bg-luxury-charcoalDark border border-white/10 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Media area */}
        <div className="relative flex-1 min-h-[55vh] sm:min-h-[65vh] bg-black flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {item.type === 'video' ? (
                <video
                  key={item.src}
                  src={item.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              )}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark hover:border-luxury-gold transition-all duration-300 flex items-center justify-center"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark hover:border-luxury-gold transition-all duration-300 flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

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
              {item.type === 'video' ? 'Video' : 'Photo'}
            </span>
            <h3 className="font-sans text-base sm:text-lg font-extrabold text-white tracking-tight">
              {item.name}
            </h3>
          </div>
          <span className="text-xs font-semibold text-white/40 tabular-nums">
            {activeIndex + 1} / {items.length}
          </span>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 px-6 pb-5 overflow-x-auto no-scrollbar">
          {items.map((media, i) => (
            <button
              key={media.id}
              onClick={() => onSelectIndex(i)}
              className={`relative w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-300 ${
                i === activeIndex
                  ? 'border-luxury-gold scale-105'
                  : 'border-white/10 opacity-50 hover:opacity-80'
              }`}
            >
              {media.type === 'video' ? (
                <video src={media.src} className="w-full h-full object-cover" muted preload="metadata" />
              ) : (
                <Image src={media.src} alt={media.name} fill className="object-cover" />
              )}
              {media.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play size={12} className="text-white fill-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Project Card ─────────────────────────────────── */
function ProjectCard({ item, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % PAGE_SIZE) * 0.06 }}
      onClick={() => onOpen(index)}
      className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] border border-luxury-beigeDark/60 hover:border-luxury-gold/40 transition-all duration-500 bg-stone-100 h-72 sm:h-80 md:h-[320px] w-full cursor-pointer scale-100 hover:scale-[1.03] active:scale-[0.99]"
    >
      {/* Sliding gold line at the top edge */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      {item.type === 'video' ? (
        <video
          src={item.src}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

      {/* Project number badge */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] font-extrabold tracking-widest text-white uppercase">
        Project #{String(index + 1).padStart(2, '0')}
      </div>

      {/* Video indicator */}
      {item.type === 'video' && (
        <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:border-luxury-gold transition-all duration-300">
          <Play size={16} className="fill-current" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex items-end justify-between gap-3 z-10">
        <h3 className="font-sans text-sm sm:text-base font-extrabold tracking-tight leading-tight">
          {item.name}
        </h3>
        <span className="shrink-0 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Full Size
          <ZoomIn size={13} />
        </span>
      </div>
    </motion.div>
  );
}

/* ── Main Projects Page ───────────────────────────── */
export default function ProjectsGallery({ images, videos }) {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const allItems = useMemo(() => [...images, ...videos], [images, videos]);

  const filteredItems = useMemo(() => {
    if (filter === 'photos') return images;
    if (filter === 'videos') return videos;
    return allItems;
  }, [filter, images, videos, allItems]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevItem = useCallback(
    () => setLightboxIndex((i) => (i - 1 + filteredItems.length) % filteredItems.length),
    [filteredItems.length]
  );
  const nextItem = useCallback(
    () => setLightboxIndex((i) => (i + 1) % filteredItems.length),
    [filteredItems.length]
  );

  const tabs = [
    { key: 'all', label: 'All Work', count: allItems.length },
    { key: 'photos', label: 'Photos', count: images.length },
    { key: 'videos', label: 'Videos', count: videos.length },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-luxury-beige to-white pt-28 pb-16 border-b border-luxury-beigeDark/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3 animate-fade-in">
              Our Work
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-luxury-charcoal mb-4">
              Sites &amp; <span className="text-gold-gradient">Projects</span>
            </h1>
            <div className="w-20 h-[2.5px] bg-luxury-gold mx-auto my-6 rounded-full" />
            <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed">
              A complete look at the interiors, exteriors, and custom fabrication work delivered on site by Di Versile Interior.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setFilter(tab.key);
                  setVisibleCount(PAGE_SIZE);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                  filter === tab.key
                    ? 'gold-gradient text-luxury-charcoalDark border-transparent shadow-md'
                    : 'bg-white text-luxury-charcoalLight border-luxury-beigeDark hover:border-luxury-gold/40 hover:text-luxury-gold'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-luxury-beige border border-luxury-beigeDark flex items-center justify-center mx-auto mb-6">
                {filter === 'videos' ? (
                  <VideoIcon className="text-luxury-gold" size={26} />
                ) : (
                  <ImageIcon className="text-luxury-gold" size={26} />
                )}
              </div>
              <h3 className="font-sans text-xl font-extrabold text-luxury-charcoal mb-3">
                No {filter === 'videos' ? 'videos' : filter === 'photos' ? 'photos' : 'projects'} yet
              </h3>
              <p className="text-luxury-charcoalLight font-semibold text-sm leading-relaxed">
                Drop image files (.png, .jpg, .jpeg, .webp, .gif, .avif) into{' '}
                <code className="px-1.5 py-0.5 rounded bg-luxury-beige text-luxury-gold font-mono text-xs">
                  public/projects/images
                </code>{' '}
                or video files (.mp4, .webm, .mov) into{' '}
                <code className="px-1.5 py-0.5 rounded bg-luxury-beige text-luxury-gold font-mono text-xs">
                  public/projects/videos
                </code>{' '}
                — they&apos;ll show up here automatically, no code changes needed.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleItems.map((item, index) => (
                  <ProjectCard key={item.id} item={item} index={index} onOpen={openLightbox} />
                ))}
              </div>

              {hasMore && (
                <div className="flex justify-center mt-14">
                  <button
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-luxury-beige hover:bg-luxury-beigeDark/60 text-luxury-charcoal border border-luxury-beigeDark hover:border-luxury-gold/40 transition-all duration-300 scale-100 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Load More Work
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filteredItems}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
            onSelectIndex={setLightboxIndex}
          />
        )}
      </AnimatePresence>

      <CTA />
    </>
  );
}
