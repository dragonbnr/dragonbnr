import Image from 'next/image';
import React from 'react';
import RedButton from '../Buttons/RedButton';

function SeguridadSection() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center text-center bg-black py-10 relative md:px-8">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/home/seguridad/bg.png"}
        quality={100}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-end items-center z-10 ">
      <div className='w-full flex flex-col items-center md:items-start z-10 '>
      <h1 className="text-[25px] md:text-[64px] font-semibold text-white leading-7 md:leading-[68px] mb-[11px] md:text-left">
        Seguridad <br /> <span className="text-[#ca1b2e]"> Privada</span>
      </h1>
      <p className="w-[87%]  text-justify text-white text-[10px] md:text-[16px] lg:text-[24px] font-normal leading-3 md:leading-[32px] mb-4 z-10">
        Protegemos lo que más te importa con soluciones de seguridad personalizadas, personal capacitado y tecnología de vanguardia. Confía en nuestra experiencia y compromiso para asegurar tu familia, empresa o bienes.
      </p>
      <div className='hidden w-full md:flex justify-center md:justify-start'>
      <RedButton texto="Conócenos" url="/Conocenos" />
      </div>
      </div>
      <div className="w-[87%]  h-auto mt-[20px] mb-4 z-10">
        <Image
          src="/images/home/seguridad/guardias.png"
          quality={100}
          width={1500}
          height={1500}
          alt="Guardias"
          className="object-cover "
        />
      </div>
      <div className='md:hidden'>
      <RedButton texto="Conócenos" url="/Conocenos" />
      </div>
    </div>
    </div>
  );
}

export default SeguridadSection;