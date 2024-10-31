import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="testimonials-section p-10 bg-gray-800 text-white"
    >
      <h2 className="text-4xl font-bold mb-6">Opiniones de nuestros clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="testimonial p-6 bg-gray-900 rounded-md">
          <h3 className="font-bold mb-2">Ismael Serrano</h3>
          <p>CEO de Jiacoma Digital Media</p>
          <p>Dragon Black & Red ha sido clave para la seguridad de nuestra agencia. Altamente recomendado.</p>
        </div>
        <div className="testimonial p-6 bg-gray-900 rounded-md">
          <h3 className="font-bold mb-2">Ismael Serrano</h3>
          <p>CEO de Jiacoma Digital Media</p>
          <p>Dragon Black & Red ha sido clave para la seguridad de nuestra agencia. Altamente recomendado.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;