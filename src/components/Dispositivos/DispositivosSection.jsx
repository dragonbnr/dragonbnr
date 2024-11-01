import Image from 'next/image';
import React from 'react';
import BlackButton from '../Buttons/BlackButton';
import RedButton from '../Buttons/RedButton';

function DispositivosSection() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-center bg-black py-10 relative">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/guardias/bg.png"}
        quality={100}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>
      <div className="w-full h-auto mt-[20px] mb-4 z-10 flex justify-center gap-2 px-4">
        <div className="w-[200px] h-[205px]">
        <Image
          src="/images/dispositivos/camara.png"
          width={1500}
          height={1500}
          quality={100}
          alt="Guardias"
          className="object-cover w-full "
        />
        </div>
        <div className="w-[200px] h-[205px]">
        <Image
          src="/images/dispositivos/camara2.png"
          width={1500}
          height={1500}
          quality={100}
          alt="Guardias"
          className="object-cover w-full  "
        />
        </div>
      </div>
      <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10">
      Instalación y comercialización
      de dispositivos electrónicos
      </h1>
      <p className=" text-center text-white text-xs font-bold leading-3 z-10">Instalación profesional de cámaras de seguridad</p>
      <p className="w-[345px] h-8 text-justify text-white text-[10px] font-normal font-['Inter'] leading-3 z-10 mt-2">Te ofrecemos la implementación de proyectos de seguridad y videovigilancia en entornos industriales, oficinas y residenciales.</p>
      <h2 className="text-center text-white text-xs font-bold font-['Inter'] leading-3 z-10 mt-8 mb-4">CCTV</h2>
      <p className="w-[87%] text-justify text-white text-[10px] font-normal leading-3 mb-4 z-10">
      Proveemos sistemas de videovigilancia de alta resolución, conectados a un sistema central para monitoreo y grabación en tiempo real, ideales para cubrir puntos vulnerables. Ofrecemos instalación profesional con garantía extendida, realizada por técnicos certificados que, tras un análisis previo, colocan los equipos en ubicaciones estratégicas. Además, contamos con monitoreo de alarmas, control de acceso vehicular y peatonal, cercas electrificadas, video porteros y sensores de movimiento, permitiendo un control remoto 24/7 desde cualquier lugar del mundo.

      </p>
      <div className="w-[87%] h-auto mt-[20px] mb-4 z-10">
      <div className="w-full h-[212px] bg-white rounded-lg border-l-4 border-[#ca1b2e] flex flex-col items-center justify-center" >
      <h3 className="max-w-[220.70px] w-full text-center text-black text-[22px] font-bold leading-6 mb-4  ">Beneficios</h3>
      <ul className="text-left mx-auto list-disc list-inside text-[10px] leading-3 px-8">
      <li>Atención personalizada 24/7 por profesionales para responder a emergencias.</li>
      <li>Control remoto de seguridad en hogar o empresa con tecnología avanzada.</li>
      <li>Evaluación de riesgos y diseño de medidas de seguridad específicas.</li>
      <li>Capacitación al personal para minimizar y eliminar amenazas.</li>
      <li>Sistemas de seguridad electrónica visibles para disuadir robos y prevenir pérdidas.</li>
      <li>Importancia de contar con equipos de seguridad adicionales junto con guardias.</li>
        </ul>
          </div>

          

         
      </div>

      
      <div className="w-[87%] h-auto mt-[20px] mb-4 z-10">
        <Image
          src="/images/servicios/serviciossection/guardias.png"
          width={1500}
          height={1500}
          quality={100}
          alt="Guardias"
          className="object-cover "
        />
      </div>

      <p className="w-[87%] text-justify text-white text-[10px] font-normal leading-3 mb-4 z-10">
      Los guardias intramuros pasan mediante filtros en el área de selección de personal, para contar con los elementos más aptos para desarrollar sus funciones, cumpliendo cabalmente con las actividades encomendadas, y siendo supervisados por sus superiores, respetando las reglas y adaptándose a cada sector donde se prestará el servicio.
      </p>
     
      <RedButton texto="Ver servicios " url="/Servicios" />
      
    
    </div>
  );
}

export default DispositivosSection;