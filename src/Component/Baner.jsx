import React from 'react'
import bookImage from '../assets/books.jpg';

<img src={bookImage} alt="Book" />


function Baner() {
    return (
        <>
            <div className='max-w-screen-1xl container mx-auto md:px-0 px-3 flex flex-col md:flex-row my-12'>
                <div className='w-full mt-5 md:mt-20 md:w-1/2 order-2 md:order-1'>

                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold'> Hello ,Welcome here to leran something <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p className='text-xl' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, maiores deserunt? Tempora accusantium incidunt autem dolores? Accusantium assumenda delectus quod soluta animi,</p>

                        <label className="input validator">
                            {/* <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg> */}
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                        {/* <div className="validator-hint hidden">Enter valid email address</div> */}
                    </div>
                    <button className="btn btn-secondary mt-[10px] md:mt-2.5">Secondary</button>

                </div>
{/* ========================================RIGHT SIDE PAGE=============================================================== */}
                <div className='w-full  md:w-1/2 order-1'>
                <img src={bookImage} className='h-80 w-180 mt-10'></img>
                
                </div>
            </div>
        </>
    )
}

export default Baner