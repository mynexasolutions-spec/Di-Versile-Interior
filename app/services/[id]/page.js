'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

export default function ServiceDetailPage({ params }) {
  const { id } = use(params);
  
  // Find the basic service info
  const service = services.find((s) => s.id === id);
  if (!service) {
    return notFound();
  }

  const [imgSrc, setImgSrc] = useState(service.image);

  // Dynamic Lucide Icon
  const IconComponent = Icons[service.icon] || Icons.Home;

  // Category label
  const categoryLabel = service.category === 'exterior' ? 'Exterior Design' : 'Interior Design';

  // Form State
  const [form, setForm] = useState({ name: '', phone: '', msg: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMsg = `Hi Di Versile Interior, I would like to book a site consultation for "${service.name}":
- Name: ${form.name}
- Phone: ${form.phone}
- Details: ${form.msg || 'Interested in this service.'}`;
    
    window.location.href = `https://wa.me/918240602352?text=${encodeURIComponent(finalMsg)}`;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setForm({ name: '', phone: '', msg: '' });
    }, 3000);
  };

  // Get related services (same category, excluding current)
  const related = services
    .filter((s) => s.id !== id && s.category === service.category)
    .slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-white via-luxury-beige/30 to-white min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Premium Background Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ── Breadcrumb ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-10">
        <Link 
          href="/services" 
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white hover:bg-stone-50 border border-luxury-beigeDark/50 shadow-sm text-xs font-bold uppercase tracking-widest text-luxury-charcoalLight hover:text-luxury-gold transition-all duration-300"
        >
          <Icons.ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Services
        </Link>
      </div>

      {/* ── Main Layout Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ── Left Column: Rich Details (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
            
            {/* Title Block */}
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-luxury-gold/10 border border-luxury-gold/25 self-start shadow-sm">
                <IconComponent size={14} className="text-luxury-gold" />
                <span className="text-[10px] font-extrabold tracking-widest text-luxury-gold uppercase">
                  {categoryLabel}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-luxury-charcoal tracking-tight leading-tight">
                <span className="text-gold-gradient">{service.name}</span>
              </h1>
              <div className="w-16 h-[3px] gold-gradient mt-2 rounded-full" />
            </div>

            {/* Custom Interactive Image Frame */}
            <div className="group relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] border border-luxury-beigeDark/55 transition-all duration-700 bg-stone-100 scale-100 hover:scale-[1.01]">
              {/* Sliding top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient z-20" />
              <Image
                src={imgSrc}
                alt={service.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                onError={() => setImgSrc(`https://placehold.co/800x600/1c1c1e/d4af37?text=${encodeURIComponent(service.name)}&font=montserrat`)}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              {/* Category glass tag */}
              <div className="absolute top-4 left-4 bg-black/45 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[9px] font-extrabold tracking-widest text-white uppercase shadow-md z-10">
                {categoryLabel}
              </div>
            </div>

            {/* Overview Card */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-luxury-beigeDark/50 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <h2 className="font-serif text-xl font-extrabold text-luxury-charcoal mb-4">Overview</h2>
              <p className="text-luxury-charcoalLight font-semibold text-base sm:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>



          </div>

          {/* ── Right Column: Consultation Card (5 cols) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative bg-white rounded-3xl border border-luxury-beigeDark/70 shadow-xl overflow-hidden p-8 flex flex-col gap-6 scale-100 hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] transition-all duration-500">
              
              {/* Gold Accents */}
              <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient" />
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-luxury-gold/5 rounded-full blur-xl pointer-events-none" />

              <div>
                <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-1">
                  Kolkata Site Visit
                </span>
                <h3 className="font-serif text-xl font-extrabold text-luxury-charcoal">
                  Book a Consultation
                </h3>
                <p className="text-sm sm:text-base font-semibold text-luxury-charcoalLight mt-2 leading-relaxed">
                  Have questions or want custom estimates? Fill out the fields to start a WhatsApp chat with our team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="detail-name" className="text-xs font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    id="detail-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="px-4 h-12 rounded-xl border border-luxury-beigeDark bg-stone-50/50 text-sm font-semibold focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 transition-all duration-300 focus:bg-white"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="detail-phone" className="text-xs font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    id="detail-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Enter your number"
                    className="px-4 h-12 rounded-xl border border-luxury-beigeDark bg-stone-50/50 text-sm font-semibold focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 transition-all duration-300 focus:bg-white"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="detail-msg" className="text-xs font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
                    Your Requirements
                  </label>
                  <textarea
                    id="detail-msg"
                    rows={4}
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    placeholder="E.g., Need complete interior design for a 3BHK apartment"
                    className="p-4 rounded-xl border border-luxury-beigeDark bg-stone-50/50 text-sm font-semibold focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 transition-all duration-300 resize-none focus:bg-white"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className={`w-full h-14 rounded-2xl font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : 'gold-gradient text-luxury-charcoalDark hover:shadow-luxury-gold/25 scale-100 hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {isSubmitted ? (
                    'Consultation Booked!'
                  ) : (
                    <>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Enquire via WhatsApp
                    </>
                  )}
                </button>
              </form>

              {/* Call indicator */}
              <div className="border-t border-luxury-beigeDark pt-4 text-center">
                <span className="text-xs font-bold text-luxury-charcoalLight/60 uppercase tracking-widest">
                  Or Call us Directly
                </span>
                <a href="tel:+918240602352" className="block text-base font-extrabold text-luxury-charcoal hover:text-luxury-gold mt-1 transition-colors">
                  8240602352
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* ── Related Services ── */}
        <div className="mt-20 border-t border-luxury-beigeDark pt-16">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-2">
              Explore More
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-luxury-charcoal">
              Related Services
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((rel) => (
              <ServiceCard key={rel.id} service={rel} />
            ))}
          </div>

          {/* View All Services */}
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-luxury-gold text-luxury-charcoal font-bold rounded-full text-xs uppercase tracking-wider hover:bg-luxury-gold hover:text-white transition-all duration-300 shadow-sm"
            >
              View All {services.length} Services
              <Icons.ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
