import React from 'react'
import Navbar from '../Component/Navbar'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'

function Contactus() {
  return (
   <>
    <Navbar/>
    <div className='min-h-screen'>
      <Contact/>

    </div>
    <Footer/>
   </>
  )
}

export default Contactus