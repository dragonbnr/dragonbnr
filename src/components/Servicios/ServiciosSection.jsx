import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import BlackButton from "../Buttons/BlackButton";

function ServiciosSection() {
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
    <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center text-center bg-black py-10 lg:py-20 relative">
      {/* Fondo con animación de desvanecimiento */}
      <motion.div
        className="w-full h-full absolute z-0"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={"/images/servicios/serviciossection/bg.png"}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center md:px-12 md:gap-8 z-10">
        {/* Sección Guardias intramuros */}
        <div className="w-full flex flex-col items-center md:items-start justify-center md:w-1/2">
          <motion.div
            className="w-[87%] h-auto md:h-[360px] md:w-[350px] lg:h-[500px] lg:w-full mt-[20px] mb-4"
            variants={fadeInUpWithDelay(0.2)}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/images/servicios/serviciossection/guardias.png"
              quality={100}
              width={1500}
              height={1500}
              alt="Guardias"
              className="object-cover w-full h-full rounded-[17px]"
            />
          </motion.div>

          <motion.h1
            className="text-[25px] font-semibold text-white leading-7 mb-[11px] md:text-left"
            variants={fadeInUpWithDelay(0.4)}
            initial="hidden"
            animate="visible"
          >
            Guardias intramuros <br />
          </motion.h1>
          <motion.p
            className="w-[87%] md:w-full text-justify text-white text-[10px] lg:text-[24px] font-normal leading-3 lg:leading-[32px] mb-4"
            variants={fadeInUpWithDelay(0.6)}
            initial="hidden"
            animate="visible"
          >
            Guardias capacitados para brindar seguridad profesional en instalaciones o bienes.
          </motion.p>

          <BlackButton texto="Ver más" url="/Servicios/Guardias" />
        </div>

        {/* Sección Dispositivos electrónicos */}
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2">
          <motion.div
            className="w-[87%] h-auto md:h-[360px] md:w-[350px] lg:h-[500px] lg:w-full mt-[20px] mb-4"
            variants={fadeInUpWithDelay(0.8)}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/images/servicios/serviciossection/dispositivos.png"
              quality={100}
              width={1500}
              height={1500}
              alt="Dispositivos"
              className="object-cover w-full h-full rounded-[17px]"
            />
          </motion.div>

          <motion.h1
            className="text-[25px] font-semibold text-white leading-7 mb-[11px]"
            variants={fadeInUpWithDelay(1.0)}
            initial="hidden"
            animate="visible"
          >
            Dispositivos electrónicos <br />
          </motion.h1>
          <motion.p
            className="w-[87%] md:w-full text-justify text-white text-[10px] lg:text-[24px] font-normal leading-3 lg:leading-[32px] mb-4"
            variants={fadeInUpWithDelay(1.2)}
            initial="hidden"
            animate="visible"
          >
            Instalación, comercialización e implementación de proyectos de seguridad y videovigilancia.
          </motion.p>

          <BlackButton texto="Ver más" url="/Servicios/Dispositivos" />
        </div>
      </div>
    </div>
  );
}

export default ServiciosSection;
