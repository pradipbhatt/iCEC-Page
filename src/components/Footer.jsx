import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-baseBackground text-gray-800 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Contact Information with Social Icons */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:icecfwu@fwu.edu.np" 
                  className="text-base md:text-lg hover:underline hover:text-blue-600 transition-colors duration-300">
                  icecfwu@fwu.edu.np
                </a>
              </li>
              <li>
                <a 
                  href="tel:+9779810652734" 
                  className="text-base md:text-lg hover:underline hover:text-blue-600 transition-colors duration-300">
                  +977 9810652734
                </a>
              </li>
              <li className="text-base md:text-lg">
                iCEC-FWU Bidhan, Mahendranagar, Nepal
              </li>
            </ul>
            {/* Social Icons */}
            <div className="mt-6 flex space-x-4 justify-center md:justify-start">
              <a 
                href="https://www.facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-500 transition-colors duration-300">
                <FaFacebookF size={24} />
              </a>
              <a 
                href="https://twitter.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a 
                href="https://www.instagram.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-500 hover:text-pink-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-700 hover:text-blue-600 transition-colors duration-300">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Apply to Be a Member */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Join Us</h3>
            <p className="text-base md:text-lg mb-4">
              We are always looking for passionate individuals to join our community. If you're interested in becoming a member, reach out to us via email or visit our website to learn more about the application process.
            </p>
            <a 
              href="mailto:icecfwu@fwu.edu.np" 
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Apply Now
            </a>
          </div>

          {/* Code of Conduct */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Code of Conduct</h3>
            <p className="text-base md:text-lg mb-4">
              To ensure a respectful and productive environment, we ask all members to adhere to our code of conduct. This helps us maintain a supportive and collaborative community for everyone.
            </p>
            <a 
              href="/code-of-conduct" 
              className="text-blue-600 hover:text-blue-700 underline transition-colors duration-300">
              Learn More
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-600">
            © 2024 Innovative Computer Engineering Club (iCEC-FWU). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
