import React from 'react'
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className='w-full bg-black h-[15%] flex justify-between'>
        <h1 className='text-bold italic m-2 text-white text-2xl hidden sm:block'>
            SocialApp
        </h1>
        <h1 className='flex shadow-2xl justify-center w-full my-1'>
          <CiSearch className='text-2xl text-bold my-2 text-white' />
          <input type="text" placeholder='Search for contents...' className='w-[70%] sm:w-[50%] outline-1 text-xl rounded-md p-1 text-white outline-white' />
        </h1>
    </div>
  )
}

export default Navbar
