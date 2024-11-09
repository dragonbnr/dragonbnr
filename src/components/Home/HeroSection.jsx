import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const HeroSection = () => {
  // Configuración para detectar cuando el componente es visible
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Inicia la animación cuando el 10% del componente es visible
  });

  // Efecto para activar las animaciones cuando el componente es visible
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="relative w-full h-[400px] md:h-[630px] lg:h-[90vh] lg:max-h-[650px] xl:h-[720px] xl:max-h-[850px] bg-black overflow-hidden"
    >
      {/* Imagen de fondo */}
      <motion.div className="w-full h-full absolute z-0" variants={fadeIn}>
        <Image
          src={"/images/home/hero/bg.png"}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Logo y texto */}
      <motion.div
        className="text-center text-white px-4 flex flex-col justify-center items-center pt-[36px]"
        variants={fadeInUp}
      >
        <motion.div
          className="w-[176.20px] h-[19.90px] relative flex-col justify-start items-start inline-flex"
          variants={scaleIn}
        >
          <Image
            src="/images/logoletra.svg"
            quality={100}
            width={156}
            height={161}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          className="text-[35px] lg:text-[90px] xl:text-[120px] font-bold mb-6 leading-10 lg:leading-[90px] xl:leading-[120px] mt-[18px] z-10"
          variants={fadeInUp}
        >
          Seguridad privada <br /> al límite
        </motion.h1>
      </motion.div>

      {/* Imagen inferior */}
      <motion.div className="absolute left-0 right-0 mx-auto bottom-0" variants={fadeIn}>
        <motion.div
          className="w-full h-[250px] md:h-[500px] lg:h-[450px] xl:h-[450px]"
          variants={scaleIn}
        >
          <Image
            src={"/images/home/hero/guardias.png"}
            width={1500}
            height={1500}
            alt="Guardias"
            quality={100}
            className="object-contain h-full w-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
