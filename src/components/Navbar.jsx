import { useState } from 'react';
import logoImage from "/logo.png";
import { FaCaretDown, FaCaretUp, FaTimes } from 'react-icons/fa';
import "./NavBar.css";

const Navbar = () => {
  const [dropState, setDropState] = useState(null); // Control dropdowns for mobile
  const [menuState, setMenuState] = useState(false); // Mobile menu toggle
  const [homeDropDown, setHomeDropDown] = useState(false);
  const [publicationDropDown, setPublicationDropDown] = useState(false);

  let timeoutId = null;
  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setHomeDropDown(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setHomeDropDown(false);
    }, 200);
  };

  let publicationTimeout = null;
  const publicationMouseEnter = () => {
    if (publicationTimeout) clearTimeout(publicationTimeout);
    setPublicationDropDown(true);
  };

  const publicationMouseLeave = () => {
    publicationTimeout = setTimeout(() => {
      setPublicationDropDown(false);
    }, 200);
  };

  const handleDropToggle = (idx) => {
    setDropState(dropState === idx ? null : idx);
  };

  const handleMenuToggle = () => {
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
          className="flex z-50 justify-center cursor-pointer p-2 flex-col space-y-1 hover:bg-hoverBgColor rounded transition-all"
          onClick={handleMenuToggle}
        >
          {menuState ? (
            <FaTimes className="w-8 h-8 text-titleColor" />
          ) : (
            <>
              <div className="w-6 h-[2px] bg-titleColor rounded block"></div>
              <div className="w-6 h-[2px] bg-titleColor rounded block"></div>
              <div className="w-6 h-[2px] bg-titleColor rounded block"></div>
            </>
          )}
        </button>

        <div
          className={`fixed top-0 right-0 w-2/3 sm:w-1/3 md:w-2/4 h-screen bg-white shadow-xl z-40 transition-transform ${menuState ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <ul className="mt-28 px-8 space-y-8">
            <li className="font-semibold">
              <a href="/" className="flex gap-4 hover:text-hoverTextColor">Home</a>
            </li>
            <li className="relative">
              <div className="font-semibold flex gap-4 cursor-pointer" onClick={() => handleDropToggle(1)}>
                Our Team
                {dropState === 1 ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <ul className={`list-none transition-all ${dropState === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <li><a href="/executive-committee" className="hover:text-hoverTextColor">Executive Committee</a></li>
                <li><a href="/advisory-board" className="hover:text-hoverTextColor">Advisory Board</a></li>
              </ul>
            </li>
            <li className="font-semibold">
              <a href="/communities" className="hover:text-hoverTextColor">Communities</a>
            </li>
            <li className="relative">
              <div className="font-semibold flex gap-4 cursor-pointer" onClick={() => handleDropToggle(2)}>
                Publications
                {dropState === 2 ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <ul className={`list-none transition-all ${dropState === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <li><a href="/soe-express" className="hover:text-hoverTextColor">SOE Express</a></li>
              </ul>
            </li>
            <li className="font-semibold">
              <a href="/contact" className="hover:text-hoverTextColor">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-8">
        <a href="/" className="font-semibold hover:text-hoverTextColor">Home</a>
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="font-semibold flex items-center gap-4 hover:text-hoverTextColor">Our Team <FaCaretDown /></button>
          {homeDropDown && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <li><a href="/executive-committee" className="block px-4 py-2 hover:bg-gray-100">Executive Committee</a></li>
              <li><a href="/advisory-board" className="block px-4 py-2 hover:bg-gray-100">Advisory Board</a></li>
            </ul>
          )}
        </div>
        <a href="/communities" className="font-semibold hover:text-hoverTextColor">Communities</a>
        <div className="relative" onMouseEnter={publicationMouseEnter} onMouseLeave={publicationMouseLeave}>
          <button className="font-semibold flex items-center gap-4 hover:text-hoverTextColor">Publications <FaCaretDown /></button>
          {publicationDropDown && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <li><a href="/soe-express" className="block px-4 py-2 hover:bg-gray-100">SOE Express</a></li>
            </ul>
          )}
        </div>
        <a href="/contact" className="font-semibold hover:text-hoverTextColor">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
