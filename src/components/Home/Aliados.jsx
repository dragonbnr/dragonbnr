import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Aliados = () => {
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
          src={"/images/home/aliados/bg2.png"}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Contenedor de texto */}
      <div className="flex flex-col justify-center items-center z-10">
        <motion.h1
          className="text-[33px] text-center text-white font-bold leading-[40px]"
          variants={fadeInUp}
        >
          <p className="lg:text-[75px] lg:mb-8">
            <span className="text-[#ca1b2e]">Aliados</span> que han
          </p>
          <p>
            <span className="text-white lg:text-[74px]">confiado en nuestra</span>
          </p>
          <p>
            <span className="text-[#ca1b2e] text-6xl lg:text-[137px]">seguridad</span>
          </p>
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Aliados;
