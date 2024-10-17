import { useState } from 'react';
import logoImage from "/logo.png";
import { FaCaretDown, FaCaretUp, FaTimes } from 'react-icons/fa';
import "./NavBar.css"

const NavBar = () =>
{
  const [dropState, setDropState] = useState(null);
  const [menuState, setMenuState] = useState(false);

  const handleDropToggle = (idx) =>
  {
    setDropState(dropState === idx ? null : idx);
  };

  const handleMenuToggle = () =>
  {
    setMenuState(!menuState);
  };

  return (
    <div className="flex w-full p-4 h-16 md:p-10 justify-between items-center bg-baseBackground z-50">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <a className="cursor-pointer" href="/">
          <img
            alt="logo"
            width="84"
            height="84"
            className="w-16 h-16 sm:w-17 sm:h-17 md:w-20 md:h-20 lg:w-20 lg:h-20 object-contain transition-transform duration-300 ease-out hover:scale-110"
            src={logoImage}
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center lg:hidden">
        <button
          className="flex z-50 justify-center relative cursor-pointer items-center p-2 flex-col space-y-1 aspect-square hover:bg-hoverBgColor rounded transition-all outline-none focus:outline-none border-none shadow-none"
          onClick={handleMenuToggle}
        >
          {menuState ? (
            <FaTimes className="w-8 h-8 text-titleColor" />
          ) : (
            <>
              <div className="w-6 h-[2px] bg-titleColor rounded block transition-all ease-out duration-300 -translate-y-0.5"></div>
              <div className="w-6 h-[2px] bg-titleColor rounded block transition-all ease-out duration-300"></div>
              <div className="w-6 h-[2px] bg-titleColor rounded block transition-all ease-out duration-300 translate-y-0.5"></div>
            </>
          )}
        </button>

        <div
          className={`flex flex-col transition-all origin-right z-40 h-screen bg-white fixed top-0 right-0 w-2/3 sm:w-1/3 md:w-2/4 shadow-xl transform ${menuState ? 'translate-x-0' : 'translate-x-full'
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
              <div className="text-titleColor font-semibold transition-all cursor-pointer flex items-center gap-4 hover:text-hoverTextColor" onClick={() => handleDropToggle(1)}>
                {/* SVG for Our Team */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Our Team
                {dropState === 1 ? <FaCaretUp className="text-titleColor" /> : <FaCaretDown className="text-titleColor" />}
              </div>
              <ul className={`space-y-2 list-none transition-all ${dropState === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
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
              <div className="text-titleColor font-semibold transition-all cursor-pointer flex items-center gap-4 hover:text-hoverTextColor" onClick={() => handleDropToggle(2)}>
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
                {dropState === 2 ? <FaCaretUp className="text-titleColor" /> : <FaCaretDown className="text-titleColor" />}
              </div>
              <ul className={`space-y-2 list-none transition-all ${dropState === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <li className="cursor-pointer border-b border-navSubitemBorder text-base hover:text-counterBackground">
                  <a href="/soe-express">SOE Express</a>
                </li>
              </ul>
            </li>
            <li className="text-titleColor font-semibold transition cursor-pointer border-b-2 hover:text-hoverTextColor">
              <a className="flex gap-4" href="/contact">
                {/* SVG for Contact */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                  <path d="M22 16.92a3 3 0 0 1-1.09 2.38A19.7 19.7 0 0 1 12 21c-2.75 0-5.38-.48-7.86-1.38A3 3 0 0 1 2 16.92c0-2.25 1-4.32 2.67-5.7a3 3 0 0 1 3.35-.08C11.67 11.68 16 16 16 16z"></path>
                  <path d="M17.5 3a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 6.5 3h11z"></path>
                </svg>
                Contact Us
              </a>
            </li>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center font-semibold text-titleColor">
        <nav className="flex space-x-6">
          <a className="hover-underline" href="/">Home</a>
          <div className="relative">
            <div className="flex items-center gap-4 hover-underline cursor-pointer" onClick={() => handleDropToggle(1)}>
              Our Team
              {dropState === 1 ? <FaCaretUp className="text-titleColor" /> : <FaCaretDown className="text-titleColor" />}
            </div>
            <ul className={`absolute left-0 mt-2 bg-white shadow-md transition-all ${dropState === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <li className="p-2 hover-underline cursor-pointer"><a href="/executive-committee">Executive Committee</a></li>
              <li className="p-2 hover-underline cursor-pointer"><a href="/advisory-board">Advisory Board</a></li>
            </ul>
          </div>
          <a className="hover-underline" href="/communities">Communities</a>
          <div className="relative">
            <div className="flex items-center gap-4 hover-underline cursor-pointer" onClick={() => handleDropToggle(2)}>
              Publications
              {dropState === 2 ? <FaCaretUp className="text-titleColor" /> : <FaCaretDown className="text-titleColor" />}
            </div>
            <ul className={`absolute left-0 mt-2 bg-white shadow-md transition-all ${dropState === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <li className="p-2 hover-underline cursor-pointer"><a href="/soe-express">SOE Express</a></li>
            </ul>
          </div>
          <a className="hover-underline" href="/contact">Contact Us</a>
          <a className="hover-underline" href="/apply">Apply to be a Member</a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
