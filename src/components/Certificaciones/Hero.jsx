import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Hero() {
  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <div className="h-[452px] w-full flex justify-center items-center relative">
      {/* Fondo con animación de desvanecimiento */}
      <motion.div
        className="w-full h-full absolute z-0"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={"/images/certificaciones/bg.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
          quality={100}
        />
      </motion.div>

      {/* Título con animación de entrada desde abajo */}
      <motion.h1
        className="text-white text-[40.51px] md:text-[60px] lg:text-[100px] font-semibold z-10 text-center leading-8 md:leading-[60px] lg:leading-[100px]"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        Certificaciones y <br />
        <span className="text-[#ca1b2e]">permisos</span>
      </motion.h1>
    </div>
  );
}

export default Hero;
