// Contact.jsx
import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h5 className="text-xl font-bold">Contact Us</h5>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-1">
            <div className="container mx-auto px-4">
              <div className="mb-8 text-center">
                <h5 className="text-xl font-bold">Get in touch with the club.</h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="col-span-1">
                  <h6 className="text-lg font-semibold">Pradip Bhatt</h6>
                  <p className="text-base">Club President</p>
                  <p className="text-base">9810652734</p>
                  <p className="text-base text-gray-600">pradip10bhatt@gmail.com</p>
                </div>
                <div className="col-span-1">
                  <h6 className="text-lg font-semibold">Dipak Raj Giri</h6>
                  <p className="text-base">Club Vice President</p>
                  <p className="text-base">98********</p>
                  <p className="text-base text-gray-600">giridipak@gmail.com</p>
                </div>
                <div className="col-span-1">
                  <h6 className="text-lg font-semibold">Bipesh Khadka</h6>
                  <p className="text-base">General Secretary</p>
                  <p className="text-base">98********</p>
                  <p className="text-base text-gray-600">bipeshkhadka@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <iframe
              title="FWU-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13964.446131477709!2d80.16867061738283!3d28.954416200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ac04d865ce05%3A0x89f6ca936b28de92!2sFaculty%20Of%20Computer%20Engineering%20FWU!5e0!3m2!1sen!2snp!4v1724226032911!5m2!1sen!2snp"
              className="w-full h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
