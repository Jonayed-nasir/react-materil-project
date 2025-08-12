function Video() {
  return (
    <section className='py-12 md:py-16 px-6 md:px-12 bg-gray-50'>
      <div className='container mx-auto flex justify-center flex-col gap-8'>
        <h1 className='text-center text-2xl md:text-5xl font-semibold mt-12'>
          Use illustrations in UI design
        </h1>

        {/* Parent container with aspect ratio */}
        <div className='relative w-full pt-[56.25%] max-w-8xl mx-auto rounded-4xl shadow-2xl overflow-hidden'>
          {/* iframe positioned absolutely */}
          <iframe
            className='absolute top-0 left-0 w-full h-full rounded-4xl object-cover'
            src="https://www.youtube.com/embed/xCYGYag793o?si=1UFC-ryquBIpcrb9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Video
