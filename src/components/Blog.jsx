import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Blog() {
  const CadData = [
    {
      id: 1,
      imgSrc: 'public/Group-41.png',
      title: 'Make myspace your best designed space',
      description:
        'A lot of different components that will help you create the perfect look for your project',
      buttonLavel: 'Design',
    },
    {
      id: 2,
      imgSrc: 'public/Group-39.png',
      title: 'My company culture has changed today',
      description:
        'A lot of different components that will help you create the perfect look for your project',
      buttonLavel: '3D illustrations',
    },
    {
      id: 3,
      imgSrc: 'public/Group-40.png',
      title: 'Professionals in craft! All products were super great',
      description:
        'A lot of different components that will help you create the perfect look for your project',
      buttonLavel: 'Development',
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto py-16 px-6">
      <div className="flex justify-between sm:flex-row flex-col items-center gap-5">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center md:text-left">
            Get more from our blog
          </h1>
          <p className="text-[#000000]/50 mt-3 max-w-sm text-[1.1rem] text-center md:text-left">
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
        </div>
        <div>
          <button className="bg-indigo-200 hover:bg-[#5F62E2] hover:text-white text-[#5F62E2] py-3 lg:px-6 px-2 font-semibold transition duration-300 rounded-md cursor-pointer">
            Explore All
            <ArrowForwardIcon className="ml-3" sx={{ fontSize: 24 }} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !p-4">
        {CadData.map((card) => (
          <div
            key={card.id}
            className="bg-gray-100 rounded-xl cursor-pointer overflow-hidden hover:shadow-xl transition duration-300 mt-7 "
          >
            <img className='w-full h-48 object-cover' src={card.imgSrc} alt="" />

            <div className='p-6 '>
              <h3 className='text-xl md:text-2xl  font-semibold mb-2'>{card.title}</h3>
              <p className=' text-[#000000]/50 mb-4'>{card.description}</p>
              <button className='py-2 px-4 bg-green-200 rounded-2xl cursor-pointer hover:bg-green-300 transition-all duration-300'>{card.buttonLavel}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
