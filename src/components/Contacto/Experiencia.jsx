import { motion } from 'framer-motion';
import Image from 'next/image';
import RedButton from '../Buttons/RedButton';


const Experiencia  = ({setForm}) => {
   
  return (
    <div className="w-full h-auto flex flex-col relative justify-center items-center py-[37px]">
      <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/contacto/experiencia/bg.png"}
        layout='fill'
        objectFit='cover'
        quality={100}
        objectPosition='center'
        alt="Background"

        />
      </div>
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="w-[90%] text-[25px] text-center text-white font-semibold leading-8 mb-4">
  
  <p>

        <span className="text-white ">Nuestra experiencia nos permite ofrecerte un servicio confiable y de calidad</span> 
  </p>
        </h1>
        <div className="w-[90%] items-center flex justify-center relative mt-4">
        <div className="w-[12.53px] h-[12.53px] bg-[#ca1b2e] rounded-full absolute " />
            <div className="w-full h-[30px] bg-white rounded-tl-md rounded-bl-md border-l-2 border-[#ca1b2e] cursor-pointer flex justify-center items-center "
            onClick={()=>setForm("cotizar")}
            >
            <span className="text-center text-black text-[10px]  leading-[10.94px]"> Cotiza nuestros servicios </span>
                </div>
            <div className="w-full h-[30px] bg-black rounded-tr-md rounded-br-md border-r-2 border-[#ca1b2e] cursor-pointer flex justify-center items-center"
            onClick={()=>setForm("bolsa")}
            >
            <span className="text-center text-white text-[10px]  leading-[10.94px]">
                Bolsa de Trabajo
                </span>
                </div>
            </div>
    
        </div>
      </div>
  );
};

export default Experiencia ;