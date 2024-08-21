import React from 'react';

const Intro = () => {
  return (
    <section className="flex flex-col py-8 px-6 h-full bg-baseBackground">
      <h1 className="text-titleColor text-lg sm:text-2xl md:text-3xl font-bold text-center mb-6">
        Innovative Computer Engineering Club Community
      </h1>
      <div className="flex flex-col-reverse md:flex-row max-w-screen-xl mx-auto md:gap-8 place-items-center justify-center">
        <p className="text-justify max-w-[80ch] text-primary text-base md:text-lg leading-[24px] font-inter">
          <a
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
            href="https://icec.vercel.app/assets/fwu-CeXT1Quv.jpeg"
          >
            Innovative Computer Engineering Club
          </a> 
          is a vibrant community that provides a common platform for discussing, sharing, and learning about various engineering topics. We focus on training programs, workshops, and events to engage students and enhance their knowledge.
        </p>
        <img
          alt="Community Logo"
          loading="lazy"
          width="200"
          height="200"
          decoding="async"
          className="object-contain max-w-[200px]"
          src="https://www.soenotes.com/assets/logo-icec-COfn0a5B.png"
        />
      </div>
    </section>
  );
};

export default Intro;
