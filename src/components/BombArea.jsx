import React from 'react';

function BombArea() {
  return (
    <section className="w-full h-auto mb-5 bg-[#5F62E2]">
      <div className="flex flex-col lg:flex-row items-center px-3 justify-between mt-24 max-w-[1400px] mx-auto">
        <div className="flex-1 py-4 flex flex-col gap-6">
          <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mt-5 text-center lg:text-start">
            The quickest way to create awesome presentation
          </h1>
          <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
            <button className="bg-[#2AB691] hover:bg-blue-500 text-white py-3 lg:px-6 px-2 font-semibold transition duration-300 rounded-md cursor-pointer">
              Get Started
            </button>
            <button className="bg-[#7779e6] hover:bg-[#4069ff] text-white py-3 lg:px-6 px-2 font-semibold transition duration-300 rounded-md cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 ">
          <img
            className="w-full h-auto max-w-lg "
            src="/public/bomb1.png"
          />
        </div>
      </div>
    </section>
  );
}

export default BombArea;
