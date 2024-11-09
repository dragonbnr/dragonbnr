import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlackButton from "../Buttons/BlackButton";

function MisionVision() {
  // Configuración para detectar visibilidad del componente
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Activa la animación cuando el 20% del componente es visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variantes de animación con retrasos para animaciones independientes
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const fadeInUpWithDelay = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay } },
  });

  const scaleInWithDelay = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut", delay } },
  });

  return (
    <div
      ref={ref}
      className="w-full h-auto flex flex-col md:flex-row justify-center items-center text-center bg-black py-10 lg:py-20 relative"
    >
      {/* Fondo con animación de desvanecimiento */}
      <motion.div
        className="w-full h-full absolute z-0"
        variants={fadeIn}
        initial="hidden"
        animate={controls}
      >
        <Image
          src={"/images/conocenos/mision/bg.png"}
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Contenido principal */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:px-12 md:gap-8">
        {/* Sección Misión */}
        <div className="w-full flex flex-col items-center justify-center md:w-1/2 z-10">
          <motion.div
            className="w-[87%] h-auto md:h-[360px] md:w-[350px] lg:h-[500px] lg:w-full mt-[20px] mb-4"
            variants={scaleInWithDelay(0.2)}
            initial="hidden"
            animate={controls}
          >
            <Image
              src="/images/conocenos/mision/mision.png"
              width={1500}
              height={1500}
              quality={100}
              alt="Misión"
              className="object-cover w-full h-full rounded-[17px]"
            />
          </motion.div>

          <motion.h1
            className="text-[25px] font-semibold text-white leading-7 mb-[11px] md:text-left"
            variants={fadeInUpWithDelay(0.4)}
            initial="hidden"
            animate={controls}
          >
            Misión <br />
          </motion.h1>
          <motion.p
            className="w-[87%] md:w-full text-justify text-white text-[10px] lg:text-[24px] font-normal leading-3 lg:leading-[32px] mb-4 lg:h-[300px]"
            variants={fadeInUpWithDelay(0.6)}
            initial="hidden"
            animate={controls}
          >
            Ofrecer nuestros servicios de seguridad privada para proteger de
            forma eficaz, tu familia, bienes, o activos, contando con elementos
            capacitados para realizar las tareas de manera profesional,
            brindándote seguridad, y confianza, llevando a cabo transparencia,
            entre la empresa y el cliente, acompañado de tecnologías que se
            adaptan a los cambios volátiles de hoy en día. 
          </motion.p>
        </div>

        {/* Sección Visión */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 z-10">
          <motion.div
            className="w-[87%] h-auto md:h-[360px] md:w-[350px] lg:h-[500px] lg:w-full mt-[20px] mb-4"
            variants={scaleInWithDelay(0.8)}
            initial="hidden"
            animate={controls}
          >
            <Image
              src="/images/conocenos/mision/vision.png"
              width={1500}
              height={1500}
              alt="Visión"
              quality={100}
              className="object-cover w-full h-full rounded-[17px]"
            />
          </motion.div>

          <motion.h1
            className="text-[25px] font-semibold text-white leading-7 mb-[11px] md:text-left"
            variants={fadeInUpWithDelay(1.0)}
            initial="hidden"
            animate={controls}
          >
            Visión <br />
          </motion.h1>
          <motion.p
            className="w-[87%] md:w-full text-justify text-white text-[10px] lg:text-[24px] font-normal leading-3 lg:leading-[32px] mb-4 lg:h-[300px]"
            variants={fadeInUpWithDelay(1.2)}
            initial="hidden"
            animate={controls}
          >
            Tener mayor presencia en el territorio nacional, mejorando
            continuamente nuestros servicios, y nuestros elementos con constante
            capacitación, para desarrollar las habilidades necesarias que
            permitan satisfacer las necesidades de nuestros clientes, siendo
            como prioridad la seguridad, transparencia, honradez y
            profesionalismo, al igual que contar con un abanico amplio de
            servicios profesionales para nuestros clientes.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default MisionVision;
