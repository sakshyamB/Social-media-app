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
      {islogoutclicked? <div className='w-full h-[30%] mx-auto my-auto'>
        <h1 className='text-2xl'> Are you sure you want to log out? </h1>
        <button onClick={()=> setislogoutclicked(false)} className='bg-red-500 text-white px-4 py-2 rounded'>No</button>
        <Link to="/login">
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Yes</button>
        </Link>
        </div> :
        <div className="w-full h-[30%] mx-auto my-auto">
      <Navbar setisleftsidebaropen={setisleftsidebaropen} setisrightsidebaropen={setisrightsidebaropen} />
      <div className="grid grid-cols-12 pt-[12vh]">
        <div className="col-span-3 border-r ">
          <Leftbar
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
}
    </div>
  )
}

export default Home
