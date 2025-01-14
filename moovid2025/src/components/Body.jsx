const Body = () => {
  return (
    <div className="w-screen overflow-hidden">
      {/* Section 1 */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/video/vid1.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4" >
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Empowering Sustainable Mobility 
          <p/>
          across the globe
          </h1>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/video/vid2.mp4"
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

      {/* Section 4 */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Image Background */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/image/img2.jpg"
        ></img>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-20 text-center px-4">
          <h1 className="text-black text-4xl md:text-6xl font-normal tracking-wide">
          Sustainable today, for a greener tomorrow 
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

      {/* Section 6 */}
      <section className="relative h-screen max-h-full bg-white flex items-center justify-center text-center px-40">

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-black text-4xl md:text-6xl font-normal tracking-wide">
        Experience the future of urban transportation with Moovid's cutting-edge electric two-wheelers. Smart, sustainable, and designed for every journey 
        <p className='font-bold m-5'>
        We believe in creating a community who share a passion for sustainability, adventure, and personal growth. 
        </p>
          </h1>
        </div>
      </section>

      {/* Section 7 */}
      <section className="relative h-screen max-h-full bg-white flex items-center justify-center text-center px-40">

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-black text-4xl md:text-6xl font-normal tracking-wide">
        Every Moovid journey is a celebration of you, and it all began with a simple but powerful idea.
          </h1>
        </div>
      </section>

      {/* Section 8 */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Image Background */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/image/img4.jpg"
        ></img>
      </section>

      

    </div>

    
  );
};

export default Body;
