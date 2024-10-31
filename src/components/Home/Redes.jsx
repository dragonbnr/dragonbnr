import React from 'react'
import Image from 'next/image'
import RedButton from '../Buttons/RedButton'

function Redes() {
  return (
    <div className="w-full h-[385px] flex flex-col justify-center items-center text-center bg-black py-10 relative">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/home/redes/bg.png"}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>
      <div className="absolute h-full flex flex-col justify-center items-center z-10 ">
        <h1 className="text-white text-[33px] leading-8">
            Síguenos en <br/>
            <span className="text-[#ca1b2e] font-bold">redes sociales</span>
            </h1>
            <div className="flex justify-center space-x-10 mt-8">
              <Image
                src={"/images/iconos/fb.png"}
                width={"34"}
                height={"34"}
                className="cursor-pointer"
              />
              <Image
                src={"/images/iconos/instagram.png"}
                width={"34"}
                height={"34"}
                className="cursor-pointer"
              />
              <Image
                src={"/images/iconos/linkedin.png"}
                width={"34"}
                height={"34"}
                className="cursor-pointer"
              />
            </div>
            <a href="mailto:dragonblackandredsegprivada@hotmail.com" className="text-white my-4">dragonblackandredsegprivada@hotmail.com</a>
            <h2 className="leading-6 mb-4">
            <span className="text-white text-[24px]">Contamos con</span><br/>
            <span className="text-white text-[24.83px]
font-bold">servicios de seguridad</span><br/>
            <span className="text-[#ca1b2e]
text-[33.28px]
font-bold">altamente capacitado</span>
            </h2>
            <RedButton texto="Contáctanos" />
        </div>
    </div>
  )
}

export default Redes