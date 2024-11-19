import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React from "react";
import RedButton from "../Buttons/RedButton";

function SeguridadSection() {
  // Configuración para detectar visibilidad del componente
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Activa la animación cuando el 10% del componente es visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="w-full h-auto flex flex-col md:flex-row justify-center items-center text-center bg-black py-10 relative md:px-8"
    >
      {/* Imagen de fondo */}
      <motion.div className="w-full h-full absolute z-0" variants={fadeIn}>
        <Image
          src={"/images/home/seguridad/bg.png"}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Contenedor principal */}
      <div className="w-full flex flex-col md:flex-row justify-end items-center z-10">
        <motion.div
          className="w-full flex flex-col items-center md:items-start z-10"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-[25px] md:text-[64px] font-semibold text-white leading-7 md:leading-[68px] mb-[11px] md:text-left"
            variants={fadeInUp}
          >
            Seguridad <br /> <span className="text-[#ca1b2e]"> Privada</span>
          </motion.h1>

          <motion.p
            className="w-[87%] text-justify text-white text-[10px] md:text-[16px] lg:text-[24px] font-normal leading-3 md:leading-[32px] mb-4 z-10"
            variants={fadeIn}
          >
            Protegemos lo que más te importa con soluciones de seguridad personalizadas, elementos
            capacitados y tecnología de vanguardia. Confía en nuestra experiencia y compromiso para
            asegurar a tu familia, empresa o bienes.
          </motion.p>

          <motion.div
            className="hidden w-full md:flex justify-center md:justify-start"
            variants={scaleIn}
          >
            <RedButton texto="Conócenos" url="/Conocenos" />
          </motion.div>
        </motion.div>

        {/* Imagen de guardias */}
        <motion.div
          className="w-[87%] h-auto mt-[20px] mb-4 z-10"
          variants={fadeInUp}
        >
          <Image
            src="/images/home/seguridad/guardias.png"
            quality={100}
            width={1500}
            height={1500}
            alt="Guardias"
            className="object-cover"
          />
        </motion.div>

        {/* Botón en dispositivos móviles */}
        <motion.div className="md:hidden" variants={scaleIn}>
          <RedButton texto="Conócenos" url="/Conocenos" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SeguridadSection;
