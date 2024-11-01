import { motion } from 'framer-motion';
import Image from 'next/image';
import RedButton from '../Buttons/RedButton';


const Cotiza = () => {
  return (
    <div className="w-full h-auto flex flex-col relative justify-center items-center py-[37px]">
      <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/servicios/cotiza/bg.png"}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"

        />
      </div>
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="text-[33px] text-center text-white font-bold leading-[40px] mb-4">
  
  <p>

        <span className="text-white ">Cotiza nuestros</span> 
  </p>
  <p>
    servicios {" "}
<span className="text-[#ca1b2e]  ">aquí</span> 
</p>
        </h1>
        <RedButton texto="Contáctanos " />
    
        </div>
      </div>
  );
};

export default Cotiza;