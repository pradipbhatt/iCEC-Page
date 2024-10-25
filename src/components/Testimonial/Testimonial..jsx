import React from "react";
import "./Testimonial.css";
import RishiSir from "../../../public/rishi.jpeg";
import KamalSir from "../../../public/kamalSir.jpg";
import HarendraSir from "../../../public/harendraSir.jpg";

const testimonials = [
  {
    name: "Er. Harendra Kalauni",
    title: "HOD, School of Engineering, FWU",
    image: HarendraSir,
    feedback:
      "The ICEC Club embodies the creativity and dedication of our Computer Engineering students. It provides an excellent platform for skill development, fostering collaboration and growth beyond academics.",
  },
  {
    name: "Er. Kamal Lekhak",
    title: "Lecturer, School of Engineering, FWU",
    image: KamalSir,
    feedback:
      "The ICEC Club is instrumental in bridging theory with practice, creating a supportive environment where students can collaborate and enhance their technical skills effectively.",
  },
  {
    name: "Er. Rishi Marseni",
    title: "Lecturer, NCIT College",
    image: RishiSir ,
    feedback:
      "The ICEC Club showcases what passion and teamwork can achieve. Their projects and initiatives inspire learning and growth, encouraging students to explore technology hands-on.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials animate__animated animate__fadeIn">
      <h2 className="testimonials-title fw-bold">Testimonials</h2>
      <p className="testimonials-subtitle fw-bold">
      Voices of Support and Encouragement
      </p>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card animate__animated animate__fadeInUp"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-img"
            />
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
