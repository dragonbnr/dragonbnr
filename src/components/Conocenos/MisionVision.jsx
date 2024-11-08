import Image from "next/image";
import React from "react";
import BlackButton from "../Buttons/BlackButton";

function MisionVision() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center text-center bg-black py-10 lg:py-20  relative">
      <div className="w-full h-full absolute z-0 ">
        <Image
          src={"/images/conocenos/mision/bg.png"}
          layout="fill"
          objectFit="cover"
          quality={100}
          objectPosition="center"
          alt="Background"
        />
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center md:px-12 md:gap-8">
        <div className="w-full flex flex-col items-center justify-center md:w-1/2 z-10  ">
          <div className="w-[87%] h-auto md:h-[360px] md:w-[350px] lg:h-[500px] lg:w-full mt-[20px] mb-4 z-10">
            <Image
              src="/images/conocenos/mision/mision.png"
              width={1500}
              height={1500}
              quality={100}
              alt="Guardias"
              className="object-cover w-full h-full rounded-[17px]  "
            />
          </div>

          <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10 md:text-left">
            Misión <br />
          </h1>
          <p className="w-[87%] md:w-full text-justify text-white text-[10px] lg:text-[24px] font-normal leading-3 lg:leading-[32px] mb-4 z-10  lg:h-[300px]">
            Ofrecer nuestros servicios de seguridad privada para proteger de
            forma eficaz, tu familia, bienes, o activos, contando con elementos
            capacitados para realizar las tareas de manera profesional,
            brindándote seguridad, y confianza, llevando a cabo transparencia,
            entre la empresa y el cliente, acompañado de tecnologías que se
            adaptan a los cambios volátiles de hoy en día. 
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2  z-10">
          <div className="w-[87%] h-auto md:h-[360px] md:w-[350px] lg:h-[500px] lg:w-full mt-[20px] mb-4 z-10">
            <Image
              src="/images/conocenos/mision/vision.png"
              width={1500}
              height={1500}
              alt="Guardias"
              quality={100}
              className="object-cover w-full h-full rounded-[17px] "
            />
          </div>
          <h1 className="text-[25px] font-semibold text-white leading-7 mb-[11px] z-10 md:text-left">
            Visión <br />
          </h1>
          <p className="w-[87%] md:w-full text-justify text-white text-[10px] lg:text-[24px] font-normal leading-3 lg:leading-[32px] mb-4 z-10 lg:h-[300px]">
            Tener mayor presencia en el territorio nacional, mejorando
            continuamente nuestros servicios, y nuestros elementos con constante
            capacitación, para desarrollar las habilidades necesarias que
            permitan satisfacer las necesidades de nuestros clientes, siendo
            como prioridad la seguridad, transparencia, honradez y
            profesionalismo, al igual que contar con un abanico amplio de
            servicios profesionales para nuestros clientes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MisionVision;
