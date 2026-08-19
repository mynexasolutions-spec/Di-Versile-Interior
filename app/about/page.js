'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Info, Shield, Compass, Star, Target, Fingerprint, Layers, Focus, Infinity as InfinityIcon } from 'lucide-react';
import CTA from '@/components/CTA';

export default function About() {
  const serviceCategories = [
    'Interior Ply & Wooden Furniture',
    'Flooring (Wooden, PVC, Tile)',
    'False Ceiling (POP/PUP)',
    'Electrical Work',
    'Putty & Painting',
    'Wall Decorative',
    'Toughened Glass',
    'Fabrication',
    'ACP Cladding',
    'Box Grill',
    'Outside Painting',
  ];

  const processSteps = [
    { number: '01', title: 'Understanding', description: 'We begin by understanding your requirements, lifestyle, business, preferences, budget and vision.' },
    { number: '02', title: 'Concept', description: 'We develop the overall design direction through layouts, mood boards, materials, colours and visual references.' },
    { number: '03', title: 'Visualisation', description: 'Our 3D visualisations let you experience the proposed space before execution begins.' },
    { number: '04', title: 'Planning', description: 'Detailed drawings, material specifications and execution planning translate the design into reality.' },
    { number: '05', title: 'Execution', description: 'Our team coordinates the required trades, materials and site work while maintaining the design intent.' },
    { number: '06', title: 'Finishing', description: 'The final stage focuses on detailing, furniture, lighting, décor and finishing touches that bring the space together.' },
    { number: '07', title: 'Handover', description: 'Once the work is completed, we ensure the finished space reflects the approved design and meets the required standards.' },
  ];

  const philosophyPillars = [
    { icon: Target, title: 'Functionality', description: 'Every space should work as beautifully as it looks.' },
    { icon: Fingerprint, title: 'Individuality', description: 'Your space should feel personal rather than copied from a catalogue.' },
    { icon: Layers, title: 'Materiality', description: 'We carefully combine textures, colours, finishes and materials to create depth and character.' },
    { icon: Focus, title: 'Attention to Detail', description: 'From large architectural elements to the smallest finishing detail, we believe quality lies in the execution.' },
    { icon: InfinityIcon, title: 'Timelessness', description: 'We aim to create spaces that remain beautiful and relevant long after the latest trend has passed.' },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-white via-luxury-beige/30 to-white pt-28 pb-24 border-b border-luxury-beigeDark/30 relative overflow-hidden text-luxury-charcoal">
        {/* Background ambient glowing orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Area */}
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
              A Family-Built Design Practice
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-luxury-charcoal leading-tight">
              About <span className="text-gold-gradient">Di Versile Interior</span>
            </h1>
            <div className="w-20 h-[3px] gold-gradient mx-auto my-6 rounded-full" />
            <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed">
              A family-led interior &amp; exterior design studio founded by a father-daughter team, providing complete design and execution — from concept to completion — for homes, businesses, hospitality and educational spaces across Goa.
            </p>
          </div>

          {/* Main Grid: Info & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            
            {/* Info Side */}
            <div className="flex flex-col gap-6">
              
              {/* Who We Are */}
              <div className="group p-7 rounded-3xl bg-white shadow-md hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] border border-luxury-beigeDark/60 hover:border-luxury-gold/40 transition-all duration-500 flex gap-4 relative overflow-hidden scale-100 hover:scale-[1.02] active:scale-[0.99]">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-luxury-gold/5 rounded-full blur-xl group-hover:bg-luxury-gold/10 transition-colors duration-500" />
                <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl z-20" />
                
                <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
                  <Info size={20} className="stroke-[2.5]" />
                </div>
                <div className="flex-grow z-10">
                  <h2 className="font-serif text-base sm:text-lg font-extrabold tracking-tight text-luxury-charcoal mb-2 transition-colors duration-300 group-hover:text-luxury-gold">Who We Are</h2>
                  <p className="text-luxury-charcoalLight font-semibold text-sm leading-relaxed">
                    Di Versile Interior is a family-led interior and exterior design studio founded by a father-daughter team with a shared passion for creating beautiful, functional spaces. For us, every project is personal — we don't just design spaces, we build spaces that become part of people's lives.
                  </p>
                </div>
              </div>

              {/* What We Do */}
              <div className="group p-7 rounded-3xl bg-white shadow-md hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] border border-luxury-beigeDark/60 hover:border-luxury-gold/40 transition-all duration-500 flex gap-4 relative overflow-hidden scale-100 hover:scale-[1.02] active:scale-[0.99]">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-luxury-gold/5 rounded-full blur-xl group-hover:bg-luxury-gold/10 transition-colors duration-500" />
                <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl z-20" />
                
                <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
                  <Shield size={20} className="stroke-[2.5]" />
                </div>
                <div className="flex-grow z-10">
                  <h2 className="font-serif text-base sm:text-lg font-extrabold tracking-tight text-luxury-charcoal mb-2 transition-colors duration-300 group-hover:text-luxury-gold">What We Do</h2>
                  <p className="text-luxury-charcoalLight font-semibold text-sm leading-relaxed">
                    We cover everything your space requires. From ply &amp; wooden furniture, flooring, and false ceilings to electrical wiring, putty &amp; painting, and wall decorative finishes indoors — plus toughened glass, fabrication, ACP cladding, box grill, and outside painting for exteriors.
                  </p>
                </div>
              </div>

              {/* Our Approach */}
              <div className="group p-7 rounded-3xl bg-white shadow-md hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] border border-luxury-beigeDark/60 hover:border-luxury-gold/40 transition-all duration-500 flex gap-4 relative overflow-hidden scale-100 hover:scale-[1.02] active:scale-[0.99]">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-luxury-gold/5 rounded-full blur-xl group-hover:bg-luxury-gold/10 transition-colors duration-500" />
                <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl z-20" />
                
                <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
                  <Compass size={20} className="stroke-[2.5]" />
                </div>
                <div className="flex-grow z-10">
                  <h2 className="font-serif text-base sm:text-lg font-extrabold tracking-tight text-luxury-charcoal mb-2 transition-colors duration-300 group-hover:text-luxury-gold">Our Approach</h2>
                  <p className="text-luxury-charcoalLight font-semibold text-sm leading-relaxed">
                    Our approach combines creative design thinking with practical knowledge of materials, construction and execution. We work closely with our clients throughout the journey — understanding their requirements, developing the design and coordinating the transformation of the space.
                  </p>
                </div>
              </div>

            </div>

            {/* Image Side */}
            <div className="relative group scale-100 hover:scale-[1.01] transition-transform duration-500">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 border border-luxury-gold/20 rounded-3xl -rotate-2 scale-98 pointer-events-none transition-transform duration-1000 group-hover:rotate-0 group-hover:scale-100" />
              <div className="relative h-[380px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_30px_60px_rgba(212,175,55,0.15)] border border-luxury-beigeDark/50 transition-all duration-500 bg-stone-100">
                {/* Sliding top gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient z-20" />
                <Image
                  src="/images/about.png"
                  alt="Di Versile Interior Studio Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  priority
                />
              </div>
            </div>

          </div>

          {/* Capabilities Grid */}
          <div className="mt-28 pt-20 border-t border-luxury-beigeDark/50">
            <div className="max-w-xl mb-12">
              <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
                Our Capabilities
              </span>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-luxury-charcoal">
                Core Service Segments
              </h2>
              <p className="text-luxury-charcoalLight font-semibold text-sm mt-2">
                We design for every kind of space — residential, commercial, hospitality and educational — with design and execution under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3.5 p-5 rounded-2xl bg-white border border-luxury-beigeDark/50 hover:border-luxury-gold/45 shadow-sm hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)] transition-all duration-500 scale-100 hover:scale-[1.02] active:scale-[0.99] cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0 border border-luxury-gold/20 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:scale-105">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-luxury-charcoalLight group-hover:text-luxury-charcoal transition-colors">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div className="mt-28 pt-20 border-t border-luxury-beigeDark/50">
            <div className="max-w-xl mb-12">
              <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
                From Idea to Reality
              </span>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-luxury-charcoal">
                Our Process
              </h2>
              <p className="text-luxury-charcoalLight font-semibold text-sm mt-2">
                We coordinate every stage of the project to create a smoother, more streamlined experience for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group relative p-6 rounded-2xl bg-white border border-luxury-beigeDark/50 hover:border-luxury-gold/40 shadow-sm hover:shadow-[0_15px_35px_rgba(212,175,55,0.1)] transition-all duration-500"
                >
                  <span className="font-sans text-3xl font-extrabold text-luxury-gold/25 group-hover:text-luxury-gold/50 transition-colors duration-500">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-base font-extrabold tracking-tight text-luxury-charcoal mt-2 mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-luxury-charcoalLight font-semibold text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Design Philosophy */}
          <div className="mt-28 pt-20 border-t border-luxury-beigeDark/50">
            <div className="max-w-xl mb-12">
              <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
                Thoughtful Design. Detailed Execution.
              </span>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-luxury-charcoal">
                Our Design Philosophy
              </h2>
              <p className="text-luxury-charcoalLight font-semibold text-sm mt-2">
                We believe the best spaces are created by understanding the people, purpose and personality behind them — not by following trends blindly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {philosophyPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white border border-luxury-beigeDark/50 hover:border-luxury-gold/40 shadow-sm hover:shadow-[0_15px_35px_rgba(212,175,55,0.1)] transition-all duration-500"
                  >
                    <div className="w-11 h-11 rounded-xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:rotate-6">
                      <Icon size={20} className="stroke-[2]" />
                    </div>
                    <h3 className="font-serif text-sm font-extrabold tracking-tight text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-luxury-charcoalLight font-semibold text-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Why Customers Trust Us Card */}
          <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-luxury-beigeDark/65 hover:border-luxury-gold/40 shadow-[0_20px_50px_rgba(212,175,55,0.1)] flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group transition-all duration-500 scale-100 hover:scale-[1.01]">
            <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            <div className="w-14 h-14 rounded-2xl gold-gradient text-luxury-charcoalDark flex items-center justify-center shrink-0 shadow-md transition-transform duration-500 group-hover:rotate-12">
              <Star size={26} fill="currentColor" className="stroke-[2]" />
            </div>
            <div className="flex-grow">
              <h3 className="font-serif text-xl font-extrabold tracking-tight text-luxury-charcoal mb-3 transition-colors duration-300 group-hover:text-luxury-gold">
                Why Customers Trust Di Versile Interior
              </h3>
              <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed mb-5">
                In interior solutions, reliability and quality of materials make all the difference. We partner directly with premium brands such as D'Decor, Sleepwell, Somfy, and Fabio Furnishings to deliver authentic, warrantied products. Together with our experienced staff who execute electrical and painting work, we guarantee peace of mind.
              </p>
              <div className="text-xs font-bold text-luxury-gold uppercase tracking-wider">
                Reliable Consulting • Authenticated Materials • Dedicated Workmanship
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
}
