const Body = () => {
  return (
    <div className="w-screen overflow-hidden">

      {/* Section 3 */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Image Background */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/image/img1.jpg"
        ></img>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full bg-black bg-opacity-20 text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-normal pb-20 tracking-wide">
          Started with simple idea 
          <p>
          to give beneficial for the people
          </p>
          </h1>
        </div>
      </section>

       {/* Section 5 */}
       <section className="relative h-screen w-full overflow-hidden">
        {/* Image Background */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/image/img3.jpg"
        ></img>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-end py-4 h-full bg-black bg-opacity-50 px-4">
          <h1 className="text-white text-left md:text-3xl tracking-wide p-20">
          We're committed to creating eco-friendly, <p/>
          high-performance electric two-wheelers that redefine urban mobility. <p/>
          Backed by innovation and a mission for sustainability, <p/>
          we aim to transform transportation across Indonesia and beyond. <p/>
          </h1>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative h-screen w-full overflow-hidden">
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
        <h1 className="text-[#15b7ec] text-4xl md:text-6xl font-normal mb-4 tracking-wider ">
        Every Moovid journey is a celebration of you 
          <p/>
          Unleash the boundaries, Just keep mooving
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
