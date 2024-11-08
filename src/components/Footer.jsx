// components/Footer.js
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
    <footer className="lg:hidden bg-black text-white py-8 px-4 text-center">
      <div className="max-w-screen-lg mx-auto">
        <Image
          src="/images/logo.png" // Reemplaza con la ruta de tu logo
          width={150}
          height={150}
          quality={100}
          alt="Dragon Black & Red"
          className="mx-auto mb-4"
        />
        <p className="font-bold text-xl">Dragon Black & Red</p>
        <p className="text-sm italic">
          Seguridad privada al límite S.A. de C.V.
        </p>
        <nav className="mt-6 mb-8 space-y-2">
          <Link href="/" className="block hover:underline">
            Inicio
          </Link>
          <Link href="/Conocenos" className="block hover:underline">
            Conócenos
          </Link>
          <div className="">
            <Link href="/Conocenos" className="block hover:underline">
              ¿Quiénes somos?
            </Link>
            <Link href="/Conocenos#mision" className="block hover:underline">
              Misión
            </Link>
            <Link href="/Conocenos#vision" className="block hover:underline">
              Visión
            </Link>
            <Link href="/Conocenos#valores" className="block hover:underline">
              Valores
            </Link>
          </div>
          <Link href="/Servicios" className="block hover:underline">
            Servicios
          </Link>
          <div className="ml-4">
            <Link href="/Servicios/Guardias" className="block hover:underline">
              Guardias intramuros
            </Link>
            <Link
              href="/Servicios/Dispositivos"
              className="block hover:underline"
            >
              Dispositivos electrónicos
            </Link>
          </div>
          <Link href="/Certificaciones" className="block hover:underline">
            Certificaciones
          </Link>
          <Link href="#contactanos" className="block hover:underline">
            Contáctanos
          </Link>
        </nav>

        <address className="text-sm mb-6">
          Soria 14 - Segundo Piso, Oficina 302 B, <br />
          Colonia Álamos, Benito Juárez, 03400, CDMX.
        </address>

        <a
          href="mailto:dragonblackandredsegprivada@hotmail.com"
          className="block text-red-500 mb-4 hover:underline"
        >
          dragonblackandredsegprivada@hotmail.com
        </a>

        <div className="flex flex-col mb-4">
          <p className="text-sm mb-2">Teléfonos oficina:</p>
          <a href="tel:5593722345">55 9372 2345</a>
          <a href="tel:5593723664">55 9372 3664</a>
          <a href="tel:5594290611">55 9429 0611</a>
          <a href="tel:5594290624">55 9429 0624</a>
        </div>

        <a
          href="https://wa.me/525527263187"
          className="text-sm mb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp: <br/> 55 2726 3187
        </a>

        <p className="text-sm my-4">
          Horario de atención:<br/> Lunes a Viernes de 9:00 a 18:00 hrs.
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-xl hover:text-gray-400" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-gray-400" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-xl hover:text-gray-400" />
          </a>
        </div>

        <p className="text-xs mb-2 pt-4 border-t-2 border-white/20">
          Dragon Black & Red S.A. de C.V. - México, {new Date().getFullYear()}
        </p>
        <a href="#aviso" className="text-xs hover:underline">
          Aviso de Privacidad
        </a>

        <p className="text-xs mt-2">
          Sitio desarrollado por{" "}
          <a
            href="https://jaizmora.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Jaizmora Digital Media
          </a>
        </p>
      </div>
    </footer>
    <footer className="bg-black text-white py-8 px-4 text-center md:text-left hidden lg:block">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo y Contacto */}
        <div className="space-y-4">
          <Image
            src="/images/logo.png" // Reemplaza con la ruta de tu logo
            alt="Dragon Black & Red Logo"
            width={100}
            height={100}
          />
         
          <address className="text-sm not-italic">
            Soria 14 - Segundo Piso. <br/> Oficina 302 B,
            Colonia Álamos, <br/>  Benito Juárez, 03400, CDMX.
          </address>
          <p className="text-red-500">Contáctanos</p>
          <a href="mailto:dragonblackandredsegprivada@hotmail.com" className="block text-sm">
            dragonblackandredsegprivada@hotmail.com
          </a>
         <p className="text-sm">
    Teléfonos oficina:<br />
    <a href="tel:+525593722345" className="text-sm">55 9372 2345</a> / <a href="tel:+525593723664" className="text-sm">55 9372 3664</a><br />
    <a href="tel:+525594290611" className="text-sm">55 9429 0611</a> / <a href="tel:+525594290624" className="text-sm">55 9429 0624</a>
  </p>
  <p>
    <a href="https://wa.me/525527263187" target="_blank" rel="noopener noreferrer">
      WhatsApp: 55 2726 3187
    </a>
  </p>
          <p className="text-sm">Horario de atención: <br/> Lunes a Viernes de 9:00 a 18:00 hrs.</p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col justify-center space-y-4">
          
          <ul className="text-sm space-y-2">
          <Link href="/" className="block hover:underline">
            Inicio
          </Link>
          <Link href="/Conocenos" className="block hover:underline">
            Conócenos
          </Link>
            <Link href="/Conocenos" className="block hover:underline">
              ¿Quiénes somos?
            </Link>
            <Link href="/Conocenos#mision" className="block hover:underline">
              Misión
            </Link>
            <Link href="/Conocenos#vision" className="block hover:underline">
              Visión
            </Link>
            <Link href="/Conocenos#valores" className="block hover:underline">
              Valores
            </Link>
          <Link href="/Servicios" className="block hover:underline">
            Servicios
          </Link>
            <Link href="/Servicios/Guardias" className="block hover:underline">
              Guardias intramuros
            </Link>
            <Link
              href="/Servicios/Dispositivos"
              className="block hover:underline"
            >
              Dispositivos electrónicos
            </Link>
          <Link href="/Certificaciones" className="block hover:underline">
            Certificaciones
          </Link>
          <Link href="#contactanos" className="block hover:underline">
            Contáctanos
          </Link>
          </ul>
        </div>
      </div>
       {/* Aviso de Privacidad y Redes Sociales */}
       <div className="flex justify-between items-center border-t-2 mt-4 border-white/20 ">
        <div className="flex items-center mt-4 gap-4 ">
          <span className="text-md">
            Dragon Black & Red S.A. de C.V.
          </span>
          <span>
            México, {new Date().getFullYear()}
            </span>
          <a href="#aviso-de-privacidad" className="text-md hover:underline">
            Aviso de Privacidad
          </a>
          </div>
         
          <div className="flex space-x-4  justify-center md:justify-start items-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl hover:text-gray-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-xl hover:text-gray-400" />
            </a>
          </div>
        </div>
        <div>
        <p className="text-xs mt-4 ">
            Sitio desarrollado por{" "}
            <a href="https://jaizmora.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Jaizmora Digital Media
            </a>
          </p>
          </div>
    </footer>
    </>
  );
};

export default Footer;
