import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile'; 
import { useState } from 'react';
const App = () => {
  const [islogoutclicked, setislogoutclicked] = useState(false);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home islogoutclicked={islogoutclicked} setislogoutclicked={setislogoutclicked}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile/:id' element={<Profile islogoutclicked={islogoutclicked} setislogoutclicked={setislogoutclicked}/>}/>
        </Routes>
    </div>
  )
}

export default App
