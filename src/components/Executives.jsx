import Footer from './Footer';
import dikshya from "/dikshya.jpg"
import dileep from "/dileep.jpg"
import ram from "/ram.jpg"
import logo from "/logo.png"
import Dipa from '../assets/dipa.jpg'
import Dipak from '../assets/dipakPic.jpg'
import adarsh from "/adarsh.jpg"
import Hema from "/hema.jpg"

const members = [
  {
    name: 'Pradip Bhatt',
    role: 'President',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.inXgh5O_Chd56OM6PROU1gAAAA%26pid%3DApi&f=1&ipt=123cec7b67b4e941bf4944dfdae504127a7df4fdb76ed75f92fb9f8a9c9e36ff&ipo=images',
    linkedinUrl: 'https://www.linkedin.com/in/pradipbhatt1326/',
    emailUrl: 'mailto:pradip10bhatt',
    githubUrl: 'https://github.com/pradipbhatt',
  },
  {
    name: 'Dipak Raj Giri',
    role: 'Vice President',
    imageUrl: Dipak,
    linkedinUrl: 'https://www.linkedin.com/in/dipak-raj-giri-970069234/',
    emailUrl: 'mailto:giridipak743@gmail.com',
    githubUrl: 'https://github.com/Dipakrajgiri',
  },
  {
    name: 'Kamal Raj Giri',
    role: 'Treasurer',
    imageUrl: 'https://avatars.githubusercontent.com/u/157484491?v=4',
    linkedinUrl: 'https://github.com/kamalrajgiri',
    emailUrl: 'mailto:kamalrajgiri@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Ram Bhatta',
    role: 'Secretary',
    imageUrl: ram,
    linkedinUrl: 'https://www.facebook.com/profile.php?id=100075303349545',
    emailUrl: 'mailto:rambhatta@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Bipesh Khadka',
    role: 'General Secretary',
    imageUrl: 'https://avatars.githubusercontent.com/u/106030583?v=4',
    linkedinUrl: 'https://github.com/Bipeshkhadka10',
    emailUrl: 'mailto:bipeshkhadka@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Santosh Upadhyay',
    role: 'Tech Lead',
    imageUrl: 'https://avatars.githubusercontent.com/u/101114463?v=4',
    linkedinUrl: 'https://www.linkedin.com/in/saaandyyy0/',
    emailUrl: 'mailto:santoshupadhyay@example.com',
    githubUrl: 'https://github.com/santosupadhyay0',
  },
  {
    name: 'Bhupendra',
    role: 'Tech Lead',
    imageUrl: 'https://avatars.githubusercontent.com/u/121709397?v=4',
    linkedinUrl: 'https://github.com/Bhupendra143',
    emailUrl: 'mailto:bhupendra@example.com',
    githubUrl: 'https://github.com/',

  },
  {
    name: 'Adarsh Joshi',
    role: 'Tech Lead',
    imageUrl: adarsh,
    linkedinUrl: 'https://github.com/adarshherohoo',
    emailUrl: 'mailto:adarshjoshi@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Dipa Joshi',
    role: 'Event Organizer',
    imageUrl: Dipa,
    linkedinUrl: 'https://www.linkedin.com/in/dipa-joshi-548a79233/',
    emailUrl: 'mailto:joshideepa988@gmail.com',
    githubUrl: 'https://github.com/Dipajoshi'
  },
  {
    name: 'Dileep Pant',
    role: 'Event Organizer',
    imageUrl: dileep,
    linkedinUrl: 'https://example.com/dileep_social',
    emailUrl: 'mailto:dileepant@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Saraswoti Bhandari',
    role: 'Event Organizer',
    imageUrl: 'https://avatars.githubusercontent.com/u/143866362?v=4',
    linkedinUrl: 'https://github.com/sarswotibhandari',
    emailUrl: 'mailto:saraswotibhandari@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Dikshya Bam',
    role: 'Social Media Handler',
    imageUrl: dikshya,
    linkedinUrl: 'https://www.facebook.com/dikshyathakuri13?comment_id=Y29tbWVudDoxMjIxMzM4OTgxMjQwNTEyNzFfMjgwNDk1NTA1MTAyNTAw',
    emailUrl: 'mailto:dikshya@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Hema Dhami',
    role: 'Member',
    imageUrl: Hema,
    linkedinUrl: 'https://example.com/hema_social',
    emailUrl: 'mailto:hemadhami@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Anuradha Bhatta',
    role: 'Member',
    imageUrl: 'https://avatars.githubusercontent.com/u/110050148?v=4',
    linkedinUrl: 'https://github.com/Anubhatta',
    emailUrl: 'mailto:anuradhabhatta@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Babita Bhatta',
    role: 'Member',
    imageUrl: 'https://avatars.githubusercontent.com/u/109867371?v=4',
    linkedinUrl: 'https://github.com/BabitaBhatt2059',
    emailUrl: 'mailto:babitabhatta@example.com',
    githubUrl: 'https://github.com/',
  },
  {
    name: 'Yogesh Awasthi',
    role: 'Member',
    imageUrl: 'https://avatars.githubusercontent.com/u/121468998?v=4',
    linkedinUrl: 'https://github.com/suddhababa',
    emailUrl: 'mailto:yogeshawasthi@example.com',
    githubUrl: 'https://github.com/',
  },
];


const Executives = () => {
  return (
    <>
      <div className="flex flex-col p-1 justify-center items-center max-w-screen-xl mx-auto rounded-lg text-card-foreground w-full border-2 shadow-lg bg-baseBackground px-4 mt-4">
        <div className="flex-col space-y-1.5 p-6">
          <p className="text-gray-500 text-lg">ICEC Board 2023-24</p>
          <h3 className="font-semibold tracking-tight text-titleColor text-2xl md:text-3xl">Executive Committee</h3>
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

export default Executives;
