import React from 'react'
import Link from 'next/link'

function BlackButton({texto, url}) {
  return (
    <Link href={url} className=" z-10">
    <div className="w-[102.11px] md:w-[150px] lg:w-[205px] h-[30.26px] md:h-[40px] lg:h-[61px] pl-[15.13px] pr-[17.98px] pt-[7.56px] pb-[6.69px] bg-black rounded-[10.09px] md:rounded-[14px] lg:rounded-[20px] justify-center items-center inline-flex z-10">
        <div className="text-[#fff9f9] text-xs md:text-[14px] lg:text-[24px]  leading-[15.13px]">{texto}</div>
    </div>
    </Link>
  )
}

export default BlackButton