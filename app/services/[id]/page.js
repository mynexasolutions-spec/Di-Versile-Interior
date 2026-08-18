'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mocked detailed info for each service to populate the detail pages rich text
const serviceDetailsExtra = {
  'ply-wooden-furniture': {
    features: [
      'Bespoke wardrobes, TV units, and modular furniture built to size',
      'Chemically treated, termite-proof marine & commercial ply',
      'Wide choice of laminates, veneers, and premium wood finishes',
      'Structural warranty and premium finishing on joints & hinges',
    ],
    faqs: [
      { q: 'Can you replicate a furniture design from a photo?', a: 'Yes! We specialise in custom furniture. Just share a photo of your desired design and dimensions, and our team will craft it accordingly.' },
      { q: 'What materials do you use?', a: 'We use chemically treated, seasoned marine/commercial ply and solid wood to ensure furniture is termite-proof and highly durable.' }
    ]
  },
  flooring: {
    features: [
      'Wooden, PVC, vinyl, and tile flooring options for every space',
      'AC4 & AC5 heavy-duty scratch-resistant laminate flooring',
      'Uniclic locking technology for seamless joint finishes',
      'Anti-slip, waterproof options ideal for kitchens & bathrooms',
    ],
    faqs: [
      { q: 'Which flooring is best for kitchens or bathrooms?', a: 'We advise PVC or waterproof vinyl flooring for high-moisture zones like kitchens/bathrooms, and wooden flooring for bedrooms and living rooms.' },
      { q: 'How do you clean the floors?', a: 'A lightly damp microfibre mop is all that is needed for wooden floors. PVC and tile flooring can be cleaned with regular mopping.' }
    ]
  },
  'false-ceiling': {
    features: [
      'Premium POP and gypsum ceilings with high structural strength',
      'Warm indirect LED cove lighting channel integration',
      'Moisture-resistant panels for bathrooms and kitchens',
      'Smooth putty base coats ready for premium emulsion paint',
    ],
    faqs: [
      { q: 'How long does a false ceiling installation take?', a: 'A standard living room false ceiling layout generally takes 4 to 6 days to fit, plaster, and prep for painting.' },
      { q: 'Do false ceilings reduce room temperature?', a: 'Yes, the air gap created between the original slab and the false ceiling acts as a heat insulator, keeping the room cooler.' }
    ]
  },
  electrical: {
    features: [
      'Certified smart lighting layouts & panel fitting',
      'Concealed safe copper wiring with premium switches',
      'Accurate circuit layout to prevent overloading risks',
      'Professional fitting of luxury chandeliers, fans, and spot tracks',
    ],
    faqs: [
      { q: 'Do you handle full home rewiring?', a: 'Yes, we handle complete electrical layouts for new builds and renovation projects across[State_name].' },
      { q: 'Are your electricians certified?', a: 'Yes, all our site works are executed by licensed and highly experienced electrical contractors.' }
    ]
  },
  'putty-painting': {
    features: [
      'Smooth putty base coats for a flawless painting surface',
      'Ultra-luxury smooth emulsions and wall textures',
      'Damp-proof paint coats block moisture and peeling',
      'Accurate shade matching and accent wall consultation',
    ],
    faqs: [
      { q: 'How many coats do you apply?', a: 'We apply putty repair and sanding, followed by 1 coat of primer and 2 full coats of premium luxury emulsion paint.' },
      { q: 'Do you offer damp protection?', a: 'Yes, we apply specialized base coatings that cure and seal internal damp walls before applying final paints.' }
    ]
  },
  'wall-decorative': {
    features: [
      'Imported non-woven and vinyl wallpaper texture choices',
      'Premium charcoal louvers and fluted wall panel layouts',
      'Custom accent walls and decorative wall texture finishes',
      'Sleek integrated metal trim tracks and warm LED profiles',
    ],
    faqs: [
      { q: 'How long does wallpaper last?', a: 'With proper installation and care, premium wallpapers can easily last 7 to 10 years without peeling or fading.' },
      { q: 'Can wall panels be installed on uneven walls?', a: 'Yes, our installers construct a solid backing grid frame to level out uneven surfaces before installing decorative panels.' }
    ]
  },
  'toughened-glass': {
    features: [
      'High-strength tempered glass for windows, doors, and railings',
      'Custom cut sizes and thicknesses for facades and partitions',
      'Shatter-resistant safety glass built to IS certified standards',
      'Clear, frosted, and tinted finish options available',
    ],
    faqs: [
      { q: 'Is toughened glass safer than regular glass?', a: 'Yes, toughened glass is up to 5 times stronger than regular glass and breaks into small granular pieces instead of sharp shards, greatly reducing injury risk.' },
      { q: 'Can toughened glass be cut after treatment?', a: 'No, toughened glass must be cut to exact size before the tempering process. We take precise on-site measurements before fabrication.' }
    ]
  },
  fabrication: {
    features: [
      'Custom railings, staircases, and gates in MS & SS finishes',
      'Structural steel frameworks for canopies and pergolas',
      'Rust-resistant powder coating and anti-corrosive treatments',
      'Precision on-site welding and finishing by skilled fabricators',
    ],
    faqs: [
      { q: 'Do you fabricate custom gate designs?', a: 'Yes, we design and fabricate custom gates, railings, and grills according to your architectural style and requirements.' },
      { q: 'How do you protect metalwork from rust in[State_name]\'s climate?', a: 'We apply anti-corrosive primers and weatherproof powder coating finishes suited for[State_name]\'s humid, coastal climate.' }
    ]
  },
  'acp-cladding': {
    features: [
      'Premium aluminium composite panels in a wide colour range',
      'Weatherproof, lightweight, and low-maintenance facade finish',
      'Conceals uneven walls for a sleek, modern exterior look',
      'Fire-retardant (FR) core panel options available',
    ],
    faqs: [
      { q: 'Is ACP cladding durable in coastal weather?', a: 'Yes, ACP panels are weatherproof and corrosion-resistant, making them well suited for[State_name]\'s humid, coastal conditions.' },
      { q: 'Can ACP cladding be installed over existing walls?', a: 'Yes, ACP cladding is fitted onto a supporting frame and can be installed over most existing exterior wall surfaces.' }
    ]
  },
  'box-grill': {
    features: [
      'Sturdy MS/SS box grills for windows and balconies',
      'Child and pet-safe protective railing designs',
      'Rust-resistant powder coated finishes for long life',
      'Custom sizing and minimalist grill pattern options',
    ],
    faqs: [
      { q: 'Do box grills block the view from windows?', a: 'No, our box grill designs use slim bar spacing that maintains an open, unobstructed view while ensuring safety.' },
      { q: 'Are box grills weatherproof?', a: 'Yes, all our box grills are powder coated with rust-resistant, weatherproof finishes suited for outdoor use.' }
    ]
  },
  'outside-painting': {
    features: [
      'Weatherproof, UV-resistant exterior emulsions and textures',
      'Waterproofing base coats to prevent seepage and dampness',
      'Professional scaffolding and surface preparation before painting',
      'Long-lasting finishes built to withstand[State_name]\'s monsoon climate',
    ],
    faqs: [
      { q: 'How long does exterior paint last in[State_name]\'s climate?', a: 'With premium weatherproof paints and proper surface prep, exterior paint typically lasts 5 to 7 years even in[State_name]\'s humid, monsoon-heavy climate.' },
      { q: 'Do you apply waterproofing before painting?', a: 'Yes, we recommend and apply waterproof base coats on exterior walls to prevent seepage before the final paint layers.' }
    ]
  }
};

