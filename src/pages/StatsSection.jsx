import React from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  return (
    <div className="bg-blue-500 py-8 mt-4 mb-4">
      <div className="container mx-auto flex flex-wrap justify-center text-white text-center">
        {/* Stat Item 1 */}
        <div className="w-full sm:w-1/4 mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300">
          <h2 className="text-5xl sm:text-4xl font-bold">
            <CountUp start={0} end={10} duration={2} />+
          </h2>
          <p className="mt-2 text-lg font-semibold">EVENTS</p>
        </div>
        {/* Stat Item 2 */}
        <div className="w-full sm:w-1/4 mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300">
          <h2 className="text-5xl sm:text-4xl font-bold">
            <CountUp start={0} end={5} duration={2} />+
          </h2>
          <p className="mt-2 text-lg font-semibold">COMMUNITIES</p>
        </div>
        {/* Stat Item 3 */}
        <div className="w-full sm:w-1/4 mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300">
          <h2 className="text-5xl sm:text-4xl font-bold">
            <CountUp start={0} end={5} duration={2} />+
          </h2>
          <p className="mt-2 text-lg font-semibold">WORKSHOPS</p>
        </div>
        {/* Stat Item 4 */}
        <div className="w-full sm:w-1/4 mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300">
          <h2 className="text-5xl sm:text-4xl font-bold">
            <CountUp start={0} end={150} duration={2} />+
          </h2>
          <p className="mt-2 text-lg font-semibold">MEMBERS</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
