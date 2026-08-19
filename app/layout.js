import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

// Font is loaded via app/fonts.css (imported inside globals.css) so the
// whole site's typeface can be swapped from a single CSS file — see the
// comments in app/fonts.css for ready-to-use font combos.

export const metadata = {
  title: 'Di Versile Interior | Interior & Exterior Design Studio in Goa',
  description: 'Di Versile Interior is a family-led interior & exterior design studio in Delhi offering complete design and execution — space planning, false ceilings, custom furniture, flooring, wall treatments, ACP cladding, fabrication and outside painting — for residential, commercial, hospitality and educational spaces.',
  keywords: 'Di Versile Interior Goa, Interior design Goa, Exterior design Goa, Interior designer Goa, Turnkey interior solutions Goa, Home renovation Goa, Ply Wooden Furniture, Flooring, False Ceiling, Electrical Work, Putty Painting, Wall Decorative, Toughened Glass, Fabrication, ACP Cladding, Box Grill, Outside Painting, Residential Interior Design, Commercial Interior Design, Hospitality Design',
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
    title: 'Di Versile Interior | Interior & Exterior Design Studio in Goa',
    description: 'A family-led interior & exterior design studio in Delhi — complete design and execution from concept to completion, for residential, commercial, hospitality and educational spaces.',
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
    <html lang="en" className="scroll-smooth overflow-x-hidden">
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
