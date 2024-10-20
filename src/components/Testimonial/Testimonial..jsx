import React from 'react';
import './Testimonial.css';

const testimonials =
  //Sample Data
 [
  {
    name: "Avinash Kr",
    title: "Co-Founder at xyz",
    image: "https://passport-photo.online/images/cms/prepare_lookintothecamera_860144524c.webp?quality=80&format=webp&width=1920",
    feedback: "Like this video and ask your questions in the comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop."
  },
  {
    name: "Bharat Kunal",
    title: "Manager at xyz",
    image: "https://studio.bruinlife.com/wp-content/uploads/2024/09/2B8_5802.jpg",
    feedback: "Like this video and ask your questions in the comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop."
  },
  {
    name: "Prabhakar D",
    title: "Founder / CEO at xyz",
    image: "https://imgcdn.stablediffusionweb.com/2024/5/6/2b1d888a-a22f-49d5-94b2-d9e1fb2c2640.jpg",
    feedback: "Like this video and ask your questions in the comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop."
  }
];

const Testimonial = () => {
  return (
    <section className="testimonials animate__animated animate__fadeIn">
      <h2 className="testimonials-title fw-bold">TESTIMONIALS</h2>
      <p className="testimonials-subtitle">Subscribe Easy Tutorials YouTube channel to watch more videos.</p>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card animate__animated animate__fadeInUp"
          >
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" id="hai"/>
            <p className="testimonial-feedback">“{testimonial.feedback}”</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;