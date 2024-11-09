import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="h-[452px] w-full flex justify-center items-center relative ">
         <div className='w-full h-full absolute z-0 '>
        <Image src={"/images/conocenos/hero/bg.png"}
        layout='fill'
        quality={100}
        objectFit='cover'
        objectPosition='center'
        alt="Background"
        />
      </div>
      <h1 className="text-white text-[40.51px] md:text-[60px] lg:text-[100px] font-semibold z-10 text-center leading-8 md:leading-[60px] lg:leading-[100px] ">
        Tu seguridad, <br/>
        nuestra <span className="text-[#ca1b2e]">prioridad</span>
        </h1>

    </div> 
  )
}

export default Hero