export default function ServiceDetailPage({ params }) {
  const { id } = params;
  
  // Find the basic service info
  const service = services.find((s) => s.id === id);
  if (!service) {
    return notFound();
  }

  // Load the extra details
  const extra = serviceDetailsExtra[id] || { features: [], faqs: [] };
  const [imgSrc, setImgSrc] = useState(service.image);

  // Dynamic Lucide Icon
  const IconComponent = Icons[service.icon] || Icons.Home;

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

  // Get related services (excluding current)
  const related = services.filter((s) => s.id !== id).slice(0, 3);

  // Accordion active state
  const [faqOpen, setFaqOpen] = useState(0);

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
                  Premium Catalogue Solution
                </span>
              </div>
              <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-luxury-charcoal tracking-tight leading-tight">
                Luxury <span className="text-gold-gradient">{service.name}</span>
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
                onError={() => setImgSrc(service.tempImage)}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              {/* Category glass tag */}
              <div className="absolute top-4 left-4 bg-black/45 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[9px] font-extrabold tracking-widest text-white uppercase shadow-md z-10">
                Sales &amp; Service
              </div>
            </div>

            {/* Overview Card */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-luxury-beigeDark/50 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <h2 className="font-sans text-xl font-extrabold text-luxury-charcoal mb-4">Overview</h2>
              <p className="text-luxury-charcoalLight font-semibold text-base sm:text-lg leading-relaxed">
                {service.description} Di Versile Interior brings decades of trusted material expertise directly to your home. We assist you from select material catalogs to customized fitting and lifetime service support, ensuring a smooth interior upgrade experience.
              </p>
            </div>

            {/* Highlights Card */}
            {extra.features.length > 0 && (
              <div className="bg-white p-7 sm:p-9 rounded-3xl border border-luxury-beigeDark/50 shadow-md relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-luxury-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <h2 className="font-sans text-xl font-extrabold text-luxury-charcoal mb-6">Key Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {extra.features.map((feat, index) => (
                    <div key={index} className="flex gap-3.5 items-start">
                      <div className="w-6 h-6 rounded-xl bg-luxury-gold/15 text-luxury-gold flex items-center justify-center shrink-0 mt-0.5 border border-luxury-gold/20 shadow-sm transition-all duration-300 group-hover:scale-105">
                        <Icons.Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-luxury-charcoalLight leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Accordion Styling */}
            {extra.faqs.length > 0 && (
              <div className="flex flex-col gap-6">
                <h2 className="font-sans text-xl font-extrabold text-luxury-charcoal mb-2">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-4">
                  {extra.faqs.map((faq, index) => {
                    const isOpen = faqOpen === index;
                    return (
                      <div 
                        key={index} 
                        className="bg-white rounded-2xl border border-luxury-beigeDark/50 shadow-sm overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => setFaqOpen(isOpen ? -1 : index)}
                          className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-sans font-extrabold text-sm sm:text-base text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300 focus:outline-none"
                        >
                          <span className="flex items-center gap-3">
                            <span className="text-luxury-gold font-black">Q.</span>
                            {faq.q}
                          </span>
                          <span className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-luxury-gold' : 'text-luxury-charcoalLight/60'}`}>
                            <Icons.ChevronDown size={18} />
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-6 pt-1 text-sm sm:text-base font-semibold text-luxury-charcoalLight border-t border-luxury-beige/50 leading-relaxed pl-8">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* ── Right Column: Consultation Card (5 cols) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative bg-white rounded-3xl border border-luxury-beigeDark/70 shadow-xl overflow-hidden p-8 flex flex-col gap-6 scale-100 hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] transition-all duration-500">
              
              {/* Gold Accents */}
              <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient" />
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-luxury-gold/5 rounded-full blur-xl pointer-events-none" />

              <div>
                <span className="text-[10px] font-bold tracking-widest text-luxury-gold uppercase block mb-1">
                 [State_name] Site Visit
                </span>
                <h3 className="font-sans text-xl font-extrabold text-luxury-charcoal">
                  Book a Consultation
                </h3>
                <p className="text-xs font-semibold text-luxury-charcoalLight mt-2">
                  Have questions or want custom estimates? Fill out the fields to start a WhatsApp chat with our sales team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="detail-name" className="text-[10px] font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
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
                  <label htmlFor="detail-phone" className="text-[10px] font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
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
                  <label htmlFor="detail-msg" className="text-[10px] font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
                    Your Requirements
                  </label>
                  <textarea
                    id="detail-msg"
                    rows={4}
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    placeholder="E.g., Require custom Sofa for 3bhk apartment"
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
                <span className="text-[10px] font-bold text-luxury-charcoalLight/60 uppercase tracking-widest">
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
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-luxury-charcoal">
              Related Home Solutions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((rel) => {
              const RelIcon = Icons[rel.icon] || Icons.Home;
              return (
                <div
                  key={rel.id}
                  className="group bg-white rounded-3xl border border-luxury-beigeDark/50 hover:border-luxury-gold/30 hover:shadow-lg hover:shadow-luxury-gold/5 p-6 flex gap-4 transition-all duration-500 scale-100 hover:scale-[1.02] active:scale-[0.99]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0 border border-luxury-gold/20 shadow-sm transition-all duration-300 group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:rotate-6">
                    <RelIcon size={20} />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h4 className="font-sans text-base sm:text-lg font-extrabold text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                      {rel.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-luxury-charcoalLight mt-1.5 leading-relaxed line-clamp-2">
                      {rel.description}
                    </p>
                    <Link
                      href={`/services/${rel.id}`}
                      className="text-[10px] font-extrabold text-luxury-gold uppercase tracking-widest inline-flex items-center gap-1.5 mt-3 group-hover:translate-x-0.5 transition-transform"
                    >
                      Read Details
                      <Icons.ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
