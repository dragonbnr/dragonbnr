import React from 'react'
import Image from 'next/image';

function Valor({icono, texto}) {
  return (
    <div className="w-[165.70px] h-[74px] md:h-[100px] md:w-[220px] text-black bg-white rounded-2xl border-l-2 border-[#ca1b2e] flex items-center z-10"
    >
      <div className="flex items-center pl-4 ">
        <div className="w-[37px] h-[40px] ">
        <Image 
        quality={100}
        src={icono} alt="icono" width={30} height={30} />
        </div>
        <div className="mt-2 md:mt-0">

        <p className="text-[8px] md:text-[12px] text-left h-[55px] md:h-full w-[93px] md:w-[150px]">
          {texto}
        </p>
      </div>
      </div>

      </div>
  )
}

export default Valor