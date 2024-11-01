import Image from 'next/image';
import React from 'react';
import BlackButton from '../Buttons/BlackButton';

function ServiciosSection() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-center bg-black py-10 relative">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/servicios/serviciossection/bg.png"}
        quality={100}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>
      <div className="w-[87%] h-auto mt-[20px] mb-4 z-10">
        <Image
          src="/images/servicios/serviciossection/guardias.png"
          quality={100}
          width={1500}
          height={1500}
          alt="Guardias"
          className="object-cover "
        />
      </div>

      <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10">
      Guardias intramuros <br /> 
      </h1>
      <p className="w-[87%] text-justify text-white text-[10px] font-normal leading-3 mb-4 z-10">
     Guardias capacitados para brindar seguridad profesional en instalaciones o bienes.
      </p>
      
      <BlackButton texto="Ver más" url="/Servicios/Guardias" />
      <div className="w-[87%] h-auto mt-[20px] mb-4 z-10">
        <Image
          src="/images/servicios/serviciossection/dispositivos.png"
          quality={100}
          width={1500}
          height={1500}
          alt="Guardias"
          className="object-cover "
        />
      </div>

      <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10">
      Dispositivos electrónicos <br /> 
      </h1>
      <p className="w-[87%] text-justify text-white text-[10px] font-normal leading-3 mb-4 z-10">
      Instalación, comercialización e implementación de proyectos de seguridad y videovigilancia.

      </p>
      
      <BlackButton texto="Ver más" url="/Servicios/Dispositivos" />
    </div>
  );
}

export default ServiciosSection;