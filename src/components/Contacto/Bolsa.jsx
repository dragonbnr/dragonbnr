// components Bolsa.js
import React from "react";
import Image from "next/image";

const Bolsa = () => {
  return (
    <div className="bg-gradient-to-b from-black to-red-900 text-white py-12 px-6 md:px-12 text-center">
      <h2 className=" text-center text-[#ca1b2e] text-[22.67px] leading-[34px] ">Forma parte de</h2>
      <Image src={"/images/logoletra.svg"} quality={100} width={340} height={38} alt="linea" />
      <p className="mb-8 text-[10px] text-left mt-6">
      Únete a nuestro equipo de colaboradores y pertenece a la mejor empresa de seguridad privada en México.
      </p>
      <p className="mb-6 text-[10px] text-center font-bold mt-2">
      Contáctanos y conoce nuestra oferta laboral.
      </p>

      <form className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full px-4 py-2 border border-gray-300 rounded-md  bg-transparent text-white text-[7.26px] placeholder:text-center"
        />
        <input
          type="email"
          placeholder="Correo"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white text-[7.26px] placeholder:text-center"
        />
        <input
          type="tel"
          placeholder="Teléfono"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white text-[7.26px] placeholder:text-center"
        />
       
        <textarea
          placeholder="Mensaje"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white text-[7.26px] placeholder:text-center h-32 resize-none"
        ></textarea>

        <p className="text-left text-[10px] mt-4">
          Al enviar el formato estás aceptando nuestro{" "}
            Aviso de Privacidad, consúltalo 
          <a href="#aviso" className="text-red-500 hover:underline"> {" "} 
          aquí.
          </a>
        </p>

        <button
          type="submit"
          className="bg-red-500 text-white font-bold py-2 px-8 rounded-md hover:bg-red-600 mt-4"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Bolsa;
