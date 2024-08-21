import React from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  return (
    <div className="bg-blue-500 py-8 mt-4 mb-4">
      <div className="container mx-auto flex flex-wrap justify-around text-white text-center">
        <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
          <h2 className="text-4xl font-semibold">
            <CountUp start={0} end={10} duration={2} />+
          </h2>
          <p className="mt-2 text-lg">EVENTS</p>
        </div>
        <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
          <h2 className="text-4xl font-semibold">
            <CountUp start={0} end={5} duration={2} />+
          </h2>
          <p className="mt-2 text-lg">COMMUNITIES</p>
        </div>
        <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
          <h2 className="text-4xl font-semibold">
            <CountUp start={0} end={5} duration={2} />+
          </h2>
          <p className="mt-2 text-lg">WORKSHOPS</p>
        </div>
        <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
          <h2 className="text-4xl font-semibold">
            <CountUp start={0} end={150} duration={2} />+
          </h2>
          <p className="mt-2 text-lg">MEMBERS</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
