import { motion } from "framer-motion";
import Button from "../components/Button";
import logo from "/logo.png"

const Banner = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logo}
            alt="ICEC Logo"
            className="object-contain max-w-[250px] md:max-w-[350px] lg:max-w-[400px]"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col items-center md:items-start md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-8 max-w-[70ch]">
            <h2 className="text-titleColor text-base md:text-lg font-medium uppercase tracking-wide font-poppins">
              Since 2023, The First Student Computer Club
            </h2>
            
            <h1 className="text-titleColor text-3xl md:text-5xl font-extrabold font-poppins leading-10">
              Innovative Computer Engineering Club
            </h1>

            <p className="text-textColor text-lg md:text-xl leading-relaxed font-inter">
              A community-driven club that empowers Computer Engineering
              students with the skills they need to succeed. Join us for unique
              events each semester and be a part of an exciting journey!
            </p>
            <a className="flex justify-center md:justify-center" href="/contact">
              <Button>Contact Us</Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
