import React from 'react';
import { FaBullseye, FaLightbulb, FaUsers, FaHandsHelping } from 'react-icons/fa'; 
import logo from "/logo.png"; 

const OurValues = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-50 to-blue-100 px-6 sm:px-12 md:px-16 lg:px-20 rounded-lg shadow-md mx-auto mb-10">
      <div className="flex justify-center items-center mb-6">
        <img src={logo} alt="Club Logo" className="w-12 h-12 mr-3" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-titleColor font-bold text-center">
          Our Values
        </h2>
      </div>
      <p className="text-center mb-4 text-lg md:text-xl lg:text-2xl text-gray-700">
        At our IT Club, we believe in nurturing a community of passionate learners and innovators.
        We aim to provide an open platform that encourages collaboration, skill development, and personal growth among students.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Card 1: Our Mission */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <FaBullseye className="text-2xl text-blue-500 mr-2" /> 
            <h3 className="font-semibold text-xl text-titleColor">Our Mission</h3>
          </div>
          <p className="text-gray-700">
            Our mission is to empower students with the knowledge and practical experience they need to thrive in the tech industry. 
            We strive to foster a culture of innovation, continuous learning, and leadership through workshops, events, and mentorship programs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <FaLightbulb className="text-2xl text-yellow-500 mr-2" /> 
            <h3 className="font-semibold text-xl text-titleColor">What We Do</h3>
          </div>
          <p className="text-gray-700">
            We conduct regular training sessions, seminars, and tech talks to help students build hands-on experience. 
            By connecting with industry professionals, we create a bridge between academia and the tech industry, encouraging students to explore new horizons.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <FaUsers className="text-2xl text-green-500 mr-2" /> 
            <h3 className="font-semibold text-xl text-titleColor">Empowering Students</h3>
          </div>
          <p className="text-gray-700">
            We inspire students to embrace challenges, think creatively, and work collaboratively on innovative projects. 
            By participating in our club, students gain confidence in their abilities, take on leadership roles, and grow as individuals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105">
          <div className="flex items-center mb-4">
            <FaHandsHelping className="text-2xl text-red-500 mr-2" />
            <h3 className="font-semibold text-xl text-titleColor">Providing Opportunities</h3>
          </div>
          <p className="text-gray-700">
          Our club is dedicated to creating avenues for learning and growth. We regularly organize seminars, tech talks, and small bootcamps to help students deepen their technical knowledge and gain practical skills. By connecting with experts and professionals, we provide valuable insights into industry trends and emerging technologies, ensuring students stay updated and inspired.
           </p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
