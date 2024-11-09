import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Cotizar = () => {
  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: custom, ease: "easeOut" },
    }),
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <div className="bg-gradient-to-b from-black to-red-900 text-white py-12 px-6 md:px-12 text-center">
      <motion.h2
        className="text-center text-[#ca1b2e] text-[22.67px] leading-[34px]"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
      >
        Obtén tu cotización a la medida
      </motion.h2>

      <motion.div
        className="w-full flex justify-center items-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
      >
        <Image src={"/images/logoletra.svg"} quality={100} width={340} height={38} alt="linea" />
      </motion.div>

      <motion.p
        className="mb-8 text-[10px] md:text-[18px] text-left md:text-center mt-6 lg:max-w-[500px] lg:mx-auto"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0.3}
      >
        Estamos comprometidos a brindarle un servicio de calidad y a crear una
        presencia en línea que refleje fielmente la esencia de su empresa.
        Agradecemos de antemano su colaboración y estamos emocionados de
        embarcarnos juntos en este viaje.
      </motion.p>

      <motion.form
        className="space-y-4 max-w-md mx-auto grid grid-cols-2 gap-x-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {[
          { name: "Nombre", type: "text", colSpan: "col-span-2" },
          { name: "Correo", type: "email", colSpan: "col-span-2 md:col-span-1" },
          { name: "Teléfono", type: "tel", colSpan: "col-span-2 md:col-span-1" },
          { name: "Servicio", type: "text", colSpan: "" },
          { name: "Tipo de empresa", type: "text", colSpan: "" },
        ].map((field, index) => (
          <motion.input
            key={field.name}
            type={field.type}
            placeholder={field.name}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white text-[7.26px] md:text-[10px] placeholder:text-center ${field.colSpan}`}
            custom={index * 0.1 + 0.4}
            variants={fadeInUp}
            whileFocus={{ scale: 1.03 }}
          />
        ))}

        <motion.textarea
          placeholder="Mensaje"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white text-[7.26px] md:text-[10px] placeholder:text-center h-32 resize-none col-span-2"
          custom={0.6}
          variants={fadeInUp}
          whileFocus={{ scale: 1.03 }}
        ></motion.textarea>

        <motion.p
          className="text-left md:text-center text-[10px] mt-4 col-span-2"
          variants={fadeInUp}
          custom={0.7}
        >
          Al enviar el formato estás aceptando nuestro{" "}
          Aviso de Privacidad, consúltalo{" "}
          <span className="text-red-500 hover:underline">
            aquí.
          </span>
        </motion.p>

        <motion.button
          type="submit"
          className="bg-red-500 text-white font-bold py-2 px-8 rounded-md hover:bg-red-600 mt-4 col-span-2"
          variants={fadeInUp}
          custom={0.8}
          whileHover={buttonHover}
        >
          Enviar
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Cotizar;
