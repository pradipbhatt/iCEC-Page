import Footer from './Footer';

const Events = () => {
  
  const events = [
    {
      id: 'oop-bootcamp',
      title: "OOP Bootcamp using C++",
      description: "We conducted 15 days OOP Bootcamp where we dive deep into the concepts of OOP and used the language C++ while coding, we covered all the topics that are in OOP i.e.Objects and Class, Inheritance, Polymorphism, Incapsulation and others.",
      image: "https://scontent.fkep2-1.fna.fbcdn.net/v/t39.30808-6/530911428_122190280634051271_9063884827713892428_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=S0oQ0r7KnpYQ7kNvwGfuSNQ&_nc_oc=Adk29xJyC5Ej0AnT9yhuBUWBAiPuO3kmXmXahypYGZc1rBC23l9dQJfzJKNd7RRz_9g&_nc_zt=23&_nc_ht=scontent.fkep2-1.fna&_nc_gid=Psxnl4K5OyYr9XlZd6WXOQ&oh=00_AfWtW_gA0a39jEB8vNHZ1MJYuLOyPJhTdS0ALKOVbtkP8A&oe=68A20F2F",
      date: "August 06-21, 2025"
    },
    {
      id: 'android',
      title: "Android App Development",
      description: "24-hour coding competition where students solve real-world problems using creative technical solutions.",
      image: "https://scontent.fkep2-1.fna.fbcdn.net/v/t39.30808-6/528407552_122189816708051271_8575092531246421488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=--0qdZJZXssQ7kNvwERBKMS&_nc_oc=AdkHMQd3tdhMlayBGu30I1OSbKDgmmWGdhlyE67rOVnVcxvXbLUlX19jhKNeFWO0idE&_nc_zt=23&_nc_ht=scontent.fkep2-1.fna&_nc_gid=cS3bHGj_BlG_MMOyBXNhkA&oh=00_AfUVpbAc_4waHVj63os83T86cmPq5K9ZFsrmuqoW8aoVrQ&oe=68A21A1D",
      date: "August 5-20, 2025"
    },
    {
      id: 'alumni-panel',
      title: "Alumni Career Panel",
      description: "Successful graduates share their career journeys and offer advice to current students.",
      image: "https://picsum.photos/600/402",
      date: "December 2, 2023"
    },
    {
      id: 'research-showcase',
      title: "Research Showcase",
      description: "Presentation of ongoing research projects by faculty and graduate students.",
      image: "https://picsum.photos/600/403",
      date: "January 20, 2024"
    }
  ];

  // Function to handle smooth scrolling
  const scrollToEvent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-500 mb-2">iCEC</p>
            <h2 className="text-3xl md:text-4xl font-bold text-titleColor">
              Presents
            </h2>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div 
                key={index}
                id={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 cursor-pointer border border-transparent hover:border-primary/20"
                onClick={() => scrollToEvent(event.id)}
                onKeyDown={(e) => e.key === 'Enter' && scrollToEvent(event.id)}
                tabIndex={0}
                role="button"
                aria-label={`View details about ${event.title}`}
              >
                {/* Image Container with hover zoom effect */}
                <div className="flex-grow-0 h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Content Container */}
                <div className="p-6 flex-grow">
                  <div className="text-sm text-gray-500 mb-2">{event.date}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">
                    {event.description}
                  </p>
                </div>
                
                {/* Learn More Button with hover effect */}
                <div className="px-6 pb-6">
                  <div className="inline-flex items-center text-primary font-medium group">
                    <span className="mr-2">Learn More</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Event Sections (for demo purposes) */}
        </div>

        {/* Department Info */}
        <div className="py-8 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-titleColor text-lg md:text-xl">
              Department of Computer Engineering
            </h3>
            <p className="text-gray-600 mt-2">
              Creating opportunities for learning and innovation
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;