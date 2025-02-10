const Body = () => {
  return (
    <div className="w-screen overflow-hidden">
      
      {/* Section 3 */} 
      <section className="relative h-[60vh] sm:h-screen w-full overflow-hidden">
        {/* Image Background */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/image/img1.jpg"
        ></img>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full bg-black bg-opacity-20 text-center px-4">
          <h1 className="text-white text-xl sm:text-3xl font-normal pb-40">
          Started with simple idea 
          to give beneficial for the people
          </h1>
        </div>
      </section>

       {/* Section 5 */}
       <section className="relative h-[60vh] sm:h-screen w-full overflow-hidden">
        {/* Mobile Image */}
  <img
    className="absolute w-full h-full object-cover scale-[1.1] sm:hidden"
    src="/assets/image/img5.jpg"
    alt="Mobile Background"
  />

  {/* Desktop Image */}
  <img
    className="absolute w-full h-full object-cover scale-[1] hidden sm:block"
    src="/assets/image/img3.jpg"
    alt="Desktop Background"
  />
        {/* Content Overlay */}
        <div className="relative z-10 flex items-end py-4 h-full bg-black bg-opacity-50 px-4">
          <h1 className="text-white text-left text-sm sm:text-3xl text- tracking-tight p-4">
          We're committed to creating eco-friendly, <p/>
          high-performance electric two-wheelers that redefine urban mobility. <p/>
          Backed by innovation and a mission for sustainability, <p/>
          we aim to transform transportation across Indonesia and beyond. <p/>
          </h1>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative h-[60vh] sm:h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/video/vid3.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-[#15b7ec] text-xl sm:text-3xl font-normal mb-4 tracking-wider ">
        Every Moovid journey is a celebration of you 
          <p/>
          unleash the boundaries, just keep mooving
          </h1>
        </div>
      </section>

      <div className="w-full h-[40vh]">
      <iframe
        title="Google Map"
        className="w-full h-full border-0 p-8"
        src="https://www.google.com/maps/embed/v1/place?q=Mampang+Business+Park&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>

    
  );
};

export default Body;
