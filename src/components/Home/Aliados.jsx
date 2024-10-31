import { motion } from 'framer-motion';
import Image from 'next/image';

const Aliados = () => {
  return (
    <div className="w-full h-auto flex flex-col relative justify-center items-center py-[37px]">
      <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/home/aliados/bg.png"}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"

        />
      </div>
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="text-[33px] text-center text-white font-bold leading-[40px]">
  <p>

        <span className="text-[#ca1b2e]  ">Aliados</span> que han
  </p>
  <p>

        <span className="text-white ">confiado en nuestra</span> 
  </p>
  <p>

<span className="text-[#ca1b2e] text-6xl ">seguridad</span> 
</p>
        </h1>
    
        </div>
      </div>
  );
};

export default Aliados;