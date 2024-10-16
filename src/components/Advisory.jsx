import React from 'react';
import Footer from './Footer';
import dean from "../../public/dean.jpeg"
import rishi from "../../public/rishi.jpeg"
import logo from "../../public/logo.png"

// Sample JSON data (you should replace this with actual data from your JSON file)
const members = [
  {
    name: "Dr. Kishan Datta BHATTA",
    role: "Dean, Faculty of Engineering, Far Western University Nepal",
    imageUrl: dean,
    linkedinUrl: "https://www.linkedin.com/in/dr-kishan-datta-bhatta-5b232431/",
    emailUrl: "mailto:kishandatta@yahoo.com"
  },
  {
    name: "Rishi K. Marseni",
    role: "Professor, Faculty of Engineering, Far Western University Nepal",
    imageUrl: rishi,
    linkedinUrl: "https:linkedin.com/in/rkmarseni",
    emailUrl: "mailto:rishimarseni@gmail.com"
  }

  // Add more members here
];

const Advisory = () => {
  return (
  <>
 <div className="flex flex-col p-5 justify-center items-center max-w-screen-xl mx-auto rounded-lg text-card-foreground w-full border-2 shadow-lg bg-baseBackground px-4 mt-4 mb-4">
  <div className="flex-col space-y-1.5 p-6">
    <p className="text-gray-500 text-lg">ICEC Board 2024-25</p>
    <h3 className="font-semibold tracking-tight text-titleColor text-2xl md:text-3xl">Advisors</h3>
  </div>

  <div className="p-6">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
      {members.map((member, index) => (
        <div
          key={index}
          className="text-card-foreground w-[290px] sm:w-[400px] md:w-[420px] border border-titleColor shadow-2xl rounded-3xl p-5 bg-slate-50"
        >
          <div className="flex-col space-y-1.5 p-6 flex justify-center items-center relative gap-14">
            <img
              alt="logo icec"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              className="absolute left-0 top-0"
              src={logo}
            />
            <img
              alt={member.name}
              loading="lazy"
              width="200"
              height="200"
              decoding="async"
              className="rounded-full object-cover w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] border-4 bg-blue-100 border-titleColor p-[6px]"
              src={member.imageUrl}
            />
          </div>
          <div className="flex-col flex-wrap bg-baseBackground rounded-md p-5 sm:p-4 space-y-2">
            <h1 className="text-xl text-wrap text-center font-semibold text-titleColor">{member.name}</h1>
            <h2 className="text-base text-wrap text-center font-medium">{member.role}</h2>
          </div>
          <div className="items-center flex justify-center space-x-4 p-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:translate-y-0.5"
              href={member.linkedinUrl}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                width="1em"
                height="1em"
                className="text-3xl sm:text-3xl text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:translate-y-0.5"
              href={member.emailUrl}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="text-4xl sm:text-4xl text-red-800"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="p-6 pt-0 flex justify-center items-center">
    <h1 className="text-titleColor text-[10px] sm:text-base md:text-xl md:mt-4">
      Department of Computer Engineering
    </h1>
  </div>
</div>

<Footer/>

  </>
    
  );
};

export default Advisory;
