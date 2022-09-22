import React from 'react'

function Hero() {

  return (
    <div className='max-w-[1540px] mx-auto p-4' data-aos='zoom-in-dowm'>
      <div className='max-h-[500px] relative'>
        {/*Overlay*/}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center' >
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' data-aos='fade-right' data-aos-duration='800'>
            The <span className='text-orange-500'>
            Best</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' data-aos='fade-up' data-aos-duration='800'>
            <span className='text-orange-500'>Foods</span> Delivered
          </h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
      </div>
    </div>
  )
}


export default Hero