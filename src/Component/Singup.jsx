import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm} from "react-hook-form"
function Singup() {
      const {
        register,
        handleSubmit,
       formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
        <div  className="shadow-black  p-5 ">
          <div className="">
           <form onSubmit={handleSubmit(onSubmit)} method="dailog">
               {/* if there is a button in form, it will close the modal */}
          <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute mx-55 ">✕</Link>
           
        <h3 className="font-bold text-lg">Signup</h3>
        {/* email */}
        <div>
            <span>Name</span><br></br>
            <input type="text" 
            placeholder='Enter Your name' 
            className='w-50 px-3 py-1 border rounded-md outline-none' 
            {...register("name", { required: true })}
            /><br/>
            {errors.name && <span className='text-sm text-red-500'>This fill name required</span>}

        </div>
        <div>
            <span>Email</span><br></br>
            <input type="email" 
            placeholder='Enter Your email' 
            className='w-50 px-3 py-1 border rounded-md outline-none'
            {...register("email", { required: true })}
            /><br/>
            {errors.email && <span className='text-sm text-red-500'>This fill email required</span>}
        </div>
        {/* password */}
        <div>
            <span>Password</span><br></br>
            <input type="password" 
            placeholder='Enter Your password' 
            className='w-50 px-3 py-1 border rounded-md outline-none' 
            {...register("password", { required: true })}
            /><br/>
            {errors.password && <span className='text-sm text-red-500'>This fill password required</span>}
        </div>
        {/* Button */}
        <div className='flex justify-around mt-4'>
            <button className="border-0 bg-pink-600 text-white rounded-md px-1 py-1 mx-2">signup</button>
            <p>
                have account..?{""} 
                <button  className='underline text-blue-500 cursor-pointer'
                onClick={()=>document.getElementById('my_modal_3').showModal()}
                >login</button>{""}
                <Login/>
            </p>
            
        </div>
        </form>
        </div>
       </div>
    </div>
</>

  )
}

export default Singup