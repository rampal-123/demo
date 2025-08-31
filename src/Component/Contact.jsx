import React from 'react'

function Contact() {
  
  return (
   <> 
      <div className='flex h-screen items-center justify-center'>
        <div className='border-2 py-2 px-2'>
      <form>
    
    <label for="name">Full Name</label><br/>
    <input type="text" id="name" name="name" placeholder="Your name"  />
    <br/><br/>


    <label for="email">Email</label><br/>
    <input type="email" id="email" name="email" placeholder="you@example.com" required />
    <br/><br/>


    <label for="phone">Phone</label><br/>
    <input
      type="tel"
      id="phone"
      name="phone"
      placeholder="+91 98765 43210"
      pattern="[\d+\-\s()]{7,20}"
      />
    <br/><br/>


    <label for="message">Message</label><br/>
    <textarea id="message" name="message" rows="5" placeholder="How can we help?" required></textarea>
    <br/><br/>

    <button type="submit">Send Message</button>
  </form>
  </div>
  </div>
   
   </>
  )
}

export default Contact