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
import { projectDescriptions } from '@/data/projectDescriptions';


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
                  src={encodeURI(item.src)}
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
                <video src={`${encodeURI(media.src)}#t=1`} className="w-full h-full object-cover" muted preload="metadata" />
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
// A "project" is a group of every image/video that shares the same
// (humanized) file name — e.g. all 7 "Elixir & Espresso" photos. The card
// shows one cover thumbnail plus a count badge; clicking it opens the
// lightbox scoped to just that project's own media.
function ProjectCard({ group, index, onOpen }) {
  const cover = group.items[0];
  const isVideo = cover.type === 'video';

  const photoCount = group.items.filter((i) => i.type === 'image').length;
  const videoCount = group.items.filter((i) => i.type === 'video').length;
  const countLabel = [
    photoCount > 0 ? `${photoCount} Photo${photoCount > 1 ? 's' : ''}` : null,
    videoCount > 0 ? `${videoCount} Video${videoCount > 1 ? 's' : ''}` : null,
  ]
    .filter(Boolean)
    .join(' • ');

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

      {isVideo ? (
        <video
          src={`${encodeURI(cover.src)}#t=1`}
          className="absolute inset-0 w-full h-full object-cover z-0 bg-black pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <Image
          src={cover.src}
          alt={group.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

      {/* Media-count badge (only worth showing once a project has more than one item) */}
      {group.items.length > 1 && (
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-[10px] font-extrabold tracking-widest uppercase pointer-events-none">
          {videoCount > 0 && photoCount === 0 ? (
            <Play size={11} className="fill-current" />
          ) : (
            <ImageIcon size={11} />
          )}
          {countLabel}
        </div>
      )}
      {group.items.length === 1 && isVideo && (
        <div className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:border-luxury-gold transition-all duration-300 pointer-events-none">
          <Play size={16} className="fill-current" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex items-end justify-between gap-3 z-10 pointer-events-none">
        <h3 className="font-serif text-sm sm:text-base font-extrabold tracking-tight leading-tight">
          {group.name}
        </h3>
      </div>
    </motion.div>
  );
}


/* ── Main Projects Page ───────────────────────────── */
export default function ProjectsGallery({ images, videos }) {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  // The open lightbox is scoped to a single project's own items — not the
  // full site-wide list — so Prev/Next only ever cycles through media that
  // belongs to the project that was clicked.
  const [activeGroup, setActiveGroup] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Collapse the description back to the 2-line preview every time a
  // (different) project is opened.
  useEffect(() => {
    setShowFullDescription(false);
  }, [activeGroup]);

  useEffect(() => {
    if (activeGroup !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeGroup]);

  const allItems = useMemo(() => [...images, ...videos], [images, videos]);

  // Group photos that share the same (humanized) name into one project card
  // — e.g. all 7 "Elixir & Espresso" photos become a single sliding card.
  // Videos are left exactly as before: one card per video, not grouped —
  // just labelled "Project #1", "Project #2", etc. instead of the raw
  // (often-identical) humanized filename.
  const imageGroups = useMemo(() => {
    const map = new Map();
    images.forEach((item) => {
      if (!map.has(item.name)) {
        map.set(item.name, {
          name: item.name,
          items: [],
          description: projectDescriptions[item.name] || null,
        });
      }
      map.get(item.name).items.push(item);
    });
    return Array.from(map.values());
  }, [images]);

  const videoGroups = useMemo(
    () => videos.map((item, index) => ({ name: `Project #${index + 1}`, items: [item] })),
    [videos]
  );

  const projectGroups = useMemo(
    () => [...imageGroups, ...videoGroups],
    [imageGroups, videoGroups]
  );

  // Apply the Photos/Videos tab filter within each project too, so opening
  // a project while the "Videos" tab is active only slides through that
  // project's videos (and projects left with nothing of that type drop out
  // of the grid entirely).
  const filteredGroups = useMemo(() => {
    return projectGroups
      .map((group) => {
        let items = group.items;
        if (filter === 'photos') items = items.filter((i) => i.type === 'image');
        if (filter === 'videos') items = items.filter((i) => i.type === 'video');
        return { ...group, items };
      })
      .filter((group) => group.items.length > 0);
  }, [projectGroups, filter]);

  const visibleGroups = filteredGroups.slice(0, visibleCount);
  const hasMore = visibleCount < filteredGroups.length;

  const tabs = [
    { key: 'all', label: 'All Work', count: allItems.length },
    { key: 'photos', label: 'Photos', count: images.length },
    { key: 'videos', label: 'Videos', count: videos.length },
  ];

  const activeItem = activeGroup ? activeGroup.items[activeIndex] : null;

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (activeGroup ? (prev - 1 + activeGroup.items.length) % activeGroup.items.length : 0));
  }, [activeGroup]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (activeGroup ? (prev + 1) % activeGroup.items.length : 0));
  }, [activeGroup]);

  useEffect(() => {
    if (!activeGroup) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveGroup(null);
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeGroup, goPrev, goNext]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-luxury-beige to-white pt-28 pb-6 border-b border-luxury-beigeDark/30 relative overflow-hidden">
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
      <section className="pt-10 pb-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredGroups.length === 0 ? (
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
                {visibleGroups.map((group, index) => (
                  <ProjectCard
                    key={group.name}
                    group={group}
                    index={index}
                    onOpen={() => {
                      setActiveGroup(group);
                      setActiveIndex(0);
                    }}
                  />
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

      {/* Fullscreen Photo Lightbox Modal — scoped to the clicked project only */}
      <AnimatePresence>
        {activeGroup && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center overflow-y-auto p-4 sm:p-8 cursor-zoom-out"
            onClick={() => setActiveGroup(null)}
          >
            {/* Project name label */}
            <div className="absolute top-6 left-6 right-16 sm:left-8 z-50 text-white/80 text-xs sm:text-sm font-extrabold uppercase tracking-widest truncate">
              {activeGroup.name}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setActiveGroup(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-luxury-gold transition-colors z-50 p-2.5 rounded-full hover:bg-white/10 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Left Chevron Swiper Button (Desktop) */}
            {activeGroup.items.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-[160] w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark hover:border-luxury-gold transition-all duration-300 hidden md:flex items-center justify-center cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Right Chevron Swiper Button (Desktop) */}
            {activeGroup.items.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[160] w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark hover:border-luxury-gold transition-all duration-300 hidden md:flex items-center justify-center cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Media wrapper. Photos shrink-wrap to their actual rendered
                size (rather than stretching to the full available width) so
                the desktop description overlay — sized to this wrapper —
                lines up with the photo's real edges instead of the empty
                letterboxed space beside it. Videos keep the old full-width
                box. Mobile keeps the photo shorter (max-h-[55vh]) so the
                description card below it has spare room to sit in; desktop
                goes back to the taller box since the description sits over
                the photo there instead. */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className={`relative max-w-6xl flex items-center justify-center pointer-events-none rounded-2xl overflow-hidden ${
                activeItem.type === 'video'
                  ? 'w-full h-[68vh] sm:h-full max-h-[70vh] sm:max-h-[85vh]'
                  : 'max-h-[55vh] sm:max-h-[85vh]'
              }`}
            >
              {activeItem.type === 'video' ? (
                <video
                  key={activeItem.src}
                  src={`${encodeURI(activeItem.src)}#t=1`}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-6xl h-[68vh] sm:h-full max-h-[70vh] sm:max-h-[85vh] w-full object-contain rounded-2xl bg-black pointer-events-auto"
                />
              ) : (
                <Image
                  src={activeItem.src}
                  alt={activeItem.name}
                  width={1600}
                  height={1067}
                  sizes="100vw"
                  className="w-auto h-auto max-w-full max-h-[55vh] sm:max-h-[85vh] object-contain rounded-2xl"
                  priority
                />
              )}

              {/* Desktop only: description overlaid directly on the photo */}
              {activeGroup.description && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="hidden sm:block absolute bottom-0 left-0 right-0 rounded-b-2xl bg-black/60 backdrop-blur-sm px-8 py-6 pointer-events-auto"
                >
                  {showFullDescription ? (
                    activeGroup.description.map((para, i) => (
                      <p
                        key={i}
                        className="text-white/90 font-semibold text-sm sm:text-base leading-relaxed mb-3 last:mb-0"
                      >
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="text-white/90 font-semibold text-sm sm:text-base leading-relaxed line-clamp-2">
                      {activeGroup.description[0]}
                    </p>
                  )}
                  <button
                    onClick={() => setShowFullDescription((v) => !v)}
                    className="text-[10px] font-extrabold text-luxury-gold uppercase tracking-widest mt-2.5 hover:text-white transition-colors cursor-pointer"
                  >
                    {showFullDescription ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              )}
            </motion.div>

            {/* Mobile only: description sits below the photo in the spare
                vertical space, unchanged from before — 2-line preview with
                a Read More toggle */}
            {activeGroup.description && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="sm:hidden w-full max-w-3xl mt-4 px-5 py-4 rounded-2xl bg-black/50 backdrop-blur-sm pointer-events-auto shrink-0 z-[160]"
              >
                <div className={showFullDescription ? 'max-h-[26vh] overflow-y-auto pr-1' : ''}>
                  {showFullDescription ? (
                    activeGroup.description.map((para, i) => (
                      <p
                        key={i}
                        className="text-white/90 font-semibold text-sm leading-relaxed mb-3 last:mb-0"
                      >
                        {para}
                      </p>
                    ))
                  ) : (
                    <p className="text-white/90 font-semibold text-sm leading-relaxed line-clamp-2">
                      {activeGroup.description[0]}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setShowFullDescription((v) => !v)}
                  className="text-[10px] font-extrabold text-luxury-gold uppercase tracking-widest mt-2.5 hover:text-white transition-colors cursor-pointer"
                >
                  {showFullDescription ? 'Show Less' : 'Read More'}
                </button>
              </div>
            )}

            {/* Mobile Swiper Navigation below media */}
            {activeGroup.items.length > 1 && (
              <div className="flex md:hidden items-center justify-between mt-6 w-full max-w-xs px-4 pointer-events-auto shrink-0 z-[160]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark transition-all duration-300 cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-xs font-bold text-white/50 tracking-widest uppercase">
                  {activeIndex + 1} / {activeGroup.items.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:bg-luxury-gold hover:text-luxury-charcoalDark transition-all duration-300 cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </>
  );
}