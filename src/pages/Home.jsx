import React from 'react'
import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import { useState } from 'react';
const Home = () => {
  const [isleftsidebaropen, setisleftsidebaropen] = useState(false)
  return (
    <div>
      <Navbar setisleftsidebaropen={setisleftsidebaropen}/>
      <div className='flex'>
        <Leftbar 
        isleftsidebaropen={isleftsidebaropen}
        setisleftsidebaropen={setisleftsidebaropen}
        />
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Home
