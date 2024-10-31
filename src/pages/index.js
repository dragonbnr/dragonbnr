
import HeroSection from '../components/Home/HeroSection';

import TestimonialsSection from '../components/Home/TestimonialsSection';
import ContactSection from '../components/Home/ContactSection';
import Footer from '../components/Footer';
import SolucionesSection from '@/components/Home/SolucionesSection';
import SeguridadSection from '@/components/Home/SeguridadSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SeguridadSection />
      <SolucionesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}