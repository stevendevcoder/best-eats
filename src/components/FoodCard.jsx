import React from 'react'

function FoodCard({name, image, price}) {
  return (
    <div 
      lassName='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer' 
      data-aos='fade-right'
    >
      <img 
        src={image}
        alt={name}
        className='w-full h-[200px] object-cover rounded-t-lg'
      />
      <div className='flex justify-between px-2 py-4'>
        <p className='font-bold'>{name}</p>
        <p>
          <span className='bg-orange-500 text-white px-4 py-1 rounded-full'>
            {price}
          </span>
        </p>
      </div>
    </div>
  )
}

export default FoodCard