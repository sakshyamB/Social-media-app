import React, { useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { CiShop } from "react-icons/ci";
import { FaStopwatch } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { RiRefund2Fill } from "react-icons/ri"
import { MdOutlineHelpOutline } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Leftbar = ({ isleftsidebaropen, setisleftsidebaropen}) => {
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 768) {
        setisleftsidebaropen(true);
      } else {
        setisleftsidebaropen(false);
      }
    };

    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  },[setisleftsidebaropen]);

  return (
    <div
      className={`h-screen overflow-hidden ${
        isleftsidebaropen ? 'w-[80%] md:w-[25%]' : 'w-0'
      } border-[1px] bg-white text-50 flex-row transition-all duration-300`}
    >
      <div className='flex text-xl sm:hidden flex-row-reverse pt-2 pr-5'>
        <ImCross
          onClick={() => setisleftsidebaropen(false)}
          className='text-red-500 cursor-pointer'
        />
      </div>

      <div className='flex items-center'>
        <CgProfile className='text-blue-400 text-xl sm:text-2xl bold my-2' />
        <h1> Sakshyam Budhathoki </h1>
      </div>

      <div className='flex items-center'>
        <FaUserFriends className='text-cyan-300 text-xl sm:text-2xl bold my-2' />
        <h1> Friends </h1>
      </div>

      <div className='flex items-center'>
        <HiMiniUserGroup className='text-red-200 text-xl sm:text-2xl bold my-2' />
        <h1> Groups </h1>
      </div>

      <div className='flex items-center'>
        <CiShop className='text-purple-400 text-xl sm:text-2xl bold my-2' />
        <h1> Marketplace </h1>
      </div>

      <div className='flex items-center'>
        <FaStopwatch className='text-blue-400 text-xl sm:text-2xl bold my-2' />
        <h1> Memories </h1>
      </div>

      <div className='flex items-center'>
        <MdEventAvailable className='text-purple-400 text-xl sm:text-2xl bold my-2' />
        <h1> Events </h1>
      </div>

      <div className='flex items-center'>
        <IoGameController className='text-amber-950 text-xl sm:text-2xl bold my-2' />
        <h1> Gaming </h1>
      </div>

      <div className='flex items-center'>
        <IoMdPhotos className='text-pink-400 text-xl sm:text-2xl bold my-2' />
        <h1> Gallery </h1>
      </div>

      <div className='flex items-center'>
        <CiVideoOn className='text-pink-300 text-xl sm:text-2xl bold my-2' />
        <h1> Videos </h1>
      </div>

      <div className='flex items-center'>
        <MdOutlineHelpOutline className='text-amber-300 text-xl sm:text-2xl bold my-2' />
        <h1> Help and Support </h1>
      </div>

      <div className='flex items-center'>
        <IoMdSettings className='text-amber-300 text-xl sm:text-2xl bold my-2' />
        <h1> Settings </h1>
      </div>

      <div className='flex items-center'>
        <RiRefund2Fill className='text-green-300 text-xl sm:text-2xl bold my-2' />
        <h1> Fundraisers </h1>
      </div>

      <div className='w-full flex justify-center items-center'>
        <button className='shadow-2xl bg-gray-200 w-full border-[1px] text-xl sm:text-2xl cursor-pointer'>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Leftbar;
