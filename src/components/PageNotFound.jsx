import React from 'react';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-baseBackground min-h-screen">
      <h1 className="text-titleColor text-6xl font-bold mb-4">404</h1>
      <h2 className="text-titleColor text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-textColor mb-4">Sorry, the page you are looking for does not exist.</p>
      <a
        href="/"
        className="mt-6 w-full max-w-xs text-center bg-primary text-white py-2 rounded-md hover:bg-opacity-80 transition duration-200"
      >
        Go to Home
      </a>
    </div>
  );
};

export default PageNotFound;
