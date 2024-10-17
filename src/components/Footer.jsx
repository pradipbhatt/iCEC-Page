import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-8 md:">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Information with Social Icons */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:icecfwu@fwu.edu.np" 
                  className="text-base md:text-lg hover:underline hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  icecfwu@fwu.edu.np
                </a>
              </li>
              <li>
                <a 
                  href="tel:+9779810652734" 
                  className="text-base md:text-lg hover:underline hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  +977 9810652734
                </a>
              </li>
              <li className="text-base md:text-lg">
                iCEC-FWU, Mahendranagar, Nepal
              </li>
            </ul>
            {/* Social Icons */}
            <div className="mt-6 flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-700 hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Join Us Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Join Us</h3>
            <p className="text-base md:text-lg mb-6">
              We are always looking for passionate individuals to join our community. If you're interested in becoming a member, reach out to us via email or visit our website to learn more about the application process.
            </p>
            <motion.a 
              href="mailto:icecfwu@fwu.edu.np" 
              className="inline-block bg-blue-600 text-white px-4 md:px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.a>
          </motion.div>

          {/* Code of Conduct */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Code of Conduct</h3>
            <p className="text-base md:text-lg mb-6">
              To ensure a respectful and productive environment, we ask all members to adhere to our code of conduct. This helps us maintain a supportive and collaborative community for everyone.
            </p>
            <motion.a 
              href="/code-of-conduct" 
              className="text-blue-600 hover:text-blue-700 underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-sm">
            © 2024 Innovative Computer Engineering Club (iCEC-FWU). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
