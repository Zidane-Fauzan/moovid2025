import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Velocity() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-4">
      {/* Section 1: Slider with Video */}
      <Slider {...sliderSettings}>
        <div className="relative">
          {!videoPlaying ? (
            <img
              src="/video-thumbnail.jpg"
              alt="Video Thumbnail"
              className="w-full h-auto cursor-pointer"
              onClick={() => setVideoPlaying(true)}
            />
          ) : (
            <video src="/video.mp4" controls autoPlay className="w-full h-auto" />
          )}
        </div>
        {[...Array(4)].map((_, index) => (
          <div key={index}>
            <img src={`/slider${index + 1}.jpg`} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>

      {/* Section 2: Product Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">E-Bicycle</h2>
        <Slider {...sliderSettings}>
          <div>
            <img src="/bike.jpg" alt="E-Bicycle" className="w-full h-auto" />
          </div>
        </Slider>
        <ul className="mt-4">
          <li><strong>Price:</strong> Rp. 12.900.000,-</li>
          <li><strong>Specifications:</strong> 150 - 170 cm height, Electric motor</li>
        </ul>
      </div>

      {/* Section 3: Carousel with 7 Boxes */}
      <Slider {...carouselSettings} className="mt-8">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">Box {index + 1}</div>
        ))}
      </Slider>

      {/* Section 4: Grid 4 Images and Text */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="grid grid-cols-2 gap-2">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={`/grid${index + 1}.jpg`} alt={`Grid ${index + 1}`} className="w-full h-auto rounded-lg" />
          ))}
        </div>
        <p className="text-lg">Some description text next to the grid images.</p>
      </div>

      {/* Section 5: Who Are We */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div>
          <h2 className="text-xl font-bold">Who Are We?</h2>
          <p>Moovid is a startup company focused on electric micro-mobility solutions...</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <img src="/who1.jpg" alt="Who 1" className="w-full h-auto rounded-lg" />
          <img src="/who2.jpg" alt="Who 2" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
}
