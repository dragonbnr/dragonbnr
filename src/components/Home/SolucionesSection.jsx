import { motion } from 'framer-motion';
import Image from 'next/image';

const SolucionesSection = () => {
  return (
    <div className="w-full h-auto flex flex-col relative justify-center items-center py-[37px]">
      <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/home/soluciones/bg.png"}
        quality={100}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"

        />
      </div>
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="text-[26px] text-center text-white">
  
        <span className="text-[#ca1b2e] ">Soluciones</span> adaptadas a tus necesidades
        </h1>
        <p className="w-[70%] text-center text-white text-xl font-bold  leading-snug">Explora nuestros servicios diseñados para <br/>reforzar tu protección hoy mismo.</p>
        </div>
      </div>
  );
};

export default SolucionesSection;