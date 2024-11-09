import React from 'react'
import Image from 'next/image'
import RedButton from '../Buttons/RedButton'
import Link from 'next/link'

function Redes() {
  return (
    <div className="w-full h-[385px] lg:h-[700px] flex flex-col justify-center items-center text-center bg-black py-10 relative">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/home/redes/bg.png"}
        layout='fill'
        quality={100}
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>
      <div className="absolute h-full flex flex-col justify-center items-center z-10 ">
        <h1 className="text-white text-[33px] lg:text-[50px] leading-8 lg:leading-[48px]">
            Síguenos en <br/>
            <span className="text-[#ca1b2e] font-bold">redes sociales</span>
            </h1>
            <div className="flex justify-center space-x-10 mt-8 lg:mt-4">
            <Link href={"https://www.facebook.com/profile.php?id=61562424445331"} target="_blank">
              <Image
              alt="Facebook"
                src={"/images/iconos/fb.png"}
                quality={100}
                width={"34"}
                height={"34"}
                className="cursor-pointer lg:w-[56px] "
              />
              </Link>
              <Link href={"https://www.instagram.com/dragonblackandredsegprivada/?hl=es"} target="_blank">
              <Image
              alt="Instagram"
                src={"/images/iconos/instagram.png"}
                quality={100}
                width={"34"}
                height={"34"}
                className="cursor-pointer lg:w-[56px] "
              />
              </Link>
              <Image
                src={"/images/iconos/linkedin.png"}
                quality={100}
                width={"34"}
                height={"34"}
                className="cursor-pointer lg:w-[56px] "
              />
            </div>
            <a href="mailto:dragonblackandredsegprivada@hotmail.com" className="text-white my-4 lg:text-[33px] ">dragonblackandredsegprivada@hotmail.com</a>
            <h2 className="leading-6 lg:leading-[50px] mb-4 md:px-12">
            <span className="text-white text-[24px] lg:text-[75px]">Contamos con</span><br/>
            <span className="text-white text-[24.83px] lg:text-[74px]
font-bold">servicios de seguridad</span><br/>
            <span className="text-[#ca1b2e]
text-[33.28px]  lg:text-[90px] xl:text-[100px]
font-bold">altamente capacitado</span>
            </h2>
            <RedButton texto="Contáctanos" url="/Contacto" />
        </div>
    </div>
  )
}

export default Redes