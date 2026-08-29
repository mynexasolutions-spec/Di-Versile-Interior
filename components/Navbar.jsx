'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Home, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/services';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const interiorServices = services.filter(s => s.category === 'interior');
  const exteriorServices = services.filter(s => s.category === 'exterior');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b bg-luxury-charcoal/95 backdrop-blur-xl border-luxury-gold/20 ${isScrolled
            ? 'py-1 sm:py-1.5 shadow-lg shadow-luxury-gold/5'
            : 'py-2 sm:py-3'
          }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Raw Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-48 h-11 sm:w-56 sm:h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/brand-logo.png"
                  alt="Di Versile Interior Logo"
                  fill
                  sizes="(max-width: 640px) 192px, 224px"
                  quality={100}
                  priority
                  className="object-contain scale-[1.15] sm:scale-[1.25] transition-all duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                if (link.name === 'Services') {
                  return (
                    <div
                      key={link.path}
                      className="py-2 group"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.path}
                        className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive || pathname.startsWith('/services')
                            ? 'text-luxury-gold'
                            : 'text-white/80 hover:text-luxury-gold'
                          }`}
                      >
                        {link.name}
                        <svg className={`w-3 h-3 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180 text-luxury-gold' : 'text-white/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>

                      {/* Dropdown Mega Menu */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 right-0 mx-auto top-full mt-0 w-[min(96vw,1200px)] md:w-[min(94vw,700px)] lg:w-[1020px] xl:w-[1200px] max-h-[calc(100vh-6rem)] bg-luxury-charcoal rounded-b-3xl border-x border-b border-luxury-gold/20 shadow-2xl p-5 sm:p-6 lg:p-8 z-50 flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-y-auto overflow-x-hidden cursor-default"
                          >
                            {/* Accent gold top border */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] gold-gradient" />

                            {/* Interior Section */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 text-luxury-gold font-bold uppercase tracking-widest text-xs mb-4 border-b border-luxury-gold/20 pb-3">
                                <Home size={14} />
                                Interior Design
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                {interiorServices.map((service) => {
                                  const isSubActive = pathname === `/services/${service.id}`;
                                  return (
                                    <Link
                                      key={service.id}
                                      href={`/services/${service.id}`}
                                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 hover:bg-luxury-gold/10 ${isSubActive
                                          ? 'text-luxury-gold bg-luxury-gold/5'
                                          : 'text-white/80 hover:text-luxury-gold'
                                        }`}
                                    >
                                      <div className="w-1 h-1 rounded-full bg-luxury-gold/60 shrink-0" />
                                      <span className="truncate">{service.name}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Divider */}
                            <div className="h-[1px] w-full lg:h-auto lg:w-[1px] bg-luxury-gold/10 shrink-0" />

                            {/* Exterior Section */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 text-luxury-gold font-bold uppercase tracking-widest text-xs mb-4 border-b border-luxury-gold/20 pb-3">
                                <Building2 size={14} />
                                Exterior Design
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                {exteriorServices.map((service) => {
                                  const isSubActive = pathname === `/services/${service.id}`;
                                  return (
                                    <Link
                                      key={service.id}
                                      href={`/services/${service.id}`}
                                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 hover:bg-luxury-gold/10 ${isSubActive
                                          ? 'text-luxury-gold bg-luxury-gold/5'
                                          : 'text-white/80 hover:text-luxury-gold'
                                        }`}
                                    >
                                      <div className="w-1 h-1 rounded-full bg-luxury-gold/60 shrink-0" />
                                      <span className="truncate">{service.name}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive
                        ? 'text-luxury-gold'
                        : 'text-white/80 hover:text-luxury-gold'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase gold-gradient text-luxury-charcoalDark hover:opacity-95 hover:shadow-lg hover:shadow-luxury-gold/25 scale-100 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-white/90 hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-luxury-charcoal z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              {/* Header (Sticky / Fixed) */}
              <div className="flex items-center justify-between border-b pb-6 border-luxury-gold/20">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="relative w-44 h-10 flex items-center justify-center">
                    <Image
                      src="/brand-logo.png"
                      alt="Di Versile Interior Logo"
                      fill
                      sizes="176px"
                      quality={100}
                      className="object-contain scale-[1.2]"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full text-white/90 hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Navigation Area */}
              <div className="flex-grow overflow-y-auto my-6 pr-2">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.path;

                    if (link.name === 'Services') {
                      return (
                        <div key={link.path} className="flex flex-col">
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className="flex items-center justify-between text-lg font-semibold tracking-wide py-2 border-b border-dashed border-luxury-gold/20 text-white/80 text-left cursor-pointer"
                          >
                            <span>{link.name}</span>
                            <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-luxury-gold' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          <AnimatePresence initial={false}>
                            {isMobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-luxury-gold/30 mt-1 overflow-hidden"
                              >
                                <Link
                                  href="/services"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-xs font-extrabold text-luxury-gold py-1.5 uppercase tracking-wider"
                                >
                                  View All Services
                                </Link>

                                {/* Interior Design */}
                                <div className="flex items-center gap-1.5 text-luxury-gold font-bold uppercase tracking-widest text-[10px] mt-2 mb-1">
                                  <Home size={12} />
                                  Interior Design
                                </div>
                                {interiorServices.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-sm font-semibold py-1.5 ${pathname === `/services/${service.id}`
                                        ? 'text-luxury-gold'
                                        : 'text-white/70'
                                      }`}
                                  >
                                    {service.name}
                                  </Link>
                                ))}

                                {/* Gold Partition */}
                                <div className="h-[1px] gold-gradient my-3" />

                                {/* Exterior Design */}
                                <div className="flex items-center gap-1.5 text-luxury-gold font-bold uppercase tracking-widest text-[10px] mb-1">
                                  <Building2 size={12} />
                                  Exterior Design
                                </div>
                                {exteriorServices.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-sm font-semibold py-1.5 ${pathname === `/services/${service.id}`
                                        ? 'text-luxury-gold'
                                        : 'text-white/70'
                                      }`}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-lg font-semibold tracking-wide py-2 border-b border-dashed border-luxury-gold/20 transition-colors ${isActive ? 'text-luxury-gold' : 'text-white/80'
                          }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Fixed Footer Buttons */}
              <div className="flex flex-col gap-4 mt-auto">
                <a
                  href="tel:+918240602352"
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 text-white font-semibold text-sm transition-all hover:bg-white/20"
                >
                  <Phone size={16} />
                  Call Support
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center py-3 rounded-full gold-gradient text-luxury-charcoalDark font-extrabold text-sm hover:opacity-90 shadow-md transition-all uppercase tracking-wider text-center"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
