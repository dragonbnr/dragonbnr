import Image from 'next/image';
import React from 'react';
import BlackButton from '../Buttons/BlackButton';
import Redes from '../../components/Home/Redes';

function Permisos() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-center bg-black py-10 relative">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/certificaciones/permisos/bg.png"}
        quality={100}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>
      <h1 className="w-[80%] text-[25px] font-semibold  leading-7 mb-[11px] z-10 text-black">
      Operamos con respaldo legal y certificaciones, garantizando un servicio seguro y confiable. <br /> 
      </h1>
      <p className="w-[87%] md:w-full text-justify  text-[10px] md:text-[18px] font-normal leading-3 md:leading-[24px] mb-4 z-10 text-black md:px-12">
      Proveemos sistemas de videovigilancia de alta resolución, conectados a un sistema central para monitoreo y grabación en tiempo real, ideales para cubrir puntos vulnerables. Ofrecemos instalación profesional con garantía extendida, realizada por técnicos certificados que, tras un análisis previo, colocan los equipos en ubicaciones estratégicas. Además, contamos con monitoreo de alarmas, control de acceso vehicular y peatonal, cercas electrificadas, video porteros y sensores de movimiento, permitiendo un control remoto 24/7 desde cualquier lugar del mundo.

      </p>

<h2 className="text-[25px] text-[#ca1b2e] font-semibold  leading-7 mb-[11px] mt-4 z-10">
    Permisos
    </h2>

      <div className="w-[87%] md:w-full  h-auto mt-[20px] mb-4 z-10 md:px-12 ">
        <Image
        quality={100}
          src="/images/certificaciones/permisos/permiso.jpg"
          width={1500}
          height={1500}
          alt="Guardias"
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="text-[25px] text-[#ca1b2e] font-semibold  leading-7 mb-[11px] md:mb-[30px] mt-4 z-10">
      Instituciones que nos avalan
    </h3>
    <div className="grid grid-cols-3 gap-4 z-10 md:px-12">
  <div className="flex justify-center items-center">
    <Image
    quality={100}
      src="/images/certificaciones/instituciones/imss.png"
      width={100}
      height={100}
      alt="IMSS"
      className="object-contain w-full h-full max-h-[80px]"
    />
  </div>
  <div className="flex justify-center items-center">
    <Image
    quality={100}
      src="/images/certificaciones/instituciones/trabajo.png"
      width={100}
      height={100}
      alt="Trabajo"
      className="object-contain w-full h-full max-h-[80px]"
    />
  </div>
  <div className="flex justify-center items-center">
    <Image
    quality={100}
      src="/images/certificaciones/instituciones/infonavit.png"
      width={100}
      height={100}
      alt="Infonavit"
      className="object-contain w-full h-full max-h-[80px]"
    />
  </div>
  <div className="flex justify-center items-center">
    <Image
    quality={100}
      src="/images/certificaciones/instituciones/schp.png"
      width={100}
      height={100}
      alt="SCHP"
      className="object-contain w-full h-full max-h-[80px]"
    />
  </div>
  <div className="flex justify-center items-center">
    <Image
    quality={100}
      src="/images/certificaciones/instituciones/seguridad.png"
      width={100}
      height={100}
      alt="Seguridad"
      className="object-contain w-full h-full max-h-[80px]"
    />
  </div>
  <div className="flex justify-center items-center">
    <Image
    quality={100}
      src="/images/certificaciones/instituciones/sat.png"
      width={100}
      height={100}
      alt="SAT"
      className="object-contain w-full h-full max-h-[80px]"
    />
  </div>
</div>

    </div>
  );
}

export default Permisos;