import { motion } from 'framer-motion';

const SolucionesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="services-section bg-red-700 text-white p-10"
    >
      <h2 className="text-4xl font-bold mb-6">Soluciones adaptadas a tus necesidades</h2>
      <p className="text-xl mb-4">Explora nuestros servicios diseñados para reforzar tu protección hoy mismo.</p>
      <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">Ver Servicios</button>
    </motion.section>
  );
};

export default SolucionesSection;