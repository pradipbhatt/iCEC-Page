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
import Testimonial from '../components/Testimonial/Testimonial.';
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-background bg-grid-desktop bg-no-repeat bg-cover">
      <Banner />
      <Intro />
      <President />
      <Testimonial />
      <ActivitiesSection />
      <StatsSection />
      <Community />
      {/* Uncomment the Footer if needed */}
      {/* <Footer /> */}
      <Top />
      {/* Other components or content */}
    </div>
  );
};

export default Home;
