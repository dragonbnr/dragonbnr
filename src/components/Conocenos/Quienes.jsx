import Image from 'next/image';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlackButton from '../Buttons/BlackButton';

function Quienes() {
  // Configuración para detectar visibilidad del componente
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Activa la animación cuando el 20% del componente es visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variantes de animación con retrasos para animaciones independientes
  const fadeInUpTitle = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.2 } },
  };

  const fadeInUpText = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.4 } },
  };

  const scaleInImage = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut', delay: 0.6 } },
  };

  const scaleInButton = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut', delay: 0.8 } },
  };

  return (
    <div ref={ref} className="w-full h-auto flex flex-col md:flex-row justify-center items-center text-center bg-black py-10 relative md:px-8">
      {/* Imagen de fondo con animación de desvanecimiento */}
      <motion.div
        className="w-full h-full absolute z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, ease: 'easeOut' } }}
      >
        <Image
          src={"/images/conocenos/quienes/bg.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          alt="Background"
        />
      </motion.div>

      {/* Contenedor principal */}
      <div className="w-full flex flex-col md:flex-row justify-end items-center z-10">
        <div className="w-full flex flex-col items-center md:items-start z-10">
          {/* Título con animación independiente */}
          <motion.h1
            className="text-[25px] md:text-[28px] lg:text-[45px] xl:text-[64px] font-semibold text-white leading-7 mb-[11px] md:mb-[15px] lg:mb-[20px] xl:mb-[50px]"
            variants={fadeInUpTitle}
            initial="hidden"
            animate={controls}
          >
            ¿Quiénes somos? <br />
          </motion.h1>

          {/* Descripción con animación independiente */}
          <motion.p
            className="w-[87%] text-justify text-white text-[10px] md:text-[14px] lg:text-[20px] font-normal leading-3 md:leading-[20px] lg:leading-[25px] mb-4"
            variants={fadeInUpText}
            initial="hidden"
            animate={controls}
          >
            Somos una empresa mexicana de seguridad privada, nuestra prioridad es la protección de nuestros clientes, la transparencia y ética, ofreciendo servicios de seguridad con soluciones integrales, basándonos en las necesidades específicas de cada cliente. Contamos con personal altamente capacitado, acompañado de innovación y tecnología que permita desarrollar nuestro trabajo de forma eficiente, adaptándonos a los cambios constantes en el mercado de la seguridad, comprometidos en proteger a tu familia, empresa, o bienes.
          </motion.p>

          {/* Botón oculto en dispositivos móviles, con animación independiente */}
          <motion.div
            className="hidden w-full md:flex justify-center md:justify-start"
            variants={scaleInButton}
            initial="hidden"
            animate={controls}
          >
            <BlackButton texto="Conócenos" url="/Conocenos" />
          </motion.div>
        </div>

        {/* Imagen de guardias con animación independiente */}
        <motion.div
          className="w-[87%] h-auto mt-[20px] mb-4 z-10"
          variants={scaleInImage}
          initial="hidden"
          animate={controls}
        >
          <Image
            src="/images/conocenos/quienes/guardias.png"
            width={1500}
            height={1500}
            quality={100}
            alt="Guardias"
            className="object-cover"
          />
        </motion.div>

        {/* Botón para dispositivos móviles con animación independiente */}
        <motion.div
          className="md:hidden"
          variants={scaleInButton}
          initial="hidden"
          animate={controls}
        >
          <BlackButton texto="Conócenos" url="/Conocenos" />
        </motion.div>
      </div>
    </div>
  );
}

export default Quienes;
