// import React from 'react';
import Footer from "../components/Footer"

const Apply = () => {
  return (
   <>
     <div className="flex flex-col items-center justify-center py-10 px-6 bg-baseBackground h-screen">
      <h1 className="text-titleColor text-2xl md:text-3xl font-bold mb-4">
        Apply for Executive Positions
      </h1>
      <p className="text-primary text-lg md:text-xl text-center mb-6 max-w-lg">
        We are excited to announce that the application process for new executives will be opening soon!
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
        <h2 className="text-titleColor text-lg md:text-xl font-semibold mb-2">
          Important Notice
        </h2>
        <p className="text-primary text-base md:text-lg leading-relaxed mb-4">
          The new executives form will be released on <strong>December 1st, 2024</strong>. 
          Be sure to check back for updates and get ready to apply!
        </p>
        <p className="text-secondary text-sm md:text-base">
          Stay tuned for more information!
        </p>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Apply;
