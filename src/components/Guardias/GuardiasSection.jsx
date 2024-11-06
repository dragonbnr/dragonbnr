import Image from "next/image";
import React from "react";
import BlackButton from "../Buttons/BlackButton";
import RedButton from "../Buttons/RedButton";

function GuardiasSection() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-center bg-black py-10 relative">
      <div className="w-full h-full absolute z-0 ">
        <Image
          src={"/images/guardias/bg.png"}
          layout="fill"
          quality={100}
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </div>
      <div className="w-full h-auto mt-[20px] mb-4 md:mb-8 z-10 flex justify-center gap-2 md:gap-8 px-4 md:px-12 lg:px-20">
        <div className="w-[200px] h-[205px] md:w-1/2 md:h-full">
          <Image
            src="/images/guardias/guardias.png"
            quality={100}
            width={1500}
            height={1500}
            alt="Guardias"
            className="object-cover w-full "
          />
        </div>
        <div className="w-[200px] h-[205px] md:w-1/2 md:h-full">
          <Image
            src="/images/guardias/guardias2.png"
            quality={100}
            width={1500}
            height={1500}
            alt="Guardias"
            className="object-cover w-full  "
          />
        </div>
      </div>
      <h1 className="text-[25px] md:text-[35px] font-semibold text-white leading-7 mb-[11px] z-10">
        Guardias intramuros
      </h1>
      <p className="w-[87%] text-justify text-white text-[10px] md:text-[24px] font-normal leading-3 md:leading-[32px] mb-4 z-10">
        Este servicio consiste en designar un guardia de seguridad capacitado a
        un área en específico, para brindar seguridad, respetando la ley y
        realizando varias actividades, cuya finalidad es proteger y
        salvaguardar, la seguridad del personal, instalaciones o bienes
        materiales. Enfocado en reducir, y controlar riesgos a los que una
        persona, organización, objeto o entidad pueda estar expuesta a lo largo
        del dia. Nuestro personal que va a laborar en el punto, esta dado de
        alta en la STPS y con registro en la SSP Federal, la cual emite la
        C.U.I.P (Cedula Única de Identificación Policial).
      </p>
      <div className="w-[87%] md:w-full md:px-12 lg:px-20 flex flex-col md:flex-row md:gap-8 h-auto mt-[20px] mb-4 z-10">
        <div className="w-full h-[212px] md:h-full lg:h-[550px] bg-white rounded-lg border-l-4 border-[#ca1b2e] flex flex-col items-center md:items-start justify-center lg:justify-start md:py-8 lg:py-10 md:px-4">
          <h3 className="max-w-[220.70px] w-full  md:max-w-full text-center md:text-left text-black text-[22px] md:text-[30px] lg:text-[35px]  font-bold leading-6 md:leading-[34px] mb-4  ">
            ¿Qué ofrece nuestro servicio?
          </h3>
          <ul className="text-left mx-auto list-disc list-inside text-[10px] md:text-[22px] lg:text-[24px]">
            <li>Control de entradas y salidas al inmueble.</li>
            <li>Rondín y vigilancia en las diferentes áreas.</li>
            <li>Elaboración de bitácoras con informe de incidentes.</li>
            <li>Reporte de anomalías dentro de su servicio.</li>
            <li>Mantener al mínimo los riesgos que puedan presentarse.</li>
          </ul>
        </div>

        <div className="w-full  h-[299px] md:h-full lg:h-[550px] bg-white rounded-lg border-l-4 border-[#ca1b2e]  flex flex-col items-center md:items-start justify-center md:py-8 md:px-4 mt-8 md:mt-0">
          <h3 className="max-w-[220.70px] w-full md:max-w-full text-center md:text-left  text-black text-[22px] md:text-[30px] lg:text-[35px] font-bold leading-6 md:leading-[34px] mb-4  ">
            Dirigido para todo tipo de instalaciones:
          </h3>
          <ul className="lg:w-full text-center md:text-left mx-auto list-disc list-inside text-[10px] md:text-[22px] lg:text-[24px]">
            <li>Residencial o condominios </li>
            <li>Hoteles </li>
            <li>Empresas </li>
            <li>Oficinas </li>
            <li>Industria </li>
            <li>Comercio </li>
            <li>Escuelas </li>
            <li>Tiendas departamentales </li>
            <li>Hospitales </li>
            <li>Laboratorios </li>
            <li>Gimnasios </li>
          </ul>
        </div>
      </div>

      <p className="w-[87%] text-justify text-white text-[10px] md:text-[24px] font-normal leading-3 md:leading-[28px] mb-4 z-10">
        Los guardias intramuros pasan mediante filtros en el área de selección
        de personal, para contar con los elementos más aptos para desarrollar
        sus funciones, cumpliendo cabalmente con las actividades encomendadas, y
        siendo supervisados por sus superiores, respetando las reglas y
        adaptándose a cada sector donde se prestará el servicio.
      </p>
      <p className="w-[87%] text-justify text-white text-[10px] md:text-[24px]  leading-3 md:leading-[28px] mb-4 z-10 font-bold">
        Cada cliente es único y tiene necesidades diferentes, es por ello que
        tratamos de ofrecer nuestros servicios personalizados, para brindar las
        soluciones óptimas y manteniendo una confidencialidad en todo momento,
        limitando el acceso de información a terceras personas.
      </p>
      <RedButton texto="Ver servicios " url="/Servicios" />
    </div>
  );
}

export default GuardiasSection;
