import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Experiencia = ({ setForm, form }) => {
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
    <div className="w-full h-auto flex flex-col relative justify-center items-center py-[37px]">
      {/* Fondo con animación de desvanecimiento */}
      <motion.div
        className="w-full h-full absolute z-0"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={"/images/contacto/experiencia/bg.png"}
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Contenido */}
      <div className="flex flex-col justify-center items-center z-10">
        <motion.h1
          className="w-[90%] md:w-full text-[25px] md:text-[40px] text-center text-white font-semibold leading-8 md:leading-[45px] mb-4 md:px-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Nuestra experiencia nos permite ofrecerte un servicio confiable y de calidad
        </motion.h1>

        {/* Botones con animación de desvanecimiento y subida */}
        <motion.div
          className="w-[90%] items-center flex justify-center relative mt-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <div className="w-[12.53px] h-[12.53px] md:w-[20px] md:h-[20px] lg:w-[33px] lg:h-[33px] bg-[#ca1b2e] rounded-full absolute" />
          <div
            className={`w-full h-[30px] md:h-[60px] ${form == "cotizar"? "bg-white text-black" : "bg-black text-white"} rounded-tl-md rounded-bl-md border-l-2 border-[#ca1b2e] cursor-pointer flex justify-center items-center duration-300 transition-all`}
            onClick={() => setForm("cotizar")}
          >
            <span className={`text-center  text-[10px] md:text-[17px] leading-[10.94px]`}>
              Cotiza nuestros servicios
            </span>
          </div>
          <div
            className={`w-full h-[30px] md:h-[60px] ${form == "bolsa"? "bg-white text-black" : "bg-black text-white"} rounded-tr-md rounded-br-md border-r-2 border-[#ca1b2e] cursor-pointer flex justify-center items-center duration-300 transition-all`}
            onClick={() => setForm("bolsa")}
          >
            <span className="text-center  text-[10px] md:text-[17px] leading-[10.94px]">
              Bolsa de Trabajo
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experiencia;
