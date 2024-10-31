import React from 'react'
import Image from 'next/image'

function Testimonial() {
  return (
    <div className="w-[232px] h-[99px] flex justify-center items-center  bg-[#282828] gap-3 px-1 rounded-[16px]">
  
    <div className="w-[48.61px] h-[48.61px] justify-center items-center inline-flex">
        <Image width={"119"} height={'119'} className="w-full h-full relative rounded-[20.23px]" src="" />
    </div>

    <div className="flex-col">
    <p className="w-[162px]  text-white  font-bold  text-[10px]">Ismael Serrano</p>
    <p className="w-[162px]  text-white font-light text-[6px] mb-2 ">CEO Jaizmora Digital Media</p>
    <p className="w-[162px]  text-white text-base font-light font-['Inter'] leading-[9px] text-[6px]">Dragon Black & Red ha sido clave para la seguridad de nuestra agencia. Son profesionales, eficientes y nos brindan la tranquilidad que necesitamos para enfocarnos en nuestro crecimiento. ¡Altamente recomendados!</p>
    </div>
</div>
  )
}

export default Testimonial