import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import React, { useEffect } from 'react';
import BlackButton from '../Buttons/BlackButton';
import Valor from './Valores/Valor';

function Quienes() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } },
  };

  const valores = [
    {
      icono: '/images/conocenos/valores/valores/6.svg',
      texto: 'Atención personalizada, adaptándonos a las necesidades de cada cliente.',
    },
    {
      icono: '/images/conocenos/valores/valores/3.svg',
      texto: 'Capacitación constante para nuestros guardias de seguridad y equipo administrativo.',
    },
    {
      icono: '/images/conocenos/valores/valores/7.svg',
      texto: 'Creamos metodologías para mejorar el servicio de seguridad.',
    },
    {
      icono: '/images/conocenos/valores/valores/5.svg',
      texto: 'Detectamos y evaluamos puntos de riesgo. ',
    },
    {
      icono: '/images/conocenos/valores/valores/4.svg',
      texto: 'Supervisión constante con patrullas 100% identificables de la empresa.',
    },
    {
      icono: '/images/conocenos/valores/valores/1.svg',
      texto: 'Tecnología avanzada',
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="w-full h-auto flex flex-col justify-center items-center text-center bg-black py-10 relative"
    >
      <motion.div className="w-full h-full absolute z-0" variants={fadeIn}>
        <Image
          src="/images/conocenos/valores/bg.png"
          layout="fill"
          quality={100}
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </motion.div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-8 z-10 md:px-12">
        <motion.div
          className="w-[87%] md:w-1/2 h-auto mt-[20px] mb-4 z-10"
          variants={fadeInUp}
        >
          <Image
            src="/images/conocenos/valores/guardias.png"
            width={1500}
            height={1500}
            quality={100}
            alt="Guardias"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 flex-col md:text-left md:items-center md:justify-center"
          variants={fadeInUp}
        >
          <h1 className="text-[25px] lg:text-[64px] font-semibold text-white leading-7 md:leading-[64px] mb-[11px] z-10">
            Nuestros <span className="text-[#ca1b2e]">valores</span>
          </h1>
          <ul className="text-white z-10 list-disc list-inside lg:text-[24px]">
            <li>Lealtad</li>
            <li>Honradez</li>
            <li>Responsabilidad</li>
            <li>Integridad</li>
            <li>Vocación de servicio</li>
            <li>Liderazgo</li>
            <li>Honestidad</li>
            <li>Trabajo en equipo</li>
            <li>Servicio y protección</li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        className="w-full grid grid-cols-2 md:grid-cols-3 place-items-center mt-4 space-y-2 lg:space-y-4 md:px-4"
        variants={fadeInUp}
      >
        {valores.map((valor, index) => (
          <Valor key={index} icono={valor.icono} texto={valor.texto} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Quienes;