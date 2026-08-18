'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
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
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b bg-white/95 backdrop-blur-xl border-luxury-gold/10 ${
          isScrolled
            ? 'py-1 sm:py-1.5 shadow-lg shadow-luxury-gold/5'
            : 'py-2 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Raw Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-36 h-11 sm:w-44 sm:h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Di Versile Interior Logo"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  quality={100}
                  priority
                  className="object-contain filter drop-shadow-sm transition-all duration-300"
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
                      className="relative py-2 group"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.path}
                        className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                          isActive || pathname.startsWith('/services')
                            ? 'text-luxury-gold'
                            : 'text-luxury-charcoalLight hover:text-luxury-gold'
                        }`}
                      >
                        {link.name}
                        <svg className={`w-3 h-3 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180 text-luxury-gold' : 'text-luxury-charcoalLight/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] bg-white rounded-3xl border border-luxury-beigeDark shadow-2xl p-6 grid grid-cols-2 gap-x-6 gap-y-3 z-50 overflow-hidden"
                          >
                            {/* Accent gold top border */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] gold-gradient" />
                            {services.map((service) => {
                              const isSubActive = pathname === `/services/${service.id}`;
                              return (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.id}`}
                                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 hover:bg-luxury-gold/10 ${
                                    isSubActive
                                      ? 'text-luxury-gold bg-luxury-gold/5'
                                      : 'text-luxury-charcoalLight hover:text-luxury-gold'
                                  }`}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0" />
                                  {service.name}
                                </Link>
                              );
                            })}
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
                    className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-luxury-gold'
                        : 'text-luxury-charcoalLight hover:text-luxury-gold'
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
              className="md:hidden p-2 rounded-full text-luxury-charcoal hover:bg-luxury-beigeDark/50 transition-colors"
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
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              {/* Header (Sticky / Fixed) */}
              <div className="flex items-center justify-between border-b pb-6 border-luxury-beigeDark">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="relative w-32 h-10 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Di Versile Interior Logo"
                      fill
                      sizes="128px"
                      quality={100}
                      className="object-contain"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full text-luxury-charcoal hover:bg-luxury-beigeDark/50"
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
                            className="flex items-center justify-between text-lg font-semibold tracking-wide py-2 border-b border-dashed border-luxury-beigeDark/40 text-luxury-charcoalLight text-left cursor-pointer"
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
                                
                                {services.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-sm font-semibold py-1.5 ${
                                      pathname === `/services/${service.id}`
                                        ? 'text-luxury-gold'
                                        : 'text-luxury-charcoalLight'
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
                        className={`text-lg font-semibold tracking-wide py-2 border-b border-dashed border-luxury-beigeDark/40 transition-colors ${
                          isActive ? 'text-luxury-gold' : 'text-luxury-charcoalLight'
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
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-luxury-beigeDark text-luxury-charcoal font-semibold text-sm transition-all"
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
