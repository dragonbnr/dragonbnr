import Image from 'next/image';
import React from 'react';
import BlackButton from '../Buttons/BlackButton';

function Quienes() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-center bg-black py-10 relative">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/conocenos/quienes/bg.png"}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        quality={100}
        alt="Background"
        />
      </div>
      <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10">
      ¿Quiénes somos? <br /> 
      </h1>
      <p className="w-[87%] text-justify text-white text-[10px] font-normal leading-3 mb-4 z-10">
      Somos una empresa mexicana de seguridad privada, nuestra prioridad es la protección de nuestros clientes, la transparencia y ética, ofreciendo servicios de seguridad con soluciones integrales, basándonos en las necesidades específicas de cada cliente.  Contamos con personal altamente capacitado, acompañado de innovación y tecnología que permita desarrollar nuestro trabajo de forma eficiente, adaptándonos a los cambios constantes en el mercado de la seguridad, comprometidos en proteger tu familia, empresa, o bienes.

      </p>
      <div className="w-[87%] h-auto mt-[20px] mb-4 z-10">
        <Image
          src="/images/conocenos/quienes/guardias.png"
          width={1500}
          height={1500}
          quality={100}
          alt="Guardias"
          className="object-cover "
        />
      </div>
      <BlackButton texto="Conócenos" />
    </div>
  );
}

export default Quienes;