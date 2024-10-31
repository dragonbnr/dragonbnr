import { motion } from "framer-motion";
import Testimonial from "./Testimonials/Testimonial";

const TestimonialsSection = () => {
  return (
    <div className="w-full h-auto flex flex-col relative justify-center items-center py-[37px] bg-black">
      <h1 className="mb-4 text-[26px] text-center text-white">
        Opiniones de <span className="text-[#ca1b2e] ">nuestros clientes</span>
      </h1>
      <Testimonial/>
    </div>
  );
};

export default TestimonialsSection;
