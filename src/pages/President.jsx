import React from 'react';
import pradip from "../../public/pradip.jpg"

const President = () => {
  return (
    <section className="bg-transparent py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-600 mb-6 font-sans">
            OUR PRESIDENT
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4 text-lg font-serif">
            <span className="text-2xl font-semibold">Welcome to Innovative Computer Engineering Club (iCEC-FWU)!</span>
          </p>
          <p className="text-black leading-relaxed mb-4 text-lg font-serif">
            Join us in shaping the future of ICT. Welcome to the iCEC-FWU family!
          </p>
          <p className="text-black leading-relaxed mb-4 text-lg font-serif">
            From 2023, i-CEC-FWU has been at the forefront of ICT development. We provide a platform for students to explore technology, gain industry exposure, and enhance both their technical and soft skills.
          </p>
          <p className="text-black leading-relaxed mb-4 text-lg font-serif">
            i-CEC-FWU is more than a club—it's a community where passion meets dreams, fostering growth and collaboration among tech enthusiasts. We laugh, we enjoy, and we grow together in i-CEC-FWU. We believe in <strong>"i-CEC-FWU for all since 2023."</strong>
          </p>
          {/* Removed the Sayonara message */}
        </div>
        {/* Image and Name Section */}
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden mb-4">
            <img
              src={pradip} // Replace with the actual image path
              alt="President"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">iCEC-FWU President</p>
            <p className="text-xl font-bold">Pradip Bhatt</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default President;
