import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
  return (
    <div className='relative flex flex-col md:flex-row bg-gray-50 overflow-hidden'>
      {/* Hero left side */}
      <div className='w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16'>
        <div className='max-w-md space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-0.5 bg-[#e91e63]'></div>
            <p className='font-medium text-#e91e63 text-sm uppercase tracking-wider'>Our Bestsellers</p>
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight'>
            Latest <span className='text-[#e91e63]'>Arrivals</span>
          </h1>
          <p className='text-gray-600 text-lg'>
            Discover our newest collection of premium products designed for your lifestyle.
          </p>
          <button className='mt-6 px-8 py-3 bg-[#e91e63] text-white font-medium rounded-none hover:bg-black transition duration-300'>
            Shop Now
            <span className='ml-2'>→</span>
          </button>
        </div>
      </div>
      
      {/* Hero right side */}
      <div className='w-full md:w-1/2'>
        <img 
          className='w-full h-full object-cover' 
          src={assets.hero_img} 
          alt="Latest arrivals showcase" 
        />
      </div>
    </div>
  )
}

export default Hero