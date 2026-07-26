import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import { Link } from 'react-router-dom'
const Home = ({islogoutclicked, setislogoutclicked}) => {
  const [isleftsidebaropen, setisleftsidebaropen] = useState(false)
  const [isrightsidebaropen, setisrightsidebaropen] = useState(false)
  return (
    <div className="min-h-screen">
        <div className="w-full h-[30%] mx-auto my-auto">
      <Navbar setisleftsidebaropen={setisleftsidebaropen} setisrightsidebaropen={setisrightsidebaropen} />
      <div className="grid grid-cols-12 pt-[12vh]">
        <div className="col-span-3 border-r ">
          <Leftbar
          setislogoutclicked={setislogoutclicked}
          islogoutclicked={islogoutclicked}
            isleftsidebaropen={isleftsidebaropen}
            setisleftsidebaropen={setisleftsidebaropen}
          />
        </div>
        <div className=" col-span-12 sm:col-span-5 lg:col-span-6">
          <Feed />
        </div>
        <div className="col-span-3 border-l">
          <Rightbar isrightsidebaropen={isrightsidebaropen} 
          setisrightsidebaropen={setisrightsidebaropen}/>
        </div>
      </div>
      </div>
      {islogoutclicked && (
        <div className='w-full h-screen fixed top-0 left-0  bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
            <h2 className='text-xl font-bold mb-4'>Are you sure you want to log out?</h2>
            <div className='flex justify-center gap-4'>
              <button onClick={() => setislogoutclicked(false)} className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'>Cancel</button>
              <Link to="/login">
              <button onClick={() => setislogoutclicked(false)} className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>Log Out</button>   
              </Link>
            </div>
          </div>
        </div>
      ) }
      </div>
  )
}

export default Home
