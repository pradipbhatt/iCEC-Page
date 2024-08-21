import React, { useState, useEffect } from 'react';
import Banner from './Banner'; // Adjust the path according to where Banner.jsx is located
import Intro from './Intro';
import Community from '../components/Communities';
import StatsSection from './StatsSection';
import President from './President';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader'; // Adjust the path according to where Preloader.jsx is located
import Top from '../components/Top';
import ActivitiesSection from './ActivitiesSection';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <Banner />
      <Intro />
      <President />
      <ActivitiesSection/>
      <StatsSection />
      <Community />
      {/* <Footer /> */}
      <Top/>
      {/* Other components or content */}
    </div>
  );
};

export default Home;
