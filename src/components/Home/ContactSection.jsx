// Example of ContactSection.js (components/ContactSection.js)

import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact-section bg-black text-white p-10"
    >
      <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
      <p className="mb-4">Contamos con personal de seguridad altamente capacitado.</p>
      <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">Contactar</button>
    </motion.section>
  );
};

export default ContactSection;