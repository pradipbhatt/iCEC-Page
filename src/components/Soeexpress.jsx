import React from 'react'

function Soeexpress() {
  return (
   <>
   <div className="container mx-auto px-4 lg:max-w-7xl">
  <div className="mb-6">
    <h5 className="text-2xl font-semibold">SOE Express</h5>
    <p className="text-base text-gray-700 mt-2">
      SOE Express is a magazine published every year by the ICEC. It includes articles submitted by the students of School of Engineering Far Western University, research works, clubs information, and messages from reputed personnel. Listed below is the archive of the e-copies of IT Express published since 2023.
    </p>
  </div>
  <span className="text-sm text-gray-500">Note: Click on the PDF to download.</span>
  <div className="py-4 space-y-4">
    <div>
      <a
        className="text-subTitleColor flex items-center gap-2 text-xl"
        href="/soe-express"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-6 h-6 text-subTitleColor"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H15v-8h5V8zm-1 7V3.5L18.5 9zm4 12.66V16h5.66v2h-2.24l2.95 2.95-1.41 1.41L19 19.41v2.24h-2z"
          />
        </svg>
        <p className="text-subTitleColor underline decoration-secondBackground">SOE Express 2023</p>
      </a>
    </div>
    {/* Repeat for other years */}
  </div>
</div>

   </>
  )
}

export default Soeexpress