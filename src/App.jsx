import React from 'react'
import Home from './home/Home'

import { Route, Routes } from 'react-router-dom'

import Courses from './Course/Courses'
import Singup from './Component/Singup'
import Aboutus from './About/Aboutus'
import Contactus from './contact/Contactus'



function App() {
  return (
  <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Course' element={<Courses/>}/>
     <Route path='/Contact' element={<Contactus/>}/>
    <Route path='/About' element={<Aboutus/>}/>
    <Route path='/singup' element={<Singup/>}/>
   </Routes>
  </> 
  )
}

export default App