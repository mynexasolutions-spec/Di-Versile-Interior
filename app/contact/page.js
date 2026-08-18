'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check } from 'lucide-react';
import { services } from '@/data/services';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gather and format message
    const emailStr = formData.email ? `\n- Email: ${formData.email}` : '';
    const messageText = `Hi Di Versile Interior, I would like to make an enquiry:
- Name: ${formData.name}
- Phone: ${formData.phone}${emailStr}
- Service Required: ${formData.service || 'General Enquiry'}
- Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/918240602352?text=${encodeURIComponent(messageText)}`;
    
    // Redirect to WhatsApp (uses window.location.href to bypass browser popup blockers)
    window.location.href = whatsappUrl;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <section className="bg-gradient-to-b from-white via-luxury-beige/30 to-white pt-28 pb-24 border-b border-luxury-beigeDark/30 relative overflow-hidden text-luxury-charcoal">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-widest text-luxury-gold uppercase block mb-3">
            Get in Touch
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-luxury-charcoal leading-tight">
            Let's Create a Better Space <span className="text-gold-gradient">Together</span>
          </h1>
          <div className="w-20 h-[3px] gold-gradient mx-auto my-6 rounded-full" />
          <p className="text-luxury-charcoalLight font-semibold text-sm sm:text-base leading-relaxed">
            Have questions about our sofas, curtains, wooden flooring, pop ceilings, or painting? Fill out the form or reach out to us directly.
          </p>
        </div>

        {/* Grid: Info cards and form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Contact Details & Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Call Us Card */}
            <div className="group bg-white rounded-3xl border border-luxury-beigeDark/60 hover:border-luxury-gold/40 shadow-md hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] p-7 flex gap-4 items-start relative overflow-hidden transition-all duration-500 scale-100 hover:scale-[1.02] active:scale-[0.99]">
              {/* Decor Corner Glow */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-luxury-gold/5 rounded-full blur-xl group-hover:bg-luxury-gold/10 transition-colors duration-500" />
              <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl" />
              <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
                <Phone size={20} className="stroke-[2.5]" />
              </div>
              <div className="flex-grow z-10">
                <h3 className="font-sans text-base sm:text-lg font-extrabold tracking-tight text-luxury-charcoal mb-2 transition-colors duration-300 group-hover:text-luxury-gold">Call Us</h3>
                <div className="flex flex-col gap-1.5">
                  <a href="tel:8240602352" className="text-sm sm:text-base text-luxury-charcoalLight hover:text-luxury-gold transition-colors font-semibold">
                    8240602352
                  </a>
                  
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white rounded-3xl border border-luxury-beigeDark/60 hover:border-luxury-gold/40 shadow-md hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] p-7 flex gap-4 items-start relative overflow-hidden transition-all duration-500 scale-100 hover:scale-[1.02] active:scale-[0.99]">
              {/* Decor Corner Glow */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-luxury-gold/5 rounded-full blur-xl group-hover:bg-luxury-gold/10 transition-colors duration-500" />
              <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl" />
              <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
                <Mail size={20} className="stroke-[2.5]" />
              </div>
              <div className="flex-grow z-10">
                <h3 className="font-sans text-base sm:text-lg font-extrabold tracking-tight text-luxury-charcoal mb-2 transition-colors duration-300 group-hover:text-luxury-gold">Email Address</h3>
                <a href="mailto:diversileinterior@gmail.com" className="text-sm sm:text-base text-luxury-charcoalLight hover:text-luxury-gold transition-colors font-semibold break-all">
                  diversileinterior@gmail.com
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="group bg-white rounded-3xl border border-luxury-beigeDark/60 hover:border-luxury-gold/40 shadow-md hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] p-7 flex gap-4 items-start relative overflow-hidden transition-all duration-500 scale-100 hover:scale-[1.02] active:scale-[0.99]">
              {/* Decor Corner Glow */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-luxury-gold/5 rounded-full blur-xl group-hover:bg-luxury-gold/10 transition-colors duration-500" />
              <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl" />
              <div className="w-12 h-12 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-luxury-charcoalDark group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_20px_rgba(212,175,55,0.2)]">
                <MapPin size={20} className="stroke-[2.5]" />
              </div>
              <div className="flex-grow z-10">
                <h3 className="font-sans text-base sm:text-lg font-extrabold tracking-tight text-luxury-charcoal mb-2 transition-colors duration-300 group-hover:text-luxury-gold">Visit Our Store</h3>
                <p className="text-sm sm:text-base text-luxury-charcoalLight leading-relaxed font-semibold">
                 Sample
                </p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-luxury-beigeDark/70 h-[250px] w-full bg-stone-100 group transition-all duration-500 hover:shadow-[0_20px_45px_rgba(212,175,55,0.12)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.7570697926177!2d73.82390237582522!3d15.497555354415848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m2s0x0%3A0x0!2zMTXCsDI5JzUxLjIiTiA3M8KwNDknMzMuOCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[1.05] brightness-[0.98] transition-all duration-1000 group-hover:scale-[1.03]"
              />
            </div>

          </div>

          {/* Form Side (7 cols) */}
          <div className="group lg:col-span-7 bg-white rounded-3xl border border-luxury-beigeDark/70 hover:border-luxury-gold/40 shadow-xl hover:shadow-[0_30px_60px_rgba(212,175,55,0.18)] p-8 sm:p-10 relative overflow-hidden transition-all duration-500">
            {/* Corner Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-luxury-gold/5 rounded-full blur-xl pointer-events-none" />
            {/* Hover Top Gold Divider Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3.5px] gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-t-3xl" />
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="px-4 py-3 rounded-xl border border-luxury-beigeDark bg-stone-50/50 focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 text-sm font-semibold transition-all focus:bg-white"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your contact number"
                    className="px-4 py-3 rounded-xl border border-luxury-beigeDark bg-stone-50/50 focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 text-sm font-semibold transition-all focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="px-4 py-3 rounded-xl border border-luxury-beigeDark bg-stone-50/50 focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 text-sm font-semibold transition-all focus:bg-white"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-luxury-beigeDark bg-stone-50/50 focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 text-sm font-semibold transition-all focus:bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="General Enquiry">Other / General Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-extrabold text-luxury-charcoalLight uppercase tracking-wider">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your project, styling preferences, or sizing details..."
                  className="px-4 py-3 rounded-xl border border-luxury-beigeDark bg-stone-50/50 focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 text-sm font-semibold resize-none transition-all focus:bg-white"
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className={`w-fit px-8 h-14 rounded-2xl font-extrabold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-lg scale-100 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'gold-gradient text-luxury-charcoalDark hover:shadow-luxury-gold/25'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check size={16} strokeWidth={3} />
                    Redirecting to WhatsApp...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
