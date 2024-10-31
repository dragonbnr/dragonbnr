import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white font-bold text-xl">
            <Image src="/images/logo.png" width={50} height={50} alt="logo" />
            </Link>
            <ul className="flex">
                <li>
                <Link href="/" className="text-white p-2">Inicio</Link>
                </li>
                <li>
                <Link href="/about" className="text-white p-2">Acerca de</Link>
                </li>
                <li>
                <Link href="/services" className="text-white p-2">Servicios</Link>
                </li>
                <li>
                <Link href="/contact" className="text-white p-2">Contacto</Link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar