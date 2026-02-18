import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'

const Home = () => {
  const [isleftsidebaropen, setisleftsidebaropen] = useState(false)
  const [isrightsidebaropen, setisrightsidebaropen] = useState(false)
  return (
    <div className="min-h-screen">
      <Navbar setisleftsidebaropen={setisleftsidebaropen} setisrightsidebaropen={setisrightsidebaropen} />
      <div className="grid grid-cols-12 pt-[12vh]">
        <div className="col-span-3 border-r ">
          <Leftbar
            isleftsidebaropen={isleftsidebaropen}
            setisleftsidebaropen={setisleftsidebaropen}
          />
        </div>
        <div className=" col-span-12 lg:col-span-6">
          <Feed />
        </div>
        <div className="col-span-3 border-l">
          <Rightbar isrightsidebaropen={isrightsidebaropen} 
          setisrightsidebaropen={setisrightsidebaropen}/>
        </div>
      </div>
    </div>
  )
}

export default Home
