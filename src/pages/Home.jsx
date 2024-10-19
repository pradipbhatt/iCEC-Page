import { useState, useEffect } from "react";
import Banner from "./Banner";
import Intro from "./Intro";
import Community from "../components/Communities";
import StatsSection from "./StatsSection";
import President from "./President";
import Preloader from "../components/Preloader"; 
import Top from "../components/Top";
import ActivitiesSection from "./ActivitiesSection";


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
      <Top />
      {/* Other components or content */}
    </div>
  );
};

export default Home;
