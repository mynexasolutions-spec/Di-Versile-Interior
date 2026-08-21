'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  const whatsappUrl = `https://wa.me/918240602352?text=${encodeURIComponent(
    'Hi Di Versile Interior, I would like to enquire about your interior and exterior design services.'
  )}`;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Light soft warm ambient light orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-luxury-beige rounded-3xl overflow-hidden shadow-xl border border-luxury-beigeDark/65 px-8 py-16 md:px-16 md:py-20"
        >
          {/* Subtle inside gold lights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-luxury-gold/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-luxury-gold/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Gold accent line at the top border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] gold-gradient" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

              {/* Left Column: Text (8 cols) */}
              <div className="lg:col-span-7">
                <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-4">
                  Let's Create Your Space
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-luxury-charcoal leading-tight mb-6">
                  Ready to Transform Your{' '}
                  <span className="text-gold-gradient block sm:inline">Space?</span>
                </h2>
                <p className="text-luxury-charcoalLight font-semibold text-base sm:text-lg leading-relaxed max-w-2xl">
                  Whether you're building a new home, renovating an existing space, opening a café, or setting up an office — tell us about your project. Di Versile Interior offers expert design consultations across Kolkata, from concept to completion.
                </p>
              </div>

              {/* Right Column: Action Buttons (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4 w-full">
                <a
                  href="tel:+918240602352"
                  className="group flex items-center justify-center gap-3 h-16 px-8 gold-gradient text-luxury-charcoalDark font-extrabold rounded-2xl text-xs uppercase tracking-widest shadow-md hover:shadow-lg hover:shadow-luxury-gold/25 scale-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <Phone size={18} />
                  Call Now — 8240602352
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 h-16 px-8 bg-white hover:bg-luxury-beigeDark/15 text-luxury-charcoal font-bold rounded-2xl text-xs uppercase tracking-widest border border-luxury-beigeDark hover:border-luxury-gold/40 transition-all duration-300 shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current text-luxury-gold" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>

                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 text-luxury-charcoalLight hover:text-luxury-gold text-xs font-bold uppercase tracking-widest transition-colors duration-300 pt-2"
                >
                  Request a Consultation
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="group flex items-center justify-center gap-2 text-luxury-charcoalLight hover:text-luxury-gold text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                >
                  View Our Projects
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

