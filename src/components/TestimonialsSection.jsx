// import React from 'react';
import Logo from './Logo';

const testimonials = [
  {
    id: 1,
    feedback: "In a nail-biting finish, India secured a historic win against Australia. The match showcased incredible performances from both teams, with key players stepping up during crucial moments. With this victory, India not only solidified its position in the tournament but also ignited hopes for a brighter future in international cricket.",
    img: "https://e0.365dm.com/24/02/2048x1152/skysports-ben-stokes-england_6469498.jpg?20240226081415", 
    author: {
      name: "Alice Johnson",
      designation: "Co-Founder at XYZ"
    },
  },
  {
    id: 2,
    feedback: "Kohli surpasses the legendary Sachin Tendulkar in ODI centuries. This remarkable achievement highlights Kohli's exceptional consistency and skill in the format, further solidifying his status as one of the greatest batsmen in cricket history. Fans and experts alike are now eagerly speculating how many more records Kohli will break as he continues to dominate the game.",
    img: "https://static.toiimg.com/thumb/msid-113283773,imgsize-32650,width-400,resizemode-4/113283773.jpg", 
    author: {
      name: "Bob Smith",
      designation: "Sports Analyst"
    },
  },
  {
    id: 3,
    feedback: "Rohit scores a double century in the latest ODI against England. His explosive innings showcased his incredible talent and ability to dominate bowlers, making him a key player for the Indian team. This remarkable performance not only helped secure a vital win but also added to his growing list of records, further establishing him as a powerhouse in limited-overs cricket.",
    img: "https://static.toiimg.com/thumb/msid-111309074,imgsize-41286,width-400,resizemode-4/111309074.jpg", 
    author: {
      name: "Charlie Brown",
      designation: "Cricket Commentator"
    },
  },
];

const TestimonialsSection = () => {
  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f4f0] px-10 py-3">
        <Logo />
        <div className="flex flex-1 justify-end gap-8"></div>
      </header>
      <section className="bg-white p-6">
        <h1 className="text-3xl font-bold text-center my-6 text-yellow-500">TESTIMONIALS</h1>
        <div className="border-b-4 border-yellow-500 w-20 mx-auto mb-6"></div>
        <h2 className="text-lg text-center mb-4">Subscribe to your YT channel for more videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img 
                src={testimonial.img} 
                alt={testimonial.author.name} 
                className="w-20 h-20 object-cover rounded-full mx-auto mt-4" 
              />
              <div className="p-4">
                <p className="text-gray-700 mt-2">{testimonial.feedback}</p>
                <div className="flex justify-between items-center mt-4">
                  <h4 className="text-md font-bold text-yellow-500">{testimonial.author.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.author.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
