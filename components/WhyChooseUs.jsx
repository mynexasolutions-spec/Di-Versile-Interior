'use client';

import { motion } from 'framer-motion';
import { Home, ShieldCheck, UserCheck, Settings, Heart, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Home,
      title: 'Complete Interior Solutions',
      description: 'Find multiple home furnishing, decor, electrical, and painting services all managed under one roof.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Products',
      description: 'We work closely with India’s most trusted home-furnishing brands to bring you elite, certified materials.',
    },
    {
      icon: UserCheck,
      title: 'Professional Service',
      description: 'Our experienced staff focuses entirely on understanding your expectations, offering bespoke design advice.',
    },
    {
      icon: Settings,
      title: 'Customized Solutions',
      description: 'Every layout, curtain drape, and panel layout is custom crafted to your floor plans, visual taste, and budgets.',
    },
    {
      icon: Heart,
      title: 'One Trusted Partner',
      description: 'Simplify your project coordination. From floors to false ceilings, handle everything through our single dedicated team.',
    },
    {
      icon: Award,
      title: 'Expert Execution',
      description: 'Our skilled craftsmen ensure flawless installation and finishing on site, delivering premium results every single time.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-luxury-beige border-b border-luxury-beigeDark/30 relative overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Why Di Versile Interior
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-luxury-charcoal">
            Designed for <span className="text-gold-gradient">Trust</span> &amp; Quality
          </h2>
          <div className="w-20 h-[2.5px] gold-gradient mx-auto my-6 rounded-full" />
          <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed">
            We combine premium design craftsmanship with seamless execution, making us[State_name]’s preferred interior and furnishing provider.
          </p>
        </div>

        {/* Benefits Cards Grid (Clean 3-column desktop layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-8 rounded-3xl bg-white shadow-md hover:shadow-[0_30px_60px_rgba(212,175,55,0.18)] border border-luxury-beigeDark/70 hover:border-luxury-gold/40 transition-all duration-500 flex flex-col gap-5 relative overflow-hidden scale-100 hover:scale-[1.02] active:scale-[0.99]"
              >
                {/* Decorative Subtle Gold Corner Radial Light */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-luxury-gold/5 rounded-full blur-xl group-hover:bg-luxury-gold/10 transition-colors duration-500" />

                {/* Hover Top Gold Divider Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl" />
                
                {/* Icon Container with Floating Badge Style */}
                <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shadow-sm shrink-0 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
                  <Icon size={22} className="transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 relative z-10">
                  <h3 className="font-sans text-xl font-extrabold tracking-tight text-luxury-charcoal transition-colors duration-300 group-hover:text-luxury-gold">
                    {card.title}
                  </h3>
                  <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
