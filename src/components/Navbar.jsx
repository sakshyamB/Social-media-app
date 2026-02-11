import React from 'react'
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className='w-full bg-black h-[15%] flex justify-between'>
        <h1 className='text-bold italic m-2 text-white text-2xl hidden sm:block'>
            SocialApp
        </h1>
        <div>
          <CiSearch className='text-white w-2 h-2 absolute mx-5 m-3'/>
      </div>

    </div>
  )
}

export default Navbar
