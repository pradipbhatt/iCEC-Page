import React from 'react';
import sfd from "/sfd.jpeg"; // Ensure the path is correct

const Intro = () => {
  return (
    <section className="flex flex-col py-8 px-14 h-full bg-baseBackground">
      <h1 className="text-titleColor text-lg sm:text-2xl md:text-3xl font-bold text-center mb-6">
        Software Freedom Day 2024: A Celebration in Farwest
      </h1>
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto md:gap-8 place-items-center justify-center">
        <p className="text-justify max-w-[80ch] text-primary text-base md:text-lg leading-[24px] font-inter mb-6 md:mb-0 md:w-1/2">
          We are thrilled to share that we successfully organized Software Freedom Day 2024 for the first time in the Farwest region of Nepal! 💐
          <br /><br />
          A heartfelt thank you to our entire organizing team for making this event a memorable celebration, and for giving me the opportunity to speak to such a passionate group of students about Hacktoberfest and the significance of contributing to open-source projects.
          <br /><br />
          we are incredibly grateful to the student communities for their active participation without you, this event would not have been possible. Together, we’re fostering a culture of collaboration, learning, and innovation!
          <br /><br />
          Special thanks to IICC Club, SNSC IT Club, and YouthMapper for their collaboration with us (ICEC Club) 👏.<br></br> A big thank you to all the professors who guided us in organizing such a fantastic event 🙏.
        </p>
        <img
          alt="Software Freedom Day Logo"
          loading="lazy"
          width="500"
          height="500"
          decoding="async"
          className="object-contain max-w-[400px] md:max-w-[600px] md:h-auto md:w-auto" // Adjust dimensions for horizontal image
          src={sfd}
        />
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-primary text-base md:text-lg font-semibold">
          #SoftwareFreedomDay #Hacktoberfest #OpenSource #Farwest #Community #ICEC_Club
        </p>
      </div>
    </section>
  );
};

export default Intro;
