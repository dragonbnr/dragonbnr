import Image from 'next/image';
import React from 'react';
import RedButton from '../Buttons/RedButton';

function SeguridadSection() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-center bg-black py-10 relative">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/home/seguridad/bg.png"}
        quality={100}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>
      <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10">
        Seguridad <br /> <span className="text-[#ca1b2e]"> Privada</span>
      </h1>
      <p className="w-[87%] text-justify text-white text-[10px] font-normal leading-3 mb-4 z-10">
        Protegemos lo que más te importa con soluciones de seguridad personalizadas, personal capacitado y tecnología de vanguardia. Confía en nuestra experiencia y compromiso para asegurar tu familia, empresa o bienes.
      </p>
      <div className="w-[87%] h-auto mt-[20px] mb-4 z-10">
        <Image
          src="/images/home/seguridad/guardias.png"
          quality={100}
          width={1500}
          height={1500}
          alt="Guardias"
          className="object-cover "
        />
      </div>
      <RedButton texto="Conócenos" />
    </div>
  );
}

export default SeguridadSection;