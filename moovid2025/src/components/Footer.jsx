const Footer = () => {
  return (
    <footer id="footer" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
        
        {/* Section Logo & Address */}
        <div className="flex flex-col items-center text-center">
          {/* Centered Logo */}
          <img src="assets/image/logo.png" alt="logo" className="w-36 mx-auto mb-4" />
          
          <p className="text-sm">
            Mampang Business Park <br /> South Jakarta, DKI Jakarta, Indonesia 12760
          </p>

          <p className="mt-2 text-sm">
            ✉️ Email:  
            <a href="mailto:info@moovid.tech" className="text-blue-400 hover:underline"> info@moovid.tech</a>
          </p>

          <p className="mt-1 text-sm">
            ☎️ Phone:  
            <a href="tel:+62811147151" className="text-blue-400 hover:underline"> (+62) 811-147-151</a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center gap-6">
          {/* Instagram */}
          <a href="https://www.instagram.com/moovid.life/" className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
  <svg className="w-[50px] h-[50px] fill-[#312c35]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>

</svg>
</a>


          {/* TikTok */}
          <a href="https://www.tiktok.com/@moovidlife" className="text-gray-900 transition hover:text-gray-600 [&>svg]:h-7 [&>svg]:w-7">
          <svg className="w-[50px] h-[50px] fill-[#312c35]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>

</svg>
          </a>

          {/* YouTube */}
          <a href="https://www.youtube.com/@Moovidlife" className="text-red-500 transition hover:text-red-700 [&>svg]:h-7 [&>svg]:w-7">

          <svg className="w-[50px] h-[50px] fill-[#ff0000]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>

</svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4">
          <p className="text-center text-sm text-gray-500">
            Moovid &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
