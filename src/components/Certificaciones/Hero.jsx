import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="h-[452px] w-full flex justify-center items-center relative">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/certificaciones/bg.png"}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>
      <h1 className="text-white text-[40.51px] font-semibold z-10 text-center leading-8">
        Certificaciones y <br/>
    <span className="text-[#ca1b2e]">permisos</span>
        </h1>

    </div>
  )
}

export default Hero