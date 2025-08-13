import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurTeam from './components/Ourteam';
import Communities from './components/Communities';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Apply from './components/Apply';
import Executives from './components/Executives';
import Executives2 from './components/Executives2';
import Advisory from "./components/Advisory";
import Soeexpress from './components/Soeexpress';
import Testimonial from './components/Testimonial/Testimonial.';
import Events from './components/Events';
// import Login from './components/Login/Login';
// import Registration from './components/Registration/Registration';
// import ForgotPassword from "./components/ResetPass/ResetPassword";
// import Profile from './components/Profile';
import './App.css'
import PageNotFound from './components/PageNotFound';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        {/* foe the executive commette */}
        <Route path="/executive-committee" element={<Executives />} />
        <Route path="/executive-committee2" element={<Executives2 />} />
        <Route path="/advisory-board" element={<Advisory />} />

        {/* soe express */}
        <Route path="/soe-express" element={<Soeexpress />} />



        <Route path="/apply" element={<Apply />} />



        <Route path="/testimonial/" element={<Testimonial />} />
        <Route path = "/events" element={<Events />} />

        {/* <Route path="/login" element={<Login/>}/> */}
        {/* <Route path="/registration" element={<Registration/>}/> */}
        {/* <Route path="/forgot-password" element={<ForgotPassword/>}/> */}
        {/* <Route path="/profile" element={<Profile/>}/> */}
         {/* Add a route for Page Not Found */}
         <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
