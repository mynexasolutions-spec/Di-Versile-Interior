import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata = {
  title: 'Di Versile Interior | Interior & Exterior Work Solutions in[State_name]',
  description: 'Di Versile Interior provides complete interior & exterior work including ply & wooden furniture, flooring, false ceiling, electrical, putty & painting, wall decorative, toughened glass, fabrication, ACP cladding, box grill and outside painting in [city_name],[State_name].',
  keywords: 'Di Versile Interior[State_name], Interior solutions in[State_name], Exterior work in[State_name], Interior services in [city_name], Home improvement services[State_name], Ply Wooden Furniture, Flooring, False Ceiling, Electrical Work, Putty Painting, Wall Decorative, Toughened Glass, Fabrication, ACP Cladding, Box Grill, Outside Painting,[State_name], [city_name]',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  authors: [{ name: 'Di Versile Interior' }],
  creator: 'Di Versile Interior',
  publisher: 'Di Versile Interior',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Di Versile Interior | Interior & Exterior Work Solutions in[State_name]',
    description: 'Di Versile Interior provides complete interior & exterior work including ply & wooden furniture, flooring, false ceiling, electrical, putty & painting, wall decorative, toughened glass, fabrication, ACP cladding, box grill and outside painting in [city_name],[State_name].',
    url: 'https://creativedecorgoa.com',
    siteName: 'Di Versile Interior',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Di Versile Interior",
    "image": "https://creativedecorgoa.com/logo.png",
    "url": "https://creativedecorgoa.com",
    "telephone": "+918240602352",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sample",
      "addressLocality": "[city_name]",
      "addressRegion": "Goa",
      "postalCode": "403005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "15.497555",
      "longitude": "73.823902"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth overflow-x-hidden`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-luxury-charcoal bg-luxury-beige min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        {/* We place min-h-screen and flex-grow here to push the footer down */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
