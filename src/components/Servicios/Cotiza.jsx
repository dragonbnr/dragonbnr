import { motion } from 'framer-motion';
import Image from 'next/image';
import RedButton from '../Buttons/RedButton';

const Cotiza = () => {
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
          src={"/images/servicios/cotiza/bg.png"}
          layout="fill"
          quality={100}
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>

      {/* Contenido */}
      <div className="flex flex-col justify-center items-center z-10">
        <motion.h1
          className="text-[33px] text-center text-white font-bold leading-[40px] mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <p>
            <span className="text-white">Cotiza nuestros</span>
          </p>
          <p>
            servicios <span className="text-[#ca1b2e]">aquí</span>
          </p>
        </motion.h1>

        {/* Botón con animación de desvanecimiento y subida */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <RedButton texto="Contáctanos" url="/Contacto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Cotiza;
