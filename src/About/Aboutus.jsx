import React from 'react'
import Navbar from '../Component/Navbar'
import About from '../Component/About'
import Footer from '../Component/Footer'

function aboutus() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <About/>
      </div>
      <Footer/>
    </>
  )
}

export default aboutus