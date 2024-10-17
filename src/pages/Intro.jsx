import React from 'react';
import { motion } from 'framer-motion';
import sfd from "../../public/sfd.jpeg";

const Intro = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-center text-blue-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            SOFTWARE FREEDOM DAY 2024
          </motion.h2>
          <motion.p 
            className="text-black leading-relaxed mb-4 text-lg font-serif"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-2xl font-semibold">
              Join us in celebrating open-source freedom!
            </span>
          </motion.p>
          <motion.p 
            className="text-gray-800 leading-relaxed mb-4 text-lg font-serif"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The Innovative Computer Engineering Club (iCEC-FWU) hosted a historic Software Freedom Day event. Together, we are fostering a community that values open-source, collaboration, and innovation.
          </motion.p>
          <motion.p 
            className="text-black leading-relaxed mb-4 text-lg font-serif"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            With participants from all over, iCEC-FWU is more than just a club—it’s a family united by a love for technology and a shared vision for the future.
          </motion.p>
          <motion.p 
            className="text-black leading-relaxed mb-4 text-lg font-serif"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Thank you to all our partners and attendees for making this event memorable. Here’s to open-source, to growth, and to the future of tech in Farwest Nepal.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex flex-col items-center">
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-lg shadow-[10px_10px_20px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={sfd}
              alt="Group Photo from Software Freedom Day 2024"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="text-center">
            <p className="text-lg font-semibold">Celebrating Together</p>
            <p className="text-xl font-bold">iCEC-FWU</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
