import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-charcoalDark text-white pt-20 pb-8 border-t border-luxury-gold/20 relative overflow-hidden">
      {/* Subtle Background Glowing Accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Gold Top Highlight Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Logo & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center group">
              <div className="relative w-44 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/brand-logo.png"
                  alt="Di Versile Interior Logo"
                  fill
                  sizes="176px"
                  quality={100}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              A family-led interior &amp; exterior design studio in Kolkata. From concept to completion — ply &amp; wooden furniture, flooring, false ceilings, wall panelling, and exterior fabrication, all under one roof.
            </p>
            {/* Contact Buttons (WhatsApp & Mail) */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://wa.me/918240602352"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-green-600 hover:text-white hover:border-green-600 hover:shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer"
                aria-label="WhatsApp"
                title="WhatsApp Us"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="mailto:diversileinterior@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-luxury-gold hover:text-luxury-charcoalDark hover:border-luxury-gold hover:shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer"
                aria-label="Email"
                title="Email Us"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] font-extrabold uppercase text-luxury-gold mb-8">Quick Links</h3>
            <ul className="flex flex-col gap-4 font-medium">
              {['Home', 'About Us', 'Our Services', 'Our Projects', 'Contact & Enquiries'].map((name, i) => {
                const paths = ['/', '/about', '/services', '/projects', '/contact'];
                return (
                  <li key={i}>
                    <Link
                      href={paths[i]}
                      className="group inline-flex items-center gap-1 text-white/70 hover:text-luxury-gold text-sm transition-colors duration-300"
                    >
                      {name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Featured Services Grid */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] font-extrabold uppercase text-luxury-gold mb-8">Featured Services</h3>
            <ul className="grid grid-cols-2 gap-4 font-medium">
              {[
                { name: 'Space Planning', link: '/services#space-planning-layout-design' },
                { name: 'False Ceiling', link: '/services#false-ceiling-design-execution' },
                { name: 'Furniture', link: '/services#custom-furniture-design' },
                { name: 'Wall Treatments', link: '/services#wall-panelling-wall-treatments' },
                { name: 'Flooring', link: '/services#flooring-selection-installation' },
                { name: 'Lighting Design', link: '/services#lighting-design' },
                { name: 'Facade Design', link: '/services#residential-facade-design' },
                { name: 'Metal Works', link: '/services#ms-metal-works' },
              ].map((serv, index) => (
                <li key={index}>
                  <Link
                    href={serv.link}
                    className="group inline-flex items-center gap-0.5 text-white/70 hover:text-luxury-gold text-sm transition-colors duration-300"
                  >
                    {serv.name}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-xs tracking-[0.2em] font-extrabold uppercase text-luxury-gold mb-4">Get in Touch</h3>
            <ul className="flex flex-col gap-5 text-sm text-white/70 font-medium">
              <li className="flex gap-3 items-start leading-relaxed">
                <MapPin className="text-luxury-gold shrink-0 mt-1" size={18} />
                <span>
                  11A, Braun Field Row, Mominpur, Kolkata- 700027
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-luxury-gold shrink-0" size={16} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918240602352" className="hover:text-luxury-gold transition-colors">+91 8240602352</a>
                  
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-luxury-gold shrink-0" size={16} />
                <a href="mailto:diversileinterior@gmail.com" className="hover:text-luxury-gold transition-colors break-all">
                  diversileinterior@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 text-sm text-white/50 font-semibold border-t border-white/5 pt-8 gap-4">
          <p className="text-center sm:text-left">© {currentYear} Di Versile Interior. All Rights Reserved.</p>
          <div className="flex gap-2 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
            <span className="tracking-widest uppercase text-xs text-luxury-gold font-bold">Kolkata, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

