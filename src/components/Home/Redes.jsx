import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import RedButton from '../Buttons/RedButton';
import Link from 'next/link';

function Redes() {
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
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div ref={ref} className="w-full h-[385px] lg:h-[700px] flex flex-col justify-center items-center text-center bg-black py-10 relative">
      {/* Imagen de fondo con animación */}
      <motion.div className="w-full h-full absolute z-0" variants={fadeIn} initial="hidden" animate={controls}>
        <Image
          src={"/images/home/redes/bg.png"}
          layout="fill"
          quality={100}
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Contenido principal */}
      <div className="absolute h-full flex flex-col justify-center items-center z-10">
        <motion.h1
          className="text-white text-[33px] lg:text-[50px] leading-8 lg:leading-[48px]"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          Síguenos en <br />
          <span className="text-[#ca1b2e] font-bold">redes sociales</span>
        </motion.h1>

        {/* Iconos de redes sociales con animación */}
        <motion.div
          className="flex justify-center space-x-10 mt-8 lg:mt-4"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          <Link href={"https://www.facebook.com/profile.php?id=61562424445331"} target="_blank">
            <Image
              alt="Facebook"
              src={"/images/iconos/fb.png"}
              quality={100}
              width={34}
              height={34}
              className="cursor-pointer lg:w-[56px]"
            />
          </Link>
          <Link href={"https://www.instagram.com/dragonblackandredsegprivada/?hl=es"} target="_blank">
            <Image
              alt="Instagram"
              src={"/images/iconos/instagram.png"}
              quality={100}
              width={34}
              height={34}
              className="cursor-pointer lg:w-[56px]"
            />
          </Link>
        </motion.div>

        {/* Correo con animación */}
        <motion.a
          href="mailto:dragonblackandredsegprivada@hotmail.com"
          className="text-white my-4 lg:text-[33px]"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          dragonblackandredsegprivada@hotmail.com
        </motion.a>

        {/* Descripción con animación */}
        <motion.h2
          className="leading-6 lg:leading-[50px] mb-4 md:px-12"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          <span className="text-white text-[24px] lg:text-[75px]">Contamos con</span>
          <br />
          <span className="text-white text-[24.83px] lg:text-[74px] font-bold">servicios de seguridad</span>
          <br />
          <span className="text-[#ca1b2e] text-[33.28px] lg:text-[90px] xl:text-[100px] font-bold">
            altamente capacitado
          </span>
        </motion.h2>

        {/* Botón de contacto con animación */}
        <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
          <RedButton texto="Contáctanos" url="/Contacto" />
        </motion.div>
      </div>
    </div>
  );
}

export default Redes;
