import { motion } from "framer-motion";
import Testimonial from "./Testimonials/Testimonial";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TestimonialsSection = () => {

  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const containerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(240);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScrollAmount(580);
      } else {
        setScrollAmount(260);
      }
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const testimonios = [
    {
      id: 1,
      nombre: "Ismael Serrano",
      puesto: "CEO Jaizmora Digital Media",
      description: "Dragon Black & Red ha sido clave para la seguridad de nuestra agencia. Son profesionales, eficientes y nos brindan la tranquilidad que necesitamos para enfocarnos en nuestro crecimiento. ¡Altamente recomendados!",
      image: "/images/home/testimonios/1.png"
    },
    {
      id: 2,
      nombre: "Luisa",
      puesto: "",
      description: "Excelente servicio, muy recomendado.",
      image: "/images/home/testimonios/1.png"
    },
    {
      id: 3,
      nombre: "Luisa",
      puesto: "",
      description: "Excelente servicio, muy recomendado.",
      image: "/images/home/testimonios/1.png"
    },
    {
      id: 4,
      nombre: "Luisa",
      puesto: "",
      description: "Excelente servicio, muy recomendado.",
      image: "/images/home/testimonios/1.png"
    },
  ]


  // Scroll event listener to handle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth);
      }
    };

    // Attach the scroll event listener
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

 // Scroll to the left
 const scrollLeft = () => {
  if (containerRef.current) {
    containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
};

// Scroll to the right
const scrollRight = () => {
  if (containerRef.current) {
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

  return (
    <div className="w-full h-auto flex flex-col relative justify-center items-center py-[37px] bg-black">
       {showLeftButton && (
        <button
          className='rounded-full bg-black w-[76px] h-[76px] flex items-center justify-center absolute left-0 top-0 bottom-0 my-auto z-20'
          onClick={scrollLeft}
        >
          <Image
            width={25}
            height={40}
            src="/images/iconos/flechader.svg"
            alt="arrow"
            className="w-[25px] h-[40px] rotate-180"
          />
        </button>
      )}

      {/* Right Scroll Button */}
      {showRightButton && (
        <button
          className='rounded-full bg-black w-[76px] h-[76px] flex items-center justify-center absolute right-0 top-0 bottom-0 my-auto z-20'
          onClick={scrollRight}
        >
          <Image
            width={25}
            height={40}
            src="/images/iconos/flechader.svg"
            alt="arrow"
            className="w-[25px] h-[40px]"
          />
        </button>
      )}
      <h1 className="mb-4 text-[26px] lg:text-[48px] text-center text-white">
        Opiniones de <span className="text-[#ca1b2e] ">nuestros clientes</span>
      </h1>
      <div className="w-full flex   gap-4 overflow-x-auto relative   no-scrollbar pl-4 "
      ref={containerRef}
      >
     
      {
        testimonios.map((testimonio) => (
          <Testimonial key={testimonio.id} testimonio={testimonio}/>
        ))
      }
      </div>
    </div>
  );
};

export default TestimonialsSection;
