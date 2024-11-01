import React from 'react'
import Image from 'next/image';

function Valor({icono, texto}) {
  return (
    <div className="w-[165.70px] h-[74px] text-black bg-white rounded-2xl border-l-2 border-[#ca1b2e] flex items-center z-10"
    >
      <div className="flex items-center pl-4 ">
        <div className="w-[37px] h-[40px] ">
        <Image 
        quality={100}
        src={icono} alt="icono" width={30} height={30} />
        </div>
        <div className="mt-2">

        <p className="text-[8px] text-left h-[55px] w-[93px]">
          {texto}
        </p>
      </div>
      </div>

      </div>
  )
}

export default Valor