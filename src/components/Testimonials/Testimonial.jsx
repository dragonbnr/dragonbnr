import React from 'react'

function Testimonial() {
  return (
    <div className="w-[568px] h-[244px] justify-center items-center inline-flex">
    <div className="w-[568px] h-[244px] bg-[#282828] rounded-[40px]" />
    <div className="w-[119px] h-[119px] justify-center items-center inline-flex">
        <img className="w-[119px] h-[119px] relative rounded-[20.23px]" src="https://via.placeholder.com/119x119" />
    </div>
    <div className="w-[200px] h-[38px] text-white text-2xl font-bold font-['Inter'] leading-[33.87px]">Ismael Serrano</div>
    <div className="w-[220px] h-[38px] text-white text-base font-light font-['Inter'] leading-[33.87px]">CEO Jaizmora Digital Media</div>
    <div className="w-[398px] h-[181px] text-white text-base font-light font-['Inter'] leading-[23px]">Dragon Black & Red ha sido clave para la seguridad de nuestra agencia. Son profesionales, eficientes y nos brindan la tranquilidad que necesitamos para enfocarnos en nuestro crecimiento. ¡Altamente recomendados!</div>
</div>
  )
}

export default Testimonial