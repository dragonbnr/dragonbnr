import { motion } from 'framer-motion';
import Image from "next/image";
import React from "react";
import RedButton from "../Buttons/RedButton";

function DispositivosSection() {
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
          src={"/images/guardias/bg.png"}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Imágenes de dispositivos con animación de entrada */}
      <div className="w-full h-auto mt-[20px] mb-4 md:mb-8 z-10 flex justify-center gap-2 md:gap-8 px-4 md:px-12">
        <motion.div
          className="w-[200px] h-[205px] md:w-1/2 md:h-full"
          variants={fadeInUpWithDelay(0.2)}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/dispositivos/camara.png"
            width={1500}
            height={1500}
            quality={100}
            alt="Cámara"
            className="object-cover w-full"
          />
        </motion.div>
        <motion.div
          className="w-[200px] h-[205px] md:w-1/2 md:h-full"
          variants={fadeInUpWithDelay(0.4)}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/dispositivos/camara2.png"
            width={1500}
            height={1500}
            quality={100}
            alt="Cámara"
            className="object-cover w-full"
          />
        </motion.div>
      </div>

      {/* Título y descripción con animación de entrada */}
      <motion.h1
        className="text-[25px] md:text-[35px] font-semibold text-white leading-7 md:leading-[40px] mb-[11px] md:mb-[30px] z-10 lg:px-12"
        variants={fadeInUpWithDelay(0.6)}
        initial="hidden"
        animate="visible"
      >
        Instalación y comercialización de dispositivos electrónicos
      </motion.h1>
      <motion.p
        className="text-center text-white text-xs md:text-[20px] font-bold leading-3 z-10"
        variants={fadeInUpWithDelay(0.8)}
        initial="hidden"
        animate="visible"
      >
        Instalación profesional de cámaras de seguridad
      </motion.p>
      <motion.p
        className="w-[345px] md:w-[650px] text-justify text-white text-[10px] md:text-[18px] leading-3 md:leading-[24px] md:text-center z-10 mt-2 md:mt-4"
        variants={fadeInUpWithDelay(1.0)}
        initial="hidden"
        animate="visible"
      >
        Te ofrecemos la implementación de proyectos de seguridad y videovigilancia en entornos industriales, oficinas y residenciales.
      </motion.p>
      <motion.p
        className="w-[345px] md:w-[700px] text-justify text-white text-[10px] md:text-[18px] leading-3 md:leading-[24px] md:text-center z-10 mt-2 md:mt-4"
        variants={fadeInUpWithDelay(1.0)}
        initial="hidden"
        animate="visible"
      >
        Especialistas en Seguridad y Videovigilancia, Monitoreo de Alarmas, Control de Acceso Vehicular y Peatonal, Cercas Electrificadas, Video Portero, Sensores de Movimiento y más.
      </motion.p>

      {/* Sección de beneficios */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-4 md:px-12">
        <motion.div
          className="w-[87%] h-auto mt-[20px] mb-4 z-10"
          variants={fadeInUpWithDelay(1.2)}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full h-[212px] md:h-[600px] bg-white rounded-lg border-l-4 border-[#ca1b2e] flex flex-col items-center justify-center">
            <h3 className="max-w-[220.70px] w-full text-center text-black text-[22px] md:text-[30px] font-bold leading-6 mb-4">
              Beneficios
            </h3>
            <ul className="text-left mx-auto list-disc list-inside text-[10px] md:text-[18px] leading-3 md:leading-[24px] md:space-y-2 px-8 text-black">
              <li>Atención personalizada 24/7 por profesionales para responder a emergencias.</li>
              <li>Control remoto de seguridad en hogar o empresa con tecnología avanzada.</li>
              <li>Evaluación de riesgos y diseño de medidas de seguridad específicas.</li>
              <li>Capacitación al personal para minimizar y eliminar amenazas.</li>
              <li>Sistemas de seguridad electrónica visibles para disuadir robos y prevenir pérdidas.</li>
              <li>Importancia de contar con equipos de seguridad adicionales junto con guardias.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="w-[87%] h-auto mt-[20px] mb-4 z-10"
          variants={fadeInUpWithDelay(1.2)}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full h-[212px] md:h-[600px] bg-white rounded-lg border-l-4 border-[#ca1b2e] flex flex-col items-center justify-center">
            <h3 className=" w-full text-center text-black text-[22px] md:text-[30px] font-bold leading-6 mb-4">
              Servicios Incluidos
            </h3>
            <ul className="text-left mx-auto list-disc list-inside text-[10px] md:text-[18px] leading-3 md:leading-[24px] md:space-y-2 px-8 text-black no-underline">
              <li>Instalación profesional, con garantía extendida y planes de servicio.</li>
              <li>Solución integral con equipos especializados de profesionales altamente capacitados en seguridad y vigilancia.</li>
              <li>Técnicos de instalación certificados y capacitados para colocar sistemas electrónicos en puntos estratégicos y vulnerables.</li>
              <li>Análisis previo o levantamiento para identificar las mejores áreas de prevención.</li>
              <div className='md:h-[80px] lg:h-[80px]'></div>
            </ul>
          </div>
        </motion.div>

       
      </div>

      {/* Texto adicional y botón con animación de entrada */}
      
      <motion.p
        className="w-[87%] md:w-full text-justify text-white text-[10px] md:text-[18px] font-normal leading-3 md:leading-[24px] mb-4 z-10 md:px-12"
        variants={fadeInUpWithDelay(1.6)}
        initial="hidden"
        animate="visible"
      >
        Ofrecemos productos de alta calidad y asesoría con personal capacitado para responder con profesionalismo ante cualquier duda que tenga, para cumplir con los requisitos únicos de cada cliente. Con el objetivo  de mantener seguros a personas, recursos materiales o patrimonios de cualquier situación que pueda alterar el orden,  evitar riesgos posibles. 
      </motion.p>
      <motion.p
        className="w-[87%] md:w-full text-justify text-white text-[10px] md:text-[18px] font-normal leading-3 md:leading-[24px] mb-4 z-10 md:px-12"
        variants={fadeInUpWithDelay(1.6)}
        initial="hidden"
        animate="visible"
      >
        La Instalación de Cámaras de Seguridad son un paquete básico pre armado de fábrica de fácil instalación, el cual te permite monitorear desde cualquier parte del mundo diferentes puntos al mismo tiempo las 24 hrs.
      </motion.p>

        <RedButton texto="Ver servicios" url="/Servicios" />
    </div>
  );
}

export default DispositivosSection;
