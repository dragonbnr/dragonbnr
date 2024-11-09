import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import BlackButton from "../Buttons/BlackButton";

const SolucionesSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="w-full h-auto flex flex-col relative justify-center items-center py-[37px]"
    >
      {/* Imagen de fondo */}
      <motion.div className="w-full h-full absolute z-0" variants={fadeIn}>
        <Image
          src={"/images/home/soluciones/bg.png"}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Contenido principal */}
      <div className="flex flex-col justify-center items-center z-10">
        <motion.h1
          className="text-[26px] md:text-[50px] lg:text-[75px] text-center text-white md:leading-[50px] lg:leading-[70px] lg:max-w-[900px]"
          variants={fadeInUp}
        >
          <span className="text-[#ca1b2e] font-bold">Soluciones</span> adaptadas a tus necesidades
        </motion.h1>
        
        <motion.p
          className="w-[70%] lg:w-[95%] text-center text-white text-xl lg:text-[40px] font-bold leading-snug mb-8 mt-4 md:mt-8"
          variants={fadeInUp}
        >
          Explora nuestros servicios diseñados para <br /> reforzar tu protección hoy mismo.
        </motion.p>
      </div>

      {/* Botón */}
      <motion.div variants={scaleIn} className="z-10">
        <BlackButton texto={"Ver servicios"} url={"/Servicios"} />
      </motion.div>
    </motion.div>
  );
};

export default SolucionesSection;
