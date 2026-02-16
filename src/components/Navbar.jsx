import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMoonOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";
const Navbar = ({setisleftsidebaropen}) => {
  const [Darkmode, setDarkmode] = useState(false)
  return (
    <div className='w-full sticky mt-0 bg-black h-[15%] flex justify-between'>
      <Link to="/">
        <h1 className='text-bold italic my-2 mx-1 text-white text-2xl hidden sm:block'>
            SocialApp
        </h1>
        </Link>
        <div className='flex justify-center px-2 ml-1 sm:ml-2 my-1'>
          <Link to="/">
          <FaHome className='text-white bold my-2 mx-2 sm:mx-4 text-2xl'/>
          </Link>
          {Darkmode ? <MdOutlineWbSunny onClick={()=> setDarkmode(false)} className='text-white hidden sm:block bold my-2 text-2xl'/>:
           <IoMoonOutline onClick={()=> setDarkmode(true)} className='text-white hidden sm:block bold my-2 text-2xl'/>
            }
          <IoIosMenu onClick={()=> setisleftsidebaropen(prev => !prev)} className='text-white bold my-2 mx-2 sm:mx-4 text-2xl sm:hidden'/>
          </div>
        <h1 className='flex shadow-2xl mx-2 md:justify-center sm:mx-4 w-full my-1'>
          <CiSearch className='text-2xl text-bold my-2 text-white' />
          <input type="text" placeholder='Search for contents...' className='w-[70%] sm:w-[60%] outline-1 text-xl rounded-md p-1 text-white outline-white' />
          <button className='bg-blue-500 hidden sm:block w-fit mx-2 text-white my-1 px-1 rounded-xl text-xl sm:text-2xl'>Search</button>
        </h1>
                <div className='flex justify-center mr-1 sm:mr-2 my-1'>
          <CiBellOn className='text-white bold my-2 mx-2 sm:mx-4 text-2xl'/>
          <CgProfile className='text-blue-400 bold my-2 text-2xl'/>
          </div>
    </div>
  )
}

export default Navbar
