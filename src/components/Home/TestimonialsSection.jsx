import { motion } from "framer-motion";
import Testimonial from "./Testimonials/Testimonial";

const TestimonialsSection = () => {

  const testimonios = [
    {
      id: 1,
      nombre: "Ismael Serrano",
      puesto: "CEO Jaizmora Digital Media",
      description: "Dragon Black & Red ha sido clave para la seguridad de nuestra agencia. Son profesionales, eficientes y nos brindan la tranquilidad que necesitamos para enfocarnos en nuestro crecimiento. ¡Altamente recomendados!",
      image: "/images/testimonios/1.png"
    },
    {
      id: 2,
      nombre: "Luisa",
      puesto: "",
      description: "Excelente servicio, muy recomendado.",
      image: "/images/testimonios/1.png"
    },
    {
      id: 3,
      nombre: "Luisa",
      puesto: "",
      description: "Excelente servicio, muy recomendado.",
      image: "/images/testimonios/1.png"
    },
  ]

  return (
    <div className="w-full h-auto flex flex-col relative justify-center items-center py-[37px] bg-black">
      <h1 className="mb-4 text-[26px] text-center text-white">
        Opiniones de <span className="text-[#ca1b2e] ">nuestros clientes</span>
      </h1>
      <div className="flex  justify-center gap-4 overflow-x-auto">
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
