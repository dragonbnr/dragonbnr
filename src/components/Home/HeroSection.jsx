import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[550px] md:h-[650px] lg:h-[90vh] bg-black overflow-hidden"
    >
      <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/home/hero/bg.png"}
        quality={100}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>

      <div className="bg-black text-center text-white px-4 flex flex-col justify-center items-center pt-[36px] ">
      <div className="w-[176.20px] h-[19.90px] relative flex-col justify-start items-start inline-flex" >
        <Image src="/images/logoletra.svg" quality={100} width={156} height={161} alt="Logo" className='w-full  h-full object-cover' />
        </div>
        <h1 className="text-[40px] lg:text-[90px] xl:text-[120px] font-bold mb-6 leading-10 lg:leading-[90px]  xl:leading-[120px] mt-[18px] z-10">Seguridad privada <br/> al límite</h1>
      </div>

      <div className='absolute  left-0 right-0 mx-auto bottom-0 lg:-bottom-[320px] xl:-bottom-[150px]'>
        <div className='w-full h-[400px] md:h-[500px] lg:h-[750px] xl:h-[650px] '>
      <Image src={"/images/home/hero/guardias.png"}
        width={1500}
        height={1500}
        alt="Guardias"
        quality={100}
        className=" object-cover  h-full w-full"
        />
        </div>
        </div>
      
    </div>
  );
};

export default HeroSection;