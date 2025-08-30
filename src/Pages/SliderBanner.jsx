// src/components/SliderBanner.js
import React, { useEffect, useState } from "react";
import slider1 from "../Assets/Images/slider1.png";
import slider2 from "../Assets/Images/slider2.png";
import slider3 from "../Assets/Images/slider3.png";
import slider4 from "../Assets/Images/slider4.png";
import slider5 from "../Assets/Images/slider5.png";

function SliderBanner() {
  const sliderImages = [slider1, slider2, slider3, slider4, slider5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full flex-shrink-0 object-cover h-[200px] sm:h-[300px] md:h-[500px] lg:h-[600px]"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-60"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-60"
      >
        ›
      </button> */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#272727]  bg-opacity-70 text-black text-4xl w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-90 hover:scale-110 transition-all duration-300"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#272727]   bg-opacity-70 text-black text-4xl w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-90 hover:scale-110 transition-all duration-300"
      >
        ›
      </button>
    </div>
  );
}

export default SliderBanner;
