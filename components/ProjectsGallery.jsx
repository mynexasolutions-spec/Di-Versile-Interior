'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Play,
  Image as ImageIcon,
  Video as VideoIcon,
  MapPin,
  Layers,
  X,
} from 'lucide-react';
import CTA from './CTA';


const expresso2 = '/projects/insideImages/Elixir-&-Espresso-02.jpeg';
const expresso3 = '/projects/insideImages/Elixir & Espresso-03.jpeg';
const expresso4 = '/projects/insideImages/Elixir & Espresso-04.jpeg';
const expresso5 = '/projects/insideImages/Elixir & Espresso-05.jpeg';
const expresso6 = '/projects/insideImages/Elixir & Espresso-06.jpeg';
const expresso7 = '/projects/insideImages/Elixir & Espresso-07.jpeg';

const PAGE_SIZE = 20;



function ProjectDetails({ items, activeIndex, onBack, onPrev, onNext, onSelectIndex }) {
  const item = items[activeIndex];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onBack();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => window.removeEventListener('keydown', handleKey);
  }, [onPrev, onNext, onBack]);

  if (!item) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white"
    >
      {/* Top bar */}
      <div className="bg-gradient-to-b from-luxury-beige to-white pt-28 pb-8 border-b border-luxury-beigeDark/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-luxury-charcoalLight hover:text-luxury-gold transition-colors duration-300 mb-8 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>

          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Project #{String(activeIndex + 1).padStart(2, '0')} of {items.length}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-luxury-charcoal mb-4">
            {item.name}
          </h1>
          <div className="w-16 h-[2.5px] bg-luxury-gold my-6 rounded-full" />

          {/* Meta row (auto-generated from what we know about the file) */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-luxury-charcoalLight">
              <Layers size={16} className="text-luxury-gold" />
              {item.type === 'video' ? 'Video Walkthrough' : 'Site Photograph'}
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-luxury-charcoalLight">
              <MapPin size={16} className="text-luxury-gold" />
              Di Versile Interior — Site Work
            </div>
          </div>
        </div>
      </div>

      {/* Media */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative w-full rounded-3xl overflow-hidden bg-black shadow-2xl border border-luxury-beigeDark/40 h-[50vh] sm:h-[65vh]">
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

        {/* Description block */}
        {item.name === 'Elixir & Espresso 01' && (
          <>
            <div className="mt-10 max-w-3xl">
              <h2 className="font-serif text-xl font-extrabold text-luxury-charcoal mb-3">
                About this project
              </h2>

              <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed">
                A warm and inviting cafe designed with a soft, contemporary aesthetic. The space combines earthy tones, custom furniture, ambient lighting, and thoughtfully integrated display shelving to create a cosy yet functional cafe experience.
                <br />
                <br />
                Scope: Interior Design & Execution
              </p>
            </div>
            <br />
            <br />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              <Image src={expresso2} alt="Elixir & Espresso 02" width={400} height={300}
                style={{ width: "calc(50% - 0.75rem)" }}
                className="rounded-3xl shadow-lg border border-luxury-beigeDark/40 object-cover" />
              <Image src={expresso3} alt="Elixir & Espresso 03" width={400} height={300}
                style={{ width: "calc(50% - 0.75rem)" }}
                className="rounded-3xl shadow-lg border border-luxury-beigeDark/40 object-cover" />
              <Image src={expresso4} alt="Elixir & Espresso 04" width={400} height={300}
                style={{ width: "calc(50% - 0.75rem)" }}
                className="rounded-3xl shadow-lg border border-luxury-beigeDark/40 object-cover" />
              <Image src={expresso5} alt="Elixir & Espresso 05" width={400} height={300}
                style={{ width: "calc(50% - 0.75rem)" }}
                className="rounded-3xl shadow-lg border border-luxury-beigeDark/40 object-cover" />
              <Image src={expresso6} alt="Elixir & Espresso 06" width={400} height={300}
                style={{ width: "calc(50% - 0.75rem)" }}
                className="rounded-3xl shadow-lg border border-luxury-beigeDark/40 object-cover" />
              <Image src={expresso7} alt="Elixir & Espresso 07" width={400} height={300}
                style={{ width: "calc(50% - 0.75rem)" }}
                className="rounded-3xl shadow-lg border border-luxury-beigeDark/40 object-cover" />
            </div>
          </>
        )}

        {/* Thumbnail strip */}
        <div className="flex gap-3 mt-8 overflow-x-auto no-scrollbar pb-2">
          {items.map((media, i) => (
            <button
              key={media.id}
              onClick={() => onSelectIndex(i)}
              className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 cursor-pointer ${i === activeIndex
                ? 'border-luxury-gold scale-105'
                : 'border-luxury-beigeDark/60 opacity-60 hover:opacity-100'
                }`}
            >
              {media.type === 'video' ? (
                <video src={`${media.src}#t=1`} className="w-full h-full object-cover" muted preload="metadata" />
              ) : (
                <Image
                  src={media.src}
                  alt={media.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              )}
              {media.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play size={12} className="text-white fill-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ── Project Card ─────────────────────────────────── */
function ProjectCard({ item, index, projectTag, onOpen }) {
  const isVideo = item.type === 'video';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % PAGE_SIZE) * 0.06 }}
      onClick={onOpen}
      className="group relative rounded-3xl overflow-hidden shadow-lg border border-luxury-beigeDark/60 hover:border-luxury-gold/40 transition-all duration-500 bg-stone-100 h-72 sm:h-80 md:h-[320px] w-full cursor-pointer scale-100 hover:scale-[1.02] active:scale-[0.99]"
    >
      {/* Sliding gold line at the top edge */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30 pointer-events-none" />

      {/* Project number badge */}
      <div className="absolute top-4 left-4 z-30 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] font-extrabold tracking-widest text-white uppercase pointer-events-none">
        {projectTag}
      </div>

      {isVideo ? (
        <>
          <video
            src={`${item.src}#t=1`}
            className="absolute inset-0 w-full h-full object-cover z-0 bg-black pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          {/* Video indicator overlay */}
          <div className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:border-luxury-gold transition-all duration-300 pointer-events-none">
            <Play size={16} className="fill-current" />
          </div>
        </>
      ) : (
        <>
          <Image
            src={item.src}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex items-end justify-between gap-3 z-10 pointer-events-none">
            <h3 className="font-serif text-sm sm:text-base font-extrabold tracking-tight leading-tight">
              {item.name}
            </h3>
          </div>
        </>
      )}
    </motion.div>
  );
}


/* ── Main Projects Page ───────────────────────────── */
export default function ProjectsGallery({ images, videos }) {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePhotoIndex]);

  const allItems = useMemo(() => [...images, ...videos], [images, videos]);

  const filteredItems = useMemo(() => {
    if (filter === 'photos') return images;
    if (filter === 'videos') return videos;
    return allItems;
  }, [filter, images, videos, allItems]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const uniqueNames = useMemo(() => {
    const names = [];
    allItems.forEach((item) => {
      if (!names.includes(item.name)) {
        names.push(item.name);
      }
    });
    return names;
  }, [allItems]);

  const tabs = [
    { key: 'all', label: 'All Work', count: allItems.length },
    { key: 'photos', label: 'Photos', count: images.length },
    { key: 'videos', label: 'Videos', count: videos.length },
  ];

  const activeItem = activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null;

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
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-luxury-charcoal mb-4">
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
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${filter === tab.key
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
              <h3 className="font-serif text-xl font-extrabold text-luxury-charcoal mb-3">
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
                {visibleItems.map((item, index) => {
                  let projectTag = 'Project #01';
                  if (item.type === 'video') {
                    const videoIdx = videos.findIndex(v => v.id === item.id);
                    projectTag = `Project #${String(videoIdx + 2).padStart(2, '0')}`;
                  }
                  const absoluteIndex = filteredItems.findIndex(t => t.id === item.id);
                  return (
                    <ProjectCard
                      key={item.id}
                      item={item}
                      index={index}
                      projectTag={projectTag}
                      onOpen={() => setActivePhotoIndex(absoluteIndex)}
                    />
                  );
                })}
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

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-luxury-gold transition-colors z-50 p-2.5 rounded-full hover:bg-white/10 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Left Chevron Swiper Button (Desktop) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[160] w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark hover:border-luxury-gold transition-all duration-300 hidden md:flex items-center justify-center cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Chevron Swiper Button (Desktop) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) => (prev + 1) % filteredItems.length);
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[160] w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark hover:border-luxury-gold transition-all duration-300 hidden md:flex items-center justify-center cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Media wrapper (Increased height on mobile) */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl h-[68vh] sm:h-full max-h-[70vh] sm:max-h-[85vh] w-full flex items-center justify-center pointer-events-none"
            >
              {activeItem.type === 'video' ? (
                <video
                  key={activeItem.src}
                  src={`${activeItem.src}#t=1`}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-6xl h-[68vh] sm:h-full max-h-[70vh] sm:max-h-[85vh] w-full object-contain rounded-2xl bg-black pointer-events-auto"
                />
              ) : (
                <Image
                  src={activeItem.src}
                  alt={activeItem.name}
                  fill
                  sizes="100vw"
                  className="object-contain rounded-2xl"
                  priority
                />
              )}
            </motion.div>

            {/* Mobile Swiper Navigation below media */}
            <div className="flex md:hidden items-center justify-between mt-6 w-full max-w-xs px-4 pointer-events-auto shrink-0 z-[160]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
                }}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark transition-all duration-300 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs font-bold text-white/50 tracking-widest uppercase">
                {activePhotoIndex + 1} / {filteredItems.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhotoIndex((prev) => (prev + 1) % filteredItems.length);
                }}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark transition-all duration-300 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </>
  );
}