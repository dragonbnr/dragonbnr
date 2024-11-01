import React from 'react'
import Link from 'next/link'

function RedButton({texto, url}) {
  return (
    <Link href={url} className=" z-10">
<div className="w-[102.11px] h-[30.26px] pl-[15.13px] pr-[17.98px] pt-[7.56px] pb-[6.69px] bg-[#ca1b2e] rounded-[10.09px] justify-center items-center inline-flex z-10">
    <div className="text-[#fff9f9] text-xs  leading-[15.13px]">{texto}</div>
</div>
</Link>
  )
}

export default RedButton