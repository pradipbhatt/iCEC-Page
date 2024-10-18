import React, { useState } from 'react';
import logo from "/logo.png";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex w-full p-4 h-16 md:p-10 justify-between items-center bg-baseBackground z-50">
      {/* Logo Section */}
      <div>
        <a className="cursor-pointer" href="/">
          <img
            alt="logo"
            loading="lazy"
            width="120"
            height="120"
            decoding="async"
            className="w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20 object-cover transition-transform duration-300 ease-out hover:scale-110"
            src={logo}
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center lg:hidden">
        <button
          className="flex z-50 justify-center relative cursor-pointer items-center p-2 flex-col space-y-1 aspect-square hover:bg-hoverBgColor rounded transition-all"
          onClick={toggleMobileMenu}
        >
          <div className="w-6 h-[2px] bg-titleColor rounded block transition-all ease-out duration-300 -translate-y-0.5"></div>
          <div className="w-6 h-[2px] bg-titleColor rounded block transition-all ease-out duration-300 flex"></div>
          <div className="w-6 h-[2px] bg-titleColor rounded block transition-all ease-out duration-300 translate-y-0.5"></div>
        </button>
        <div
          className={`flex flex-col transition-all origin-right z-40 h-screen bg-white fixed top-0 right-0 w-2/3 sm:w-1/3 md:w-2/4 shadow-xl transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex-col mt-28 px-8 space-y-8 font-sans list-none">
            <li className="text-titleColor font-semibold transition cursor-pointer border-b-2 hover:text-hoverTextColor">
              <a className="flex gap-4" href="/">
                {/* SVG for Home */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Home
              </a>
            </li>
            <li className="relative">
              <div className="text-titleColor font-semibold transition-all cursor-pointer flex items-center gap-4 hover:text-hoverTextColor" onClick={() => toggleDropdown(1)}>
                {/* SVG for Our Team */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Our Team
                {dropdownOpen === 1 ? <FaCaretUp className="text-titleColor" /> : <FaCaretDown className="text-titleColor" />}
              </div>
              <ul className={`space-y-2 list-none transition-all ${dropdownOpen === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <li className="cursor-pointer border-b border-navSubitemBorder text-base hover:text-counterBackground">
                  <a href="/executive-committee">Executive Committee</a>
                </li>
                <li className="cursor-pointer border-b border-navSubitemBorder text-base hover:text-counterBackground">
                  <a href="/advisory-board">Advisory Board</a>
                </li>
              </ul>
            </li>
            <li className="text-titleColor font-semibold transition cursor-pointer border-b-2 hover:text-hoverTextColor">
              <a className="flex gap-4" href="/communities">
                {/* SVG for Communities */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round">
                  <path d="M18 21a8 8 0 0 0-16 0"></path>
                  <circle cx="10" cy="8" r="5"></circle>
                  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Communities
              </a>
            </li>
            <li className="relative">
              <div className="text-titleColor font-semibold transition-all cursor-pointer flex items-center gap-4 hover:text-hoverTextColor" onClick={() => toggleDropdown(2)}>
                {/* SVG for Publications */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen">
                  <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path>
                  <path d="M2 6h4"></path>
                  <path d="M2 10h4"></path>
                  <path d="M2 14h4"></path>
                  <path d="M2 18h4"></path>
                  <path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z"></path>
                </svg>
                Publications
                {dropdownOpen === 2 ? <FaCaretUp className="text-titleColor" /> : <FaCaretDown className="text-titleColor" />}
              </div>
              <ul className={`space-y-2 list-none transition-all ${dropdownOpen === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <li className="cursor-pointer border-b border-navSubitemBorder text-base hover:text-counterBackground">
                  <a href="/soe-express">SOE Express</a>
                </li>
              </ul>
            </li>
            <li className="text-titleColor font-semibold transition cursor-pointer border-b-2 hover:text-hoverTextColor">
              <a className="flex gap-4" href="/contact">
                {/* SVG for Contact */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                  <path d="M22 16.92a15.4 15.4 0 0 1-7.05-2.04A15.39 15.39 0 0 1 6.07 7.29a15.4 15.4 0 0 1 7.05-2.04A15.36 15.36 0 0 1 22 16.92z"></path>
                  <path d="M3 1v22"></path>
                </svg>
                Contact
              </a>
            </li>
            <li className="text-titleColor font-semibold transition cursor-pointer border-b-2 hover:text-hoverTextColor">
              <a className="flex gap-4" href="/apply">
                Apply to be a Member
              </a>
            </li>
            <li className="text-titleColor font-semibold transition cursor-pointer border-b-2 hover:text-hoverTextColor">
              <a className="flex gap-4" href="/testimonial">
               Testimonial
              </a>
            </li>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8">
        <a href="/" className="text-titleColor font-semibold hover:text-hoverTextColor transition">
          Home
        </a>
        <div className="relative group">
          <button className="text-titleColor font-semibold flex items-center gap-4 hover:text-hoverTextColor transition">
            Our Team
            <FaCaretDown className="text-titleColor" />
          </button>
          <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <li>
              <a href="/executive-committee" className="block px-4 py-2 text-base text-titleColor hover:bg-gray-100">
                Executive Committee
              </a>
            </li>
            <li>
              <a href="/advisory-board" className="block px-4 py-2 text-base text-titleColor hover:bg-gray-100">
                Advisory Board
              </a>
            </li>
          </ul>
        </div>
        <a href="/communities" className="text-titleColor font-semibold hover:text-hoverTextColor transition">
          Communities
        </a>
        <div className="relative group">
          <button className="text-titleColor font-semibold flex items-center gap-4 hover:text-hoverTextColor transition">
            Publications
            <FaCaretDown className="text-titleColor" />
          </button>
          <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <li>
              <a href="/soe-express" className="block px-4 py-2 text-base text-titleColor hover:bg-gray-100">
                SOE Express
              </a>
            </li>
          </ul>
        </div>
        <a href="/contact" className="text-titleColor font-semibold hover:text-hoverTextColor transition">
          Contact
        </a>
        <a href="/apply" className="text-titleColor font-semibold hover:text-hoverTextColor transition">
          Apply to be a Member
        </a>
        <a href="/testimonial" className="text-titleColor font-semibold hover:text-hoverTextColor transition">
          Testimonial
        </a>
        
      </div>
    </div>
  );
};

export default Navbar;