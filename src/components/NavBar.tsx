import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-5 px-5 shadow-sm border-b-[1px]'>
      <Image src='/logo.jpg' 
      alt='logo'
      width={80}
      height={100} />
      <div className='hidden md:flex gap-5'>
        <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full 
        hover:text-white'>Home</h2>
        <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full 
        hover:text-white'>History</h2>
        <h2 className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full 
        hover:text-white'>Cotact Us</h2>
      </div>
      <UserButton/>
    </div>
  )
}

export default NavBar
