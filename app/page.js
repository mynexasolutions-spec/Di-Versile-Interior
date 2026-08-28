import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import Spaces from '@/components/Spaces';
import WhyChooseUs from '@/components/WhyChooseUs';
import Brands from '@/components/Brands';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Clients from '@/components/Clients';
import LeadershipPage from '@/components/LedershipPage';

export default function Home() {
  return (
    <>
    
      <Hero />
      <ServicesPreview />
      <Spaces />
      <WhyChooseUs />
      <Gallery />
      <LeadershipPage/>
      <Clients/>
      <Brands />
      <CTA />
    </>
  );
}
