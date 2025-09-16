import React from 'react'
import axios from "axios"
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
            const res = await axios.get("http://localhost:4002/book");
            console.log(res.data)
            setBook(res.data)
      }
      catch(error){
        console.log(error);

      }
    }
    getBook();
  },[])
  return (
    <>
      <div className='max-w-screen-1xl container mx-auto md:px-0 px-3 '>
         <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span> </h1>
            <p className='mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, modi. Quasi ab consequatur asperiores sed molestias, autem voluptas soluta tempore odit maiores eius dolorum iure doloribus pariatur quam? Corporis, adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis perspiciatis recusandae aut quod. Nam sapiente vero ex tempore, provident culpa cupiditate inventore? Deleniti, ratione. Ut necessitatibus explicabo earum illo.</p>
           <Link to={"/"}>
           <button className=' mt-6 bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-300'>Back</button>
         
           
           </Link>
           </div>
         <div className='mt-10 grid grid-cols-1 md:grid-cols-3'>
           {
            book.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
           }
         </div>
      </div>
    </>
  )
}

export default Course