// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from './Footer';
import Asish from "../assets/asish.jpg"
import Jelina from "../assets/jelina.jpeg"
import logo from "/logo.png"
import Aarati from "../assets/aarati.jpeg"
import Men from "../assets/default-man.jpg"
import Women from "../assets/default-women.jpg"
import Bikash from "../assets/bikash.jpeg"
import Dammar from "../assets/dammar.jpeg"
import Neesa from "../assets/Neesa.jpg"
import Prabin from "../assets/prabin.jpeg"


const members = [
  {
    name: 'Bhupendra Joshi',
    role: 'President',
    imageUrl: 'https://avatars.githubusercontent.com/u/121709397?v=4',
    linkedinUrl: 'in/bhupendra-joshi-b56092245',
    emailUrl: 'mailto:bhupendrajoshi425@gmail.com',
    githubUrl: 'https://github.com/Bhupendra143',
  },
  {
    name: 'Sunil Joshi',
    role: 'Sr. Vice-President',
    imageUrl: Men,
    linkedinUrl: 'https://www.linkedin.com/in/dipak-raj-giri-970069234/',
    emailUrl: 'mailto:giridipak743@gmail.com',
    githubUrl: 'https://github.com/Dipakrajgiri',
  },
    {
    name: 'Dammar Raj Joshi',
    role: 'Vice-President',
    imageUrl: Dammar,
    linkedinUrl: 'https://www.linkedin.com/in/dammar-raj-joshi-43417a358',
    emailUrl: 'mailto:dammarjoshi132@gmail.com',
    githubUrl: 'https://github.com/DJXI',
  },
  {
    name: 'Asish Mehata',
    role: 'General Secretary',
    imageUrl: Asish,
    linkedinUrl: 'http://www.linkedin.com/in/asishmehata48',
    emailUrl: 'mailto:asishmehata48@gmail.com',
    githubUrl: 'https://github.com/asishmehata48',
  },
  {
    name: 'Apekshya Bogati',
    role: 'Secretary',
    imageUrl: Women,
    linkedinUrl: 'https://www.linkedin.com/in/jelinabhatt/  ',
    emailUrl: 'mailto:jelinabhatt1@gmail.com',
    githubUrl: 'https://github.com/Jelina-bhatt',
  },
    {
    name: 'Prashant Saud',
    role: 'Treasurer',
    imageUrl: Men,
    linkedinUrl: 'https://www.linkedin.com/in/ujjalmahata02/',
    emailUrl: 'mailto:ujjalmahata439@gmail.com',
    githubUrl: 'https://github.com/ujjalmahata02',
  },
  {
    name: 'Aashutosh Kalauni',
    role: 'Tech Lead',
    imageUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/asishmehata48/',
    emailUrl: 'mailto:asishmehata48@gmail.com',
    githubUrl: 'https://github.com/asishmehata48',
  },
  {
    name: 'Nitesh Joshi',
    role: 'Tech Lead',
    imageUrl: 'https://avatars.githubusercontent.com/u/157809884?v=4',
    linkedinUrl: 'https://www.linkedin.com/in/niteshjoshi/',
    emailUrl: 'mailto:niteshjoshi010@icloud.com',
    githubUrl: 'https://github.com/niteshh-dev',

  },
  {
    name: 'Prabin Bhatt',
    role: 'Tech Lead',
    imageUrl: Prabin,
    linkedinUrl: 'https://www.linkedin.com/in/prabin-bhatt-054022341/',
    emailUrl: 'mailto:bhattsamir2062@gmail.com',
    githubUrl: 'https://github.com/prabinbhatt08',
  },
  {
    name: 'Nisha Saud',
    role: 'HR Lead',
    imageUrl: Neesa,
    linkedinUrl: 'https://www.linkedin.com/in/nisha-saud-6196a22b7',
    emailUrl: 'mailto:nishasaud2061@gmail.com',
    githubUrl: 'https://github.com/Neesa-Saud',
  },
  {
    name: 'Govind Raj Pandey',
    role: 'PR Lead',
    imageUrl: Men,
    linkedinUrl: 'https://linkedin.com/feed',
    emailUrl: 'mailto:adarshjoshi@example.com',
    githubUrl: 'https://github.com/',
  },
    {
    name: 'Aarati Bhatt',
    role: 'Social Media Handler',
    imageUrl: Aarati,
    linkedinUrl: 'https://www.linkedin.com/in/aarati-bhatt-850334340',
    emailUrl: 'mailto:aaratib424@gmail.com',
    githubUrl: 'https://github.com/aaratibhatt1234',
  },
  {
    name: 'Bishal Mahar',
    role: 'Event Organiger',
    imageUrl: Men,
    linkedinUrl: 'https://www.linkedin.com/in/dipa-joshi-548a79233/',
    emailUrl: 'mailto:joshideepa988@gmail.com',
    githubUrl: 'https://github.com/Dipajoshi'
  },
  {
    name: 'Mohit Bhatt',
    role: 'Event Organiger',
    imageUrl: Men,
    linkedinUrl: 'https://www.linkedin.com/feed',
    emailUrl: 'mailto:vandanashahi@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Sambidha Airee',
    role: 'Event Organizer',
    imageUrl: Women,
    linkedinUrl: 'http://www.linkedin.com/in/pradeep-nath-437375316',
    emailUrl: 'mailto:pradeepnath595@gmail.com',
    githubUrl: 'https://github.com/PradeepNath01',
  },
  {
    name: 'Bhawana Karki',
    role: 'Executive Member',
    imageUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/yogesh-awasthi/',
    emailUrl: 'mailto:yogesh@example.com',
    githubUrl: 'https://github.com/yogeshawasthi',
  },
  {
    name: 'Ram Datt Bhatt',
    role: 'Executive Member',
    imageUrl: Men,
    linkedinUrl: 'https://www.linkedin.com/in/hemant-lekhak-76953b320',
    emailUrl: 'mailto:lekhakhemant1@gmail.com',
    githubUrl: 'https://github.com/Hemant-lekhak1',
  },
  {
    name: 'Jelina Bhatt',
    role: 'Executive Member',
    imageUrl: Jelina,
    linkedinUrl: 'https://www.linkedin.com/in/jelina-bhatt-2384472b4/',
    emailUrl: 'mailto:jelinabhatt1@gmail.com',
    githubUrl: 'https://github.com/Jelina-bhatt',
  },
  {
    name: 'Ujjal Singh Mahata',
    role: 'Executive Member',
    imageUrl: 'https://avatars.githubusercontent.com/u/176055017?v=4',
    linkedinUrl: 'https://www.linkedin.com/ujjalmahata02',
    emailUrl: 'mailto:ujjalmahata439@gmail.com',
    githubUrl: 'https://github.com/ujjalmahata02',
  },
  {
    name: 'Bikash Nepali',
    role: 'Executive Member',
    imageUrl: Bikash,
    linkedinUrl: 'https://www.linkedin.com/in/bikash-nepali-5b57b2340',
    emailUrl: 'mailto:nepalibikash225@gmail.com',
    githubUrl: 'https://github.com/BIKASH-NEPALI',
  },
    {
    name: 'Brijala Pandey',
    role: 'Executive Member',
    imageUrl: Women,
    linkedinUrl: 'https://github.com/',
    emailUrl: 'mailto:santoshluhar@example.com',
    githubUrl: 'https://github.com/brijalaa',
  },
];


