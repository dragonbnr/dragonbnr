import Image from 'next/image';
import React from 'react';
import BlackButton from '../Buttons/BlackButton';

function MisionVision() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-center bg-black py-10 relative">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/conocenos/mision/bg.png"}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>
      <div className="w-[87%] h-auto mt-[20px] mb-4 z-10">
        <Image
          src="/images/conocenos/mision/mision.png"
          width={1500}
          height={1500}
          alt="Guardias"
          className="object-cover "
        />
      </div>
      <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10">
      Misión <br /> 
      </h1>
      <p className="w-[87%] text-justify text-white text-[10px] font-normal leading-3 mb-4 z-10">
      Ofrecer nuestros servicios de seguridad privada para proteger de forma eficaz, tu familia, bienes, o activos, contando con elementos capacitados para realizar las tareas de manera profesional, brindándote seguridad, y confianza, llevando a cabo transparencia, entre la empresa y el cliente, acompañado de tecnologías que se adaptan a los cambios volátiles de hoy en día. 

      </p>
      <div className="w-[87%] h-auto mt-[20px] mb-4 z-10">
        <Image
          src="/images/conocenos/mision/vision.png"
          width={1500}
          height={1500}
          alt="Guardias"
          className="object-cover "
        />
      </div>
      <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10">
      Visión <br /> 
      </h1>
      <p className="w-[87%] text-justify text-white text-[10px] font-normal leading-3 mb-4 z-10">
      Tener mayor presencia en el territorio nacional, mejorando continuamente nuestros servicios, y nuestros elementos con constante capacitación, para desarrollar las habilidades necesarias que permitan satisfacer las necesidades de nuestros clientes, siendo como prioridad la seguridad, transparencia, honradez y profesionalismo, al igual que contar con un abanico amplio de servicios profesionales para nuestros clientes.

      </p>
      
    
    </div>
  );
}

export default MisionVision;