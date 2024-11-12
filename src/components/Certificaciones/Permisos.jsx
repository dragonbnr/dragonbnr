import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function Permisos() {
  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  const fadeInUpWithDelay = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay } },
  });

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-center bg-black py-10 relative">
      {/* Fondo con animación de desvanecimiento */}
      <motion.div
        className="w-full h-full absolute z-0"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={"/images/certificaciones/permisos/bg.png"}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Título y descripción principal */}
      <motion.h1
        className="w-[80%] text-[25px] font-semibold leading-7 mb-[11px] z-10 text-black"
        variants={fadeInUpWithDelay(0.2)}
        initial="hidden"
        animate="visible"
      >
        Operamos con respaldo legal y certificaciones, garantizando un servicio seguro y confiable.
      </motion.h1>
      <motion.p
        className="w-[87%] md:w-full text-justify text-[10px] md:text-[18px] font-normal leading-3 md:leading-[24px] mb-4 z-10 text-black md:px-12"
        variants={fadeInUpWithDelay(0.4)}
        initial="hidden"
        animate="visible"
      >
       Nuestra empresa se distingue por operar bajo los más altos estándares de cumplimiento legal y profesionalismo en el ámbito de la seguridad privada. Contamos con todas las autorizaciones necesarias para ofrecer nuestros servicios, además de certificaciones que avalan la calidad de nuestras operaciones y nuestro compromiso con la seguridad y protección de nuestros clientes. 
      </motion.p>

      {/* Título Permisos */}
      <motion.h2
        className="text-[25px] text-[#ca1b2e] font-semibold leading-7 mb-[11px] mt-4 z-10"
        variants={fadeInUpWithDelay(0.6)}
        initial="hidden"
        animate="visible"
      >
        Permisos
      </motion.h2>

      {/* Imagen de Permisos */}
      <motion.div
        className="w-[87%] md:w-full h-auto mt-[20px] mb-4 z-10 md:px-12"
        variants={fadeInUpWithDelay(0.8)}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/certificaciones/permisos/permiso.jpg"
          width={1500}
          height={1500}
          quality={100}
          alt="Permiso"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Título Instituciones */}
      <motion.h3
        className="text-[25px] text-[#ca1b2e] font-semibold leading-7 mb-[11px] md:mb-[30px] mt-4 z-10"
        variants={fadeInUpWithDelay(1.0)}
        initial="hidden"
        animate="visible"
      >
        Instituciones que nos avalan
      </motion.h3>

      {/* Instituciones con animación individual para cada logo */}
      <div className="grid grid-cols-3 gap-4 z-10 px-12">
        {[
          { src: '/images/certificaciones/instituciones/imss.png', alt: 'IMSS' },
          { src: '/images/certificaciones/instituciones/trabajo.png', alt: 'Trabajo' },
          { src: '/images/certificaciones/instituciones/infonavit.png', alt: 'Infonavit' },
          { src: '/images/certificaciones/instituciones/schp.png', alt: 'SCHP' },
          { src: '/images/certificaciones/instituciones/seguridad.png', alt: 'Seguridad' },
          { src: '/images/certificaciones/instituciones/sat.png', alt: 'SAT' },
        ].map((logo, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center"
            variants={fadeInUpWithDelay(1.2 + index * 0.2)}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={logo.src}
              width={100}
              height={100}
              quality={100}
              alt={logo.alt}
              className="object-contain w-full h-full max-h-[80px]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Permisos;
