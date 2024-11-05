import { motion } from 'framer-motion';
import Image from 'next/image';
import BlackButton from '../Buttons/BlackButton';

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
        <h1 className="text-[26px] lg:text-[75px] text-center text-white lg:leading-[70px]">
  
        <span className="text-[#ca1b2e] font-bold ">Soluciones</span> adaptadas a tus necesidades
        </h1>
        <p className="w-[70%] lg:w-[80%] text-center text-white text-xl lg:text-[40px] font-bold  leading-snug mb-8 lg:mt-8">Explora nuestros servicios diseñados para <br/>reforzar tu protección hoy mismo.</p>
        </div>
        <BlackButton texto={"Ver servicios"} url={"/Servicios"} />
      </div>
  );
};

export default SolucionesSection;