import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="w-full h-[78px] flex justify-between items-center px-4 md:px-10 relative max-w-[1440px] min-w-sm mx-auto bg-black">
        {/* Logo */}
        <div className="relative z-10 w-[34px] h-[48.86px]">
          <Image src="/images/logo.png" quality={100} width={150} height={150} alt="Logo" className="w-[34px] h-[48.86px] object-cover  " />
        </div>

        {/* Ícono del menú en versión móvil */}
        <div className="lg:hidden">
          <FaBars
            className="text-xl cursor-pointer"
            onClick={toggleMenu}
            style={{ color: "white" }}
          />
        </div>

        {/* Enlaces del centro para versión de escritorio */}
        <div className="hidden lg:flex gap-x-6 font-anton uppercase absolute left-1/2 transform -translate-x-1/2 text-white">
        <Link
              href="/"
              className={router.pathname === "/" ? "font-bold" : ""}
            >
              Inicio
            </Link>
            <Link
              href="/Conocenos"
              className={router.pathname === "/Conocenos" ? "font-bold" : ""}
            >
              Conocenos
            </Link>
            <Link
              href="/Servicios"
              className={router.pathname === "/Servicios" ? "font-bold" : ""}
            >
              Servicios
            </Link>
            <Link
              href="/Certificaciones"
              className={
                router.pathname === "/Certificaciones" ? "font-bold" : ""
              }
            >
              Certificaciones
            </Link>
            <Link
              href="/Contacto"
              className={router.pathname === "/Contacto" ? "font-bold" : ""}
            >
              Contáctanos
            </Link>
        </div>

        {/* Menú móvil */}
        <div
          className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center   z-50 p-6 transition-transform transform ${
            menuOpen ? "translate-x-0 bg-gradient-to-b from-black to-[#CA1B2ED9]" : "-translate-x-full"
          } overflow-y-auto `}
        >
          {/* Botón para cerrar el menú */}
          <div className="flex justify-end mr-4">
            <FaTimes
              className="text-[30px] cursor-pointer text-white "
              onClick={toggleMenu}
            />
          </div>

          {/* Logo */}
          <div className="w-full flex justify-center ">
            <Image src="/images/logo.png" quality={100} width={156} height={161} alt="Logo" />
          </div>

          {/* Enlaces del menú móvil */}
          <div className="mt-8 flex flex-col space-y-[15px] text-[26px] text-white text-center ">
            <Link
              href="/"
              onClick={toggleMenu}
              className={router.pathname === "/" ? "font-bold" : ""}
            >
              Inicio
            </Link>
            <Link
              href="/Conocenos"
              onClick={toggleMenu}
              className={router.pathname === "/Conocenos" ? "font-bold" : ""}
            >
              Conocenos
            </Link>
            <Link
              href="/Servicios"
              onClick={toggleMenu}
              className={router.pathname === "/Servicios" ? "font-bold" : ""}
            >
              Servicios
            </Link>
            <Link
              href="/Certificaciones"
              onClick={toggleMenu}
              className={
                router.pathname === "/Certificaciones" ? "font-bold" : ""
              }
            >
              Certificaciones
            </Link>
            <Link
              href="/Contacto"
              onClick={toggleMenu}
              className={router.pathname === "/Contacto" ? "font-bold" : ""}
            >
              Contáctanos
            </Link>

            <div className="w-full flex justify-center items-center">
              <div className="w-[90%] h-[1px] border-[0.5px] border-white/40" />
            </div>

            {/* Íconos de redes sociales */}
            <div className="flex justify-center space-x-6 mt-8">
              <Image
              quality={100}
                src={"/images/iconos/fb.png"}
                width={"34"}
                height={"34"}
                className="cursor-pointer"
              />
              <Image
              quality={100}
                src={"/images/iconos/instagram.png"}
                width={"34"}
                height={"34"}
                className="cursor-pointer"
              />
              <Image
              quality={100}
                src={"/images/iconos/linkedin.png"}
                width={"34"}
                height={"34"}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
