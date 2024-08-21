import React from 'react';

const ActivitiesSection = () => {
  return (
    <div className="flex flex-col space-y-2 p-5 justify-center items-center bg-baseBackground">
      <h2 className="text-subTitleColor font-semibold text-base sm:text-lg md:text-xl">
        What we do
      </h2>
      <h1 className="text-titleColor text-lg sm:text-2xl md:text-3xl font-bold">
        Activities We Are Actively Doing
      </h1>
      <div className="flex-col p-2">
        <div className="space-y-5 grid sm:grid-cols-2 md:grid-cols-3 md:space-y-0 md:space-x-4 max-w-screen-xl">
          <div className="flex bg-secondBackground space-y-4 rounded-lg flex-col hover:cursor-pointer hover:transition hover:translate-y-1 hover:ease-in-out p-6 justify-center items-center shadow-lg">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-titleColor w-10 h-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
              </svg>
            </div>
            <div className="space-y-3">
              <h1 className="text-subTitleColor font-semibold text-base sm:text-lg md:text-xl text-center">
              Git and github Workshop
              </h1>
              <p className="flex text-justify text-activityCardText">
  Today we conducted a session on the GitHub Education Pack, covering its importance, uses, and application 😌.<br />
  We're grateful to our department and all participants for joining us 💜.<br />
  How was the session? Share your suggestions!☺️<br />
  Stay tuned for upcoming events 🥳.
</p>

            </div>
          </div>
          <div className="flex bg-secondBackground space-y-4 rounded-lg flex-col hover:cursor-pointer hover:transition hover:translate-y-1 hover:ease-in-out p-6 justify-center items-center shadow-lg">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-titleColor w-10 h-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M1 11h4v11H1zM16 3.25C16.65 2.49 17.66 2 18.7 2 20.55 2 22 3.45 22 5.3c0 2.27-2.91 4.9-6 7.7-3.09-2.81-6-5.44-6-7.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25zM20 17h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8.01-3c-.01-1.1-.9-2-2.01-2z"></path>
              </svg>
            </div>
            <div className="space-y-3">
              <h1 className="text-subTitleColor font-semibold text-base sm:text-lg md:text-xl text-center">
              SEO and CONTENT WRITING
              </h1>
              <p className="flex text-justify text-activityCardText">
  Successfully hosted an online event 💻📈 by our team "ICEC" on "SEO and Content Writing" 🌟🚀.<br />
  Special thanks to SEO specialist Mr. Niraj Raut for making it a success!☺️👏<br />
  We truly appreciate his dedication to ensuring everyone’s comfort and enjoyment.🎉🎊
</p>

            </div>
          </div>
          <div className="flex bg-secondBackground space-y-4 rounded-lg flex-col hover:cursor-pointer hover:transition hover:translate-y-1 hover:ease-in-out p-6 justify-center items-center shadow-lg">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-titleColor w-10 h-10"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" strokeWidth="2" d="M19,7 C19,7 14,14 6.5,14 C4.5,14 1,15 1,19 L1,23 L12,23 L12,19 C12,16.5 15,18 19,11 L17.5,9.5 M3,5 L3,2 L23,2 L23,16 L20,16 M11,1 L15,1 L15,3 L11,3 L11,1 Z M6.5,14 C8.43299662,14 10,12.4329966 10,10.5 C10,8.56700338 8.43299662,7 6.5,7 C4.56700338,7 3,8.56700338 3,10.5 C3,12.4329966 4.56700338,14 6.5,14 Z"></path>
              </svg>
            </div>
            <div className="space-y-3">
              <h1 className="text-subTitleColor font-semibold text-base sm:text-lg md:text-xl text-center">
Talk shows
              </h1>
              <p className="flex text-justify text-activityCardText">
  Successfully hosted today's talk show on "AI TALK: Offensive Language Detection in Nepali" ❤️.<br />
  Special thanks to Dr. Nobel Niraula for his valuable time 🤗 and to Dean Dr. Kishan Datta Bhatta for his support ❤️.<br />
  It was a fantastic experience! Excited for future events too? #ICEC #FWU
</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
