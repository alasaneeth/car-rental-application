import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
            <h2 className='text-[40px] md:text-[60px] font-bold'>Premium Car rental in your area</h2>
            <h2 className='text-[20px] text-gray-500 pr-20 md:text-[30px]'>Book the selected car effortlessly, pay for driving oly
                Book the car now
            </h2>
            <button className='p-2 mt-5 bg-blue-500 text-white p4 rounded-full hover:scale-105 transition-all '>Explore car now</button>
      </div>
      <div>
        <Image src="/hero.webp" alt='hero'
        width={400}
        height={500} 
        className='w-full object-cover'
        />
      </div>
    </div>
  )
}

export default Hero
