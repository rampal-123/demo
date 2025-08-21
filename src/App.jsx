import React from 'react'
import Home from './home/Home'

import { Route, Routes } from 'react-router-dom'
import Course from './Component/Course'
import Courses from './Course/Courses'


function App() {
  return (
  <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Course' element={<Courses/>}/>
   </Routes>
  </> 
  )
}

export default App