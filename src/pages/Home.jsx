import React from 'react'
import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Home
