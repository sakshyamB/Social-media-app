import React from 'react'
import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import Userprofile from '../components/Userprofile'
import Rightbar from '../components/Rightbar'
const Profile = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Leftbar/>
        <Userprofile/>
        <Rightbar/>
        </div>
    </div>
  )
}

export default Profile
