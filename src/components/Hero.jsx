import React from 'react';

function Hero() {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-12 lg:px-16 px-10 container mx-auto max-w-[1400px] h-[100vh] ">
        <div className="flex-1 flex flex-col items-start gap-8">
          <h1 className="lg:text-6xl text-4xl font-bold max-w-lg">
            Simply explained with illustrations
          </h1>
          <p className="text-[#00000080] text-lg lg:text-xl max-w-md">
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-[#5F62E2] hover:bg-blue-500 text-white py-3 lg:px-6 px-2 font-semibold transition duration-300 rounded-md cursor-pointer">
              Get Started
            </button>
            <button className="bg-[#5F62E226] hover:bg-[#5456db59] text-[#5F62E2] py-3 lg:px-6 px-2 font-semibold transition duration-300 rounded-md cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img className="w-full md:max-w-lg h-auto" src="/public/rocket.png" />
        </div>
      </section>
    </>
  );
}

export default Hero;
