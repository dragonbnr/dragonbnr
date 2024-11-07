import React from 'react'
import Image from 'next/image'

function Testimonial({testimonio}) {
  return (
    <div className="w-[232px]  lg:w-[568px] h-[99px] lg:h-[244px] flex justify-center items-center  bg-[#282828] gap-3 pl-4 rounded-[16px]">
  
    <div className="w-[48.61px] h-[48.61px] justify-center items-center inline-flex">
        <Image width={"119"} height={'119'} quality={100}className="w-full h-full relative rounded-[20.23px] object-contain" src={testimonio?.image}
        alt='Testimonio'
        />
    </div>

    <div className="w-full flex-col">
    <p className="w-[162px] lg:w-full  text-white  font-bold  text-[10px] lg:text-[24px]">{testimonio?.nombre}</p>
    <p className="w-[162px]  text-white font-light text-[6px] mb-2 ">{testimonio?.puesto}</p>
    <p className="w-[162px]  text-white  leading-[9px] lg:leading-[23px] text-[6px] lg:text-[16px]">{testimonio?.description}</p>
    </div>
</div>
  )
}

export default Testimonial