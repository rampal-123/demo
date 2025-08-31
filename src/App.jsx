import React from 'react'
import Home from './home/Home'

import { Route, Routes } from 'react-router-dom'
import Course from './Component/Course'
import Courses from './Course/Courses'
import Singup from './Component/Singup'

import Contactus from './contact/Contactus'


function App() {
  return (
  <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Course' element={<Courses/>}/>
     <Route path='Contact' element={<Contactus/>}/>
    <Route path='/singup' element={<Singup/>}/>
   </Routes>
  </> 
  )
}

export default App