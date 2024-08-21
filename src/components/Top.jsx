import React from 'react';

const Top = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 border-none text-white font-semibold shadow-lg cursor-pointer transition-all duration-300 hover:w-36 hover:rounded-full hover:bg-indigo-300 z-50"
      onClick={scrollToTop}
    >
      <svg
        className="w-6 text-white transition-transform duration-300 group-hover:transform group-hover:translate-y-[-200%]"
        viewBox="0 0 384 512"
        fill="currentColor"
      >
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
      <span className="absolute bottom-[-20px] text-white text-xs font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bottom-[-30px]">
        Back to Top
      </span>
    </button>
  );
};

export default Top;
