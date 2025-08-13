import Footer from './Footer';
import Babita from "../assets/babita.jpg"
import KamalRaj from "../assets/kamal.jpeg"
import Asish from "../assets/asish.jpg"

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
                  <img src={Babita} alt="Pradip Bhatt" className="mx-auto rounded-full w-32 h-32 object-cover mb-4" />
                  <h6 className="text-lg font-semibold">Babita Bhatt</h6>
                  <p className="text-base">Club President</p>
                  <p className="text-base">9810652734</p>
                  <p className="text-base text-gray-600">babitabhatt@gmail.com</p>
                </div>
                <div className="col-span-1">
                  <img src={KamalRaj} alt="Dipak Raj Giri" className="mx-auto rounded-full w-32 h-32 object-cover mb-4" />
                  <h6 className="text-lg font-semibold">Kamal Raj Giri</h6>
                  <p className="text-base">General Secretary</p>
                  <p className="text-base">9864311321</p>
                  <p className="text-base text-gray-600">giridipak743@gmail.com</p>
                </div>
                <div className="col-span-1">
                  <img src={Asish} alt="Bipesh Khadka" className="mx-auto rounded-full w-32 h-32 object-cover mb-4" />
                  <h6 className="text-lg font-semibold">Asish Mehata</h6>
                  <p className="text-base">Tech Lead</p>
                  <p className="text-base">9868723582</p>
                  <p className="text-base text-gray-600">asishmehata48@gmail.com</p>
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
