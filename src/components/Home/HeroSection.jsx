import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-section bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">Seguridad privada al límite</h1>
        <p className="text-lg mb-8">
          Protegemos lo que más te importa con soluciones de seguridad personalizadas y tecnología de vanguardia.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">Conócenos</button>
      </div>
    </motion.section>
  );
};

export default HeroSection;