import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

function Hero() {
  // Configuración para detectar visibilidad del componente
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Activa la animación cuando el 10% del componente es visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div ref={ref} className="h-[452px] w-full flex justify-center items-center relative">
      {/* Imagen de fondo con animación */}
      <motion.div
        className="w-full h-full absolute z-0"
        variants={fadeIn}
        initial="hidden"
        animate={controls}
      >
        <Image
          src={"/images/conocenos/hero/bg.png"}
          layout="fill"
          quality={100}
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Título con animación */}
      <motion.h1
        className="text-white text-[40.51px] md:text-[60px] lg:text-[100px] font-semibold z-10 text-center leading-8 md:leading-[60px] lg:leading-[100px]"
        variants={fadeInUp}
        initial="hidden"
        animate={controls}
      >
        Tu seguridad, <br />
        nuestra <span className="text-[#ca1b2e]">prioridad</span>
      </motion.h1>
    </div>
  );
}

export default Hero;
