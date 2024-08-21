import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurTeam from './components/Ourteam';
import Communities from './components/Communities';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Apply from './components/Apply';
import Executives from './components/Executives';
import Advisory from "./components/Advisory";
import Soeexpress from './components/Soeexpress';

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
        <Route path="/executive-committee" element={<Executives />} />
        <Route path="/advisory-board" element={<Advisory />} />
        <Route path="/soe-express" element={<Soeexpress />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
};

export default App;
