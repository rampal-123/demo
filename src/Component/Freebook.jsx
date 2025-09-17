import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from './Cards';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function Freebook() {
    const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
            const res = await axios.get("http://localhost:4002/book");
            console.log(res.data)
            const data=res.data.filter((data)=>data.category==="Free")
            setBook(data);
      }
      catch(error){
        console.log(error);

      }
    }
    getBook();
  },[])
    
    console.log(book);
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='max-w-screen-1xl container mx-auto md:px-0 px-3'>
        <div>
            <h1 className='font-semibold text-xl pb-2 '>Free Offerd Course</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias magnam hic ea aliquid fuga accusantium nesciunt repellat illo dicta corrupti, nostrum quia laudantium. Pariatur, quos. Magni veniam consectetur ratione.</p>
  
        </div>
          
    <div>
      <Slider {...settings}>
         {
          book.map((item)=>(
            <Cards item={item} key={item.id}/>
         ))
         }
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook