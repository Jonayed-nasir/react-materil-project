import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Slider() {
  const slides = [
    {
      id: 1,
      heading: 'Make more time for the work that matters most',
      description: 'Best software platform for running an internet business.',
      image: 'public/Group35.png',
    },
    {
      id: 2,
      heading: 'bild more time for the work that matters most',
      description: 'Best software platform for running an internet business.',
      image: 'public/undraw_warnings_agxg.svg',
    },
    {
      id: 3,
      heading: 'Lorem ipsum dolor, sit amet consectetur ',
      description: 'Best software platform for running an internet business.',
      image: 'public/undraw_to-do-list_o3jf.svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlides = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlides = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { heading, description, image } = slides[currentIndex];

  return (
    <section className="max-w-[1400px] py-24 px-6 md:px-12 mx-auto ">
      <div className="flex flex-col justify-between md:flex-row items-center gap-20">
        {/* left section */}
        <div className="flex flex-col w-full md:w-1/2 justify-between space-y-6">
          <img className="w-16 md:w-24 mb-4" src="/public/Logo1.png" alt="" />
          <h1 className="text-2xl md:text-5xl text-black font-bold max-w-md">
            {heading}
          </h1>
          <p className="text-[#000000]/50 max-w-sm text-[20px]">
            {description}
          </p>
          <div className="flex items-center space-x-4 mt-7">
            <button
              onClick={prevSlides}
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition cursor-pointer"
            >
              <ArrowBackIosNewIcon className="text-black" />
            </button>

            <button
              onClick={nextSlides}
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition cursor-pointer"
            >
              <ArrowForwardIosIcon className="text-black" />
            </button>
          </div>
        </div>

        {/* right section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full md:w-[65%] object-cover" src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Slider;
