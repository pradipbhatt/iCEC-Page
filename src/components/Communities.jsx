import  { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Footer from './Footer';
import cs from "/security.png";
import js from "/js.png";
import python from "../../src/assets/python.png";
import webc from "/webc.jpg"

const CommunityCarousel = () => {
  const swiperRef = useRef(null);

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

  return (
    <>
      <div className="flex-col space-y-6 p-6 h-full"> {/* Reduced space-y from 8 to 6 */}
        <div className="flex-col relative">
          <h1 className="text-titleColor text-lg sm:text-2xl md:text-3xl font-bold text-center">
            Communities Active at ICEC
          </h1>
          <div className="py-6 px-14 relative"> {/* Add relative positioning for the Swiper container */}
            <Swiper
              ref={swiperRef}
              spaceBetween={12}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="swiper-container"
            >
              <SwiperSlide className="swiper-slide mb-4 bg-baseBackground"> {/* Reduced margin bottom */}
                <div className="grid place-content-center place-items-center space-y-2 rounded w-full shadow-md p-4 h-[200px]"> {/* Make the inner div relative */}
                  <img
                    src={python}
                    stroke="currentColor"
                    strokeWidth="0"
                    role="img"
                    color="#666"
                    style={{ color: '#666' }}
                    height="80"
                    width="80"
                    alt="Python"
                  />
                  <h1 className="text-lg font-semibold text-center p-2"> {/* Reduced padding */}
                    Python Community
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide mb-4 bg-baseBackground"> {/* Reduced margin bottom */}
                <div className="grid place-content-center place-items-center space-y-2 rounded w-full shadow-md p-4 h-[200px]">
                  <img
                    src={cs}
                    stroke="currentColor"
                    strokeWidth="0"
                    role="img"
                    color="#666"
                    style={{ color: '#666' }}
                    height="80"
                    width="80"
                    alt=""
                  />
                  <h1 className="text-lg font-semibold text-center p-2"> {/* Reduced padding */}
                    Cyber Security Community
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide mb-4 bg-baseBackground"> {/* Reduced margin bottom */}
                <div className="grid place-content-center place-items-center space-y-2 rounded w-full shadow-md p-4 h-[200px]">
                  <img
                    src={js}
                    stroke="currentColor"
                   
                    strokeWidth="0"
                    role="img"
                    color="#666"
                    style={{ color: '#666' }}
                    height="80"
                    width="80"
                    alt=""
                  />
                  <h1 className="text-lg font-semibold text-center p-2">
                    Javascript Community
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide mb-4 bg-baseBackground"> {/* Reduced margin bottom */}
                <div className="grid place-content-center place-items-center space-y-2 rounded w-full shadow-md p-4 h-[200px]"> {/* Make the inner div relative */}
                  <img
                    src={webc}
                    stroke="currentColor"
                    strokeWidth="0"
                    role="img"
                    color="#666"
                    style={{ color: '#666' }}
                    height="100"
                    width="100"
                    alt="Python"
                  />
                  <h1 className="text-lg font-semibold text-center p-2"> {/* Reduced padding */}
                    Web Development Community
                  </h1>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Navigation buttons positioned within the Swiper container */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
              <button
                onClick={prevImage}
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
                aria-label="Previous Slide"
              >
                <FaAngleLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
              <button
                onClick={nextImage}
                className="bg-gray-200 hover:bg-gray-300 rounded-full p-1"
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
