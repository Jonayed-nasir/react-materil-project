import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Time() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16 gap-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-7  ">
        {/* left side */}
        <div className="flex-1 items-start">
          <img className="w-full h-auto max-w-lg" src="/public/Group17.png" />
        </div>

        {/* right side */}
        <div className="flex flex-1 flex-col gap-8 ">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg">
            Make more time for the work
          </h1>
          <p className="md:text-lg text-black">
            
            <CheckCircleOutlineIcon className="text-[#2AB691] me-2" />
            <span>Many ways to use illustrations in design</span>
          </p>
          <p className="md:text-lg text-black">
            
            <CheckCircleOutlineIcon className="text-[#2AB691] me-2" />
            <span>Many ways to use illustrations in design</span>
          </p>
          <p className="md:text-lg text-black">
            
            <CheckCircleOutlineIcon className="text-[#2AB691] me-2" />
            <span>Many ways to use illustrations in design</span>
          </p>

          <div className="flex flex-wrap  mb-10">
            <button className="bg-indigo-200 hover:bg-[#5F62E2] hover:text-white text-[#5F62E2] py-3 lg:px-6 px-2 font-semibold transition duration-300 rounded-md cursor-pointer">
             Learn more
              <ArrowForwardIcon className="ml-3" sx={{ fontSize: 24 }} />
            </button>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className="flex flex-col lg:flex-row items-center justify-between gap-7  mt-24">
        {/* left side */}

        <div className="flex flex-1 flex-col gap-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg">
            Make more time for the work
          </h1>
          <p className="md:text-lg text-black">
            {' '}
            <CheckCircleOutlineIcon className="text-[#2AB691] me-2 " />
            <span>Many ways to use illustrations in design</span>
          </p>
          <p className="md:text-lg text-black">
            
            <CheckCircleOutlineIcon className="text-[#2AB691] me-2" />
            <span>Many ways to use illustrations in design</span>
          </p>
          <p className="md:text-lg text-black">
            
            <CheckCircleOutlineIcon className="text-[#2AB691] me-2" />
            <span>Many ways to use illustrations in design</span>
          </p>

          <div className="flex flex-wrap  mb-10">
            <button className="bg-indigo-200 hover:bg-[#5F62E2] hover:text-white text-[#5F62E2] py-3 lg:px-6 px-2 font-semibold transition duration-300 rounded-md cursor-pointer">
              Learn more
              <ArrowForwardIcon className="ml-3" sx={{ fontSize: 24 }} />
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 items-start">
          <img className="w-full h-auto max-w-lg" src="/public/Group22.png" />
        </div>
      </div>
    </section>
  );
}

export default Time;
