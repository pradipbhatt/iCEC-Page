import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Footer from './Footer';
import cs from "/security.png";
import js from "/js.png";
import webc from "/webc.jpg";
import python from "../../src/assets/python.png";

const CommunityCarousel = () => {
  const swiperRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null); 

  const nextImage = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevImage = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex-col space-y-6 p-6 h-full">
        <div className="flex-col relative">
          <h1 className="text-titleColor text-lg sm:text-2xl md:text-3xl font-bold text-center">
            Communities Active at ICEC
          </h1>
          <div className="py-6 px-14 relative">
            <Swiper
              ref={swiperRef}
              spaceBetween={20} // Increased space between slides
              slidesPerView={'auto'}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="swiper-container"
            >
              {[
                { img: python, title: 'Python Community' },
                { img: cs, title: 'Cyber Security Community' },
                { img: js, title: 'Javascript Community' },
                { img: webc, title: 'Web Development Community' },
              ].map((community, index) => (
                <SwiperSlide key={index} className="swiper-slide mb-4 bg-baseBackground">
                  <motion.div
                    className={`grid place-content-center place-items-center space-y-2 rounded w-full shadow-md p-4 h-[200px] card transition-all 
                      ${activeCard === index ? 'scale-105' : 'scale-100'} hover:bg-blue-100`} 
                    onClick={() => handleCardClick(index)}
                    whileHover={{ scale: 1.05 }} // Slightly increase scale on hover to prevent overlap
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: activeCard === index ? 1.1 : 1 }} 
                    transition={{ duration: 0.3 }} 
                  >
                    <img
                      src={community.img}
                      className="img-fluid transition-transform duration-300 shadow transition-shadow duration-300 hover:shadow-xl"
                      alt={community.title}
                      height="80"
                      width="80"
                      loading="lazy" // Lazy load the images
                    />
                    <motion.h1 
                      className="text-lg font-semibold text-center p-2 transition-colors duration-300 hover:text-primary"
                      whileHover={{ scale: 1.05 }} // Slightly scale the title on hover
                    >
                      {community.title}
                    </motion.h1>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
              <button
                onClick={prevImage}
                className="bg-light hover:bg-secondary text-dark rounded-circle p-1 shadow transition-transform duration-300 hover:scale-110"
                aria-label="Previous Slide"
              >
                <FaAngleLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
              <button
                onClick={nextImage}
                className="bg-light hover:bg-secondary text-dark rounded-circle p-1 shadow transition-transform duration-300 hover:scale-110"
                aria-label="Next Slide"
              >
                <FaAngleRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommunityCarousel;
