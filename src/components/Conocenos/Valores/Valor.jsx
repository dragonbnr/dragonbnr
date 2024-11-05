import React from 'react'
import Image from 'next/image';

function Valor({icono, texto}) {
  return (
    <div className="w-[165.70px] h-[74px] md:h-[100px] md:w-[220px] lg:w-[360px] lg:h-[150px] xl:w-[385px] text-black bg-white rounded-2xl border-l-2 border-[#ca1b2e] flex items-center z-10"
    >
      <div className="flex items-center pl-4 lg:gap-4 ">
        <div className="w-[37px] h-[40px] lg:w-[80px] lg:h-[90px] xl:w-[93px] xl:h-[100px] ">
        <Image 
        quality={100}
        src={icono} alt="icono" width={30} height={30} className='object-contain w-full h-full' />
        </div>
        <div className="mt-2 md:mt-0">

        <p className="text-[8px] md:text-[12px] lg:text-[20px] text-left h-[55px] md:h-full w-[93px] md:w-[150px] lg:w-[250px] lg:leading-[32px]">
          {texto}
        </p>
      </div>
      </div>

      </div>
  )
}

export default Valor