const Executives3 = () => {
  return (
    <>
      <div className="flex flex-col p-1 justify-center items-center max-w-screen-xl mx-auto rounded-lg text-card-foreground w-full border-2 shadow-lg bg-baseBackground px-4 mt-4">
        <div className="flex-col space-y-1.5 p-6">
          <p className="text-gray-500 text-lg">ICEC Board 2024-25</p>
          <h3 className="font-semibold tracking-tight text-titleColor text-2xl md:text-3xl">Executive Committee 2nd</h3>
        </div>

        <div >
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {members.map((member, index) => (
              <div
                key={index}
                className="text-card-foreground border border-titleColor shadow-2xl rounded-3xl p-2 bg-slate-50"
              >
                <div className="flex-col space-y-1.5 p-6 flex justify-center items-center relative gap-15">
                  <img
                    alt="logo ICEC"
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
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:translate-y-0.5"
                    href={member.githubUrl}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      width="1em"
                      height="1em"
                      className="text-3xl sm:text-3xl text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M511.6 76.3c-240.1 0-435 194.9-435 435 0 192.3 125.2 354.5 298.8 411.7 21.9 4 29.8-9.5 29.8-21.1 0-10.4-.4-37.9-.6-74.4-121.6 26.4-147.3-58.7-147.3-58.7-19.9-50.6-48.8-64.1-48.8-64.1-39.9-27.2 3-26.7 3-26.7 44.1 3.1 67.3 45.3 67.3 45.3 39.2 67.1 102.9 47.7 128 36.5 4-28.4 15.3-47.7 27.8-58.7-97.1-11.1-199.2-48.6-199.2-216.3 0-47.8 17.1-86.9 45.2-117.6-4.5-11.1-19.6-55.9 4.3-116.6 0 0 36.8-11.8 120.5 44.8 35-9.7 72.5-14.6 109.8-14.8 37.2.2 74.8 5.1 109.8 14.8 83.5-56.6 120.2-44.8 120.2-44.8 23.9 60.7 8.9 105.5 4.3 116.6 28.1 30.7 45.1 69.8 45.1 117.6 0 168.2-102.2 205.1-199.6 216 15.7 13.5 29.7 40.2 29.7 81 0 58.4-.5 105.6-.5 119.9 0 11.7 7.8 25.4 30.1 21 173.5-57.2 298.4-219.5 298.4-411.6 0-240.1-194.9-435-435-435z"></path>
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

      <Footer />

    </>

  );
};

export default Executives3;