import { motion } from "framer-motion";
import sfd from "/sfd.jpeg";

const Intro = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.h2
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            SOFTWARE FREEDOM DAY 2024
          </motion.h2>
          <motion.p
            className="text-gray-800 text-2xl leading-relaxed mb-6 font-light text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Join us in celebrating open-source freedom!
            </span>
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed text-xl mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The Innovative Computer Engineering Club (ICEC-FWU) hosted a historic Software Freedom Day event. Together, we are fostering a community that values open-source, collaboration, and innovation.
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed text-xl mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

            With participants from all over, ICEC-FWU is more than just a club—it’s a family united by a love for technology and a shared vision for the future.
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed text-xl mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Thank you to all our partners and attendees for making this event
            memorable. Here&lsquo;s to open-source, to growth, and to the future
            of tech in Farwest Nepal.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg flex items-center justify-center overflow-hidden mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={sfd}
              alt="Group Photo from Software Freedom Day 2024"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
          <div className="text-center">
            <p className="text-lg font-semibold">Celebrating Together</p>
            <p className="text-xl font-bold">ICEC-FWU</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
