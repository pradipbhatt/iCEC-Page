import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

const Banner = () => {
  return (
    <section className="bg-background py-12 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center md:flex-row md:items-start">
        {/* Logo Section */}
        <motion.div
          className="flex justify-center md:w-1/3 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
           src="https://www.soenotes.com/assets/logo-icec-COfn0a5B.png"
            alt="ICEC Logo"
            className="object-contain max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
            width="640"
            height="521"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col items-center md:items-start md:w-2/3"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6 md:space-y-8 max-w-[80ch] mx-auto">
          <h2 className="text-primary font-semibold text-base sm:text-lg md:text-xl text-center lg:text-start font-inter leading-[24px]">
              Since 2023, The first student Computer club
            </h2>
            <h1 className="text-[#1e3a8a] text-[30px] leading-[36px] text-start font-bold font-inter">
             Innovative Computer Engineering Club
            </h1>
            <p className="text-primary text-base md:text-lg leading-[24px] text-justify font-inter">
            A community driven club with the aim of helping and providing  Computer Engineering students with all the necessary skills to succeed in their career. Every semester we make it our goal to have unique events for our club members. Come and join us for one of our exciting events!
            </p>
            <a className="flex justify-center lg:justify-start" href="/contact">
              <Button>
                CONTACT US
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
