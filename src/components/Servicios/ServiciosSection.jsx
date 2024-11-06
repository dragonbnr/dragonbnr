import Image from "next/image";
import React from "react";
import BlackButton from "../Buttons/BlackButton";

function ServiciosSection() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center text-center bg-black py-10 lg:py-20  relative">
      <div className="w-full h-full absolute z-0 ">
        <Image
          src={"/images/servicios/serviciossection/bg.png"}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:px-12 md:gap-8">
        <div className="w-full flex flex-col items-center md:items-start justify-center md:w-1/2 z-10  ">
          <div className="w-[87%] h-auto md:h-[360px] md:w-[350px] lg:h-[500px] lg:w-full mt-[20px] mb-4 z-10">
            <Image
              src="/images/servicios/serviciossection/guardias.png"
              quality={100}
              width={1500}
              height={1500}
              alt="Guardias"
              className="object-cover w-full h-full rounded-[17px] "
            />
          </div>

          <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10 md:text-left">
            Guardias intramuros <br />
          </h1>
          <p className="w-[87%] md:w-full text-justify text-white text-[10px] lg:text-[24px] font-normal leading-3 lg:leading-[32px] mb-4 z-10 ">
            Guardias capacitados para brindar seguridad profesional en
            instalaciones o bienes.
          </p>

          <BlackButton texto="Ver más" url="/Servicios/Guardias" />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2  z-10">
          <div className="w-[87%] h-auto md:h-[360px] md:w-[350px] lg:h-[500px] lg:w-full mt-[20px] mb-4 z-10">
            <Image
              src="/images/servicios/serviciossection/dispositivos.png"
              quality={100}
              width={1500}
              height={1500}
              alt="Guardias"
              className="object-cover w-full h-full rounded-[17px] "
            />
          </div>

          <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10">
            Dispositivos electrónicos <br />
          </h1>
          <p className="w-[87%] md:w-full text-justify text-white text-[10px] lg:text-[24px] font-normal leading-3 lg:leading-[32px] mb-4 z-10 ">
            Instalación, comercialización e implementación de proyectos de
            seguridad y videovigilancia.
          </p>

          <BlackButton texto="Ver más" url="/Servicios/Dispositivos" />
        </div>
      </div>
    </div>
  );
}

export default ServiciosSection;
