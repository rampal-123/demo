import React from 'react'
import { Link } from 'react-router-dom'
import { useForm} from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
   formState: { errors },
  } = useForm();
  const onSubmit = async (data) =>{ 
        const userInfo=
        {
       
        email:data.email,
        password:data.password
    }
   await axios.post("http://localhost:4002/user/login",userInfo)
    .then((res)=>
    {
        console.log(res.data)
        if(res.data)
        {
            alert("login successfuly")
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
    })
    .catch((err)=>
    {
        if(err.response){
            console.log(err);
            alert("Error:"+err.response.data.massage);
        }
    })
  }
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
               {/* if there is a button in form, it will close the modal */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
           
        <h3 className="font-bold text-lg">Login</h3>
        {/* email */}
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
            {errors.password && <span className='text-sm text-red-500'>This field Password required</span>}
        </div>
        {/* Button */}
        <div className='flex justify-around mt-4'>
            <button className="border-0 bg-pink-600 text-white rounded-md px-2 py-1">Login</button>
            <p>
                Not registered? 
                <Link to="/singup" className='underline text-blue-500 cursor-pointer'>sign up</Link>
            </p>
        </div>
        </form>
        </div>
       </dialog>
    </div>
  )
}

export default Login