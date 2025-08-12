import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from '@mui/material';

function Presentation() {
  const cardData = [
    {
      source: 'public/Group67.png',
      heading: 'Managment',
      text: 'Software platform for running your new internet business',
    },
    {
      source: 'public/Group32.png',
      heading: 'Entertainment',
      text: 'Software platform for running your new internet business',
    },
    {
      source: 'public/Group4.png',
      heading: 'Marketing',
      text: 'Software platform for running your new internet business',
    },
    {
      source: 'public/Group41.png',
      heading: 'References',
      text: 'Software platform for running your new internet business',
    },
  ];

  const socialLisns = [
    { Link: 'public/facebook.png' },
    { Link: 'public/vector.png' },
    { Link: 'public/instagram1.png' },
  ];

  return (
    <section className="bg-gray-50">
      <div className="container flex flex-col lg:flex-row items-center gap-20 py-12 px-6 lg:px-12 md:px-16 max-w-[1400px] mx-auto">
        {/* left section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-4 gap-4 bg-white rounded-xl hover:bg-gray-100 transition-all text-center"
            >
              <div className="flex items-center justify-center">
                <img src={card.source} alt="" />
              </div>

              <div>
                <h3 className="text-black text-lg md:text-xl font-semibold">
                  {card.heading}
                </h3>
                <p className="text-[#00000080] text-sm md:text-base mt-2 max-w-52 text-center mx-auto">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* right section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold max-w-md mx-auto lg:mx-0">
            The quickest way to create modern presentation
          </h1>
          <p
            className="text-[#00000080] max-w-md md:max-0 text-center lg:text-left text-sm md:text-base
          "
          >
            Best software platform for running an internet business. We build
            the most powerful and flexible tools for internet commerce.
          </p>
          <button className="bg-[#5F62E226] hover:bg-[#5456db59] text-[#5F62E2] py-3 lg:px-6 px-2 font-semibold transition duration-300 rounded-md cursor-pointer">
            Explore All
            <ArrowForwardIcon sx={{ fontSize: 24 }} />
          </button>

          <p className="text-[#000000]/50 !mt-[85px]">Follow us</p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6 items-center">
            {socialLisns.map((social) => (
              <a
                className="bg-[#C4C4C4] p-3 rounded-full hover:bg-gray-400 transition-all duration-300"
                href="#"
              >
                <img className="w-[30px] h-[30px]" src={social.Link} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
