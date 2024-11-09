
import HeroSection from '../components/Home/HeroSection';

import TestimonialsSection from '../components/Home/TestimonialsSection';
import ContactSection from '../components/Home/ContactSection';
import Footer from '../components/Footer';
import SolucionesSection from '@/components/Home/SolucionesSection';
import SeguridadSection from '@/components/Home/SeguridadSection';
import Aliados from '@/components/Home/Aliados';
import Testimonios from '@/components/Home/Testimonios';
import Redes from '@/components/Home/Redes';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <meta name="theme-color" content="#00000"/>
        <title>Dragon Black & Red</title>
        <meta name="description" content="En Dragon Black & Red, estamos comprometidos con la seguridad integral, ofreciendo servicios de vigilancia privada y tecnología avanzada para proteger empresas, hogares y bienes. Nuestro equipo altamente capacitado utiliza protocolos rigurosos y soluciones de última generación, garantizando una protección constante y confiable que se adapta a las necesidades específicas de cada cliente." />
        <meta name="keywords" content="seguridad privada, vigilancia privada, empresa de seguridad, protección empresarial, guardias de seguridad, monitoreo de seguridad, instalación de cámaras de seguridad, sistemas de videovigilancia, control de acceso, seguridad para empresas, servicio de seguridad 24/7, consultoría en seguridad, sistemas de alarmas, seguridad corporativa, patrullaje y vigilancia, seguridad y protección" />
        <meta property="og:title" content="Dragon Black & Red" />
        <meta property="og:description" content="En Dragon Black & Red, estamos comprometidos con la seguridad integral, ofreciendo servicios de vigilancia privada y tecnología avanzada para proteger empresas, hogares y bienes. Nuestro equipo altamente capacitado utiliza protocolos rigurosos y soluciones de última generación, garantizando una protección constante y confiable que se adapta a las necesidades específicas de cada cliente." />
        <meta property="og:image" content="/ogimage.jpg" />
        <meta property="og:url" content="https://www.dragonbnr.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/ogimage.jpg" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <HeroSection />
      <SeguridadSection />
      <SolucionesSection />
      <Aliados/>
      <TestimonialsSection />
      <Redes />
    </>
  );
}