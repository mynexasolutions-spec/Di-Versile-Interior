'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

// Shared detailed service card — used on the main /services listing and on
// the "Related Services" section of each individual /services/[id] page, so
// both places render the exact same card design.
export default function ServiceCard({ service }) {
  const [imgSrc, setImgSrc] = useState(service.image);

  // Resolve Lucide icon
  const IconComponent = Icons[service.icon] || Icons.Home;

  const whatsappMessage = encodeURIComponent(
    `Hi Di Versile Interior, I am interested in your ${service.name} service. Please share more details.`
  );
  const enquiryUrl = `https://wa.me/918240602352?text=${whatsappMessage}`;

  return (
    <motion.div
      id={service.id}
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.4 }}
      className="group scroll-mt-28 bg-white rounded-3xl overflow-hidden border border-luxury-beigeDark/60 hover:border-luxury-gold/40 shadow-lg hover:shadow-[0_25px_60px_rgba(212,175,55,0.18)] transition-all duration-500 flex flex-col h-full relative"
    >
      {/* Hover Top Gold Divider Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl z-20" />

      <Link href={`/services/${service.id}`} className="flex flex-col flex-grow">
        {/* Service Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <Image
            src={imgSrc}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImgSrc(`https://placehold.co/800x600/1c1c1e/d4af37?text=${encodeURIComponent(service.name)}&font=montserrat`)}
          />
          {/* Elegant overlay card gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          {/* Floating Category Tag */}
          <div className="absolute top-4 left-4 bg-black/45 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[9px] font-extrabold tracking-widest text-white uppercase shadow-md transition-all duration-500">
            {service.category === 'interior' ? 'Interior Design' : 'Exterior Design'}
          </div>
        </div>

        {/* Details */}
        <div className="p-6 pb-0 flex flex-col flex-grow relative bg-white">
          {/* Icon Floating Badge */}
          <div className="absolute -top-7 right-6 w-14 h-14 rounded-full gold-gradient text-luxury-charcoalDark flex items-center justify-center shadow-lg border-4 border-white z-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:shadow-luxury-gold/25">
            <IconComponent size={20} />
          </div>
          <h3 className="font-serif text-xl font-extrabold tracking-tight text-luxury-charcoal mb-3 pr-10 transition-colors duration-300 group-hover:text-luxury-gold">
            {service.name}
          </h3>
          <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed flex-grow">
            {service.description}
          </p>
        </div>
      </Link>

      {/* WhatsApp Enquiry (kept outside the card link so it stays independently clickable) */}
      <div className="px-6 pb-6 pt-5 bg-white">
        <div className="border-t border-luxury-beigeDark/50 pt-5 flex flex-col gap-3">
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 gold-gradient hover:opacity-95 text-luxury-charcoalDark font-extrabold rounded-2xl text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-luxury-gold/25 scale-100 hover:scale-[1.02] active:scale-[0.98] border border-transparent cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enquire via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
