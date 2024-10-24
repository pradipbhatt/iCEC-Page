import { motion } from "framer-motion";
import pradip from "/pradip.jpg";

const President = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Image and Name Section with Animation */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full shadow-lg overflow-hidden">
            <img
              src={pradip}
              alt="President"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-lg font-semibold text-gray-500">President</p>
            <h3 className="text-2xl font-bold text-blue-900">
              Mr. Pradip Bhatt
            </h3>
          </div>
        </motion.div>

        {/* Text Section with Bold Typography */}
        <div className="flex flex-col items-center md:items-center md:w-2/3 text-center md:text-left">
          <motion.h2
            className="text-4xl font-bold text-blue-900 leading-tight mb-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our President
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed text-xl mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <strong className="block py-2 text-2xl">
              Welcome to Innovative Computer Engineering Club (ICEC-FWU)!
            </strong>
            Join us in shaping the future of ICT. Welcome to the ICEC-FWU
            family!
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed text-xl mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From 2023, ICEC-FWU has been at the forefront of ICT development.
            We provide a platform for students to explore technology, gain
            industry exposure, and enhance both their technical and soft skills.
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed text-xl mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ICEC-FWU is more than a club—it&lsquo;s a community where passion
            meets dreams, fostering growth and collaboration among tech
            enthusiasts. We laugh, we enjoy, and we grow together in ICEC-FWU.
            We believe in
            <strong>“ICEC-FWU for all since 2023”</strong>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default President;
